"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductCardList from "@/components/ProductCardList";
import ProductCardCompact from "@/components/ProductCardCompact";
import ViewModeToggle, { type ViewMode } from "@/components/ViewModeToggle";
import ProductFilter, { PRODUCT_FILTER_INITIAL_STATE, type ProductFilterState } from "@/components/ProductFilter";
import SortBar from "@/components/SortBar";
import { useLegacyProducts } from "@/hooks/useProductLegacy";
import { useNewProducts } from "@/hooks/useNewProducts";
import { useProductFilterV2 } from "@/components/layout/ProductFilterV2Context";
import type { LegacyProductListItem, LegacyProductsParams } from "@/lib/api/product-legacy";
import type { ProductByCategoryDto } from "@/lib/api/productsByCategory";

interface LegacyProductsListProps {
  categoryId?: number;
  keyword?: string;
  filters?: ProductFilterState;
  onFilterChange?: (filters: ProductFilterState) => void;
  showInlineFilter?: boolean;
  /** Use filters from sidebar context (default: true) */
  useSidebarFilter?: boolean;
  /** Data source: 'legacy' uses legacy products API, 'newProducts' uses new products API */
  dataSource?: "legacy" | "newProducts";
  /** Page size override */
  pageSizeOverride?: number;
}

// LocalStorage key for persisting view mode preference
const VIEW_MODE_KEY = "tme-product-view-mode";

