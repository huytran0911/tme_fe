"use client";

import type { ComponentProps } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useAuth } from "@/contexts/AuthContext";
import { useCartContext } from "@/contexts/CartContext";
import CategoryMenuDropdown from "./layout/CategoryMenuDropdown";

const navItems = (locale: string) => [
  { key: "nav.home", href: `/${locale}` },
  { key: "nav.about", href: `/${locale}/gioi-thieu` },
  { key: "nav.support", href: "#" },
  { key: "nav.newItems", href: `/${locale}/new-products` },
  { key: "nav.promo", href: "#" },
  { key: "nav.order", href: "#" },
  { key: "nav.contact", href: `/${locale}/lien-he` },
];

interface HeaderProps {
  onToggleSidebar: () => void;
}

const SearchIcon = (props: ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-slate-500"
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

const VietnamFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
    <defs>
      <clipPath id="vnClip">
        <rect width="24" height="16" rx="2" />
      </clipPath>
    </defs>
    <g clipPath="url(#vnClip)">
      <rect width="24" height="16" fill="#da251d" />
      <polygon
        points="12,4 12.9,6.8 15.8,6.8 13.4,8.5 14.4,11.2 12,9.5 9.6,11.2 10.6,8.5 8.2,6.8 11.1,6.8"
        fill="#ffff00"
      />
    </g>
    <rect width="24" height="16" rx="2" fill="none" stroke="#00000020" strokeWidth="0.5" />
  </svg>
);

const UKFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
    <defs>
      <clipPath id="ukClip">
        <rect width="24" height="16" rx="2" />
      </clipPath>
    </defs>
    <g clipPath="url(#ukClip)">
      <rect width="24" height="16" fill="#012169" />
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#fff" strokeWidth="3" />
      <path d="M0,0 L24,16" stroke="#C8102E" strokeWidth="1.5" />
      <path d="M24,0 L0,16" stroke="#C8102E" strokeWidth="1.5" />
      <path d="M12,0 V16 M0,8 H24" stroke="#fff" strokeWidth="5" />
      <path d="M12,0 V16 M0,8 H24" stroke="#C8102E" strokeWidth="2.5" />
    </g>
    <rect width="24" height="16" rx="2" fill="none" stroke="#00000020" strokeWidth="0.5" />
  </svg>
);

