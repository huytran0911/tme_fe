"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "tme_recently_viewed";
const MAX_ITEMS = 20;

export interface RecentlyViewedProduct {
    id: number;
    name: string;
    nameEn?: string | null;
    imageUrl?: string | null;
    price: number;
    originalPrice?: number | null;
    activeSaleOff?: number | null;
    finalPrice?: number | null;
    code?: string | null;
    categoryId?: number;
    isActive?: boolean;
    quantity?: number;
    viewedAt: number; // timestamp
}

function readFromStorage(): RecentlyViewedProduct[] {
    if (typeof window === "undefined") return [];
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed as RecentlyViewedProduct[];
    } catch {
        return [];
    }
}

function writeToStorage(items: RecentlyViewedProduct[]) {
    if (typeof window === "undefined") return;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, MAX_ITEMS)));
    } catch {
        // localStorage might be unavailable (private browsing, quota exceeded, etc.)
    }
}

export function useRecentlyViewed() {
    const [recentlyViewed, setRecentlyViewed] = useState<RecentlyViewedProduct[]>([]);

    // Hydrate from localStorage on mount
    useEffect(() => {
        setRecentlyViewed(readFromStorage());
    }, []);

    const addToRecentlyViewed = useCallback((product: Omit<RecentlyViewedProduct, "viewedAt">) => {
        setRecentlyViewed((prev) => {
            // Remove if already exists (will re-add at front)
            const filtered = prev.filter((p) => p.id !== product.id);
            const next: RecentlyViewedProduct[] = [
                { ...product, viewedAt: Date.now() },
                ...filtered,
            ].slice(0, MAX_ITEMS);
            writeToStorage(next);
            return next;
        });
    }, []);

    const clearRecentlyViewed = useCallback(() => {
        setRecentlyViewed([]);
        if (typeof window !== "undefined") {
            localStorage.removeItem(STORAGE_KEY);
        }
    }, []);

    return {
        recentlyViewed,
        addToRecentlyViewed,
        clearRecentlyViewed,
    };
}

/**
 * Standalone function to track a product view without needing the hook.
 * Call this from product detail pages.
 */
export function trackProductView(product: Omit<RecentlyViewedProduct, "viewedAt">) {
    const items = readFromStorage();
    const filtered = items.filter((p) => p.id !== product.id);
    const updated = [{ ...product, viewedAt: Date.now() }, ...filtered].slice(0, MAX_ITEMS);
    writeToStorage(updated);
}
