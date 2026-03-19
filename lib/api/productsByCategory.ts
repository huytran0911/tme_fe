import { apiGet } from "@/lib/httpClient";

export interface ProductByCategoryDto {
  id: number;
  code: string;
  name: string;
  nameEn: string;
  price: number;
  maxPrice: number | null; // [NEW] Max price from variants (null if only 1 price)
  originalPrice: number | null;
  activeSaleOff: number | null; // Discount amount per item (giảm giá trên mỗi sản phẩm)
  finalPrice: number | null; // Price after discount
  saleOff: number; // Discount percentage (kept for backward compatibility)
  imageUrl: string;
  categoryId: number;
  categoryName: string;
  isNew: boolean;
  isActive: boolean;
  quantity: number;
  dateAdded: string;
}

export interface PagedResult<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
  error: string | null;
  traceId: string | null;
}

export interface ProductsByCategoryQuery {
  categoryId: number;
  page?: number;
  pageSize?: number;
}

const PRODUCTS_BY_CATEGORY_URL = "/client/v1/products/by-category";

export async function getProductsByCategory(
  query: ProductsByCategoryQuery,
): Promise<PagedResult<ProductByCategoryDto>> {
  const { categoryId, page = 1, pageSize = 10 } = query;

  const envelope = await apiGet<ApiEnvelope<PagedResult<ProductByCategoryDto>>>(
    PRODUCTS_BY_CATEGORY_URL,
    {
      params: {
        CategoryId: categoryId,
        Page: page,
        PageSize: pageSize,
      },
    },
  );

  if (!envelope.success) {
    throw new Error(envelope.error || "Không tải được danh sách sản phẩm.");
  }

  return envelope.data;
}
