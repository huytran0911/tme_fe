import { apiGet, apiPost } from "@/lib/httpClient";
import { getCartHeaders } from "@/lib/api/cart";

// ============================================
// Request Types
// ============================================

export interface CustomerInfo {
  name: string;
  phone?: string;
  email?: string;
  address?: string;
}

export interface BundleItemRequest {
  variantId: number;
  quantity: number;
}

export interface OrderItemRequest {
  variantId: number;
  quantity: number;
  bundleItems?: BundleItemRequest[] | null;
}

export interface CreateOrderRequest {
  customer: CustomerInfo;
  items: OrderItemRequest[];
}

export interface OrderPreviewRequest {
  items: OrderItemRequest[];
}

export interface CancelOrderRequest {
  orderCode: string;
  phone: string;
}

// ============================================
// Response Types
// ============================================

export interface VariantOptionInfo {
  typeId: number;
  typeName: string | null;
  valueId: number;
  value: string | null;
}

export interface CreatedOrderItemResponse {
  variantId: number;
  sku: string | null;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
  appliedTierMinQty: number;
  itemType: "MAIN" | "BUNDLE" | string;
  bundleDiscount: number;
  bundleItems: CreatedOrderItemResponse[] | null;
}

export interface CreateOrderResponse {
  id: number;
  orderCode: string;
  totalAmount: number;
  items: CreatedOrderItemResponse[] | null;
}

export interface OrderPreviewItemResponse {
  variantId: number;
  productId: number;
  sku: string | null;
  productName: string | null;
  productImage: string | null;
  quantity: number;
  stock: number;
  unitPrice: number;
  lineTotal: number;
  appliedTierMinQty: number;
  itemType: "MAIN" | "BUNDLE" | string;
  bundleDiscount: number;
  bundleItems: OrderPreviewItemResponse[] | null;
}

export interface OrderPreviewResponse {
  items: OrderPreviewItemResponse[] | null;
  subTotal: number;
  totalDiscount: number;
  totalAmount: number;
  warnings: string[] | null;
}

export interface SalesOrderItemResponse {
  id: number;
  variantId: number;
  productName: string | null;
  sku: string | null;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
  itemType: "MAIN" | "BUNDLE" | string;
  parentItemId: number | null;
  bundleDiscount: number;
  options: VariantOptionInfo[] | null;
  bundleItems: SalesOrderItemResponse[] | null;
}

export interface SalesOrderDetailResponse {
  id: number;
  orderCode: string | null;
  customerName: string | null;
  customerPhone: string | null;
  customerEmail: string | null;
  customerAddress: string | null;
  totalAmount: number | null;
  status: OrderStatus;
  note: string | null;
  createdAt: string;
  createdBy: string | null;
  updatedAt: string | null;
  updatedBy: string | null;
  items: SalesOrderItemResponse[] | null;
}

export interface MyOrderListItem {
  id: number;
  orderCode: string;
  status: OrderStatus;
  totalAmount: number;
  createdAt: string;
}

export interface MyOrdersResponse {
  items: MyOrderListItem[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface CancelOrderResponse {
  message: string;
  orderCode: string;
}

// ============================================
// Order Status
// ============================================

export type OrderStatus =
  | "NEW"
  | "CONFIRMED"
  | "PROCESSING"
  | "SHIPPING"
  | "DELIVERED"
  | "CANCELLED";

export const OrderStatusLabels: Record<OrderStatus, { vi: string; en: string }> = {
  NEW: { vi: "Đơn hàng mới", en: "New Order" },
  CONFIRMED: { vi: "Đã xác nhận", en: "Confirmed" },
  PROCESSING: { vi: "Đang xử lý", en: "Processing" },
  SHIPPING: { vi: "Đang giao hàng", en: "Shipping" },
  DELIVERED: { vi: "Đã giao hàng", en: "Delivered" },
  CANCELLED: { vi: "Đã hủy", en: "Cancelled" },
};

export function getOrderStatusLabel(status: OrderStatus, locale: string = "vi"): string {
  return locale === "vi" ? OrderStatusLabels[status].vi : OrderStatusLabels[status].en;
}

export function canCancelOrder(status: OrderStatus): boolean {
  return status === "NEW";
}

// ============================================
// API Response Envelope
// ============================================

interface ApiEnvelope<T> {
  success: boolean;
  data: T | null;
  error: { code: string; message: string } | null;
  traceId: string | null;
}

// ============================================
// API Base URLs
// ============================================

const ORDER_API_URL = "/api/v1/orders";

// ============================================
// API Functions
// ============================================

/**
 * Create a new order (checkout)
 * @param request - Order request with customer info and items
 * @returns Created order with order code and total amount
 */
export async function createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
  // Validate required fields before sending
  if (!request.customer?.name?.trim()) {
    throw new Error("Vui lòng nhập tên khách hàng.");
  }

  if (!request.items || request.items.length === 0) {
    throw new Error("Giỏ hàng trống. Vui lòng thêm sản phẩm.");
  }

  // Validate phone format if provided
  if (request.customer.phone) {
    const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
    if (!phoneRegex.test(request.customer.phone.replace(/\s/g, ""))) {
      throw new Error("Số điện thoại không hợp lệ. Vui lòng nhập đúng định dạng.");
    }
  }

  // Validate email format if provided
  if (request.customer.email) {
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(request.customer.email)) {
      throw new Error("Email không hợp lệ. Vui lòng kiểm tra lại.");
    }
  }

