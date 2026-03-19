"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import MainLayout from "@/components/MainLayout";
import Pagination from "@/components/Pagination";
import { useNewsList } from "@/hooks/useNewsList";
import { buildImageUrl, formatDate } from "@/lib/utils";
import {
  NewsType,
  AllNewsTypes,
  getNewsTypeDisplayName,
  type NewsTypeValue,
} from "@/lib/constants/newsTypes";

export default function NewsPage() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("NewsPage");
  const tCommon = useTranslations("Common");
  const [page, setPage] = useState(1);
  const [selectedType, setSelectedType] = useState<NewsTypeValue | "all">("all");
  const pageSize = 12;

  const { data, isLoading, isError, error } = useNewsList({
    page,
    pageSize,
    typeNews: selectedType === "all" ? undefined : selectedType,
  });

  const news = data?.data?.items ?? [];
  const totalPages = data?.data?.totalPages ?? 1;
  const totalCount = data?.data?.totalCount ?? 0;

  const handleTypeChange = (type: NewsTypeValue | "all") => {
    setSelectedType(type);
    setPage(1);
  };

  return (
    <MainLayout>
      <div className="space-y-4">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 sm:text-sm">
          <div className="flex items-center gap-1">
            <Link href={`/${locale}`} className="hover:text-primary">
              {tCommon("home")}
            </Link>
            <span>/</span>
            <span className="text-slate-700">
              {t("breadcrumbNews")}
            </span>
          </div>
        </nav>

        {/* Page Title */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-lg font-bold text-slate-900 sm:text-xl">
            {t("pageTitle")}
          </h1>
          <span className="text-sm text-slate-500">
            {t("articleCount", { count: totalCount })}
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleTypeChange("all")}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              selectedType === "all"
                ? "bg-primary text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {t("filterAll")}
          </button>
          {AllNewsTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleTypeChange(type)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                selectedType === type
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {getNewsTypeDisplayName(type, locale)}
            </button>
          ))}
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-3 rounded-xl border border-slate-200 bg-white p-3">
                <div className="aspect-video w-full animate-pulse rounded-lg bg-slate-100" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
                <div className="h-3 w-1/2 animate-pulse rounded bg-slate-100" />
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-6 text-center text-sm text-red-700">
            {error instanceof Error ? error.message : t("loadError")}
          </div>
        ) : news.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-12 text-center">
            <svg
              className="mx-auto mb-4 h-16 w-16 text-slate-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <p className="text-slate-600">
              {t("empty")}
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((item) => {
                const title = locale === "vi" ? item.name : item.nameEn || item.name;
                const imageUrl = item.image ? buildImageUrl(item.image) : null;

                return (
                  <article
                    key={item.id}
                    onClick={() => router.push(`/${locale}/news/${item.id}`)}
                    className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-primary hover:shadow-md"
                  >
                    {/* Image */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={title || "News image"}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition group-hover:scale-105"
                          unoptimized
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-slate-400">
                          {t("noImage")}
                        </div>
                      )}
                      {/* Type Badge */}
                      {item.typeNews && (
                        <div className="absolute left-2 top-2 rounded bg-primary/90 px-2 py-0.5 text-xs font-medium text-white">
                          {getNewsTypeDisplayName(item.typeNews as NewsTypeValue, locale)}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4">
                      <h3 className="mb-2 text-sm font-semibold text-slate-900 line-clamp-2 group-hover:text-primary sm:text-base">
                        {title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <time dateTime={item.dateAdded}>
                            {formatDate(item.dateAdded, "dd/MM/yyyy")}
                          </time>
                        </div>
                        {item.view > 0 && (
                          <div className="flex items-center gap-1">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>{item.view.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            )}
          </>
        )}
      </div>
    </MainLayout>
  );
}
