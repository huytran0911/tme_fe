"use client";

import { useEffect, useState, useMemo, useRef, type ComponentProps, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getContentByCode } from "@/lib/api/content";
import { uploadFile } from "@/lib/api/upload";
import { submitContactForm, type ContactFormRequest } from "@/lib/api/contact";
import { useOnlineSupport, extractDepartmentKey, type OnlineSupportItem } from "@/lib/api/onlineSupport";
import Breadcrumb from "@/components/Breadcrumb";
import { CONTENT_CODES } from "@/lib/constants/contentCodes";
import { buildImageUrl } from "@/lib/utils";

interface ContentState {
  title: string;
  html: string;
}

// Icons - defined outside component
function PhoneIcon(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SendIcon(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  );
}

function UploadIcon(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

// CSS classes - defined outside component
const INPUT_CLASS = "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100";
const LABEL_CLASS = "mb-1 block text-sm font-medium text-slate-700";

export default function ContactContentClient() {
  const locale = useLocale();
  const t = useTranslations("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  // Content state - only for API content
  const [content, setContent] = useState<ContentState>({ title: "", html: "" });
  const [loading, setLoading] = useState(false);

  // Form submission state only - no input tracking
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // File state - only for display
  const [fileName, setFileName] = useState<string | null>(null);
  const fileRef = useRef<File | null>(null);

  // Fetch departments with React Query caching
  const { data: departments = [], isLoading: loadingDepartments } = useOnlineSupport();

  // Fetch content on mount
  useEffect(() => {
    let mounted = true;
    const lang = locale === "vi" ? "vn" : locale;
    setLoading(true);

    getContentByCode(CONTENT_CODES.CONTACT_INFO, lang)
      .then((res) => {
        if (!mounted || !res) return;
        const html = res.content
          ? res.content.replace(/src=["']([^"']+)["']/gi, (match, src) => {
              const trimmed = src.trim();
              if (/^(https?:)?\/\//i.test(trimmed) || trimmed.startsWith("data:")) return match;
              return `src="${buildImageUrl(trimmed)}"`;
            })
          : "";
        setContent({ title: res.name || "", html });
      })
      .catch(() => {
        if (!mounted) return;
        setContent((prev) => ({
          ...prev,
          html: prev.html || `<p>${t("loadError")}</p>`,
        }));
      })
      .finally(() => mounted && setLoading(false));

    return () => { mounted = false; };
  }, [locale, t]);

  // Department label helper
  const getDepartmentLabel = (item: OnlineSupportItem): string => {
    const key = extractDepartmentKey(item.name);
    if (key) {
      try {
        return t(`form.departments.${key}` as Parameters<typeof t>[0]);
      } catch {
        return item.name.replace(/[{}]/g, "");
      }
    }
    return item.name;
  };

  // Department options - memoized
  const departmentOptions = useMemo(
    () => [
      { id: "placeholder", value: "", label: t("form.departmentPlaceholder") },
      ...departments.map((item) => ({
        id: String(item.id),
        value: item.email,
        label: getDepartmentLabel(item),
      })),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [departments, locale]
  );

  // Features - memoized
  const features = useMemo(
    () => [
      { icon: PhoneIcon, title: t("features.phone.title"), desc: t("features.phone.desc"), color: "text-orange-500", bg: "bg-orange-50" },
      { icon: MailIcon, title: t("features.email.title"), desc: t("features.email.desc"), color: "text-blue-500", bg: "bg-blue-50" },
      { icon: MapPinIcon, title: t("features.address.title"), desc: t("features.address.desc"), color: "text-emerald-500", bg: "bg-emerald-50" },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale]
  );

  // File change handler - only updates file display, no form re-render
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 2 * 1024 * 1024) {
      alert(t("form.fileTooLarge"));
      e.target.value = "";
      return;
    }
    fileRef.current = file;
    setFileName(file?.name || null);
  };

  // Form submit - reads values directly from form
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    setSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage(null);

    // Log form data
    console.log("=== Contact Form Data ===");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    console.log("=========================");

    try {
      let filePath: string | null = null;

      // Upload file if exists
      if (fileRef.current) {
        const uploadRes = await uploadFile(fileRef.current, "contact");
        if (!uploadRes.success || !uploadRes.data?.path) {
          setErrorMessage(uploadRes.error?.message || t("form.uploadError"));
          setSubmitStatus("error");
          setSubmitting(false);
          return;
        }
        filePath = uploadRes.data.path;
      }

      // Build request
      const contactRequest: ContactFormRequest = {
        department: formData.get("department") as string,
        fullName: formData.get("fullName") as string,
        position: (formData.get("position") as string) || undefined,
        company: (formData.get("company") as string) || undefined,
        address: (formData.get("address") as string) || undefined,
        email: formData.get("email") as string,
        website: (formData.get("website") as string) || undefined,
        phone: formData.get("phone") as string,
        mobile: (formData.get("mobile") as string) || undefined,
        fax: (formData.get("fax") as string) || undefined,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
        filePath,
      };

      console.log("=== API Request ===");
      console.log(JSON.stringify(contactRequest, null, 2));

      const res = await submitContactForm(contactRequest);

      if (!res.success) {
        setErrorMessage(res.error?.message || t("form.errorMessage"));
        setSubmitStatus("error");
        return;
      }

      // Success - reset form
      setSubmitStatus("success");
      formRef.current.reset();
      fileRef.current = null;
      setFileName(null);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : t("form.errorMessage"));
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full px-4 py-8 lg:px-0">
      {/* Header Section */}
      <header className="mb-8">
        <Breadcrumb homeLabel={t("breadcrumb")} items={[{ label: t("title") }]} className="mb-4" />

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-8 text-white shadow-lg">
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="contact-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#contact-grid)" />
            </svg>
          </div>
          <div className="relative">
            <div className="mb-2 h-1 w-16 rounded-full bg-white/50" />
            <h1 className="text-2xl font-bold tracking-wide sm:text-3xl">{t("title")}</h1>
            <p className="mt-2 text-base text-white/90 sm:text-lg">{t("subtitle")}</p>
            <div className="mt-2 h-1 w-24 rounded-full bg-white/50" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center rounded-xl border border-slate-100 bg-white p-3 shadow-sm sm:flex-row sm:gap-3 sm:p-4">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${feature.bg} ${feature.color} sm:h-12 sm:w-12`}>
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="mt-2 text-center sm:mt-0 sm:text-left">
                <p className="text-sm font-semibold text-slate-800 sm:text-base">{feature.title}</p>
                <p className="hidden text-xs text-slate-500 sm:block">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* Content from API */}
      <section className="mb-8">
        {loading ? (
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-6 text-sm text-slate-600 shadow-sm">
            {t("loading")}
          </div>
        ) : (
          <article
            className="prose max-w-none prose-sm sm:prose-base prose-slate prose-headings:text-slate-800 prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: content.html }}
          />
        )}
      </section>

      {/* Contact Form - Uncontrolled inputs for performance */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-slate-800">{t("form.title")}</h2>
        <p className="mb-6 text-sm text-slate-500">{t("form.description")}</p>

        {submitStatus === "success" && (
          <div className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {t("form.successMessage")}
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage || t("form.errorMessage")}
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* Department */}
          <div>
            <label htmlFor="department" className={LABEL_CLASS}>
              {t("form.department")} <span className="text-red-500">*</span>
            </label>
            <select id="department" name="department" className={INPUT_CLASS} required disabled={loadingDepartments}>
              {loadingDepartments ? (
                <option value="">{t("form.loadingDepartments")}</option>
              ) : (
                departmentOptions.map((d) => (
                  <option key={d.id} value={d.value}>{d.label}</option>
                ))
              )}
            </select>
          </div>

          {/* Full Name & Position */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className={LABEL_CLASS}>
                {t("form.fullName")} <span className="text-red-500">*</span>
              </label>
              <input type="text" id="fullName" name="fullName" placeholder={t("form.fullNamePlaceholder")} className={INPUT_CLASS} required />
            </div>
            <div>
              <label htmlFor="position" className={LABEL_CLASS}>{t("form.position")}</label>
              <input type="text" id="position" name="position" placeholder={t("form.positionPlaceholder")} className={INPUT_CLASS} />
            </div>
          </div>

          {/* Company & Address */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className={LABEL_CLASS}>{t("form.company")}</label>
              <input type="text" id="company" name="company" placeholder={t("form.companyPlaceholder")} className={INPUT_CLASS} />
            </div>
            <div>
              <label htmlFor="address" className={LABEL_CLASS}>{t("form.address")}</label>
              <input type="text" id="address" name="address" placeholder={t("form.addressPlaceholder")} className={INPUT_CLASS} />
            </div>
          </div>

          {/* Email & Website */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className={LABEL_CLASS}>
                {t("form.email")} <span className="text-red-500">*</span>
              </label>
              <input type="email" id="email" name="email" placeholder={t("form.emailPlaceholder")} className={INPUT_CLASS} required />
            </div>
            <div>
              <label htmlFor="website" className={LABEL_CLASS}>{t("form.website")}</label>
              <input type="url" id="website" name="website" placeholder={t("form.websitePlaceholder")} className={INPUT_CLASS} />
            </div>
          </div>

          {/* Phone & Mobile & Fax */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="phone" className={LABEL_CLASS}>
                {t("form.phone")} <span className="text-red-500">*</span>
              </label>
              <input type="tel" id="phone" name="phone" placeholder={t("form.phonePlaceholder")} className={INPUT_CLASS} required />
            </div>
            <div>
              <label htmlFor="mobile" className={LABEL_CLASS}>{t("form.mobile")}</label>
              <input type="tel" id="mobile" name="mobile" placeholder={t("form.mobilePlaceholder")} className={INPUT_CLASS} />
            </div>
            <div>
              <label htmlFor="fax" className={LABEL_CLASS}>{t("form.fax")}</label>
              <input type="tel" id="fax" name="fax" placeholder={t("form.faxPlaceholder")} className={INPUT_CLASS} />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className={LABEL_CLASS}>
              {t("form.subject")} <span className="text-red-500">*</span>
            </label>
            <input type="text" id="subject" name="subject" placeholder={t("form.subjectPlaceholder")} className={INPUT_CLASS} required />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={LABEL_CLASS}>
              {t("form.message")} <span className="text-red-500">*</span>
            </label>
            <textarea id="message" name="message" placeholder={t("form.messagePlaceholder")} className={`${INPUT_CLASS} min-h-[120px] resize-y`} required />
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="file" className={LABEL_CLASS}>{t("form.file")}</label>
            <div className="flex items-center gap-3">
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
                <UploadIcon className="h-4 w-4" />
                {t("form.chooseFile")}
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  accept=".doc,.docx,.xls,.xlsx,.gif,.jpg,.jpeg,.png,.zip,.rar,.pdf"
                  className="hidden"
                />
              </label>
              <span className="text-sm text-slate-500">{fileName || t("form.noFileChosen")}</span>
            </div>
            <p className="mt-1 text-xs text-slate-400">{t("form.fileHint")}</p>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              <SendIcon className="h-4 w-4" />
              {submitting ? t("form.submitting") : t("form.submit")}
            </button>
          </div>

          <p className="text-xs text-slate-400">
            <span className="text-red-500">*</span> {t("form.requiredNote")}
          </p>
        </form>
      </section>
    </div>
  );
}
