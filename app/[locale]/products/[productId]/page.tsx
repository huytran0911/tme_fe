"use client";

import { use } from "react";
import MainLayout from "@/components/MainLayout";
import ProductLegacyDetail from "@/components/product/ProductLegacyDetail";

interface ProductPageProps {
  params: Promise<{ locale: string; productId: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { productId } = use(params);
  const id = Number(productId);

  if (isNaN(id) || id <= 0) {
    return (
      <MainLayout>
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
          <p className="text-red-600">Invalid product ID</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <ProductLegacyDetail productId={id} />
    </MainLayout>
  );
}
