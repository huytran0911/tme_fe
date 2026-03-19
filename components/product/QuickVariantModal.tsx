"use client";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useMemo, useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useProductLegacy, useProductVariants } from "@/hooks/useProductLegacy";
import { useCartContext } from "@/contexts/CartContext";
import type { ProductVariantClientResponse } from "@/lib/api/product-legacy";
import { buildImageUrl } from "@/lib/utils";

interface QuickVariantModalProps {
  productId: number;
  isOpen: boolean;
  onClose: () => void;
  mode?: "cart" | "buy";
}

interface VariantOptionGroup {
  typeId: number;
  typeName: string;
  values: { valueId: number; valueName: string }[];
}

function groupVariantOptions(variants: ProductVariantClientResponse[]): VariantOptionGroup[] {
  const groups = new Map<number, VariantOptionGroup>();

  for (const variant of variants) {
    if (!variant.options) continue;
    for (const opt of variant.options) {
      if (!groups.has(opt.productTypeId)) {
        groups.set(opt.productTypeId, {
          typeId: opt.productTypeId,
          typeName: opt.productTypeName || "",
          values: [],
        });
      }
      const group = groups.get(opt.productTypeId)!;
      if (!group.values.some((v) => v.valueId === opt.productTypeValueId)) {
        group.values.push({
          valueId: opt.productTypeValueId,
          valueName: opt.productTypeValueName || "",
        });
      }
    }
  }

  return Array.from(groups.values());
}

function findMatchingVariant(
  variants: ProductVariantClientResponse[],
  selectedOptions: Map<number, number>
): ProductVariantClientResponse | null {
  if (selectedOptions.size === 0) return variants[0] || null;

  return (
    variants.find((variant) => {
      if (!variant.options) return false;
      return Array.from(selectedOptions.entries()).every(([typeId, valueId]) =>
        variant.options!.some(
          (opt) => opt.productTypeId === typeId && opt.productTypeValueId === valueId
        )
      );
    }) || null
  );
}

function getPriceForQuantity(variant: ProductVariantClientResponse, qty: number): number {
  if (!variant.priceTiers || variant.priceTiers.length === 0) {
    return variant.price || 0;
  }
  const sortedTiers = [...variant.priceTiers].sort((a, b) => b.minQty - a.minQty);
  const applicableTier = sortedTiers.find((tier) => qty >= tier.minQty);
  return applicableTier ? applicableTier.price : variant.price || 0;
}

function usePlaceholderSrc() {
  return (
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120' fill='none'><rect width='120' height='120' rx='12' fill='%23f8fafc'/><rect x='20' y='20' width='80' height='80' rx='8' fill='white' stroke='%23e2e8f0' stroke-width='2'/><text x='60' y='65' text-anchor='middle' fill='%2394a3b8' font-family='Arial' font-size='12'>No img</text></svg>`
    )
  );
}

