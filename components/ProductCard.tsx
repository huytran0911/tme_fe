"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { ProductByCategoryDto } from "@/lib/api/productsByCategory";
import { buildImageUrl } from "@/lib/utils";
import QuickVariantModal from "@/components/product/QuickVariantModal";
import WishlistHeartButton from "@/components/WishlistHeartButton";

interface ProductCardProps {
  product: ProductByCategoryDto;
  displayName: string;
  onAddToCart?: (product: ProductByCategoryDto, quantity: number) => void;
  onBuyNow?: (product: ProductByCategoryDto, quantity: number) => void;
  onClick?: (product: ProductByCategoryDto) => void;
}

export default function ProductCard({
  product,
  displayName,
  onAddToCart,
  onBuyNow,
  onClick,
}: ProductCardProps) {
  const locale = useLocale();
  const t = useTranslations("ProductCard");
  const placeholderSrc =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='240' viewBox='0 0 320 240' fill='none'><rect width='320' height='240' rx='16' fill='%23f8fafc'/><rect x='36' y='40' width='248' height='160' rx='12' fill='white' stroke='%23e2e8f0' stroke-width='2'/><path d='M84 158l54-70 50 60 34-30 18 22' stroke='%23cbd5e1' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/><circle cx='120' cy='90' r='18' fill='%23e2e8f0'/><text x='160' y='195' text-anchor='middle' fill='%2394a3b8' font-family='Arial, sans-serif' font-size='14'>No image</text></svg>`,
    );

  const resolvedSrc = product.imageUrl
    ? buildImageUrl(product.imageUrl)
    : placeholderSrc;
  const [imageSrc, setImageSrc] = useState<string>(resolvedSrc);

  // Sync imageSrc when product changes
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
      const min = 1;
      if (next < min) return min;
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
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${onClick ? "cursor-pointer" : ""}`}
    >
      <div className="relative aspect-[4/3] bg-slate-50">
        {/* Discount badge - always show when discount exists */}
        {hasActiveSaleOff ? (
          <div className="absolute right-2 top-2 z-10 rounded-md bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
            -{formatPrice(activeSaleOff)}đ
          </div>
        ) : discountPercent > 0 ? (
          <div className="absolute right-2 top-2 z-10 rounded-md bg-[#F97316] px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
            -{discountPercent}%
          </div>
        ) : null}
        {!hasStock ? (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 text-xs font-semibold text-red-500">
            {t("outOfStock")}
          </div>
        ) : null}
        {/* Wishlist heart button */}
        <div className="absolute left-1.5 top-1.5 z-10">
          <WishlistHeartButton productId={product.id} productName={displayName} />
        </div>
        <Image
          src={imageSrc}
          alt={displayName}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-contain p-3"
          unoptimized={imageSrc.startsWith("https://localhost") || imageSrc.startsWith("http://localhost")}
          onError={() => {
            if (imageSrc !== placeholderSrc) {
              setImageSrc(placeholderSrc);
            }
          }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-1 p-2 sm:p-3">
        <div className="text-[10px] font-semibold uppercase tracking-wide text-[#EE4D2D] sm:text-[11px]">
          {product.code}
        </div>
        <div className="min-h-[40px] text-sm font-medium text-slate-900 line-clamp-2">
          {displayName}
        </div>

        <div className="mt-1 flex flex-wrap items-baseline gap-1">
          <span className="text-sm font-semibold text-[#EE4D2D]">
            {finalPrice > 0
              ? hasPriceRange
                ? `${t("priceFrom")} ${formatPrice(finalPrice)} đ`
                : `${formatPrice(finalPrice)} đ`
              : t("contact")}
          </span>
          {hasActiveSaleOff && !hasPriceRange ? (
            <span className="text-xs text-slate-400 line-through">
              {`${formatPrice(product.price)} đ`}
            </span>
          ) : originalPriceValid && !hasPriceRange ? (
            <span className="text-xs text-slate-400 line-through">
              {`${formatPrice(product.originalPrice!)} đ`}
            </span>
          ) : null}
        </div>

        <div className="mt-auto space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs">
            <span className={hasStock ? "text-emerald-600" : "font-medium text-red-500"}>
              {hasStock ? t("available", { count: product.quantity }) : t("outOfStock")}
            </span>

            <div className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  changeQuantity(-1);
                }}
                disabled={!hasStock || buyQuantity <= 1}
                className="flex h-6 w-6 items-center justify-center rounded-l-lg text-xs text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
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
                className="h-6 w-8 border-0 bg-transparent text-center text-[11px] font-semibold text-slate-800 outline-none focus:ring-0 disabled:opacity-40 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  changeQuantity(1);
                }}
                disabled={!hasStock || (maxQty > 0 && buyQuantity >= maxQty)}
                className="flex h-6 w-6 items-center justify-center rounded-r-lg text-xs text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
            disabled={!hasStock || buyQuantity <= 0}
            className="w-full rounded-xl bg-[#EE4D2D] px-3 py-2 text-xs font-semibold text-white hover:bg-[#f05c3b] disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {t("addToCart")}
          </button>
          {/* TODO: Temporarily hidden - Buy Now button
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleBuyNow();
            }}
            disabled={!hasStock || buyQuantity <= 0}
            className="w-full rounded-xl border border-[#EE4D2D] px-3 py-2 text-xs font-semibold text-[#EE4D2D] hover:bg-orange-50 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-300"
          >
            {t("buyNow")}
          </button>
          */}
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
