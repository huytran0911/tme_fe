import { apiGet, apiPost, apiPut, apiDelete } from "@/lib/httpClient";

// ============================================
// Request Types
// ============================================

export interface AddCartItemRequest {
  variantId: number;
  quantity: number;
}

export interface UpdateCartItemRequest {
  quantity: number;
}

export interface AddBundleItemRequest {
  variantId: number;
  quantity: number;
  saleOff: number;
}

// ============================================
// Response Types
// ============================================

export interface CartItemOptionResponse {
  typeId: number;
  typeName: string | null;
  valueId: number;
  value: string | null;
}

export interface CartPriceTierApplied {
  minQty: number;
  price: number;
}

export interface CartItemResponse {
  id: number;
  variantId: number;
  productId: number;
  productCode: string | null;
  productName: string | null;
  productImage: string | null;
  variantSku: string | null;
  options: CartItemOptionResponse[] | null;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
  stock: number;
  appliedTier: CartPriceTierApplied | null;
  bundleItems: CartItemResponse[] | null;
  activeSaleOff: number; // Discount per item (giảm giá trên mỗi sản phẩm)
}

export interface CartBundleDefaultVariant {
  variantId: number;
  sku: string | null;
  price: number | null;
  stock: number;
}

export interface CartBundleAvailable {
  productId: number;
  productCode: string | null;
  productName: string | null;
  productImage: string | null;
  saleOff: number;
  applyQuantity: number;
  variantCount: number;
  defaultVariant: CartBundleDefaultVariant | null;
}

export interface CartGiftResponse {
  forVariantId: number;
  forProductName: string | null;
  giftVariantId: number;
  giftSku: string | null;
  giftProductName: string | null;
  giftProductImage: string | null;
  giftQuantity: number;
  giftPrice: number | null;
  giftStock: number;
}

export interface CartSummary {
  itemCount: number;
  totalQuantity: number;
  subtotal: number;
  saleOffDiscount: number; // Total discount from activeSaleOff (tổng giảm giá)
  bundleDiscount: number;
  giftValue: number;
  grandTotal: number;
}

export interface CartResponse {
  id: number;
  sessionToken: string | null;
  customerId: number | null;
  items: CartItemResponse[] | null;
  bundlesAvailable: CartBundleAvailable[] | null;
  gifts: CartGiftResponse[] | null;
  summary: CartSummary | null;
}

export type CartValidationIssueType =
  | "OutOfStock"
  | "InsufficientStock"
  | "Unavailable"
  | "PriceChanged";

export interface CartValidationIssue {
  itemId: number;
  variantId: number;
  productName: string | null;
  issueType: CartValidationIssueType;
  message: string | null;
  oldValue: string | null;
  newValue: string | null;
}

export interface CartValidationResponse {
  isValid: boolean;
  issues: CartValidationIssue[] | null;
  updatedCart: CartResponse | null;
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
// API Base URL
// ============================================

const CART_API_URL = "/client/v1/cart";

// ============================================
// API Functions
// ============================================

/**
 * Get cart for the authenticated user
 * Backend identifies user by Authorization header (JWT)
 */
export async function getCart(): Promise<CartResponse> {
  const envelope = await apiGet<ApiEnvelope<CartResponse>>(CART_API_URL);

  if (!envelope.success || !envelope.data) {
    throw new Error(envelope.error?.message || "Không tải được giỏ hàng.");
  }

  return envelope.data;
}

/**
 * Add item to cart
 * Requires authentication - user identified by JWT
 */
export async function addCartItem(
  variantId: number,
  quantity: number
): Promise<CartResponse> {
  console.log("[Cart] addCartItem called", { variantId, quantity });

  const envelope = await apiPost<ApiEnvelope<CartResponse>>(
    `${CART_API_URL}/items`,
    { variantId, quantity } as AddCartItemRequest
  );

  if (!envelope.success || !envelope.data) {
    console.error("[Cart] addCartItem failed", envelope.error);
    throw new Error(envelope.error?.message || "Không thể thêm vào giỏ hàng.");
  }

  console.log("[Cart] addCartItem success", {
    cartId: envelope.data.id,
    itemCount: envelope.data.items?.length,
    items: envelope.data.items?.map((i) => ({ id: i.id, variantId: i.variantId })),
  });

  return envelope.data;
}

/**
 * Update cart item quantity
 */
export async function updateCartItem(
  itemId: number,
  quantity: number
): Promise<CartResponse> {
  const envelope = await apiPut<ApiEnvelope<CartResponse>>(
    `${CART_API_URL}/items/${itemId}`,
    { quantity } as UpdateCartItemRequest
  );

  if (!envelope.success || !envelope.data) {
    throw new Error(envelope.error?.message || "Không thể cập nhật giỏ hàng.");
  }

  return envelope.data;
}

/**
 * Remove item from cart
 */
export async function removeCartItem(itemId: number): Promise<CartResponse> {
  const envelope = await apiDelete<ApiEnvelope<CartResponse>>(
    `${CART_API_URL}/items/${itemId}`
  );

  if (!envelope.success || !envelope.data) {
    throw new Error(envelope.error?.message || "Không thể xóa sản phẩm.");
  }

  return envelope.data;
}

/**
 * Add bundle item to a cart item
 */
export async function addBundleItem(
  parentItemId: number,
  variantId: number,
  quantity: number,
  saleOff: number
): Promise<CartResponse> {
  const envelope = await apiPost<ApiEnvelope<CartResponse>>(
    `${CART_API_URL}/items/${parentItemId}/bundles`,
    { variantId, quantity, saleOff } as AddBundleItemRequest
  );

  if (!envelope.success || !envelope.data) {
    throw new Error(envelope.error?.message || "Không thể thêm sản phẩm bán kèm.");
  }

  return envelope.data;
}

/**
 * Clear all items from cart
 */
export async function clearCart(): Promise<CartResponse> {
  const envelope = await apiDelete<ApiEnvelope<CartResponse>>(CART_API_URL);

  if (!envelope.success || !envelope.data) {
    throw new Error(envelope.error?.message || "Không thể xóa giỏ hàng.");
  }

  return envelope.data;
}

/**
 * Validate cart (check stock, prices, etc.)
 */
export async function validateCart(): Promise<CartValidationResponse> {
  const envelope = await apiPost<ApiEnvelope<CartValidationResponse>>(
    `${CART_API_URL}/validate`,
    {}
  );

  if (!envelope.success || !envelope.data) {
    throw new Error(envelope.error?.message || "Không thể kiểm tra giỏ hàng.");
  }

  return envelope.data;
}

// ============================================
// Legacy exports for backward compatibility
// ============================================

/** @deprecated No longer needed - login is required */
export function getCartHeaders(): Record<string, string> {
  return {};
}
