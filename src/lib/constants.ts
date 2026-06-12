/**
 * App Constants for MINH TIEN STRING CO., LTD
 * Thông tin cơ bản về công ty và cấu hình ứng dụng
 */

// Company Information
export const COMPANY_INFO = {
  name: "MINH TIEN STRING CO., LTD",
  vietnameseName: "Công ty TNHH sản xuất dây Minh Tiến",
  taxId: "0317581385",
  slogan: "Chất lượng - Uy tín - Chuyên nghiệp",
  description: "Chuyên sản xuất và gia công dây dù, dây đai thun cho ngành may mặc, balo túi xách, thể thao",
  email: "congtytnhhsxdayminhtien@gmail.com",
  phone: "0353788878",
  address: "49A, đường 460, ấp Thạnh An, xã Trung An, huyện Củ Chi, TP.HCM",
  googleMapsUrl: "https://maps.app.goo.gl/vNgVGKd6VuZsi1eJ7",
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
  name: "MINH TIEN STRING CO., LTD Website",
  version: "1.0.0",
  description: "Website chính thức của Công ty TNHH sản xuất dây Minh Tiến - Chuyên sản xuất dây dù và dây đai thun chất lượng cao",
  keywords: "dây dù, dây đai thun, paracord, elastic band, sản xuất dây, gia công dây",
  author: "MINH TIEN STRING CO., LTD Team",
  currentYear: new Date().getFullYear()
};

// Export content constants
export * from './content';

