import { useQuery } from "@tanstack/react-query";
import { getNewsDetail, type NewsDetailResponse } from "@/lib/api/news";

const CACHE_KEY = "news-detail";

/**
 * React Query hook for fetching news detail by ID
 * @param id - News ID
 * @param enabled - Whether to enable the query
 */
export function useNewsDetail(id: number, enabled: boolean = true) {
  return useQuery<NewsDetailResponse>({
    queryKey: [CACHE_KEY, id],
    queryFn: () => getNewsDetail(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: enabled && id > 0,
  });
}
