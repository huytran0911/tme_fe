"use client";

import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Suspense, useEffect } from "react";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";
import LegacyProductsList from "@/components/LegacyProductsList";
import { useCategories } from "@/hooks/useCategories";
import { useCategorySelection } from "@/components/layout/CategorySelectionContext";
import { useProductFilterV2 } from "@/components/layout/ProductFilterV2Context";

function ProductsContent() {
  const locale = useLocale();
  const t = useTranslations("ProductsPage");
  const tCommon = useTranslations("Common");
  const searchParams = useSearchParams();
  const categoryIdParam = searchParams.get("categoryId");
  const categoryId = categoryIdParam ? parseInt(categoryIdParam, 10) : null;
  const keyword = searchParams.get("keyword") || "";

  const { data: categories } = useCategories();
  const { selectCategory } = useCategorySelection();
  const { resetFilters } = useProductFilterV2();

  // Sync URL categoryId with context for sidebar filter and reset filters
  useEffect(() => {
    selectCategory(categoryId);
    resetFilters();
  }, [categoryId, selectCategory, resetFilters]);

  // Find category name recursively
  const findCategoryName = (cats: typeof categories, id: number): string | null => {
    if (!cats) return null;
    for (const cat of cats) {
      if (cat.id === id) {
        return locale === "vi" ? cat.name : (cat.nameEn || cat.name);
      }
      if (cat.children?.length) {
        const found = findCategoryName(cat.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  const categoryName = categoryId ? findCategoryName(categories || [], categoryId) : null;
  const isSearchMode = !!keyword.trim();

  // Page title
  const pageTitle = isSearchMode
    ? `${t("searchResults")}: "${keyword}"`
    : categoryName || t("allProducts");

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <nav className="text-xs text-slate-500 sm:text-sm">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5">
          <Link href={`/${locale}`} className="hover:text-primary">
            {tCommon("home")}
          </Link>
          <span>/</span>
          <span className="text-slate-700">
            {t("breadcrumb")}
          </span>
          {categoryName && (
            <>
              <span>/</span>
              <span className="min-w-0 truncate text-slate-900 font-medium">{categoryName}</span>
            </>
          )}
          {isSearchMode && (
            <>
              <span>/</span>
              <span className="min-w-0 truncate text-slate-900 font-medium">&quot;{keyword}&quot;</span>
            </>
          )}
        </div>
      </nav>

      {/* Page Title */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-lg font-bold text-slate-900 sm:text-xl">
          {pageTitle}
        </h1>
      </div>

      {/* Products Grid */}
      {(categoryId || isSearchMode) ? (
        <LegacyProductsList categoryId={categoryId ?? undefined} keyword={isSearchMode ? keyword : undefined} />
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-12 text-center shadow-sm">
          <svg
            className="mx-auto mb-4 h-16 w-16 text-slate-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <p className="text-slate-600">
            {t("selectCategory")}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="flex h-64 items-center justify-center">
            <div className="text-slate-500">Loading...</div>
          </div>
        }
      >
        <ProductsContent />
      </Suspense>
    </MainLayout>
  );
}
