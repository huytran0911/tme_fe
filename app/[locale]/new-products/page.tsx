"use client";

import { Suspense } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";
import LegacyProductsList from "@/components/LegacyProductsList";

function NewProductsContent() {
  const locale = useLocale();
  const t = useTranslations("NewProductsPage");
  const tCommon = useTranslations("Common");

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <nav className="text-xs text-slate-500 sm:text-sm">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5">
          <Link href={`/${locale}`} className="hover:text-primary">{tCommon("home")}</Link>
          <span>/</span>
          <span className="text-slate-700">{t("breadcrumb")}</span>
        </div>
      </nav>

      {/* Page Title */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h1 className="text-lg font-bold text-slate-900 sm:text-xl">{t("title")}</h1>
          <p className="mt-0.5 text-sm text-slate-500">{t("subtitle")}</p>
        </div>
      </div>

      {/* Reuse LegacyProductsList with newProducts data source */}
      <LegacyProductsList
        dataSource="newProducts"
        pageSizeOverride={20}
        useSidebarFilter={false}
      />
    </div>
  );
}

export default function NewProductsPage() {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="flex h-64 items-center justify-center">
            <div className="text-slate-500">Loading...</div>
          </div>
        }
      >
        <NewProductsContent />
      </Suspense>
    </MainLayout>
  );
}
