"use client";

import HomeLayout from "@/components/HomeLayout";
import CategoryIconsGrid from "@/components/CategoryIconsGrid";
import HomeProductsSection from "@/components/HomeProductsSection";
import RecentlyViewedSection from "@/components/RecentlyViewedSection";
import NewsSection from "@/components/NewsSection";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <HomeLayout>
      <section className="space-y-6">
        {/* Hero Banner */}
        <div className="rounded-xl bg-gradient-to-r from-[#EE4D2D] to-[#FF6B47] p-6 text-white shadow-lg sm:p-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">TME</p>
            <h1 className="text-2xl font-bold sm:text-3xl">{t("hero.title")}</h1>
            <p className="max-w-2xl text-sm text-white/90">{t("hero.subtitle")}</p>
            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#EE4D2D] transition hover:bg-slate-100">
              {t("hero.button")}
            </button>
          </div>
        </div>

        {/* Category Icons Grid - Shopee Style */}
        <CategoryIconsGrid />

        {/* Home Products from API */}
        <HomeProductsSection />

        {/* Recently Viewed Products */}
        <RecentlyViewedSection variant="homepage" />

        {/* Latest News */}
        <NewsSection />
      </section>
    </HomeLayout>
  );
}
