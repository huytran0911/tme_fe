import { apiGet, apiPost, apiDelete } from "@/lib/httpClient";

// ============================================
// Response Types
// ============================================

export interface WishlistItemResponse {
    wishlistId: number;
    productId: number;
    productCode: string | null;
    productName: string | null;
    productNameEn: string | null;
    imageUrl: string | null;
    price: number;
    finalPrice: number;
    activeSaleOff: number;
    isActive: boolean;
    addedAt: string;
}

export interface WishlistPageResponse {
    items: WishlistItemResponse[];
    totalCount: number;
}

export interface WishlistStatusResponse {
    productId: number;
    isWishlisted: boolean;
}

// ============================================
// API Envelope
// ============================================

interface ApiEnvelope<T> {
    success: boolean;
    traceId: string | null;
    data: T | null;
    error: { code?: string; message?: string } | null;
}

// ============================================
// API Base URL
// ============================================

const WISHLIST_URL = "/client/v1/wishlist";

// ============================================
// API Functions
// ============================================

/**
 * Get paginated wishlist for the current user
 */
export async function getWishlist(
    page = 1,
    pageSize = 20
): Promise<WishlistPageResponse> {
    const envelope = await apiGet<ApiEnvelope<WishlistPageResponse>>(
        `${WISHLIST_URL}?page=${page}&pageSize=${pageSize}`
    );

    if (!envelope.success || !envelope.data) {
        throw new Error("Không tải được danh sách yêu thích.");
    }

    return envelope.data;
}

/**
 * Check if a product is in the wishlist
 */
export async function getWishlistStatus(
    productId: number
): Promise<WishlistStatusResponse> {
    const envelope = await apiGet<ApiEnvelope<WishlistStatusResponse>>(
        `${WISHLIST_URL}/${productId}/status`
    );

    if (!envelope.success || !envelope.data) {
        throw new Error("Không kiểm tra được trạng thái yêu thích.");
    }

    return envelope.data;
}

/**
 * Add a product to the wishlist
 */
export async function addToWishlist(productId: number): Promise<void> {
    const envelope = await apiPost<ApiEnvelope<unknown>>(
        `${WISHLIST_URL}/${productId}`,
        {}
    );

    if (!envelope.success) {
        throw new Error("Không thể thêm vào danh sách yêu thích.");
    }
}

/**
 * Remove a product from the wishlist
 */
export async function removeFromWishlist(productId: number): Promise<void> {
    const envelope = await apiDelete<ApiEnvelope<unknown>>(
        `${WISHLIST_URL}/${productId}`
    );

    if (!envelope.success) {
        throw new Error("Không thể xoá khỏi danh sách yêu thích.");
    }
}
