/**
 * Script nhập liệu sản phẩm từ file Excel
 * 
 * Cách chạy:
 *   npm run import-products
 * 
 * File Excel: Bieu_mau_nhap_lieu_san_pham.xlsx
 * Sheet: "Nhập Liệu Sản Phẩm"
 * 
 * Cấu trúc cột:
 * A: MÃ SẢN PHẨM (tự sinh nếu trống)
 * B: TÊN SẢN PHẨM
 * C: SIZE(MM)
 * D: DANH MỤC SẢN PHẨM
 * E: ĐƯỜNG DẪN / SLUG (tự sinh nếu trống)
 * F: MÔ TẢ CHI TIẾT
 * G: KHOẢNG GIÁ
 * H: NỔI BẬT (TRUE/FALSE)
 * I: HÌNH ẢNH (cách bằng |)
 * J: LINK VIDEO
 * K: TS: MÀU SẮC
 * L: TS: CHIỀU DÀI
 * M: TS: CHẤT LIỆU
 * N: TS: ĐỘ RỘNG
 * O: TS: ĐỘ CO GIÃN
 * P: TS: PHƯƠNG PHÁP LÀM
 * Q: TS: SỐ LƯỢNG NHẬN
 * R: TS: GIAO HÀNG
 */

import ExcelJS from "exceljs";
import * as path from "path";
import * as fs from "fs";

// === CONFIGURATION ===
const EXCEL_FILE = path.resolve(__dirname, "../Bieu_mau_nhap_lieu_san_pham.xlsx");
const SHEET_NAME = "Nhập Liệu Sản Phẩm";
const OUTPUT_FILE = path.resolve(__dirname, "../src/lib/data/products.ts");
const HEADER_ROW = 2; // Row containing column headers
const DATA_START_ROW = 3; // First row of actual data (includes sample rows)

// === CATEGORY MAPPING ===
const CATEGORY_MAP: Record<string, string> = {
  "DÂY DÙ": "day-du",
  "DÂY DÙ THUN": "day-du-thun",
  "DÂY TÍP": "day-tip",
  "DÂY THUN": "day-thun",
  "DÂY ĐAI": "day-dai",
  "DÂY CHỮ": "day-chu",
  "DỊCH VỤ": "service",
  // Support English category names from sample rows
  "PARACORD": "day-du",
  "EBAND": "day-thun",
  "SERVICE": "service",
};

// ID prefix for each category
const CATEGORY_ID_PREFIX: Record<string, string> = {
  "day-du": "dd",
  "day-du-thun": "ddt",
  "day-tip": "dt",
  "day-thun": "dth",
  "day-dai": "dda",
  "day-chu": "dc",
  "service": "sv",
};

// === HELPERS ===

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[àáảãạăắằẳẵặâấầẩẫậ]/g, "a")
    .replace(/[èéẻẽẹêếềểễệ]/g, "e")
    .replace(/[ìíỉĩị]/g, "i")
    .replace(/[òóỏõọôốồổỗộơớờởỡợ]/g, "o")
    .replace(/[ùúủũụưứừửữự]/g, "u")
    .replace(/[ỳýỷỹỵ]/g, "y")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function getCellValue(row: ExcelJS.Row, col: number): string {
  const cell = row.getCell(col);
  if (!cell || !cell.value) return "";
  
  // Handle rich text
  if (typeof cell.value === "object" && "richText" in cell.value) {
    return (cell.value as ExcelJS.CellRichTextValue).richText
      .map((rt) => rt.text)
      .join("");
  }
  
  return String(cell.value).trim();
}

interface ProductRow {
  id: string;
  name: string;
  size: string;
  category: string;
  slug: string;
  description: string;
  priceRange: string;
  isFeatured: boolean;
  images: string[];
  videoUrl: string;
  colors: string;
  length: string;
  material: string;
  width: string;
  elasticity: string;
  processing: string;
  quantity: string;
  delivery: string;
}

// === MAIN ===

