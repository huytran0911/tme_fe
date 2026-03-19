"use client";

import { useState, useRef, useEffect, type ComponentProps } from "react";
import { useTranslations } from "next-intl";
import type { SortByOption, SortDirOption } from "@/components/layout/ProductFilterV2Context";

interface SortBarProps {
  sortBy: SortByOption;
  sortDir: SortDirOption;
  onSortChange: (sortBy: SortByOption, sortDir: SortDirOption) => void;
}

export default function SortBar({ sortBy, sortDir, onSortChange }: SortBarProps) {
  const t = useTranslations("Sort");
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
  const priceRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (priceRef.current && !priceRef.current.contains(event.target as Node)) {
        setPriceDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isDefault = sortBy === "";
  const isNewest = sortBy === "date" && sortDir === "desc";
  const isPrice = sortBy === "price";

  const handleDefault = () => {
    onSortChange("", "asc");
    setPriceDropdownOpen(false);
  };

  const handleNewest = () => {
    onSortChange("date", "desc");
    setPriceDropdownOpen(false);
  };

  const handlePriceAsc = () => {
    onSortChange("price", "asc");
    setPriceDropdownOpen(false);
  };

  const handlePriceDesc = () => {
    onSortChange("price", "desc");
    setPriceDropdownOpen(false);
  };

  return (
    <div className="flex items-center gap-2 bg-slate-50/80 px-3 py-2 rounded-lg">
      <span className="text-sm text-slate-600 whitespace-nowrap">{t("sortBy")}</span>

      <div className="flex items-center gap-1">
        {/* Popular/Default Button */}
        <SortButton active={isDefault} onClick={handleDefault}>
          {t("popular")}
        </SortButton>

        {/* Newest Button */}
        <SortButton active={isNewest} onClick={handleNewest}>
          {t("newest")}
        </SortButton>

        {/* Price Dropdown */}
        <div ref={priceRef} className="relative">
          <button
            type="button"
            onClick={() => setPriceDropdownOpen(!priceDropdownOpen)}
            className={`flex items-center gap-1 px-4 py-1.5 text-sm font-medium border transition-colors ${
              isPrice
                ? "bg-[#EE4D2D] text-white border-[#EE4D2D]"
                : "bg-white text-slate-700 border-slate-300 hover:border-[#EE4D2D] hover:text-[#EE4D2D]"
            }`}
          >
            <span>
              {isPrice
                ? sortDir === "asc"
                  ? t("priceLowHigh")
                  : t("priceHighLow")
                : t("price")}
            </span>
            <ChevronDownIcon
              className={`h-3.5 w-3.5 transition-transform ${priceDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Price Dropdown Menu */}
          {priceDropdownOpen && (
            <div className="absolute left-0 top-full z-[200] mt-1 min-w-[160px] rounded border border-slate-200 bg-white py-1 shadow-lg">
              <button
                type="button"
                onClick={handlePriceAsc}
                className={`flex w-full items-center px-4 py-2 text-sm transition-colors ${
                  isPrice && sortDir === "asc"
                    ? "bg-orange-50 text-[#EE4D2D]"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#EE4D2D]"
                }`}
              >
                {t("priceLowHigh")}
              </button>
              <button
                type="button"
                onClick={handlePriceDesc}
                className={`flex w-full items-center px-4 py-2 text-sm transition-colors ${
                  isPrice && sortDir === "desc"
                    ? "bg-orange-50 text-[#EE4D2D]"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#EE4D2D]"
                }`}
              >
                {t("priceHighLow")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface SortButtonProps {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function SortButton({ active, onClick, children }: SortButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-1.5 text-sm font-medium border transition-colors ${
        active
          ? "bg-[#EE4D2D] text-white border-[#EE4D2D]"
          : "bg-white text-slate-700 border-slate-300 hover:border-[#EE4D2D] hover:text-[#EE4D2D]"
      }`}
    >
      {children}
    </button>
  );
}

function ChevronDownIcon(props: ComponentProps<"svg">) {
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
