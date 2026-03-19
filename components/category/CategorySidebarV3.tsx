"use client";

import { Dialog, Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";
import {
  Fragment,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
  type MouseEvent,
} from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useCategories } from "@/hooks/useCategories";
import type { CategoryDto } from "@/lib/api/categories";
import { useCategorySelection } from "@/components/layout/CategorySelectionContext";

export type CategoryNode = {
  id: number;
  name: string;
  nameEn: string;
  parentId: number | null;
  groupId?: number | null;
  sortOrder?: number | null;
  isActive?: boolean;
  children: CategoryNode[];
};

export type CategoryGroup = {
  id: number;
  name: string;
  nameEn: string;
  sort: number;
  categories: CategoryNode[];
};

export interface CategorySidebarV3Props {
  groups?: CategoryGroup[];
  onCategoryClick?: (node: CategoryNode | CategoryGroup) => void;
  className?: string;
}

const L1_WIDTH = 220;
const L2_WIDTH = 220;
const L3_WIDTH = 200;
const L4_WIDTH = 200;
const CLOSE_DELAY = 200;
const PANEL_MAX_HEIGHT = 520;

function normalizeNode(node: CategoryDto, groupId: number | null): CategoryNode {
  return {
    id: node.id,
    name: node.name,
    nameEn: node.nameEn,
    parentId: node.parentId ?? null,
    groupId,
    sortOrder: null,
    isActive: true,
    children: node.children?.length ? node.children.map((child) => normalizeNode(child, groupId)) : [],
  };
}

function buildGroupsFromCategories(categories: CategoryDto[]): CategoryGroup[] {
  return categories.map((cat, index) => {
    const groupId = cat.id;
    return {
      id: groupId,
      name: cat.name,
      nameEn: cat.nameEn,
      sort: index,
      categories: cat.children?.length ? cat.children.map((child) => normalizeNode(child, groupId)) : [],
    };
  });
}

function matchText(query: string, ...labels: Array<string | undefined>) {
  if (!query.trim()) return false;
  const lower = query.trim().toLowerCase();
  return labels.some((label) => (label ?? "").toLowerCase().includes(lower));
}

function filterGroups(groups: CategoryGroup[], query: string): CategoryGroup[] {
  if (!query.trim()) return groups;
  const filtered: CategoryGroup[] = [];

  const walk = (nodes: CategoryNode[]): CategoryNode[] => {
    const result: CategoryNode[] = [];
    for (const node of nodes) {
      const children = walk(node.children ?? []);
      if (matchText(query, node.name, node.nameEn) || children.length) {
        result.push({ ...node, children });
      }
    }
    return result;
  };

  for (const group of groups) {
    const categories = walk(group.categories);
    if (matchText(query, group.name, group.nameEn) || categories.length) {
      filtered.push({ ...group, categories });
    }
  }
  return filtered;
}

function getLabel(node: { name: string; nameEn: string }, locale: string) {
  if (locale === "vi") return node.name;
  return node.nameEn?.trim() ? node.nameEn : node.name;
}

const ITEM_HEIGHT = 32; // Approximate height of each menu item in pixels
const PANEL_PADDING = 12; // Padding inside panel

function estimatePanelHeight(itemCount: number) {
  return Math.min(itemCount * ITEM_HEIGHT + PANEL_PADDING, PANEL_MAX_HEIGHT);
}

function calcOffsetWithFlip(
  itemTop: number,
  containerTop: number,
  itemHeight: number,
  childItemCount: number
) {
  const offset = itemTop - containerTop;
  const estimatedPanelHeight = estimatePanelHeight(childItemCount);
  const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 800;
  const absoluteTop = itemTop;
  const margin = 20; // Minimum margin from viewport bottom

  // Check if panel would overflow viewport bottom
  if (absoluteTop + estimatedPanelHeight > viewportHeight - margin) {
    // Flip: align panel bottom with the hovered item bottom
    const flippedOffset = offset - estimatedPanelHeight + itemHeight;
    return Math.max(0, flippedOffset);
  }

  return offset;
}

