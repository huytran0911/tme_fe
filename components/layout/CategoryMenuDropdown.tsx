"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useCategoriesV2 } from "@/hooks/useCategories";
import type { CategoryTreeItemDto } from "@/lib/api/categories";
import { useCategorySelection } from "./CategorySelectionContext";

type CategoryNode = CategoryTreeItemDto;

const L1_WIDTH = 240;
const L2_WIDTH = 240;
const L3_WIDTH = 220;
const L4_WIDTH = 220;
const CLOSE_DELAY = 150;

function getCategoryLabel(category: CategoryNode, locale: string) {
  if (locale === "vi") return category.name ?? "";
  return category.nameEn?.trim() ? category.nameEn : category.name ?? "";
}

function findNodeById(nodes: CategoryNode[], id: number | null): CategoryNode | null {
  if (!id) return null;
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.children?.length) {
      const found = findNodeById(node.children, id);
      if (found) return found;
    }
  }
  return null;
}

interface MenuItemProps {
  label: string;
  active?: boolean;
  hasChildren?: boolean;
  onMouseEnter: (e: MouseEvent<HTMLButtonElement>) => void;
  onClick?: () => void;
}

function MenuItem({ label, active, hasChildren, onMouseEnter, onClick }: MenuItemProps) {
  return (
    <button
      type="button"
      className={`flex w-full items-center justify-between px-3 py-2 text-sm transition-colors ${
        active
          ? "bg-orange-50 text-[#EE4D2D] font-medium"
          : "text-slate-700 hover:bg-orange-50 hover:text-[#EE4D2D]"
      }`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      role="menuitem"
    >
      <span className="text-left line-clamp-2">{label}</span>
      {hasChildren && (
        <svg className="ml-2 h-3 w-3 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
}

export default function CategoryMenuDropdown() {
  const t = useTranslations("CategoryMenu");
  const locale = useLocale();
  const router = useRouter();
  const { selectCategory } = useCategorySelection();
  const { data, isLoading, isError } = useCategoriesV2();

  const [isOpen, setIsOpen] = useState(false);
  const [activeLevel1Id, setActiveLevel1Id] = useState<number | null>(null);
  const [activeLevel2Id, setActiveLevel2Id] = useState<number | null>(null);
  const [activeLevel3Id, setActiveLevel3Id] = useState<number | null>(null);

  // Track offset for each level panel (relative to its parent panel)
  const [offset2, setOffset2] = useState(0);
  const [offset3, setOffset3] = useState(0);
  const [offset4, setOffset4] = useState(0);

  const closeTimer = useRef<number | null>(null);
  const level1Ref = useRef<HTMLDivElement>(null);
  const level2Ref = useRef<HTMLDivElement>(null);
  const level3Ref = useRef<HTMLDivElement>(null);

  const categories = data ?? [];

  const clearClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearClose();
    closeTimer.current = window.setTimeout(() => {
      setIsOpen(false);
      setActiveLevel1Id(null);
      setActiveLevel2Id(null);
      setActiveLevel3Id(null);
    }, CLOSE_DELAY);
  };

  const handleMouseEnter = () => {
    clearClose();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    scheduleClose();
  };

  const onSelect = (id: number) => {
    setIsOpen(false);
    setActiveLevel1Id(null);
    setActiveLevel2Id(null);
    setActiveLevel3Id(null);
    selectCategory(id);
    router.push(`/${locale}/products?categoryId=${id}`);
  };

  // Calculate offset relative to a specific container
  const calcOffset = (e: MouseEvent<HTMLButtonElement>, containerRef: React.RefObject<HTMLDivElement | null>) => {
    if (!containerRef.current) return 0;
    const containerRect = containerRef.current.getBoundingClientRect();
    const itemRect = e.currentTarget.getBoundingClientRect();
    return itemRect.top - containerRect.top;
  };

  const activeLevel1Node = findNodeById(categories, activeLevel1Id);
  const level2Items = activeLevel1Node?.children ?? [];
  const activeLevel2Node = findNodeById(level2Items, activeLevel2Id);
  const level3Items = activeLevel2Node?.children ?? [];
  const activeLevel3Node = findNodeById(level3Items, activeLevel3Id);
  const level4Items = activeLevel3Node?.children ?? [];

  useEffect(() => {
    return () => clearClose();
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        type="button"
        className="flex h-9 items-center gap-2 bg-[#EE4D2D] px-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#d9452a] whitespace-nowrap"
      >
        <svg
          className="h-4 w-4 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span>{t("title")}</span>
      </button>

      {/* Dropdown Container */}
      {isOpen && (
        <div className="absolute left-0 top-full z-[100]">
          {/* Level 1 Panel */}
          <div
            ref={level1Ref}
            className="relative bg-white shadow-xl border border-slate-200 rounded-b-lg"
            style={{ width: L1_WIDTH }}
          >
            <div className="max-h-[70vh] overflow-y-auto py-1" role="menu">
              {isLoading ? (
                <div className="px-4 py-3 text-sm text-slate-500">{t("loading")}</div>
              ) : isError ? (
                <div className="px-4 py-3 text-sm text-red-600">{t("error")}</div>
              ) : categories.length > 0 ? (
                categories.map((category) => (
                  <MenuItem
                    key={category.id}
                    label={getCategoryLabel(category, locale)}
                    active={activeLevel1Id === category.id}
                    hasChildren={Boolean(category.children?.length)}
                    onMouseEnter={(e) => {
                      clearClose();
                      setActiveLevel1Id(category.id);
                      setActiveLevel2Id(null);
                      setActiveLevel3Id(null);
                      setOffset2(calcOffset(e, level1Ref));
                    }}
                    onClick={() => onSelect(category.id)}
                  />
                ))
              ) : (
                <div className="px-4 py-3 text-sm text-slate-500">{t("noCategories")}</div>
              )}
            </div>

            {/* Level 2 Panel */}
            {level2Items.length > 0 && (
              <div
                ref={level2Ref}
                className="absolute left-full bg-white shadow-xl border border-slate-200 rounded-r-lg"
                style={{ width: L2_WIDTH, top: offset2 }}
                onMouseEnter={clearClose}
                onMouseLeave={scheduleClose}
              >
                <div className="max-h-[70vh] overflow-y-auto py-1" role="menu">
                  {level2Items.map((item) => (
                    <MenuItem
                      key={item.id}
                      label={getCategoryLabel(item, locale)}
                      active={activeLevel2Id === item.id}
                      hasChildren={Boolean(item.children?.length)}
                      onMouseEnter={(e) => {
                        clearClose();
                        setActiveLevel2Id(item.id);
                        setActiveLevel3Id(null);
                        setOffset3(calcOffset(e, level2Ref));
                      }}
                      onClick={() => onSelect(item.id)}
                    />
                  ))}
                </div>

                {/* Level 3 Panel */}
                {level3Items.length > 0 && (
                  <div
                    ref={level3Ref}
                    className="absolute left-full bg-white shadow-xl border border-slate-200 rounded-r-lg"
                    style={{ width: L3_WIDTH, top: offset3 }}
                    onMouseEnter={clearClose}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="max-h-[70vh] overflow-y-auto py-1" role="menu">
                      {level3Items.map((item) => (
                        <MenuItem
                          key={item.id}
                          label={getCategoryLabel(item, locale)}
                          active={activeLevel3Id === item.id}
                          hasChildren={Boolean(item.children?.length)}
                          onMouseEnter={(e) => {
                            clearClose();
                            setActiveLevel3Id(item.id);
                            setOffset4(calcOffset(e, level3Ref));
                          }}
                          onClick={() => onSelect(item.id)}
                        />
                      ))}
                    </div>

                    {/* Level 4 Panel */}
                    {level4Items.length > 0 && (
                      <div
                        className="absolute left-full bg-white shadow-xl border border-slate-200 rounded-r-lg"
                        style={{ width: L4_WIDTH, top: offset4 }}
                        onMouseEnter={clearClose}
                        onMouseLeave={scheduleClose}
                      >
                        <div className="max-h-[70vh] overflow-y-auto py-1" role="menu">
                          {level4Items.map((item) => (
                            <MenuItem
                              key={item.id}
                              label={getCategoryLabel(item, locale)}
                              active={false}
                              hasChildren={Boolean(item.children?.length)}
                              onMouseEnter={clearClose}
                              onClick={() => onSelect(item.id)}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
