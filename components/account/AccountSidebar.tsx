"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useAuth } from "@/contexts/AuthContext";
import { useMemo } from "react";

const menuItems = [
    {
        key: "profile",
        href: "/account",
        icon: (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
        ),
    },
    {
        key: "orders",
        href: "/account/orders",
        icon: (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
        ),
    },
    {
        key: "wishlist",
        href: "/account/wishlist",
        icon: (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
    },
    {
        key: "addresses",
        href: "/account/addresses",
        icon: (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
    },
];

export default function AccountSidebar() {
    const locale = useLocale();
    const pathname = usePathname() || "";
    const t = useTranslations("Account");
    const { user } = useAuth();

    const initials = useMemo(() => {
        if (!user?.userName) return "U";
        const parts = user.userName.split(" ");
        if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "U";
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }, [user]);

    const isActive = (href: string) => {
        const fullHref = `/${locale}${href}`;
        if (href === "/account") {
            return pathname === fullHref;
        }
        return pathname === fullHref || pathname.startsWith(`${fullHref}/`);
    };

    return (
        <aside className="w-full lg:w-56 shrink-0">
            {/* User Info */}
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-sm font-bold text-white shadow-inner">
                    {initials}
                </span>
                <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold text-slate-900">
                        {user?.userName || "User"}
                    </div>
                    <div className="text-xs text-slate-500">{t("memberLabel")}</div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                {/* Desktop: vertical list */}
                <div className="hidden lg:block">
                    {menuItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.key}
                                href={`/${locale}${item.href}`}
                                className={`flex items-center gap-3 px-4 py-3 text-sm transition border-l-2 ${active
                                        ? "border-primary bg-orange-50 text-primary font-medium"
                                        : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    }`}
                            >
                                <span className={active ? "text-primary" : "text-slate-400"}>
                                    {item.icon}
                                </span>
                                {t(`menu.${item.key}`)}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile: horizontal tabs */}
                <div className="flex lg:hidden overflow-x-auto">
                    {menuItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.key}
                                href={`/${locale}${item.href}`}
                                className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-3 text-xs font-medium transition border-b-2 ${active
                                        ? "border-primary text-primary"
                                        : "border-transparent text-slate-500 hover:text-slate-700"
                                    }`}
                            >
                                <span className={active ? "text-primary" : "text-slate-400"}>
                                    {item.icon}
                                </span>
                                {t(`menu.${item.key}`)}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </aside>
    );
}
