import { apiGet } from "@/lib/httpClient";

// ============================================
// Types
// ============================================

export interface PromotionItem {
    id: number;
    name: string;
    nameEn: string | null;
    applyFrom: string;
    applyTo: string;
    saleOff: number;
    isPercent: boolean;
    freeTransportFee: boolean;
    applyForTotal: number;
    forever: boolean;
    popup: boolean;
    status: string;
    createdAt: string;
}

export interface PromotionsPagedData {
    items: PromotionItem[];
    page: number;
    pageSize: number;
    totalCount: number;
}

export interface PromotionsResponse {
    success: boolean;
    data: PromotionsPagedData | null;
    error: unknown;
    traceId: string | null;
}

// ============================================
// API
// ============================================

const PROMOTIONS_URL = "/client/v1/promotions";

/**
 * Fetch active promotions (no auth required)
 */
export async function getPromotions(): Promise<PromotionsResponse> {
    return apiGet<PromotionsResponse>(PROMOTIONS_URL, {
        params: { page: 1, pageSize: 100 },
        skipAuth: true,
    });
}
