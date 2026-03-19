(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ReactQueryProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReactQueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.90.12/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.12_react@19.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ReactQueryProvider({ children }) {
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ReactQueryProvider.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]()
    }["ReactQueryProvider.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ReactQueryProvider.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_s(ReactQueryProvider, "qFhNRSk+4hqflxYLL9+zYF5AcuQ=");
_c = ReactQueryProvider;
var _c;
__turbopack_context__.k.register(_c, "ReactQueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/authTokens.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAuthTokens",
    ()=>clearAuthTokens,
    "getAuthTokens",
    ()=>getAuthTokens,
    "getValidAccessToken",
    ()=>getValidAccessToken,
    "hasValidRefreshToken",
    ()=>hasValidRefreshToken,
    "isTokenExpired",
    ()=>isTokenExpired,
    "saveAuthTokens",
    ()=>saveAuthTokens
]);
const STORAGE_KEY = "tme.auth.tokens";
const EMPTY_TOKENS = {
    accessToken: null,
    refreshToken: null,
    expiresAt: null,
    refreshTokenExpiresAt: null,
    userName: null,
    role: null
};
function getStorage() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return window.localStorage;
    } catch  {
        return null;
    }
}
function saveAuthTokens(payload) {
    const storage = getStorage();
    if (!storage) return;
    const normalized = {
        ...EMPTY_TOKENS,
        accessToken: payload.accessToken ?? null,
        refreshToken: payload.refreshToken ?? null,
        expiresAt: payload.expiresAt ?? null,
        refreshTokenExpiresAt: payload.refreshTokenExpiresAt ?? null,
        userName: payload.userName ?? null,
        role: payload.role ?? null
    };
    storage.setItem(STORAGE_KEY, JSON.stringify(normalized));
}
function getAuthTokens() {
    const storage = getStorage();
    if (!storage) return null;
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return null;
    try {
        const parsed = JSON.parse(raw);
        return {
            ...EMPTY_TOKENS,
            ...parsed
        };
    } catch  {
        storage.removeItem(STORAGE_KEY);
        return null;
    }
}
function clearAuthTokens() {
    const storage = getStorage();
    storage?.removeItem(STORAGE_KEY);
}
function isTokenExpired(isoDate, bufferSeconds = 30) {
    if (!isoDate) return false;
    const timestamp = Date.parse(isoDate);
    if (Number.isNaN(timestamp)) return false;
    return timestamp <= Date.now() + bufferSeconds * 1000;
}
function getValidAccessToken(bufferSeconds = 30) {
    const tokens = getAuthTokens();
    if (!tokens?.accessToken) return null;
    if (isTokenExpired(tokens.expiresAt, bufferSeconds)) return null;
    return tokens.accessToken;
}
function hasValidRefreshToken(bufferSeconds = 30) {
    const tokens = getAuthTokens();
    if (!tokens?.refreshToken) return false;
    if (isTokenExpired(tokens.refreshTokenExpiresAt, bufferSeconds)) return false;
    return true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/contexts/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/authTokens.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const loadAuthState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[loadAuthState]": ()=>{
            const tokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthTokens"])();
            if (tokens?.accessToken && tokens.userName) {
                setUser({
                    userName: tokens.userName,
                    role: tokens.role
                });
            } else {
                setUser(null);
            }
            setIsLoading(false);
        }
    }["AuthProvider.useCallback[loadAuthState]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            loadAuthState();
            const handleStorageChange = {
                "AuthProvider.useEffect.handleStorageChange": (e)=>{
                    if (e.key === "tme.auth.tokens") {
                        loadAuthState();
                    }
                }
            }["AuthProvider.useEffect.handleStorageChange"];
            window.addEventListener("storage", handleStorageChange);
            return ({
                "AuthProvider.useEffect": ()=>window.removeEventListener("storage", handleStorageChange)
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], [
        loadAuthState
    ]);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[logout]": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthTokens"])();
            setUser(null);
        }
    }["AuthProvider.useCallback[logout]"], []);
    const refreshAuthState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[refreshAuthState]": ()=>{
            loadAuthState();
        }
    }["AuthProvider.useCallback[refreshAuthState]"], [
        loadAuthState
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AuthProvider.useMemo[value]": ()=>({
                user,
                isAuthenticated: !!user,
                isLoading,
                logout,
                refreshAuthState
            })
    }["AuthProvider.useMemo[value]"], [
        user,
        isLoading,
        logout,
        refreshAuthState
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/AuthContext.tsx",
        lineNumber: 83,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "NJqxSVXZyxHYQKJ8BTl7d0DnfX4=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/httpClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * HTTP Client with retry logic, timeout, auth helper, and proper error handling
 * @module lib/httpClient
 */ __turbopack_context__.s([
    "apiDelete",
    ()=>apiDelete,
    "apiGet",
    ()=>apiGet,
    "apiPatch",
    ()=>apiPatch,
    "apiPost",
    ()=>apiPost,
    "apiPut",
    ()=>apiPut,
    "apiRequest",
    ()=>apiRequest,
    "createRequestController",
    ()=>createRequestController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/authTokens.ts [app-client] (ecmascript)");
;
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || "https://localhost:8000";
const AUTH_REFRESH_PATH = "/client/v1/auth/refresh";
const TOKEN_HEADROOM_SECONDS = 30;
const DEFAULT_CONFIG = {
    timeout: 30000,
    maxRetries: 3,
    retryDelay: 1000,
    retryableStatuses: [
        408,
        429,
        500,
        502,
        503,
        504
    ]
};
// ============================================================================
// SSL Configuration (Development Only)
// ============================================================================
const isDevelopment = ("TURBOPACK compile-time value", "development") === "development";
const isLocalhost = API_BASE_URL.startsWith("https://localhost") || API_BASE_URL.startsWith("https://127.");
// Only disable SSL verification in development with localhost
if (isDevelopment && (isLocalhost || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.ALLOW_INSECURE_SSL === "true")) {
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }
}
// ============================================================================
// Utility Functions
// ============================================================================
/**
 * Build full URL with query parameters
 */ function buildUrl(path, params) {
    const url = new URL(path, API_BASE_URL || "http://localhost");
    if (params) {
        Object.entries(params).forEach(([key, value])=>{
            if (value !== undefined && value !== null) {
                url.searchParams.append(key, String(value));
            }
        });
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return url.toString();
}
/**
 * Convert body to appropriate format for fetch
 */ function serializeBody(body) {
    if (body === undefined || body === null) return undefined;
    if (body instanceof FormData || body instanceof Blob || body instanceof ArrayBuffer) {
        return body;
    }
    if (typeof body === "string") return body;
    return JSON.stringify(body);
}
/**
 * Calculate exponential backoff delay
 */ function calculateBackoff(attempt, baseDelay) {
    // Exponential backoff with jitter: delay * 2^attempt + random jitter
    const exponentialDelay = baseDelay * Math.pow(2, attempt);
    const jitter = Math.random() * 1000; // 0-1000ms random jitter
    return Math.min(exponentialDelay + jitter, 30000); // Max 30 seconds
}
/**
 * Attempt to refresh the access token using the stored refresh token.
 * Returns the new access token if successful.
 */ async function refreshAccessToken() {
    const tokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthTokens"])();
    if (!tokens?.refreshToken) return null;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTokenExpired"])(tokens.refreshTokenExpiresAt, TOKEN_HEADROOM_SECONDS)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthTokens"])();
        return null;
    }
    try {
        const res = await fetch(buildUrl(AUTH_REFRESH_PATH), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                refreshToken: tokens.refreshToken
            })
        });
        const rawText = await res.text();
        let parsed = null;
        try {
            parsed = rawText ? JSON.parse(rawText) : null;
        } catch  {
            parsed = rawText;
        }
        const success = Boolean(parsed?.success);
        const data = parsed?.data;
        if (!res.ok || !success || !data?.accessToken) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthTokens"])();
            return null;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAuthTokens"])(data);
        return data.accessToken ?? null;
    } catch (error) {
        console.warn("[httpClient] Refresh token failed", error);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthTokens"])();
        return null;
    }
}
/**
 * Get a valid access token, refreshing it if needed.
 */ async function getFreshAccessToken() {
    const tokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthTokens"])();
    if (!tokens) return null;
    if (!tokens.accessToken || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$authTokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTokenExpired"])(tokens.expiresAt, TOKEN_HEADROOM_SECONDS)) {
        return refreshAccessToken();
    }
    return tokens.accessToken;
}
/**
 * Check if error is retryable
 */ function isRetryableError(error, status) {
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
 */ function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
// ============================================================================
// Response Handler
// ============================================================================
async function handleResponse(res) {
    const contentType = res.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");
    let rawText;
    try {
        rawText = await res.text();
    } catch  {
        rawText = "";
    }
    const parsed = (()=>{
        if (!isJson) return rawText;
        try {
            return rawText ? JSON.parse(rawText) : null;
        } catch  {
            return rawText;
        }
    })();
    if (!res.ok) {
        const message = isJson && parsed && typeof parsed === "object" && ("message" in parsed || "error" in parsed) && (parsed.message || parsed.error) || res.statusText || "Request failed";
        const err = {
            status: res.status,
            message,
            details: parsed ?? rawText,
            isRetryable: isRetryableError(null, res.status)
        };
        throw err;
    }
    return parsed ?? undefined;
}
async function apiRequest(path, method, options = {}) {
    const { params, body, timeout = DEFAULT_CONFIG.timeout, maxRetries = DEFAULT_CONFIG.maxRetries, signal: externalSignal, skipRetry = false, skipAuth = false, ...fetchOptions } = options;
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
    let lastError = null;
    for(let attempt = 0; attempt <= effectiveMaxRetries; attempt++){
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
        const timeoutId = setTimeout(()=>controller.abort(), timeout);
        // Combine external signal with timeout signal
        const handleExternalAbort = ()=>controller.abort();
        externalSignal?.addEventListener("abort", handleExternalAbort);
        try {
            const res = await fetch(url, {
                ...fetchOptions,
                method,
                headers,
                body: preparedBody,
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            externalSignal?.removeEventListener("abort", handleExternalAbort);
            return await handleResponse(res);
        } catch (error) {
            clearTimeout(timeoutId);
            externalSignal?.removeEventListener("abort", handleExternalAbort);
            // Check if aborted by external signal (not our timeout)
            if (externalSignal?.aborted) {
                const abortError = {
                    status: 0,
                    message: "Request was cancelled",
                    isNetworkError: true,
                    isRetryable: false
                };
                throw abortError;
            }
            // Handle timeout
            if (error instanceof DOMException && error.name === "AbortError") {
                lastError = {
                    status: 408,
                    message: `Request timeout after ${timeout}ms`,
                    isTimeout: true,
                    isRetryable: true
                };
            } else if (error instanceof TypeError) {
                lastError = {
                    status: 0,
                    message: error.message || "Network error",
                    isNetworkError: true,
                    isRetryable: true
                };
            } else if (isApiError(error)) {
                lastError = error;
            } else {
                lastError = {
                    status: 0,
                    message: error instanceof Error ? error.message : "Unknown error",
                    details: error,
                    isRetryable: false
                };
            }
            // Check if we should retry
            const shouldRetry = attempt < effectiveMaxRetries && lastError.isRetryable !== false;
            if (shouldRetry) {
                const delay = calculateBackoff(attempt, DEFAULT_CONFIG.retryDelay);
                console.warn(`[httpClient] Request failed (attempt ${attempt + 1}/${effectiveMaxRetries + 1}), ` + `retrying in ${Math.round(delay)}ms...`, {
                    url,
                    error: lastError.message
                });
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
 */ function isApiError(error) {
    return typeof error === "object" && error !== null && "status" in error && "message" in error;
}
function apiGet(path, options) {
    return apiRequest(path, "GET", options);
}
function apiPost(path, body, options) {
    return apiRequest(path, "POST", {
        ...options,
        body
    });
}
function apiPut(path, body, options) {
    return apiRequest(path, "PUT", {
        ...options,
        body
    });
}
function apiPatch(path, body, options) {
    return apiRequest(path, "PATCH", {
        ...options,
        body
    });
}
function apiDelete(path, options) {
    return apiRequest(path, "DELETE", options);
}
function createRequestController() {
    const controller = new AbortController();
    return {
        signal: controller.signal,
        cancel: ()=>controller.abort(),
        isCancelled: ()=>controller.signal.aborted
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/cart.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addBundleItem",
    ()=>addBundleItem,
    "addCartItem",
    ()=>addCartItem,
    "clearCart",
    ()=>clearCart,
    "getCart",
    ()=>getCart,
    "getCartHeaders",
    ()=>getCartHeaders,
    "removeCartItem",
    ()=>removeCartItem,
    "updateCartItem",
    ()=>updateCartItem,
    "validateCart",
    ()=>validateCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/httpClient.ts [app-client] (ecmascript)");
;
// ============================================
// API Base URL
// ============================================
const CART_API_URL = "/client/v1/cart";
async function getCart() {
    const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(CART_API_URL);
    if (!envelope.success || !envelope.data) {
        throw new Error(envelope.error?.message || "Không tải được giỏ hàng.");
    }
    return envelope.data;
}
async function addCartItem(variantId, quantity) {
    console.log("[Cart] addCartItem called", {
        variantId,
        quantity
    });
    const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])(`${CART_API_URL}/items`, {
        variantId,
        quantity
    });
    if (!envelope.success || !envelope.data) {
        console.error("[Cart] addCartItem failed", envelope.error);
        throw new Error(envelope.error?.message || "Không thể thêm vào giỏ hàng.");
    }
    console.log("[Cart] addCartItem success", {
        cartId: envelope.data.id,
        itemCount: envelope.data.items?.length,
        items: envelope.data.items?.map((i)=>({
                id: i.id,
                variantId: i.variantId
            }))
    });
    return envelope.data;
}
async function updateCartItem(itemId, quantity) {
    const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPut"])(`${CART_API_URL}/items/${itemId}`, {
        quantity
    });
    if (!envelope.success || !envelope.data) {
        throw new Error(envelope.error?.message || "Không thể cập nhật giỏ hàng.");
    }
    return envelope.data;
}
async function removeCartItem(itemId) {
    const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiDelete"])(`${CART_API_URL}/items/${itemId}`);
    if (!envelope.success || !envelope.data) {
        throw new Error(envelope.error?.message || "Không thể xóa sản phẩm.");
    }
    return envelope.data;
}
async function addBundleItem(parentItemId, variantId, quantity, saleOff) {
    const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])(`${CART_API_URL}/items/${parentItemId}/bundles`, {
        variantId,
        quantity,
        saleOff
    });
    if (!envelope.success || !envelope.data) {
        throw new Error(envelope.error?.message || "Không thể thêm sản phẩm bán kèm.");
    }
    return envelope.data;
}
async function clearCart() {
    const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiDelete"])(CART_API_URL);
    if (!envelope.success || !envelope.data) {
        throw new Error(envelope.error?.message || "Không thể xóa giỏ hàng.");
    }
    return envelope.data;
}
async function validateCart() {
    const envelope = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])(`${CART_API_URL}/validate`, {});
    if (!envelope.success || !envelope.data) {
        throw new Error(envelope.error?.message || "Không thể kiểm tra giỏ hàng.");
    }
    return envelope.data;
}
function getCartHeaders() {
    return {};
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useCart.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.12_react@19.2.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.12_react@19.2.0/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.12_react@19.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/cart.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CART_QUERY_KEY = [
    "cart"
];
function useCart() {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    // Query: Fetch cart
    const { data: cart, isLoading, isError, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: CART_QUERY_KEY,
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCart"],
        staleTime: 1000 * 60 * 5,
        retry: 1
    });
    // Mutation: Add item to cart
    const addItemMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCart.useMutation[addItemMutation]": ({ variantId, quantity })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addCartItem"])(variantId, quantity)
        }["useCart.useMutation[addItemMutation]"],
        onSuccess: {
            "useCart.useMutation[addItemMutation]": (newCart)=>{
                queryClient.setQueryData(CART_QUERY_KEY, newCart);
            }
        }["useCart.useMutation[addItemMutation]"]
    });
    // Mutation: Update item quantity
    const updateItemMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCart.useMutation[updateItemMutation]": ({ itemId, quantity })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCartItem"])(itemId, quantity)
        }["useCart.useMutation[updateItemMutation]"],
        onSuccess: {
            "useCart.useMutation[updateItemMutation]": (newCart)=>{
                queryClient.setQueryData(CART_QUERY_KEY, newCart);
            }
        }["useCart.useMutation[updateItemMutation]"]
    });
    // Mutation: Remove item from cart
    const removeItemMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCart.useMutation[removeItemMutation]": (itemId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeCartItem"])(itemId)
        }["useCart.useMutation[removeItemMutation]"],
        onSuccess: {
            "useCart.useMutation[removeItemMutation]": (newCart)=>{
                queryClient.setQueryData(CART_QUERY_KEY, newCart);
            }
        }["useCart.useMutation[removeItemMutation]"]
    });
    // Mutation: Add bundle item
    const addBundleMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCart.useMutation[addBundleMutation]": ({ parentItemId, variantId, quantity, saleOff })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBundleItem"])(parentItemId, variantId, quantity, saleOff)
        }["useCart.useMutation[addBundleMutation]"],
        onSuccess: {
            "useCart.useMutation[addBundleMutation]": (newCart)=>{
                queryClient.setQueryData(CART_QUERY_KEY, newCart);
            }
        }["useCart.useMutation[addBundleMutation]"]
    });
    // Mutation: Clear cart
    const clearCartMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCart"],
        onSuccess: {
            "useCart.useMutation[clearCartMutation]": (newCart)=>{
                queryClient.setQueryData(CART_QUERY_KEY, newCart);
            }
        }["useCart.useMutation[clearCartMutation]"]
    });
    // Mutation: Validate cart
    const validateCartMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateCart"],
        onSuccess: {
            "useCart.useMutation[validateCartMutation]": (validation)=>{
                if (validation.updatedCart) {
                    queryClient.setQueryData(CART_QUERY_KEY, validation.updatedCart);
                }
            }
        }["useCart.useMutation[validateCartMutation]"]
    });
    // Wrapper functions for easier usage
    const addItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[addItem]": async (variantId, quantity = 1)=>{
            return addItemMutation.mutateAsync({
                variantId,
                quantity
            });
        }
    }["useCart.useCallback[addItem]"], [
        addItemMutation
    ]);
    const updateItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[updateItem]": async (itemId, quantity)=>{
            return updateItemMutation.mutateAsync({
                itemId,
                quantity
            });
        }
    }["useCart.useCallback[updateItem]"], [
        updateItemMutation
    ]);
    const removeItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[removeItem]": async (itemId)=>{
            return removeItemMutation.mutateAsync(itemId);
        }
    }["useCart.useCallback[removeItem]"], [
        removeItemMutation
    ]);
    const addBundle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[addBundle]": async (parentItemId, variantId, quantity, saleOff)=>{
            return addBundleMutation.mutateAsync({
                parentItemId,
                variantId,
                quantity,
                saleOff
            });
        }
    }["useCart.useCallback[addBundle]"], [
        addBundleMutation
    ]);
    const clearCartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[clearCartItems]": async ()=>{
            return clearCartMutation.mutateAsync();
        }
    }["useCart.useCallback[clearCartItems]"], [
        clearCartMutation
    ]);
    const validateCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[validateCart]": async ()=>{
            return validateCartMutation.mutateAsync();
        }
    }["useCart.useCallback[validateCart]"], [
        validateCartMutation
    ]);
    // Invalidate cart query (useful after login/logout)
    const invalidateCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[invalidateCart]": ()=>{
            queryClient.invalidateQueries({
                queryKey: CART_QUERY_KEY
            });
        }
    }["useCart.useCallback[invalidateCart]"], [
        queryClient
    ]);
    // Computed values
    const itemCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCart.useMemo[itemCount]": ()=>cart?.summary?.itemCount ?? 0
    }["useCart.useMemo[itemCount]"], [
        cart
    ]);
    const totalQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCart.useMemo[totalQuantity]": ()=>cart?.summary?.totalQuantity ?? 0
    }["useCart.useMemo[totalQuantity]"], [
        cart
    ]);
    const grandTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCart.useMemo[grandTotal]": ()=>cart?.summary?.grandTotal ?? 0
    }["useCart.useMemo[grandTotal]"], [
        cart
    ]);
    const subtotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCart.useMemo[subtotal]": ()=>cart?.summary?.subtotal ?? 0
    }["useCart.useMemo[subtotal]"], [
        cart
    ]);
    const bundleDiscount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCart.useMemo[bundleDiscount]": ()=>cart?.summary?.bundleDiscount ?? 0
    }["useCart.useMemo[bundleDiscount]"], [
        cart
    ]);
    const isEmpty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCart.useMemo[isEmpty]": ()=>!cart?.items || cart.items.length === 0
    }["useCart.useMemo[isEmpty]"], [
        cart
    ]);
    // Loading states
    const isAddingItem = addItemMutation.isPending;
    const isUpdatingItem = updateItemMutation.isPending;
    const isRemovingItem = removeItemMutation.isPending;
    const isAddingBundle = addBundleMutation.isPending;
    const isClearingCart = clearCartMutation.isPending;
    const isValidatingCart = validateCartMutation.isPending;
    const isMutating = isAddingItem || isUpdatingItem || isRemovingItem || isAddingBundle || isClearingCart || isValidatingCart;
    return {
        // Cart data
        cart,
        items: cart?.items ?? [],
        bundlesAvailable: cart?.bundlesAvailable ?? [],
        gifts: cart?.gifts ?? [],
        summary: cart?.summary ?? null,
        // Computed values
        itemCount,
        totalQuantity,
        grandTotal,
        subtotal,
        bundleDiscount,
        isEmpty,
        // Loading states
        isLoading,
        isError,
        error,
        isMutating,
        isAddingItem,
        isUpdatingItem,
        isRemovingItem,
        isAddingBundle,
        isClearingCart,
        isValidatingCart,
        // Actions
        addItem,
        updateItem,
        removeItem,
        addBundle,
        clearCart: clearCartItems,
        validateCart,
        refetch,
        invalidateCart,
        // Raw mutations (for advanced usage)
        mutations: {
            addItem: addItemMutation,
            updateItem: updateItemMutation,
            removeItem: removeItemMutation,
            addBundle: addBundleMutation,
            clearCart: clearCartMutation,
            validateCart: validateCartMutation
        }
    };
}
_s(useCart, "id55urDv3gIVAqSa3oAquuErhLA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/contexts/CartContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCartContext",
    ()=>useCartContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_a6e7fe7b2107bfd5c9e45031e322c5c3/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/use-intl@4.6.1_react@19.2.0/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useCart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function CartProvider({ children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const cartHook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastMessage, setLastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[openCart]": ()=>setIsCartOpen(true)
    }["CartProvider.useCallback[openCart]"], []);
    const closeCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[closeCart]": ()=>setIsCartOpen(false)
    }["CartProvider.useCallback[closeCart]"], []);
    const toggleCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[toggleCart]": ()=>setIsCartOpen({
                "CartProvider.useCallback[toggleCart]": (prev)=>!prev
            }["CartProvider.useCallback[toggleCart]"])
    }["CartProvider.useCallback[toggleCart]"], []);
    const clearMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[clearMessage]": ()=>setLastMessage(null)
    }["CartProvider.useCallback[clearMessage]"], []);
    const addItemWithNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[addItemWithNotification]": async (variantId, quantity = 1, productName)=>{
            // Check authentication before adding to cart
            if (!isAuthenticated) {
                setLastMessage({
                    type: "error",
                    text: locale === "vi" ? "Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng" : "Please login to add items to cart"
                });
                // Redirect to login with return URL
                const returnUrl = encodeURIComponent(pathname || `/${locale}`);
                setTimeout({
                    "CartProvider.useCallback[addItemWithNotification]": ()=>{
                        router.push(`/${locale}/auth/login?returnUrl=${returnUrl}`);
                    }
                }["CartProvider.useCallback[addItemWithNotification]"], 1500);
                throw new Error("Authentication required");
            }
            try {
                await cartHook.addItem(variantId, quantity);
                setLastMessage({
                    type: "success",
                    text: productName ? `Đã thêm "${productName}" vào giỏ hàng` : "Đã thêm vào giỏ hàng"
                });
                // Auto clear message after 3 seconds
                setTimeout({
                    "CartProvider.useCallback[addItemWithNotification]": ()=>setLastMessage(null)
                }["CartProvider.useCallback[addItemWithNotification]"], 3000);
            } catch (error) {
                setLastMessage({
                    type: "error",
                    text: error instanceof Error ? error.message : "Không thể thêm vào giỏ hàng"
                });
                setTimeout({
                    "CartProvider.useCallback[addItemWithNotification]": ()=>setLastMessage(null)
                }["CartProvider.useCallback[addItemWithNotification]"], 5000);
                throw error;
            }
        }
    }["CartProvider.useCallback[addItemWithNotification]"], [
        cartHook,
        isAuthenticated,
        locale,
        pathname,
        router
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CartProvider.useMemo[value]": ()=>({
                ...cartHook,
                isCartOpen,
                openCart,
                closeCart,
                toggleCart,
                lastMessage,
                clearMessage,
                addItemWithNotification
            })
    }["CartProvider.useMemo[value]"], [
        cartHook,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        lastMessage,
        clearMessage,
        addItemWithNotification
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/CartContext.tsx",
        lineNumber: 117,
        columnNumber: 10
    }, this);
}
_s(CartProvider, "mbDq3+25dVc3IndkDwPDFLmL3MI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$6$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = CartProvider;
function useCartContext() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_a6e7fe7b2107bfd5c9e45031e322c5c3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
    return context;
}
_s1(useCartContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_957d7a98._.js.map