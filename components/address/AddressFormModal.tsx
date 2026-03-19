"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useProfile } from "@/hooks/useProfile";
import { useCreateAddress, useUpdateAddress } from "@/hooks/useAddresses";
import {
    useProvinces,
    useAdminUnitChildren,
    useProvincesV2,
    useAdminUnitChildrenV2,
} from "@/hooks/useAdministrativeUnits";
import type { AddressListItem, CreateAddressRequest, UpdateAddressRequest } from "@/lib/api/addresses";

export interface AddressFormModalProps {
    mode: "add" | "edit";
    editAddress?: AddressListItem | null;
    customerId: number;
    onClose: () => void;
    /** Called after successful create/update. Receives the basic address info for auto-select. */
    onSuccess: (created?: { recipientName: string; phone: string; addressName: string; fullAddress: string }) => void;
}

export default function AddressFormModal({
    mode,
    editAddress,
    customerId,
    onClose,
    onSuccess,
}: AddressFormModalProps) {
    const t = useTranslations("Addresses");
    const createMutation = useCreateAddress();
    const updateMutation = useUpdateAddress();
    const { data: profile } = useProfile();

    // Address type state: 1 = 3-level, 2 = 2-level
    const [addressType, setAddressType] = useState<number>(
        editAddress?.addressType ?? 1
    );

    // Form state — pre-fill from profile when creating
    const [recipientName, setRecipientName] = useState(
        editAddress?.recipientName || (mode === "add" ? profile?.name || "" : "")
    );
    const [phone, setPhone] = useState(
        editAddress?.phone || (mode === "add" ? profile?.phone || "" : "")
    );
    const [email, setEmail] = useState(
        mode === "add" ? profile?.email || "" : ""
    );
    const [addressName, setAddressName] = useState(editAddress?.addressName || "");
    const [detailAddress, setDetailAddress] = useState("");
    const [isDefault, setIsDefault] = useState(false);

    // V1 cascading dropdown state (3-level)
    const [selectedProvinceId, setSelectedProvinceId] = useState<number | null>(null);
    const [selectedDistrictId, setSelectedDistrictId] = useState<number | null>(null);
    const [selectedWardId, setSelectedWardId] = useState<number | null>(null);
    const [autoMatchDone, setAutoMatchDone] = useState(false);

    // V2 dropdown state (2-level)
    const [selectedProvinceV2Id, setSelectedProvinceV2Id] = useState<number | null>(null);
    const [selectedWardV2Id, setSelectedWardV2Id] = useState<number | null>(null);

    // Validation errors
    const [errors, setErrors] = useState<Record<string, string>>({});

    // V1 Queries (3-level)
    const { data: provinces = [], isLoading: loadingProvinces } = useProvinces();
    const { data: districts = [], isLoading: loadingDistricts } = useAdminUnitChildren(selectedProvinceId);
    const { data: wards = [], isLoading: loadingWards } = useAdminUnitChildren(selectedDistrictId);

    // V2 Queries (2-level)
    const { data: provincesV2 = [], isLoading: loadingProvincesV2 } = useProvincesV2();
    const { data: wardsV2 = [], isLoading: loadingWardsV2 } = useAdminUnitChildrenV2(selectedProvinceV2Id);

    const isSaving = createMutation.isPending || updateMutation.isPending;

    // Reset dropdowns when switching address type
    const handleSwitchType = (type: number) => {
        setAddressType(type);
        setSelectedProvinceId(null);
        setSelectedDistrictId(null);
        setSelectedWardId(null);
        setSelectedProvinceV2Id(null);
        setSelectedWardV2Id(null);
        setErrors({});
    };

    // Auto-match province from fullAddress when editing (V1 only)
    useEffect(() => {
        if (mode !== "edit" || !editAddress?.fullAddress || autoMatchDone || addressType !== 1 || provinces.length === 0) return;
        const parts = editAddress.fullAddress.split(",").map((s) => s.trim());
        if (parts.length >= 2) {
            const provincePart = parts[parts.length - 1];
            const matched = provinces.find(
                (p) => p.name && provincePart.toLowerCase().includes(p.name.toLowerCase())
            );
            if (matched) setSelectedProvinceId(matched.id);
            setDetailAddress(parts[0]);
        }
        setAutoMatchDone(true);
    }, [mode, editAddress, provinces, autoMatchDone, addressType]);

    // Auto-match district (V1 edit)
    useEffect(() => {
        if (mode !== "edit" || !editAddress?.fullAddress || districts.length === 0 || selectedDistrictId || addressType !== 1) return;
        const parts = editAddress.fullAddress.split(",").map((s) => s.trim());
        if (parts.length >= 3) {
            const matched = districts.find(
                (d) => d.name && parts[parts.length - 2].toLowerCase().includes(d.name.toLowerCase())
            );
            if (matched) setSelectedDistrictId(matched.id);
        }
    }, [mode, editAddress, districts, selectedDistrictId, addressType]);

    // Auto-match ward (V1 edit)
    useEffect(() => {
        if (mode !== "edit" || !editAddress?.fullAddress || wards.length === 0 || selectedWardId || addressType !== 1) return;
        const parts = editAddress.fullAddress.split(",").map((s) => s.trim());
        if (parts.length >= 4) {
            const matched = wards.find(
                (w) => w.name && parts[parts.length - 3].toLowerCase().includes(w.name.toLowerCase())
            );
            if (matched) setSelectedWardId(matched.id);
        }
    }, [mode, editAddress, wards, selectedWardId, addressType]);

    const validate = useCallback(() => {
        const newErrors: Record<string, string> = {};
        if (!recipientName.trim()) newErrors.recipientName = t("validation.recipientNameRequired");
        if (!phone.trim()) {
            newErrors.phone = t("validation.phoneRequired");
        } else {
            const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
            if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
                newErrors.phone = t("validation.phoneInvalid");
            }
        }
        if (email.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) newErrors.email = t("validation.emailInvalid");
        }
        if (!addressName.trim()) newErrors.addressName = t("validation.addressNameRequired");

        if (addressType === 1) {
            if (!selectedProvinceId) newErrors.province = t("validation.provinceRequired");
            if (!selectedDistrictId) newErrors.district = t("validation.districtRequired");
            if (!selectedWardId) newErrors.ward = t("validation.wardRequired");
        } else {
            if (!selectedProvinceV2Id) newErrors.province = t("validation.provinceRequired");
            if (!selectedWardV2Id) newErrors.ward = t("validation.wardRequired");
        }

        if (!detailAddress.trim()) newErrors.detailAddress = t("validation.detailAddressRequired");
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [recipientName, phone, email, addressName, addressType, selectedProvinceId, selectedDistrictId, selectedWardId, selectedProvinceV2Id, selectedWardV2Id, detailAddress, t]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            if (mode === "add") {
                const req: CreateAddressRequest = {
                    customerId,
                    addressType,
                    recipientName: recipientName.trim(),
                    phone: phone.trim(),
                    email: email.trim() || undefined,
                    administrativeUnitId: addressType === 1 ? selectedWardId! : 1,
                    administrativeUnitV2Id: addressType === 2 ? selectedWardV2Id! : null,
                    addressName: addressName.trim(),
                    detailAddress: detailAddress.trim(),
                    isDefault,
                };
                await createMutation.mutateAsync(req);
                // Return basic info so caller can auto-select
                onSuccess({
                    recipientName: recipientName.trim(),
                    phone: phone.trim(),
                    addressName: addressName.trim(),
                    fullAddress: "", // will be refreshed from server after refetch
                });
            } else if (editAddress) {
                const req: UpdateAddressRequest = {
                    addressType,
                    recipientName: recipientName.trim(),
                    phone: phone.trim(),
                    email: email.trim() || undefined,
                    administrativeUnitId: addressType === 1 ? selectedWardId! : 1,
                    administrativeUnitV2Id: addressType === 2 ? selectedWardV2Id! : null,
                    addressName: addressName.trim(),
                    detailAddress: detailAddress.trim(),
                };
                await updateMutation.mutateAsync({ id: editAddress.id, request: req });
                onSuccess();
            }
        } catch {
            // Error handled by mutation
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
            <div
                className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 sticky top-0 bg-white rounded-t-2xl z-10">
                    <h2 className="text-lg font-bold text-slate-900">
                        {mode === "add" ? t("form.titleAdd") : t("form.titleEdit")}
                    </h2>
                    <button
                        onClick={onClose}
                        className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 p-6">
                    {/* Current address reference (edit mode only) */}
                    {mode === "edit" && editAddress?.fullAddress && (
                        <div className="rounded-lg bg-blue-50 border border-blue-100 px-4 py-3 text-sm">
                            <span className="font-medium text-blue-700">{t("form.currentAddress")}:</span>
                            <p className="mt-0.5 text-blue-600">{editAddress.fullAddress}</p>
                        </div>
                    )}

                    {/* Recipient Name */}
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">{t("form.recipientName")} *</label>
                        <input
                            type="text"
                            value={recipientName}
                            onChange={(e) => { setRecipientName(e.target.value); setErrors((prev) => ({ ...prev, recipientName: "" })); }}
                            placeholder={t("form.recipientNamePlaceholder")}
                            className={`w-full rounded-lg border px-3 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.recipientName ? "border-red-400" : "border-slate-200 focus:border-primary"}`}
                        />
                        {errors.recipientName && <p className="mt-1 text-xs text-red-500">{errors.recipientName}</p>}
                    </div>

                    {/* Phone + Email row */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-700">{t("form.phone")} *</label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value); setErrors((prev) => ({ ...prev, phone: "" })); }}
                                placeholder={t("form.phonePlaceholder")}
                                className={`w-full rounded-lg border px-3 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.phone ? "border-red-400" : "border-slate-200 focus:border-primary"}`}
                            />
                            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-700">{t("form.email")}</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: "" })); }}
                                placeholder={t("form.emailPlaceholder")}
                                className={`w-full rounded-lg border px-3 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.email ? "border-red-400" : "border-slate-200 focus:border-primary"}`}
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                        </div>
                    </div>

                    {/* Address Name */}
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">{t("form.addressName")} *</label>
                        <input
                            type="text"
                            value={addressName}
                            onChange={(e) => { setAddressName(e.target.value); setErrors((prev) => ({ ...prev, addressName: "" })); }}
                            placeholder={t("form.addressNamePlaceholder")}
                            className={`w-full rounded-lg border px-3 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.addressName ? "border-red-400" : "border-slate-200 focus:border-primary"}`}
                        />
                        {errors.addressName && <p className="mt-1 text-xs text-red-500">{errors.addressName}</p>}
                    </div>

                    {/* Address Type Selector */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">{t("form.addressTypeLabel")}</label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => handleSwitchType(1)}
                                className={`relative rounded-xl border-2 p-3 text-left transition-all ${addressType === 1 ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-slate-200 hover:border-slate-300"}`}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-base">🏠</span>
                                    <span className={`text-sm font-semibold ${addressType === 1 ? "text-primary" : "text-slate-700"}`}>
                                        {t("form.addressType3Level")}
                                    </span>
                                </div>
                                <p className="mt-1 text-[11px] text-slate-400">{t("form.addressType3LevelDesc")}</p>
                                {addressType === 1 && (
                                    <div className="absolute right-2 top-2 h-4 w-4 rounded-full bg-primary flex items-center justify-center">
                                        <svg className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={() => handleSwitchType(2)}
                                className={`relative rounded-xl border-2 p-3 text-left transition-all ${addressType === 2 ? "border-blue-500 bg-blue-50/50 ring-1 ring-blue-200" : "border-slate-200 hover:border-slate-300"}`}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-base">🆕</span>
                                    <span className={`text-sm font-semibold ${addressType === 2 ? "text-blue-600" : "text-slate-700"}`}>
                                        {t("form.addressType2Level")}
                                    </span>
                                </div>
                                <p className="mt-1 text-[11px] text-slate-400">{t("form.addressType2LevelDesc")}</p>
                                {addressType === 2 && (
                                    <div className="absolute right-2 top-2 h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center">
                                        <svg className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* V1: Province → District → Ward */}
                    {addressType === 1 && (
                        <>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">{t("form.province")} *</label>
                                <select
                                    value={selectedProvinceId ?? ""}
                                    onChange={(e) => {
                                        const id = e.target.value ? Number(e.target.value) : null;
                                        setSelectedProvinceId(id);
                                        setSelectedDistrictId(null);
                                        setSelectedWardId(null);
                                        setErrors((prev) => ({ ...prev, province: "", district: "", ward: "" }));
                                    }}
                                    className={`w-full rounded-lg border px-3 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.province ? "border-red-400" : "border-slate-200 focus:border-primary"}`}
                                    disabled={loadingProvinces}
                                >
                                    <option value="">{loadingProvinces ? "..." : t("form.provincePlaceholder")}</option>
                                    {provinces.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                                </select>
                                {errors.province && <p className="mt-1 text-xs text-red-500">{errors.province}</p>}
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">{t("form.district")} *</label>
                                    <select
                                        value={selectedDistrictId ?? ""}
                                        onChange={(e) => {
                                            const id = e.target.value ? Number(e.target.value) : null;
                                            setSelectedDistrictId(id);
                                            setSelectedWardId(null);
                                            setErrors((prev) => ({ ...prev, district: "", ward: "" }));
                                        }}
                                        className={`w-full rounded-lg border px-3 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.district ? "border-red-400" : "border-slate-200 focus:border-primary"}`}
                                        disabled={!selectedProvinceId || loadingDistricts}
                                    >
                                        <option value="">{loadingDistricts ? "..." : t("form.districtPlaceholder")}</option>
                                        {districts.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
                                    </select>
                                    {errors.district && <p className="mt-1 text-xs text-red-500">{errors.district}</p>}
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-slate-700">{t("form.ward")} *</label>
                                    <select
                                        value={selectedWardId ?? ""}
                                        onChange={(e) => {
                                            const id = e.target.value ? Number(e.target.value) : null;
                                            setSelectedWardId(id);
                                            setErrors((prev) => ({ ...prev, ward: "" }));
                                        }}
                                        className={`w-full rounded-lg border px-3 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.ward ? "border-red-400" : "border-slate-200 focus:border-primary"}`}
                                        disabled={!selectedDistrictId || loadingWards}
                                    >
                                        <option value="">{loadingWards ? "..." : t("form.wardPlaceholder")}</option>
                                        {wards.map((w) => <option key={w.id} value={w.id}>{w.name}</option>)}
                                    </select>
                                    {errors.ward && <p className="mt-1 text-xs text-red-500">{errors.ward}</p>}
                                </div>
                            </div>
                        </>
                    )}

                    {/* V2: Province → Ward */}
                    {addressType === 2 && (
                        <>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">{t("form.province")} *</label>
                                <select
                                    value={selectedProvinceV2Id ?? ""}
                                    onChange={(e) => {
                                        const id = e.target.value ? Number(e.target.value) : null;
                                        setSelectedProvinceV2Id(id);
                                        setSelectedWardV2Id(null);
                                        setErrors((prev) => ({ ...prev, province: "", ward: "" }));
                                    }}
                                    className={`w-full rounded-lg border px-3 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.province ? "border-red-400" : "border-slate-200 focus:border-primary"}`}
                                    disabled={loadingProvincesV2}
                                >
                                    <option value="">{loadingProvincesV2 ? "..." : t("form.provincePlaceholder")}</option>
                                    {provincesV2.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                                </select>
                                {errors.province && <p className="mt-1 text-xs text-red-500">{errors.province}</p>}
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">{t("form.ward")} *</label>
                                <select
                                    value={selectedWardV2Id ?? ""}
                                    onChange={(e) => {
                                        const id = e.target.value ? Number(e.target.value) : null;
                                        setSelectedWardV2Id(id);
                                        setErrors((prev) => ({ ...prev, ward: "" }));
                                    }}
                                    className={`w-full rounded-lg border px-3 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.ward ? "border-red-400" : "border-slate-200 focus:border-primary"}`}
                                    disabled={!selectedProvinceV2Id || loadingWardsV2}
                                >
                                    <option value="">{loadingWardsV2 ? "..." : t("form.wardPlaceholder")}</option>
                                    {wardsV2.map((w) => <option key={w.id} value={w.id}>{w.name}</option>)}
                                </select>
                                {errors.ward && <p className="mt-1 text-xs text-red-500">{errors.ward}</p>}
                            </div>
                        </>
                    )}

                    {/* Detail Address */}
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">{t("form.detailAddress")} *</label>
                        <input
                            type="text"
                            value={detailAddress}
                            onChange={(e) => { setDetailAddress(e.target.value); setErrors((prev) => ({ ...prev, detailAddress: "" })); }}
                            placeholder={t("form.detailAddressPlaceholder")}
                            className={`w-full rounded-lg border px-3 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.detailAddress ? "border-red-400" : "border-slate-200 focus:border-primary"}`}
                        />
                        {errors.detailAddress && <p className="mt-1 text-xs text-red-500">{errors.detailAddress}</p>}
                    </div>

                    {/* isDefault checkbox (add mode only) */}
                    {mode === "add" && (
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isDefault}
                                onChange={(e) => setIsDefault(e.target.checked)}
                                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/30"
                            />
                            <span className="text-sm text-slate-600">{t("form.isDefault")}</span>
                        </label>
                    )}

                    {/* Mutation error */}
                    {(createMutation.error || updateMutation.error) && (
                        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                            {t("toast.error")}
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="flex items-center justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                        >
                            {t("form.cancel")}
                        </button>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 disabled:opacity-50"
                        >
                            {isSaving ? (
                                <>
                                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    {t("form.saving")}
                                </>
                            ) : (
                                t("form.save")
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
