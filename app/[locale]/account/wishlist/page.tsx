"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useAuth } from "@/contexts/AuthContext";
import { useWishlistContext } from "@/contexts/WishlistContext";
import { buildImageUrl } from "@/lib/utils";
import MainLayout from "@/components/MainLayout";
import AccountSidebar from "@/components/account/AccountSidebar";
import QuickVariantModal from "@/components/product/QuickVariantModal";
import type { WishlistItemResponse } from "@/lib/api/wishlist";

// ── Constants ────────────────────────────────────────────────────────────────

const PAGE_SIZE = 20;

const placeholder =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='240' viewBox='0 0 320 240' fill='none'><rect width='320' height='240' rx='16' fill='%23f8fafc'/><rect x='36' y='40' width='248' height='160' rx='12' fill='white' stroke='%23e2e8f0' stroke-width='2'/><path d='M84 158l54-70 50 60 34-30 18 22' stroke='%23cbd5e1' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/><circle cx='120' cy='90' r='18' fill='%23e2e8f0'/><text x='160' y='195' text-anchor='middle' fill='%2394a3b8' font-family='Arial,sans-serif' font-size='14'>No image</text></svg>`
    );

// ── Skeleton ─────────────────────────────────────────────────────────────────

function WishlistCardSkeleton() {
    return (
        <div className="animate-pulse rounded-xl border border-slate-100 bg-white overflow-hidden">
            <div className="aspect-[4/3] bg-slate-100" />
            <div className="p-3 space-y-2">
                <div className="h-2.5 w-16 rounded bg-slate-100" />
                <div className="h-3 w-full rounded bg-slate-100" />
                <div className="h-3 w-3/4 rounded bg-slate-100" />
                <div className="h-4 w-20 rounded bg-slate-100" />
                <div className="h-8 w-full rounded-lg bg-slate-100" />
            </div>
        </div>
    );
}

// ── Product Card ──────────────────────────────────────────────────────────────

function WishlistCard({ item }: { item: WishlistItemResponse }) {
    const locale = useLocale();
    const t = useTranslations("Wishlist");
    const tPD = useTranslations("ProductDetail");
    const { toggleWithAuth } = useWishlistContext();
    const [imgSrc, setImgSrc] = useState(item.imageUrl ? buildImageUrl(item.imageUrl) : placeholder);
    const [modalOpen, setModalOpen] = useState(false);
    const [removing, setRemoving] = useState(false);

    const displayName = locale === "vi"
        ? item.productName
        : (item.productNameEn?.trim() || item.productName);

    const displayPrice = item.finalPrice > 0 ? item.finalPrice : item.price;
    const hasDiscount = item.activeSaleOff > 0 && item.price > 0;
    const formatPrice = (v: number) =>
        v.toLocaleString(locale === "vi" ? "vi-VN" : "en-US", { minimumFractionDigits: 0 });

    const handleRemove = async (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setRemoving(true);
        try {
            await toggleWithAuth(item.productId, displayName ?? undefined);
        } finally {
            setRemoving(false);
        }
    };

    return (
        <article className={`group relative flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md ${!item.isActive ? "opacity-60" : "hover:border-[#EE4D2D]"} border-slate-200`}>
            {/* Inactive badge */}
            {!item.isActive && (
                <span className="absolute left-2 top-2 z-20 rounded-md bg-slate-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                    {t("inactive")}
                </span>
            )}

            {/* Remove heart button */}
            <button
                type="button"
                onClick={handleRemove}
                disabled={removing}
                aria-label={t("removeFromList")}
                className="absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow text-red-400 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
            >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </button>

            {/* Image */}
            <Link href={`/${locale}/products/${item.productId}`} className="relative block aspect-[4/3] overflow-hidden bg-slate-50">
                <Image
                    src={imgSrc}
                    alt={displayName || "Product"}
                    fill
                    sizes="(min-width: 1024px) 200px, 50vw"
                    className={`object-contain p-2 transition group-hover:scale-105 ${!item.isActive ? "grayscale" : ""}`}
                    unoptimized
                    onError={() => setImgSrc(placeholder)}
                />
            </Link>

            {/* Info */}
            <div className="flex flex-1 flex-col gap-1 p-2 sm:p-3">
                {item.productCode && (
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-[#EE4D2D]">
                        {item.productCode}
                    </div>
                )}
                <Link href={`/${locale}/products/${item.productId}`}>
                    <h3 className="line-clamp-2 flex-1 text-xs font-medium text-slate-800 group-hover:text-[#EE4D2D] sm:text-sm">
                        {displayName || "—"}
                    </h3>
                </Link>

                {displayPrice > 0 && (
                    <div className="flex flex-wrap items-baseline gap-1 mt-1">
                        <span className="text-sm font-bold text-[#EE4D2D]">{formatPrice(displayPrice)} đ</span>
                        {hasDiscount && (
                            <span className="text-xs text-slate-400 line-through">{formatPrice(item.price)} đ</span>
                        )}
                    </div>
                )}

                <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
                    disabled={!item.isActive}
                    className="mt-auto w-full rounded-lg bg-[#EE4D2D] py-2 text-xs font-semibold text-white transition hover:bg-[#f05c3b] disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                    {tPD("addToCart")}
                </button>
            </div>

            <QuickVariantModal
                productId={item.productId}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                mode="cart"
            />
        </article>
    );
}

// ── Empty State ───────────────────────────────────────────────────────────────

function EmptyWishlist() {
    const t = useTranslations("Wishlist");
    const locale = useLocale();
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 py-20 text-center">
            <div className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="h-10 w-10 text-red-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
            </div>
            <h3 className="mb-1 text-base font-semibold text-slate-800">{t("empty")}</h3>
            <p className="mb-6 text-sm text-slate-500 max-w-xs">{t("emptyHint")}</p>
            <Link
                href={`/${locale}/products`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#EE4D2D] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#f05c3b]"
            >
                Khám phá sản phẩm
            </Link>
        </div>
    );
}

// ── Toast ─────────────────────────────────────────────────────────────────────

function ToastMessage({ message, type }: { message: string; type: "success" | "error" }) {
    return (
        <div className="fixed bottom-6 right-6 z-[60] animate-[slide-up_0.3s_ease-out]">
            <div className={`flex items-center gap-3 rounded-xl px-5 py-3 text-sm font-medium shadow-xl ${type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"}`}>
                {type === "success" ? (
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                ) : (
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                )}
                {message}
            </div>
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function WishlistPage() {
    const locale = useLocale();
    const router = useRouter();
    const t = useTranslations("Wishlist");
    const tCommon = useTranslations("Common");
    const { isAuthenticated, isLoading: authLoading } = useAuth();
    const { items, totalCount, isLoading, isError, refetch, lastMessage } = useWishlistContext();
    const [page, setPage] = useState(1);

    // Auth guard
    useEffect(() => {
        if (!authLoading && !isAuthenticated) {
            const returnUrl = encodeURIComponent(`/${locale}/account/wishlist`);
            router.replace(`/${locale}/auth/login?returnUrl=${returnUrl}`);
        }
    }, [authLoading, isAuthenticated, router, locale]);

    if (authLoading || !isAuthenticated) {
        return (
            <MainLayout>
                <div className="flex min-h-[50vh] items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#EE4D2D] border-t-transparent" />
                </div>
            </MainLayout>
        );
    }

    const totalPages = Math.ceil(totalCount / PAGE_SIZE);
    const pagedItems = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    return (
        <MainLayout>
            <style>{`@keyframes slide-up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>

            <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-slate-500">
                    <a href={`/${locale}`} className="transition hover:text-[#EE4D2D]">{tCommon("home")}</a>
                    <span className="mx-2">/</span>
                    <span className="font-medium text-slate-900">{t("title")}</span>
                </nav>

                {/* Layout */}
                <div className="flex flex-col gap-6 lg:flex-row">
                    <AccountSidebar />

                    {/* Main content */}
                    <div className="min-w-0 flex-1">
                        {/* Page header */}
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h1 className="text-xl font-bold text-slate-900">{t("title")}</h1>
                                {totalCount > 0 && (
                                    <p className="mt-0.5 text-sm text-slate-500">{t("total", { count: totalCount })}</p>
                                )}
                            </div>
                        </div>

                        {/* Loading skeleton */}
                        {isLoading && (
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => <WishlistCardSkeleton key={i} />)}
                            </div>
                        )}

                        {/* Error */}
                        {isError && !isLoading && (
                            <div className="rounded-xl border border-red-100 bg-red-50 p-8 text-center">
                                <p className="mb-3 text-sm text-red-600">{tCommon("error")}</p>
                                <button
                                    onClick={() => refetch()}
                                    className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                                >
                                    {tCommon("retry")}
                                </button>
                            </div>
                        )}

                        {/* Empty state */}
                        {!isLoading && !isError && items.length === 0 && <EmptyWishlist />}

                        {/* Grid */}
                        {!isLoading && !isError && pagedItems.length > 0 && (
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                                {pagedItems.map((item) => (
                                    <WishlistCard key={item.wishlistId} item={item} />
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-8 flex items-center justify-center gap-2">
                                <button
                                    onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                    disabled={page === 1}
                                    className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    ← Trước
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                    <button
                                        key={p}
                                        onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                        className={`h-9 w-9 rounded-lg text-sm font-medium transition ${p === page ? "bg-[#EE4D2D] text-white shadow-sm" : "border border-slate-200 text-slate-700 hover:bg-slate-50"}`}
                                    >
                                        {p}
                                    </button>
                                ))}
                                <button
                                    onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                    disabled={page === totalPages}
                                    className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    Sau →
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Toast notification */}
            {lastMessage && <ToastMessage message={lastMessage.text} type={lastMessage.type} />}
        </MainLayout>
    );
}
