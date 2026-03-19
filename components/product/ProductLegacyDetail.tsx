"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { useProductLegacy, useProductRelated, useProductSimilar, useProductVariants } from "@/hooks/useProductLegacy";
import { useCartContext } from "@/contexts/CartContext";
import type { ProductRelatedResponse, ProductSimilarResponse, ProductVariantClientResponse, ProductVariantOptionResponse } from "@/lib/api/product-legacy";
import type { ProductLegacyDetailDto } from "@/lib/api/product-legacy";
import { buildImageUrl } from "@/lib/utils";
import QuickVariantModal from "@/components/product/QuickVariantModal";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import RecentlyViewedSection from "@/components/RecentlyViewedSection";
import WishlistHeartButton from "@/components/WishlistHeartButton";

interface ProductLegacyDetailProps {
  productId: number;
}

function normalizeImage(src?: string | null) {
  if (!src) return null;
  // Use buildImageUrl to properly add domain and handle relative paths
  return buildImageUrl(src);
}

// Rewrite image src in HTML content to use full URLs
function rewriteContentImages(html: string) {
  return html.replace(/src=["']([^"']+)["']/gi, (match, src) => {
    const trimmed = src.trim();
    // Skip absolute URLs and data URIs
    if (/^(https?:)?\/\//i.test(trimmed) || trimmed.startsWith("data:")) return match;
    const full = buildImageUrl(trimmed);
    return `src="${full}"`;
  });
}

function usePlaceholderSrc() {
  return (
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='240' viewBox='0 0 320 240' fill='none'><rect width='320' height='240' rx='16' fill='%23f8fafc'/><rect x='36' y='40' width='248' height='160' rx='12' fill='white' stroke='%23e2e8f0' stroke-width='2'/><path d='M84 158l54-70 50 60 34-30 18 22' stroke='%23cbd5e1' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/><circle cx='120' cy='90' r='18' fill='%23e2e8f0'/><text x='160' y='195' text-anchor='middle' fill='%2394a3b8' font-family='Arial, sans-serif' font-size='14'>No image</text></svg>`,
    )
  );
}

function InfoRow({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-sm text-slate-700 sm:grid sm:grid-cols-3">
      <div className="w-full text-slate-500 sm:col-span-1 sm:w-auto">{label}</div>
      <div className="min-w-0 break-words font-medium text-slate-900 sm:col-span-2">{value}</div>
    </div>
  );
}

interface RelatedProductCardProps {
  product: ProductRelatedResponse | ProductSimilarResponse;
  locale: string;
  placeholderSrc: string;
}

function RelatedProductCard({ product, locale, placeholderSrc }: RelatedProductCardProps) {
  const router = useRouter();
  const t = useTranslations("ProductDetail");
  const imageSrc = product.image ? buildImageUrl(product.image) : placeholderSrc;
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    router.push(`/${locale}/products/${product.productId}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalOpen(true);
  };

  return (
    <article
      onClick={handleCardClick}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition hover:border-primary hover:shadow-md sm:p-3"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-50">
        <Image
          src={imageSrc}
          alt={product.name || "Product"}
          fill
          sizes="(min-width: 1024px) 200px, 50vw"
          className="object-contain p-2 transition group-hover:scale-105"
          unoptimized
          onError={(e) => {
            (e.target as HTMLImageElement).src = placeholderSrc;
          }}
        />
      </div>
      <div className="mt-2 flex flex-1 flex-col gap-1">
        <div className="text-[10px] text-slate-500">
          {product.code}
        </div>
        <h3 className="line-clamp-2 flex-1 text-xs font-medium text-slate-800 group-hover:text-primary sm:text-sm">
          {product.name || "N/A"}
        </h3>
        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-1 w-full rounded-lg bg-primary py-1.5 text-xs font-semibold text-white transition hover:bg-primary-dark sm:py-2"
        >
          {t("addToCart")}
        </button>
      </div>

      {/* Quick Variant Modal */}
      <QuickVariantModal
        productId={product.productId}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode="cart"
      />
    </article>
  );
}

interface ProductGridProps {
  products: (ProductRelatedResponse | ProductSimilarResponse)[];
  locale: string;
  placeholderSrc: string;
  isLoading?: boolean;
  emptyMessage: string;
}

function ProductGrid({ products, locale, placeholderSrc, isLoading, emptyMessage }: ProductGridProps) {
  const tCommon = useTranslations("Common");
  if (isLoading) {
    return (
      <div className="py-8 text-center text-sm text-slate-500">
        {tCommon("loading")}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="py-8 text-center text-sm text-slate-500">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {products.map((product) => (
        <RelatedProductCard
          key={product.productId}
          product={product}
          locale={locale}
          placeholderSrc={placeholderSrc}
        />
      ))}
    </div>
  );
}

// Group variant options by type for picker UI
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
      if (!group.values.some(v => v.valueId === opt.productTypeValueId)) {
        group.values.push({
          valueId: opt.productTypeValueId,
          valueName: opt.productTypeValueName || "",
        });
      }
    }
  }

  return Array.from(groups.values());
}

