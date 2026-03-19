"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  getAuthTokens,
  clearAuthTokens,
  type StoredAuthTokens,
} from "@/lib/authTokens";

export interface AuthUser {
  userName: string | null;
  role: string | null;
}

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => void;
  refreshAuthState: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadAuthState = useCallback(() => {
    const tokens = getAuthTokens();
    if (tokens?.accessToken && tokens.userName) {
      setUser({
        userName: tokens.userName,
        role: tokens.role,
      });
    } else {
      setUser(null);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadAuthState();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "tme.auth.tokens") {
        loadAuthState();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [loadAuthState]);

  const logout = useCallback(() => {
    clearAuthTokens();
    setUser(null);
  }, []);

  const refreshAuthState = useCallback(() => {
    loadAuthState();
  }, [loadAuthState]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: !!user,
      isLoading,
      logout,
      refreshAuthState,
    }),
    [user, isLoading, logout, refreshAuthState]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