export default function LegacyProductsList({
  categoryId,
  keyword,
  filters: externalFilters,
  onFilterChange: externalOnFilterChange,
  showInlineFilter,
  useSidebarFilter = true,
  dataSource = "legacy",
  pageSizeOverride,
}: LegacyProductsListProps) {
  const isNewProductsMode = dataSource === "newProducts";
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Products");
  const tCommon = useTranslations("Common");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [internalFilters, setInternalFilters] = useState<ProductFilterState>(PRODUCT_FILTER_INITIAL_STATE);
  const [page, setPage] = useState(1);
  const [accumulatedItems, setAccumulatedItems] = useState<LegacyProductListItem[]>([]);
  const pageSize = pageSizeOverride ?? 10;

  // Get filters from context (sidebar filter V2 - uses arrays)
  const contextFilterV2 = useProductFilterV2();

  // Convert V2 state (arrays) to V1 format (single values) for API compatibility
  const contextFiltersAsV1: ProductFilterState = useMemo(() => ({
    providerId: contextFilterV2.filters.providerIds[0] || "",
    origin: contextFilterV2.filters.origins[0] || "",
    type: contextFilterV2.filters.types[0] || "",
    pin: contextFilterV2.filters.pins[0] || "",
    packed: contextFilterV2.filters.packeds[0] || "",
  }), [contextFilterV2.filters]);

  // Priority: props > context > internal state
  const filters = externalFilters ?? (useSidebarFilter ? contextFiltersAsV1 : internalFilters);

  // Inline filter visibility (mobile only) - hidden on desktop when sidebar filter is used
  const shouldShowInlineFilter = showInlineFilter ?? (!externalFilters && !useSidebarFilter);

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

  // Reset page and accumulated items when categoryId or keyword changes
  useEffect(() => {
    setPage(1);
    setAccumulatedItems([]);
  }, [categoryId, keyword]);

  // Reset page and accumulated items when context filters change (for sidebar filter sync)
  useEffect(() => {
    if (useSidebarFilter) {
      setPage(1);
      setAccumulatedItems([]);
    }
  }, [contextFilterV2.filters, useSidebarFilter]);

  // Build API params - use comma-separated values for multi-select filters
  const apiParams: LegacyProductsParams = useMemo(() => {
    // If using sidebar filter, use V2 arrays directly (comma-separated)
    // Otherwise, convert V1 single values to API params
    const providerIdParam = useSidebarFilter && contextFilterV2.filters.providerIds.length > 0
      ? contextFilterV2.filters.providerIds.join(',')
      : filters.providerId || undefined;
    const originParam = useSidebarFilter && contextFilterV2.filters.origins.length > 0
      ? contextFilterV2.filters.origins.join(',')
      : filters.origin || undefined;
    const typeParam = useSidebarFilter && contextFilterV2.filters.types.length > 0
      ? contextFilterV2.filters.types.join(',')
      : filters.type || undefined;
    const pinParam = useSidebarFilter && contextFilterV2.filters.pins.length > 0
      ? contextFilterV2.filters.pins.join(',')
      : filters.pin || undefined;
    const packedParam = useSidebarFilter && contextFilterV2.filters.packeds.length > 0
      ? contextFilterV2.filters.packeds.join(',')
      : filters.packed || undefined;

    // Get sort params from V2 context
    const sortBy = useSidebarFilter && contextFilterV2.filters.sortBy
      ? contextFilterV2.filters.sortBy
      : undefined;
    const sortDir = useSidebarFilter && contextFilterV2.filters.sortBy
      ? contextFilterV2.filters.sortDir
      : undefined;

    return {
      categoryId: categoryId || undefined,
      keyword: keyword || undefined,
      providerId: providerIdParam,
      origin: originParam,
      type: typeParam,
      pin: pinParam,
      packed: packedParam,
      page,
      pageSize,
      sortBy: sortBy as 'price' | 'name' | 'date' | undefined,
      sortDir,
    };
  }, [categoryId, keyword, filters, page, pageSize, useSidebarFilter, contextFilterV2.filters]);

  // --- Legacy data source ---
  const legacyQuery = useLegacyProducts(apiParams, !isNewProductsMode && !!(categoryId || keyword));

  // --- New products data source ---
  const newProductsQuery = useNewProducts(
    { page, pageSize },
  );

  // Unify data from both sources
  const data = isNewProductsMode ? undefined : legacyQuery.data;
  const newData = isNewProductsMode ? newProductsQuery.data : undefined;
  const isLoading = isNewProductsMode ? newProductsQuery.isLoading : legacyQuery.isLoading;
  const isFetching = isNewProductsMode ? newProductsQuery.isLoading : legacyQuery.isFetching;
  const isError = isNewProductsMode ? newProductsQuery.isError : legacyQuery.isError;
  const error = isNewProductsMode ? newProductsQuery.error : legacyQuery.error;
  const refetch = isNewProductsMode ? newProductsQuery.refetch : legacyQuery.refetch;

  // Accumulate items when new data arrives (legacy)
  useEffect(() => {
    if (!isNewProductsMode && data?.items) {
      if (page === 1) {
        setAccumulatedItems(data.items);
      } else {
        setAccumulatedItems((prev) => [...prev, ...data.items]);
      }
    }
  }, [data, page, isNewProductsMode]);

  // Accumulate items when new data arrives (new products)
  const [accumulatedNewItems, setAccumulatedNewItems] = useState<ProductByCategoryDto[]>([]);
  useEffect(() => {
    if (isNewProductsMode && newData?.items) {
      const mapped = newData.items.map((item: any): ProductByCategoryDto => ({
        id: item.id,
        code: item.code,
        name: item.name,
        nameEn: item.nameEn,
        price: item.price,
        maxPrice: null,
        originalPrice: item.originalPrice,
        activeSaleOff: null,
        finalPrice: null,
        saleOff: item.saleOff,
        imageUrl: item.imageUrl,
        categoryId: item.categoryId,
        categoryName: item.categoryName,
        isNew: item.isNew,
        isActive: item.isActive,
        quantity: item.quantity ?? item.quantityRemaining ?? 0,
        dateAdded: item.dateAdded,
      }));
      if (page === 1) {
        setAccumulatedNewItems(mapped);
      } else {
        setAccumulatedNewItems((prev) => [...prev, ...mapped]);
      }
    }
  }, [newData, page, isNewProductsMode]);

  const items = isNewProductsMode ? [] as LegacyProductListItem[] : accumulatedItems;
  const newItems = isNewProductsMode ? accumulatedNewItems : [];
  const totalCount = isNewProductsMode ? (newData?.totalCount ?? 0) : (data?.totalCount ?? 0);
  const displayedCount = isNewProductsMode ? newItems.length : items.length;
  const hasMore = displayedCount < totalCount;

  // Load more handler
  const handleLoadMore = () => {
    setPage((p) => p + 1);
  };

  // Reset page and items when filters change
  const handleFilterChange = useCallback((newFilters: ProductFilterState) => {
    if (externalOnFilterChange) {
      externalOnFilterChange(newFilters);
    } else if (useSidebarFilter) {
      // Convert V1 format to V2 format (single values to arrays)
      // Preserve existing sort settings
      contextFilterV2.setFilters({
        providerIds: newFilters.providerId ? [newFilters.providerId] : [],
        origins: newFilters.origin ? [newFilters.origin] : [],
        types: newFilters.type ? [newFilters.type] : [],
        pins: newFilters.pin ? [newFilters.pin] : [],
        packeds: newFilters.packed ? [newFilters.packed] : [],
        sortBy: contextFilterV2.filters.sortBy,
        sortDir: contextFilterV2.filters.sortDir,
      });
    } else {
      setInternalFilters(newFilters);
    }
    setPage(1);
    setAccumulatedItems([]);
  }, [externalOnFilterChange, useSidebarFilter, contextFilterV2]);

  const handleProductClick = (product: LegacyProductListItem) => {
    router.push(`/${locale}/products/${product.id}`);
  };

  const handleAddToCart = (product: LegacyProductListItem, quantity: number = 1) => {
    console.log("add-to-cart", product, quantity);
  };

  const handleBuyNow = (product: LegacyProductListItem, quantity: number = 1) => {
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

  // Convert legacy product to ProductByCategoryDto-compatible format for ProductCard
  const adaptProduct = (product: LegacyProductListItem): ProductByCategoryDto => {
    const price = product.price ?? 0;
    const finalPrice = product.finalPrice ?? price;
    const originalPrice = product.originalPrice ?? null;
    const activeSaleOff = product.activeSaleOff ?? 0;
    const name = product.name || "";
    const nameEn = product.nameEn || name;
    const saleOff = originalPrice && originalPrice > finalPrice
      ? Math.round((1 - finalPrice / originalPrice) * 100)
      : 0;

    return {
      id: product.id,
      code: product.code || "",
      name,
      nameEn,
      price: finalPrice,
      maxPrice: null,
      originalPrice,
      activeSaleOff,
      finalPrice,
      saleOff,
      imageUrl: product.imageUrl || "",
      categoryId: product.categoryId,
      categoryName: product.categoryName || "",
      isNew: product.isNewProduct,
      isActive: product.isActive,
      quantity: product.quantity ?? 0,
      dateAdded: product.dateAdded,
    };
  };

  return (
    <div className="space-y-4">
      {/* Filter - inline variant for mobile, shows above products (only when not externally controlled) */}
      {!isNewProductsMode && shouldShowInlineFilter && (
        <div className="lg:hidden">
          <ProductFilter
            variant="inline"
            categoryId={categoryId}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
      )}

      {/* Sort Bar - Shopee Style */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-100 bg-white px-3 py-2 shadow-sm">
        {!isNewProductsMode ? (
          <SortBar
            sortBy={contextFilterV2.filters.sortBy}
            sortDir={contextFilterV2.filters.sortDir}
            onSortChange={contextFilterV2.setSort}
          />
        ) : <div />}
        <div className="flex items-center gap-3">
          {isFetching && !isLoading && (
            <svg className="h-4 w-4 animate-spin text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )}
          <span className="text-sm text-slate-600">
            <span className="font-semibold text-slate-800">{displayedCount}</span>/<span className="font-semibold text-slate-800">{totalCount}</span> {t("products")}
          </span>
          <ViewModeToggle value={viewMode} onChange={handleViewModeChange} />
        </div>
      </div>

      {isLoading ? (
        <div className={getGridClasses()}>
          {Array.from({ length: 10 }).map((_, i) => (
            <ProductCardSkeleton key={i} viewMode={viewMode} />
          ))}
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
      ) : displayedCount === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-6 text-sm text-slate-600 shadow-sm">
          {t("empty")}
        </div>
      ) : (
        <>
          <div className={getGridClasses()}>
            {isNewProductsMode
              ? newItems.map((product) => {
                  const displayName = (locale === "vi" ? product.name : product.nameEn || product.name) || "";
                  return renderProductCard(product, displayName, viewMode, () => router.push(`/${locale}/products/${product.id}`));
                })
              : items.map((product) => {
                  const displayName = (locale === "vi" ? product.name : product.nameEn || product.name) || "";
                  const adapted = adaptProduct(product);
                  return renderProductCard(adapted, displayName, viewMode, () => handleProductClick(product));
                })
            }
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center pt-4">
              <button
                onClick={handleLoadMore}
                disabled={isFetching}
                className="rounded-lg border border-primary bg-white px-6 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isFetching ? t("loadingMore") : t("loadMore")}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );

  function renderProductCard(product: ProductByCategoryDto, displayName: string, mode: ViewMode, onClick: () => void) {
    if (mode === "list") {
      return (
        <ProductCardList
          key={product.id}
          product={product}
          displayName={displayName}
          onAddToCart={() => {}}
          onBuyNow={() => {}}
          onClick={onClick}
        />
      );
    }
    if (mode === "compact") {
      return (
        <ProductCardCompact
          key={product.id}
          product={product}
          displayName={displayName}
          onAddToCart={() => {}}
          onClick={onClick}
        />
      );
    }
    return (
      <ProductCard
        key={product.id}
        product={product}
        displayName={displayName}
        onAddToCart={() => {}}
        onBuyNow={() => {}}
        onClick={onClick}
      />
    );
  }
}

// Skeleton loading component for product cards
function ProductCardSkeleton({ viewMode }: { viewMode: ViewMode }) {
  if (viewMode === "list") {
    return (
      <div className="flex animate-pulse gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="h-24 w-24 shrink-0 rounded-lg bg-slate-200" />
        <div className="flex flex-1 flex-col justify-between py-1">
          <div className="space-y-2">
            <div className="h-4 w-3/4 rounded bg-slate-200" />
            <div className="h-3 w-1/2 rounded bg-slate-200" />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-5 w-24 rounded bg-slate-200" />
            <div className="h-8 w-20 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    );
  }

  if (viewMode === "compact") {
    return (
      <div className="animate-pulse rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
        <div className="aspect-square w-full rounded bg-slate-200" />
        <div className="mt-2 space-y-1.5">
          <div className="h-3 w-full rounded bg-slate-200" />
          <div className="h-4 w-2/3 rounded bg-slate-200" />
        </div>
      </div>
    );
  }

  // Grid view skeleton
  return (
    <div className="animate-pulse rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="aspect-square w-full rounded-lg bg-slate-200" />
      <div className="mt-3 space-y-2">
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-3 w-2/3 rounded bg-slate-200" />
        <div className="h-5 w-1/2 rounded bg-slate-200" />
        <div className="flex gap-2 pt-2">
          <div className="h-9 flex-1 rounded-lg bg-slate-200" />
          <div className="h-9 flex-1 rounded-lg bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

// Export filter state type for use in parent components
export { type ProductFilterState };
