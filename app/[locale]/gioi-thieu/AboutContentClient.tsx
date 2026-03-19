"use client";

import { useEffect, useState, type ComponentProps } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getContentByCode } from "@/lib/api/content";
import Breadcrumb from "@/components/Breadcrumb";
import { CONTENT_CODES } from "@/lib/constants/contentCodes";
import { buildImageUrl } from "@/lib/utils";

interface ContentState {
  title: string;
  html: string;
}

function BuildingIcon(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function TruckIcon(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

function ShieldCheckIcon(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function AboutContentClient() {
  const locale = useLocale();
  const t = useTranslations("About");
  const [content, setContent] = useState<ContentState>({ title: "", html: "" });
  const [loading, setLoading] = useState(false);

  const rewriteContentImages = (html: string) =>
    html.replace(/src=["']([^"']+)["']/gi, (match, src) => {
      const trimmed = src.trim();
      if (/^(https?:)?\/\//i.test(trimmed) || trimmed.startsWith("data:")) return match;
      const full = buildImageUrl(trimmed);
      return `src="${full}"`;
    });

  useEffect(() => {
    let mounted = true;
    const lang = locale === "vi" ? "vn" : locale;
    setLoading(true);
    getContentByCode(CONTENT_CODES.ABOUT_US, lang)
      .then((res) => {
        if (!mounted || !res) return;
        setContent({
          title: res.name || "",
          html: res.content ? rewriteContentImages(res.content) : "",
        });
      })
      .catch(() => {
        if (!mounted) return;
        setContent((prev) => ({
          ...prev,
          html: prev.html || `<p>${t("loadError")}</p>`,
        }));
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [locale, t]);

  const features = [
    {
      icon: BuildingIcon,
      title: t("features.trusted.title"),
      desc: t("features.trusted.desc"),
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      icon: TruckIcon,
      title: t("features.fast.title"),
      desc: t("features.fast.desc"),
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      icon: ShieldCheckIcon,
      title: t("features.warranty.title"),
      desc: t("features.warranty.desc"),
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <div className="w-full px-4 py-8 lg:px-0">
      {/* Header Section */}
      <header className="mb-8">
        {/* Breadcrumb */}
        <Breadcrumb
          homeLabel={t("breadcrumb")}
          items={[{ label: t("title") }]}
          className="mb-4"
        />

        {/* Title Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-8 text-white shadow-lg">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative">
            <div className="mb-2 h-1 w-16 rounded-full bg-white/50" />
            <h1 className="text-2xl font-bold tracking-wide sm:text-3xl">
              {t("title")}
            </h1>
            <p className="mt-2 text-base text-white/90 sm:text-lg">
              {t("subtitle")}
            </p>
            <div className="mt-2 h-1 w-24 rounded-full bg-white/50" />
          </div>
        </div>

        {/* Feature Icons */}
        <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition hover:shadow-md sm:flex-row sm:gap-3 sm:p-4"
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${feature.bg} ${feature.color} sm:h-12 sm:w-12`}>
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="mt-2 text-center sm:mt-0 sm:text-left">
                <p className="text-sm font-semibold text-slate-800 sm:text-base">{feature.title}</p>
                <p className="hidden text-xs text-slate-500 sm:block">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* Content Section */}
      {loading ? (
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-6 text-sm text-slate-600 shadow-sm">
          {t("loading")}
        </div>
      ) : (
        <article
          className="prose max-w-none prose-sm sm:prose-base prose-slate prose-headings:text-slate-800 prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      )}
    </div>
  );
}