// Find variant that matches all selected options
function findMatchingVariant(
  variants: ProductVariantClientResponse[],
  selectedOptions: Map<number, number> // typeId -> valueId
): ProductVariantClientResponse | null {
  if (selectedOptions.size === 0) return variants[0] || null;

  return variants.find(variant => {
    if (!variant.options) return false;
    return Array.from(selectedOptions.entries()).every(([typeId, valueId]) =>
      variant.options!.some(opt => opt.productTypeId === typeId && opt.productTypeValueId === valueId)
    );
  }) || null;
}

// Get price based on quantity from price tiers
function getPriceForQuantity(variant: ProductVariantClientResponse, qty: number): number {
  if (!variant.priceTiers || variant.priceTiers.length === 0) {
    return variant.price || 0;
  }

  // Sort tiers by minQty descending to find the applicable tier
  const sortedTiers = [...variant.priceTiers].sort((a, b) => b.minQty - a.minQty);
  const applicableTier = sortedTiers.find(tier => qty >= tier.minQty);

  return applicableTier ? applicableTier.price : variant.price || 0;
}

interface VariantPickerProps {
  variants: ProductVariantClientResponse[];
  selectedOptions: Map<number, number>;
  onOptionSelect: (typeId: number, valueId: number) => void;
  locale: string;
}

// Wholesale Price Modal (Shopee style)
interface WholesalePriceModalProps {
  isOpen: boolean;
  onClose: () => void;
  priceTiers: { id: number; minQty: number; price: number }[];
  basePrice: number;
  locale: string;
  formatPrice: (value: number) => string;
}

