import { apiGet } from "@/lib/httpClient";

export interface CategoryDto {
  id: number;
  name: string;
  nameEn: string;
  parentId: number | null;
  children?: CategoryDto[];
}

// API v2 types
export interface CategoryTreeItemDto {
  id: number;
  name: string | null;
  nameEn: string | null;
  image: string | null;
  parentId: number;
  groupId: number | null;
  sortOrder: number;
  isActive: boolean;
  children: CategoryTreeItemDto[] | null;
}

interface RawCategory extends CategoryDto {
  categories?: RawCategory[];
}

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
  error: string | null;
  traceId: string | null;
}

const CATEGORIES_URL = "/client/v1/categories";
const CATEGORIES_V2_URL = "/client/v1/categories/v2";

export async function getAllCategories(): Promise<CategoryDto[]> {
  const envelope = await apiGet<ApiEnvelope<RawCategory[]>>(CATEGORIES_URL);

  if (!envelope.success) {
    throw new Error(envelope.error || "Khong tai duoc danh muc.");
  }

  const normalize = (node: RawCategory, parentId?: number | null): CategoryDto => {
    const rawChildren = node.categories?.length
      ? node.categories
      : node.children?.length
        ? node.children
        : undefined;
    const children = rawChildren?.length ? rawChildren.map((child) => normalize(child, node.id)) : undefined;

    return {
      id: node.id,
      name: node.name,
      nameEn: node.nameEn,
      parentId: parentId ?? node.parentId ?? null,
      children,
    };
  };

  return envelope.data.map((item) => normalize(item, null));
}

// API v2 - returns category tree without group wrapper
export async function getAllCategoriesV2(): Promise<CategoryTreeItemDto[]> {
  const envelope = await apiGet<ApiEnvelope<CategoryTreeItemDto[]>>(CATEGORIES_V2_URL);

  if (!envelope.success) {
    throw new Error(envelope.error || "Không tải được danh mục.");
  }

  return envelope.data ?? [];
}
