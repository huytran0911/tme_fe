"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import CategorySidebarV3 from "@/components/category/CategorySidebarV3";
// import ProductFilter from "@/components/ProductFilter"; // V1 - temporarily hidden
import ProductFilterV2 from "@/components/ProductFilterV2";
import Footer from "./Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import { CategorySelectionProvider, useCategorySelection } from "./layout/CategorySelectionContext";
// import { ProductFilterProvider, useProductFilter } from "./layout/ProductFilterContext"; // V1
import { ProductFilterV2Provider, useProductFilterV2 } from "./layout/ProductFilterV2Context";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isProductsPage = pathname?.match(/^\/(vi|en)\/products\/?$/);

  return (
    <CategorySelectionProvider>
      <ProductFilterV2Provider>
        <div className="min-h-screen bg-background">
          <Header onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />

          <div className="mx-auto flex w-full max-w-[1300px] gap-5 px-2 py-4 sm:px-4 sm:py-6 lg:px-6">
            {isProductsPage && (
              <aside className="relative z-30 hidden w-64 shrink-0 lg:block">
                <SidebarContent />
              </aside>
            )}

            <main className="min-w-0 flex-1">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white/80 p-3 shadow-sm sm:p-5">
                {children}
              </div>
            </main>
          </div>

          {/* Mobile sidebar drawer */}
          <div
            className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 lg:hidden ${
              sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            onClick={() => setSidebarOpen(false)}
          >
            <div
              className={`absolute inset-y-0 left-0 w-72 max-w-[80vw] transform overflow-y-auto bg-white shadow-xl transition-transform duration-200 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-full space-y-4 p-3">
                {/* CategorySidebarV3 tạm ẩn - đã có dropdown ở header */}
                {/* <CategorySidebarV3 /> */}
                <MobileSidebarFilter />
              </div>
            </div>
          </div>

          <Footer />

          {/* Cart Drawer */}
          <CartDrawer />
        </div>
      </ProductFilterV2Provider>
    </CategorySelectionProvider>
  );
}

// Sidebar content with category menu and product filter (sticky)
function SidebarContent() {
  const { selectedCategoryId } = useCategorySelection();
  const { filters, setFilters } = useProductFilterV2();
  const pathname = usePathname();

  // Only show ProductFilter on /products page
  const isProductsPage = pathname?.match(/^\/(vi|en)\/products\/?$/);

  return (
    <div className="sticky top-[100px] space-y-4">
      {/* CategorySidebarV3 tạm ẩn - đã có dropdown ở header */}
      {/* <CategorySidebarV3 className="!relative !top-0" /> */}
      {isProductsPage && (
        <ProductFilterV2
          categoryId={selectedCategoryId ?? undefined}
          filters={filters}
          onFilterChange={setFilters}
        />
      )}
    </div>
  );
}

// Mobile sidebar filter
function MobileSidebarFilter() {
  const { selectedCategoryId } = useCategorySelection();
  const { filters, setFilters } = useProductFilterV2();
  const pathname = usePathname();

  // Only show ProductFilter on /products page
  const isProductsPage = pathname?.match(/^\/(vi|en)\/products\/?$/);

  if (!isProductsPage) return null;

  return (
    <ProductFilterV2
      categoryId={selectedCategoryId ?? undefined}
      filters={filters}
      onFilterChange={setFilters}
      defaultCollapsed={true}
    />
  );
}
