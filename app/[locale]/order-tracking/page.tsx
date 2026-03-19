"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import MainLayout from "@/components/MainLayout";
import {
  useTrackOrderMutation,
  useCancelOrder,
  formatOrderAmount,
  getOrderStatusLabel,
  canCancelOrder,
} from "@/hooks/useOrders";
import { formatDate } from "@/lib/utils";
import type { SalesOrderDetailResponse, SalesOrderItemResponse } from "@/lib/api/orders";

// Order status timeline component
function OrderStatusTimeline({
  status,
  t,
}: {
  status: string;
  t: (key: string) => string;
}) {
  const statuses = [
    { key: "NEW", label: t("status.new") },
    { key: "CONFIRMED", label: t("status.confirmed") },
    { key: "PROCESSING", label: t("status.processing") },
    { key: "SHIPPED", label: t("status.shipped") },
    { key: "DELIVERED", label: t("status.delivered") },
    { key: "COMPLETED", label: t("status.completed") },
  ];

  const currentIndex = statuses.findIndex((s) => s.key === status);
  const isCancelled = status === "CANCELLED";

  if (isCancelled) {
    return (
      <div className="flex items-center justify-center py-4">
        <div className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-700">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="font-medium">
            {t("orderCancelled")}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="flex items-start">
        {statuses.map((s, index) => {
          const isCompleted = index <= currentIndex;
          const isCurrent = index === currentIndex;
          const isLineCompleted = index < currentIndex;

          return (
            <div key={s.key} className="flex flex-1 flex-col items-center">
              {/* Circle row with connectors */}
              <div className="flex w-full items-center">
                {/* Left connector */}
                {index > 0 ? (
                  <div
                    className={`h-0.5 flex-1 ${
                      isCompleted ? "bg-green-500" : "bg-slate-200"
                    }`}
                  />
                ) : (
                  <div className="flex-1" />
                )}

                {/* Circle */}
                <div
                  className={`relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    isCompleted
                      ? "border-green-500 bg-green-500 text-white"
                      : "border-slate-300 bg-white text-slate-400"
                  } ${isCurrent ? "ring-4 ring-green-100" : ""}`}
                >
                  {isCompleted ? (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-xs font-medium">{index + 1}</span>
                  )}
                </div>

                {/* Right connector */}
                {index < statuses.length - 1 ? (
                  <div
                    className={`h-0.5 flex-1 ${
                      isLineCompleted ? "bg-green-500" : "bg-slate-200"
                    }`}
                  />
                ) : (
                  <div className="flex-1" />
                )}
              </div>

              {/* Label */}
              <span
                className={`mt-2 text-[11px] leading-tight text-center px-1 ${
                  isCompleted ? "font-medium text-green-700" : "text-slate-500"
                }`}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Order item component
function OrderItem({ item, locale, t }: { item: SalesOrderItemResponse; locale: string; t: (key: string) => string }) {
  const isBundle = item.itemType === "BUNDLE";

  return (
    <div className={`flex items-start gap-3 py-3 ${isBundle ? "ml-6 border-l-2 border-green-200 pl-3" : ""}`}>
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2">
          {isBundle && (
            <span className="flex-shrink-0 rounded bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
              {t("bundle")}
            </span>
          )}
          <h4 className="text-sm font-medium text-slate-900 line-clamp-2">
            {item.productName || item.sku || `#${item.variantId}`}
          </h4>
        </div>
        {item.options && item.options.length > 0 && (
          <p className="text-xs text-slate-500 mt-0.5">
            {item.options.map((opt) => opt.value).filter(Boolean).join(", ")}
          </p>
        )}
        <div className="flex items-center gap-2 mt-1 text-xs text-slate-600">
          <span>SKU: {item.sku || "-"}</span>
          <span>•</span>
          <span>SL: {item.quantity}</span>
        </div>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="text-sm font-semibold text-slate-900">
          {formatOrderAmount(item.lineTotal, locale)}
        </p>
        <p className="text-xs text-slate-500">
          {formatOrderAmount(item.unitPrice, locale)} x {item.quantity}
        </p>
        {item.bundleDiscount > 0 && (
          <p className="text-xs text-green-600">
            -{formatOrderAmount(item.bundleDiscount * item.quantity, locale)}
          </p>
        )}
      </div>
    </div>
  );
}

// Inner component that uses useSearchParams
function OrderTrackingContent() {
  const locale = useLocale();
  const t = useTranslations("OrderTracking");
  const tCommon = useTranslations("Common");
  const searchParams = useSearchParams();
  const initialCode = searchParams.get("code") || "";

  // Form state
  const [orderCode, setOrderCode] = useState(initialCode);
  const [phone, setPhone] = useState("");
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  // Hooks
  const { track, isLoading, isError, error, data: order, reset } = useTrackOrderMutation();
  const { cancel, isLoading: cancelLoading, error: cancelError } = useCancelOrder();

  // Auto-search if code provided
  useEffect(() => {
    if (initialCode) {
      track(initialCode);
    }
  }, [initialCode]);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderCode.trim()) {
      track(orderCode.trim(), phone.trim() || undefined);
    }
  };

  // Handle cancel order
  const handleCancelOrder = async () => {
    if (!order || !phone.trim()) return;

    try {
      await cancel(order.orderCode || "", phone.trim());
      setShowCancelConfirm(false);
      // Refetch order details
      track(order.orderCode || "", phone.trim());
    } catch {
      // Error is handled by the hook
    }
  };

  return (
    <>
      <div className="space-y-4">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 sm:text-sm">
          <div className="flex items-center gap-1">
            <Link href={`/${locale}`} className="hover:text-primary">
              {tCommon("home")}
            </Link>
            <span>/</span>
            <span className="text-slate-700">
              {t("breadcrumb")}
            </span>
          </div>
        </nav>

        {/* Page Title */}
        <h1 className="text-lg font-bold text-slate-900 sm:text-xl">
          {t("title")}
        </h1>

        <div className="mx-auto max-w-2xl space-y-4">
          {/* Search Form */}
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t("orderCode")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={orderCode}
                    onChange={(e) => setOrderCode(e.target.value)}
                    placeholder={t("codePlaceholder")}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t("phoneNumber")}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t("phonePlaceholder")}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || !orderCode.trim()}
                className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {t("searching")}
                  </span>
                ) : (
                  t("search")
                )}
              </button>
            </form>
          </div>

          {/* Error Message */}
          {isError && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center">
              <p className="text-sm text-red-700">
                {error?.message || t("orderNotFound")}
              </p>
            </div>
          )}

          {/* Order Details */}
          {order && (
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
              {/* Header */}
              <div className="border-b border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">
                      {t("orderCode")}
                    </p>
                    <p className="text-lg font-bold text-primary font-mono">{order.orderCode}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500 mb-1">
                      {t("orderDate")}
                    </p>
                    <p className="text-sm font-medium">
                      {formatDate(order.createdAt, "dd/MM/yyyy")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="px-4 py-2 border-b border-slate-200">
                <OrderStatusTimeline status={order.status} t={t} />
              </div>

              {/* Customer Info */}
              <div className="p-4 border-b border-slate-200">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  {t("customerInfo")}
                </h3>
                <div className="grid gap-2 text-sm sm:grid-cols-2">
                  <div>
                    <span className="text-slate-500">{t("name")}</span>
                    <span className="ml-2 font-medium">{order.customerName || "-"}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">{t("phone")}</span>
                    <span className="ml-2 font-medium">{order.customerPhone || "-"}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Email:</span>
                    <span className="ml-2 font-medium">{order.customerEmail || "-"}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-slate-500">{t("address")}</span>
                    <span className="ml-2 font-medium">{order.customerAddress || "-"}</span>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-4 border-b border-slate-200">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  {t("items")}
                </h3>
                <div className="divide-y divide-slate-100">
                  {order.items?.map((item) => (
                    <div key={item.id}>
                      <OrderItem item={item} locale={locale} t={t} />
                      {/* Nested bundle items */}
                      {item.bundleItems?.map((bundle) => (
                        <OrderItem key={bundle.id} item={bundle} locale={locale} t={t} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Info */}
              {order.shipping && (order.shipping.trackingNumber || order.shipping.carrier) && (
                <div className="p-4 border-b border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">
                    {t("shippingInfo")}
                  </h3>
                  <div className="grid gap-2 text-sm sm:grid-cols-2">
                    {order.shipping.carrier && (
                      <div>
                        <span className="text-slate-500">{t("carrier")}</span>
                        <span className="ml-2 font-medium">{order.shipping.carrier}</span>
                      </div>
                    )}
                    {order.shipping.trackingNumber && (
                      <div>
                        <span className="text-slate-500">{t("trackingNumber")}</span>
                        <span className="ml-2 font-medium font-mono">{order.shipping.trackingNumber}</span>
                      </div>
                    )}
                    {order.shipping.expectedDeliveryDate && (
                      <div>
                        <span className="text-slate-500">{t("expectedDelivery")}</span>
                        <span className="ml-2 font-medium">
                          {formatDate(order.shipping.expectedDeliveryDate, "dd/MM/yyyy")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="p-4 bg-slate-50">
                <div className="space-y-2 text-sm">
                  {order.priceBreakdown ? (
                    <>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t("subtotal")}</span>
                        <span>{formatOrderAmount(order.priceBreakdown.subtotal, locale)}</span>
                      </div>
                      {order.priceBreakdown.saleOffDiscount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>{t("saleOffDiscount")}</span>
                          <span>-{formatOrderAmount(order.priceBreakdown.saleOffDiscount, locale)}</span>
                        </div>
                      )}
                      {order.priceBreakdown.bundleDiscount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>{t("bundleDiscount")}</span>
                          <span>-{formatOrderAmount(order.priceBreakdown.bundleDiscount, locale)}</span>
                        </div>
                      )}
                      {order.priceBreakdown.couponDiscount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>{t("couponDiscount")}</span>
                          <span>-{formatOrderAmount(order.priceBreakdown.couponDiscount, locale)}</span>
                        </div>
                      )}
                      {order.priceBreakdown.shippingFee > 0 && (
                        <div className="flex justify-between">
                          <span className="text-slate-600">{t("shippingFee")}</span>
                          <span>+{formatOrderAmount(order.priceBreakdown.shippingFee, locale)}</span>
                        </div>
                      )}
                      <div className="flex justify-between pt-2 border-t border-slate-200">
                        <span className="font-semibold text-slate-900">{t("total")}</span>
                        <span className="text-xl font-bold text-primary">
                          {formatOrderAmount(order.priceBreakdown.finalAmount, locale)}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900">{t("total")}</span>
                      <span className="text-xl font-bold text-primary">
                        {formatOrderAmount(order.totalAmount || 0, locale)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Cancel Reason */}
              {order.status === "CANCELLED" && order.cancelReason && (
                <div className="p-4 border-t border-slate-200 bg-red-50">
                  <h3 className="text-sm font-semibold text-red-700 mb-2">
                    {t("cancelReason")}
                  </h3>
                  <p className="text-sm text-red-600">{order.cancelReason}</p>
                </div>
              )}

              {/* Cancel Button */}
              {canCancelOrder(order.status) && (
                <div className="p-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setShowCancelConfirm(true)}
                    disabled={!phone.trim()}
                    className="w-full rounded-lg border border-red-300 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {t("cancelOrder")}
                  </button>
                  {!phone.trim() && (
                    <p className="mt-2 text-xs text-slate-500 text-center">
                      {t("phoneRequired")}
                    </p>
                  )}
                </div>
              )}

              {/* Note */}
              {order.note && (
                <div className="p-4 border-t border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    {t("note")}
                  </h3>
                  <p className="text-sm text-slate-600">{order.note}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Cancel Confirmation Dialog */}
      {showCancelConfirm && order && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {t("confirmCancel")}
                </h3>
                <p className="text-sm text-slate-500">{order.orderCode}</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-4">
              {t("cancelWarning")}
            </p>

            {cancelError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700">{cancelError.message}</p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowCancelConfirm(false)}
                className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                {t("goBack")}
              </button>
              <button
                type="button"
                onClick={handleCancelOrder}
                disabled={cancelLoading}
                className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
              >
                {cancelLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </span>
                ) : (
                  t("cancelOrder")
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Loading fallback
function OrderTrackingLoading() {
  return (
    <div className="space-y-4">
      <div className="h-4 w-48 animate-pulse rounded bg-slate-200" />
      <div className="h-6 w-64 animate-pulse rounded bg-slate-200" />
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
                <div className="h-10 animate-pulse rounded bg-slate-200" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
                <div className="h-10 animate-pulse rounded bg-slate-200" />
              </div>
            </div>
            <div className="h-10 animate-pulse rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense
export default function OrderTrackingPage() {
  return (
    <MainLayout>
      <Suspense fallback={<OrderTrackingLoading />}>
        <OrderTrackingContent />
      </Suspense>
    </MainLayout>
  );
}
