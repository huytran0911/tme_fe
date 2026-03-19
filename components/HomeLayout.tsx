"use client";

import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import { CategorySelectionProvider } from "./layout/CategorySelectionContext";
import { ProductFilterV2Provider } from "./layout/ProductFilterV2Context";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <CategorySelectionProvider>
      <ProductFilterV2Provider>
        <div className="min-h-screen bg-background">
          <Header onToggleSidebar={() => {}} />

          {/* Full width content - no sidebar */}
          <div className="mx-auto w-full max-w-[1300px] px-2 py-4 sm:px-4 sm:py-6 lg:px-6">
            {children}
          </div>

          <Footer />
          <CartDrawer />
        </div>
      </ProductFilterV2Provider>
    </CategorySelectionProvider>
  );
}
