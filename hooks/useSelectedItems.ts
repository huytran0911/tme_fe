"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const STORAGE_KEY = "tme-selected-cart-items";

/**
 * Hook to manage selected cart item variantIds with sessionStorage persistence.
 * Default: all items selected when first opened.
 */
export function useSelectedItems(allVariantIds: number[]) {
    const [selectedIds, setSelectedIds] = useState<Set<number>>(() => {
        // Try to restore from sessionStorage
        if (typeof window !== "undefined") {
            try {
                const stored = sessionStorage.getItem(STORAGE_KEY);
                if (stored) {
                    const parsed = JSON.parse(stored) as number[];
                    // Only keep IDs that still exist in the cart
                    const valid = parsed.filter((id) => allVariantIds.includes(id));
                    if (valid.length > 0) return new Set(valid);
                }
            } catch {
                // ignore
            }
        }
        // Default: select all
        return new Set(allVariantIds);
    });

    // Keep a ref for the latest allVariantIds to avoid stale closures
    const allIdsRef = useRef(allVariantIds);
    allIdsRef.current = allVariantIds;

    // When new items appear in the cart (not yet in selectedIds), auto-select them
    useEffect(() => {
        if (allVariantIds.length === 0) return;
        setSelectedIds((prev) => {
            const next = new Set(prev);
            let changed = false;
            // Auto-select any new items
            for (const id of allVariantIds) {
                if (!next.has(id)) {
                    next.add(id);
                    changed = true;
                }
            }
            // Remove IDs no longer in cart
            for (const id of next) {
                if (!allVariantIds.includes(id)) {
                    next.delete(id);
                    changed = true;
                }
            }
            return changed ? next : prev;
        });
    }, [allVariantIds]);

    // Persist to sessionStorage on change
    useEffect(() => {
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...selectedIds]));
        } catch {
            // ignore quota errors
        }
    }, [selectedIds]);

    const toggleItem = useCallback((variantId: number) => {
        setSelectedIds((prev) => {
            const next = new Set(prev);
            if (next.has(variantId)) {
                next.delete(variantId);
            } else {
                next.add(variantId);
            }
            return next;
        });
    }, []);

    const toggleAll = useCallback(() => {
        setSelectedIds((prev) => {
            const allIds = allIdsRef.current;
            if (prev.size === allIds.length && allIds.every((id) => prev.has(id))) {
                // All selected -> deselect all
                return new Set<number>();
            }
            // Not all selected -> select all
            return new Set(allIds);
        });
    }, []);

    const isSelected = useCallback(
        (variantId: number) => selectedIds.has(variantId),
        [selectedIds]
    );

    const isAllSelected =
        allVariantIds.length > 0 &&
        selectedIds.size === allVariantIds.length &&
        allVariantIds.every((id) => selectedIds.has(id));

    return {
        selectedIds,
        selectedCount: selectedIds.size,
        isAllSelected,
        toggleItem,
        toggleAll,
        isSelected,
    };
}
