"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import type { RegisterFormValues } from "@/types/auth";
import type { ApiError } from "@/lib/httpClient";
import { register as registerApi, type RegisterCustomerRequest } from "@/lib/api/auth";

const defaultValues: RegisterFormValues = {
  fullName: "",
  company: "",
  address: "",
  gender: "Nam",
  city: "",
  country: "Viet Nam",
  phone: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const citiesVi = ["Hà Nội", "TP.HCM", "Đà Nẵng", "Cần Thơ", "Hải Phòng", "Khác"];
const citiesEn = ["Hanoi", "Ho Chi Minh City", "Da Nang", "Can Tho", "Hai Phong", "Other"];
const countriesVi = ["Việt Nam", "Singapore", "Hoa Kỳ", "Nhật Bản", "Hàn Quốc", "Khác"];
const countriesEn = ["Vietnam", "Singapore", "United States", "Japan", "South Korea", "Other"];

type Errors = Partial<Record<keyof RegisterFormValues, string>>;

function getPasswordScore(password: string) {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  return Math.min(score, 4);
}

function strengthColor(score: number) {
  if (score <= 1) return "bg-red-400";
  if (score === 2) return "bg-amber-400";
  if (score === 3) return "bg-lime-500";
  return "bg-emerald-600";
}

export default function RegisterForm() {
  const locale = useLocale();
  const t = useTranslations("Auth.register");
  const tRegister = useTranslations("Register");
  const [values, setValues] = useState<RegisterFormValues>(defaultValues);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const cities = locale === "vi" ? citiesVi : citiesEn;
  const countries = locale === "vi" ? countriesVi : countriesEn;

  const passwordScore = useMemo(() => getPasswordScore(values.password), [values.password]);
  const passwordPercent = (passwordScore / 4) * 100;

  const handleChange = (field: keyof RegisterFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): Errors => {
    const nextErrors: Errors = {};
    if (!values.fullName.trim()) nextErrors.fullName = t("errors.registerFail");
    if (!values.address.trim()) nextErrors.address = t("errors.registerFail");
    if (!values.city.trim()) nextErrors.city = t("errors.registerFail");
    if (!values.country.trim()) nextErrors.country = t("errors.registerFail");

    if (!/^[0-9]{9,11}$/.test(values.phone)) {
      nextErrors.phone = t("errors.registerFail");
    }

    if (!values.email || !/^[\w.-]+@([\w-]+\.)+[\w-]{2,}$/i.test(values.email)) {
      nextErrors.email = t("errors.registerFail");
    }

    if (!values.username || values.username.length < 4 || /\s/.test(values.username)) {
      nextErrors.username = t("errors.registerFail");
    }

    if (values.password.length < 6) {
      nextErrors.password = t("errors.registerFail");
    }

    if (values.password !== values.confirmPassword) {
      nextErrors.confirmPassword = t("errors.passwordMismatch");
    }

    return nextErrors;
  };

  // Map gender string to sex number: Nam=0, Nu=1, Khac=2
  const mapGenderToSex = (gender: string): number => {
    switch (gender) {
      case "Nam":
        return 0;
      case "Nu":
        return 1;
      default:
        return 2;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      // Map form values to API request
      const request: RegisterCustomerRequest = {
        username: values.username,
        password: values.password,
        name: values.fullName,
        email: values.email,
        sex: mapGenderToSex(values.gender),
        company: values.company || null,
        address: values.address || null,
        city: values.city || null,
        country: values.country || null,
        phone: values.phone || null,
      };

      const response = await registerApi(request);

      if (response.success && response.data?.success) {
        setSuccessMessage(t("success"));
        // Reset form after success
        setValues(defaultValues);
      } else {
        // Handle API error
        const errorMsg =
          response.data?.errorMessage ||
          response.error?.message ||
          t("errors.registerFail");
        setErrorMessage(errorMsg);
      }
    } catch (error) {
      const err = error as ApiError;
      setErrorMessage(err.message || t("errors.registerFail"));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setValues(defaultValues);
    setErrors({});
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  return (
    <section className="space-y-6">
      <div className="text-sm text-slate-600">{t("breadcrumb")}</div>
      <div className="space-y-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-slate-800">{t("title")}</h1>
          <p className="text-sm text-slate-600">{t("subtitle")}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
          className="space-y-6 rounded-xl border border-slate-200 bg-white/95 p-6 shadow-sm"
        >
          {errorMessage && (
            <p className="mb-2 text-sm text-red-600">
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className="mb-2 text-sm text-emerald-600">
              {successMessage}
            </p>
          )}

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-slate-800">{t("sections.personal")}</h2>
                <p className="text-sm text-slate-500">{t("sections.personalNote")}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t("labels.fullName")} error={errors.fullName}>
                <input
                  value={values.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t("placeholders.fullName")}
                />
              </Field>
              <Field label={t("labels.company")}>
                <input
                  value={values.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t("placeholders.company")}
                />
              </Field>
            </div>

            <Field label={t("labels.address")} error={errors.address}>
              <input
                value={values.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder={t("placeholders.address")}
              />
            </Field>

            <div className="grid gap-4 sm:grid-cols-3">
              <Field label={t("labels.gender")} error={errors.gender}>
                <select
                  value={values.gender}
                  onChange={(e) => handleChange("gender", e.target.value as RegisterFormValues["gender"])}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="Nam">{tRegister("genders.male")}</option>
                  <option value="Nu">{tRegister("genders.female")}</option>
                  <option value="Khac">{tRegister("genders.other")}</option>
                </select>
              </Field>

              <Field label={t("labels.city")} error={errors.city}>
                <select
                  value={values.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">{tRegister("selectCity")}</option>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label={t("labels.country")} error={errors.country}>
                <select
                  value={values.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-base font-semibold text-slate-800">{t("sections.contact")}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t("labels.phone")} error={errors.phone}>
                <input
                  value={values.phone}
                  onChange={(e) => handleChange("phone", e.target.value.replace(/[^0-9]/g, ""))}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t("placeholders.phone")}
                  inputMode="numeric"
                />
              </Field>
              <Field label={t("labels.email")} error={errors.email}>
                <input
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t("placeholders.email")}
                  type="email"
                />
              </Field>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-base font-semibold text-slate-800">{t("sections.access")}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t("labels.username")} error={errors.username}>
                <input
                  value={values.username}
                  onChange={(e) => handleChange("username", e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t("placeholders.username")}
                />
              </Field>
              <div className="space-y-2 rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm text-slate-600">
                <div>{t("requirements.title")}</div>
                <ul className="list-disc pl-5">
                  <li>{t("requirements.noSpace")}</li>
                  <li>{t("requirements.minChars")}</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t("labels.password")} error={errors.password}>
                <input
                  value={values.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t("placeholders.password")}
                  type="password"
                />
                <div className="mt-2 space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>{t("passwordStrength")}</span>
                    <span>{passwordPercent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div
                      className={`h-2 rounded-full transition-all ${strengthColor(passwordScore)}`}
                      style={{ width: `${passwordPercent}%` }}
                    />
                  </div>
                </div>
              </Field>

              <Field label={t("labels.confirmPassword")} error={errors.confirmPassword}>
                <input
                  value={values.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t("placeholders.confirmPassword")}
                  type="password"
                />
              </Field>
            </div>
          </section>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-80"
            >
              {loading ? t("submitting") : t("submit")}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              {t("reset")}
            </button>
            <div className="text-sm text-slate-600">
              {t("loginPrompt")}{" "}
              <Link
                href={`/${locale}/auth/login`}
                className="font-semibold text-primary hover:text-primary-dark"
              >
                {t("loginLink")}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      {children}
      {error ? <div className="text-xs text-red-500">{error}</div> : null}
    </label>
  );
}
