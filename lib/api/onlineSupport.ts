import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/lib/httpClient";

const ONLINE_SUPPORT_URL = "/client/v1/online-support";
const CACHE_KEY = "online-support";

export interface OnlineSupportItem {
  id: number;
  name: string;
  link: string;
  phone: string;
  email: string;
  status: number;
  style: number;
  sort: number;
  language: string;
}

export interface OnlineSupportResponse {
  success: boolean;
  data: OnlineSupportItem[] | null;
  errors: unknown | null;
  traceId?: string;
}

/**
 * Fetch online support/department list
 */
export async function getOnlineSupport(): Promise<OnlineSupportItem[]> {
  console.log("[onlineSupport] Fetching departments...");
  try {
    const response = await apiGet<OnlineSupportResponse>(ONLINE_SUPPORT_URL, {
      skipAuth: true,
    });

    console.log("[onlineSupport] API Response:", response);

    if (!response.success || !response.data) {
      console.log("[onlineSupport] No data or not success");
      return [];
    }

    // Filter only active items (status = 1) and sort by sort field
    const filtered = response.data
      .filter((item) => item.status === 1)
      .sort((a, b) => a.sort - b.sort);

    console.log("[onlineSupport] Filtered departments:", filtered);
    return filtered;
  } catch (error) {
    console.error("[onlineSupport] Failed to fetch:", error);
    return [];
  }
}

/**
 * Department key mapping - extract key from name field
 * e.g., "{support_sale}" -> "support_sale"
 */
export function extractDepartmentKey(name: string): string | null {
  const match = name.match(/^\{(\w+)\}$/);
  return match ? match[1] : null;
}

/**
 * React Query hook for fetching online support with caching
 * - staleTime: 5 minutes (data won't refetch if fresh)
 * - gcTime: 10 minutes (cache kept in memory)
 */
export function useOnlineSupport() {
  return useQuery({
    queryKey: [CACHE_KEY],
    queryFn: getOnlineSupport,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    refetchOnWindowFocus: false, // Prevent refetch when window regains focus
    refetchOnMount: false, // Don't refetch if data exists
    refetchOnReconnect: false, // Don't refetch on reconnect
  });
}
