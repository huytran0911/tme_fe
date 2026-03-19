"use client";

import { useLocale, useTranslations } from "next-intl";
import MainLayout from "@/components/MainLayout";
import ProductsByCategoryList from "@/components/ProductsByCategoryList";

interface CategoryPageProps {
  params: { locale: string; categoryId: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const locale = useLocale();
  const t = useTranslations("Sidebar");
  const categoryId = Number(params.categoryId);

  // Validate categoryId
  if (!categoryId || Number.isNaN(categoryId) || categoryId <= 0) {
    return (
      <MainLayout>
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <p className="text-sm text-red-600">Invalid category ID</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <h1 className="text-lg font-semibold text-slate-900">{t("panelTitle")}</h1>
          <p className="text-sm text-slate-600">{t("panelDescription")}</p>
        </div>

        <ProductsByCategoryList categoryId={categoryId} key={`${categoryId}-${locale}`} />
      </div>
    </MainLayout>
  );
}
