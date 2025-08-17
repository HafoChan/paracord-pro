// Product specification types
export interface ProductSpecifications {
  diameter?: string;
  width?: string;
  length?: string;
  material?: string;
  elasticity?: string;
  colors?: string;
  processing?: string;
  quantity?: string;
  delivery?: string;
  [key: string]: string | undefined;
}

// Settings value types
export interface SettingValue {
  [key: string]: string | number | boolean | null;
}

// Product types
export interface Product {
  id: string;
  name: string;
  category: "paracord" | "eband" | "service";
  description: string;
  specifications: ProductSpecifications;
  priceRange: string;
  colors: string[];
  images: string[];
  videoUrl?: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

// Category types
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
  sortOrder: number;
}

// Contact types
export interface ContactForm {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface Contact extends ContactForm {
  id: string;
  status: "pending" | "contacted" | "closed";
  createdAt: string;
}

// Settings types
export interface Setting {
  id: string;
  key: string;
  value: SettingValue;
  updatedAt: string;
}

