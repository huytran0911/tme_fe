"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import MainLayout from "@/components/MainLayout";
import { useNewsDetail } from "@/hooks/useNewsDetail";
import { buildImageUrl, formatDate } from "@/lib/utils";
import { getNewsTypeDisplayName, type NewsTypeValue } from "@/lib/constants/newsTypes";

interface NewsDetailPageProps {
  params: Promise<{ locale: string; id: string }>;
}

// Rewrite image src in HTML content to use full URLs
function rewriteContentImages(html: string) {
  return html.replace(/src=["']([^"']+)["']/gi, (match, src) => {
    const trimmed = src.trim();
    // Skip absolute URLs and data URIs
    if (/^(https?:)?\/\//i.test(trimmed) || trimmed.startsWith("data:")) return match;
    const full = buildImageUrl(trimmed);
    return `src="${full}"`;
  });
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id: idParam } = use(params);
  const id = Number(idParam);
  const locale = useLocale();
  const t = useTranslations("NewsPage");
  const tCommon = useTranslations("Common");

  const { data, isLoading, isError, error, refetch } = useNewsDetail(id);
  const news = data?.data;

  if (isNaN(id) || id <= 0) {
    return (
      <MainLayout>
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <p className="text-red-600">
            {t("invalidId")}
          </p>
          <Link
            href={`/${locale}/news`}
            className="mt-4 inline-block rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
          >
            {t("backToList")}
          </Link>
        </div>
      </MainLayout>
    );
  }

  const title = news ? (locale === "vi" ? news.name : news.nameEn || news.name) : "";
  const shortDesc = news
    ? locale === "vi"
      ? news.shortDescription
      : news.shortDescriptionEn || news.shortDescription
    : "";
  const content = news
    ? locale === "vi"
      ? news.description
      : news.descriptionEn || news.description
    : "";
  const imageUrl = news?.image ? buildImageUrl(news.image) : null;

  return (
    <MainLayout>
      <div className="space-y-4">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 sm:text-sm">
          <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5">
            <Link href={`/${locale}`} className="hover:text-primary">
              {tCommon("home")}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/news`} className="hover:text-primary">
              {t("breadcrumbNews")}
            </Link>
            <span>/</span>
            <span className="min-w-0 truncate text-slate-700">{title || "..."}</span>
          </div>
        </nav>

        {isLoading ? (
          <div className="space-y-4">
            <div className="aspect-video w-full animate-pulse rounded-xl bg-slate-200" />
            <div className="h-8 w-3/4 animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-1/4 animate-pulse rounded bg-slate-100" />
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
              <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-slate-100" />
            </div>
          </div>
        ) : isError || !news ? (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-6 text-center text-sm text-red-700">
            {error instanceof Error ? error.message : t("loadArticleError")}
            <div className="mt-4 flex justify-center gap-2">
              <button
                onClick={() => refetch()}
                className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
              >
                {t("retry")}
              </button>
              <Link
                href={`/${locale}/news`}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
              >
                {t("goBack")}
              </Link>
            </div>
          </div>
        ) : (
          <article className="space-y-4">
            {/* Featured Image */}
            {imageUrl && (
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={imageUrl}
                  alt={title || "News image"}
                  fill
                  sizes="(min-width: 1024px) 800px, 100vw"
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            )}

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              {news.typeNews && (
                <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  {getNewsTypeDisplayName(news.typeNews as NewsTypeValue, locale)}
                </span>
              )}
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={news.dateAdded}>
                  {formatDate(news.dateAdded, "dd/MM/yyyy")}
                </time>
              </div>
              {news.view > 0 && (
                <div className="flex items-center gap-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{news.view.toLocaleString()} {t("views")}</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
              {title}
            </h1>

            {/* Short Description */}
            {shortDesc && (
              <div className="rounded-lg border-l-4 border-primary bg-orange-50 p-4 text-slate-700">
                <div dangerouslySetInnerHTML={{ __html: shortDesc }} />
              </div>
            )}

            {/* Content */}
            {content && (
              <div
                className="prose max-w-none overflow-x-auto text-slate-700 prose-headings:text-slate-900 prose-a:text-primary prose-img:mx-auto prose-img:max-w-full prose-img:rounded-lg [&_*]:max-w-full"
                dangerouslySetInnerHTML={{ __html: rewriteContentImages(content) }}
              />
            )}

            {/* Back Button */}
            <div className="border-t border-slate-200 pt-4">
              <Link
                href={`/${locale}/news`}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {t("backToNewsList")}
              </Link>
            </div>
          </article>
        )}
      </div>
    </MainLayout>
  );
}
