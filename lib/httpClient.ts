/**
 * HTTP Client with retry logic, timeout, auth helper, and proper error handling
 * @module lib/httpClient
 */

import { clearAuthTokens, getAuthTokens, isTokenExpired, saveAuthTokens } from "@/lib/authTokens";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:8000";
const AUTH_REFRESH_PATH = "/client/v1/auth/refresh";
const TOKEN_HEADROOM_SECONDS = 30;

// ============================================================================
// Configuration
// ============================================================================

interface HttpClientConfig {
  /** Default timeout in milliseconds */
  timeout: number;
  /** Maximum retry attempts for failed requests */
  maxRetries: number;
  /** Base delay between retries in milliseconds (exponential backoff) */
  retryDelay: number;
  /** HTTP status codes that should trigger a retry */
  retryableStatuses: number[];
}

const DEFAULT_CONFIG: HttpClientConfig = {
  timeout: 30000, // 30 seconds
  maxRetries: 3,
  retryDelay: 1000, // 1 second base delay
  retryableStatuses: [408, 429, 500, 502, 503, 504],
};

// ============================================================================
// SSL Configuration (Development Only)
// ============================================================================

const isDevelopment = process.env.NODE_ENV === "development";
const isLocalhost =
  API_BASE_URL.startsWith("https://localhost") ||
  API_BASE_URL.startsWith("https://127.");

// Only disable SSL verification in development with localhost
if (isDevelopment && (isLocalhost || process.env.ALLOW_INSECURE_SSL === "true")) {
  if (typeof process !== "undefined" && process.env) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  }
}

// ============================================================================
// Types
// ============================================================================

export interface ApiError {
  status: number;
  message: string;
  details?: unknown;
  isTimeout?: boolean;
  isNetworkError?: boolean;
  isRetryable?: boolean;
}

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestOptions<TBody = unknown> extends Omit<RequestInit, "body" | "signal"> {
  /** Query string parameters */
  params?: Record<string, string | number | boolean | undefined | null>;
  /** Request body (will be JSON stringified if object) */
  body?: TBody;
  /** Request timeout in milliseconds (overrides default) */
  timeout?: number;
  /** Number of retry attempts (overrides default) */
  maxRetries?: number;
  /** AbortSignal for request cancellation */
  signal?: AbortSignal;
  /** Skip retry logic for this request */
  skipRetry?: boolean;
  /** Skip attaching Authorization header and refresh handling */
  skipAuth?: boolean;
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Build full URL with query parameters
 */
function buildUrl(path: string, params?: RequestOptions["params"]): string {
  const url = new URL(path, API_BASE_URL || "http://localhost");

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }

  if (!API_BASE_URL) {
    return `${path.startsWith("/") ? "" : "/"}${url.pathname}${url.search}`;
  }

  return url.toString();
}

/**
 * Convert body to appropriate format for fetch
 */
function serializeBody(body: unknown): BodyInit | undefined {
  if (body === undefined || body === null) return undefined;
  if (body instanceof FormData || body instanceof Blob || body instanceof ArrayBuffer) {
    return body;
  }
  if (typeof body === "string") return body;
  return JSON.stringify(body);
}

/**
 * Calculate exponential backoff delay
 */
function calculateBackoff(attempt: number, baseDelay: number): number {
  // Exponential backoff with jitter: delay * 2^attempt + random jitter
  const exponentialDelay = baseDelay * Math.pow(2, attempt);
  const jitter = Math.random() * 1000; // 0-1000ms random jitter
  return Math.min(exponentialDelay + jitter, 30000); // Max 30 seconds
}

/**
 * Attempt to refresh the access token using the stored refresh token.
 * Returns the new access token if successful.
 */
