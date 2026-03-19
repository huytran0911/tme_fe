"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useCartContext } from "@/contexts/CartContext";
import { buildImageUrl } from "@/lib/utils";

function usePlaceholderSrc() {
  return (
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' fill='none'><rect width='80' height='80' rx='8' fill='%23f8fafc'/><rect x='8' y='8' width='64' height='64' rx='6' fill='white' stroke='%23e2e8f0'/><text x='40' y='45' text-anchor='middle' fill='%2394a3b8' font-family='Arial' font-size='10'>No img</text></svg>`
    )
  );
}

export default function CartDrawer() {
  const locale = useLocale();
  const t = useTranslations("Cart");
  const tCommon = useTranslations("Common");
  const placeholderSrc = usePlaceholderSrc();
  const drawerRef = useRef<HTMLDivElement>(null);

  const {
    isCartOpen,
    closeCart,
    items,
    gifts,
    summary,
    isEmpty,
    isLoading,
    updateItem,
    removeItem,
    isUpdatingItem,
    isRemovingItem,
    grandTotal,
    itemCount,
  } = useCartContext();

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        closeCart();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isCartOpen, closeCart]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isCartOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node)
      ) {
        closeCart();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCartOpen, closeCart]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const formatPrice = (value: number) =>
    value.toLocaleString(locale === "vi" ? "vi-VN" : "en-US", {
      minimumFractionDigits: 0,
    });

  const isMutating = isUpdatingItem || isRemovingItem;

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/40 transition-opacity" />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <h2 className="text-lg font-semibold text-slate-900">
            {t("title")}
            {itemCount > 0 && (
              <span className="ml-2 text-sm font-normal text-slate-500">
                ({itemCount} {tCommon("items")})
              </span>
            )}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close cart"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {isLoading ? (
            <div className="flex h-full items-center justify-center">
              <div className="text-sm text-slate-500">
                {tCommon("loading")}
              </div>
            </div>
          ) : isEmpty ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <svg
                className="mb-4 h-16 w-16 text-slate-300"
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
              <p className="text-slate-500">
                {t("empty")}
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
              >
                {t("continueShopping")}
              </button>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {items.map((item) => {
                const imageSrc = item.productImage
                  ? buildImageUrl(item.productImage)
                  : placeholderSrc;

                return (
                  <div
                    key={item.id}
                    className="flex gap-2 rounded-lg border border-slate-200 bg-white p-2 sm:gap-3 sm:p-3"
                  >
                    {/* Image */}
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-slate-50 sm:h-20 sm:w-20">
                      <Image
                        src={imageSrc}
                        alt={item.productName || "Product"}
                        fill
                        sizes="(min-width: 640px) 80px, 64px"
                        className="object-contain p-1"
                        unoptimized
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = placeholderSrc;
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-1 flex-col">
                      <Link
                        href={`/${locale}/products/${item.productId}`}
                        onClick={closeCart}
                        className="line-clamp-2 text-sm font-medium text-slate-800 hover:text-primary"
                      >
                        {item.productName}
                      </Link>

                      {/* Options */}
                      {item.options && item.options.length > 0 && (
                        <div className="mt-1 text-xs text-slate-500">
                          {item.options
                            .map((opt) => `${opt.typeName}: ${opt.value}`)
                            .join(", ")}
                        </div>
                      )}

                      {/* Discount tag */}
                      {item.activeSaleOff > 0 && (
                        <div className="mt-1 flex flex-wrap items-center gap-1">
                          <span className="inline-flex items-center rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                            {t("discountLabel")} {formatPrice(item.activeSaleOff)}đ
                          </span>
                          {item.quantity > 1 && (
                            <span className="text-[10px] text-green-600 font-medium">
                              × {item.quantity} = -{formatPrice(item.activeSaleOff * item.quantity)}đ
                            </span>
                          )}
                        </div>
                      )}

                      {/* Price tier info */}
                      {item.appliedTier && (
                        <div className="mt-1 text-xs text-green-600">
                          {t("bulkPrice")} ({item.appliedTier.minQty}+)
                        </div>
                      )}

                      {/* Price and quantity */}
                      <div className="mt-auto flex items-end justify-between pt-2">
                        <div className="flex flex-col">
                          {item.activeSaleOff > 0 && (
                            <span className="text-xs text-slate-400 line-through">
                              {formatPrice(item.unitPrice)} đ
                            </span>
                          )}
                          <span className="text-sm font-semibold text-primary">
                            {formatPrice(item.unitPrice - item.activeSaleOff)} đ
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() =>
                              updateItem(item.id, Math.max(1, item.quantity - 1))
                            }
                            disabled={isMutating || item.quantity <= 1}
                            className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                          >
                            −
                          </button>
                          <input
                            type="number"
                            min={1}
                            max={item.stock > 0 ? item.stock : undefined}
                            value={item.quantity}
                            onChange={(e) => {
                              const val = parseInt(e.target.value, 10);
                              if (isNaN(val) || val < 1) {
                                updateItem(item.id, 1);
                              } else if (item.stock > 0 && val > item.stock) {
                                updateItem(item.id, item.stock);
                              } else {
                                updateItem(item.id, val);
                              }
                            }}
                            disabled={isMutating}
                            className="h-8 w-10 border-0 bg-transparent text-center text-sm font-medium text-slate-800 outline-none focus:ring-0 disabled:opacity-40 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                          />
                          <button
                            type="button"
                            onClick={() => updateItem(item.id, item.quantity + 1)}
                            disabled={isMutating || item.quantity >= item.stock}
                            className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            disabled={isMutating}
                            className="ml-1 flex h-8 w-8 items-center justify-center rounded text-slate-400 hover:bg-red-50 hover:text-red-500 disabled:opacity-40 sm:ml-2"
                            aria-label="Remove item"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Line total */}
                      <div className="mt-1 text-right text-xs">
                        <span className="text-slate-500">
                          {t("subtotalLabel")}{" "}
                        </span>
                        <span className="font-medium text-slate-700">
                          {formatPrice(item.lineTotal)} đ
                        </span>
                        {item.activeSaleOff > 0 && (
                          <span className="ml-1 text-green-600">
                            (-{formatPrice(item.activeSaleOff * item.quantity)}đ)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Gifts section in drawer */}
              {gifts && gifts.length > 0 && (
                <div className="rounded-lg border border-green-200 bg-green-50/50">
                  <div className="flex items-center gap-1.5 border-b border-green-200 px-2.5 py-2">
                    <span className="text-sm font-semibold text-green-700">
                      {t("gifts.title")}
                    </span>
                  </div>
                  <div className="divide-y divide-green-100">
                    {gifts.map((gift) => {
                      const giftImageSrc = gift.giftProductImage
                        ? buildImageUrl(gift.giftProductImage)
                        : placeholderSrc;

                      return (
                        <div
                          key={`${gift.forVariantId}-${gift.giftVariantId}`}
                          className={`flex gap-2 p-2 ${gift.giftStock <= 0 ? "opacity-50" : ""}`}
                        >
                          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-white">
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
                            <div className="absolute -right-0.5 -top-0.5 rounded-bl bg-green-500 px-1 py-0.5 text-[8px] font-bold text-white">
                              {t("gifts.free")}
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col justify-center">
                            <span className="line-clamp-1 text-xs font-medium text-slate-700">
                              {gift.giftProductName}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              {t("gifts.forProduct")}: {gift.forProductName}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-slate-400">
                                {t("gifts.quantity", { count: gift.giftQuantity })}
                              </span>
                              {gift.giftPrice && gift.giftPrice > 0 && (
                                <span className="text-[10px] text-slate-400 line-through">
                                  {formatPrice(gift.giftPrice)}đ
                                </span>
                              )}
                              <span className="text-[10px] font-semibold text-green-600">
                                {t("gifts.free")}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {!isEmpty && (
          <div className="border-t border-slate-200 p-4">
            {/* Summary */}
            {summary && (
              <div className="mb-4 space-y-2 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>{t("subtotal")}</span>
                  <span>{formatPrice(summary.subtotal)} đ</span>
                </div>
                {summary.saleOffDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>{t("discount")}</span>
                    <span>-{formatPrice(summary.saleOffDiscount)} đ</span>
                  </div>
                )}
                {summary.bundleDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>{t("bundleDiscount")}</span>
                    <span>-{formatPrice(summary.bundleDiscount)} đ</span>
                  </div>
                )}
                {summary.promotionDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>{t("promotionDiscount")}</span>
                    <span>-{formatPrice(summary.promotionDiscount)} đ</span>
                  </div>
                )}
                <div className="flex justify-between border-t border-slate-200 pt-2 text-base font-semibold text-slate-900">
                  <span>{t("total")}</span>
                  <span className="text-primary">{formatPrice(grandTotal)} đ</span>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              <Link
                href={`/${locale}/cart`}
                onClick={closeCart}
                className="flex-1 rounded-xl border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                {t("viewCart")}
              </Link>
              <Link
                href={`/${locale}/checkout`}
                onClick={closeCart}
                className="flex-1 rounded-xl bg-primary py-2.5 text-center text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                {t("checkout")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