  // Validate items
  for (const item of request.items) {
    if (!item.variantId || item.variantId <= 0) {
      throw new Error("Có sản phẩm không hợp lệ trong giỏ hàng.");
    }
    if (!item.quantity || item.quantity <= 0) {
      throw new Error("Số lượng sản phẩm phải lớn hơn 0.");
    }
    if (item.quantity > 100) {
      throw new Error("Số lượng mỗi sản phẩm không được vượt quá 100.");
    }
  }

  const response = await apiPost<CreateOrderResponse>(
    ORDER_API_URL,
    request,
    {
      headers: getCartHeaders(),
    }
  );

  return response;
}

/**
 * Preview order pricing before submission
 * @param request - Items to preview
 * @returns Calculated pricing with warnings
 */
export async function previewOrder(request: OrderPreviewRequest): Promise<OrderPreviewResponse> {
  if (!request.items || request.items.length === 0) {
    throw new Error("Giỏ hàng trống.");
  }

  const envelope = await apiPost<ApiEnvelope<OrderPreviewResponse>>(
    `${ORDER_API_URL}/preview`,
    request,
    { headers: getCartHeaders() }
  );

  if (!envelope.success || !envelope.data) {
    throw new Error(envelope.error?.message || "Không thể tính giá đơn hàng.");
  }

  return envelope.data;
}

/**
 * Track order by order code
 * @param orderCode - The order code to track
 * @param phone - Optional phone number for verification
 * @returns Order details
 */
export async function trackOrder(
  orderCode: string,
  phone?: string
): Promise<SalesOrderDetailResponse> {
  if (!orderCode?.trim()) {
    throw new Error("Vui lòng nhập mã đơn hàng.");
  }

  const params = new URLSearchParams();
  if (phone) {
    params.append("phone", phone);
  }

  const url = `${ORDER_API_URL}/track/${encodeURIComponent(orderCode)}${
    params.toString() ? `?${params.toString()}` : ""
  }`;

  const response = await apiGet<SalesOrderDetailResponse>(url);

  return response;
}

/**
 * Get my orders (requires authentication)
 * @param page - Page number (1-based)
 * @param pageSize - Items per page
 * @param status - Optional status filter
 * @returns Paginated list of orders
 */
export async function getMyOrders(
  page: number = 1,
  pageSize: number = 10,
  status?: OrderStatus
): Promise<MyOrdersResponse> {
  const params = new URLSearchParams();
  params.append("page", String(page));
  params.append("pageSize", String(pageSize));
  if (status) {
    params.append("status", status);
  }

  const envelope = await apiGet<ApiEnvelope<MyOrdersResponse>>(
    `${ORDER_API_URL}/my-orders?${params.toString()}`
  );

  if (!envelope.success || !envelope.data) {
    throw new Error(envelope.error?.message || "Không tải được danh sách đơn hàng.");
  }

  return envelope.data;
}

/**
 * Cancel an order
 * @param orderCode - The order code to cancel
 * @param phone - Phone number for verification
 * @returns Cancel confirmation
 */
export async function cancelOrder(
  orderCode: string,
  phone: string
): Promise<CancelOrderResponse> {
  if (!orderCode?.trim()) {
    throw new Error("Vui lòng nhập mã đơn hàng.");
  }

  if (!phone?.trim()) {
    throw new Error("Vui lòng nhập số điện thoại.");
  }

  const envelope = await apiPost<ApiEnvelope<CancelOrderResponse>>(
    `${ORDER_API_URL}/cancel`,
    { orderCode, phone } as CancelOrderRequest
  );

  if (!envelope.success) {
    throw new Error(envelope.error?.message || "Không thể hủy đơn hàng.");
  }

  return envelope.data || { message: "Order cancelled successfully", orderCode };
}

// ============================================
// Helper Functions
// ============================================

/**
 * Convert cart items to order items format
 */
export function cartItemsToOrderItems(
  cartItems: Array<{
    variantId: number;
    quantity: number;
    bundleItems?: Array<{ variantId: number; quantity: number }> | null;
  }>
): OrderItemRequest[] {
  return cartItems.map((item) => ({
    variantId: item.variantId,
    quantity: item.quantity,
    bundleItems: item.bundleItems?.map((bundle) => ({
      variantId: bundle.variantId,
      quantity: bundle.quantity,
    })) || null,
  }));
}

/**
 * Format currency for display
 */
export function formatOrderAmount(amount: number, locale: string = "vi"): string {
  return new Intl.NumberFormat(locale === "vi" ? "vi-VN" : "en-US", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(amount);
}