async function importProducts() {
  console.log("📦 Bắt đầu nhập liệu sản phẩm từ Excel...");
  console.log(`📂 File: ${EXCEL_FILE}`);

  // Check file exists
  if (!fs.existsSync(EXCEL_FILE)) {
    console.error(`❌ Không tìm thấy file: ${EXCEL_FILE}`);
    console.log("   Vui lòng đặt file Excel tại thư mục gốc dự án.");
    process.exit(1);
  }

  // Read Excel
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(EXCEL_FILE);

  const sheet = workbook.getWorksheet(SHEET_NAME);
  if (!sheet) {
    console.error(`❌ Không tìm thấy sheet: "${SHEET_NAME}"`);
    console.log("   Các sheet có sẵn:", workbook.worksheets.map((ws) => ws.name).join(", "));
    process.exit(1);
  }

  console.log(`📋 Sheet: "${SHEET_NAME}" - ${sheet.rowCount} dòng`);

  // Parse products
  const products: ProductRow[] = [];
  const categoryCounters: Record<string, number> = {};

  sheet.eachRow((row, rowNumber) => {
    if (rowNumber < DATA_START_ROW) return; // Skip header rows

    const name = getCellValue(row, 2); // Column B: TÊN SẢN PHẨM
    const size = getCellValue(row, 3); // Column C: SIZE(MM)
    const categoryRaw = getCellValue(row, 4); // Column D: DANH MỤC

    if (!name || !categoryRaw) return; // Skip empty rows

    const category = CATEGORY_MAP[categoryRaw.toUpperCase().trim()];
    if (!category) {
      console.warn(`⚠️  Dòng ${rowNumber}: Danh mục không hợp lệ: "${categoryRaw}"`);
      return;
    }

    const existingId = getCellValue(row, 1); // Column A: MÃ SẢN PHẨM
    
    // Skip sample/template rows (rows with pre-filled IDs are examples)
    if (existingId) {
      console.log(`ℹ️  Dòng ${rowNumber}: Bỏ qua dòng mẫu (${existingId})`);
      return;
    }

    const existingSlug = getCellValue(row, 5); // Column E: SLUG
    const description = getCellValue(row, 6); // Column F
    const priceRange = getCellValue(row, 7); // Column G
    const isFeaturedRaw = getCellValue(row, 8).toUpperCase(); // Column H
    const imagesRaw = getCellValue(row, 9); // Column I
    const videoUrl = getCellValue(row, 10); // Column J
    const colors = getCellValue(row, 11); // Column K
    const length = getCellValue(row, 12); // Column L
    const material = getCellValue(row, 13); // Column M
    const width = getCellValue(row, 14); // Column N
    const elasticity = getCellValue(row, 15); // Column O
    const processing = getCellValue(row, 16); // Column P
    const quantity = getCellValue(row, 17); // Column Q
    const delivery = getCellValue(row, 18); // Column R

    products.push({
      id: "", // Will be auto-generated
      name: name.trim(),
      size: size, // SIZE(MM) column
      category,
      slug: existingSlug, // May be empty, will be generated
      description,
      priceRange,
      isFeatured: isFeaturedRaw === "TRUE",
      images: imagesRaw ? imagesRaw.split("|").map((s) => s.trim()).filter(Boolean) : [],
      videoUrl,
      colors,
      length,
      material,
      width,
      elasticity,
      processing,
      quantity,
      delivery,
    });
  });

  console.log(`✅ Đã đọc ${products.length} sản phẩm`);

  // Generate slugs for products without one
  // Display name includes size if available: "1.2MM POLY STRING" 
  const getDisplayName = (p: ProductRow) => {
    if (p.size) return `${p.size}MM ${p.name}`;
    return p.name;
  };

  // Count slug occurrences to detect duplicates
  const slugCounts: Record<string, number> = {};
  products.forEach((product) => {
    if (!product.slug) {
      const slug = generateSlug(getDisplayName(product));
      slugCounts[slug] = (slugCounts[slug] || 0) + 1;
    }
  });

  // Assign slugs (append category if duplicate)
  products.forEach((product) => {
    if (!product.slug) {
      const baseSlug = generateSlug(getDisplayName(product));
      if (slugCounts[baseSlug] > 1) {
        product.slug = `${baseSlug}-${product.category}`;
      } else {
        product.slug = baseSlug;
      }
    }
  });

  // Generate IDs for all products
  products.forEach((product) => {
    const prefix = CATEGORY_ID_PREFIX[product.category] || "xx";
    categoryCounters[product.category] = (categoryCounters[product.category] || 0) + 1;
    const num = String(categoryCounters[product.category]).padStart(3, "0");
    product.id = `${prefix}-${num}`;
  });

  // Generate output TypeScript
  const now = new Date().toISOString();
  
  let output = `/**
 * Product Data
 * Chứa tất cả dữ liệu sản phẩm của website
 * Được import từ file Excel nhập liệu sản phẩm
 * 
 * Generated: ${now}
 * Source: ${path.basename(EXCEL_FILE)}
 * Total: ${products.length} sản phẩm
 */

import { Product } from "@/types";
import { CATEGORY_DISPLAY_NAMES, ProductCategory } from "@/lib/constants";

// Helper: Generate slug from product name
function generateSlug(name: string, category?: string): string {
  let slug = name
    .toLowerCase()
    .replace(/[àáảãạăắằẳẵặâấầẩẫậ]/g, "a")
    .replace(/[èéẻẽẹêếềểễệ]/g, "e")
    .replace(/[ìíỉĩị]/g, "i")
    .replace(/[òóỏõọôốồổỗộơớờởỡợ]/g, "o")
    .replace(/[ùúủũụưứừửữự]/g, "u")
    .replace(/[ỳýỷỹỵ]/g, "y")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\\s-]/g, "")
    .replace(/\\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
  
  if (category) {
    slug = \`\${slug}-\${category}\`;
  }
  
  return slug;
}

// All Products Data - imported from Excel
export const PRODUCTS_DATA: Product[] = [
`;

  // Group by category for readability
  const categories = [...new Set(products.map((p) => p.category))];
  
  for (const cat of categories) {
    const catProducts = products.filter((p) => p.category === cat);
    const catName = Object.entries(CATEGORY_MAP).find(([, v]) => v === cat)?.[0] || cat;
    output += `  // ============ ${catName} ============\n`;

    for (const product of catProducts) {
      const specs: Record<string, string> = {};
      if (product.colors) specs.colors = product.colors;
      if (product.length) specs.length = product.length;
      if (product.material) specs.material = product.material;
      if (product.width) specs.width = product.width;
      if (product.elasticity) specs.elasticity = product.elasticity;
      if (product.processing) specs.processing = product.processing;
      if (product.quantity) specs.quantity = product.quantity;
      if (product.delivery) specs.delivery = product.delivery;

      const displayName = getDisplayName(product);

      output += `  {
    id: ${JSON.stringify(product.id)},
    name: ${JSON.stringify(displayName)},
    slug: ${JSON.stringify(product.slug)},${product.size ? `\n    size: ${JSON.stringify(product.size + "mm")},` : ""}
    category: ${JSON.stringify(product.category)},
    description: ${JSON.stringify(product.description)},
    specifications: ${JSON.stringify(specs, null, 6).replace(/\n/g, "\n    ")},
    priceRange: ${JSON.stringify(product.priceRange)},
    colors: ["black"],
    images: ${JSON.stringify(product.images)},${product.videoUrl ? `\n    videoUrl: ${JSON.stringify(product.videoUrl)},` : ""}
    isFeatured: ${product.isFeatured},
    createdAt: "${now}",
    updatedAt: "${now}"
  },\n`;
    }
  }

  output += `];

// Product Categories Data
export const PRODUCT_CATEGORIES_DATA = [
  {
    id: "day-du",
    name: "Dây dù",
    description: "Dây dù chất lượng cao, bền chắc cho nhiều ứng dụng",
    image: "/assets/samples/sample1.jpg",
    features: ["Bền chắc", "Đa dạng màu sắc", "Kháng nước"],
    productCount: PRODUCTS_DATA.filter(p => p.category === "day-du").length
  },
  {
    id: "day-du-thun",
    name: "Dây dù thun",
    description: "Dây dù có độ co giãn, kết hợp giữa bền chắc và đàn hồi",
    image: "/assets/samples/sample2.jpg",
    features: ["Co giãn", "Bền chắc", "Đa dạng kích cỡ"],
    productCount: PRODUCTS_DATA.filter(p => p.category === "day-du-thun").length
  },
  {
    id: "day-tip",
    name: "Dây típ",
    description: "Dây dù có bấm đầu típ kim loại hoặc nhựa sẵn",
    image: "/assets/samples/sample3.jpg",
    features: ["Bấm đầu sẵn", "Tiện lợi", "Đa dạng chiều dài"],
    productCount: PRODUCTS_DATA.filter(p => p.category === "day-tip").length
  },
  {
    id: "day-thun",
    name: "Dây thun",
    description: "Dây đai thun bản dẹp co giãn tốt cho các ứng dụng chuyên dụng",
    image: "/assets/samples/sample5.jpg",
    features: ["Co giãn cao", "Độ bền tốt", "Đa dạng kích thước"],
    productCount: PRODUCTS_DATA.filter(p => p.category === "day-thun").length
  },
  {
    id: "day-dai",
    name: "Dây đai",
    description: "Dây đai bản dẹp bền chắc cho balo, túi xách, quai đeo",
    image: "/assets/samples/sample4.jpg",
    features: ["Chịu lực cao", "Đa dạng độ rộng", "Bền chắc"],
    productCount: PRODUCTS_DATA.filter(p => p.category === "day-dai").length
  },
  {
    id: "day-chu",
    name: "Dây chữ (Jacquard)",
    description: "Dây đai dệt chữ, logo, họa tiết theo yêu cầu",
    image: "/assets/samples/sample6.jpg",
    features: ["Dệt chữ/logo", "Nhận diện thương hiệu", "Thẩm mỹ cao"],
    productCount: PRODUCTS_DATA.filter(p => p.category === "day-chu").length
  },
  {
    id: "service",
    name: "Dịch vụ gia công",
    description: "Các dịch vụ gia công chuyên nghiệp",
    image: "/assets/samples/sample7.jpg",
    features: ["Tư vấn thiết kế", "Gia công nhanh", "Chất lượng đảm bảo"],
    productCount: PRODUCTS_DATA.filter(p => p.category === "service").length
  }
];

// Featured Products Data (for homepage)
export const FEATURED_PRODUCTS_DATA = PRODUCTS_DATA
  .filter(p => p.isFeatured)
  .slice(0, 6)
  .map(p => ({
    id: p.id,
    name: p.name,
    category: CATEGORY_DISPLAY_NAMES[p.category as ProductCategory] || p.category,
    description: p.description,
    features: Object.values(p.specifications).filter(Boolean).slice(0, 3) as string[],
    priceRange: p.priceRange || "Liên hệ để báo giá",
    image: p.images[0] || "/assets/samples/sample1.jpg"
  }));

// Helper functions
export const getFeaturedProducts = () => {
  return PRODUCTS_DATA.filter(product => product.isFeatured);
};

export const getProductsByCategory = (category: string) => {
  return PRODUCTS_DATA.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return PRODUCTS_DATA.find(product => product.id === id);
};

export const getProductBySlug = (slug: string) => {
  return PRODUCTS_DATA.find(product => product.slug === slug);
};

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return PRODUCTS_DATA.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};

export { generateSlug };
export { CATEGORY_DISPLAY_NAMES };
`;

  // Write output
  fs.writeFileSync(OUTPUT_FILE, output, "utf-8");

  // Print summary
  console.log("\n📊 Tổng kết:");
  console.log("─".repeat(40));
  for (const cat of categories) {
    const catProducts = products.filter((p) => p.category === cat);
    const catName = Object.entries(CATEGORY_MAP).find(([, v]) => v === cat)?.[0] || cat;
    const featured = catProducts.filter(p => p.isFeatured).length;
    console.log(`  ${catName}: ${catProducts.length} sản phẩm (${featured} nổi bật)`);
  }
  console.log("─".repeat(40));
  console.log(`  TỔNG: ${products.length} sản phẩm`);
  console.log(`\n✅ Đã ghi file: ${OUTPUT_FILE}`);
}

importProducts().catch((err) => {
  console.error("❌ Lỗi:", err);
  process.exit(1);
});
