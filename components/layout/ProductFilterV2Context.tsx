"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

// Sort options (API supports: price, name, date)
export type SortByOption = 'price' | 'name' | 'date' | '';
export type SortDirOption = 'asc' | 'desc';

// Filter state type - supports multiple selections (arrays)
export interface ProductFilterV2State {
  providerIds: string[];
  origins: string[];
  types: string[];
  pins: string[];
  packeds: string[];
  sortBy: SortByOption;
  sortDir: SortDirOption;
}

export const PRODUCT_FILTER_V2_INITIAL_STATE: ProductFilterV2State = {
  providerIds: [],
  origins: [],
  types: [],
  pins: [],
  packeds: [],
  sortBy: '',
  sortDir: 'asc',
};

interface ProductFilterV2ContextValue {
  filters: ProductFilterV2State;
  setFilters: (filters: ProductFilterV2State) => void;
  toggleFilter: (key: keyof Omit<ProductFilterV2State, 'sortBy' | 'sortDir'>, value: string) => void;
  setSort: (sortBy: SortByOption, sortDir: SortDirOption) => void;
  resetFilters: () => void;
  hasActiveFilters: boolean;
  activeFilterCount: number;
}

const ProductFilterV2Context = createContext<ProductFilterV2ContextValue | undefined>(undefined);

export function ProductFilterV2Provider({ children }: { children: ReactNode }) {
  const [filters, setFiltersState] = useState<ProductFilterV2State>(PRODUCT_FILTER_V2_INITIAL_STATE);

  const setFilters = useCallback((newFilters: ProductFilterV2State) => {
    setFiltersState(newFilters);
  }, []);

  const toggleFilter = useCallback((key: keyof Omit<ProductFilterV2State, 'sortBy' | 'sortDir'>, value: string) => {
    setFiltersState((prev) => {
      const currentValues = prev[key] as string[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prev, [key]: newValues };
    });
  }, []);

  const setSort = useCallback((sortBy: SortByOption, sortDir: SortDirOption) => {
    setFiltersState((prev) => ({ ...prev, sortBy, sortDir }));
  }, []);

  const resetFilters = useCallback(() => {
    setFiltersState(PRODUCT_FILTER_V2_INITIAL_STATE);
  }, []);

  // Count only filter arrays, not sort options
  const activeFilterCount = [
    filters.providerIds,
    filters.origins,
    filters.types,
    filters.pins,
    filters.packeds,
  ].reduce((acc, arr) => acc + arr.length, 0);
  const hasActiveFilters = activeFilterCount > 0;

  const value: ProductFilterV2ContextValue = {
    filters,
    setFilters,
    toggleFilter,
    setSort,
    resetFilters,
    hasActiveFilters,
    activeFilterCount,
  };

  return <ProductFilterV2Context.Provider value={value}>{children}</ProductFilterV2Context.Provider>;
}

export function useProductFilterV2() {
  const ctx = useContext(ProductFilterV2Context);
  if (!ctx) {
    throw new Error("useProductFilterV2 must be used within ProductFilterV2Provider");
  }
  return ctx;
}
