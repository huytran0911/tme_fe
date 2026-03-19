"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  getProductLegacy,
  getProductRelated,
  getProductSimilar,
  getProductVariants,
  getLegacyProducts,
  getLegacyProductFilters,
  type ProductLegacyDetailDto,
  type ProductRelatedResponse,
  type ProductSimilarResponse,
  type ProductVariantsResponse,
  type LegacyProductsParams,
  type LegacyProductListPagedResult,
  type LegacyProductFilterParams,
  type LegacyProductFilterOptions,
} from "@/lib/api/product-legacy";

const PRODUCT_LEGACY_KEY = "product-legacy";
const PRODUCT_RELATED_KEY = "product-related";
const PRODUCT_SIMILAR_KEY = "product-similar";
const PRODUCT_VARIANTS_KEY = "product-variants";
const LEGACY_PRODUCTS_KEY = "legacy-products";
const LEGACY_PRODUCT_FILTERS_KEY = "legacy-product-filters";

export function useProductLegacy(productId: number, enabled: boolean = true) {
  return useQuery<ProductLegacyDetailDto>({
    queryKey: [PRODUCT_LEGACY_KEY, productId],
    queryFn: () => getProductLegacy(productId),
    enabled: Boolean(productId) && enabled,
    placeholderData: keepPreviousData,
  });
}

export function useProductRelated(productId: number, enabled: boolean = true) {
  return useQuery<ProductRelatedResponse[]>({
    queryKey: [PRODUCT_RELATED_KEY, productId],
    queryFn: () => getProductRelated(productId),
    enabled: Boolean(productId) && enabled,
    placeholderData: keepPreviousData,
  });
}

export function useProductSimilar(productId: number, enabled: boolean = true) {
  return useQuery<ProductSimilarResponse[]>({
    queryKey: [PRODUCT_SIMILAR_KEY, productId],
    queryFn: () => getProductSimilar(productId),
    enabled: Boolean(productId) && enabled,
    placeholderData: keepPreviousData,
  });
}

export function useProductVariants(productId: number, enabled: boolean = true) {
  return useQuery<ProductVariantsResponse>({
    queryKey: [PRODUCT_VARIANTS_KEY, productId],
    queryFn: () => getProductVariants(productId),
    enabled: Boolean(productId) && enabled,
    placeholderData: keepPreviousData,
  });
}

// ============================================================================
// Legacy Products List Hook
// ============================================================================

export function useLegacyProducts(params: LegacyProductsParams, enabled: boolean = true) {
  return useQuery<LegacyProductListPagedResult>({
    queryKey: [LEGACY_PRODUCTS_KEY, params],
    queryFn: () => getLegacyProducts(params),
    enabled,
    placeholderData: keepPreviousData,
  });
}

// ============================================================================
// Legacy Product Filters Hook
// ============================================================================

export function useLegacyProductFilters(params: LegacyProductFilterParams, enabled: boolean = true) {
  return useQuery<LegacyProductFilterOptions>({
    queryKey: [LEGACY_PRODUCT_FILTERS_KEY, params],
    queryFn: () => getLegacyProductFilters(params),
    enabled,
    placeholderData: keepPreviousData,
    staleTime: 5 * 60 * 1000, // Cache filter options for 5 minutes
  });
}
