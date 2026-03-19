"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

// Filter state type matching API params
export interface ProductFilterState {
  providerId: string; // brand/provider
  origin: string;
  type: string; // pin type
  pin: string; // pin count
  packed: string;
}

export const PRODUCT_FILTER_INITIAL_STATE: ProductFilterState = {
  providerId: "",
  origin: "",
  type: "",
  pin: "",
  packed: "",
};

interface ProductFilterContextValue {
  filters: ProductFilterState;
  setFilters: (filters: ProductFilterState) => void;
  updateFilter: (key: keyof ProductFilterState, value: string) => void;
  resetFilters: () => void;
  hasActiveFilters: boolean;
}

const ProductFilterContext = createContext<ProductFilterContextValue | undefined>(undefined);

export function ProductFilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFiltersState] = useState<ProductFilterState>(PRODUCT_FILTER_INITIAL_STATE);

  const setFilters = useCallback((newFilters: ProductFilterState) => {
    setFiltersState(newFilters);
  }, []);

  const updateFilter = useCallback((key: keyof ProductFilterState, value: string) => {
    setFiltersState((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetFilters = useCallback(() => {
    setFiltersState(PRODUCT_FILTER_INITIAL_STATE);
  }, []);

  const hasActiveFilters = Object.values(filters).some((v) => v !== "");

  const value: ProductFilterContextValue = {
    filters,
    setFilters,
    updateFilter,
    resetFilters,
    hasActiveFilters,
  };

  return <ProductFilterContext.Provider value={value}>{children}</ProductFilterContext.Provider>;
}

export function useProductFilter() {
  const ctx = useContext(ProductFilterContext);
  if (!ctx) {
    throw new Error("useProductFilter must be used within ProductFilterProvider");
  }
  return ctx;
}
