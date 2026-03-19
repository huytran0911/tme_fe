"use client";

import { useQuery } from "@tanstack/react-query";
import {
    getProvinces,
    getAdminUnitChildren,
    type AdministrativeUnit,
} from "@/lib/api/administrativeUnits";
import {
    getProvincesV2,
    getAdminUnitChildrenV2,
} from "@/lib/api/administrativeUnitsV2";

// ============================================================================
// V1 — 3-level (Province → District → Ward)
// ============================================================================

/** Get all provinces (Tỉnh/Thành phố) — data is static, cache forever */
export function useProvinces() {
    return useQuery<AdministrativeUnit[]>({
        queryKey: ["provinces"],
        queryFn: getProvinces,
        staleTime: Infinity, // Administrative data rarely changes
        retry: 2,
    });
}

/** Get children units (Districts of Province, or Wards of District) */
export function useAdminUnitChildren(parentId: number | null) {
    return useQuery<AdministrativeUnit[]>({
        queryKey: ["admin-unit-children", parentId],
        queryFn: () => getAdminUnitChildren(parentId!),
        enabled: !!parentId,
        staleTime: Infinity,
        retry: 2,
    });
}

// ============================================================================
// V2 — 2-level (Province → Ward, no District)
// ============================================================================

/** Get all provinces (V2 — 2-level system) */
export function useProvincesV2() {
    return useQuery<AdministrativeUnit[]>({
        queryKey: ["provinces-v2"],
        queryFn: getProvincesV2,
        staleTime: Infinity,
        retry: 2,
    });
}

/** Get children units (Wards of Province — V2, skips District) */
export function useAdminUnitChildrenV2(parentId: number | null) {
    return useQuery<AdministrativeUnit[]>({
        queryKey: ["admin-unit-children-v2", parentId],
        queryFn: () => getAdminUnitChildrenV2(parentId!),
        enabled: !!parentId,
        staleTime: Infinity,
        retry: 2,
    });
}
