import { apiGet, apiPost, apiPut, apiDelete } from "@/lib/httpClient";

// ============================================================================
// Types
// ============================================================================

export interface AddressListItem {
    id: number;
    addressType: number; // 1 = 3-level, 2 = 2-level
    recipientName: string | null;
    phone: string | null;
    addressName: string | null;
    fullAddress: string | null;
    // V1 (3-level) display fields
    wardName: string | null;
    districtName: string | null;
    provinceName: string | null;
    // V2 (2-level) display fields
    wardNameV2: string | null;
    provinceNameV2: string | null;
    isDefault: boolean;
}

export interface AddressDetail {
    id: number;
    customerId: number;
    addressType: number; // 1 = 3-level, 2 = 2-level
    recipientName: string | null;
    phone: string | null;
    email: string | null;
    administrativeUnitId: number;
    administrativeUnitV2Id: number | null;
    wardName: string | null;
    districtName: string | null;
    provinceName: string | null;
    wardNameV2: string | null;
    provinceNameV2: string | null;
    addressName: string | null;
    detailAddress: string | null;
    fullAddress: string | null;
    isDefault: boolean;
    createdAt: string;
    createdBy: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
}

export interface CreateAddressRequest {
    customerId: number;
    addressType: number; // 1 or 2
    recipientName?: string;
    phone?: string;
    email?: string;
    administrativeUnitId: number;
    administrativeUnitV2Id?: number | null;
    addressName: string;
    detailAddress: string;
    isDefault: boolean;
}

export interface UpdateAddressRequest {
    addressType: number; // 1 or 2
    recipientName?: string;
    phone?: string;
    email?: string;
    administrativeUnitId: number;
    administrativeUnitV2Id?: number | null;
    addressName: string;
    detailAddress: string;
}

interface AddressListApiResponse {
    success: boolean;
    data: AddressListItem[] | null;
    error: { code?: string | null; message?: string | null } | null;
    traceId: string | null;
}

interface AddressDetailApiResponse {
    success: boolean;
    data: AddressDetail | null;
    error: { code?: string | null; message?: string | null } | null;
    traceId: string | null;
}

interface ObjectApiResponse {
    success: boolean;
    data: unknown;
    error: { code?: string | null; message?: string | null } | null;
    traceId: string | null;
}

// ============================================================================
// API Functions
// ============================================================================

const BASE_URL = "/client/v1/my-addresses";

/** Get all addresses of current customer (ordered by default first) */
export async function getMyAddresses(): Promise<AddressListItem[]> {
    const response = await apiGet<AddressListApiResponse>(BASE_URL);
    if (!response.success || !response.data) {
        throw new Error(response.error?.message || "Không thể tải danh sách địa chỉ.");
    }
    return response.data;
}

/** Get default address of current customer */
export async function getMyDefaultAddress(): Promise<AddressDetail> {
    const response = await apiGet<AddressDetailApiResponse>(`${BASE_URL}/default`);
    if (!response.success || !response.data) {
        throw new Error(response.error?.message || "Không tìm thấy địa chỉ mặc định.");
    }
    return response.data;
}

/** Create a new address */
export async function createMyAddress(request: CreateAddressRequest): Promise<void> {
    const response = await apiPost<ObjectApiResponse>(BASE_URL, request);
    if (!response.success) {
        throw new Error(response.error?.message || "Không thể tạo địa chỉ mới.");
    }
}

/** Update an address */
export async function updateMyAddress(id: number, request: UpdateAddressRequest): Promise<void> {
    const response = await apiPut<ObjectApiResponse>(`${BASE_URL}/${id}`, request);
    if (!response.success) {
        throw new Error(response.error?.message || "Không thể cập nhật địa chỉ.");
    }
}

/** Delete an address */
export async function deleteMyAddress(id: number): Promise<void> {
    const response = await apiDelete<ObjectApiResponse>(`${BASE_URL}/${id}`);
    if (!response.success) {
        throw new Error(response.error?.message || "Không thể xóa địa chỉ.");
    }
}

/** Set an address as default */
export async function setMyDefaultAddress(id: number): Promise<void> {
    const response = await apiPut<ObjectApiResponse>(`${BASE_URL}/${id}/set-default`);
    if (!response.success) {
        throw new Error(response.error?.message || "Không thể đặt địa chỉ mặc định.");
    }
}