interface PopupPanelProps {
  left: number;
  top: number;
  width: number;
  items: CategoryNode[];
  locale: string;
  activeId: number | null;
  depth: number;
  onHoverItem: (id: number, e: MouseEvent<HTMLButtonElement>) => void;
  onNavigate: (node: CategoryNode) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function PopupPanel({
  left,
  top,
  width,
  items,
  locale,
  activeId,
  depth,
  onHoverItem,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
}: PopupPanelProps) {
  if (!items.length) return null;
  return (
    <div
      className="pointer-events-none absolute z-[100]"
      style={{ left, top }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="pointer-events-auto max-h-[70vh] overflow-y-auto bg-white p-1.5 shadow-lg dark:bg-slate-900 scrollbar-thin"
        style={{ width, maxHeight: PANEL_MAX_HEIGHT }}
        role="menu"
      >
        <div className="space-y-0.5">
          {items.map((item) => {
            const isActive = activeId === item.id;
            const hasChildren = item.children?.length;
            return (
              <button
                key={item.id}
                type="button"
                onMouseEnter={(e) => onHoverItem(item.id, e)}
                onFocus={(e) => onHoverItem(item.id, e as unknown as MouseEvent<HTMLButtonElement>)}
                onClick={() => onNavigate(item)}
                className={clsx(
                  "flex w-full items-center justify-between rounded-sm px-2.5 py-1.5 text-sm text-slate-800 transition hover:bg-orange-50 hover:text-orange-600",
                  isActive ? "bg-orange-50 text-orange-600 font-semibold ring-1 ring-orange-100 rounded-sm" : "rounded-sm",
                  depth === 0 ? "text-base font-semibold" : "",
                )}
                role="menuitem"
              >
                <span className="text-left">{getLabel(item, locale)}</span>
                {hasChildren ? <TriangleRightIcon className="ml-2 h-3 w-3 text-slate-500" /> : null}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function CategorySidebarV3({ groups: propGroups, onCategoryClick, className }: CategorySidebarV3Props) {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("CategoryMenu");
  const { data, isLoading, isError, error } = useCategories();
  const { selectCategory } = useCategorySelection();
  const [query, setQuery] = useState("");
  const [activeGroupId, setActiveGroupId] = useState<number | null>(null);
  const [activeLevel2Id, setActiveLevel2Id] = useState<number | null>(null);
  const [activeLevel3Id, setActiveLevel3Id] = useState<number | null>(null);
  const [offset2, setOffset2] = useState(0);
  const [offset3, setOffset3] = useState(0);
  const [offset4, setOffset4] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const groups = useMemo(
    () => propGroups ?? (data ? buildGroupsFromCategories(data) : []),
    [data, propGroups],
  );

  const filteredGroups = useMemo(() => filterGroups(groups, query), [groups, query]);

  const activeGroup = filteredGroups.find((group) => group.id === activeGroupId) ?? null;
  const level2List = activeGroup ? activeGroup.categories : [];
  const activeLevel2 = level2List.find((node) => node.id === activeLevel2Id) ?? null;
  const level3List = activeLevel2?.children ?? [];
  const activeLevel3 = level3List.find((node) => node.id === activeLevel3Id) ?? null;
  const level4List = activeLevel3?.children ?? [];

  const errorMessage =
    isError &&
    (error instanceof Error
      ? error.message
      : t("error"));

  const handleCategoryClick = (node: CategoryNode | CategoryGroup) => {
    selectCategory(node.id);
    onCategoryClick?.(node);
    // Close popups after selection
    setActiveGroupId(null);
    setActiveLevel2Id(null);
    setActiveLevel3Id(null);
    // Navigate to products page with category ID
    router.push(`/${locale}/products?categoryId=${node.id}`);
  };

  const clearClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearClose();
    closeTimer.current = window.setTimeout(() => {
      setActiveGroupId(null);
      setActiveLevel2Id(null);
      setActiveLevel3Id(null);
    }, CLOSE_DELAY);
  };

  const containerTop = () => containerRef.current?.getBoundingClientRect().top ?? 0;
  const calcTop = (e: MouseEvent<HTMLButtonElement>, childItemCount: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return calcOffsetWithFlip(rect.top, containerTop(), rect.height, childItemCount);
  };

  const handleEnterLevel1 = (id: number, e: MouseEvent<HTMLButtonElement>) => {
    clearClose();
    const group = filteredGroups.find((g) => g.id === id);
    const childCount = group?.categories?.length ?? 0;
    setActiveGroupId(id);
    setActiveLevel2Id(null);
    setActiveLevel3Id(null);
    setOffset2(calcTop(e, childCount));
  };
  const handleEnterLevel2 = (id: number, e: MouseEvent<HTMLButtonElement>) => {
    clearClose();
    const node = level2List.find((n) => n.id === id);
    const childCount = node?.children?.length ?? 0;
    setActiveLevel2Id(id);
    setActiveLevel3Id(null);
    setOffset3(calcTop(e, childCount));
  };
  const handleEnterLevel3 = (id: number, e: MouseEvent<HTMLButtonElement>) => {
    clearClose();
    const node = level3List.find((n) => n.id === id);
    const childCount = node?.children?.length ?? 0;
    setActiveLevel3Id(id);
    setOffset4(calcTop(e, childCount));
  };

  return (
    <aside
      className={clsx(
        "sticky top-[100px] space-y-3 rounded-lg border border-orange-100 bg-orange-50/80 p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm">
            <MenuIcon className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-600">
              {t("categoriesLabel")}
            </p>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {t("componentList")}
            </h2>
          </div>
        </div>
        <button
          type="button"
          className="lg:hidden rounded-xl border border-orange-200 px-3 py-2 text-xs font-medium text-orange-600 shadow-sm dark:border-orange-500/40 dark:text-orange-300"
          onClick={() => setMobileOpen(true)}
        >
          {t("browseButton")}
        </button>
      </div>

      {/* Search bar - temporarily hidden */}
      <div className="relative hidden">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder={t("searchPlaceholder")}
          className="w-full rounded-xl border border-orange-100 bg-white px-3 py-2 pl-10 text-sm text-slate-800 shadow-inner focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          <SearchIcon className="h-4 w-4" />
        </span>
      </div>

      {isLoading ? (
        <div className="px-2 py-3 text-sm text-slate-500 dark:text-slate-400">
          {t("loading")}
        </div>
      ) : errorMessage ? (
        <div className="px-2 py-3 text-sm text-red-600 dark:text-red-400">{errorMessage}</div>
      ) : filteredGroups.length ? (
        <div
          className="relative hidden lg:block overflow-visible"
          ref={containerRef}
          onMouseEnter={clearClose}
          onMouseLeave={scheduleClose}
        >
          <div className="space-y-1.5" role="menu" aria-label="Category group list">
            {filteredGroups.map((group) => {
              const isActive = group.id === activeGroupId;
              return (
                <button
                  key={group.id}
                  type="button"
                  onMouseEnter={(e) => handleEnterLevel1(group.id, e)}
                  onFocus={(e) => handleEnterLevel1(group.id, e as unknown as MouseEvent<HTMLButtonElement>)}
                className={clsx(
                  "flex w-full items-center justify-between rounded-sm px-2.5 py-2 text-left text-sm font-medium transition-colors duration-150",
                  isActive
                    ? "bg-orange-500 text-white shadow-sm"
                    : "bg-white/80 text-slate-800 hover:bg-orange-100 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
                )}
              >
                <span>{getLabel(group, locale)}</span>
                <TriangleRightIcon className={clsx("h-3 w-3", isActive ? "text-white" : "text-slate-300")} />
              </button>
              );
            })}
          </div>

          {level2List.length > 0 && activeGroup ? (
            <PopupPanel
              left={L1_WIDTH}
              top={offset2}
              width={L2_WIDTH}
              items={level2List}
              locale={locale}
              activeId={activeLevel2Id}
              depth={1}
              onHoverItem={handleEnterLevel2}
              onNavigate={(node) => handleCategoryClick(node)}
              onMouseEnter={clearClose}
              onMouseLeave={scheduleClose}
            />
          ) : null}

          {level3List.length > 0 ? (
            <PopupPanel
              left={L1_WIDTH + L2_WIDTH}
              top={offset3}
              width={L3_WIDTH}
              items={level3List}
              locale={locale}
              activeId={activeLevel3Id}
              depth={2}
              onHoverItem={handleEnterLevel3}
              onNavigate={(node) => handleCategoryClick(node)}
              onMouseEnter={clearClose}
              onMouseLeave={scheduleClose}
            />
          ) : null}

          {level4List.length > 0 ? (
            <PopupPanel
              left={L1_WIDTH + L2_WIDTH + L3_WIDTH}
              top={offset4}
              width={L4_WIDTH}
              items={level4List}
              locale={locale}
              activeId={null}
              depth={3}
              onHoverItem={() => undefined}
              onNavigate={(node) => handleCategoryClick(node)}
              onMouseEnter={clearClose}
              onMouseLeave={scheduleClose}
            />
          ) : null}
        </div>
      ) : (
        <div className="px-2 py-3 text-sm text-slate-500 dark:text-slate-400">
          {t("noCategories")}
        </div>
      )}

      <MobileCategoryDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        groups={filteredGroups}
        locale={locale}
        onNavigate={(node) => {
          handleCategoryClick(node);
          setMobileOpen(false);
        }}
        query={query}
        setQuery={setQuery}
        t={t}
      />
    </aside>
  );
}

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  groups: CategoryGroup[];
  locale: string;
  onNavigate: (node: CategoryNode | CategoryGroup) => void;
  query: string;
  setQuery: (q: string) => void;
  t: (key: string) => string;
}

function MobileCategoryDrawer({ open, onClose, groups, locale, onNavigate, query, setQuery, t }: MobileDrawerProps) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-[120]">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="ease-in duration-150"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <Dialog.Panel className="fixed inset-y-0 left-0 w-[85vw] min-w-[260px] max-w-xs overflow-y-auto rounded-r-2xl border border-orange-100 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-4">
            <div className="mb-3 flex items-center justify-between">
              <Dialog.Title className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {t("mobileTitle")}
              </Dialog.Title>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-slate-200 px-2 py-1 text-xs text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {t("close")}
              </button>
            </div>

            <div className="mb-3">
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 pl-9 text-sm text-slate-700 shadow-inner focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
                <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <SearchIcon className="h-4 w-4" />
                </span>
              </div>
            </div>

            <div className="space-y-2">
              {groups.map((group) => (
                <Disclosure key={group.id} as="div" className="rounded-xl border border-slate-200 dark:border-slate-700">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-800 hover:bg-orange-50 dark:text-slate-100 dark:hover:bg-slate-800">
                        <span>{getLabel(group, locale)}</span>
                        <ChevronRightIcon
                          className={clsx(
                            "h-4 w-4 transition-transform",
                            open ? "rotate-90 text-orange-500" : "text-slate-400",
                          )}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="border-t border-slate-100 px-2 py-2 dark:border-slate-700">
                        <div className="space-y-1">
                          {group.categories.map((node) => (
                            <div key={node.id} className="rounded-lg bg-slate-50 px-2.5 py-2 dark:bg-slate-800">
                              <button
                                type="button"
                                className="w-full py-1 text-left text-sm font-medium text-slate-800 hover:text-orange-600 dark:text-slate-100 dark:hover:text-orange-300"
                                onClick={() => onNavigate(node)}
                              >
                                {getLabel(node, locale)}
                              </button>
                              {node.children?.length ? (
                                <div className="mt-1.5 space-y-0.5 border-t border-slate-200 pt-1.5 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-200">
                                  {node.children.map((child) => (
                                    <button
                                      key={child.id}
                                      type="button"
                                      className="block w-full py-1.5 text-left hover:text-orange-600 dark:hover:text-orange-300"
                                      onClick={() => onNavigate(child)}
                                    >
                                      {getLabel(child, locale)}
                                    </button>
                                  ))}
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
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

function MenuIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </svg>
  );
}

function ChevronRightIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function TriangleRightIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="currentColor"
      {...props}
    >
      <polygon points="4,2 9,6 4,10" />
    </svg>
  );
}
