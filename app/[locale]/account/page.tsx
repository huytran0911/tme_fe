"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useAuth } from "@/contexts/AuthContext";
import { useProfile } from "@/hooks/useProfile";
import { changePassword, updateProfile } from "@/lib/api/auth";
import { useQueryClient } from "@tanstack/react-query";
import MainLayout from "@/components/MainLayout";
import AccountSidebar from "@/components/account/AccountSidebar";

// ── Toast ────────────────────────────────────────────────────────────────────

function Toast({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed bottom-6 right-6 z-[60] animate-[slide-up_0.3s_ease-out]">
            <div className={`flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-medium shadow-lg ${type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"}`}>
                {type === "success" ? (
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                ) : (
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                )}
                {message}
                <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

// ── Profile Info Card ────────────────────────────────────────────────────────

function ProfileInfoCard({ onToast }: { onToast: (msg: string, type: "success" | "error") => void }) {
    const locale = useLocale();
    const t = useTranslations("AccountProfile");
    const { data: profile, isLoading } = useProfile();
    const queryClient = useQueryClient();

    const [editing, setEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });

    useEffect(() => {
        if (profile) {
            setForm({
                name: profile.name || "",
                email: profile.email || "",
                phone: profile.phone || "",
                company: profile.company || "",
            });
        }
    }, [profile]);

    const handleEdit = () => setEditing(true);

    const handleCancel = () => {
        setEditing(false);
        if (profile) {
            setForm({
                name: profile.name || "",
                email: profile.email || "",
                phone: profile.phone || "",
                company: profile.company || "",
            });
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await updateProfile({
                name: form.name || null,
                email: form.email || null,
                phone: form.phone || null,
                company: form.company || null,
            });
            if (res.success) {
                onToast(t("updateSuccess"), "success");
                setEditing(false);
                queryClient.invalidateQueries({ queryKey: ["customer-profile"] });
            } else {
                onToast(res.error?.message || t("updateError"), "error");
            }
        } catch {
            onToast(t("updateError"), "error");
        } finally {
            setSaving(false);
        }
    };

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return null;
        try {
            return new Date(dateStr).toLocaleDateString(locale === "vi" ? "vi-VN" : "en-US", {
                day: "2-digit", month: "2-digit", year: "numeric",
            });
        } catch { return dateStr; }
    };

    if (isLoading) {
        return (
            <div className="rounded-xl border border-slate-200 bg-white/90 p-6 shadow-sm">
                <div className="mb-4 h-5 w-48 animate-pulse rounded bg-slate-200" />
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-10 animate-pulse rounded bg-slate-100" />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-xl border border-slate-200 bg-white/90 p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-800">{t("title")}</h2>
                {!editing ? (
                    <button
                        onClick={handleEdit}
                        className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-primary hover:text-primary"
                    >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z" /></svg>
                        {t("edit")}
                    </button>
                ) : (
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleCancel}
                            disabled={saving}
                            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
                        >
                            {t("cancel")}
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="rounded-lg bg-primary px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-50"
                        >
                            {saving ? t("saving") : t("save")}
                        </button>
                    </div>
                )}
            </div>

            <div className="space-y-4">
                {/* Username - always read-only */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">{t("username")}</label>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                        {profile?.username || <span className="italic text-slate-400">{t("notProvided")}</span>}
                    </div>
                </div>

                {/* Editable fields */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {editing ? (
                        <>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slate-700">{t("fullName")}</label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slate-700">{t("email")}</label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slate-700">{t("phone")}</label>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slate-700">{t("company")}</label>
                                <input
                                    type="text"
                                    value={form.company}
                                    onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
                                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slate-700">{t("fullName")}</label>
                                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                                    {profile?.name || <span className="italic text-slate-400">{t("notProvided")}</span>}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slate-700">{t("email")}</label>
                                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                                    {profile?.email || <span className="italic text-slate-400">{t("notProvided")}</span>}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slate-700">{t("phone")}</label>
                                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                                    {profile?.phone || <span className="italic text-slate-400">{t("notProvided")}</span>}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slate-700">{t("company")}</label>
                                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                                    {profile?.company || <span className="italic text-slate-400">{t("notProvided")}</span>}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Member since - always read-only */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">{t("memberSince")}</label>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                        {formatDate(profile?.dateAdded ?? null) || <span className="italic text-slate-400">{t("notProvided")}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Change Password Form ─────────────────────────────────────────────────────

function ChangePasswordForm({ onToast }: { onToast: (msg: string, type: "success" | "error") => void }) {
    const t = useTranslations("AccountProfile");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!currentPassword || !newPassword || !confirmPassword) {
            onToast(t("changePassword.required"), "error");
            return;
        }
        if (newPassword.length < 6) {
            onToast(t("changePassword.tooShort"), "error");
            return;
        }
        if (newPassword !== confirmPassword) {
            onToast(t("changePassword.mismatch"), "error");
            return;
        }

        setSubmitting(true);
        try {
            const res = await changePassword({ currentPassword, newPassword });
            if (res.success) {
                onToast(t("changePassword.success"), "success");
                setCurrentPassword("");
                setNewPassword("");
                setConfirmPassword("");
            } else {
                onToast(res.error?.message || t("changePassword.error"), "error");
            }
        } catch {
            onToast(t("changePassword.error"), "error");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="rounded-xl border border-slate-200 bg-white/90 p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">{t("changePassword.title")}</h2>

            <form onSubmit={handleSubmit} className="max-w-md space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">{t("changePassword.currentPassword")}</label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        autoComplete="current-password"
                        placeholder="********"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">{t("changePassword.newPassword")}</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        autoComplete="new-password"
                        placeholder="********"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">{t("changePassword.confirmPassword")}</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        autoComplete="new-password"
                        placeholder="********"
                    />
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-80"
                >
                    {submitting ? t("changePassword.submitting") : t("changePassword.submit")}
                </button>
            </form>
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AccountProfilePage() {
    const locale = useLocale();
    const router = useRouter();
    const t = useTranslations("AccountProfile");
    const tCommon = useTranslations("Common");
    const { isAuthenticated, isLoading: authLoading } = useAuth();
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

    const showToast = useCallback((message: string, type: "success" | "error") => {
        setToast({ message, type });
    }, []);

    // Auth guard
    useEffect(() => {
        if (!authLoading && !isAuthenticated) {
            const returnUrl = encodeURIComponent(`/${locale}/account`);
            router.replace(`/${locale}/auth/login?returnUrl=${returnUrl}`);
        }
    }, [authLoading, isAuthenticated, router, locale]);

    if (authLoading || !isAuthenticated) {
        return (
            <MainLayout>
                <div className="flex min-h-[50vh] items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <style>{`@keyframes slide-up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>

            <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-slate-600">
                    <a href={`/${locale}`} className="transition hover:text-primary">{tCommon("home")}</a>
                    <span className="mx-2">/</span>
                    <span className="text-slate-800">{t("breadcrumb")}</span>
                </nav>

                {/* Layout */}
                <div className="flex flex-col gap-6 lg:flex-row">
                    <AccountSidebar />

                    {/* Main content */}
                    <div className="min-w-0 flex-1 space-y-6">
                        <ProfileInfoCard onToast={showToast} />
                        <ChangePasswordForm onToast={showToast} />
                    </div>
                </div>
            </div>

            {/* Toast */}
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </MainLayout>
    );
}
