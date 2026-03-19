"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import type { ApiError } from "@/lib/httpClient";
import { login } from "@/lib/api/auth";
import { useAuth } from "@/contexts/AuthContext";
import { useCartContext } from "@/contexts/CartContext";

export default function LoginForm() {
  const router = useRouter();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const t = useTranslations("Auth.login");
  const { refreshAuthState } = useAuth();
  const { invalidateCart } = useCartContext();

  // Get return URL from query params
  const returnUrl = searchParams.get("returnUrl");

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    if (!userName || !password) {
      setErrorMessage(t("errors.loginMissing"));
      return;
    }

    setLoading(true);
    try {
      const res = await login({ userName, password });
      if (!res.success || !res.data?.accessToken) {
        const errMsg = res.error?.message ?? res.data?.errorMessage;
        const message = typeof errMsg === "string" ? errMsg : t("errors.loginFail");
        setErrorMessage(message);
        return;
      }

      refreshAuthState();
      // Refresh cart data after login
      invalidateCart();
      // Redirect to return URL if provided, otherwise go to home
      const redirectTo = returnUrl ? decodeURIComponent(returnUrl) : `/${locale}`;
      router.push(redirectTo);
    } catch (error) {
      const err = error as ApiError;
      const message = typeof err.message === "string" ? err.message : t("errors.loginFail");
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="space-y-6">
      <div className="text-sm text-slate-600">{t("breadcrumb")}</div>
      <div className="max-w-xl space-y-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-slate-800">{t("title")}</h1>
          <p className="text-sm text-slate-600">{t("subtitle")}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-slate-200 bg-white/90 p-6 shadow-sm"
        >
          {errorMessage && (
            <p className="mb-2 text-sm text-red-600">
              {errorMessage}
            </p>
          )}

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              {t("identifierLabel")}
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={t("identifierPlaceholder")}
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <label htmlFor="password" className="font-medium text-slate-700">
                {t("passwordLabel")}
              </label>
              <Link href="#" className="text-primary hover:text-primary-dark">
                {t("forgotPassword")}
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="********"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/30"
                defaultChecked
              />
              {t("rememberMe")}
            </label>
            <div className="text-xs text-slate-500">{t("rememberHint")}</div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-80"
          >
            {loading ? t("submitting") : t("submit")}
          </button>

          <p className="text-center text-sm text-slate-600">
            {t("signupPrompt")}{" "}
            <Link
              href={`/${locale}/auth/register`}
              className="font-semibold text-primary hover:text-primary-dark"
            >
              {t("signupLink")}
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
