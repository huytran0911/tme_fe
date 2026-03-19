"use client";

import { useCallback } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createOrder,
  previewOrder,
  trackOrder,
  getMyOrders,
  cancelOrder,
  type CreateOrderRequest,
  type CreateOrderResponse,
  type OrderPreviewRequest,
  type OrderPreviewResponse,
  type SalesOrderDetailResponse,
  type MyOrdersResponse,
  type CancelOrderResponse,
  type OrderStatus,
} from "@/lib/api/orders";

// ============================================
// Query Keys
// ============================================

const ORDER_QUERY_KEYS = {
  all: ["orders"] as const,
  myOrders: (page: number, pageSize: number, status?: OrderStatus) =>
    [...ORDER_QUERY_KEYS.all, "my-orders", { page, pageSize, status }] as const,
  tracking: (orderCode: string, phone?: string) =>
    [...ORDER_QUERY_KEYS.all, "tracking", orderCode, phone] as const,
  preview: (items: OrderPreviewRequest["items"]) =>
    [...ORDER_QUERY_KEYS.all, "preview", JSON.stringify(items)] as const,
};

// ============================================
// useCreateOrder - Mutation to create order
// ============================================

export function useCreateOrder() {
  const queryClient = useQueryClient();

  const mutation = useMutation<CreateOrderResponse, Error, CreateOrderRequest>({
    mutationFn: createOrder,
    onSuccess: () => {
      // Invalidate cart after successful order
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      // Invalidate my orders list
      queryClient.invalidateQueries({ queryKey: ORDER_QUERY_KEYS.all });
    },
  });

  const submitOrder = useCallback(
    async (request: CreateOrderRequest) => {
      return mutation.mutateAsync(request);
    },
    [mutation]
  );

  return {
    submitOrder,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    data: mutation.data,
    reset: mutation.reset,
  };
}

// ============================================
// useOrderPreview - Preview order pricing
// ============================================

export function useOrderPreview() {
  const mutation = useMutation<OrderPreviewResponse, Error, OrderPreviewRequest>({
    mutationFn: previewOrder,
  });

  const preview = useCallback(
    async (request: OrderPreviewRequest) => {
      return mutation.mutateAsync(request);
    },
    [mutation]
  );

  return {
    preview,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    data: mutation.data,
    reset: mutation.reset,
  };
}

// ============================================
// useOrderTracking - Track order by code
// ============================================

interface UseOrderTrackingOptions {
  orderCode: string;
  phone?: string;
  enabled?: boolean;
}

export function useOrderTracking(options: UseOrderTrackingOptions) {
  const { orderCode, phone, enabled = true } = options;

  const query = useQuery<SalesOrderDetailResponse>({
    queryKey: ORDER_QUERY_KEYS.tracking(orderCode, phone),
    queryFn: () => trackOrder(orderCode, phone),
    enabled: enabled && !!orderCode?.trim(),
    staleTime: 1000 * 60 * 2, // 2 minutes
    retry: 1,
  });

  return {
    order: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}

// Manual tracking mutation (for form submission)
export function useTrackOrderMutation() {
  const mutation = useMutation<
    SalesOrderDetailResponse,
    Error,
    { orderCode: string; phone?: string }
  >({
    mutationFn: ({ orderCode, phone }) => trackOrder(orderCode, phone),
  });

  const track = useCallback(
    async (orderCode: string, phone?: string) => {
      return mutation.mutateAsync({ orderCode, phone });
    },
    [mutation]
  );

  return {
    track,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    data: mutation.data,
    reset: mutation.reset,
  };
}

// ============================================
// useMyOrders - Get authenticated user's orders
// ============================================

interface UseMyOrdersOptions {
  page?: number;
  pageSize?: number;
  status?: OrderStatus;
  enabled?: boolean;
}

export function useMyOrders(options: UseMyOrdersOptions = {}) {
  const { page = 1, pageSize = 10, status, enabled = true } = options;

  const query = useQuery<MyOrdersResponse>({
    queryKey: ORDER_QUERY_KEYS.myOrders(page, pageSize, status),
    queryFn: () => getMyOrders(page, pageSize, status),
    enabled,
    staleTime: 1000 * 60 * 2, // 2 minutes
    retry: 1,
  });

  return {
    orders: query.data?.items ?? [],
    totalCount: query.data?.totalCount ?? 0,
    totalPages: query.data?.totalPages ?? 1,
    currentPage: query.data?.page ?? page,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}

// ============================================
// useCancelOrder - Cancel an order
// ============================================

export function useCancelOrder() {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    CancelOrderResponse,
    Error,
    { orderCode: string; phone: string }
  >({
    mutationFn: ({ orderCode, phone }) => cancelOrder(orderCode, phone),
    onSuccess: (_, variables) => {
      // Invalidate the specific order tracking
      queryClient.invalidateQueries({
        queryKey: ORDER_QUERY_KEYS.tracking(variables.orderCode),
      });
      // Invalidate my orders list
      queryClient.invalidateQueries({ queryKey: ORDER_QUERY_KEYS.all });
    },
  });

  const cancel = useCallback(
    async (orderCode: string, phone: string) => {
      return mutation.mutateAsync({ orderCode, phone });
    },
    [mutation]
  );

  return {
    cancel,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    data: mutation.data,
    reset: mutation.reset,
  };
}

// ============================================
// Export Types
// ============================================

export type {
  CreateOrderRequest,
  CreateOrderResponse,
  OrderPreviewRequest,
  OrderPreviewResponse,
  SalesOrderDetailResponse,
  MyOrdersResponse,
  CancelOrderResponse,
  OrderStatus,
};

export {
  OrderStatusLabels,
  getOrderStatusLabel,
  canCancelOrder,
  formatOrderAmount,
  cartItemsToOrderItems,
} from "@/lib/api/orders";
