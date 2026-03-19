import { apiGet } from "@/lib/httpClient";

export interface ProductByCreatedDateDto {
  id: number;
  code: string;
  name: string;
  nameEn: string;
  price: number;
  originalPrice: number | null;
  saleOff: number;
  imageUrl: string;
  categoryId: number;
  categoryName: string;
  isNew: boolean;
  isActive: boolean;
  quantity: number | null;
  dateAdded: string; // ISO datetime
  quantityRemaining?: number | null;
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

const NEW_PRODUCTS_URL = "/client/v1/products/by-created-date";

interface GetProductsByCreatedDateParams {
  year: number;
  month: number;
  page?: number;
  pageSize?: number;
  sortBy?: number;
}

export async function getNewProductsByCreatedDate(
  params: GetProductsByCreatedDateParams,
): Promise<PagedResult<ProductByCreatedDateDto>> {
  const {
    year,
    month,
    page = 1,
    pageSize = 10,
    sortBy = 1,
  } = params;

  const response = await apiGet<ApiEnvelope<PagedResult<ProductByCreatedDateDto>>>(
    NEW_PRODUCTS_URL,
    {
      params: {
        Year: year,
        Month: month,
        Page: page,
        PageSize: pageSize,
        SortBy: sortBy,
      },
    },
  );

  if (!response.success || !response.data) {
    throw new Error(response.error || "Không lấy được dữ liệu sản phẩm mới.");
  }

  return response.data;
}

// --- GET /client/v1/products/new ---

const NEW_PRODUCTS_NEW_URL = "/client/v1/products/new";

export interface GetNewProductsParams {
  page?: number;
  pageSize?: number;
}

/**
 * Get new products (IsNewProduct = true), ordered by UpdatedAt DESC
 */
export async function getNewProducts(
  params: GetNewProductsParams = {}
): Promise<PagedResult<ProductByCreatedDateDto>> {
  const { page = 1, pageSize = 10 } = params;

  const response = await apiGet<ApiEnvelope<PagedResult<ProductByCreatedDateDto>>>(
    NEW_PRODUCTS_NEW_URL,
    {
      params: {
        Page: page,
        PageSize: pageSize,
      },
    }
  );

  if (!response.success || !response.data) {
    throw new Error(response.error || "Không tải được danh sách sản phẩm mới.");
  }

  return response.data;
}
