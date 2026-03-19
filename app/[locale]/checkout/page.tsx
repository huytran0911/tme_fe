"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import MainLayout from "@/components/MainLayout";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/hooks/useCart";
import { useCreateOrder, useOrderPreview, cartItemsToOrderItems } from "@/hooks/useOrders";
import { usePromotions } from "@/hooks/usePromotions";
import { useAddresses } from "@/hooks/useAddresses";
import AddressFormModal from "@/components/address/AddressFormModal";
import { useProfile } from "@/hooks/useProfile";
import { buildImageUrl } from "@/lib/utils";
import type { CartItemResponse } from "@/lib/api/cart";
import type { CustomerInfo, OrderItemRequest } from "@/lib/api/orders";

// Format currency
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(amount);
}

// Customer form validation
interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
}

function validateCustomerForm(customer: CustomerInfo, t: (key: string) => string): FormErrors {
  const errors: FormErrors = {};

  if (!customer.name?.trim()) {
    errors.name = t("errors.nameRequired");
  }

  if (!customer.phone?.trim()) {
    errors.phone = t("errors.phoneRequired");
  } else {
    const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
    if (!phoneRegex.test(customer.phone.replace(/\s/g, ""))) {
      errors.phone = t("errors.phoneInvalid");
    }
  }

  if (customer.email) {
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(customer.email)) {
      errors.email = t("errors.emailInvalid");
    }
  }

  return errors;
}

