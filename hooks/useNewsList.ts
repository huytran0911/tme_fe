import { useQuery } from "@tanstack/react-query";
import { getNewsList, type GetNewsListParams, type NewsListResponse } from "@/lib/api/news";

const CACHE_KEY = "news-list";

/**
 * React Query hook for fetching news list
 * @param params - Query parameters (typeNews, page, pageSize)
 */
export function useNewsList(params: GetNewsListParams = {}) {
  return useQuery<NewsListResponse>({
    queryKey: [CACHE_KEY, params],
    queryFn: () => getNewsList(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
