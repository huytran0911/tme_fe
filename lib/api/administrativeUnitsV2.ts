import { apiGet } from "@/lib/httpClient";
import type { AdministrativeUnit } from "./administrativeUnits";

// Re-export the type for convenience
export type { AdministrativeUnit };

interface AdministrativeUnitListApiResponse {
    success: boolean;
    data: AdministrativeUnit[] | null;
    error: { code?: string | null; message?: string | null } | null;
    traceId: string | null;
}

// ============================================================================
// API Functions — V2 (2-level: Province → Ward)
// ============================================================================

const BASE_URL = "/client/v1/administrative-units-v2";

/** Get all provinces (V2 — 2-level system) */
export async function getProvincesV2(): Promise<AdministrativeUnit[]> {
    const response = await apiGet<AdministrativeUnitListApiResponse>(
        `${BASE_URL}/provinces`,
        { skipAuth: true }
    );
    if (!response.success || !response.data) {
        throw new Error(response.error?.message || "Không thể tải danh sách tỉnh/thành phố (V2).");
    }
    return response.data;
}

/** Get children units (Wards of Province — V2, no district level) */
export async function getAdminUnitChildrenV2(parentId: number): Promise<AdministrativeUnit[]> {
    const response = await apiGet<AdministrativeUnitListApiResponse>(
        `${BASE_URL}/children/${parentId}`,
        { skipAuth: true }
    );
    if (!response.success || !response.data) {
        throw new Error(response.error?.message || "Không thể tải đơn vị hành chính (V2).");
    }
    return response.data;
}