// Cart item component
function CheckoutItem({ item, locale, tCart }: { item: CartItemResponse; locale: string; tCart: (key: string) => string }) {
  const imageUrl = item.productImage ? buildImageUrl(item.productImage) : null;
  const productName = item.productName || item.variantSku || `Variant #${item.variantId}`;

  return (
    <div className="flex gap-3 py-3 border-b border-slate-100 last:border-0">
      {/* Image */}
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={productName}
            fill
            sizes="64px"
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-slate-400">
            No img
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-slate-900 line-clamp-2">{productName}</h4>
        {item.options && item.options.length > 0 && (
          <p className="text-xs text-slate-500 mt-0.5">
            {item.options.map((opt) => opt.value).filter(Boolean).join(", ")}
          </p>
        )}
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-600">
              {formatCurrency(item.unitPrice)} x {item.quantity}
            </span>
            {item.appliedTier && (
              <span className="rounded bg-blue-50 px-1 py-px text-[9px] font-medium text-blue-600">
                {tCart("bulkPrice")} ≥{item.appliedTier.minQty}
              </span>
            )}
          </div>
          <span className="text-sm font-semibold text-primary">
            {formatCurrency(item.lineTotal)}
          </span>
        </div>
      </div>

      {/* Bundle items */}
      {item.bundleItems && item.bundleItems.length > 0 && (
        <div className="mt-2 ml-8 space-y-1">
          {item.bundleItems.map((bundle) => (
            <div key={bundle.id} className="flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <span className="text-green-600">+</span>
                {bundle.productName || bundle.variantSku}
                <span className="text-slate-400">x{bundle.quantity}</span>
              </span>
              <span>{formatCurrency(bundle.lineTotal)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CheckoutPage() {
  const locale = useLocale();
  const t = useTranslations("Checkout");
  const tCommon = useTranslations("Common");
  const tCart = useTranslations("Cart");
  const router = useRouter();
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const { items: allItems, gifts, summary, isLoading: cartLoading, isEmpty, validateCart, grandTotal } = useCart();
  const { submitOrder, isLoading: orderLoading, error: orderError } = useCreateOrder();
  const { preview, isLoading: previewLoading, data: previewData } = useOrderPreview();
  const { appliedPromotions, nearbyPromotions, hasFreeShipping } = usePromotions(grandTotal);
  const { data: addresses, isLoading: addressesLoading, refetch: refetchAddresses } = useAddresses();
  const { data: profile } = useProfile();
  const [showAddAddressModal, setShowAddAddressModal] = useState(false);

  // After creating a new address, refetch the list and auto-select the newest one
  const handleNewAddressCreated = async (created?: { recipientName: string; phone: string; addressName: string; fullAddress: string }) => {
    setShowAddAddressModal(false);
    const result = await refetchAddresses();
    // Auto-select: find the address that matches the one just created by addressName
    if (created && result.data && result.data.length > 0) {
      const found = result.data.find((a) => a.addressName === created.addressName && a.recipientName === created.recipientName);
      if (found) {
        handleSelectAddress(found);
        return;
      }
      // Fallback: select the last address in the list (most recently added)
      const last = result.data[result.data.length - 1];
      handleSelectAddress(last);
    }
  };

  // Filter items by selection from cart page
  const items = useMemo(() => {
    if (typeof window === "undefined") return allItems;
    try {
      const stored = sessionStorage.getItem("tme-selected-cart-items");
      if (stored) {
        const selectedIds = new Set<number>(JSON.parse(stored));
        const filtered = allItems.filter((item) => selectedIds.has(item.variantId));
        // If filtered is empty (stale selection), fall back to all items
        return filtered.length > 0 ? filtered : allItems;
      }
    } catch { /* ignore */ }
    return allItems;
  }, [allItems]);

  // Customer form state
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  // Convert cart items to order items format
  const orderItems: OrderItemRequest[] = useMemo(() => {
    return items.map((item) => ({
      variantId: item.variantId,
      quantity: item.quantity,
      bundleItems: item.bundleItems?.map((b) => ({
        variantId: b.variantId,
        quantity: b.quantity,
      })) || null,
    }));
  }, [items]);

  // Load preview when items change
  useEffect(() => {
    if (orderItems.length > 0 && !previewLoading) {
      preview({ items: orderItems }).catch(() => {
        // Preview errors are not critical
      });
    }
  }, [orderItems]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      const returnUrl = encodeURIComponent(`/${locale}/checkout`);
      router.push(`/${locale}/auth/login?returnUrl=${returnUrl}`);
    }
  }, [authLoading, isAuthenticated, locale, router]);

  // Show loading while checking auth
  if (authLoading || (!authLoading && !isAuthenticated)) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center py-12">
          <svg className="h-8 w-8 animate-spin text-primary" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p className="mt-4 text-sm text-slate-600">
            {t("checkingAuth")}
          </p>
        </div>
      </MainLayout>
    );
  }

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setSubmitError(null);
  };

  // Validate and show confirmation
  const handleProceedToConfirm = async () => {
    // Validate form
    const errors = validateCustomerForm(customer, t);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    // Validate cart
    setIsValidating(true);
    try {
      const validation = await validateCart();
      if (!validation.isValid && validation.issues && validation.issues.length > 0) {
        const issueMessages = validation.issues
          .map((issue) => issue.message)
          .filter(Boolean)
          .join("; ");
        setSubmitError(t("cartIssues", { issues: issueMessages }));
        return;
      }
    } catch {
      // Cart validation failed, but we can still proceed
    } finally {
      setIsValidating(false);
    }

    // Show confirmation dialog
    setShowConfirmDialog(true);
  };

  // Submit order
  const handleSubmitOrder = async () => {
    setShowConfirmDialog(false);
    setSubmitError(null);

    try {
      const result = await submitOrder({
        customer,
        items: orderItems,
      });

      // Redirect to success page with order code
      router.push(`/${locale}/order-success?code=${result.orderCode}`);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Có lỗi xảy ra. Vui lòng thử lại.";
      setSubmitError(message);
    }
  };

  // Calculated values
  const displayTotal = previewData?.totalAmount ?? summary?.grandTotal ?? 0;
  const displaySubtotal = previewData?.subTotal ?? summary?.subtotal ?? 0;
  const displayDiscount = previewData?.totalDiscount ?? summary?.bundleDiscount ?? 0;
  const displaySaleOff = summary?.saleOffDiscount ?? 0;

  // Handle address book selection
  const handleSelectAddress = (address: { recipientName: string | null; phone: string | null; addressName: string | null; fullAddress: string | null }) => {
    setCustomer((prev) => ({
      ...prev,
      name: address.recipientName || address.addressName || prev.name,
      phone: address.phone || prev.phone,
      address: address.fullAddress || "",
    }));
  };

  // Empty cart redirect
  if (!cartLoading && isEmpty) {
    return (
      <MainLayout>
        <div className="space-y-4">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 sm:text-sm">
            <div className="flex items-center gap-1">
              <Link href={`/${locale}`} className="hover:text-primary">
                {tCommon("home")}
              </Link>
              <span>/</span>
              <span className="text-slate-700">
                {t("breadcrumb")}
              </span>
            </div>
          </nav>

          {/* Empty cart message */}
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-12 text-center">
            <svg
              className="mx-auto mb-4 h-16 w-16 text-slate-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              {t("emptyCart")}
            </h2>
            <p className="text-slate-600 mb-4">
              {t("emptyCartMessage")}
            </p>
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
            >
              {t("continueShopping")}
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <>
      <MainLayout>
        <div className="space-y-4">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 sm:text-sm">
            <div className="flex items-center gap-1">
              <Link href={`/${locale}`} className="hover:text-primary">
                {tCommon("home")}
              </Link>
              <span>/</span>
              <span className="text-slate-700">
                {t("breadcrumb")}
              </span>
            </div>
          </nav>

          {/* Page Title */}
          <h1 className="text-lg font-bold text-slate-900 sm:text-xl">
            {t("title")}
          </h1>

          {cartLoading ? (
            // Loading skeleton
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-4">
                <div className="h-64 animate-pulse rounded-xl bg-slate-200" />
              </div>
              <div className="space-y-4">
                <div className="h-48 animate-pulse rounded-xl bg-slate-200" />
              </div>
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-3">
              {/* Left Column - Customer Form */}
              <div className="lg:col-span-2 space-y-4">
                {/* Customer Information */}
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <h2 className="text-base font-semibold text-slate-900 mb-4">
                    {t("customerInfo")}
                  </h2>

                  <div className="space-y-4">
                    {/* Name - Required */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        {t("labels.fullName")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={customer.name}
                        onChange={handleInputChange}
                        placeholder={t("placeholders.fullName")}
                        className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition focus:ring-2 ${formErrors.name
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-slate-200 focus:border-primary focus:ring-primary/20"
                          }`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-xs text-red-600">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Phone - Required */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        {t("labels.phone")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={customer.phone}
                        onChange={handleInputChange}
                        placeholder={t("placeholders.phone")}
                        className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition focus:ring-2 ${formErrors.phone
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-slate-200 focus:border-primary focus:ring-primary/20"
                          }`}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-xs text-red-600">{formErrors.phone}</p>
                      )}
                      <p className="mt-1 text-xs text-slate-500">
                        {t("phoneNote")}
                      </p>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        {t("labels.email")}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={customer.email}
                        onChange={handleInputChange}
                        placeholder={t("placeholders.email")}
                        className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition focus:ring-2 ${formErrors.email
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-slate-200 focus:border-primary focus:ring-primary/20"
                          }`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-xs text-red-600">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Address with Address Book */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-sm font-medium text-slate-700">
                          {t("labels.address")}
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setShowAddAddressModal(true)}
                            className="inline-flex items-center gap-1 text-[11px] text-primary hover:underline"
                          >
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            {t("addressBook.title")}
                          </button>
                          <button
                            type="button"
                            onClick={() => refetchAddresses()}
                            className="inline-flex items-center gap-0.5 text-[11px] text-slate-400 hover:text-primary transition"
                            title="Tải lại địa chỉ"
                          >
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Address Book Selector */}
                      {!addressesLoading && addresses && addresses.length > 0 && (
                        <div className="mb-2">
                          <div className="flex flex-wrap gap-1.5">
                            {addresses.map((addr) => (
                              <button
                                key={addr.id}
                                type="button"
                                onClick={() => handleSelectAddress(addr)}
                                className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs transition hover:border-primary hover:bg-primary/5 ${customer.address === addr.fullAddress
                                  ? "border-primary bg-primary/10 text-primary font-medium"
                                  : "border-slate-200 text-slate-600"
                                  }`}
                              >
                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="max-w-[180px] truncate">
                                  {addr.addressName || addr.fullAddress}
                                </span>
                                {addr.isDefault && (
                                  <span className="rounded bg-primary/20 px-1 py-px text-[9px] font-semibold text-primary">
                                    {t("addressBook.default")}
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <textarea
                        name="address"
                        value={customer.address}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder={t("placeholders.address")}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Cart Items Review */}
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base font-semibold text-slate-900">
                      {t("orderItems")}
                    </h2>
                    <span className="text-sm text-slate-500">
                      {items.length} {t("items")}
                    </span>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {items.map((item) => (
                      <CheckoutItem key={item.id} item={item} locale={locale} tCart={tCart} />
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <Link
                      href={`/${locale}/cart`}
                      className="text-sm text-primary hover:underline"
                    >
                      {t("backToCart")}
                    </Link>
                  </div>
                </div>

                {/* Gifts Section */}
                {gifts && gifts.length > 0 && (
                  <div className="rounded-xl border border-green-200 bg-green-50/50">
                    <div className="flex items-center gap-2 border-b border-green-200 px-4 py-2">
                      <span className="text-sm font-semibold text-green-700">
                        {tCart("gifts.title")}
                      </span>
                      <span className="rounded-full bg-green-100 px-1.5 py-0.5 text-[10px] font-medium text-green-700">
                        {gifts.length}
                      </span>
                    </div>
                    <div className="divide-y divide-green-100">
                      {gifts.map((gift) => {
                        const giftImageSrc = gift.giftProductImage
                          ? buildImageUrl(gift.giftProductImage)
                          : null;
                        const isOutOfStock = gift.giftStock <= 0;

                        return (
                          <div
                            key={`${gift.forVariantId}-${gift.giftVariantId}`}
                            className={`flex items-center gap-3 px-4 py-2.5 ${isOutOfStock ? "opacity-50" : ""}`}
                          >
                            {/* Gift Image */}
                            <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-white">
                              {giftImageSrc ? (
                                <Image
                                  src={giftImageSrc}
                                  alt={gift.giftProductName || "Gift"}
                                  fill
                                  sizes="40px"
                                  className="object-contain p-0.5"
                                  unoptimized
                                />
                              ) : (
                                <div className="flex h-full items-center justify-center text-[10px] text-slate-400">
                                  🎁
                                </div>
                              )}
                              <div className="absolute -right-0.5 -top-0.5 rounded-bl bg-green-500 px-1 py-px text-[6px] font-bold text-white">
                                {tCart("gifts.free")}
                              </div>
                            </div>

                            {/* Gift Info */}
                            <div className="flex-1 min-w-0">
                              <span className="line-clamp-1 text-sm font-medium text-slate-800">
                                {gift.giftProductName}
                              </span>
                              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                                <span>×{gift.giftQuantity}</span>
                                {gift.giftPrice && gift.giftPrice > 0 && (
                                  <span className="line-through">{formatCurrency(gift.giftPrice)}</span>
                                )}
                                <span className="font-semibold text-green-600">{tCart("gifts.free")}</span>
                                {isOutOfStock && (
                                  <span className="font-medium text-red-500">{tCart("gifts.outOfStock")}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Promotions Info */}
                {(appliedPromotions.length > 0 || nearbyPromotions.length > 0) && (
                  <div className="rounded-xl border border-orange-200 bg-orange-50/50">
                    <div className="flex items-center gap-2 border-b border-orange-200 px-4 py-2">
                      <span className="text-sm font-semibold text-orange-700">
                        {tCart("promotions.title")}
                      </span>
                    </div>
                    <div className="space-y-2 p-3">
                      {/* Applied promotions */}
                      {appliedPromotions.map((promo) => (
                        <div
                          key={promo.id}
                          className="flex items-start gap-2 rounded-lg bg-green-50 border border-green-200 p-2.5"
                        >
                          <svg className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-green-700">
                              {promo.name}
                            </p>
                            <p className="text-[11px] text-green-600">
                              {promo.isPercent
                                ? `${tCart("promotions.discountPercent").replace("{percent}", String(promo.saleOff))} (${formatCurrency(promo.discountValue)})`
                                : formatCurrency(promo.discountValue)
                              }
                              {hasFreeShipping && ` + ${tCart("promotions.freeShipping")}`}
                            </p>
                            <p className="text-[10px] text-green-500 mt-0.5">
                              ✓ {tCart("promotions.applied")}
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* Nearby promotions */}
                      {nearbyPromotions.slice(0, 2).map((promo) => {
                        const progress = grandTotal / promo.applyForTotal;
                        return (
                          <div
                            key={promo.id}
                            className="rounded-lg bg-white border border-orange-200 p-2.5"
                          >
                            <p className="text-xs font-medium text-orange-700">
                              {tCart("promotions.buyMore")
                                .replace("{amount}", new Intl.NumberFormat("vi-VN").format(promo.remaining))
                                .replace(
                                  "{benefit}",
                                  promo.isPercent
                                    ? `giảm ${promo.saleOff}%`
                                    : `giảm ${new Intl.NumberFormat("vi-VN").format(promo.saleOff)}đ`
                                )}
                            </p>
                            <div className="mt-1.5 h-1.5 w-full rounded-full bg-orange-100 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-orange-400 transition-all"
                                style={{ width: `${Math.min(progress * 100, 100)}%` }}
                              />
                            </div>
                            <p className="text-[10px] text-orange-500 mt-1">
                              {tCart("promotions.minOrder").replace(
                                "{amount}",
                                new Intl.NumberFormat("vi-VN").format(promo.applyForTotal)
                              )}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Order Summary */}
              <div className="space-y-4">
                {/* Order Summary */}
                <div className="rounded-xl border border-slate-200 bg-white p-4 sticky top-4">
                  <h2 className="text-base font-semibold text-slate-900 mb-4">
                    {t("orderSummary")}
                  </h2>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">
                        {t("subtotal")}
                      </span>
                      <span className="font-medium">{formatCurrency(displaySubtotal)}</span>
                    </div>

                    {displaySaleOff > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>{t("saleOffDiscount")}</span>
                        <span>-{formatCurrency(displaySaleOff)}</span>
                      </div>
                    )}

                    {displayDiscount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>{t("discount")}</span>
                        <span>-{formatCurrency(displayDiscount)}</span>
                      </div>
                    )}

                    {summary?.giftValue && summary.giftValue > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>{tCart("giftValue")}</span>
                        <span>-{formatCurrency(summary.giftValue)}</span>
                      </div>
                    )}

                    <div className="pt-3 border-t border-slate-200">
                      <div className="flex justify-between">
                        <span className="font-semibold text-slate-900">
                          {t("total")}
                        </span>
                        <span className="text-lg font-bold text-primary">
                          {formatCurrency(displayTotal)}
                        </span>
                      </div>
                    </div>

                    {/* Preview warnings */}
                    {previewData?.warnings && previewData.warnings.length > 0 && (
                      <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-xs font-medium text-yellow-800 mb-1">
                          {t("warning")}
                        </p>
                        <ul className="text-xs text-yellow-700 space-y-1">
                          {previewData.warnings.map((warning, idx) => (
                            <li key={idx}>• {warning}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Error message */}
                  {(submitError || orderError) && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-700">
                        {submitError || orderError?.message}
                      </p>
                    </div>
                  )}

                  {/* Submit button - desktop only */}
                  <div className="hidden lg:block">
                    <button
                      type="button"
                      onClick={handleProceedToConfirm}
                      disabled={orderLoading || isValidating || items.length === 0}
                      className="mt-4 w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {orderLoading || isValidating ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          {t("processing")}
                        </span>
                      ) : (
                        t("placeOrder")
                      )}
                    </button>

                    <p className="mt-3 text-xs text-slate-500 text-center">
                      {t("termsNote")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Sticky Bottom Bar */}
          {!cartLoading && !isEmpty && (
            <div className="fixed bottom-0 inset-x-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-sm px-4 py-3 lg:hidden" style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
              <div className="flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">{t("total")}</p>
                  <p className="text-lg font-bold text-primary truncate">{formatCurrency(displayTotal)}</p>
                </div>
                <button
                  type="button"
                  onClick={handleProceedToConfirm}
                  disabled={orderLoading || isValidating || items.length === 0}
                  className="flex-shrink-0 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition active:scale-95 disabled:opacity-50"
                >
                  {orderLoading || isValidating ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {t("processing")}
                    </span>
                  ) : (
                    t("placeOrder")
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Bottom spacer for mobile sticky bar */}
          {!cartLoading && !isEmpty && (
            <div className="h-20 lg:hidden" />
          )}
        </div>

        {/* Confirmation Dialog */}
        {showConfirmDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {t("confirm.title")}
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                {t("confirm.message")}
              </p>

              {/* Order summary */}
              <div className="bg-slate-50 rounded-lg p-4 mb-4 text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">
                      {t("confirm.customer")}
                    </span>
                    <span className="font-medium">{customer.name}</span>
                  </div>
                  {customer.phone && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">
                        {t("confirm.phone")}
                      </span>
                      <span>{customer.phone}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-slate-200">
                    <span className="text-slate-600">
                      {t("confirm.itemCount")}
                    </span>
                    <span>{items.length}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-primary">
                    <span>{t("confirm.total")}</span>
                    <span>{formatCurrency(displayTotal)}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowConfirmDialog(false)}
                  className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  {t("confirm.goBack")}
                </button>
                <button
                  type="button"
                  onClick={handleSubmitOrder}
                  disabled={orderLoading}
                  className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-50"
                >
                  {orderLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </span>
                  ) : (
                    t("confirm.submit")
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </MainLayout>

      {/* Add New Address Modal */}
      {
        showAddAddressModal && (
          <AddressFormModal
            mode="add"
            customerId={profile?.id ?? 0}
            onClose={() => setShowAddAddressModal(false)}
            onSuccess={handleNewAddressCreated}
          />
        )
      }
    </>);
}