async function refreshAccessToken(): Promise<string | null> {
  const tokens = getAuthTokens();
  if (!tokens?.refreshToken) return null;

  if (isTokenExpired(tokens.refreshTokenExpiresAt, TOKEN_HEADROOM_SECONDS)) {
    clearAuthTokens();
    return null;
  }

  try {
    const res = await fetch(buildUrl(AUTH_REFRESH_PATH), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: tokens.refreshToken }),
    });

    const rawText = await res.text();
    let parsed: unknown = null;
    try {
      parsed = rawText ? JSON.parse(rawText) : null;
    } catch {
      parsed = rawText;
    }

    const success = Boolean((parsed as { success?: boolean } | null)?.success);
    const data = (parsed as { data?: { accessToken?: string | null } } | null)?.data;

    if (!res.ok || !success || !data?.accessToken) {
      clearAuthTokens();
      return null;
    }

    saveAuthTokens(data);
    return data.accessToken ?? null;
  } catch (error) {
    console.warn("[httpClient] Refresh token failed", error);
    clearAuthTokens();
    return null;
  }
}

/**
 * Get a valid access token, refreshing it if needed.
 */
async function getFreshAccessToken(): Promise<string | null> {
  const tokens = getAuthTokens();
  if (!tokens) return null;

  if (!tokens.accessToken || isTokenExpired(tokens.expiresAt, TOKEN_HEADROOM_SECONDS)) {
    return refreshAccessToken();
  }

  return tokens.accessToken;
}

/**
 * Check if error is retryable
 */
function isRetryableError(error: unknown, status?: number): boolean {
  // Network errors are retryable
  if (error instanceof TypeError && error.message.includes("fetch")) {
    return true;
  }

  // Timeout errors are retryable
  if (error instanceof DOMException && error.name === "AbortError") {
    return true;
  }

  // Check status code
  if (status && DEFAULT_CONFIG.retryableStatuses.includes(status)) {
    return true;
  }

  return false;
}

/**
 * Sleep for specified milliseconds
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ============================================================================
// Response Handler
// ============================================================================

async function handleResponse<T>(res: Response): Promise<T> {
  const contentType = res.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");

  let rawText: string;
  try {
    rawText = await res.text();
  } catch {
    rawText = "";
  }

  const parsed = (() => {
    if (!isJson) return rawText;
    try {
      return rawText ? JSON.parse(rawText) : null;
    } catch {
      return rawText;
    }
  })();

  if (!res.ok) {
    const message =
      (isJson &&
        parsed &&
        typeof parsed === "object" &&
        ("message" in parsed || "error" in parsed) &&
        ((parsed as { message?: string; error?: string }).message ||
          (parsed as { message?: string; error?: string }).error)) ||
      res.statusText ||
      "Request failed";

    const err: ApiError = {
      status: res.status,
      message,
      details: parsed ?? rawText,
      isRetryable: isRetryableError(null, res.status),
    };
    throw err;
  }

  return (parsed as T) ?? (undefined as unknown as T);
}

// ============================================================================
// Main Request Function
// ============================================================================

/**
 * Execute HTTP request with timeout, retry logic, and proper error handling
 */
