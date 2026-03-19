import { apiGet } from "@/lib/httpClient";

// API endpoint
const HOME_PRODUCTS_URL = "/client/v1/home/products";

// Types based on swagger
export interface HomeProductItem {
  productId: number;
  productCode: string;
  name: string;
  nameEn: string | null;
  categoryId: number;
  image: string | null;
  quantity: number | null;
  price1: number;
  saleOffValue: number;
  finalPrice: number;
  hasSale: boolean;
  dateAdded: string;
}

export interface HomeProductGroup {
  groupId: number;
  groupName: string | null;
  groupNameEn: string | null;
  showStyle: number;
  updatedDate: string | null;
  products: HomeProductItem[];
}

export interface HomeProductsResponse {
  success: boolean;
  data: HomeProductGroup[] | null;
  error?: {
    code?: string;
    message?: string;
  } | null;
  traceId?: string | null;
}

export interface GetHomeProductsParams {
  lang?: string;
  groupId?: number;
}

/**
 * Get home page product groups
 * @param params - Query parameters (lang, groupId)
 */
export async function getHomeProducts(
  params: GetHomeProductsParams = {}
): Promise<HomeProductsResponse> {
  const queryParams: Record<string, string | number> = {};

  if (params.lang) {
    queryParams.lang = params.lang;
  }

  if (params.groupId !== undefined) {
    queryParams.groupId = params.groupId;
  }

  return apiGet<HomeProductsResponse>(HOME_PRODUCTS_URL, {
    params: queryParams,
  });
}
