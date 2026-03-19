import { apiGet } from "@/lib/httpClient";

// ============================================================================
// Legacy Product List Types
// ============================================================================

export interface LegacyProductsParams {
  categoryId?: number;
  keyword?: string;
  providerId?: string; // Supports comma-separated values (e.g., "1,2,3")
  packed?: string; // Supports comma-separated values
  pin?: string; // Supports comma-separated values
  type?: string; // Supports comma-separated values
  origin?: string; // Supports comma-separated values
  page?: number;
  pageSize?: number;
  sortBy?: 'price' | 'name' | 'date';
  sortDir?: 'asc' | 'desc';
}

export interface LegacyProductListItem {
  id: number;
  code: string | null;
  name: string | null;
  nameEn: string | null;
  price: number | null;
  originalPrice: number | null;
  activeSaleOff: number | null;
  finalPrice: number | null;
  imageUrl: string | null;
  categoryId: number;
  categoryName: string | null;
  providerId: number | null;
  providerName: string | null;
  packed: string | null;
  pin: string | null;
  type: string | null;
  origin: string | null;
  unit: string | null;
  quantity: number | null;
  isNewProduct: boolean;
  isActive: boolean;
  dateAdded: string;
}

export interface LegacyProductListPagedResult {
  items: LegacyProductListItem[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// ============================================================================
// Legacy Product Filter Types
// ============================================================================

export interface LegacyProviderOption {
  id: number;
  name: string | null;
  nameEn: string | null;
}

export interface LegacyProductFilterOptions {
  providers: LegacyProviderOption[] | null;
  packed: string[] | null;
  pin: string[] | null;
  type: string[] | null;
  origin: string[] | null;
}

export interface LegacyProductFilterParams {
  categoryId?: number;
  providerId?: number;
  packed?: string;
  pin?: string;
  type?: string;
  origin?: string;
}

// ============================================================================
// Legacy Product Detail Types
// ============================================================================

export interface ProductLegacyDetailDto {
  id: number;
  code: string;
  name: string;
  nameEn: string | null;
  content: string | null;
  contentEn: string | null;
  shortContent: string | null;
  shortContentEn: string | null;
  image: string | null;
  image2: string | null;
  image3: string | null;
  image4: string | null;
  price1: number;
  originalPrice: number | null;
  activeSaleOff: number; // Wholesale discount per item (mua sỉ giảm trên mỗi sản phẩm)
  finalPrice: number;
  categoryId: number;
  categoryName: string;
  providerId: number | null;
  providerName: string | null;
  packed: string | null;
  pin: string | null;
  type: string | null;
  origin: string | null;
  unit: string | null;
  quantity: number;
  isNewProduct: boolean;
  isActive: boolean;
  dateAdded: string;
}

export interface ProductRelatedResponse {
  productId: number;
  code: string | null;
  name: string | null;
  image: string | null;
}

export interface ProductSimilarResponse {
  productId: number;
  code: string | null;
  name: string | null;
  image: string | null;
}

// Variant types
export interface ProductVariantOptionResponse {
  productTypeId: number;
  productTypeName: string | null;
  productTypeValueId: number;
  productTypeValueName: string | null;
}

export interface PriceTierResponse {
  id: number;
  minQty: number;
  price: number;
}

export interface ProductVariantClientResponse {
  id: number;
  sku: string | null;
  stock: number;
  price: number | null;
  options: ProductVariantOptionResponse[] | null;
  priceTiers: PriceTierResponse[] | null;
}

// Wrapper response for variants with activeSaleOff at top level
export interface ProductVariantsResponse {
  activeSaleOff: number | null;
  variants: ProductVariantClientResponse[] | null;
}

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
  error: string | null;
  traceId: string | null;
}

const PRODUCT_LEGACY_URL = "/client/v1/products";

export async function getProductLegacy(productId: number): Promise<ProductLegacyDetailDto> {
  const envelope = await apiGet<ApiEnvelope<ProductLegacyDetailDto>>(
    `${PRODUCT_LEGACY_URL}/${productId}/legacy`,
  );

  if (!envelope.success) {
    throw new Error(envelope.error || "Không tải được thông tin sản phẩm.");
  }

  return envelope.data;
}

export async function getProductRelated(productId: number): Promise<ProductRelatedResponse[]> {
  const envelope = await apiGet<ApiEnvelope<ProductRelatedResponse[]>>(
    `${PRODUCT_LEGACY_URL}/${productId}/related`,
  );

  if (!envelope.success) {
    throw new Error(envelope.error || "Không tải được sản phẩm đề nghị.");
  }

  return envelope.data || [];
}

export async function getProductSimilar(productId: number): Promise<ProductSimilarResponse[]> {
  const envelope = await apiGet<ApiEnvelope<ProductSimilarResponse[]>>(
    `${PRODUCT_LEGACY_URL}/${productId}/similar`,
  );

  if (!envelope.success) {
    throw new Error(envelope.error || "Không tải được sản phẩm cùng chức năng.");
  }

  return envelope.data || [];
}

export async function getProductVariants(productId: number): Promise<ProductVariantsResponse> {
  const envelope = await apiGet<ApiEnvelope<ProductVariantsResponse>>(
    `${PRODUCT_LEGACY_URL}/${productId}/variants`,
  );

  if (!envelope.success) {
    throw new Error(envelope.error || "Không tải được biến thể sản phẩm.");
  }

  return envelope.data || { activeSaleOff: null, variants: [] };
}

// ============================================================================
// Legacy Products List API
// ============================================================================

export async function getLegacyProducts(
  params: LegacyProductsParams = {},
): Promise<LegacyProductListPagedResult> {
  const { categoryId, keyword, providerId, packed, pin, type, origin, page = 1, pageSize = 16, sortBy, sortDir } = params;

  const envelope = await apiGet<ApiEnvelope<LegacyProductListPagedResult>>(
    `${PRODUCT_LEGACY_URL}/legacy`,
    {
      params: {
        CategoryId: categoryId,
        Keyword: keyword,
        ProviderId: providerId,
        Packed: packed,
        Pin: pin,
        Type: type,
        Origin: origin,
        Page: page,
        PageSize: pageSize,
        SortBy: sortBy,
        SortDir: sortDir,
      },
    },
  );

  if (!envelope.success) {
    throw new Error(envelope.error || "Không tải được danh sách sản phẩm.");
  }

  return envelope.data || { items: [], totalCount: 0, page: 1, pageSize: 16, totalPages: 0, hasNextPage: false, hasPreviousPage: false };
}

// ============================================================================
// Legacy Product Filters API
// ============================================================================

export async function getLegacyProductFilters(
  params: LegacyProductFilterParams = {},
): Promise<LegacyProductFilterOptions> {
  const { categoryId, providerId, packed, pin, type, origin } = params;

  const envelope = await apiGet<ApiEnvelope<LegacyProductFilterOptions>>(
    `${PRODUCT_LEGACY_URL}/legacy/filters`,
    {
      params: {
        CategoryId: categoryId,
        ProviderId: providerId,
        Packed: packed,
        Pin: pin,
        Type: type,
        Origin: origin,
      },
    },
  );

  if (!envelope.success) {
    throw new Error(envelope.error || "Không tải được bộ lọc sản phẩm.");
  }

  return envelope.data || { providers: [], packed: [], pin: [], type: [], origin: [] };
}
