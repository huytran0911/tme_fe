import { useQuery } from "@tanstack/react-query";
import { getHomeProducts, type GetHomeProductsParams, type HomeProductsResponse } from "@/lib/api/homeProducts";

const CACHE_KEY = "home-products";

/**
 * React Query hook for fetching home products
 * @param params - Query parameters (lang, groupId)
 */
export function useHomeProducts(params: GetHomeProductsParams = {}) {
  return useQuery<HomeProductsResponse>({
    queryKey: [CACHE_KEY, params],
    queryFn: () => getHomeProducts(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
