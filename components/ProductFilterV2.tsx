"use client";

import { useCallback, useMemo, useState, type ComponentProps } from "react";
import { useTranslations } from "next-intl";
import { useLegacyProductFilters } from "@/hooks/useProductLegacy";
import type { ProductFilterV2State } from "@/components/layout/ProductFilterV2Context";

// Re-export for backward compatibility
export type { ProductFilterV2State };

// Props for the filter component
interface ProductFilterV2Props {
  onFilterChange?: (filters: ProductFilterV2State) => void;
  categoryId?: number;
  defaultCollapsed?: boolean;
  filters?: ProductFilterV2State;
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

export default function ProductFilterV2({
  onFilterChange,
  categoryId,
  defaultCollapsed = false,
  filters: externalFilters,
}: ProductFilterV2Props) {
  const t = useTranslations("ProductFilter");
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [internalFilters, setInternalFilters] = useState<ProductFilterV2State>(
    PRODUCT_FILTER_V2_INITIAL_STATE
  );

  // Track which sections are expanded
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    provider: true,
    origin: true,
    type: true,
    pin: true,
    packed: true,
  });

  const filters = externalFilters ?? internalFilters;

  const filterParams = useMemo(() => ({ categoryId }), [categoryId]);
  const { data: filterOptions, isLoading } = useLegacyProductFilters(filterParams);

  // Only allow keys that are arrays (not sortBy/sortDir)
  type ArrayFilterKey = 'providerIds' | 'origins' | 'types' | 'pins' | 'packeds';

  const handleCheckboxChange = useCallback(
    (key: ArrayFilterKey, value: string, checked: boolean) => {
      const currentValues = filters[key];
      let newValues: string[];

      if (checked) {
        newValues = [...currentValues, value];
      } else {
        newValues = currentValues.filter((v) => v !== value);
      }

      const newFilters = { ...filters, [key]: newValues };
      if (!externalFilters) {
        setInternalFilters(newFilters);
      }
      onFilterChange?.(newFilters);
    },
    [filters, onFilterChange, externalFilters]
  );

  const handleReset = useCallback(() => {
    if (!externalFilters) {
      setInternalFilters(PRODUCT_FILTER_V2_INITIAL_STATE);
    }
    onFilterChange?.(PRODUCT_FILTER_V2_INITIAL_STATE);
  }, [onFilterChange, externalFilters]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Only count filter arrays, not sort options
  const totalActiveFilters = [
    filters.providerIds,
    filters.origins,
    filters.types,
    filters.pins,
    filters.packeds,
  ].reduce((acc, arr) => acc + arr.length, 0);
  const hasActiveFilters = totalActiveFilters > 0;

  // Convert API response to filter options
  const providerOptions =
    filterOptions?.providers?.map((p) => ({
      value: p.id.toString(),
      label: p.name || "",
    })) || [];

  const originOptions =
    filterOptions?.origin?.map((o) => ({
      value: o,
      label: o,
    })) || [];

  const typeOptions =
    filterOptions?.type?.map((t) => ({
      value: t,
      label: t,
    })) || [];

  const pinOptions =
    filterOptions?.pin?.map((p) => ({
      value: p,
      label: p,
    })) || [];

  const packedOptions =
    filterOptions?.packed?.map((p) => ({
      value: p,
      label: p,
    })) || [];

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
                {totalActiveFilters} {t("selected")}
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
          isCollapsed ? "max-h-0" : "max-h-[800px]"
        }`}
      >
        <div className="space-y-1 p-3 pt-0">
          {/* Brand/Provider Filter */}
          {providerOptions.length > 0 && (
            <CheckboxFilterGroup
              label={t("brand")}
              sectionKey="provider"
              isExpanded={expandedSections.provider}
              onToggle={() => toggleSection("provider")}
              options={providerOptions}
              selectedValues={filters.providerIds}
              onChange={(value, checked) =>
                handleCheckboxChange("providerIds", value, checked)
              }
              isLoading={isLoading}
            />
          )}

          {/* Origin Filter */}
          {originOptions.length > 0 && (
            <CheckboxFilterGroup
              label={t("origin")}
              sectionKey="origin"
              isExpanded={expandedSections.origin}
              onToggle={() => toggleSection("origin")}
              options={originOptions}
              selectedValues={filters.origins}
              onChange={(value, checked) =>
                handleCheckboxChange("origins", value, checked)
              }
              isLoading={isLoading}
            />
          )}

          {/* Pin Type Filter */}
          {typeOptions.length > 0 && (
            <CheckboxFilterGroup
              label={t("pinType")}
              sectionKey="type"
              isExpanded={expandedSections.type}
              onToggle={() => toggleSection("type")}
              options={typeOptions}
              selectedValues={filters.types}
              onChange={(value, checked) =>
                handleCheckboxChange("types", value, checked)
              }
              isLoading={isLoading}
            />
          )}

          {/* Pin Count Filter */}
          {pinOptions.length > 0 && (
            <CheckboxFilterGroup
              label={t("pinCount")}
              sectionKey="pin"
              isExpanded={expandedSections.pin}
              onToggle={() => toggleSection("pin")}
              options={pinOptions}
              selectedValues={filters.pins}
              onChange={(value, checked) =>
                handleCheckboxChange("pins", value, checked)
              }
              isLoading={isLoading}
            />
          )}

          {/* Packed Filter */}
          {packedOptions.length > 0 && (
            <CheckboxFilterGroup
              label={t("packed")}
              sectionKey="packed"
              isExpanded={expandedSections.packed}
              onToggle={() => toggleSection("packed")}
              options={packedOptions}
              selectedValues={filters.packeds}
              onChange={(value, checked) =>
                handleCheckboxChange("packeds", value, checked)
              }
              isLoading={isLoading}
            />
          )}

          {/* Reset Button */}
          {hasActiveFilters && (
            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="w-full rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
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

// Checkbox filter group component
interface FilterOption {
  value: string;
  label: string;
}

interface CheckboxFilterGroupProps {
  label: string;
  sectionKey: string;
  isExpanded: boolean;
  onToggle: () => void;
  options: FilterOption[];
  selectedValues: string[];
  onChange: (value: string, checked: boolean) => void;
  isLoading?: boolean;
}

function CheckboxFilterGroup({
  label,
  sectionKey,
  isExpanded,
  onToggle,
  options,
  selectedValues,
  onChange,
  isLoading,
}: CheckboxFilterGroupProps) {
  const selectedCount = selectedValues.length;

  return (
    <div className="border-b border-slate-100 last:border-b-0">
      {/* Section Header */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-2.5 text-left"
      >
        <span className="text-sm font-medium text-slate-700">
          {label}
          {selectedCount > 0 && (
            <span className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1.5 text-xs font-semibold text-white">
              {selectedCount}
            </span>
          )}
        </span>
        <ChevronIcon
          className={`h-4 w-4 text-slate-400 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Options */}
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isExpanded ? "max-h-60 pb-2" : "max-h-0"
        }`}
      >
        <div className="max-h-52 space-y-1 overflow-y-auto pr-1">
          {isLoading ? (
            <div className="py-2 text-center text-xs text-slate-400">Loading...</div>
          ) : options.length === 0 ? (
            <div className="py-2 text-center text-xs text-slate-400">No options</div>
          ) : (
            options.map((option) => {
              const isChecked = selectedValues.includes(option.value);
              const checkboxId = `${sectionKey}-${option.value}`;

              return (
                <label
                  key={option.value}
                  htmlFor={checkboxId}
                  className={`flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 transition ${
                    isChecked
                      ? "bg-orange-50 text-orange-700"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    id={checkboxId}
                    checked={isChecked}
                    onChange={(e) => onChange(option.value, e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500 focus:ring-offset-0"
                  />
                  <span className="flex-1 truncate text-sm">{option.label}</span>
                </label>
              );
            })
          )}
        </div>
      </div>
    </div>
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
