import { apiGet } from "@/lib/httpClient";

// ============================================================================
// Types
// ============================================================================

export interface AdministrativeUnit {
    id: number;
    name: string | null;
    level: number;
    parentId: number | null;
    status: number;
    childCount: number;
}

interface AdministrativeUnitListApiResponse {
    success: boolean;
    data: AdministrativeUnit[] | null;
    error: { code?: string | null; message?: string | null } | null;
    traceId: string | null;
}

// ============================================================================
// API Functions
// ============================================================================

const BASE_URL = "/client/v1/administrative-units";

/** Get all provinces (Tỉnh/Thành phố) */
export async function getProvinces(): Promise<AdministrativeUnit[]> {
    const response = await apiGet<AdministrativeUnitListApiResponse>(
        `${BASE_URL}/provinces`,
        { skipAuth: true }
    );
    if (!response.success || !response.data) {
        throw new Error(response.error?.message || "Không thể tải danh sách tỉnh/thành phố.");
    }
    return response.data;
}

/** Get children units (Districts of Province, or Wards of District) */
export async function getAdminUnitChildren(parentId: number): Promise<AdministrativeUnit[]> {
    const response = await apiGet<AdministrativeUnitListApiResponse>(
        `${BASE_URL}/children/${parentId}`,
        { skipAuth: true }
    );
    if (!response.success || !response.data) {
        throw new Error(response.error?.message || "Không thể tải đơn vị hành chính.");
    }
    return response.data;
}
