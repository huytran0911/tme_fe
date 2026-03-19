"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllCategories, getAllCategoriesV2, type CategoryDto, type CategoryTreeItemDto } from "@/lib/api/categories";

const CATEGORY_QUERY_KEY = ["categories"];
const CATEGORY_V2_QUERY_KEY = ["categories-v2"];

export function useCategories() {
  return useQuery<CategoryDto[]>({
    queryKey: CATEGORY_QUERY_KEY,
    queryFn: getAllCategories,
    staleTime: 24 * 60 * 60 * 1000, // cache for 24h
    gcTime: 48 * 60 * 60 * 1000, // keep cache data up to 48h
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    placeholderData: (previousData) => previousData,
  });
}

// Hook for API v2 - category tree without group wrapper
export function useCategoriesV2() {
  return useQuery<CategoryTreeItemDto[]>({
    queryKey: CATEGORY_V2_QUERY_KEY,
    queryFn: getAllCategoriesV2,
    staleTime: 24 * 60 * 60 * 1000, // cache for 24h
    gcTime: 48 * 60 * 60 * 1000, // keep cache data up to 48h
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    placeholderData: (previousData) => previousData,
  });
}
