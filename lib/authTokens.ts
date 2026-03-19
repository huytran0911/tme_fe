const STORAGE_KEY = "tme.auth.tokens";

export interface AuthTokensPayload {
  accessToken?: string | null;
  refreshToken?: string | null;
  expiresAt?: string | null;
  refreshTokenExpiresAt?: string | null;
  userName?: string | null;
  role?: string | null;
}

export interface StoredAuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: string | null;
  refreshTokenExpiresAt: string | null;
  userName: string | null;
  role: string | null;
}

const EMPTY_TOKENS: StoredAuthTokens = {
  accessToken: null,
  refreshToken: null,
  expiresAt: null,
  refreshTokenExpiresAt: null,
  userName: null,
  role: null,
};

function getStorage(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function saveAuthTokens(payload: AuthTokensPayload): void {
  const storage = getStorage();
  if (!storage) return;

  const normalized: StoredAuthTokens = {
    ...EMPTY_TOKENS,
    accessToken: payload.accessToken ?? null,
    refreshToken: payload.refreshToken ?? null,
    expiresAt: payload.expiresAt ?? null,
    refreshTokenExpiresAt: payload.refreshTokenExpiresAt ?? null,
    userName: payload.userName ?? null,
    role: payload.role ?? null,
  };

  storage.setItem(STORAGE_KEY, JSON.stringify(normalized));
}

export function getAuthTokens(): StoredAuthTokens | null {
  const storage = getStorage();
  if (!storage) return null;

  const raw = storage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as Partial<StoredAuthTokens>;
    return { ...EMPTY_TOKENS, ...parsed };
  } catch {
    storage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function clearAuthTokens(): void {
  const storage = getStorage();
  storage?.removeItem(STORAGE_KEY);
}

export function isTokenExpired(isoDate?: string | null, bufferSeconds = 30): boolean {
  if (!isoDate) return false;
  const timestamp = Date.parse(isoDate);
  if (Number.isNaN(timestamp)) return false;
  return timestamp <= Date.now() + bufferSeconds * 1000;
}

export function getValidAccessToken(bufferSeconds = 30): string | null {
  const tokens = getAuthTokens();
  if (!tokens?.accessToken) return null;
  if (isTokenExpired(tokens.expiresAt, bufferSeconds)) return null;
  return tokens.accessToken;
}

export function hasValidRefreshToken(bufferSeconds = 30): boolean {
  const tokens = getAuthTokens();
  if (!tokens?.refreshToken) return false;
  if (isTokenExpired(tokens.refreshTokenExpiresAt, bufferSeconds)) return false;
  return true;
}
