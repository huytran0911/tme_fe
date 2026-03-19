"use client";

import { useQuery } from "@tanstack/react-query";
import { getProfile, type CustomerProfileResponse } from "@/lib/api/auth";
import { useAuth } from "@/contexts/AuthContext";

const PROFILE_KEY = "customer-profile";

export function useProfile() {
  const { isAuthenticated } = useAuth();

  return useQuery<CustomerProfileResponse>({
    queryKey: [PROFILE_KEY],
    queryFn: getProfile,
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
}
