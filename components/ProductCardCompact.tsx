"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { ProductByCategoryDto } from "@/lib/api/productsByCategory";
import { buildImageUrl } from "@/lib/utils";
import QuickVariantModal from "@/components/product/QuickVariantModal";
import WishlistHeartButton from "@/components/WishlistHeartButton";

interface ProductCardCompactProps {
  product: ProductByCategoryDto;
  displayName: string;
  onAddToCart?: (product: ProductByCategoryDto) => void;
  onClick?: (product: ProductByCategoryDto) => void;
}

export default function ProductCardCompact({
  product,
  displayName,
  onAddToCart,
  onClick,
}: ProductCardCompactProps) {
  const locale = useLocale();
  const t = useTranslations("ProductCard");
  const placeholderSrc =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' fill='none'><rect width='80' height='80' rx='6' fill='%23f8fafc'/><rect x='8' y='8' width='64' height='64' rx='4' fill='white' stroke='%23e2e8f0' stroke-width='1'/><path d='M20 55l18-24 16 20 10-10 6 8' stroke='%23cbd5e1' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/><circle cx='30' cy='32' r='7' fill='%23e2e8f0'/></svg>`,
    );

  const resolvedSrc = product.imageUrl
    ? buildImageUrl(product.imageUrl)
    : placeholderSrc;
  const [imageSrc, setImageSrc] = useState<string>(resolvedSrc);

  useEffect(() => {
    setImageSrc(resolvedSrc);
  }, [resolvedSrc]);

  const [modalOpen, setModalOpen] = useState(false);

  // Discount logic: activeSaleOff is discount amount per item
  const activeSaleOff = product.activeSaleOff ?? 0;
  const hasActiveSaleOff = activeSaleOff > 0;
  const finalPrice = hasActiveSaleOff
    ? (product.finalPrice ?? product.price - activeSaleOff)
    : product.price;

  // Price range logic: show range when maxPrice exists and differs from price
  const maxPrice = product.maxPrice;
  const hasPriceRange = maxPrice !== null && maxPrice !== undefined && maxPrice !== finalPrice && maxPrice > finalPrice;

  const originalPriceValid = product.originalPrice !== null && product.originalPrice > product.price;
  const hasStock = product.quantity > 0;
  const discountPercent =
    product.saleOff > 0
      ? product.saleOff
      : originalPriceValid
        ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
        : 0;

  const formatPrice = (value: number) =>
    value.toLocaleString(locale === "vi" ? "vi-VN" : "en-US", { minimumFractionDigits: 0 });

  const handleCardClick = () => {
    if (onClick) onClick(product);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasStock) return;
    setModalOpen(true);
  };

  return (
    <article
      onClick={handleCardClick}
      className={`group relative flex flex-col overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm transition hover:shadow-md ${onClick ? "cursor-pointer" : ""}`}
    >
      {/* Image - smaller */}
      <div className="relative aspect-square bg-slate-50">
        {/* Discount badge - always show when discount exists */}
        {hasActiveSaleOff ? (
          <div className="absolute right-1 top-1 z-10 rounded bg-red-500 px-1 py-0.5 text-[8px] font-bold text-white">
            -{formatPrice(activeSaleOff)}đ
          </div>
        ) : discountPercent > 0 ? (
          <div className="absolute right-1 top-1 z-10 rounded bg-[#F97316] px-1 py-0.5 text-[8px] font-bold text-white">
            -{discountPercent}%
          </div>
        ) : null}
        {!hasStock && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 text-[9px] font-semibold text-red-500">
            {t("outOfStock")}
          </div>
        )}
        {/* Wishlist heart button */}
        <div className="absolute left-1 top-1 z-10">
          <WishlistHeartButton productId={product.id} productName={displayName} size="sm" />
        </div>
        <Image
          src={imageSrc}
          alt={displayName}
          fill
          sizes="(min-width: 1024px) 16vw, 25vw"
          className="object-contain p-2"
          unoptimized={imageSrc.startsWith("https://localhost") || imageSrc.startsWith("http://localhost")}
          onError={() => {
            if (imageSrc !== placeholderSrc) setImageSrc(placeholderSrc);
          }}
        />
      </div>

      {/* Content - minimal */}
      <div className="flex flex-1 flex-col gap-0.5 p-2">
        <div className="text-[9px] font-semibold uppercase text-[#EE4D2D]">
          {product.code}
        </div>
        <div className="min-h-[32px] text-xs font-medium text-slate-800 line-clamp-2">
          {displayName}
        </div>
        <div className="mt-auto flex items-center justify-between gap-1">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#EE4D2D]">
              {finalPrice > 0
                ? hasPriceRange
                  ? `${t("priceFrom")} ${formatPrice(finalPrice)}đ`
                  : `${formatPrice(finalPrice)}đ`
                : t("contact")}
            </span>
            {hasActiveSaleOff && !hasPriceRange && (
              <span className="text-[9px] text-slate-400 line-through">
                {formatPrice(product.price)}đ
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!hasStock}
            className="rounded bg-[#EE4D2D] p-1 text-white hover:bg-[#f05c3b] disabled:bg-slate-300"
            title={t("addToCart")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Quick Variant Modal */}
      <QuickVariantModal
        productId={product.id}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode="cart"
      />
    </article>
  );
}
