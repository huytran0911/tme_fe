import MainLayout from "@/components/MainLayout";
import type { Metadata } from "next";
import AboutContentClient from "@/app/[locale]/gioi-thieu/AboutContentClient";

export const metadata: Metadata = {
  title: "Gioi thieu - TME.vn",
  description: "Thong tin doanh nghiep va hoat dong cua TME.vn",
};

export default function AboutUsPage() {
  return (
    <MainLayout>
      <AboutContentClient />
    </MainLayout>
  );
}