export default function Header({ onToggleSidebar }: HeaderProps) {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname() || "/";
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();
  const { itemCount, openCart } = useCartContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const normalizePath = (path: string) => {
    if (!path) return "/";
    const trimmed = path === "/" ? "/" : path.replace(/\/+$/, "");
    return trimmed || "/";
  };

  // Normalized current path (with locale) for active nav check
  const normalizedPath = normalizePath(pathname);

  // Build path for locale switch without duplicating locale prefix
  const trimLocale = (path: string) => path.replace(/^\/(vi|en)/, "") || "/";
  const ensureLeadingSlash = (path: string) => (path.startsWith("/") ? path : `/${path}`);
  const normalizedPathWithoutLocale = ensureLeadingSlash(trimLocale(pathname));
  const localizedPath = (targetLocale: string) => {
    const suffix = normalizedPathWithoutLocale === "/" ? "" : normalizedPathWithoutLocale;
    return `/${targetLocale}${suffix}`;
  };

  const isNavActive = (href: string) => {
    const target = normalizePath(href);
    // Home should only match exactly locale root, not every route starting with /vi or /en.
    if (target === `/${locale}`) return normalizedPath === target;
    return normalizedPath === target || normalizedPath.startsWith(`${target}/`);
  };

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const initials = useMemo(() => {
    if (!user?.userName) return "U";
    const parts = user.userName.split(" ");
    if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "U";
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }, [user]);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    router.push(`/${locale}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (!trimmed) return;
    router.push(`/${locale}/products?keyword=${encodeURIComponent(trimmed)}`);
  };

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2">
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleSidebar}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-100 transition hover:border-primary hover:text-primary md:hidden"
              aria-label={t("toggleSidebar")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link href={`/${locale}`} className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-xs font-bold text-white shadow-inner">
                TME
              </div>
              <div className="hidden leading-tight sm:block">
                <div className="text-xs font-semibold text-white">TME</div>
                <div className="text-[10px] text-slate-300">Thien Minh Electronics</div>
              </div>
            </Link>
          </div>

          <div className="hidden flex-1 md:block">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="w-full rounded-full bg-slate-100/95 px-3 py-1.5 text-sm text-slate-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#EE4D2D]"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow hover:bg-primary-dark"
              >
                <SearchIcon className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {/* Hotline */}
            <div className="flex items-center gap-1.5 rounded-md bg-slate-800/80 px-2 py-1 text-xs text-slate-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-slate-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15H21a.75.75 0 0 0 .75-.75v-1.372a.75.75 0 0 0-.563-.726l-4.423-1.106a.75.75 0 0 0-.83.343l-.97 1.622a.75.75 0 0 1-.82.334 12.035 12.035 0 0 1-7.182-7.182.75.75 0 0 1 .334-.82l1.622-.97a.75.75 0 0 0 .343-.83L6.098 3.813a.75.75 0 0 0-.726-.563H4.002a.75.75 0 0 0-.75.75v2.75Z"
                />
              </svg>
              <div className="leading-tight">
                <div className="text-[10px] text-slate-300">{t("hotlineLabel")}</div>
                <div className="text-[11px] font-semibold text-white">028.3957.3224</div>
              </div>
            </div>

            {/* Account Dropdown */}
            <div className="relative" ref={dropdownRef}>
              {isAuthenticated && user ? (
                <>
                  <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-white transition hover:bg-slate-700/60"
                  >
                    {/* Avatar */}
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-xs font-bold text-white shadow-inner">
                      {initials}
                    </span>
                    <div className="hidden text-left lg:block">
                      <div className="text-[10px] text-slate-300">{t("userMenu.greeting")}</div>
                      <div className="max-w-[100px] truncate text-[11px] font-semibold text-white">
                        {user.userName}
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-3.5 w-3.5 text-slate-300 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute right-0 top-full z-50 mt-2 w-52 origin-top-right animate-in fade-in slide-in-from-top-2 rounded-xl border border-slate-200 bg-white py-1 shadow-xl sm:w-56">
                      {/* User Info Header */}
                      <div className="border-b border-slate-100 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-sm font-bold text-white">
                            {initials}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="truncate text-sm font-semibold text-slate-900">
                              {user.userName}
                            </div>
                            {user.role && (
                              <div className="truncate text-xs text-slate-500">{user.role}</div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="py-1">
                        <Link
                          href={`/${locale}/account`}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                          {t("userMenu.myAccount")}
                        </Link>
                        <Link
                          href={`/${locale}/account/orders`}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                          </svg>
                          {t("userMenu.myOrders")}
                        </Link>
                        <Link
                          href={`/${locale}/account/wishlist`}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                          </svg>
                          {t("userMenu.wishlist")}
                        </Link>
                        <Link
                          href={`/${locale}/account/addresses`}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {t("userMenu.addresses")}
                        </Link>
                      </div>

                      {/* Logout */}
                      <div className="border-t border-slate-100 py-1">
                        <button
                          type="button"
                          className="flex w-full items-center gap-3 px-4 py-2 text-sm text-red-600 transition hover:bg-red-50"
                          onClick={handleLogout}
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                          </svg>
                          {t("userMenu.logout")}
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={`/${locale}/auth/login`}
                  className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-white transition hover:bg-slate-700/60"
                >
                  <svg
                    className="h-6 w-6 text-slate-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <div className="hidden text-left lg:block">
                    <div className="text-[11px] font-medium text-white">{t("loginOrRegister")}</div>
                  </div>
                </Link>
              )}
            </div>

            {/* Orders */}
            <Link
              href={`/${locale}/account/orders`}
              className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-white transition hover:bg-slate-700/60"
            >
              <svg
                className="h-6 w-6 text-slate-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
              <div className="hidden text-left lg:block">
                <div className="text-[11px] font-medium text-white">{t("orders")}</div>
              </div>
            </Link>

            {/* Cart */}
            <button
              type="button"
              onClick={openCart}
              className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-white transition hover:bg-slate-700/60"
            >
              <div className="relative">
                <svg
                  className="h-6 w-6 text-slate-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121 0 2.09-.773 2.328-1.87l1.704-7.636a1.5 1.5 0 00-1.462-1.822H6.019M7.5 14.25L5.106 5.272M7.5 14.25h8.25m-8.25 0l-1.5-7.5m10.5 7.5l1.5-7.5" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </div>
              <div className="hidden text-left lg:block">
                <div className="text-[11px] font-medium text-white">{t("cart")}</div>
              </div>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 border-l border-slate-600 pl-3">
              <Link
                href={localizedPath("vi")}
                className={clsx(
                  "flex items-center gap-1 rounded-md px-1.5 py-1 text-[10px] font-semibold transition",
                  locale === "vi"
                    ? "bg-slate-700 text-orange-300"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                )}
                title="Tiếng Việt"
              >
                <VietnamFlag className="h-3 w-[18px]" />
                <span>VI</span>
              </Link>
              <Link
                href={localizedPath("en")}
                className={clsx(
                  "flex items-center gap-1 rounded-md px-1.5 py-1 text-[10px] font-semibold transition",
                  locale === "en"
                    ? "bg-slate-700 text-orange-300"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                )}
                title="English"
              >
                <UKFlag className="h-3 w-[18px]" />
                <span>EN</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 pb-2 md:hidden">
          <form onSubmit={handleSearch} className="relative flex-1">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full rounded-full bg-slate-100/95 px-3 py-1.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#EE4D2D]"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow hover:bg-primary-dark"
            >
              <SearchIcon className="h-3.5 w-3.5" />
            </button>
          </form>
          <button
            type="button"
            onClick={openCart}
            className="relative flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-white shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.6}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386a.75.75 0 0 1 .724.578l.383 1.722M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.04-1.81 1.297-3.79.52-5.04-.56-.91-1.707-1.96-4.238-1.96H7.53m0 0L6.743 5.3M7.53 7.25h-2.5"
              />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-semibold text-white">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="relative border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center">
          {/* Category Menu Dropdown - hiển thị đầu tiên */}
          <div className="hidden md:block flex-shrink-0">
            <CategoryMenuDropdown />
          </div>

          <nav className="hidden md:flex h-9 flex-1 items-center gap-1 px-2 md:gap-4 md:px-4 overflow-x-auto">
            {navItems(locale).map((item) => {
              const active = isNavActive(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={clsx(
                    "whitespace-nowrap px-2 py-1 text-sm font-medium text-slate-600 transition hover:text-[#EE4D2D]",
                    active && "text-[#EE4D2D] border-b-2 border-[#EE4D2D]",
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* <div className="border-t border-slate-800 bg-gradient-to-b from-[#1f2933] to-[#374151]">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4">
            <nav className="flex h-11 items-stretch gap-6 text-sm font-medium text-white">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="flex items-center border-b-2 border-transparent px-1 text-white/90 transition hover:border-white/60 hover:text-white"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      </div> */}

      {/* <div className="">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4">
            <nav className="flex h-11 items-stretch gap-6 text-sm font-medium text-white">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="flex items-center border-b-2 border-transparent px-1 text-white/90 transition hover:border-white/60 hover:text-white"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      </div> */}
    </header>
  );
}
