"use client";

import { useState, useMemo, type ComponentProps } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useCategoriesV2 } from "@/hooks/useCategories";
import type { CategoryTreeItemDto } from "@/lib/api/categories";
import { buildImageUrl } from "@/lib/utils";

// Icon placeholder
function CategoryIcon({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 text-slate-400 ${className}`}>
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    </div>
  );
}

interface CategoryItemProps {
  category: CategoryTreeItemDto;
  locale: string;
  onClick: (id: number) => void;
}

function CategoryItem({ category, locale, onClick }: CategoryItemProps) {
  const name = locale === "vi"
    ? category.name
    : (category.nameEn?.trim() || category.name) || "";
  const imageUrl = buildImageUrl(category.image ?? undefined);

  return (
    <button
      type="button"
      onClick={() => onClick(category.id)}
      className="group flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-orange-50 transition-colors"
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border border-slate-200 group-hover:border-[#EE4D2D] transition-colors">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name || "Category"}
            className="w-full h-full object-cover"
          />
        ) : (
          <CategoryIcon className="w-full h-full" />
        )}
      </div>
      <span className="text-[11px] sm:text-xs text-center text-slate-700 group-hover:text-[#EE4D2D] line-clamp-2 w-16 sm:w-20 transition-colors">
        {name}
      </span>
    </button>
  );
}

function ChevronLeftIcon(props: ComponentProps<"svg">) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon(props: ComponentProps<"svg">) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function CategoryIconsGrid() {
  const t = useTranslations("CategoryMenu");
  const locale = useLocale();
  const router = useRouter();
  const { data: categories, isLoading } = useCategoriesV2();
  const [currentPage, setCurrentPage] = useState(0);

  // Only show top-level categories
  const topLevelCategories = categories?.filter(cat => cat.parentId === 0 || !cat.parentId) ?? [];

  // Config: columns per row and rows per page
  const COLS = 10; // 10 columns
  const ROWS = 2;  // 2 rows
  const ITEMS_PER_PAGE = COLS * ROWS; // 20 items per page

  // Calculate pages
  const totalPages = Math.ceil(topLevelCategories.length / ITEMS_PER_PAGE);
  const paginatedCategories = useMemo(() => {
    const start = currentPage * ITEMS_PER_PAGE;
    return topLevelCategories.slice(start, start + ITEMS_PER_PAGE);
  }, [topLevelCategories, currentPage, ITEMS_PER_PAGE]);

  const handleCategoryClick = (categoryId: number) => {
    router.push(`/${locale}/products?categoryId=${categoryId}`);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  if (isLoading) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="h-6 w-32 animate-pulse rounded bg-slate-200 mb-4" />
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg animate-pulse bg-slate-200" />
              <div className="w-14 h-3 rounded animate-pulse bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!topLevelCategories.length) {
    return null;
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-base font-semibold text-slate-900 mb-4 uppercase tracking-wide">
        {t("title")}
      </h2>

      <div className="relative">
        {/* Navigation Buttons */}
        {totalPages > 1 && (
          <>
            {/* Left Button */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 transition-all ${
                currentPage === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-slate-50 hover:shadow-xl"
              }`}
            >
              <ChevronLeftIcon className="h-5 w-5 text-slate-600" />
            </button>

            {/* Right Button */}
            <button
              type="button"
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 transition-all ${
                currentPage === totalPages - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-slate-50 hover:shadow-xl"
              }`}
            >
              <ChevronRightIcon className="h-5 w-5 text-slate-600" />
            </button>
          </>
        )}

        {/* Category Grid - 2 rows */}
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-1">
          {paginatedCategories.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              locale={locale}
              onClick={handleCategoryClick}
            />
          ))}
        </div>

        {/* Page Indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-1.5 mt-3">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentPage(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentPage
                    ? "w-6 bg-[#EE4D2D]"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
