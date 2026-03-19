"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useAuth } from "@/contexts/AuthContext";
import { useMyOrders, useCancelOrder } from "@/hooks/useOrders";
import { getOrderStatusLabel, formatOrderAmount, canCancelOrder, trackOrder } from "@/lib/api/orders";
import type { OrderStatus, MyOrderListItem } from "@/lib/api/orders";
import { addCartItem } from "@/lib/api/cart";
import MainLayout from "@/components/MainLayout";
import AccountSidebar from "@/components/account/AccountSidebar";
import { useProfile } from "@/hooks/useProfile";

// ── Status badge colors ──────────────────────────────────────────────────────

const STATUS_COLORS: Record<string, string> = {
    NEW: "bg-blue-50 text-blue-700 ring-blue-600/20",
    CONFIRMED: "bg-amber-50 text-amber-700 ring-amber-600/20",
    PROCESSING: "bg-cyan-50 text-cyan-700 ring-cyan-600/20",
    SHIPPED: "bg-indigo-50 text-indigo-700 ring-indigo-600/20",
    DELIVERED: "bg-teal-50 text-teal-700 ring-teal-600/20",
    COMPLETED: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    CANCELLED: "bg-red-50 text-red-700 ring-red-600/20",
};

function StatusBadge({ status, locale }: { status: OrderStatus; locale: string }) {
    const color = STATUS_COLORS[status] ?? "bg-slate-50 text-slate-600 ring-slate-500/20";
    return (
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${color}`}>
            {getOrderStatusLabel(status, locale)}
        </span>
    );
}

// ── Status filter tabs ───────────────────────────────────────────────────────

const STATUS_TABS: { key: string; status?: OrderStatus }[] = [
    { key: "all" },
    { key: "new", status: "NEW" },
    { key: "confirmed", status: "CONFIRMED" },
    { key: "processing", status: "PROCESSING" },
    { key: "shipped", status: "SHIPPED" },
    { key: "delivered", status: "DELIVERED" },
    { key: "completed", status: "COMPLETED" },
    { key: "cancelled", status: "CANCELLED" },
];

// ── Toast ────────────────────────────────────────────────────────────────────

function Toast({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed bottom-6 right-6 z-[60] animate-[slide-up_0.3s_ease-out]">
            <div className={`flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-medium shadow-lg ${type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"}`}>
                {type === "success" ? (
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                ) : (
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                )}
                {message}
                <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AccountOrdersPage() {
    const locale = useLocale();
    const router = useRouter();
    const t = useTranslations("AccountOrders");
    const tCommon = useTranslations("Common");
    const { isAuthenticated, isLoading: authLoading } = useAuth();
    const { data: profile } = useProfile();

    const [page, setPage] = useState(1);
    const [statusFilter, setStatusFilter] = useState<OrderStatus | undefined>(undefined);
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
    const [cancellingOrder, setCancellingOrder] = useState<MyOrderListItem | null>(null);
    const [reorderingCode, setReorderingCode] = useState<string | null>(null);

    const { orders, totalCount, totalPages, isLoading, isFetching } = useMyOrders({
        page,
        pageSize: 10,
        status: statusFilter,
        enabled: isAuthenticated,
    });

    const { cancel, isLoading: isCancelling } = useCancelOrder();

    // Auth guard
    useEffect(() => {
        if (!authLoading && !isAuthenticated) {
            const returnUrl = encodeURIComponent(`/${locale}/account/orders`);
            router.replace(`/${locale}/auth/login?returnUrl=${returnUrl}`);
        }
    }, [authLoading, isAuthenticated, router, locale]);

    const handleCancelOrder = async () => {
        if (!cancellingOrder || !profile?.phone) return;
        try {
            await cancel(cancellingOrder.orderCode, profile.phone);
            setToast({ message: t("cancelSuccess"), type: "success" });
            setCancellingOrder(null);
        } catch {
            setToast({ message: t("cancelError"), type: "error" });
        }
    };

    const canReorder = (status: OrderStatus) =>
        status === "COMPLETED" || status === "DELIVERED" || status === "CANCELLED";

    const handleReorder = async (orderCode: string) => {
        setReorderingCode(orderCode);
        try {
            // 1. Fetch order details
            const orderDetail = await trackOrder(orderCode);
            const mainItems = orderDetail.items?.filter((item) => item.itemType === "MAIN") ?? [];
            if (mainItems.length === 0) {
                setToast({ message: t("reorderEmpty"), type: "error" });
                return;
            }

            // 2. Add each item to cart
            const addedVariantIds: number[] = [];
            for (const item of mainItems) {
                try {
                    await addCartItem(item.variantId, item.quantity);
                    addedVariantIds.push(item.variantId);
                } catch {
                    // Skip items that fail (out of stock, discontinued, etc.)
                }
            }

            if (addedVariantIds.length === 0) {
                setToast({ message: t("reorderFailed"), type: "error" });
                return;
            }

            // 3. Set sessionStorage to pre-select these items in cart
            sessionStorage.setItem("tme-selected-cart-items", JSON.stringify(addedVariantIds));

            // 4. Show success toast and redirect to cart
            if (addedVariantIds.length < mainItems.length) {
                setToast({ message: t("reorderPartial", { count: addedVariantIds.length, total: mainItems.length }), type: "success" });
            } else {
                setToast({ message: t("reorderSuccess", { count: addedVariantIds.length }), type: "success" });
            }

            // Small delay so user sees the toast
            setTimeout(() => router.push(`/${locale}/cart`), 600);
        } catch {
            setToast({ message: t("reorderError"), type: "error" });
        } finally {
            setReorderingCode(null);
        }
    };

    const formatDate = (dateStr: string) => {
        try {
            return new Date(dateStr).toLocaleDateString(locale === "vi" ? "vi-VN" : "en-US", {
                day: "2-digit", month: "2-digit", year: "numeric",
            });
        } catch { return dateStr; }
    };

    if (authLoading || !isAuthenticated) {
        return (
            <MainLayout>
                <div className="flex min-h-[50vh] items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <style>{`@keyframes slide-up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>

            <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-slate-600">
                    <a href={`/${locale}`} className="transition hover:text-primary">{tCommon("home")}</a>
                    <span className="mx-2">/</span>
                    <a href={`/${locale}/account`} className="transition hover:text-primary">{t("accountBreadcrumb")}</a>
                    <span className="mx-2">/</span>
                    <span className="text-slate-800">{t("breadcrumb")}</span>
                </nav>

                {/* Layout */}
                <div className="flex flex-col gap-6 lg:flex-row">
                    <AccountSidebar />

                    {/* Main content */}
                    <div className="min-w-0 flex-1 space-y-4">
                        {/* Title */}
                        <div className="flex items-center justify-between">
                            <h1 className="text-lg font-semibold text-slate-800">{t("title")}</h1>
                            {totalCount > 0 && (
                                <span className="text-sm text-slate-500">
                                    {totalCount} {t("orderCount")}
                                </span>
                            )}
                        </div>

                        {/* Status filter tabs */}
                        <div className="flex gap-1 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-1">
                            {STATUS_TABS.map((tab) => {
                                const isActive = statusFilter === tab.status && tab.key !== "all"
                                    || (tab.key === "all" && !statusFilter);
                                return (
                                    <button
                                        key={tab.key}
                                        onClick={() => {
                                            setStatusFilter(tab.status);
                                            setPage(1);
                                        }}
                                        className={`whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition ${
                                            isActive
                                                ? "bg-white text-primary shadow-sm ring-1 ring-slate-200"
                                                : "text-slate-500 hover:text-slate-700"
                                        }`}
                                    >
                                        {t(`tabs.${tab.key}`)}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Orders list */}
                        {isLoading ? (
                            <div className="space-y-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="h-24 animate-pulse rounded-xl border border-slate-200 bg-slate-50" />
                                ))}
                            </div>
                        ) : orders.length === 0 ? (
                            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white py-16">
                                <svg className="mb-3 h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                                <p className="text-sm font-medium text-slate-500">{t("empty")}</p>
                                <p className="mt-1 text-xs text-slate-400">{t("emptyHint")}</p>
                                <a
                                    href={`/${locale}`}
                                    className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
                                >
                                    {t("continueShopping")}
                                </a>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {orders.map((order) => (
                                    <div
                                        key={order.id}
                                        className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-sm"
                                    >
                                        {/* Order header */}
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm font-semibold text-primary">
                                                    {order.orderCode}
                                                </span>
                                                <StatusBadge status={order.status} locale={locale} />
                                            </div>
                                            <span className="text-xs text-slate-400">
                                                {formatDate(order.createdAt)}
                                            </span>
                                        </div>

                                        {/* Order body */}
                                        <div className="mt-3 flex items-center justify-between">
                                            <div className="text-sm text-slate-600">
                                                <span className="font-medium text-slate-800">
                                                    {formatOrderAmount(order.finalAmount, locale)}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                {canReorder(order.status) && (
                                                    <button
                                                        onClick={() => handleReorder(order.orderCode)}
                                                        disabled={reorderingCode === order.orderCode}
                                                        className="rounded-lg border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition hover:bg-primary/10 disabled:opacity-50"
                                                    >
                                                        {reorderingCode === order.orderCode ? t("reorderLoading") : t("reorder")}
                                                    </button>
                                                )}
                                                {canCancelOrder(order.status) && profile?.phone && (
                                                    <button
                                                        onClick={() => setCancellingOrder(order)}
                                                        className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-50"
                                                    >
                                                        {t("cancelOrder")}
                                                    </button>
                                                )}
                                                <a
                                                    href={`/${locale}/order-tracking?code=${order.orderCode}`}
                                                    className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-primary hover:text-primary"
                                                >
                                                    {t("viewDetail")}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex items-center justify-center gap-2 pt-4">
                                        <button
                                            disabled={page <= 1}
                                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                                            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 disabled:opacity-40"
                                        >
                                            {tCommon("previous")}
                                        </button>
                                        <span className="text-xs text-slate-500">
                                            {page} / {totalPages}
                                        </span>
                                        <button
                                            disabled={page >= totalPages}
                                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 disabled:opacity-40"
                                        >
                                            {tCommon("next")}
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Loading overlay for refetch */}
                        {isFetching && !isLoading && (
                            <div className="flex justify-center py-2">
                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Cancel confirmation modal */}
            {cancellingOrder && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
                        <h3 className="text-base font-semibold text-slate-900">{t("cancelConfirm.title")}</h3>
                        <p className="mt-2 text-sm text-slate-500">
                            {t("cancelConfirm.message", { orderCode: cancellingOrder.orderCode })}
                        </p>
                        <div className="mt-5 flex justify-end gap-2">
                            <button
                                onClick={() => setCancellingOrder(null)}
                                disabled={isCancelling}
                                className="rounded-lg border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
                            >
                                {tCommon("back")}
                            </button>
                            <button
                                onClick={handleCancelOrder}
                                disabled={isCancelling}
                                className="rounded-lg bg-red-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-50"
                            >
                                {isCancelling ? tCommon("loading") : tCommon("confirm")}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast */}
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </MainLayout>
    );
}
