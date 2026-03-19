"use client";

import { useEffect, useMemo, useState } from "react";
import MainLayout from "@/components/MainLayout";
import Pagination from "@/components/Pagination";
import { getNewProductsByCreatedDate, type ProductByCreatedDateDto } from "@/lib/api/newProducts";
import type { ApiError } from "@/lib/httpClient";
import { useLocale, useTranslations } from "next-intl";

const currencyFormatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

const monthValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const years = Array.from({ length: 6 }).map((_, idx) => new Date().getFullYear() - idx);

export default function NewItemsPage() {
  const locale = useLocale();
  const t = useTranslations("NewItems");
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [items, setItems] = useState<ProductByCreatedDateDto[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(locale === "vi" ? "vi-VN" : "en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    [locale],
  );

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      setLoading(true);
      setErrorMessage(null);
      try {
        const res = await getNewProductsByCreatedDate({ year, month, page, pageSize });
        if (!active) return;
        setItems(res.items);
        setTotalCount(res.totalCount);
        setTotalPages(res.totalPages);
      } catch (error) {
        if (!active) return;
        const err = error as ApiError;
        setErrorMessage(err.message || t("error"));
      } finally {
        if (active) setLoading(false);
      }
    };
    fetchData();
    return () => {
      active = false;
    };
  }, [year, month, page, pageSize]);

  const handleMonthChange = (value: number) => {
    setMonth(value);
    setPage(1);
  };

  const handleYearChange = (value: number) => {
    setYear(value);
    setPage(1);
  };

  return (
    <MainLayout>
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-slate-600">{t("breadcrumb")}</p>
            <h1 className="text-2xl font-semibold text-slate-800">{t("title")}</h1>
            <p className="text-sm text-slate-600">
              {t("subtitle")}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <span className="text-xs uppercase tracking-wide text-slate-500">{t("monthLabel")}</span>
              <select
                value={month}
                onChange={(e) => handleMonthChange(Number(e.target.value))}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {monthValues.map((m) => (
                  <option key={m} value={m}>
                    {t(`months.${m}`)}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <span className="text-xs uppercase tracking-wide text-slate-500">{t("yearLabel")}</span>
              <select
                value={year}
                onChange={(e) => handleYearChange(Number(e.target.value))}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-4 py-3">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>
                {t("totalProducts")}: <strong className="text-slate-900">{totalCount}</strong>
              </span>
              {loading ? <span className="text-primary">{t("loading")}</span> : null}
              {errorMessage ? <span className="text-red-600">{errorMessage}</span> : null}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">{t("table.code")}</th>
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">{t("table.description")}</th>
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">{t("table.price")}</th>
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">{t("table.quantity")}</th>
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">{t("table.dateAdded")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {items.length === 0 && !loading ? (
                  <tr>
                    <td className="px-4 py-3 text-center text-slate-500" colSpan={5}>
                      {t("empty")}
                    </td>
                  </tr>
                ) : (
                  items.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-slate-800">{item.code}</td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-slate-800">
                          {locale === "vi" ? item.name : item.nameEn}
                        </div>
                        <div className="text-xs text-slate-500">{item.categoryName}</div>
                      </td>
                      <td className="px-4 py-3 text-primary font-semibold">
                        {currencyFormatter.format(item.price || 0)}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {item.quantityRemaining ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {dateFormatter.format(new Date(item.dateAdded))}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </section>
    </MainLayout>
  );
}
