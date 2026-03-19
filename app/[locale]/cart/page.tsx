"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useCartContext } from "@/contexts/CartContext";
import { usePromotions } from "@/hooks/usePromotions";
import { buildImageUrl } from "@/lib/utils";
import MainLayout from "@/components/MainLayout";
import { useSelectedItems } from "@/hooks/useSelectedItems";

function usePlaceholderSrc() {
  return (
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' fill='none'><rect width='100' height='100' rx='8' fill='%23f8fafc'/><rect x='10' y='10' width='80' height='80' rx='6' fill='white' stroke='%23e2e8f0'/><text x='50' y='55' text-anchor='middle' fill='%2394a3b8' font-family='Arial' font-size='12'>No img</text></svg>`
    )
  );
}

export default function CartPage() {
  const locale = useLocale();
  const t = useTranslations("Cart");
  const tCommon = useTranslations("Common");
  const tCheckout = useTranslations("Checkout");
  const placeholderSrc = usePlaceholderSrc();

  const {
    items,
    gifts,
    summary,
    isEmpty,
    isLoading,
    updateItem,
    removeItem,
    clearCart,
    isUpdatingItem,
    isRemovingItem,
    isClearingCart,
    grandTotal,
    itemCount,
  } = useCartContext();

  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const formatPrice = (value: number) =>
    value.toLocaleString(locale === "vi" ? "vi-VN" : "en-US", {
      minimumFractionDigits: 0,
    });

  // Item selection
  const allVariantIds = useMemo(() => items.map((item) => item.variantId), [items]);
  const { selectedIds, selectedCount, isAllSelected, toggleItem, toggleAll, isSelected } =
    useSelectedItems(allVariantIds);

  // Recalculate full summary for selected items only
  const selectedSummary = useMemo(() => {
    const selected = items.filter((item) => selectedIds.has(item.variantId));

    // Subtotal = sum of unitPrice * quantity (before any discounts)
    const subtotal = selected.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

    // SaleOff discount = sum of activeSaleOff * quantity
    const saleOffDiscount = selected.reduce((sum, item) => sum + item.activeSaleOff * item.quantity, 0);

    // Bundle discount = sum of bundle items' lineTotal for selected parent items
    const bundleDiscount = selected.reduce((sum, item) => {
      if (!item.bundleItems || item.bundleItems.length === 0) return sum;
      // Bundle items have their own activeSaleOff/lineTotal; the "discount" is the saleOff saved
      return sum + item.bundleItems.reduce((bSum, b) => bSum + b.activeSaleOff * b.quantity, 0);
    }, 0);

    // Gift value = filter gifts linked to selected items
    // Note: gift.forVariantId actually contains the productId (API naming mismatch)
    const allGifts = gifts ?? [];
    const selectedProductIds = new Set(selected.map((item) => item.productId));
    const selectedGifts = allGifts.filter((g) => selectedProductIds.has(g.forVariantId));
    const giftValue = selectedGifts.reduce((sum, g) => sum + (g.giftPrice ?? 0) * g.giftQuantity, 0);

    // Total quantity
    const totalQuantity = selected.reduce((sum, item) => sum + item.quantity, 0);

    // Grand total = lineTotal of selected items (lineTotal already accounts for activeSaleOff)
    const grandTotal = selected.reduce((sum, item) => sum + item.lineTotal, 0);

    return {
      itemCount: selected.length,
      totalQuantity,
      subtotal,
      saleOffDiscount,
      bundleDiscount,
      giftValue,
      grandTotal,
      selectedGifts,
    };
  }, [items, selectedIds, gifts]);

  // Promotions based on SELECTED items total only — hides when nothing is selected
  const { appliedPromotions, nearbyPromotions } = usePromotions(selectedSummary.grandTotal);


  const isMutating = isUpdatingItem || isRemovingItem || isClearingCart;

  const handleClearCart = () => {
    setShowClearConfirm(true);
  };

  const confirmClearCart = async () => {
    await clearCart();
    setShowClearConfirm(false);
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-6xl px-3 py-4 sm:px-4 sm:py-6">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-slate-500 sm:mb-6">
          <Link href={`/${locale}`} className="hover:text-primary">
            {tCommon("home")}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">
            {t("title")}
          </span>
        </nav>

        <h1 className="mb-4 text-xl font-bold text-slate-900 sm:mb-6 sm:text-2xl">
          {t("yourCart")}
          {itemCount > 0 && (
            <span className="ml-2 text-base font-normal text-slate-500 sm:text-lg">
              ({itemCount} {tCommon("items")})
            </span>
          )}
        </h1>

        {isLoading ? (
          <div className="flex h-64 items-center justify-center rounded-xl border border-slate-200 bg-white">
            <div className="text-slate-500">
              {t("loading")}
            </div>
          </div>
        ) : isEmpty ? (
          <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white text-center">
            <svg
              className="mb-4 h-20 w-20 text-slate-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="mb-4 text-lg text-slate-600">
              {t("empty")}
            </p>
            <Link
              href={`/${locale}`}
              className="rounded-xl bg-primary px-6 py-2.5 font-semibold text-white transition hover:bg-primary-dark"
            >
              {t("continueShopping")}
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-slate-200 bg-white">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-3 py-2.5 sm:px-4 sm:py-3">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isAllSelected}
                      onChange={toggleAll}
                      className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/30 cursor-pointer accent-[var(--color-primary)]"
                    />
                    <span className="font-semibold text-slate-900">
                      {t("selectAll")} ({items.length})
                    </span>
                  </label>
                  <button
                    type="button"
                    onClick={handleClearCart}
                    disabled={isMutating}
                    className="text-sm text-red-500 hover:text-red-600 disabled:opacity-50"
                  >
                    {t("clearAll")}
                  </button>
                </div>

                {/* Items */}
                <div className="divide-y divide-slate-100">
                  {items.map((item) => {
                    const imageSrc = item.productImage
                      ? buildImageUrl(item.productImage)
                      : placeholderSrc;

                    return (
                      <div key={item.id} className={`flex items-start gap-2.5 px-3 py-2.5 sm:gap-3 sm:px-4 transition-colors ${!isSelected(item.variantId) ? 'opacity-50' : ''}`}>
                        {/* Checkbox */}
                        <div className="flex items-center pt-4">
                          <input
                            type="checkbox"
                            checked={isSelected(item.variantId)}
                            onChange={() => toggleItem(item.variantId)}
                            className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/30 cursor-pointer accent-[var(--color-primary)]"
                          />
                        </div>
                        {/* Image */}
                        <Link
                          href={`/${locale}/products/${item.productId}`}
                          className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-slate-50"
                        >
                          <Image
                            src={imageSrc}
                            alt={item.productName || "Product"}
                            fill
                            sizes="56px"
                            className="object-contain p-0.5"
                            unoptimized
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = placeholderSrc;
                            }}
                          />
                        </Link>

                        {/* Info */}
                        <div className="flex flex-1 flex-col min-w-0">
                          <Link
                            href={`/${locale}/products/${item.productId}`}
                            className="line-clamp-1 text-sm font-medium text-slate-800 hover:text-primary"
                          >
                            {item.productName}
                          </Link>

                          {/* Options + SKU inline */}
                          <div className="flex flex-wrap items-center gap-x-2 text-xs text-slate-400">
                            {item.options && item.options.length > 0 && (
                              <span className="text-slate-500">
                                {item.options.map((opt) => `${opt.typeName}: ${opt.value}`).join(", ")}
                              </span>
                            )}
                            {item.variantSku && <span>SKU: {item.variantSku}</span>}
                          </div>

                          {/* Discount tag + Price tier — inline */}
                          {(item.activeSaleOff > 0 || item.appliedTier) && (
                            <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
                              {item.activeSaleOff > 0 && (
                                <span className="inline-flex items-center rounded bg-red-500 px-1.5 py-px text-[10px] font-bold text-white">
                                  {t("discountLabel")} {formatPrice(item.activeSaleOff)}đ
                                </span>
                              )}
                              {item.appliedTier && (
                                <span className="text-[11px] text-green-600">
                                  {t("bulkPrice")} ({item.appliedTier.minQty}+)
                                </span>
                              )}
                            </div>
                          )}

                          {/* Price + Quantity + Remove — single row */}
                          <div className="mt-1 flex items-center justify-between gap-2">
                            {/* Unit price */}
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-semibold text-primary">
                                {formatPrice(item.unitPrice - item.activeSaleOff)} đ
                              </span>
                              {item.activeSaleOff > 0 && (
                                <span className="text-[11px] text-slate-400 line-through">
                                  {formatPrice(item.unitPrice)}đ
                                </span>
                              )}
                              {item.appliedTier && (
                                <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-medium text-blue-600">
                                  {t("bulkPrice")} ≥{item.appliedTier.minQty}
                                </span>
                              )}
                            </div>

                            {/* Quantity controls */}
                            <div className="flex items-center gap-1">
                              <div className="flex items-center rounded border border-slate-200">
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateItem(item.id, Math.max(1, item.quantity - 1))
                                  }
                                  disabled={item.quantity <= 1}
                                  className="flex h-7 w-7 items-center justify-center text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                                >
                                  −
                                </button>
                                <span className="w-7 text-center text-xs font-medium">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => updateItem(item.id, item.quantity + 1)}
                                  disabled={item.quantity >= item.stock}
                                  className="flex h-7 w-7 items-center justify-center text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                                >
                                  +
                                </button>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeItem(item.id)}
                                disabled={isMutating}
                                className="flex h-7 w-7 items-center justify-center rounded text-slate-400 hover:bg-red-50 hover:text-red-500 disabled:opacity-40"
                                aria-label="Remove item"
                              >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </div>

                          {/* Line total + stock warning — compact */}
                          <div className="flex items-center justify-between text-[11px]">
                            <div>
                              {item.quantity >= item.stock && (
                                <span className="text-amber-600">
                                  {t("stockWarning", { count: item.stock })}
                                </span>
                              )}
                            </div>
                            <div>
                              <span className="text-slate-400">{t("subtotalLabel")} </span>
                              <span className="font-medium text-slate-600">{formatPrice(item.lineTotal)}đ</span>
                              {item.activeSaleOff > 0 && (
                                <span className="ml-1 text-green-600">
                                  (-{formatPrice(item.activeSaleOff * item.quantity)}đ)
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Gifts Section — only for selected items */}
              {selectedSummary.selectedGifts.length > 0 && (
                <div className="mt-4 rounded-xl border border-green-200 bg-green-50/50">
                  <div className="flex items-center gap-2 border-b border-green-200 px-3 py-2 sm:px-4">
                    <span className="text-sm font-semibold text-green-700">
                      {t("gifts.title")}
                    </span>
                    <span className="rounded-full bg-green-100 px-1.5 py-0.5 text-[10px] font-medium text-green-700">
                      {selectedSummary.selectedGifts.length}
                    </span>
                  </div>
                  <div className="divide-y divide-green-100">
                    {selectedSummary.selectedGifts.map((gift) => {
                      const giftImageSrc = gift.giftProductImage
                        ? buildImageUrl(gift.giftProductImage)
                        : placeholderSrc;
                      const isOutOfStock = gift.giftStock <= 0;

                      return (
                        <div
                          key={`${gift.forVariantId}-${gift.giftVariantId}`}
                          className={`flex items-center gap-2.5 px-3 py-2 sm:px-4 ${isOutOfStock ? "opacity-50" : ""}`}
                        >
                          {/* Gift Image */}
                          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-white">
                            <Image
                              src={giftImageSrc}
                              alt={gift.giftProductName || "Gift"}
                              fill
                              sizes="48px"
                              className="object-contain p-0.5"
                              unoptimized
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = placeholderSrc;
                              }}
                            />
                            <div className="absolute -right-0.5 -top-0.5 rounded-bl bg-green-500 px-1 py-px text-[7px] font-bold text-white">
                              {t("gifts.free")}
                            </div>
                          </div>

                          {/* Gift Info — compact inline */}
                          <div className="flex flex-1 flex-col min-w-0">
                            <span className="line-clamp-1 text-sm font-medium text-slate-800">
                              {gift.giftProductName}
                            </span>
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-slate-500">
                              <span>×{gift.giftQuantity}</span>
                              {gift.giftPrice && gift.giftPrice > 0 && (
                                <span className="line-through">{formatPrice(gift.giftPrice)}đ</span>
                              )}
                              <span className="font-semibold text-green-600">{t("gifts.free")}</span>
                              {isOutOfStock && (
                                <span className="font-medium text-red-500">{t("gifts.outOfStock")}</span>
                              )}
                            </div>
                            <div className="line-clamp-1 text-[11px] text-slate-400">
                              {t("gifts.forProduct")}: {gift.forProductName}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Promotions Section — informational only, applied at checkout */}
              {(appliedPromotions.length > 0 || nearbyPromotions.length > 0) && (
                <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50/50">
                  <div className="flex items-center justify-between border-b border-orange-200 px-3 py-2 sm:px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-orange-700">
                        {t("promotions.title")}
                      </span>
                      <span className="rounded-full bg-orange-100 px-1.5 py-0.5 text-[10px] font-medium text-orange-700">
                        {appliedPromotions.length + nearbyPromotions.length}
                      </span>
                    </div>
                    <span className="text-[10px] text-orange-500">
                      {t("promotions.applyAtCheckout")}
                    </span>
                  </div>
                  <div className="divide-y divide-orange-100">
                    {/* Applied promotions */}
                    {appliedPromotions.map((promo) => (
                      <div
                        key={promo.id}
                        className="flex items-center gap-2.5 px-3 py-2 sm:px-4"
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex flex-1 flex-col min-w-0">
                          <span className="line-clamp-1 text-sm font-medium text-slate-800">
                            {locale === "en" && promo.nameEn ? promo.nameEn : promo.name}
                          </span>
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px]">
                            <span className="rounded bg-green-500 px-1.5 py-px font-bold text-white">
                              {t("promotions.applied")}
                            </span>
                            <span className="font-semibold text-green-600">
                              {promo.isPercent
                                ? t("promotions.discountPercent", { percent: promo.saleOff })
                                : t("promotions.discount", { amount: formatPrice(promo.saleOff) })}
                            </span>
                            {promo.freeTransportFee && (
                              <span className="rounded bg-blue-100 px-1.5 py-px font-medium text-blue-600">
                                🚚 {t("promotions.freeShipping")}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Nearby promotions */}
                    {nearbyPromotions.map((promo) => {
                      const benefit = promo.isPercent
                        ? t("promotions.discountPercent", { percent: promo.saleOff })
                        : t("promotions.discount", { amount: formatPrice(promo.saleOff) });
                      const progress = Math.min(100, (grandTotal / promo.applyForTotal) * 100);

                      return (
                        <div
                          key={promo.id}
                          className="flex items-center gap-2.5 px-3 py-2 sm:px-4"
                        >
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                          </div>
                          <div className="flex flex-1 flex-col min-w-0 gap-1">
                            <span className="line-clamp-1 text-sm font-medium text-slate-800">
                              {locale === "en" && promo.nameEn ? promo.nameEn : promo.name}
                            </span>
                            <span className="text-[11px] text-orange-600">
                              {t("promotions.buyMore", {
                                amount: formatPrice(promo.remaining),
                                benefit,
                              })}
                            </span>
                            {/* Progress bar */}
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-orange-100">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                            <div className="flex items-center justify-between text-[10px] text-slate-400">
                              <span>{formatPrice(grandTotal)}đ</span>
                              <span>{t("promotions.minOrder", { amount: formatPrice(promo.applyForTotal) })}</span>
                            </div>
                            {promo.freeTransportFee && (
                              <span className="inline-flex w-fit rounded bg-blue-50 px-1.5 py-px text-[10px] font-medium text-blue-600">
                                🚚 {t("promotions.freeShipping")}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 rounded-xl border border-slate-200 bg-white p-3 sm:p-4 lg:top-4">
                <h2 className="mb-4 text-lg font-semibold text-slate-900">
                  {tCheckout("orderSummary")}
                </h2>

                {summary && (
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-slate-600">
                      <span>
                        {t("subtotal")} ({selectedSummary.totalQuantity} {tCommon("items")})
                      </span>
                      <span>{formatPrice(selectedSummary.subtotal)} đ</span>
                    </div>

                    {selectedCount > 0 && selectedCount < items.length && (
                      <div className="rounded-lg bg-blue-50 px-3 py-2 text-xs text-blue-600">
                        {t("selectedCount", { count: selectedCount })}
                      </div>
                    )}

                    {selectedSummary.saleOffDiscount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>{t("discount")}</span>
                        <span>-{formatPrice(selectedSummary.saleOffDiscount)} đ</span>
                      </div>
                    )}

                    {selectedSummary.bundleDiscount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>{t("bundleDiscount")}</span>
                        <span>-{formatPrice(selectedSummary.bundleDiscount)} đ</span>
                      </div>
                    )}

                    {selectedSummary.giftValue > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>{t("giftValue")}</span>
                        <span>-{formatPrice(selectedSummary.giftValue)} đ</span>
                      </div>
                    )}

                    <div className="border-t border-slate-200 pt-3">
                      <div className="flex justify-between text-base font-semibold text-slate-900">
                        <span>{t("total")}</span>
                        <span className="text-xl text-primary">
                          {formatPrice(selectedSummary.grandTotal)} đ
                        </span>
                      </div>
                      {/* Promotion hint */}
                      {appliedPromotions.length > 0 && (
                        <p className="mt-1 text-xs text-green-600">
                          {t("promotions.checkoutHint")}
                        </p>
                      )}
                      <p className="mt-0.5 text-xs text-slate-500">
                        {t("shippingNote")}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-6 space-y-3">
                  {selectedCount > 0 ? (
                    <Link
                      href={`/${locale}/checkout`}
                      className="block w-full rounded-xl bg-primary py-3 text-center font-semibold text-white transition hover:bg-primary-dark"
                    >
                      {t("checkoutSelected", { count: selectedCount })}
                    </Link>
                  ) : (
                    <div className="block w-full rounded-xl bg-slate-300 py-3 text-center font-semibold text-white cursor-not-allowed">
                      {t("noItemsSelected")}
                    </div>
                  )}
                  <Link
                    href={`/${locale}`}
                    className="block w-full rounded-xl border border-slate-200 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    {t("continueShopping")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Clear Cart Confirm Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowClearConfirm(false)}
          />
          {/* Modal */}
          <div className="relative w-full max-w-sm animate-[fadeScaleIn_0.2s_ease-out] rounded-2xl bg-white p-6 shadow-2xl">
            {/* Icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
              <svg className="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            {/* Text */}
            <h3 className="mb-2 text-center text-lg font-semibold text-slate-900">
              {t("clearConfirmTitle")}
            </h3>
            <p className="mb-6 text-center text-sm text-slate-500">
              {t("clearConfirmMessage")}
            </p>
            {/* Actions */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                {tCommon("cancel")}
              </button>
              <button
                type="button"
                onClick={confirmClearCart}
                disabled={isClearingCart}
                className="flex-1 rounded-xl bg-red-500 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 disabled:opacity-50"
              >
                {isClearingCart ? tCommon("loading") : t("clearAll")}
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
