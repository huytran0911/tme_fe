"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import MainLayout from "@/components/MainLayout";
import AccountSidebar from "@/components/account/AccountSidebar";
import { useAuth } from "@/contexts/AuthContext";
import { useProfile } from "@/hooks/useProfile";
import {
    useAddresses,
    useDeleteAddress,
    useSetDefaultAddress,
} from "@/hooks/useAddresses";
import AddressFormModal from "@/components/address/AddressFormModal";
import type { AddressListItem } from "@/lib/api/addresses";

// ============================================================================
// Address Card Component
// ============================================================================

function AddressCard({
    address,
    onEdit,
    onDelete,
    onSetDefault,
    isSettingDefault,
}: {
    address: AddressListItem;
    onEdit: () => void;
    onDelete: () => void;
    onSetDefault: () => void;
    isSettingDefault: boolean;
}) {
    const t = useTranslations("Addresses");

    return (
        <div
            className={`group relative rounded-xl border bg-white p-5 transition-all hover:shadow-md ${address.isDefault ? "border-primary/40 ring-1 ring-primary/10" : "border-slate-200"
                }`}
        >
            {/* Default badge */}
            {address.isDefault && (
                <span className="absolute -top-2.5 left-4 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white shadow-sm">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {t("card.default")}
                </span>
            )}

            {/* Content */}
            <div className="mb-4 min-h-[60px]">
                <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-sm font-semibold text-slate-900">
                        {address.addressName || "—"}
                    </h3>
                    {address.addressType === 2 ? (
                        <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-medium text-blue-700">
                            {t("card.badge2Level")}
                        </span>
                    ) : (
                        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">
                            {t("card.badge3Level")}
                        </span>
                    )}
                </div>
                {address.recipientName && (
                    <p className="text-sm text-slate-700">
                        {address.recipientName}
                        {address.phone && <span className="text-slate-400"> · {address.phone}</span>}
                    </p>
                )}
                {!address.recipientName && address.phone && (
                    <p className="text-sm text-slate-500">{address.phone}</p>
                )}
                <p className="text-sm leading-relaxed text-slate-500 mt-0.5">
                    {address.fullAddress || "—"}
                </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 border-t border-slate-100 pt-3">
                {!address.isDefault && (
                    <button
                        onClick={onSetDefault}
                        disabled={isSettingDefault}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:border-primary hover:text-primary disabled:opacity-50"
                    >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        {t("card.setDefault")}
                    </button>
                )}
                <div className="flex-1" />
                <button
                    onClick={onEdit}
                    className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-blue-50"
                >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    {t("card.edit")}
                </button>
                <button
                    onClick={onDelete}
                    className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-red-500 transition hover:bg-red-50"
                >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    {t("card.delete")}
                </button>
            </div>
        </div>
    );
}



// ============================================================================
// Delete Confirm Dialog
// ============================================================================

function DeleteConfirmDialog({
    onConfirm,
    onCancel,
    isDeleting,
}: {
    onConfirm: () => void;
    onCancel: () => void;
    isDeleting: boolean;
}) {
    const t = useTranslations("Addresses");

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onCancel}>
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
            <div
                className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>
                <h3 className="mb-2 text-base font-bold text-slate-900">{t("deleteConfirm.title")}</h3>
                <p className="mb-6 text-sm text-slate-500">{t("deleteConfirm.message")}</p>
                <div className="flex gap-3">
                    <button
                        onClick={onCancel}
                        className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                    >
                        {t("deleteConfirm.cancel")}
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={isDeleting}
                        className="flex-1 rounded-lg bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 disabled:opacity-50"
                    >
                        {isDeleting ? "..." : t("deleteConfirm.confirm")}
                    </button>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// Toast Notification
// ============================================================================