export default function QuickVariantModal({
  productId,
  isOpen,
  onClose,
  mode = "cart",
}: QuickVariantModalProps) {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("QuickVariant");
  const tDetail = useTranslations("ProductDetail");
  const tCommon = useTranslations("Common");
  const placeholderSrc = usePlaceholderSrc();

  const { data: product, isLoading: isLoadingProduct } = useProductLegacy(productId, isOpen);
  const { data: variantsData, isLoading: isLoadingVariants } = useProductVariants(productId, isOpen);
  const { addItemWithNotification, isAddingItem, openCart } = useCartContext();

  // Extract variants array and activeSaleOff from wrapper
  const variants = variantsData?.variants;
  const variantActiveSaleOff = variantsData?.activeSaleOff ?? 0;

  const hasVariants = variants && variants.length > 0;
  const optionGroups = useMemo(
    () => (hasVariants ? groupVariantOptions(variants!) : []),
    [variants, hasVariants]
  );

  const [selectedOptions, setSelectedOptions] = useState<Map<number, number>>(new Map());
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedOptions(new Map());
      setQuantity(1);
      setError(null);
    }
  }, [isOpen, productId]);

  // Auto-select first option for each group
  useEffect(() => {
    if (optionGroups.length > 0 && selectedOptions.size === 0) {
      const initial = new Map<number, number>();
      optionGroups.forEach((group) => {
        if (group.values.length > 0) {
          initial.set(group.typeId, group.values[0].valueId);
        }
      });
      setSelectedOptions(initial);
    }
  }, [optionGroups, selectedOptions.size]);

  const selectedVariant = useMemo(() => {
    if (!hasVariants) return null;
    return findMatchingVariant(variants!, selectedOptions);
  }, [variants, selectedOptions, hasVariants]);

  const handleOptionSelect = (typeId: number, valueId: number) => {
    setSelectedOptions((prev) => {
      const newMap = new Map(prev);
      newMap.set(typeId, valueId);
      return newMap;
    });
    setError(null);
  };

  const displayName = useMemo(() => {
    if (!product) return "";
    if (locale === "vi") return product.name;
    return product.nameEn?.trim() ? product.nameEn : product.name;
  }, [product, locale]);

  // Base price before discount (for strikethrough display)
  const basePrice = useMemo(() => {
    if (hasVariants && selectedVariant) {
      return getPriceForQuantity(selectedVariant, quantity);
    }
    return product?.price1 || 0;
  }, [hasVariants, selectedVariant, quantity, product?.price1]);

  // Final price after applying activeSaleOff discount
  const currentPrice = useMemo(() => {
    if (hasVariants && selectedVariant) {
      const base = getPriceForQuantity(selectedVariant, quantity);
      return Math.max(0, base - variantActiveSaleOff);
    }
    return product?.finalPrice || 0;
  }, [hasVariants, selectedVariant, quantity, variantActiveSaleOff, product?.finalPrice]);

  // Active discount amount to display
  const activeDiscount = hasVariants ? variantActiveSaleOff : (product?.activeSaleOff || 0);

  const currentStock = useMemo(() => {
    if (hasVariants && selectedVariant) {
      return selectedVariant.stock;
    }
    return product?.quantity || 0;
  }, [hasVariants, selectedVariant, product?.quantity]);

  const imageSrc = useMemo(() => {
    if (product?.image) {
      return buildImageUrl(product.image);
    }
    return placeholderSrc;
  }, [product?.image, placeholderSrc]);

  const formatPrice = (value: number) =>
    value.toLocaleString(locale === "vi" ? "vi-VN" : "en-US", { minimumFractionDigits: 0 });

  const hasStock = currentStock > 0;

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => {
      if (!hasStock) return 0;
      const next = prev + delta;
      const min = 1;
      const max = currentStock;
      if (next < min) return min;
      if (next > max) return max;
      return next;
    });
  };

  const handleAddToCart = async () => {
    if (!product || !hasStock) return;

    if (hasVariants && !selectedVariant) {
      setError(tDetail("selectVariant"));
      return;
    }

    const variantId = selectedVariant?.id;
    if (!variantId) {
      setError(tDetail("noCartSupport"));
      return;
    }

    try {
      await addItemWithNotification(variantId, quantity, displayName);
      onClose();
      if (mode === "cart") {
        openCart();
      } else {
        router.push(`/${locale}/checkout`);
      }
    } catch (err) {
      console.error("Failed to add to cart:", err);
    }
  };

  const isLoading = isLoadingProduct || isLoadingVariants;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-[200]">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-3 sm:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                  <Dialog.Title className="text-base font-semibold text-slate-900">
                    {mode === "cart" ? t("title.cart") : t("title.buy")}
                  </Dialog.Title>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <div className="p-4">
                  {isLoading ? (
                    <div className="flex h-40 items-center justify-center">
                      <div className="text-sm text-slate-500">
                        {tCommon("loading")}
                      </div>
                    </div>
                  ) : !product ? (
                    <div className="flex h-40 items-center justify-center">
                      <div className="text-sm text-red-500">
                        {t("productNotFound")}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Product Info */}
                      <div className="flex gap-3">
                        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-50">
                          <Image
                            src={imageSrc}
                            alt={displayName}
                            fill
                            sizes="80px"
                            className="object-contain p-1"
                            unoptimized
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="line-clamp-2 text-sm font-medium text-slate-900">
                            {displayName}
                          </h3>
                          <div className="mt-1 text-xs text-slate-500">{product.code}</div>
                          <div className="mt-2 flex flex-wrap items-baseline gap-2">
                            <span className="text-lg font-bold text-primary">
                              {currentPrice > 0
                                ? `${formatPrice(currentPrice)} đ`
                                : tDetail("contact")}
                            </span>
                            {activeDiscount > 0 && basePrice > 0 && (
                              <>
                                <span className="text-sm text-slate-400 line-through">
                                  {formatPrice(basePrice)} đ
                                </span>
                                <span className="rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                                  -{formatPrice(activeDiscount)}đ
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Variant Options */}
                      {optionGroups.length > 0 && (
                        <div className="space-y-3">
                          {optionGroups.map((group) => (
                            <div key={group.typeId}>
                              <div className="mb-1.5 text-xs font-medium text-slate-700">
                                {group.typeName}
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {group.values.map((value) => {
                                  const isSelected =
                                    selectedOptions.get(group.typeId) === value.valueId;
                                  return (
                                    <button
                                      key={value.valueId}
                                      type="button"
                                      onClick={() => handleOptionSelect(group.typeId, value.valueId)}
                                      className={`rounded-lg border px-2.5 py-1.5 text-xs font-medium transition ${
                                        isSelected
                                          ? "border-primary bg-orange-50 text-primary"
                                          : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                                      }`}
                                    >
                                      {value.valueName}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Price Tiers */}
                      {selectedVariant?.priceTiers && selectedVariant.priceTiers.length > 1 && (
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
                          <div className="mb-1.5 text-xs font-medium text-slate-600">
                            {t("quantityPricing")}
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {[...selectedVariant.priceTiers]
                              .sort((a, b) => a.minQty - b.minQty)
                              .map((tier) => (
                                <div
                                  key={tier.id}
                                  className={`rounded-md px-2 py-1 text-xs ${
                                    quantity >= tier.minQty
                                      ? "bg-primary/10 font-medium text-primary"
                                      : "border border-slate-200 bg-white text-slate-600"
                                  }`}
                                >
                                  {tier.minQty}+: {formatPrice(tier.price)} đ
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                      {/* Stock & Quantity */}
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span
                            className={hasStock ? "text-emerald-600" : "font-medium text-red-500"}
                          >
                            {hasStock
                              ? t("available", { count: currentStock })
                              : tDetail("outOfStock")}
                          </span>
                        </div>

                        <div className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(-1)}
                            disabled={!hasStock || quantity <= 1 || isAddingItem}
                            className="flex h-9 w-9 items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-40"
                          >
                            −
                          </button>
                          <input
                            type="number"
                            min={1}
                            max={currentStock > 0 ? currentStock : undefined}
                            value={quantity}
                            onChange={(e) => {
                              const val = parseInt(e.target.value, 10);
                              if (isNaN(val) || val < 1) {
                                setQuantity(1);
                              } else if (currentStock > 0 && val > currentStock) {
                                setQuantity(currentStock);
                              } else {
                                setQuantity(val);
                              }
                            }}
                            disabled={!hasStock || isAddingItem}
                            className="h-9 w-12 border-0 bg-transparent text-center text-sm font-semibold text-slate-800 outline-none focus:ring-0 disabled:opacity-40 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                          />
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(1)}
                            disabled={!hasStock || quantity >= currentStock || isAddingItem}
                            className="flex h-9 w-9 items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-40"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Error Message */}
                      {error && (
                        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
                          {error}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer */}
                {!isLoading && product && (
                  <div className="border-t border-slate-200 px-4 py-3">
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      disabled={!hasStock || isAddingItem}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-white transition hover:bg-primary-dark disabled:bg-slate-300"
                    >
                      {isAddingItem && (
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                      )}
                      {mode === "cart" ? t("title.cart") : t("title.buy")}
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
