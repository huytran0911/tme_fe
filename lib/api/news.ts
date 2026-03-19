import { apiGet } from "@/lib/httpClient";

// API endpoints
const NEWS_LIST_URL = "/client/v1/news";
const NEWS_DETAIL_URL = "/client/v1/news";

// Types based on swagger
export interface NewsListItem {
  id: number;
  name: string | null;
  nameEn: string | null;
  image: string | null;
  status: number;
  typeNews: string | null;
  sort: number;
  view: number;
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

export interface NewsListResponse {
  success: boolean;
  data: PagedResult<NewsListItem> | null;
  error?: {
    code?: string;
    message?: string;
  } | null;
  traceId?: string | null;
}

export interface NewsDetail {
  id: number;
  name: string | null;
  nameEn: string | null;
  image: string | null;
  status: number;
  shortDescription: string | null;
  shortDescriptionEn: string | null;
  description: string | null;
  descriptionEn: string | null;
  typeNews: string | null;
  sort: number;
  view: number;
  dateAdded: string;
}

export interface NewsDetailResponse {
  success: boolean;
  data: NewsDetail | null;
  error?: {
    code?: string;
    message?: string;
  } | null;
  traceId?: string | null;
}

export interface GetNewsListParams {
  typeNews?: string;
  page?: number;
  pageSize?: number;
}

/**
 * Get published news list for client
 * @param params - Query parameters (typeNews, page, pageSize)
 */
export async function getNewsList(
  params: GetNewsListParams = {}
): Promise<NewsListResponse> {
  const queryParams: Record<string, string | number> = {
    page: params.page ?? 1,
    pageSize: params.pageSize ?? 20,
  };

  if (params.typeNews) {
    queryParams.typeNews = params.typeNews;
  }

  return apiGet<NewsListResponse>(NEWS_LIST_URL, {
    params: queryParams,
  });
}

/**
 * Get news detail by ID
 * @param id - News ID
 */
export async function getNewsDetail(id: number): Promise<NewsDetailResponse> {
  return apiGet<NewsDetailResponse>(`${NEWS_DETAIL_URL}/${id}`);
}