function Toast({
    message,
    type,
    onClose,
}: {
    message: string;
    type: "success" | "error";
    onClose: () => void;
}) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed bottom-6 right-6 z-[60] animate-slide-up">
            <div
                className={`flex items-center gap-3 rounded-xl px-5 py-3.5 text-sm font-medium shadow-lg ${type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                    }`}
            >
                {type === "success" ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

// ============================================================================
// Loading Skeleton
// ============================================================================

function AddressCardSkeleton() {
    return (
        <div className="animate-pulse rounded-xl border border-slate-100 bg-white p-5">
            <div className="mb-3 h-4 w-24 rounded bg-slate-200" />
            <div className="mb-2 h-3 w-full rounded bg-slate-100" />
            <div className="mb-4 h-3 w-3/4 rounded bg-slate-100" />
            <div className="flex gap-2 border-t border-slate-50 pt-3">
                <div className="h-7 w-20 rounded-lg bg-slate-100" />
                <div className="flex-1" />
                <div className="h-7 w-14 rounded-lg bg-slate-100" />
                <div className="h-7 w-14 rounded-lg bg-slate-100" />
            </div>
        </div>
    );
}

// ============================================================================
// Main Page
// ============================================================================

export default function AddressesPage() {
    const locale = useLocale();
    const router = useRouter();
    const t = useTranslations("Addresses");
    const tCommon = useTranslations("Common");
    const { isAuthenticated, isLoading: authLoading } = useAuth();
    const { data: profile } = useProfile();

    // Address data
    const { data: addresses, isLoading, error, refetch } = useAddresses();
    const setDefaultMutation = useSetDefaultAddress();
    const deleteMutation = useDeleteAddress();

    // UI state
    const [modalMode, setModalMode] = useState<"add" | "edit" | null>(null);
    const [editingAddress, setEditingAddress] = useState<AddressListItem | null>(null);
    const [deletingAddress, setDeletingAddress] = useState<AddressListItem | null>(null);
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

    // Auth redirect
    useEffect(() => {
        if (!authLoading && !isAuthenticated) {
            router.replace(`/${locale}/auth/login`);
        }
    }, [authLoading, isAuthenticated, router, locale]);

    const showToast = useCallback((message: string, type: "success" | "error" = "success") => {
        setToast({ message, type });
    }, []);

    // Actions
    const handleSetDefault = async (address: AddressListItem) => {
        try {
            await setDefaultMutation.mutateAsync(address.id);
            showToast(t("toast.setDefaultSuccess"));
        } catch {
            showToast(t("toast.error"), "error");
        }
    };

    const handleDelete = async () => {
        if (!deletingAddress) return;
        try {
            await deleteMutation.mutateAsync(deletingAddress.id);
            showToast(t("toast.deleteSuccess"));
            setDeletingAddress(null);
        } catch {
            showToast(t("toast.error"), "error");
        }
    };

    const handleFormSuccess = () => {
        showToast(modalMode === "add" ? t("toast.createSuccess") : t("toast.updateSuccess"));
        setModalMode(null);
        setEditingAddress(null);
    };

    // Don't render if not authenticated yet
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
            {/* Custom animation for toast */}
            <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
      `}</style>

            <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-slate-500">
                    <a href={`/${locale}`} className="hover:text-primary transition">{tCommon("home")}</a>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900 font-medium">{t("breadcrumb")}</span>
                </nav>

                {/* Layout: sidebar + content */}
                <div className="flex flex-col gap-6 lg:flex-row">
                    <AccountSidebar />

                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <h1 className="text-xl font-bold text-slate-900">{t("title")}</h1>
                            <button
                                onClick={() => { setModalMode("add"); setEditingAddress(null); }}
                                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 active:scale-[0.98]"
                            >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                {t("addAddress")}
                            </button>
                        </div>

                        {/* Loading */}
                        {isLoading && (
                            <div className="grid grid-cols-1 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <AddressCardSkeleton key={i} />
                                ))}
                            </div>
                        )}

                        {/* Error */}
                        {error && !isLoading && (
                            <div className="rounded-xl border border-red-100 bg-red-50 p-6 text-center">
                                <p className="mb-3 text-sm text-red-600">{tCommon("error")}</p>
                                <button
                                    onClick={() => refetch()}
                                    className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                                >
                                    {tCommon("retry")}
                                </button>
                            </div>
                        )}

                        {/* Empty State */}
                        {!isLoading && !error && addresses && addresses.length === 0 && (
                            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 py-16">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <h3 className="mb-1 text-base font-semibold text-slate-900">{t("empty.title")}</h3>
                                <p className="text-sm text-slate-500">{t("empty.description")}</p>
                            </div>
                        )}

                        {/* Address Grid */}
                        {!isLoading && !error && addresses && addresses.length > 0 && (
                            <div className="grid grid-cols-1 gap-4">
                                {addresses.map((address) => (
                                    <AddressCard
                                        key={address.id}
                                        address={address}
                                        onEdit={() => { setEditingAddress(address); setModalMode("edit"); }}
                                        onDelete={() => setDeletingAddress(address)}
                                        onSetDefault={() => handleSetDefault(address)}
                                        isSettingDefault={setDefaultMutation.isPending}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Add/Edit Modal */}
            {modalMode && (
                <AddressFormModal
                    mode={modalMode}
                    editAddress={editingAddress}
                    customerId={profile?.id ?? 0}
                    onClose={() => { setModalMode(null); setEditingAddress(null); }}
                    onSuccess={handleFormSuccess}
                />
            )}

            {/* Delete Confirm */}
            {deletingAddress && (
                <DeleteConfirmDialog
                    onConfirm={handleDelete}
                    onCancel={() => setDeletingAddress(null)}
                    isDeleting={deleteMutation.isPending}
                />
            )}

            {/* Toast */}
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </MainLayout>
    );
}
