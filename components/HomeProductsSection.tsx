"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useNewProducts } from "@/hooks/useNewProducts";
import ProductCardShopee from "@/components/ProductCardShopee";
import type { ProductByCategoryDto } from "@/lib/api/productsByCategory";

const PAGE_SIZE = 10;

export default function HomeProductsSection() {
  const locale = useLocale();
  const t = useTranslations("Home");
  const tProducts = useTranslations("Products");
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [allItems, setAllItems] = useState<ProductByCategoryDto[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const prevDataRef = useRef<string>("");

  const { data, isLoading, isError } = useNewProducts({ page, pageSize: PAGE_SIZE });

  // Append new items when data changes
  useEffect(() => {
    if (!data?.items) return;
    const dataKey = `${page}-${data.items.length}`;
    if (dataKey === prevDataRef.current) return;
    prevDataRef.current = dataKey;

    const newItems = data.items.map(mapProduct);
    if (page === 1) {
      setAllItems(newItems);
    } else {
      setAllItems((prev) => [...prev, ...newItems]);
    }
    setHasMore(data.hasNextPage ?? false);
  }, [data, page]);

  const isFirstLoading = isLoading && page === 1;
  const isLoadingMore = isLoading && page > 1;

  const handleLoadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  // Map API DTO to ProductByCategoryDto
  function mapProduct(item: any): ProductByCategoryDto {
    return {
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
    };
  }

  const handleProductClick = (productId: number) => {
    router.push(`/${locale}/products/${productId}`);
  };

  if (isFirstLoading) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 h-6 w-48 animate-pulse rounded bg-slate-200" />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, j) => (
            <div key={j} className="aspect-square animate-pulse rounded bg-slate-100" />
          ))}
        </div>
      </div>
    );
  }

  if (isError && allItems.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white px-4 py-6 text-sm text-slate-600 shadow-sm">
        {t("products.loadError")}
      </div>
    );
  }

  if (!isLoading && allItems.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white px-4 py-6 text-sm text-slate-600 shadow-sm">
        {t("products.empty")}
      </div>
    );
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
      <div className="mb-3 sm:mb-4">
        <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
          {t("featured.title")}
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
        {allItems.map((product) => {
          const displayName = locale === "vi" ? product.name : product.nameEn || product.name;
          return (
            <ProductCardShopee
              key={product.id}
              product={product}
              displayName={displayName}
              onClick={() => handleProductClick(product.id)}
            />
          );
        })}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="rounded-lg border border-primary bg-white px-6 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoadingMore ? tProducts("loadingMore") : tProducts("loadMore")}
          </button>
        </div>
      )}
    </section>
  );
}
