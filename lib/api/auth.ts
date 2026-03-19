import { clearAuthTokens, saveAuthTokens } from "@/lib/authTokens";
import { apiGet, apiPost, apiPut } from "@/lib/httpClient";

export interface LoginRequest {
  userName: string;
  password: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface ApiErrorResponse {
  code?: string | null;
  message?: string | null;
  details?: Record<string, string[]> | null;
}

export interface AuthResult {
  success?: boolean;
  accessToken?: string | null;
  refreshToken?: string | null;
  expiresAt?: string | null;
  refreshTokenExpiresAt?: string | null;
  userName?: string | null;
  role?: string | null;
  errorCode?: string | null;
  errorMessage?: string | null;
}

export interface AuthResultApiResponse {
  success: boolean;
  data: AuthResult | null;
  error: ApiErrorResponse | null;
  traceId: string | null;
}

// Register types based on swagger_client_v6.json
export interface RegisterCustomerRequest {
  username: string;
  password: string;
  name: string; // fullName
  email: string;
  sex?: number | null; // 0=Male, 1=Female, 2=Other
  company?: string | null;
  address?: string | null;
  city?: string | null;
  country?: string | null;
  phone?: string | null;
}

export interface RegisterCustomerResult {
  success: boolean;
  customerId?: number | null;
  errorCode?: string | null;
  errorMessage?: string | null;
}

export interface RegisterCustomerResultApiResponse {
  success: boolean;
  data: RegisterCustomerResult | null;
  error: ApiErrorResponse | null;
  traceId: string | null;
}

// Customer Profile types based on swagger_client_v6.json
export interface CustomerProfileResponse {
  id: number;
  username: string | null;
  name: string | null;
  email: string | null;
  sex: number | null;
  company: string | null;
  address: string | null;
  city: string | null;
  country: string | null;
  phone: string | null;
  fax: string | null;
  website: string | null;
  receiveNewProduct: number | null;
  receiveNewSpecial: number | null;
  status: string | null;
  point: number;
  saveMoney: number;
  dateAdded: string | null;
}

export interface CustomerProfileResponseApiResponse {
  success: boolean;
  data: CustomerProfileResponse | null;
  error: ApiErrorResponse | null;
  traceId: string | null;
}

const LOGIN_URL = "/client/v1/auth/login";
const REFRESH_URL = "/client/v1/auth/refresh";
const REGISTER_URL = "/client/v1/auth/register";
const PROFILE_URL = "/client/v1/auth/me";
const CHANGE_PASSWORD_URL = "/client/v1/auth/change-password";

// Change Password types
export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ChangePasswordApiResponse {
  success: boolean;
  data: unknown;
  error: ApiErrorResponse | null;
  traceId: string | null;
}

// Update Profile types
export interface UpdateProfileRequest {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  company?: string | null;
  sex?: number | null;
  address?: string | null;
  city?: string | null;
  country?: string | null;
  fax?: string | null;
  website?: string | null;
}

export interface UpdateProfileApiResponse {
  success: boolean;
  data: unknown;
  error: ApiErrorResponse | null;
  traceId: string | null;
}

export async function login(request: LoginRequest): Promise<AuthResultApiResponse> {
  const response = await apiPost<AuthResultApiResponse>(LOGIN_URL, request, {
    skipRetry: true,
    skipAuth: true,
  });

  if (response.success && response.data) {
    saveAuthTokens(response.data);
  } else {
    clearAuthTokens();
  }

  return response;
}

export async function refreshToken(request: RefreshTokenRequest): Promise<AuthResultApiResponse> {
  const response = await apiPost<AuthResultApiResponse>(REFRESH_URL, request, {
    skipRetry: true,
    skipAuth: true,
  });

  if (response.success && response.data) {
    saveAuthTokens(response.data);
  } else {
    clearAuthTokens();
  }

  return response;
}

export async function register(
  request: RegisterCustomerRequest
): Promise<RegisterCustomerResultApiResponse> {
  return apiPost<RegisterCustomerResultApiResponse>(REGISTER_URL, request, {
    skipAuth: true,
  });
}

export async function getProfile(): Promise<CustomerProfileResponse> {
  const response = await apiGet<CustomerProfileResponseApiResponse>(PROFILE_URL);

  if (!response.success || !response.data) {
    throw new Error(response.error?.message || "Không thể tải thông tin tài khoản.");
  }

  return response.data;
}

export async function changePassword(
  request: ChangePasswordRequest
): Promise<ChangePasswordApiResponse> {
  return apiPost<ChangePasswordApiResponse>(CHANGE_PASSWORD_URL, request, {
    skipRetry: true,
  });
}

export async function updateProfile(
  request: UpdateProfileRequest
): Promise<UpdateProfileApiResponse> {
  return apiPut<UpdateProfileApiResponse>(PROFILE_URL, request);
}
