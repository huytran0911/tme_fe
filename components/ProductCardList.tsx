"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { ProductByCategoryDto } from "@/lib/api/productsByCategory";
import { buildImageUrl } from "@/lib/utils";
import QuickVariantModal from "@/components/product/QuickVariantModal";

interface ProductCardListProps {
  product: ProductByCategoryDto;
  displayName: string;
  onAddToCart?: (product: ProductByCategoryDto, quantity: number) => void;
  onBuyNow?: (product: ProductByCategoryDto, quantity: number) => void;
  onClick?: (product: ProductByCategoryDto) => void;
}

export default function ProductCardList({
  product,
  displayName,
  onAddToCart,
  onBuyNow,
  onClick,
}: ProductCardListProps) {
  const locale = useLocale();
  const t = useTranslations("ProductCard");
  const placeholderSrc =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120' fill='none'><rect width='120' height='120' rx='8' fill='%23f8fafc'/><rect x='10' y='10' width='100' height='100' rx='6' fill='white' stroke='%23e2e8f0' stroke-width='1'/><path d='M30 80l25-35 25 30 15-15 10 12' stroke='%23cbd5e1' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='45' cy='45' r='10' fill='%23e2e8f0'/></svg>`,
    );

  const resolvedSrc = product.imageUrl
    ? buildImageUrl(product.imageUrl)
    : placeholderSrc;
  const [imageSrc, setImageSrc] = useState<string>(resolvedSrc);

  useEffect(() => {
    setImageSrc(resolvedSrc);
  }, [resolvedSrc]);

  // Discount logic: activeSaleOff is discount amount per item
  const activeSaleOff = product.activeSaleOff ?? 0;
  const hasActiveSaleOff = activeSaleOff > 0;
  const finalPrice = hasActiveSaleOff
    ? (product.finalPrice ?? product.price - activeSaleOff)
    : product.price;

  // Price range logic: show range when maxPrice exists and differs from price
  const maxPrice = product.maxPrice;
  const hasPriceRange = maxPrice !== null && maxPrice !== undefined && maxPrice !== finalPrice && maxPrice > finalPrice;

  const hasDiscount = hasActiveSaleOff || product.saleOff > 0 || (product.originalPrice ?? 0) > product.price;
  const originalPriceValid = product.originalPrice !== null && product.originalPrice > product.price;
  const isOutOfStock = product.quantity <= 0;

  const formatPrice = (value: number) =>
    value.toLocaleString(locale === "vi" ? "vi-VN" : "en-US", { minimumFractionDigits: 0 });

  const initialQty = useMemo(() => (isOutOfStock ? 0 : 1), [isOutOfStock]);
  const [buyQuantity, setBuyQuantity] = useState<number>(initialQty);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"cart" | "buy">("cart");

  const maxQty = product.quantity;
  const hasStock = maxQty > 0;
  const discountPercent =
    product.saleOff > 0
      ? product.saleOff
      : originalPriceValid
        ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
        : 0;

  const changeQuantity = (delta: number) => {
    setBuyQuantity((prev) => {
      if (!hasStock) return 0;
      const next = prev + delta;
      if (next < 1) return 1;
      if (maxQty > 0 && next > maxQty) return maxQty;
      return next;
    });
  };

  const handleAddToCart = () => {
    if (!hasStock) return;
    setModalMode("cart");
    setModalOpen(true);
  };

  const handleBuyNow = () => {
    if (!hasStock) return;
    setModalMode("buy");
    setModalOpen(true);
  };

  const handleCardClick = () => {
    if (onClick) onClick(product);
  };

  return (
    <article
      onClick={handleCardClick}
      className={`group relative flex gap-3 rounded-xl border border-slate-100 bg-white p-2 shadow-sm transition hover:shadow-md sm:gap-4 sm:p-3 ${onClick ? "cursor-pointer" : ""}`}
    >
      {/* Image */}
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-50 sm:h-28 sm:w-28">
        {/* Discount badge - always show when discount exists */}
        {hasActiveSaleOff ? (
          <div className="absolute left-1 top-1 z-10 rounded bg-red-500 px-1.5 py-0.5 text-[9px] font-bold text-white">
            -{formatPrice(activeSaleOff)}đ
          </div>
        ) : discountPercent > 0 ? (
          <div className="absolute left-1 top-1 z-10 rounded bg-[#F97316] px-1.5 py-0.5 text-[9px] font-semibold text-white">
            -{discountPercent}%
          </div>
        ) : null}
        {!hasStock && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 text-[10px] font-semibold text-red-500">
            {t("outOfStock")}
          </div>
        )}
        <Image
          src={imageSrc}
          alt={displayName}
          fill
          sizes="(min-width: 640px) 112px, 96px"
          className="object-contain p-2"
          unoptimized={imageSrc.startsWith("https://localhost") || imageSrc.startsWith("http://localhost")}
          onError={() => {
            if (imageSrc !== placeholderSrc) setImageSrc(placeholderSrc);
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          {/* Code & Name */}
          <div className="flex items-start gap-2">
            <span className="shrink-0 rounded bg-orange-100 px-1.5 py-0.5 text-[10px] font-semibold text-[#EE4D2D]">
              {product.code}
            </span>
            <h3 className="text-sm font-medium text-slate-900 line-clamp-2">{displayName}</h3>
          </div>

          {/* Specs row */}
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
            <span className={hasStock ? "text-emerald-600" : "text-red-500"}>
              {hasStock ? t("available", { count: product.quantity }) : t("outOfStock")}
            </span>
          </div>
        </div>

        {/* Price & Actions */}
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-base font-bold text-[#EE4D2D]">
              {finalPrice > 0
                ? hasPriceRange
                  ? `${t("priceFrom")} ${formatPrice(finalPrice)} đ`
                  : `${formatPrice(finalPrice)} đ`
                : t("contact")}
            </span>
            {hasActiveSaleOff && !hasPriceRange ? (
              <span className="text-xs text-slate-400 line-through">
                {formatPrice(product.price)} đ
              </span>
            ) : originalPriceValid && !hasPriceRange ? (
              <span className="text-xs text-slate-400 line-through">
                {formatPrice(product.originalPrice!)} đ
              </span>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {/* Quantity */}
            <div className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); changeQuantity(-1); }}
                disabled={!hasStock || buyQuantity <= 1}
                className="flex h-8 w-8 items-center justify-center text-sm text-slate-600 hover:bg-slate-100 disabled:opacity-40"
              >
                -
              </button>
              <input
                type="number"
                min={1}
                max={maxQty > 0 ? maxQty : undefined}
                value={buyQuantity}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  if (isNaN(val) || val < 1) {
                    setBuyQuantity(1);
                  } else if (maxQty > 0 && val > maxQty) {
                    setBuyQuantity(maxQty);
                  } else {
                    setBuyQuantity(val);
                  }
                }}
                disabled={!hasStock}
                className="h-8 w-10 border-0 bg-transparent text-center text-xs font-semibold text-slate-800 outline-none focus:ring-0 disabled:opacity-40 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); changeQuantity(1); }}
                disabled={!hasStock || buyQuantity >= maxQty}
                className="flex h-8 w-8 items-center justify-center text-sm text-slate-600 hover:bg-slate-100 disabled:opacity-40"
              >
                +
              </button>
            </div>

            {/* Buttons */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}
              disabled={!hasStock}
              className="rounded-lg bg-[#EE4D2D] px-2.5 py-2 text-xs font-semibold text-white hover:bg-[#f05c3b] disabled:bg-slate-300 sm:px-3"
            >
              {t("addToCart")}
            </button>
            {/* TODO: Temporarily hidden - Buy Now button
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleBuyNow(); }}
              disabled={!hasStock}
              className="rounded-lg border border-[#EE4D2D] px-2.5 py-2 text-xs font-semibold text-[#EE4D2D] hover:bg-orange-50 disabled:border-slate-300 disabled:text-slate-300 sm:px-3"
            >
              {t("buyNow")}
            </button>
            */}
          </div>
        </div>
      </div>

      {/* Quick Variant Modal */}
      <QuickVariantModal
        productId={product.id}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
      />
    </article>
  );
}
