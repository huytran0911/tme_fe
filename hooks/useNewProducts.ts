import { useQuery } from "@tanstack/react-query";
import { getNewProducts, type GetNewProductsParams, type PagedResult, type ProductByCreatedDateDto } from "@/lib/api/newProducts";

const CACHE_KEY = "new-products";

/**
 * React Query hook for fetching new products (IsNewProduct = true)
 * @param params - Query parameters (page, pageSize)
 */
export function useNewProducts(params: GetNewProductsParams = {}) {
    return useQuery<PagedResult<ProductByCreatedDateDto>>({
        queryKey: [CACHE_KEY, params],
        queryFn: () => getNewProducts(params),
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });
}
