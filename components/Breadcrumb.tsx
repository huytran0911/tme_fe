"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import type { ComponentProps } from "react";

function HomeIcon(props: ComponentProps<"svg">) {
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
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  homeLabel?: string;
  className?: string;
}

export default function Breadcrumb({ items, homeLabel = "Trang chủ", className = "" }: BreadcrumbProps) {
  const locale = useLocale();

  return (
    <nav className={`flex items-center text-sm ${className}`}>
      <Link
        href={`/${locale}`}
        className="flex items-center gap-1 text-orange-500 hover:underline"
      >
        <HomeIcon className="h-3.5 w-3.5" />
        <span>{homeLabel}</span>
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          <span className="mx-1.5 text-slate-400">&gt;</span>
          {item.href ? (
            <Link href={item.href} className="text-orange-500 hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-600">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
