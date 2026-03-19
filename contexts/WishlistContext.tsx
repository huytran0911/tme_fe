"use client";

import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useAuth } from "@/contexts/AuthContext";
import { useWishlist, type UseWishlistReturn } from "@/hooks/useWishlist";

// ── Types ──────────────────────────────────────────────────

interface WishlistContextValue extends UseWishlistReturn {
    // Toast messages
    lastMessage: { type: "success" | "error"; text: string } | null;
    clearMessage: () => void;

    // Authenticated toggle (redirects to login if not authed)
    toggleWithAuth: (productId: number, productName?: string) => Promise<void>;
}

// ── Context ────────────────────────────────────────────────

const WishlistContext = createContext<WishlistContextValue | null>(null);

// ── Provider ───────────────────────────────────────────────

export function WishlistProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const { isAuthenticated } = useAuth();
    const wishlistHook = useWishlist();

    const [lastMessage, setLastMessage] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    const showMessage = useCallback(
        (type: "success" | "error", text: string, durationMs = 3000) => {
            setLastMessage({ type, text });
            setTimeout(() => setLastMessage(null), durationMs);
        },
        []
    );

    const clearMessage = useCallback(() => setLastMessage(null), []);

    /**
     * Toggle wishlist with auth check + toast feedback.
     * If not authenticated → redirect to login with returnUrl.
     */
    const toggleWithAuth = useCallback(
        async (productId: number, productName?: string) => {
            if (!isAuthenticated) {
                showMessage(
                    "error",
                    locale === "vi"
                        ? "Vui lòng đăng nhập để lưu sản phẩm yêu thích."
                        : "Please log in to save products to your wishlist.",
                    2000
                );
                const returnUrl = encodeURIComponent(pathname || `/${locale}`);
                setTimeout(() => {
                    router.push(`/${locale}/auth/login?returnUrl=${returnUrl}`);
                }, 1500);
                return;
            }

            try {
                const added = await wishlistHook.toggleWishlist(productId);
                if (added) {
                    showMessage(
                        "success",
                        locale === "vi"
                            ? `Đã thêm${productName ? ` "${productName}"` : ""} vào yêu thích ❤️`
                            : `Added${productName ? ` "${productName}"` : ""} to wishlist ❤️`
                    );
                } else {
                    showMessage(
                        "success",
                        locale === "vi"
                            ? "Đã xoá khỏi danh sách yêu thích"
                            : "Removed from wishlist"
                    );
                }
            } catch {
                showMessage(
                    "error",
                    locale === "vi"
                        ? "Có lỗi xảy ra, vui lòng thử lại."
                        : "An error occurred, please try again.",
                    5000
                );
            }
        },
        [isAuthenticated, wishlistHook, locale, pathname, router, showMessage]
    );

    const value = useMemo<WishlistContextValue>(
        () => ({
            ...wishlistHook,
            lastMessage,
            clearMessage,
            toggleWithAuth,
        }),
        [wishlistHook, lastMessage, clearMessage, toggleWithAuth]
    );

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}

// ── Consumer hook ──────────────────────────────────────────

export function useWishlistContext(): WishlistContextValue {
    const ctx = useContext(WishlistContext);
    if (!ctx) {
        throw new Error("useWishlistContext must be used within a WishlistProvider");
    }
    return ctx;
}
