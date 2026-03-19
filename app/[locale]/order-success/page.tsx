"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import MainLayout from "@/components/MainLayout";
import { useOrderTracking, formatOrderAmount, getOrderStatusLabel } from "@/hooks/useOrders";

// Inner component that uses useSearchParams
function OrderSuccessContent() {
  const locale = useLocale();
  const t = useTranslations("OrderSuccess");
  const tCommon = useTranslations("Common");
  const searchParams = useSearchParams();
  const orderCode = searchParams.get("code");

  // Fetch order details
  const { order, isLoading } = useOrderTracking({
    orderCode: orderCode || "",
    enabled: !!orderCode,
  });

  // Show error if no order code
  if (!orderCode) {
    return (
      <div className="space-y-4">
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

        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-12 text-center">
          <p className="text-red-700">
            {t("notFound")}
          </p>
          <Link
            href={`/${locale}`}
            className="mt-4 inline-block rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
          >
            {t("goHome")}
          </Link>
        </div>
      </div>
    );
  }

  return (
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

      {/* Success Card */}
      <div className="mx-auto max-w-lg">
        <div className="rounded-xl border border-green-200 bg-gradient-to-b from-green-50 to-white p-6 text-center">
          {/* Success Icon */}
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">
            {t("title")}
          </h1>

          <p className="mt-2 text-slate-600">
            {t("subtitle")}
          </p>

          {/* Order Code */}
          <div className="mt-6 rounded-lg bg-slate-100 p-4">
            <p className="text-sm text-slate-600 mb-1">
              {t("orderCode")}
            </p>
            <p className="text-lg font-bold text-primary font-mono">{orderCode}</p>
          </div>

          {/* Order Details */}
          {isLoading ? (
            <div className="mt-4 space-y-2">
              <div className="h-4 w-3/4 mx-auto animate-pulse rounded bg-slate-200" />
              <div className="h-4 w-1/2 mx-auto animate-pulse rounded bg-slate-200" />
            </div>
          ) : order ? (
            <div className="mt-4 space-y-3 text-sm">
              {/* Status */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-slate-600">
                  {t("statusLabel")}
                </span>
                <span className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium text-blue-700">
                  {getOrderStatusLabel(order.status, locale)}
                </span>
              </div>

              {/* Total Amount */}
              {order.totalAmount && (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-slate-600">
                    {t("totalLabel")}
                  </span>
                  <span className="font-semibold text-primary">
                    {formatOrderAmount(order.totalAmount, locale)}
                  </span>
                </div>
              )}

              {/* Customer Info */}
              {order.customerName && (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-slate-600">
                    {t("customerLabel")}
                  </span>
                  <span className="font-medium">{order.customerName}</span>
                </div>
              )}
            </div>
          ) : null}

          {/* Important Notes */}
          <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-left">
            <h3 className="text-sm font-semibold text-yellow-800 mb-2">
              {t("importantNotes")}
            </h3>
            <ul className="text-xs text-yellow-700 space-y-1.5">
              <li className="flex gap-2">
                <span>•</span>
                <span>{t("note1")}</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>{t("note2")}</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>{t("note3")}</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/order-tracking?code=${orderCode}`}
              className="flex-1 rounded-lg border border-primary px-4 py-2.5 text-sm font-medium text-primary transition hover:bg-primary/5"
            >
              {t("trackOrder")}
            </Link>
            <Link
              href={`/${locale}`}
              className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-primary-dark"
            >
              {t("continueShopping")}
            </Link>
          </div>
        </div>

        {/* Support Info */}
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="text-sm font-semibold text-slate-900 mb-2">
            {t("needHelp")}
          </h3>
          <p className="text-xs text-slate-600">
            {t("helpText")}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            {t("contactSupport")}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Loading fallback
function OrderSuccessLoading() {
  return (
    <div className="space-y-4">
      <div className="h-4 w-48 animate-pulse rounded bg-slate-200" />
      <div className="mx-auto max-w-lg">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 animate-pulse rounded-full bg-slate-200" />
            <div className="h-6 w-48 animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-64 animate-pulse rounded bg-slate-200" />
            <div className="h-20 w-full animate-pulse rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense
export default function OrderSuccessPage() {
  return (
    <MainLayout>
      <Suspense fallback={<OrderSuccessLoading />}>
        <OrderSuccessContent />
      </Suspense>
    </MainLayout>
  );
}
