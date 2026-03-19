"use client";

import { useState } from "react";
import { useWishlistContext } from "@/contexts/WishlistContext";

interface WishlistHeartButtonProps {
    productId: number;
    productName?: string;
    /** Size variant: 'sm' for cards, 'md' for detail page */
    size?: "sm" | "md";
    className?: string;
}

export default function WishlistHeartButton({
    productId,
    productName,
    size = "sm",
    className = "",
}: WishlistHeartButtonProps) {
    const { isWishlisted, toggleWithAuth } = useWishlistContext();
    const [isAnimating, setIsAnimating] = useState(false);
    const wishlisted = isWishlisted(productId);

    const handleClick = async (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
        await toggleWithAuth(productId, productName);
    };

    const sizeClass = size === "md"
        ? "h-11 w-11 text-xl"
        : "h-8 w-8 text-base";

    return (
        <button
            type="button"
            aria-label={wishlisted ? "Xoá khỏi yêu thích" : "Thêm vào yêu thích"}
            onClick={handleClick}
            className={`
        flex items-center justify-center rounded-full bg-white/90 shadow-sm
        backdrop-blur-sm border border-slate-100
        transition-all duration-200
        hover:bg-white hover:shadow-md
        active:scale-90
        ${isAnimating ? "scale-125" : "scale-100"}
        ${sizeClass}
        ${className}
      `}
            style={{ minWidth: 44, minHeight: 44 }}
        >
            {wishlisted ? (
                // Filled heart – wishlisted
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-[1em] w-[1em] text-red-500 transition-colors duration-200"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            ) : (
                // Outline heart – not wishlisted
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    className="h-[1em] w-[1em] text-slate-400 transition-colors duration-200 hover:text-red-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                    />
                </svg>
            )}
        </button>
    );
}
