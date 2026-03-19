"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useCart, type UseCartReturn } from "@/hooks/useCart";
import { useAuth } from "@/contexts/AuthContext";

interface CartContextValue extends UseCartReturn {
  // UI State
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  // Toast messages
  lastMessage: { type: "success" | "error"; text: string } | null;
  clearMessage: () => void;

  // Actions with notifications
  addItemWithNotification: (
    variantId: number,
    quantity?: number,
    productName?: string
  ) => Promise<void>;
}

const CartContext = createContext<CartContextValue | null>(null);

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const { isAuthenticated } = useAuth();
  const cartHook = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastMessage, setLastMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const toggleCart = useCallback(() => setIsCartOpen((prev) => !prev), []);
  const clearMessage = useCallback(() => setLastMessage(null), []);

  const addItemWithNotification = useCallback(
    async (variantId: number, quantity: number = 1, productName?: string) => {
      // Check authentication before adding to cart
      if (!isAuthenticated) {
        setLastMessage({
          type: "error",
          text: locale === "vi"
            ? "Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng"
            : "Please login to add items to cart",
        });
        // Redirect to login with return URL
        const returnUrl = encodeURIComponent(pathname || `/${locale}`);
        setTimeout(() => {
          router.push(`/${locale}/auth/login?returnUrl=${returnUrl}`);
        }, 1500);
        throw new Error("Authentication required");
      }

      try {
        await cartHook.addItem(variantId, quantity);
        setLastMessage({
          type: "success",
          text: productName
            ? `Đã thêm "${productName}" vào giỏ hàng`
            : "Đã thêm vào giỏ hàng",
        });
        // Auto clear message after 3 seconds
        setTimeout(() => setLastMessage(null), 3000);
      } catch (error) {
        setLastMessage({
          type: "error",
          text:
            error instanceof Error
              ? error.message
              : "Không thể thêm vào giỏ hàng",
        });
        setTimeout(() => setLastMessage(null), 5000);
        throw error;
      }
    },
    [cartHook, isAuthenticated, locale, pathname, router]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      ...cartHook,
      isCartOpen,
      openCart,
      closeCart,
      toggleCart,
      lastMessage,
      clearMessage,
      addItemWithNotification,
    }),
    [
      cartHook,
      isCartOpen,
      openCart,
      closeCart,
      toggleCart,
      lastMessage,
      clearMessage,
      addItemWithNotification,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}

// Export types
export type { CartContextValue };
