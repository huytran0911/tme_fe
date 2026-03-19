import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPromotions, type PromotionItem, type PromotionsResponse } from "@/lib/api/promotions";

const CACHE_KEY = "promotions";

export interface AppliedPromotion extends PromotionItem {
    discountValue: number; // actual VND discount amount
}

export interface NearbyPromotion extends PromotionItem {
    remaining: number; // how much more to spend
    discountValue: number; // what they would save
}

export interface PromotionResult {
    appliedPromotions: AppliedPromotion[];
    nearbyPromotions: NearbyPromotion[];
    bestDiscount: number;
    hasFreeShipping: boolean;
}

function isPromotionActive(promo: PromotionItem, now: Date): boolean {
    if (promo.status.toLowerCase() !== "active") return false;
    if (promo.forever) return true;

    const from = new Date(promo.applyFrom);
    const to = new Date(promo.applyTo);
    return now >= from && now <= to;
}

function calcDiscount(promo: PromotionItem, grandTotal: number): number {
    if (promo.isPercent) {
        return Math.round((grandTotal * promo.saleOff) / 100);
    }
    return promo.saleOff;
}

/**
 * Hook to fetch and compute promotions against the cart grandTotal
 */
export function usePromotions(grandTotal: number) {
    const { data, isLoading, error } = useQuery<PromotionsResponse>({
        queryKey: [CACHE_KEY],
        queryFn: getPromotions,
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false,
    });

    const result = useMemo<PromotionResult>(() => {
        const empty: PromotionResult = {
            appliedPromotions: [],
            nearbyPromotions: [],
            bestDiscount: 0,
            hasFreeShipping: false,
        };

        if (!data?.data?.items?.length) return empty;

        const now = new Date();
        const active = data.data.items.filter((p) => isPromotionActive(p, now));

        const applied: AppliedPromotion[] = [];
        const nearby: NearbyPromotion[] = [];

        for (const promo of active) {
            const discountValue = calcDiscount(promo, grandTotal);

            if (grandTotal >= promo.applyForTotal) {
                applied.push({ ...promo, discountValue });
            } else {
                nearby.push({
                    ...promo,
                    remaining: promo.applyForTotal - grandTotal,
                    discountValue,
                });
            }
        }

        // Sort applied by discount value DESC (best first)
        applied.sort((a, b) => b.discountValue - a.discountValue);
        // Sort nearby by remaining ASC (closest to qualifying first)
        nearby.sort((a, b) => a.remaining - b.remaining);

        // Only apply the single best promotion
        const bestApplied = applied.length > 0 ? [applied[0]] : [];
        const bestDiscount = bestApplied.length > 0 ? bestApplied[0].discountValue : 0;
        const hasFreeShipping = bestApplied.length > 0 && bestApplied[0].freeTransportFee;

        return { appliedPromotions: bestApplied, nearbyPromotions: nearby, bestDiscount, hasFreeShipping };
    }, [data, grandTotal]);

    return { ...result, isLoading, error };
}
