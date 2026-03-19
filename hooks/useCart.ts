"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCart,
  addCartItem,
  updateCartItem,
  removeCartItem,
  addBundleItem,
  clearCart as clearCartApi,
  validateCart as validateCartApi,
  type CartResponse,
  type CartValidationResponse,
} from "@/lib/api/cart";

const CART_QUERY_KEY = ["cart"] as const;
const DEBOUNCE_DELAY = 600; // ms

export function useCart() {
  const queryClient = useQueryClient();

  // ── Optimistic quantity state ──────────────────────────
  // Map<itemId, pendingQuantity> for items being debounced
  const [pendingQuantities, setPendingQuantities] = useState<
    Map<number, number>
  >(new Map());
  const debounceTimers = useRef<Map<number, ReturnType<typeof setTimeout>>>(
    new Map()
  );

  // Query: Fetch cart
  const {
    data: cart,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<CartResponse>({
    queryKey: CART_QUERY_KEY,
    queryFn: getCart,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });

  // Mutation: Add item to cart
  const addItemMutation = useMutation({
    mutationFn: ({ variantId, quantity }: { variantId: number; quantity: number }) =>
      addCartItem(variantId, quantity),
    onSuccess: (newCart) => {
      queryClient.setQueryData(CART_QUERY_KEY, newCart);
    },
  });

  // Mutation: Update item quantity (used by debounce, not called directly)
  const updateItemMutation = useMutation({
    mutationFn: ({ itemId, quantity }: { itemId: number; quantity: number }) =>
      updateCartItem(itemId, quantity),
    onSuccess: (newCart) => {
      queryClient.setQueryData(CART_QUERY_KEY, newCart);
    },
  });

  // Mutation: Remove item from cart
  const removeItemMutation = useMutation({
    mutationFn: (itemId: number) => removeCartItem(itemId),
    onSuccess: (newCart) => {
      queryClient.setQueryData(CART_QUERY_KEY, newCart);
    },
  });

  // Mutation: Add bundle item
  const addBundleMutation = useMutation({
    mutationFn: ({
      parentItemId,
      variantId,
      quantity,
      saleOff,
    }: {
      parentItemId: number;
      variantId: number;
      quantity: number;
      saleOff: number;
    }) => addBundleItem(parentItemId, variantId, quantity, saleOff),
    onSuccess: (newCart) => {
      queryClient.setQueryData(CART_QUERY_KEY, newCart);
    },
  });

  // Mutation: Clear cart
  const clearCartMutation = useMutation({
    mutationFn: clearCartApi,
    onSuccess: (newCart) => {
      queryClient.setQueryData(CART_QUERY_KEY, newCart);
    },
  });

  // Mutation: Validate cart
  const validateCartMutation = useMutation({
    mutationFn: validateCartApi,
    onSuccess: (validation) => {
      if (validation.updatedCart) {
        queryClient.setQueryData(CART_QUERY_KEY, validation.updatedCart);
      }
    },
  });

  // ── Debounced update ────────────────────────────────────
  // Updates quantity optimistically in local state, then fires
  // the API call after DEBOUNCE_DELAY ms of inactivity.
  const updateItem = useCallback(
    (itemId: number, quantity: number) => {
      // 1. Optimistic: set pending quantity immediately
      setPendingQuantities((prev) => {
        const next = new Map(prev);
        next.set(itemId, quantity);
        return next;
      });

      // 2. Clear any existing timer for this item
      const existing = debounceTimers.current.get(itemId);
      if (existing) clearTimeout(existing);

      // 3. Set new debounce timer
      const timer = setTimeout(async () => {
        debounceTimers.current.delete(itemId);
        try {
          await updateItemMutation.mutateAsync({ itemId, quantity });
        } catch {
          // API failed — refetch to get server state
          refetch();
        } finally {
          // Clear pending regardless of success/failure
          setPendingQuantities((prev) => {
            const next = new Map(prev);
            next.delete(itemId);
            return next;
          });
        }
      }, DEBOUNCE_DELAY);

      debounceTimers.current.set(itemId, timer);
    },
    [updateItemMutation, refetch]
  );

  // Wrapper functions for easier usage
  const addItem = useCallback(
    async (variantId: number, quantity: number = 1) => {
      return addItemMutation.mutateAsync({ variantId, quantity });
    },
    [addItemMutation]
  );

  const removeItem = useCallback(
    async (itemId: number) => {
      // Cancel any pending debounce for this item
      const timer = debounceTimers.current.get(itemId);
      if (timer) {
        clearTimeout(timer);
        debounceTimers.current.delete(itemId);
        setPendingQuantities((prev) => {
          const next = new Map(prev);
          next.delete(itemId);
          return next;
        });
      }
      return removeItemMutation.mutateAsync(itemId);
    },
    [removeItemMutation]
  );

  const addBundle = useCallback(
    async (
      parentItemId: number,
      variantId: number,
      quantity: number,
      saleOff: number
    ) => {
      return addBundleMutation.mutateAsync({
        parentItemId,
        variantId,
        quantity,
        saleOff,
      });
    },
    [addBundleMutation]
  );

  const clearCartItems = useCallback(async () => {
    // Cancel all pending debounces
    debounceTimers.current.forEach((t) => clearTimeout(t));
    debounceTimers.current.clear();
    setPendingQuantities(new Map());
    return clearCartMutation.mutateAsync();
  }, [clearCartMutation]);

  const validateCart = useCallback(async (): Promise<CartValidationResponse> => {
    return validateCartMutation.mutateAsync();
  }, [validateCartMutation]);

  // Invalidate cart query (useful after login/logout)
  const invalidateCart = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
  }, [queryClient]);

  // ── Items with optimistic quantities ────────────────────
  const rawItems = cart?.items ?? [];
  const items = useMemo(() => {
    if (pendingQuantities.size === 0) return rawItems;

    return rawItems.map((item) => {
      const pending = pendingQuantities.get(item.id);
      if (pending === undefined) return item;
      // Recalculate lineTotal based on pending quantity
      const unitPriceAfterDiscount = item.unitPrice - item.activeSaleOff;
      return {
        ...item,
        quantity: pending,
        lineTotal: unitPriceAfterDiscount * pending,
      };
    });
  }, [rawItems, pendingQuantities]);

  // Computed values (use optimistic items for totals)
  const itemCount = useMemo(() => cart?.summary?.itemCount ?? 0, [cart]);
  const totalQuantity = useMemo(() => cart?.summary?.totalQuantity ?? 0, [cart]);
  const grandTotal = useMemo(() => {
    if (pendingQuantities.size === 0) return cart?.summary?.grandTotal ?? 0;
    // Recalculate based on optimistic items
    return items.reduce((sum, item) => sum + item.lineTotal, 0);
  }, [cart, items, pendingQuantities]);
  const subtotal = useMemo(() => cart?.summary?.subtotal ?? 0, [cart]);
  const bundleDiscount = useMemo(() => cart?.summary?.bundleDiscount ?? 0, [cart]);
  const saleOffDiscount = useMemo(() => cart?.summary?.saleOffDiscount ?? 0, [cart]);
  const promotionDiscount = useMemo(() => cart?.summary?.promotionDiscount ?? 0, [cart]);
  const appliedPromotion = useMemo(() => cart?.summary?.appliedPromotion ?? null, [cart]);
  const isEmpty = useMemo(() => !cart?.items || cart.items.length === 0, [cart]);

  // Loading states
  const isAddingItem = addItemMutation.isPending;
  const isUpdatingItem = updateItemMutation.isPending;
  const hasPendingUpdates = pendingQuantities.size > 0;
  const isRemovingItem = removeItemMutation.isPending;
  const isAddingBundle = addBundleMutation.isPending;
  const isClearingCart = clearCartMutation.isPending;
  const isValidatingCart = validateCartMutation.isPending;

  const isMutating =
    isAddingItem ||
    isUpdatingItem ||
    isRemovingItem ||
    isAddingBundle ||
    isClearingCart ||
    isValidatingCart;

  return {
    // Cart data
    cart,
    items,
    bundlesAvailable: cart?.bundlesAvailable ?? [],
    gifts: cart?.gifts ?? [],
    summary: cart?.summary ?? null,

    // Computed values
    itemCount,
    totalQuantity,
    grandTotal,
    subtotal,
    bundleDiscount,
    saleOffDiscount,
    promotionDiscount,
    appliedPromotion,
    isEmpty,

    // Loading states
    isLoading,
    isError,
    error,
    isMutating,
    isAddingItem,
    isUpdatingItem,
    hasPendingUpdates,
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
      validateCart: validateCartMutation,
    },
  };
}

// Export type for use in components
export type UseCartReturn = ReturnType<typeof useCart>;

