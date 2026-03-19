"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductCardList from "@/components/ProductCardList";
import ProductCardCompact from "@/components/ProductCardCompact";
import ViewModeToggle, { type ViewMode } from "@/components/ViewModeToggle";
import { useProductsByCategoryInfinite } from "@/hooks/useProductsByCategory";
import type { PagedResult, ProductByCategoryDto } from "@/lib/api/productsByCategory";

interface ProductsByCategoryListProps {
  categoryId: number;
}

// LocalStorage key for persisting view mode preference
const VIEW_MODE_KEY = "tme-product-view-mode";

export default function ProductsByCategoryList({ categoryId }: ProductsByCategoryListProps) {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Products");
  const tCommon = useTranslations("Common");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const pageSize = 10;

  // Load saved view mode preference on mount
  useEffect(() => {
    const saved = localStorage.getItem(VIEW_MODE_KEY) as ViewMode | null;
    if (saved && ["grid", "list", "compact"].includes(saved)) {
      setViewMode(saved);
    }
  }, []);

  // Save view mode preference
  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    localStorage.setItem(VIEW_MODE_KEY, mode);
  };

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProductsByCategoryInfinite(categoryId, pageSize);

  // Flatten all pages into a single items array
  const items = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap((page) => {
      const paged = page as PagedResult<ProductByCategoryDto>;
      return paged.items ?? [];
    });
  }, [data?.pages]);

  // Get total count from first page
  const totalCount = useMemo(() => {
    if (!data?.pages?.[0]) return 0;
    const firstPage = data.pages[0] as PagedResult<ProductByCategoryDto>;
    return firstPage.totalCount ?? 0;
  }, [data?.pages]);

  const handleProductClick = (product: ProductByCategoryDto) => {
    router.push(`/${locale}/products/${product.id}`);
  };

  const handleAddToCart = (product: ProductByCategoryDto, quantity: number = 1) => {
    console.log("add-to-cart", product, quantity);
  };

  const handleBuyNow = (product: ProductByCategoryDto, quantity: number = 1) => {
    console.log("buy-now", product, quantity);
  };

  // Grid layout classes based on view mode
  const getGridClasses = () => {
    switch (viewMode) {
      case "list":
        return "flex flex-col gap-2 sm:gap-3";
      case "compact":
        return "grid gap-2 grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 sm:gap-3";
      case "grid":
      default:
        return "grid gap-3 grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
    }
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-white px-3 py-2 shadow-sm">
        <div className="text-sm text-slate-600">
          {t("showing")} <span className="font-semibold text-slate-800">{items.length}</span> {t("of")} <span className="font-semibold text-slate-800">{totalCount}</span> {t("products")}
        </div>
        <ViewModeToggle value={viewMode} onChange={handleViewModeChange} />
      </div>

      {isLoading ? (
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-6 text-sm text-slate-600 shadow-sm">
          {t("loading")}
        </div>
      ) : isError ? (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-6 text-sm text-red-700 shadow-sm">
          {error instanceof Error ? error.message : t("loadError")}
          <button
            className="ml-3 rounded-md border border-red-200 px-3 py-1 text-xs font-medium text-red-700 hover:bg-red-100"
            onClick={() => refetch()}
          >
            {tCommon("retry")}
          </button>
        </div>
      ) : items.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-6 text-sm text-slate-600 shadow-sm">
          {t("empty")}
        </div>
      ) : (
        <>
          <div className={getGridClasses()}>
            {items.map((product) => {
              const displayName = locale === "vi" ? product.name : product.nameEn || product.name;

              if (viewMode === "list") {
                return (
                  <ProductCardList
                    key={product.id}
                    product={product}
                    displayName={displayName}
                    onAddToCart={handleAddToCart}
                    onBuyNow={handleBuyNow}
                    onClick={handleProductClick}
                  />
                );
              }

              if (viewMode === "compact") {
                return (
                  <ProductCardCompact
                    key={product.id}
                    product={product}
                    displayName={displayName}
                    onAddToCart={(p) => handleAddToCart(p, 1)}
                    onClick={handleProductClick}
                  />
                );
              }

              // Default: grid view
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  displayName={displayName}
                  onAddToCart={handleAddToCart}
                  onBuyNow={handleBuyNow}
                  onClick={handleProductClick}
                />
              );
            })}
          </div>

          {/* Load More Button */}
          {hasNextPage && (
            <div className="flex justify-center pt-4">
              <button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="rounded-lg border border-primary bg-white px-6 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isFetchingNextPage ? t("loadingMore") : t("loadMore")}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
