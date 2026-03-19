"use client";

import { useCallback, useMemo, useState, type ComponentProps } from "react";
import { useTranslations } from "next-intl";
import { useLegacyProductFilters } from "@/hooks/useProductLegacy";

// Filter state type matching API params
export interface ProductFilterState {
  providerId: string; // brand/provider
  origin: string;
  type: string; // pin type
  pin: string; // pin count
  packed: string;
}

// Props for the filter component
interface ProductFilterProps {
  // Callback when filter changes
  onFilterChange?: (filters: ProductFilterState) => void;
  // Category context for fetching filter options
  categoryId?: number;
  // Initial collapsed state
  defaultCollapsed?: boolean;
  // Variant: sidebar (vertical) or inline (horizontal for mobile/header)
  variant?: "sidebar" | "inline";
  // External filter state (controlled mode)
  filters?: ProductFilterState;
}

export const PRODUCT_FILTER_INITIAL_STATE: ProductFilterState = {
  providerId: "",
  origin: "",
  type: "",
  pin: "",
  packed: "",
};

export default function ProductFilter({
  onFilterChange,
  categoryId,
  defaultCollapsed = false,
  variant = "sidebar",
  filters: externalFilters,
}: ProductFilterProps) {
  const t = useTranslations("ProductFilter");
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [internalFilters, setInternalFilters] = useState<ProductFilterState>(PRODUCT_FILTER_INITIAL_STATE);

  // Use external filters if provided (controlled mode), otherwise use internal state
  const filters = externalFilters ?? internalFilters;

  // Fetch filter options from API - only pass categoryId to get all available options
  const filterParams = useMemo(
    () => ({ categoryId }),
    [categoryId],
  );

  const { data: filterOptions, isLoading } = useLegacyProductFilters(filterParams);

  const handleFilterChange = useCallback(
    (key: keyof ProductFilterState, value: string) => {
      const newFilters = { ...filters, [key]: value };
      if (!externalFilters) {
        setInternalFilters(newFilters);
      }
      onFilterChange?.(newFilters);
    },
    [filters, onFilterChange, externalFilters]
  );

  const handleReset = useCallback(() => {
    if (!externalFilters) {
      setInternalFilters(PRODUCT_FILTER_INITIAL_STATE);
    }
    onFilterChange?.(PRODUCT_FILTER_INITIAL_STATE);
  }, [onFilterChange, externalFilters]);

  const hasActiveFilters = Object.values(filters).some((v) => v !== "");

  // Convert API response to filter options format
  const providerOptions = filterOptions?.providers?.map((p) => ({
    value: p.id.toString(),
    label: p.name || "",
  })) || [];

  const originOptions = filterOptions?.origin?.map((o) => ({
    value: o,
    label: o,
  })) || [];

  const typeOptions = filterOptions?.type?.map((t) => ({
    value: t,
    label: t,
  })) || [];

  const pinOptions = filterOptions?.pin?.map((p) => ({
    value: p,
    label: p,
  })) || [];

  const packedOptions = filterOptions?.packed?.map((p) => ({
    value: p,
    label: p,
  })) || [];

  // Inline variant for mobile/horizontal layout
  if (variant === "inline") {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-slate-700">
            <FilterIcon className="mr-1 inline-block h-4 w-4" />
            {t("title")}:
          </span>

          <FilterSelect
            value={filters.providerId}
            onChange={(v) => handleFilterChange("providerId", v)}
            options={providerOptions}
            placeholder={t("brand")}
            allLabel={t("all")}
            isLoading={isLoading}
          />
          <FilterSelect
            value={filters.origin}
            onChange={(v) => handleFilterChange("origin", v)}
            options={originOptions}
            placeholder={t("origin")}
            allLabel={t("all")}
            isLoading={isLoading}
          />
          <FilterSelect
            value={filters.type}
            onChange={(v) => handleFilterChange("type", v)}
            options={typeOptions}
            placeholder={t("pinType")}
            allLabel={t("all")}
            isLoading={isLoading}
          />
          <FilterSelect
            value={filters.pin}
            onChange={(v) => handleFilterChange("pin", v)}
            options={pinOptions}
            placeholder={t("pinCount")}
            allLabel={t("all")}
            isLoading={isLoading}
          />
          <FilterSelect
            value={filters.packed}
            onChange={(v) => handleFilterChange("packed", v)}
            options={packedOptions}
            placeholder={t("packed")}
            allLabel={t("all")}
            isLoading={isLoading}
          />

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
            >
              {t("reset")}
            </button>
          )}
        </div>
      </div>
    );
  }

  // Sidebar variant (vertical layout)
  return (
    <div className="rounded-2xl bg-white/95 shadow-sm ring-1 ring-slate-100 backdrop-blur">
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex w-full items-center justify-between rounded-t-2xl bg-gradient-to-r from-orange-50/80 to-white p-3 transition hover:from-orange-50"
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-[#EE4D2D] shadow-inner">
            <FilterIcon className="h-4 w-4" />
          </span>
          <div className="text-left">
            <h3 className="text-sm font-semibold text-slate-900">{t("title")}</h3>
            {hasActiveFilters && (
              <span className="text-xs text-orange-600">
                {Object.values(filters).filter((v) => v !== "").length} active
              </span>
            )}
          </div>
        </div>
        <ChevronIcon
          className={`h-5 w-5 text-slate-400 transition-transform ${
            isCollapsed ? "" : "rotate-180"
          }`}
        />
      </button>

      {/* Filter Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isCollapsed ? "max-h-0" : "max-h-[500px]"
        }`}
      >
        <div className="space-y-3 p-3 pt-0">
          {/* Brand/Provider Filter */}
          <FilterField
            label={t("brand")}
            value={filters.providerId}
            onChange={(v) => handleFilterChange("providerId", v)}
            options={providerOptions}
            allLabel={t("all")}
            isLoading={isLoading}
          />

          {/* Origin Filter */}
          <FilterField
            label={t("origin")}
            value={filters.origin}
            onChange={(v) => handleFilterChange("origin", v)}
            options={originOptions}
            allLabel={t("all")}
            isLoading={isLoading}
          />

          {/* Pin Type Filter */}
          <FilterField
            label={t("pinType")}
            value={filters.type}
            onChange={(v) => handleFilterChange("type", v)}
            options={typeOptions}
            allLabel={t("all")}
            isLoading={isLoading}
          />

          {/* Pin Count Filter */}
          <FilterField
            label={t("pinCount")}
            value={filters.pin}
            onChange={(v) => handleFilterChange("pin", v)}
            options={pinOptions}
            allLabel={t("all")}
            isLoading={isLoading}
          />

          {/* Packed Filter */}
          <FilterField
            label={t("packed")}
            value={filters.packed}
            onChange={(v) => handleFilterChange("packed", v)}
            options={packedOptions}
            allLabel={t("all")}
            isLoading={isLoading}
          />

          {/* Action Buttons */}
          {hasActiveFilters && (
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                {t("reset")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Filter option type
interface FilterOption {
  value: string;
  label: string;
}

// Filter field component for sidebar variant
interface FilterFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: FilterOption[];
  allLabel: string;
  isLoading?: boolean;
}

function FilterField({
  label,
  value,
  onChange,
  options,
  allLabel,
  isLoading,
}: FilterFieldProps) {
  return (
    <div className="space-y-1">
      <label className="block text-xs font-medium text-slate-600">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={isLoading}
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
      >
        <option value="">{allLabel}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Filter select component for inline variant
interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: FilterOption[];
  placeholder: string;
  allLabel: string;
  isLoading?: boolean;
}

function FilterSelect({
  value,
  onChange,
  options,
  placeholder,
  allLabel,
  isLoading,
}: FilterSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={isLoading}
      className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-sm text-slate-700 transition focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
    >
      <option value="">{`--${placeholder}--`}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

// Icons
function FilterIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ChevronIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
