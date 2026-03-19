export interface CategoryNode {
  id: number;
  name: string;
  nameEn?: string;
  parentId?: number | null;
  children?: CategoryNode[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  code: string;
  category: string;
  price: number;
  oldPrice?: number;
  inStock: boolean;
  stockQuantity?: number;
  imageUrl: string;
  gallery?: string[];
  shortDesc?: string;
  description?: string;
  specs?: Record<string, string>;
  discountPercent?: number;
}
