import { keepPreviousData, useQuery, useInfiniteQuery } from "@tanstack/react-query";
import {
  getProductsByCategory,
  type PagedResult,
  type ProductByCategoryDto,
  type ProductsByCategoryQuery,
} from "@/lib/api/productsByCategory";

const PRODUCTS_BY_CATEGORY_KEY = "products-by-category";
const PRODUCTS_BY_CATEGORY_INFINITE_KEY = "products-by-category-infinite";

export function useProductsByCategory(
  query: ProductsByCategoryQuery,
) {
  return useQuery({
    queryKey: [PRODUCTS_BY_CATEGORY_KEY, query.categoryId, query.page ?? 1, query.pageSize ?? 5],
    queryFn: () => getProductsByCategory(query),
    placeholderData: keepPreviousData,
  });
}

export function useProductsByCategoryInfinite(
  categoryId: number,
  pageSize: number = 10,
) {
  const isValidCategoryId = categoryId > 0 && !Number.isNaN(categoryId);

  return useInfiniteQuery({
    queryKey: [PRODUCTS_BY_CATEGORY_INFINITE_KEY, categoryId, pageSize],
    queryFn: ({ pageParam = 1 }) =>
      getProductsByCategory({ categoryId, page: pageParam, pageSize }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const paged = lastPage as PagedResult<ProductByCategoryDto>;
      if (paged.page < paged.totalPages) {
        return paged.page + 1;
      }
      return undefined;
    },
    enabled: isValidCategoryId,
  });
}
