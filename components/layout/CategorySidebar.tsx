"use client";

import type { ComponentProps, MouseEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Sidebar, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useCategories } from "@/hooks/useCategories";
import type { CategoryDto } from "@/lib/api/categories";
import { useCategorySelection } from "./CategorySelectionContext";

type CategoryNode = CategoryDto & { children?: CategoryNode[] };

const L1_WIDTH = 240;
const L2_WIDTH = 240;
const L3_WIDTH = 220;
const L4_WIDTH = 220;
const CLOSE_DELAY = 200;
const PANEL_MAX_HEIGHT = 520;

function getCategoryLabel(category: CategoryNode, locale: string) {
  if (locale === "vi") return category.name;
  return category.nameEn?.trim() ? category.nameEn : category.name;
}

function filterTree(nodes: CategoryNode[], term: string, locale: string): CategoryNode[] {
  if (!term.trim()) return nodes;
  const q = term.toLowerCase();
  const walk = (list: CategoryNode[]): CategoryNode[] => {
    const result: CategoryNode[] = [];
    for (const node of list) {
      const label = getCategoryLabel(node, locale).toLowerCase();
      const children = node.children ? walk(node.children) : [];
      if (label.includes(q) || children.length) {
        result.push({ ...node, children: children.length ? children : undefined });
      }
    }
    return result;
  };
  return walk(nodes);
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

function clampOffset(offset: number, containerHeight: number, panelHeight = PANEL_MAX_HEIGHT) {
  if (!containerHeight) return offset;
  const max = Math.max(0, containerHeight - panelHeight);
  return Math.min(Math.max(0, offset), max);
}

interface MenuItemProps {
  label: string;
  active?: boolean;
  hasChildren?: boolean;
  onMouseEnter: (e: MouseEvent<HTMLButtonElement>) => void;
  onClick?: () => void;
  depth: number;
}

function MenuItem({ label, active, hasChildren, onMouseEnter, onClick, depth }: MenuItemProps) {
  const base =
    "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm text-slate-800 hover:bg-orange-50 hover:text-[#EE4D2D]";
  const activeCls = active ? "bg-orange-50 text-[#EE4D2D] font-semibold ring-1 ring-orange-100" : "";
  const depthCls = depth === 0 ? "text-base font-semibold" : "";
  return (
    <button
      type="button"
      className={`${base} ${activeCls} ${depthCls}`}
      onMouseEnter={onMouseEnter}
      onFocus={(e) => onMouseEnter(e as unknown as MouseEvent<HTMLButtonElement>)}
      onClick={onClick}
      role="menuitem"
      tabIndex={0}
    >
      <span className="text-left">{label}</span>
      {hasChildren ? <span className="ml-2 text-xs text-slate-500">{">"}</span> : null}
    </button>
  );
}

interface PopupProps {
  left: number;
  top: number;
  width: number;
  items: CategoryNode[];
  activeId: number | null;
  depth: number;
  locale: string;
  onEnterItem: (id: number, e: MouseEvent<HTMLButtonElement>) => void;
  onSelect: (id: number) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function PopupPanel({
  left,
  top,
  width,
  items,
  activeId,
  depth,
  onEnterItem,
  onSelect,
  onMouseEnter,
  onMouseLeave,
  locale,
}: PopupProps) {
  if (!items.length) return null;
  return (
    <div
      className="pointer-events-none absolute z-40"
      style={{ left, top }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="pointer-events-auto max-h-[70vh] overflow-y-auto rounded-2xl border border-orange-100 bg-white p-2 shadow-lg ring-1 ring-orange-50 dark:border-slate-800 dark:bg-slate-900 dark:ring-slate-800"
        style={{ width }}
        role="menu"
      >
        <div className="space-y-1">
          {items.map((item) => (
            <MenuItem
              key={item.id}
              label={getCategoryLabel(item, locale)}
              active={activeId === item.id}
              hasChildren={Boolean(item.children?.length)}
              depth={depth}
              onMouseEnter={(e) => onEnterItem(item.id, e)}
              onClick={() => onSelect(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CategorySidebar() {
  const t = useTranslations("Sidebar");
  const locale = useLocale();
  const router = useRouter();
  const { selectedCategoryId, selectCategory } = useCategorySelection();
  const { data, isLoading, isError, error } = useCategories();

  const [query, setQuery] = useState("");
  const [activeLevel1Id, setActiveLevel1Id] = useState<number | null>(null);
  const [activeLevel2Id, setActiveLevel2Id] = useState<number | null>(null);
  const [activeLevel3Id, setActiveLevel3Id] = useState<number | null>(null);
  const [offset2, setOffset2] = useState(0);
  const [offset3, setOffset3] = useState(0);
  const [offset4, setOffset4] = useState(0);
  const closeTimer = useRef<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const categories = (data as CategoryNode[]) ?? [];
  const filtered = useMemo(
    () => filterTree(categories, query, locale),
    [categories, query, locale],
  );

  const clearClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    clearClose();
    closeTimer.current = window.setTimeout(() => {
      setActiveLevel1Id(null);
      setActiveLevel2Id(null);
      setActiveLevel3Id(null);
    }, CLOSE_DELAY);
  };

  const containerTop = () => rootRef.current?.getBoundingClientRect().top ?? 0;
  const containerHeight = () => rootRef.current?.getBoundingClientRect().height ?? 0;
  const calcTop = (e: MouseEvent<HTMLButtonElement>) => {
    const itemTop = e.currentTarget.getBoundingClientRect().top;
    const offset = itemTop - containerTop();
    return clampOffset(offset, containerHeight());
  };

  const onSelect = (id: number) => {
    selectCategory(id);
    router.push(`/${locale}/categories/${id}`);
  };

  const handleEnterLevel1 = (id: number, e: MouseEvent<HTMLButtonElement>) => {
    clearClose();
    setActiveLevel1Id(id);
    setActiveLevel2Id(null);
    setActiveLevel3Id(null);
    setOffset2(calcTop(e));
  };
  const handleEnterLevel2 = (id: number, e: MouseEvent<HTMLButtonElement>) => {
    clearClose();
    setActiveLevel2Id(id);
    setActiveLevel3Id(null);
    setOffset3(calcTop(e));
  };
  const handleEnterLevel3 = (id: number, e: MouseEvent<HTMLButtonElement>) => {
    clearClose();
    setActiveLevel3Id(id);
    setOffset4(calcTop(e));
  };

  const activeLevel1Node = findNodeById(filtered, activeLevel1Id);
  const level2Items = activeLevel1Node?.children ?? [];
  const activeLevel2Node = findNodeById(level2Items, activeLevel2Id);
  const level3Items = activeLevel2Node?.children ?? [];
  const activeLevel3Node = findNodeById(level3Items, activeLevel3Id);
  const level4Items = activeLevel3Node?.children ?? [];

  useEffect(() => {
    return () => clearClose();
  }, []);

  const tMenu = useTranslations("CategoryMenu");
  const errorMessage =
    isError &&
    (error instanceof Error
      ? error.message
      : tMenu("error"));

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseLeave={scheduleClose}
      onMouseEnter={clearClose}
    >
      <aside className="sticky top-24 max-h-[calc(100vh-120px)] w-[240px] overflow-y-auto rounded-2xl bg-white/95 p-3 shadow-sm ring-1 ring-slate-100 backdrop-blur">
        <Sidebar aria-label={t("title")} className="h-full w-full bg-transparent p-0">
          <div className="mb-3 flex items-start gap-2 rounded-xl bg-gradient-to-r from-orange-50/80 to-white p-3">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-[#EE4D2D] shadow-inner">
              <SearchIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <h2 className="text-sm font-semibold text-slate-900">
                {t("panelTitle")}
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                {t("panelDescription")}
              </p>
            </div>
          </div>

          <div className="mb-3">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder={t("searchPlaceholder")}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 pr-10 text-sm text-slate-700 shadow-inner focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
              {query.trim() ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700"
                  aria-label={tMenu("close")}
                >
                  <ClearIcon className="h-3.5 w-3.5" />
                </button>
              ) : (
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <SearchIcon className="h-4 w-4" />
                </span>
              )}
            </div>
          </div>

          <SidebarItems className="overflow-visible">
            {isLoading ? (
              <div className="px-3 pb-3 text-sm text-slate-500">
                {tMenu("loading")}
              </div>
            ) : errorMessage ? (
              <div className="px-3 pb-3 text-sm text-red-600">{errorMessage}</div>
            ) : filtered.length ? (
              <SidebarItemGroup className="space-y-1" role="menu">
                {filtered.map((category) => (
                  <MenuItem
                    key={category.id}
                    label={getCategoryLabel(category, locale)}
                    active={activeLevel1Id === category.id}
                    depth={0}
                    onMouseEnter={(e) => handleEnterLevel1(category.id, e)}
                    onClick={() => onSelect(category.id)}
                  />
                ))}
              </SidebarItemGroup>
            ) : (
              <div className="px-3 pb-3 text-sm text-slate-500">
                {t("noResults")}
              </div>
            )}
          </SidebarItems>
        </Sidebar>
      </aside>

      {level2Items.length > 0 && (
        <PopupPanel
          left={L1_WIDTH + 12}
          top={offset2}
          width={L2_WIDTH}
          items={level2Items}
          activeId={activeLevel2Id}
          depth={1}
          locale={locale}
          onEnterItem={handleEnterLevel2}
          onSelect={onSelect}
          onMouseEnter={clearClose}
          onMouseLeave={scheduleClose}
        />
      )}
      {level3Items.length > 0 && (
        <PopupPanel
          left={L1_WIDTH + L2_WIDTH + 24}
          top={offset3}
          width={L3_WIDTH}
          items={level3Items}
          activeId={activeLevel3Id}
          depth={2}
          locale={locale}
          onEnterItem={handleEnterLevel3}
          onSelect={onSelect}
          onMouseEnter={clearClose}
          onMouseLeave={scheduleClose}
        />
      )}
      {level4Items.length > 0 && (
        <PopupPanel
          left={L1_WIDTH + L2_WIDTH + L3_WIDTH + 36}
          top={offset4}
          width={L4_WIDTH}
          items={level4Items}
          activeId={null}
          depth={3}
          locale={locale}
          onEnterItem={() => undefined}
          onSelect={onSelect}
          onMouseEnter={clearClose}
          onMouseLeave={scheduleClose}
        />
      )}
    </div>
  );
}

function SearchIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12.9 14.32a6 6 0 1 1 1.414-1.414l2.387 2.387a1 1 0 0 1-1.414 1.414L12.9 14.32ZM12 9a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ClearIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="5" y1="5" x2="15" y2="15" />
      <line x1="5" y1="15" x2="15" y2="5" />
    </svg>
  );
}

// Example data (for local testing)
export const exampleCategories: CategoryNode[] = [
  {
    id: 1,
    name: "Phần cứng, Thiết bị",
    nameEn: "Hardware",
    parentId: 0,
    children: [
      {
        id: 11,
        name: "Máy nạp & Adapter",
        nameEn: "Programmer & Adapter",
        parentId: 1,
        children: [
          {
            id: 111,
            name: "Adapter và Phụ kiện",
            nameEn: "Adapters & Accessories",
            parentId: 11,
            children: [
              {
                id: 1111,
                name: "Socket Adapter",
                nameEn: "Socket Adapter",
                parentId: 111,
              },
              {
                id: 1112,
                name: "Adapter cho PCB50",
                nameEn: "Adapter for PCB50",
                parentId: 111,
              },
            ],
          },
        ],
      },
    ],
  },
];
