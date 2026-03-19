"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { buildImageUrl } from "@/lib/utils";
import { useWishlistContext } from "@/contexts/WishlistContext";
import type { WishlistItemResponse } from "@/lib/api/wishlist";
import QuickVariantModal from "@/components/product/QuickVariantModal";

const placeholderSrc =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='240' viewBox='0 0 320 240' fill='none'><rect width='320' height='240' rx='16' fill='%23f8fafc'/><rect x='36' y='40' width='248' height='160' rx='12' fill='white' stroke='%23e2e8f0' stroke-width='2'/><path d='M84 158l54-70 50 60 34-30 18 22' stroke='%23cbd5e1' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/><circle cx='120' cy='90' r='18' fill='%23e2e8f0'/><text x='160' y='195' text-anchor='middle' fill='%2394a3b8' font-family='Arial, sans-serif' font-size='14'>No image</text></svg>`,
    );

interface WishlistProductCardProps {
    item: WishlistItemResponse;
}

export default function WishlistProductCard({ item }: WishlistProductCardProps) {
    const locale = useLocale();
    const t = useTranslations("Wishlist");
    const tPD = useTranslations("ProductDetail");
    const router = useRouter();
    const { toggleWithAuth } = useWishlistContext();

    const displayName = locale === "vi"
        ? item.productName
        : (item.productNameEn?.trim() || item.productName);

    const imageSrc = item.imageUrl ? buildImageUrl(item.imageUrl) : placeholderSrc;
    const [imgSrc, setImgSrc] = useState(imageSrc);
    const [modalOpen, setModalOpen] = useState(false);

    const displayPrice = item.finalPrice > 0 ? item.finalPrice : item.price;
    const hasDiscount = item.activeSaleOff > 0 && item.price > 0;

    const formatPrice = (v: number) =>
        v.toLocaleString(locale === "vi" ? "vi-VN" : "en-US", { minimumFractionDigits: 0 });

    const handleCardClick = () => {
        router.push(`/${locale}/products/${item.productId}`);
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggleWithAuth(item.productId, displayName ?? undefined);
    };

    return (
        <article
            onClick={handleCardClick}
            className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${!item.isActive ? "border-slate-200 opacity-70" : "border-slate-200 hover:border-[#EE4D2D]"}`}
        >
            {/* Inactive badge */}
            {!item.isActive && (
                <div className="absolute left-2 top-2 z-10 rounded-md bg-slate-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                    {t("inactive")}
                </div>
            )}

            {/* Remove button */}
            <button
                type="button"
                aria-label={t("removeFromList")}
                onClick={handleRemove}
                className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm text-slate-400 transition hover:bg-red-50 hover:text-red-500"
            >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
            </button>

            {/* Image */}
            <div className={`relative aspect-[4/3] overflow-hidden bg-slate-50 ${!item.isActive ? "grayscale" : ""}`}>
                <Image
                    src={imgSrc}
                    alt={displayName || "Product"}
                    fill
                    sizes="(min-width: 1024px) 200px, 50vw"
                    className="object-contain p-2 transition group-hover:scale-105"
                    unoptimized
                    onError={() => setImgSrc(placeholderSrc)}
                />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col gap-1 p-2 sm:p-3">
                {item.productCode && (
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-[#EE4D2D]">
                        {item.productCode}
                    </div>
                )}
                <h3 className="line-clamp-2 flex-1 text-xs font-medium text-slate-800 group-hover:text-[#EE4D2D] sm:text-sm">
                    {displayName || "—"}
                </h3>

                {displayPrice > 0 && (
                    <div className="flex flex-wrap items-baseline gap-1">
                        <span className="text-sm font-semibold text-[#EE4D2D]">
                            {formatPrice(displayPrice)} đ
                        </span>
                        {hasDiscount && (
                            <span className="text-xs text-slate-400 line-through">
                                {formatPrice(item.price)} đ
                            </span>
                        )}
                    </div>
                )}

                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        setModalOpen(true);
                    }}
                    disabled={!item.isActive}
                    className="mt-1 w-full rounded-lg bg-[#EE4D2D] py-1.5 text-xs font-semibold text-white transition hover:bg-[#f05c3b] disabled:cursor-not-allowed disabled:bg-slate-300 sm:py-2"
                >
                    {tPD("addToCart")}
                </button>
            </div>

            <QuickVariantModal
                productId={item.productId}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                mode="cart"
            />
        </article>
    );
}
