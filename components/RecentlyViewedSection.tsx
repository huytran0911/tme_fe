"use client";

import { useState, useMemo, type ComponentProps } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useRecentlyViewed, type RecentlyViewedProduct } from "@/hooks/useRecentlyViewed";
import ProductCardShopee from "@/components/ProductCardShopee";
import type { ProductByCategoryDto } from "@/lib/api/productsByCategory";

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

function toProductCard(item: RecentlyViewedProduct): ProductByCategoryDto {
    return {
        id: item.id,
        code: item.code || "",
        name: item.name,
        nameEn: item.nameEn || "",
        price: item.price,
        maxPrice: null,
        originalPrice: item.originalPrice ?? null,
        activeSaleOff: item.activeSaleOff ?? null,
        finalPrice: item.finalPrice ?? null,
        saleOff: 0,
        imageUrl: item.imageUrl || "",
        categoryId: item.categoryId ?? 0,
        categoryName: "",
        isNew: false,
        isActive: item.isActive ?? true,
        quantity: item.quantity ?? 0,
        dateAdded: "",
    };
}

interface RecentlyViewedSectionProps {
    /** ID of the product currently being viewed – will be excluded from the list */
    currentProductId?: number;
    /** Variant: "homepage" shows 1 row with paging arrows, "detail" shows simple grid */
    variant?: "homepage" | "detail";
}

// How many items visible per page (1 row)
const ITEMS_PER_PAGE = 5;

export default function RecentlyViewedSection({ currentProductId, variant = "detail" }: RecentlyViewedSectionProps) {
    const locale = useLocale();
    const t = useTranslations("RecentlyViewed");
    const router = useRouter();
    const { recentlyViewed, clearRecentlyViewed } = useRecentlyViewed();
    const [currentPage, setCurrentPage] = useState(0);

    const products = useMemo(
        () => recentlyViewed.filter((p) => p.id !== currentProductId),
        [recentlyViewed, currentProductId]
    );

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const paginatedProducts = useMemo(() => {
        const start = currentPage * ITEMS_PER_PAGE;
        return products.slice(start, start + ITEMS_PER_PAGE);
    }, [products, currentPage]);

    const handlePrev = () => setCurrentPage((prev) => Math.max(0, prev - 1));
    const handleNext = () => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));

    const handleProductClick = (productId: number) => {
        router.push(`/${locale}/products/${productId}`);
    };

    if (products.length === 0) return null;

    // Homepage variant: 1 row with arrow paging (like CategoryIconsGrid)
    if (variant === "homepage") {
        return (
            <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
                <div className="mb-3 flex items-center justify-between sm:mb-4">
                    <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
                        {t("title")}
                    </h2>
                    <button
                        type="button"
                        onClick={clearRecentlyViewed}
                        className="text-xs text-slate-400 transition hover:text-slate-600"
                    >
                        {t("clear")}
                    </button>
                </div>

                <div className="relative px-6">
                    {/* Left arrow */}
                    {totalPages > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={handlePrev}
                                disabled={currentPage === 0}
                                className={`absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 transition-all ${currentPage === 0
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:bg-slate-50 hover:shadow-xl"
                                    }`}
                            >
                                <ChevronLeftIcon className="h-5 w-5 text-slate-600" />
                            </button>

                            <button
                                type="button"
                                onClick={handleNext}
                                disabled={currentPage === totalPages - 1}
                                className={`absolute right-0 top-1/2 translate-x-1 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 transition-all ${currentPage === totalPages - 1
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:bg-slate-50 hover:shadow-xl"
                                    }`}
                            >
                                <ChevronRightIcon className="h-5 w-5 text-slate-600" />
                            </button>
                        </>
                    )}

                    {/* Product grid - 1 row */}
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
                        {paginatedProducts.map((item) => {
                            const product = toProductCard(item);
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

                    {/* Page dots */}
                    {totalPages > 1 && (
                        <div className="mt-3 flex justify-center gap-1.5">
                            {Array.from({ length: totalPages }).map((_, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setCurrentPage(idx)}
                                    className={`h-1.5 rounded-full transition-all ${idx === currentPage
                                        ? "w-6 bg-[#EE4D2D]"
                                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        );
    }

    // Detail variant: simple grid (used on product detail page)
    return (
        <section className="mt-4">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
                    {t("title")}
                </h2>
                <button
                    type="button"
                    onClick={clearRecentlyViewed}
                    className="text-xs text-slate-400 transition hover:text-slate-600"
                >
                    {t("clear")}
                </button>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
                {products.map((item) => {
                    const product = toProductCard(item);
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
        </section>
    );
}
