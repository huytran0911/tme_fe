"use client";

import { useTranslations } from "next-intl";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function buildPageList(current: number, total: number, delta = 2) {
  const pages: number[] = [];
  const start = Math.max(1, current - delta);
  const end = Math.min(total, current + delta);
  for (let i = start; i <= end; i += 1) {
    pages.push(i);
  }
  if (!pages.includes(1)) pages.unshift(1);
  if (!pages.includes(total)) pages.push(total);
  return Array.from(new Set(pages));
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const t = useTranslations("Pagination");

  if (totalPages <= 1) return null;

  const pages = buildPageList(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center gap-2 py-4 text-sm text-slate-700">
      <button
        className="rounded-lg border border-slate-200 px-3 py-1 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        {t("previous")}
      </button>

      {pages.map((page, idx) => {
        const prev = pages[idx - 1];
        const showDots = prev && page - prev > 1;
        return (
          <span key={page} className="flex items-center">
            {showDots ? <span className="px-1 text-slate-400">…</span> : null}
            <button
              onClick={() => onPageChange(page)}
              className={`rounded-lg px-3 py-1 transition ${
                page === currentPage
                  ? "bg-primary text-white"
                  : "border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {page}
            </button>
          </span>
        );
      })}

      <button
        className="rounded-lg border border-slate-200 px-3 py-1 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        {t("next")}
      </button>
    </div>
  );
}
