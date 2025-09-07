/**
 * App Constants for Paracord Pro
 * Thông tin cơ bản về công ty và cấu hình ứng dụng
 */

// Company Information
export const COMPANY_INFO = {
  name: "Paracord Pro",
  slogan: "Chất lượng - Uy tín - Chuyên nghiệp",
  description: "Chuyên sản xuất và gia công dây dù, dây đai thun cho ngành may mặc, balo túi xách, thể thao",
  email: "info@paracordpro.vn",
  phone: "0123456789",
  address: "Địa chỉ công ty",
  website: "https://paracordpro.vn",
  founded: "2014",
  employees: "50+",
  customers: "500+"
};

// Product Categories
export const PRODUCT_CATEGORIES = {
  PARACORD: "paracord",
  EBAND: "eband", 
  SERVICE: "service"
} as const;

export type ProductCategory = typeof PRODUCT_CATEGORIES[keyof typeof PRODUCT_CATEGORIES];

// Note: Navigation items moved to src/lib/content/ui.ts in NAVIGATION_CONTENT
// Note: Social media links moved to src/lib/content/ui.ts in FOOTER_CONTENT  
// Note: Business hours and response times moved to src/lib/content/contact.ts

// App Configuration
export const APP_CONFIG = {
  name: "Paracord Pro Website",
  version: "1.0.0",
  description: "Website chính thức của Paracord Pro - Chuyên sản xuất dây dù và dây đai thun chất lượng cao",
  keywords: "dây dù, dây đai thun, paracord, elastic band, sản xuất dây, gia công dây",
  author: "Paracord Pro Team",
  currentYear: new Date().getFullYear()
};

// Export content constants
export * from './content';

