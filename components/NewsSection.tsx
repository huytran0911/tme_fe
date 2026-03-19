"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useNewsList } from "@/hooks/useNewsList";
import { buildImageUrl, formatDate } from "@/lib/utils";

export default function NewsSection() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("News");

  // Fetch latest 3 news for home page
  const { data, isLoading, isError } = useNewsList({ page: 1, pageSize: 3 });

  const news = data?.data?.items ?? [];

  if (isLoading) {
    return (
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 h-6 w-48 animate-pulse rounded bg-slate-200" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-3">
              <div className="aspect-video w-full animate-pulse rounded-lg bg-slate-100" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
              <div className="h-3 w-1/2 animate-pulse rounded bg-slate-100" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (isError || !news || news.length === 0) {
    return null; // Don't show section if no news
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">
          {t("title")}
        </h2>
        <button
          onClick={() => router.push(`/${locale}/news`)}
          className="text-sm font-medium text-primary hover:text-primary-dark"
        >
          {t("viewAll")}
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => {
          const title = locale === "vi" ? item.name : item.nameEn || item.name;
          const imageUrl = item.image ? buildImageUrl(item.image) : null;

          return (
            <article
              key={item.id}
              onClick={() => router.push(`/${locale}/news/${item.id}`)}
              className="group cursor-pointer overflow-hidden rounded-lg border border-slate-100 bg-white transition hover:shadow-md"
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
                    unoptimized={imageUrl.startsWith("https://localhost") || imageUrl.startsWith("http://localhost")}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-slate-400">
                    {t("noImage")}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="mb-2 text-sm font-medium text-slate-900 line-clamp-2 group-hover:text-primary">
                  {title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={item.dateAdded}>
                    {formatDate(item.dateAdded, "dd/MM/yyyy")}
                  </time>
                  {item.view > 0 && (
                    <>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{item.view.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