function WholesalePriceModal({ isOpen, onClose, priceTiers, basePrice, locale, formatPrice }: WholesalePriceModalProps) {
  const t = useTranslations("ProductDetail");
  if (!isOpen) return null;

  const sortedTiers = [...priceTiers].sort((a, b) => a.minQty - b.minQty);

  // Calculate max quantity for each tier (next tier's minQty - 1, or "+" for last)
  const tiersWithRange = sortedTiers.map((tier, index) => {
    const nextTier = sortedTiers[index + 1];
    const maxQty = nextTier ? nextTier.minQty - 1 : null;
    const savings = basePrice - tier.price;
    return { ...tier, maxQty, savings };
  });

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-4 shadow-xl mx-4">
        <h3 className="mb-4 text-center text-base font-semibold text-slate-900">
          {t("wholesale.title")}
        </h3>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 text-left font-medium text-slate-600">
                  {t("wholesale.quantity")}
                </th>
                <th className="px-3 py-2 text-left font-medium text-slate-600">
                  {t("wholesale.unitPrice")}
                </th>
                <th className="px-3 py-2 text-left font-medium text-slate-600">
                  {t("wholesale.savings")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tiersWithRange.map((tier) => (
                <tr key={tier.id}>
                  <td className="px-3 py-2.5 text-slate-700">
                    {tier.maxQty ? `${tier.minQty} - ${tier.maxQty}` : `≥ ${tier.minQty}`}
                  </td>
                  <td className="px-3 py-2.5 font-medium text-primary">
                    {formatPrice(tier.price)}đ
                  </td>
                  <td className="px-3 py-2.5 text-green-600">
                    {tier.savings > 0 ? `-${formatPrice(tier.savings)}đ` : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Close button */}
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {t("wholesale.close")}
          </button>
        </div>
      </div>
    </div>
  );
}

function VariantPicker({ variants, selectedOptions, onOptionSelect, locale }: VariantPickerProps) {
  const optionGroups = useMemo(() => groupVariantOptions(variants), [variants]);

  if (optionGroups.length === 0) return null;

  return (
    <div className="mt-4 space-y-3">
      {optionGroups.map(group => (
        <div key={group.typeId}>
          <div className="mb-2 text-sm font-medium text-slate-700">{group.typeName}</div>
          <div className="flex flex-wrap gap-2">
            {group.values.map(value => {
              const isSelected = selectedOptions.get(group.typeId) === value.valueId;
              return (
                <button
                  key={value.valueId}
                  type="button"
                  onClick={() => onOptionSelect(group.typeId, value.valueId)}
                  className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition ${isSelected
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
  );
}

export default function ProductLegacyDetail({ productId }: ProductLegacyDetailProps) {
  const locale = useLocale();
  const t = useTranslations("ProductDetail");
  const tCommon = useTranslations("Common");
  const tCard = useTranslations("ProductCard");
  const router = useRouter();
  const { data, isLoading, isError, error, refetch } = useProductLegacy(productId);
  const { addItemWithNotification, isAddingItem, lastMessage, openCart } = useCartContext();
  const placeholderSrc = usePlaceholderSrc();
  const { addToRecentlyViewed } = useRecentlyViewed();

  const displayName = useMemo(() => {
    if (!data) return "";
    if (locale === "vi") return data.name;
    return data.nameEn?.trim() ? data.nameEn : data.name;
  }, [data, locale]);

  // Track product view for "recently viewed" section
  useEffect(() => {
    if (data) {
      addToRecentlyViewed({
        id: data.id,
        name: data.name,
        nameEn: data.nameEn,
        imageUrl: data.image,
        price: data.price1,
        originalPrice: data.originalPrice,
        activeSaleOff: data.activeSaleOff,
        finalPrice: data.finalPrice,
        code: data.code,
        categoryId: data.categoryId,
        isActive: data.isActive,
        quantity: data.quantity,
      });
    }
  }, [data, addToRecentlyViewed]);

  const shortDescription = useMemo(() => {
    if (!data) return "";
    if (locale === "vi") return data.shortContent || data.shortContentEn || "";
    return data.shortContentEn?.trim() ? data.shortContentEn : data.shortContent || "";
  }, [data, locale]);

  const htmlContent = useMemo(() => {
    if (!data) return "";
    let content = "";
    if (locale === "vi") {
      content = data.content || data.contentEn || "";
    } else {
      const en = data.contentEn && data.contentEn.trim().length > 0 ? data.contentEn : "";
      content = en || data.content || "";
    }
    // Rewrite image URLs in HTML content to use full domain
    return content ? rewriteContentImages(content) : "";
  }, [data, locale]);

  const images = useMemo(() => {
    if (!data) return [];
    const rawImages = [data.image, data.image2, data.image3, data.image4];
    const normalized = rawImages.map((src) => normalizeImage(src)).filter(Boolean) as string[];
    // Debug: log image URLs
    console.log("[ProductLegacyDetail] Raw images:", rawImages);
    console.log("[ProductLegacyDetail] Normalized images:", normalized);
    return normalized;
  }, [data]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"info" | "related" | "similar">("info");

  // Fetch variants (API returns wrapper: { activeSaleOff, variants })
  const { data: variantsData, isLoading: isLoadingVariants } = useProductVariants(productId);
  const variants = variantsData?.variants;
  const variantActiveSaleOff = variantsData?.activeSaleOff ?? 0;
  const hasVariants = variants && variants.length > 0;

  // State for selected variant options
  const [selectedOptions, setSelectedOptions] = useState<Map<number, number>>(new Map());

  // State for wholesale price modal
  const [showWholesaleModal, setShowWholesaleModal] = useState(false);

  // Find the matching variant based on selected options
  const selectedVariant = useMemo(() => {
    if (!hasVariants) return null;
    return findMatchingVariant(variants!, selectedOptions);
  }, [variants, selectedOptions, hasVariants]);

  // Handle option selection
  const handleOptionSelect = (typeId: number, valueId: number) => {
    setSelectedOptions(prev => {
      const newMap = new Map(prev);
      newMap.set(typeId, valueId);
      return newMap;
    });
  };

  // Auto-select first variant options when variants are loaded
  useEffect(() => {
    if (variants && variants.length > 0 && selectedOptions.size === 0) {
      const firstVariant = variants[0];
      if (firstVariant.options && firstVariant.options.length > 0) {
        const defaultOptions = new Map<number, number>();
        firstVariant.options.forEach(opt => {
          defaultOptions.set(opt.productTypeId, opt.productTypeValueId);
        });
        setSelectedOptions(defaultOptions);
      }
    }
  }, [variants]);

  // Track recently viewed product
  useEffect(() => {
    if (!data) return;
    addToRecentlyViewed({
      id: data.id,
      name: data.name,
      nameEn: data.nameEn,
      imageUrl: data.image,
      price: data.price1,
      finalPrice: data.finalPrice,
      code: data.code,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.id]);

  // Fetch related and similar products only when their tabs are active
  const { data: relatedProducts, isLoading: isLoadingRelated } = useProductRelated(
    productId,
    activeTab === "related"
  );
  const { data: similarProducts, isLoading: isLoadingSimilar } = useProductSimilar(
    productId,
    activeTab === "similar"
  );

  const mainImage = selectedImage || images[0] || placeholderSrc;

  const formatPrice = (value: number) =>
    value.toLocaleString(locale === "vi" ? "vi-VN" : "en-US", { minimumFractionDigits: 0 });

  // Calculate price and stock based on variant (if available) or legacy data
  const [quantity, setQuantity] = useState<number>(1);

  const currentPrice = useMemo(() => {
    if (hasVariants && selectedVariant) {
      return getPriceForQuantity(selectedVariant, quantity);
    }
    return data?.finalPrice || 0;
  }, [hasVariants, selectedVariant, quantity, data?.finalPrice]);

  const currentStock = useMemo(() => {
    if (hasVariants && selectedVariant) {
      return selectedVariant.stock;
    }
    return data?.quantity || 0;
  }, [hasVariants, selectedVariant, data?.quantity]);

  const currentSku = useMemo(() => {
    if (hasVariants && selectedVariant) {
      return selectedVariant.sku;
    }
    return data?.code || null;
  }, [hasVariants, selectedVariant, data?.code]);

  const hasDiscount =
    data &&
    data.originalPrice !== null &&
    data.originalPrice > 0 &&
    data.originalPrice > currentPrice;

  const discountPercent =
    hasDiscount && data
      ? Math.round(((data.originalPrice! - currentPrice) / data.originalPrice!) * 100)
      : 0;

  // Active discount: use variant's activeSaleOff if has variants, otherwise product's activeSaleOff
  const activeDiscount = hasVariants ? variantActiveSaleOff : (data?.activeSaleOff || 0);
  const hasActiveDiscount = activeDiscount > 0;
  const totalDiscount = activeDiscount * quantity;

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

  // Error message for variant selection
  const [variantError, setVariantError] = useState<string | null>(null);

  const handleAddToCart = async () => {
    if (!data || !hasStock) return;

    // If product has variants, user must select one
    if (hasVariants && !selectedVariant) {
      setVariantError(t("selectVariant"));
      return;
    }

    setVariantError(null);

    // Use variant ID if available, otherwise this product might not support cart
    // (legacy products without variants might need different handling)
    const variantId = selectedVariant?.id;
    if (!variantId) {
      // For legacy products without variants, we can't add to cart via API
      // Show a message or handle differently
      setVariantError(t("noCartSupport"));
      return;
    }

    try {
      await addItemWithNotification(variantId, quantity, displayName);
      openCart(); // Open cart drawer to show the added item
    } catch (err) {
      // Error is already handled by addItemWithNotification
      console.error("Failed to add to cart:", err);
    }
  };

  const handleBuyNow = async () => {
    if (!data || !hasStock) return;

    // If product has variants, user must select one
    if (hasVariants && !selectedVariant) {
      setVariantError(t("selectVariant"));
      return;
    }

    setVariantError(null);

    const variantId = selectedVariant?.id;
    if (!variantId) {
      setVariantError(t("noCartSupport"));
      return;
    }

    try {
      await addItemWithNotification(variantId, quantity, displayName);
      // Navigate to checkout page
      router.push(`/${locale}/checkout`);
    } catch (err) {
      console.error("Failed to add to cart:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm">
        {tCommon("loading")}
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 shadow-sm">
        {error instanceof Error ? error.message : tCommon("error")}
        <button
          className="ml-3 rounded-md border border-red-200 px-3 py-1 text-xs font-medium text-red-700 hover:bg-red-100"
          onClick={() => refetch()}
        >
          {tCommon("retry")}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 overflow-x-hidden">
      <nav className="text-xs text-slate-500">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5">
          <Link href={`/${locale}`} className="hover:text-primary">
            {tCommon("home")}
          </Link>
          <span>/</span>
          <span className="hover:text-primary">{data.categoryName}</span>
          <span>/</span>
          <span className="min-w-0 truncate text-slate-700">{displayName}</span>
        </div>
      </nav>

      <section className="mt-3 grid gap-4 sm:mt-4 sm:gap-6 lg:gap-8 lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)]">
        <div className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white p-2 shadow-sm sm:mx-0 sm:max-w-none sm:p-3">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-50 sm:aspect-[4/3]">
            <Image
              src={mainImage}
              alt={displayName}
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 280px"
              className="object-contain p-2 sm:p-3"
              unoptimized
              onError={(e) => {
                if ((e.target as HTMLImageElement).src !== placeholderSrc) {
                  setSelectedImage(placeholderSrc);
                }
              }}
            />
          </div>
          {images.length ? (
            <div className="mt-2 grid grid-cols-3 gap-1.5 sm:mt-3 sm:grid-cols-4 sm:gap-2">
              {images.map((img) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg border ${mainImage === img ? "border-primary ring-1 ring-primary" : "border-slate-200"
                    }`}
                >
                  <Image
                    src={img}
                    alt={displayName}
                    fill
                    sizes="(min-width: 640px) 80px, 60px"
                    className="object-contain p-1"
                    unoptimized
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = placeholderSrc;
                    }}
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <div className="text-xs uppercase tracking-wide text-slate-500">{data.categoryName}</div>
          <div className="mt-1 flex items-start gap-2">
            <h1 className="flex-1 text-lg font-semibold text-slate-900 sm:text-xl">{displayName}</h1>
            <WishlistHeartButton productId={productId} productName={displayName} size="md" className="shrink-0 mt-0.5" />
          </div>
          {shortDescription ? (
            <div
              className="mt-2 overflow-hidden break-words text-sm text-slate-700 [&_*]:max-w-full"
              dangerouslySetInnerHTML={{ __html: shortDescription }}
            />
          ) : null}

          <div className="mt-3 space-y-2">
            <InfoRow label={t("code")} value={data.code} />
            <InfoRow label={t("provider")} value={data.providerName} />
            <InfoRow label={t("type")} value={data.type} />
            <InfoRow label={t("origin")} value={data.origin} />
            <InfoRow label={t("unit")} value={data.unit} />
          </div>

          {/* Price Tiers - Shopee style (above variant picker) */}
          {selectedVariant?.priceTiers && selectedVariant.priceTiers.length > 1 && (() => {
            const sortedTiers = [...selectedVariant.priceTiers].sort((a, b) => a.minQty - b.minQty);
            const basePrice = sortedTiers[0]?.price || selectedVariant.price || 0;
            // Show first 2 tiers inline
            const previewTiers = sortedTiers.slice(0, 2);

            return (
              <div className="mt-3 flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50/80 p-3">
                <div className="shrink-0 text-sm text-slate-500">
                  {t("wholesale.title")}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-700">
                    {previewTiers.map((tier, idx) => {
                      const nextTier = sortedTiers[idx + 1];
                      const maxQty = nextTier ? nextTier.minQty - 1 : null;
                      const range = maxQty ? `${tier.minQty} - ${maxQty}` : `≥ ${tier.minQty}`;
                      return (
                        <span key={tier.id}>
                          {idx > 0 && ", "}
                          {t("wholesale.buyItems")}{" "}
                          <span className="font-medium">({range})</span>{" "}
                          {t("wholesale.itemsFor")}{" "}
                          <span className="font-medium text-primary">{formatPrice(tier.price)}đ</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowWholesaleModal(true)}
                  className="shrink-0 text-sm font-medium text-primary hover:underline"
                >
                  {t("wholesale.viewMore")} &gt;
                </button>
              </div>
            );
          })()}

          {/* Wholesale Price Modal */}
          {selectedVariant?.priceTiers && selectedVariant.priceTiers.length > 1 && (
            <WholesalePriceModal
              isOpen={showWholesaleModal}
              onClose={() => setShowWholesaleModal(false)}
              priceTiers={selectedVariant.priceTiers}
              basePrice={selectedVariant.priceTiers[0]?.price || selectedVariant.price || 0}
              locale={locale}
              formatPrice={formatPrice}
            />
          )}

          {/* Variant Picker */}
          {hasVariants && variants && (
            <VariantPicker
              variants={variants}
              selectedOptions={selectedOptions}
              onOptionSelect={handleOptionSelect}
              locale={locale}
            />
          )}

          <div className="mt-3 space-y-2 rounded-xl bg-orange-50/60 p-3 sm:mt-4 sm:p-4">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-xl font-bold text-primary sm:text-2xl">
                {currentPrice > 0
                  ? `${formatPrice(currentPrice - activeDiscount)} đ`
                  : t("contact")}
              </span>
              {hasActiveDiscount && (
                <span className="text-sm text-slate-400 line-through">
                  {formatPrice(currentPrice)} đ
                </span>
              )}
              {!hasActiveDiscount && hasDiscount ? (
                <span className="text-sm text-slate-400 line-through">
                  {formatPrice(data.originalPrice!)} đ
                </span>
              ) : null}
              {hasActiveDiscount && (
                <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">
                  -{formatPrice(activeDiscount)} đ
                </span>
              )}
              {!hasActiveDiscount && discountPercent > 0 ? (
                <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">
                  -{discountPercent}%
                </span>
              ) : null}
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className={`font-medium ${hasStock ? "text-green-600" : "text-red-500"}`}>
                {hasStock
                  ? `${t("stock")}: ${currentStock} ${t("items")}`
                  : t("outOfStock")}
              </span>
              {currentSku && (
                <span className="min-w-0 truncate text-slate-500">SKU: {currentSku}</span>
              )}
            </div>
          </div>

          {/* Variant selection error */}
          {variantError && (
            <div className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
              {variantError}
            </div>
          )}

          {/* Cart success/error message */}
          {lastMessage && (
            <div
              className={`mt-3 rounded-lg border px-3 py-2 text-sm ${lastMessage.type === "success"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-600"
                }`}
            >
              {lastMessage.text}
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50 px-1">
              <button
                type="button"
                onClick={() => handleQuantityChange(-1)}
                disabled={!hasStock || quantity <= 1 || isAddingItem}
                className="flex h-9 w-9 items-center justify-center rounded-l-xl text-base text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
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
                className="flex h-9 w-9 items-center justify-center rounded-r-xl text-base text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!hasStock || isAddingItem}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {isAddingItem && (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {t("addToCart")}
            </button>
            {/* TODO: Temporarily hidden - Buy Now button
            <button
              type="button"
              onClick={handleBuyNow}
              disabled={!hasStock || isAddingItem}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-orange-50 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-300"
            >
              {t("buyNow")}
            </button>
            */}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab("info")}
            className={`rounded-lg px-3 py-1 text-sm font-semibold transition ${activeTab === "info"
              ? "bg-orange-50 text-primary"
              : "text-slate-500 hover:text-slate-700"
              }`}
          >
            {t("tabs.info")}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("related")}
            className={`rounded-lg px-3 py-1 text-sm font-semibold transition ${activeTab === "related"
              ? "bg-orange-50 text-primary"
              : "text-slate-500 hover:text-slate-700"
              }`}
          >
            {t("tabs.related")}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("similar")}
            className={`rounded-lg px-3 py-1 text-sm font-semibold transition ${activeTab === "similar"
              ? "bg-orange-50 text-primary"
              : "text-slate-500 hover:text-slate-700"
              }`}
          >
            {t("tabs.similar")}
          </button>
        </div>
        <div className="pt-3">
          {activeTab === "info" && (
            <div
              className="prose max-w-none overflow-x-auto text-sm prose-img:max-w-full prose-table:w-full prose-table:table-fixed prose-pre:overflow-x-auto prose-ul:list-disc prose-li:marker:text-slate-500 [&_*]:max-w-full"
              // TODO: sanitize HTML before production (e.g. DOMPurify)
              dangerouslySetInnerHTML={{ __html: htmlContent || "" }}
            />
          )}
          {activeTab === "related" && (
            <ProductGrid
              products={relatedProducts || []}
              locale={locale}
              placeholderSrc={placeholderSrc}
              isLoading={isLoadingRelated}
              emptyMessage={t("noRelated")}
            />
          )}
          {activeTab === "similar" && (
            <ProductGrid
              products={similarProducts || []}
              locale={locale}
              placeholderSrc={placeholderSrc}
              isLoading={isLoadingSimilar}
              emptyMessage={t("noSimilar")}
            />
          )}
        </div>
      </section>

      {/* Recently Viewed Products */}
      <RecentlyViewedSection currentProductId={productId} />
    </div>
  );
}
