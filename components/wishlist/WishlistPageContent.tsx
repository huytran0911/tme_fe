"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useWishlist } from "@/hooks/useWishlist";
import WishlistProductCard from "@/components/wishlist/WishlistProductCard";
import { useWishlistContext } from "@/contexts/WishlistContext";

const PAGE_SIZE = 20;

export default function WishlistPageContent() {
    const t = useTranslations("Wishlist");
    const tCommon = useTranslations("Common");
    const [page, setPage] = useState(1);

    // Use local hook for pagination (context uses page 1 globally)
    const { items, totalCount, isLoading, isError, refetch } = useWishlist(page, PAGE_SIZE);

    // Toast from context
    const { lastMessage } = useWishlistContext();

    const totalPages = Math.ceil(totalCount / PAGE_SIZE);

    if (isLoading) {
        return (
            <div className="py-16 text-center text-sm text-slate-500">
                {tCommon("loading")}
            </div>
        );
    }

    if (isError) {
        return (
            <div className="py-16 text-center">
                <p className="text-sm text-red-500">{tCommon("error")}</p>
                <button
                    onClick={() => refetch()}
                    className="mt-3 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                    {tCommon("retry")}
                </button>
            </div>
        );
    }

    return (
        <div>
            {/* Toast */}
            {lastMessage && (
                <div
                    className={`mb-4 rounded-lg border px-4 py-3 text-sm font-medium ${lastMessage.type === "success"
                            ? "border-green-200 bg-green-50 text-green-700"
                            : "border-red-200 bg-red-50 text-red-600"
                        }`}
                >
                    {lastMessage.text}
                </div>
            )}

            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-lg font-semibold text-slate-900 sm:text-xl">
                    {t("title")}
                </h1>
                {totalCount > 0 && (
                    <span className="text-sm text-slate-500">
                        {t("total", { count: totalCount })}
                    </span>
                )}
            </div>

            {/* Empty state */}
            {items.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="mb-4 text-5xl">🤍</div>
                    <p className="text-base font-medium text-slate-700">{t("empty")}</p>
                    <p className="mt-1 text-sm text-slate-500">{t("emptyHint")}</p>
                </div>
            )}

            {/* Grid */}
            {items.length > 0 && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {items.map((item) => (
                        <WishlistProductCard key={item.wishlistId} item={item} />
                    ))}
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-6 flex items-center justify-center gap-2">
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        ← Trước
                    </button>
                    <span className="text-sm text-slate-500">
                        {page} / {totalPages}
                    </span>
                    <button
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Sau →
                    </button>
                </div>
            )}
        </div>
    );
}
