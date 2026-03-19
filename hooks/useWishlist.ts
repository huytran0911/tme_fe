"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    getWishlist,
    addToWishlist,
    removeFromWishlist,
    type WishlistPageResponse,
} from "@/lib/api/wishlist";

export const WISHLIST_QUERY_KEY = ["wishlist"] as const;

export function useWishlist(page = 1, pageSize = 20) {
    const queryClient = useQueryClient();

    // ── Separate Set state for O(1) lookup & instant optimistic UI ──
    // This is INDEPENDENT of the query data so the heart toggles immediately.
    const [wishlistedIds, setWishlistedIds] = useState<Set<number>>(new Set());
    // Ref to avoid stale closure issues on rollback
    const wishlistedIdsRef = useRef(wishlistedIds);
    useEffect(() => { wishlistedIdsRef.current = wishlistedIds; }, [wishlistedIds]);

    // ── Query: Fetch wishlist ────────────────────────────────────────
    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery<WishlistPageResponse>({
        queryKey: [...WISHLIST_QUERY_KEY, page, pageSize],
        queryFn: () => getWishlist(page, pageSize),
        staleTime: 1000 * 60 * 5,
        retry: 1,
    });

    // Sync wishlistedIds whenever query data changes (initial load / refetch)
    useEffect(() => {
        if (!data?.items) return;
        setWishlistedIds(new Set(data.items.map((item) => item.productId)));
    }, [data?.items]);

    // ── Mutation: Add ────────────────────────────────────────────────
    const addMutation = useMutation({
        mutationFn: (productId: number) => addToWishlist(productId),
        onMutate: async (productId: number) => {
            // Optimistic: update Set immediately → heart turns red NOW
            const prev = new Set(wishlistedIdsRef.current);
            setWishlistedIds((old) => new Set([...old, productId]));
            return { prev };
        },
        onError: (_err, _productId, context) => {
            // Rollback Set on error
            if (context?.prev) setWishlistedIds(context.prev);
        },
        onSettled: () => {
            // Sync query cache after mutation settles
            queryClient.invalidateQueries({ queryKey: WISHLIST_QUERY_KEY });
        },
    });

    // ── Mutation: Remove ─────────────────────────────────────────────
    const removeMutation = useMutation({
        mutationFn: (productId: number) => removeFromWishlist(productId),
        onMutate: async (productId: number) => {
            // Optimistic: remove from Set immediately → heart turns outline NOW
            const prev = new Set(wishlistedIdsRef.current);
            setWishlistedIds((old) => {
                const next = new Set(old);
                next.delete(productId);
                return next;
            });
            return { prev };
        },
        onError: (_err, _productId, context) => {
            if (context?.prev) setWishlistedIds(context.prev);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: WISHLIST_QUERY_KEY });
        },
    });

    // ── Toggle ───────────────────────────────────────────────────────
    // Use ref to avoid stale closure (wishlistedIds may lag behind ref)
    const toggleWishlist = useCallback(
        async (productId: number) => {
            if (wishlistedIdsRef.current.has(productId)) {
                await removeMutation.mutateAsync(productId);
                return false;
            } else {
                await addMutation.mutateAsync(productId);
                return true;
            }
        },
        [addMutation, removeMutation]
    );

    const isWishlisted = useCallback(
        (productId: number) => wishlistedIds.has(productId),
        [wishlistedIds]
    );

    const invalidateWishlist = useCallback(() => {
        queryClient.invalidateQueries({ queryKey: WISHLIST_QUERY_KEY });
    }, [queryClient]);

    return {
        data,
        items: data?.items ?? [],
        totalCount: data?.totalCount ?? 0,
        isLoading,
        isError,
        error,
        refetch,

        wishlistedIds,
        isWishlisted,
        toggleWishlist,
        invalidateWishlist,

        isAdding: addMutation.isPending,
        isRemoving: removeMutation.isPending,
    };
}

export type UseWishlistReturn = ReturnType<typeof useWishlist>;