export async function apiRequest<TResponse, TBody = unknown>(
  path: string,
  method: HttpMethod,
  options: RequestOptions<TBody> = {},
): Promise<TResponse> {
  const {
    params,
    body,
  timeout = DEFAULT_CONFIG.timeout,
  maxRetries = DEFAULT_CONFIG.maxRetries,
  signal: externalSignal,
  skipRetry = false,
  skipAuth = false,
  ...fetchOptions
} = options;

  const url = buildUrl(path, params);
  const headers = new Headers(fetchOptions.headers);
  const preparedBody = serializeBody(body);
  const shouldUseAuth = !skipAuth;

  // Set Content-Type for JSON bodies
  if (preparedBody && !headers.has("Content-Type") && !(body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  // Determine retry count based on method (don't retry mutations by default)
  const effectiveMaxRetries = skipRetry ? 0 : method === "GET" ? maxRetries : 0;

  let lastError: ApiError | null = null;

  for (let attempt = 0; attempt <= effectiveMaxRetries; attempt++) {
    if (shouldUseAuth) {
      const accessToken = await getFreshAccessToken();
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      } else {
        headers.delete("Authorization");
      }
    }

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    // Combine external signal with timeout signal
    const handleExternalAbort = () => controller.abort();
    externalSignal?.addEventListener("abort", handleExternalAbort);

    try {
      const res = await fetch(url, {
        ...fetchOptions,
        method,
        headers,
        body: preparedBody,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      externalSignal?.removeEventListener("abort", handleExternalAbort);

      return await handleResponse<TResponse>(res);
    } catch (error) {
      clearTimeout(timeoutId);
      externalSignal?.removeEventListener("abort", handleExternalAbort);

      // Check if aborted by external signal (not our timeout)
      if (externalSignal?.aborted) {
        const abortError: ApiError = {
          status: 0,
          message: "Request was cancelled",
          isNetworkError: true,
          isRetryable: false,
        };
        throw abortError;
      }

      // Handle timeout
      if (error instanceof DOMException && error.name === "AbortError") {
        lastError = {
          status: 408,
          message: `Request timeout after ${timeout}ms`,
          isTimeout: true,
          isRetryable: true,
        };
      }
      // Handle network errors
      else if (error instanceof TypeError) {
        lastError = {
          status: 0,
          message: error.message || "Network error",
          isNetworkError: true,
          isRetryable: true,
        };
      }
      // Handle API errors
      else if (isApiError(error)) {
        lastError = error;
      }
      // Handle unknown errors
      else {
        lastError = {
          status: 0,
          message: error instanceof Error ? error.message : "Unknown error",
          details: error,
          isRetryable: false,
        };
      }

      // Check if we should retry
      const shouldRetry =
        attempt < effectiveMaxRetries &&
        lastError.isRetryable !== false;

      if (shouldRetry) {
        const delay = calculateBackoff(attempt, DEFAULT_CONFIG.retryDelay);
        console.warn(
          `[httpClient] Request failed (attempt ${attempt + 1}/${effectiveMaxRetries + 1}), ` +
          `retrying in ${Math.round(delay)}ms...`,
          { url, error: lastError.message }
        );
        await sleep(delay);
        continue;
      }

      // No more retries, throw the error
      throw lastError;
    }
  }

  // Should never reach here, but TypeScript needs this
  throw lastError ?? new Error("Request failed");
}

/**
 * Type guard for ApiError
 */
function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "message" in error
  );
}

// ============================================================================
// Convenience Methods
// ============================================================================

/**
 * GET request
 */
export function apiGet<TResponse>(
  path: string,
  options?: Omit<RequestOptions, "body">,
): Promise<TResponse> {
  return apiRequest<TResponse>(path, "GET", options);
}

/**
 * POST request
 */
export function apiPost<TResponse, TBody = unknown>(
  path: string,
  body?: TBody,
  options?: Omit<RequestOptions<TBody>, "body">,
): Promise<TResponse> {
  return apiRequest<TResponse, TBody>(path, "POST", { ...options, body });
}

/**
 * PUT request
 */
export function apiPut<TResponse, TBody = unknown>(
  path: string,
  body?: TBody,
  options?: Omit<RequestOptions<TBody>, "body">,
): Promise<TResponse> {
  return apiRequest<TResponse, TBody>(path, "PUT", { ...options, body });
}

/**
 * PATCH request
 */
export function apiPatch<TResponse, TBody = unknown>(
  path: string,
  body?: TBody,
  options?: Omit<RequestOptions<TBody>, "body">,
): Promise<TResponse> {
  return apiRequest<TResponse, TBody>(path, "PATCH", { ...options, body });
}

/**
 * DELETE request
 */
export function apiDelete<TResponse>(
  path: string,
  options?: Omit<RequestOptions, "body">,
): Promise<TResponse> {
  return apiRequest<TResponse>(path, "DELETE", options);
}

// ============================================================================
// Request Cancellation Helper
// ============================================================================

/**
 * Create a cancellable request controller
 * @example
 * const controller = createRequestController();
 * apiGet('/api/data', { signal: controller.signal });
 * // Later: controller.cancel();
 */
export function createRequestController() {
  const controller = new AbortController();
  return {
    signal: controller.signal,
    cancel: () => controller.abort(),
    isCancelled: () => controller.signal.aborted,
  };
}
