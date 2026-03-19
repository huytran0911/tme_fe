"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface CategorySelectionContextValue {
  selectedCategoryId: number | null;
  selectCategory: (id: number | null) => void;
}

const CategorySelectionContext = createContext<CategorySelectionContextValue | undefined>(undefined);

export function CategorySelectionProvider({ children }: { children: ReactNode }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const value: CategorySelectionContextValue = {
    selectedCategoryId,
    selectCategory: setSelectedCategoryId,
  };

  return <CategorySelectionContext.Provider value={value}>{children}</CategorySelectionContext.Provider>;
}

export function useCategorySelection() {
  const ctx = useContext(CategorySelectionContext);
  if (!ctx) {
    throw new Error("useCategorySelection must be used within CategorySelectionProvider");
  }
  return ctx;
}
