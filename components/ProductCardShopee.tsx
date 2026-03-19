"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { ProductByCategoryDto } from "@/lib/api/productsByCategory";
import { buildImageUrl } from "@/lib/utils";

interface ProductCardShopeeProps {
    product: ProductByCategoryDto;
    displayName: string;
    onClick?: (product: ProductByCategoryDto) => void;
}

export default function ProductCardShopee({
    product,
    displayName,
    onClick,
}: ProductCardShopeeProps) {
    const locale = useLocale();
    const t = useTranslations("ProductCard");

    // Placeholder image
    const placeholderSrc =
        "data:image/svg+xml;utf8," +
        encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300' fill='none'><rect width='300' height='300' fill='%23f8fafc'/><path d='M100 200l50-70 50 60 30-30 20 25' stroke='%23cbd5e1' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/><circle cx='130' cy='120' r='16' fill='%23e2e8f0'/><text x='150' y='250' text-anchor='middle' fill='%2394a3b8' font-family='Arial' font-size='13'>No image</text></svg>`,
        );

    const resolvedSrc = product.imageUrl
        ? buildImageUrl(product.imageUrl)
        : placeholderSrc;
    const [imageSrc, setImageSrc] = useState<string>(resolvedSrc);

    useEffect(() => {
        setImageSrc(resolvedSrc);
    }, [resolvedSrc]);

    // --- Price & Discount Logic ---
    const activeSaleOff = product.activeSaleOff ?? 0;
    const hasActiveSaleOff = activeSaleOff > 0;
    const finalPrice = hasActiveSaleOff
        ? (product.finalPrice ?? product.price - activeSaleOff)
        : (product.finalPrice ?? product.price);

    const originalPriceValid =
        product.originalPrice !== null &&
        product.originalPrice !== undefined &&
        product.originalPrice > finalPrice;

    const discountPercent = useMemo(() => {
        if (product.saleOff > 0) return product.saleOff;
        if (hasActiveSaleOff && product.price > 0) {
            return Math.round((activeSaleOff / product.price) * 100);
        }
        if (originalPriceValid) {
            return Math.round(
                ((product.originalPrice! - finalPrice) / product.originalPrice!) * 100,
            );
        }
        return 0;
    }, [product, hasActiveSaleOff, activeSaleOff, finalPrice, originalPriceValid]);

    const hasStock = product.quantity > 0;

    const formatPrice = (value: number) =>
        value.toLocaleString(locale === "vi" ? "vi-VN" : "en-US", {
            minimumFractionDigits: 0,
        });

    const handleClick = () => {
        if (onClick) onClick(product);
    };

    return (
        <article
            onClick={handleClick}
            className={`group relative flex flex-col overflow-hidden rounded-sm border border-slate-100 bg-white transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_2px_12px_rgba(0,0,0,0.12)] ${onClick ? "cursor-pointer" : ""
                }`}
        >
            {/* ---- Image Section ---- */}
            <div className="relative aspect-square overflow-hidden bg-slate-50">
                <Image
                    src={imageSrc}
                    alt={displayName}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 25vw, 50vw"
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    unoptimized={
                        imageSrc.startsWith("https://localhost") ||
                        imageSrc.startsWith("http://localhost")
                    }
                    onError={() => {
                        if (imageSrc !== placeholderSrc) setImageSrc(placeholderSrc);
                    }}
                />

                {/* Discount Badge - Shopee style top-right */}
                {discountPercent > 0 && (
                    <div className="absolute right-0 top-0 z-10 flex flex-col items-center">
                        <div className="rounded-bl-sm bg-[#EE4D2D]/90 px-1 py-0.5 text-[11px] font-bold leading-tight text-white">
                            {discountPercent}%
                        </div>
                        <div className="text-[9px] font-semibold uppercase leading-tight text-[#EE4D2D]">
                            GIẢM
                        </div>
                    </div>
                )}

                {/* Out of Stock Overlay */}
                {!hasStock && (
                    <div className="absolute inset-0 z-10 flex items-end justify-center bg-black/5">
                        <span className="mb-2 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                            {t("outOfStock")}
                        </span>
                    </div>
                )}

                {/* "Yêu thích" / "Mới" badge bottom-left */}
                {product.isNew && (
                    <div className="absolute bottom-1 left-1 z-10 rounded-sm border border-[#EE4D2D] bg-[#fff0ee] px-1.5 py-px text-[9px] font-bold uppercase text-[#EE4D2D]">
                        Mới
                    </div>
                )}
            </div>

            {/* ---- Content Section ---- */}
            <div className="flex flex-1 flex-col px-2 pb-2 pt-1.5">
                {/* Product Name - 2 lines max */}
                <h3 className="min-h-[36px] text-xs leading-[18px] text-slate-800 line-clamp-2">
                    {displayName}
                </h3>

                {/* Price Row */}
                <div className="mt-auto flex items-baseline gap-1 pt-1.5">
                    {/* Current / Final Price */}
                    <span className="text-sm font-medium text-[#EE4D2D]">
                        {finalPrice > 0 ? (
                            <>
                                <span className="text-[11px]">₫</span>
                                {formatPrice(finalPrice)}
                            </>
                        ) : (
                            t("contact")
                        )}
                    </span>

                    {/* Original Price (strikethrough) */}
                    {(hasActiveSaleOff || originalPriceValid) && (
                        <span className="text-[10px] text-slate-400 line-through">
                            <span>₫</span>
                            {formatPrice(hasActiveSaleOff ? product.price : product.originalPrice!)}
                        </span>
                    )}
                </div>

                {/* Bottom Row - Stock info styled like "Đã bán" */}
                <div className="mt-1 flex items-center justify-between">
                    {hasStock && (
                        <span className="text-[10px] text-slate-400">
                            Còn {product.quantity > 1000
                                ? `${(product.quantity / 1000).toFixed(0)}k+`
                                : product.quantity}
                        </span>
                    )}
                </div>
            </div>

            {/* Bottom border hover effect - Shopee style */}
            <div className="h-[2px] w-0 bg-[#EE4D2D] transition-all duration-300 group-hover:w-full" />
        </article>
    );
}
