/**
 * Product Data
 * Chứa tất cả dữ liệu sản phẩm của website
 * Được import từ file Excel nhập liệu sản phẩm
 * 
 * Generated: 2026-06-11T06:21:19.432Z
 * Source: Bieu_mau_nhap_lieu_san_pham.xlsx
 * Total: 67 sản phẩm
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
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
  
  if (category) {
    slug = `${slug}-${category}`;
  }
  
  return slug;
}

// All Products Data - imported from Excel
export const PRODUCTS_DATA: Product[] = [
  // ============ DÂY DÙ ============
  {
    id: "dd-001",
    name: "1.2MM POLY STRING",
    slug: "12mm-poly-string",
    size: "1.2mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "300đ - 500đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-002",
    name: "1.2MM POLY STRING + 0.38MM 2 LINE",
    slug: "12mm-poly-string-038mm-2-line",
    size: "1.2mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "900đ - 1.300đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-003",
    name: "1.5MM POLY STRING",
    slug: "15mm-poly-string",
    size: "1.5mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "300đ - 500đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-004",
    name: "1.5MM POLY STRING + 0.38MM 1L",
    slug: "15mm-poly-string-038mm-1l",
    size: "1.5mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "700đ - 1.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-005",
    name: "2MM POLY STRING",
    slug: "2mm-poly-string",
    size: "2mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "300đ - 500đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-006",
    name: "2MM POLY STRING +0.38MM 1L",
    slug: "2mm-poly-string-038mm-1l",
    size: "2mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "900đ - 1.300đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-007",
    name: "2MM PP STRING",
    slug: "2mm-pp-string",
    size: "2mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "300đ - 500đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-008",
    name: "2.5MM POLY STRING",
    slug: "25mm-poly-string",
    size: "2.5mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "300đ - 500đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-009",
    name: "2.5MM POLY STRING + 0.38MM 1L",
    slug: "25mm-poly-string-038mm-1l",
    size: "2.5mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.200đ - 1.600đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-010",
    name: "2.5MM NYLON STRING",
    slug: "25mm-nylon-string",
    size: "2.5mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.300đ - 1.700đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-011",
    name: "3MM POLY STRING",
    slug: "3mm-poly-string",
    size: "3mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "400đ - 600đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-012",
    name: "3MM POLY STRING  + 0.38MM 2 LINE",
    slug: "3mm-poly-string-038mm-2-line",
    size: "3mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.300đ - 1.800đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-013",
    name: "3MM NYLON STRING",
    slug: "3mm-nylon-string",
    size: "3mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "2.000đ - 3.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-014",
    name: "4MM POLY STRING",
    slug: "4mm-poly-string",
    size: "4mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "500đ - 800đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-015",
    name: "5MM PP 900D STRING",
    slug: "5mm-pp-900d-string",
    size: "5mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "300đ - 500đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-016",
    name: "5MM POLY STRING 32FLY KO LOI",
    slug: "5mm-poly-string-32fly-ko-loi",
    size: "5mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "900đ - 1.300đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-017",
    name: "5MM POLY STRING KO LOI CO LINE",
    slug: "5mm-poly-string-ko-loi-co-line",
    size: "5mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.100đ - 1.600đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-018",
    name: "6MM PP 900D STRING",
    slug: "6mm-pp-900d-string",
    size: "6mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.000đ - 1.300đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-019",
    name: "7MM POLY STRING KO LÕI DQ NHÚM SLC",
    slug: "7mm-poly-string-ko-loi-dq-nhum-slc",
    size: "7mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "3.200đ - 4.200đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-020",
    name: "7MM POLY STRING KO LOI DQ",
    slug: "7mm-poly-string-ko-loi-dq",
    size: "7mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.200đ - 1.600đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-021",
    name: "10MM DRAWSTRING COTTON(PP 900D)",
    slug: "10mm-drawstring-cottonpp-900d",
    size: "10mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "2.000đ - 2.700đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dd-022",
    name: "16MM POLY STRING",
    slug: "16mm-poly-string",
    size: "16mm",
    category: "day-du",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "6.000đ - 7.800đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  // ============ DÂY THUN ============
  {
    id: "dth-001",
    name: "6MM EBAND NEW",
    slug: "6mm-eband-new",
    size: "6mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "700đ - 1.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-002",
    name: "9MM EBAND NEW",
    slug: "9mm-eband-new",
    size: "9mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.000đ - 1.300đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-003",
    name: "10MM ELASTIC BAND FLAT",
    slug: "10mm-elastic-band-flat",
    size: "10mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.000đ - 1.300đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-004",
    name: "10MM EBAND TWILL",
    slug: "10mm-eband-twill",
    size: "10mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.600đ - 2.100đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-005",
    name: "15MM ELASTIC BAND FLAT",
    slug: "15mm-elastic-band-flat",
    size: "15mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.500đ - 1.800đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-006",
    name: "15MM ELASTIC BAND FOLD",
    slug: "15mm-elastic-band-fold",
    size: "15mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.500đ - 1.800đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-007",
    name: "20MM EBAND TWILL",
    slug: "20mm-eband-twill",
    size: "20mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "3.000đ - 4.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-008",
    name: "20MM ELASTIC BAND FLAT",
    slug: "20mm-elastic-band-flat",
    size: "20mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "2.000đ - 2.600đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-009",
    name: "20MM ELASTIC BAND FOLD",
    slug: "20mm-elastic-band-fold",
    size: "20mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "2.000đ - 2.600đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-010",
    name: "23MM ELASTIC BAND FOLD",
    slug: "23mm-elastic-band-fold",
    size: "23mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "2.300đ - 3.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-011",
    name: "25MM ELASTIC BAND FLAT",
    slug: "25mm-elastic-band-flat",
    size: "25mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "2.500đ - 3.300đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-012",
    name: "25MM ELASTIC BAND FOLD",
    slug: "25mm-elastic-band-fold",
    size: "25mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "2.500đ - 3.300đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-013",
    name: "25MM EBAND TWILL",
    slug: "25mm-eband-twill",
    size: "25mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "3.800đ - 5.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-014",
    name: "30MM ELASTIC BAND FLAT",
    slug: "30mm-elastic-band-flat",
    size: "30mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "3.000đ - 4.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-015",
    name: "38MM ELASTIC BAND FLAT",
    slug: "38mm-elastic-band-flat",
    size: "38mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "3.800đ - 5.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dth-016",
    name: "50MM ELASTIC BAND FLAT",
    slug: "50mm-elastic-band-flat",
    size: "50mm",
    category: "day-thun",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "5.100đ - 6.500đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  // ============ DÂY DÙ THUN ============
  {
    id: "ddt-001",
    name: "2MM R.STRING",
    slug: "2mm-rstring",
    size: "2mm",
    category: "day-du-thun",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "900đ - 1.300đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "ddt-002",
    name: "2MM R.STRING+0.38MM 1 LINE",
    slug: "2mm-rstring038mm-1-line",
    size: "2mm",
    category: "day-du-thun",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "2.000đ - 2.700đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "ddt-003",
    name: "2.5MM R.STRING",
    slug: "25mm-rstring",
    size: "2.5mm",
    category: "day-du-thun",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.200đ - 1.600đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "ddt-004",
    name: "2.5MM R.STRING+0.38MM 1 LINE",
    slug: "25mm-rstring038mm-1-line",
    size: "2.5mm",
    category: "day-du-thun",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "2.200đ - 2.900đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "ddt-005",
    name: "3MM R.STRING",
    slug: "3mm-rstring",
    size: "3mm",
    category: "day-du-thun",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.300đ - 1.700đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "ddt-006",
    name: "3MM R.STRING+0.38MM 1 LINE",
    slug: "3mm-rstring038mm-1-line",
    size: "3mm",
    category: "day-du-thun",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "2.600đ - 3.500đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "ddt-007",
    name: "3MM R.STRING DQ NHÚM SLC",
    slug: "3mm-rstring-dq-nhum-slc",
    size: "3mm",
    category: "day-du-thun",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "8.300đ - 11.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "ddt-008",
    name: "3.5MM R.STRING",
    slug: "35mm-rstring",
    size: "3.5mm",
    category: "day-du-thun",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.800đ - 2.500đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "ddt-009",
    name: "6MM PP 900D R.STRING",
    slug: "6mm-pp-900d-rstring",
    size: "6mm",
    category: "day-du-thun",
    description: "Loại dây tròn, bền và dẻo, được ứng dụng trong may mặc làm dây luồn quần áo, áo khoác, túi xách; ngoài ra còn dùng trong đan ghế, đồ thủ công mỹ nghệ, handmade và trang trí nhờ tính thẩm mỹ và độ bền cao.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "2.900đ - 3.800đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  // ============ DÂY TÍP ============
  {
    id: "dt-001",
    name: "3MM POLY STRING TIP 125CM",
    slug: "3mm-poly-string-tip-125cm",
    size: "3mm",
    category: "day-tip",
    description: "Dây tròn bền đẹp, có bấm đầu kim loại hoặc nhựa, thường dùng làm dây luồn quần áo, áo khoác, balo và túi xách",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100 cái/bó",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "600đ - 1.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dt-002",
    name: "3MM R STRING TIP 30CM",
    slug: "3mm-r-string-tip-30cm",
    size: "3mm",
    category: "day-tip",
    description: "Dây tròn bền đẹp, có bấm đầu kim loại hoặc nhựa, được dùng làm dây luồn quần áo, áo khoác, balo và túi xách",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100 cái/bó",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "400đ - 600đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dt-003",
    name: "3.5MM POLY STRING TIP 150CM",
    slug: "35mm-poly-string-tip-150cm",
    size: "3.5mm",
    category: "day-tip",
    description: "Dây tròn bền đẹp, có bấm đầu kim loại hoặc nhựa, thường dùng làm dây luồn quần áo, áo khoác, balo và túi xách",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100 cái/bó",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "800đ - 1.100đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dt-004",
    name: "4MM ROUND STRING 135cm + 20mm CLEAR TIP",
    slug: "4mm-round-string-135cm-20mm-clear-tip",
    size: "4mm",
    category: "day-tip",
    description: "Dây tròn bền đẹp, có bấm đầu kim loại hoặc nhựa, thường dùng làm dây luồn quần áo, áo khoác, balo và túi xách",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "100 cái/bó",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.400đ - 1.900đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  // ============ DÂY ĐAI ============
  {
    id: "dda-001",
    name: "6MM PLAIN DOUBLE",
    slug: "6mm-plain-double",
    size: "6mm",
    category: "day-dai",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "400đ - 600đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dda-002",
    name: "10MM PLAIN DOUBLE",
    slug: "10mm-plain-double",
    size: "10mm",
    category: "day-dai",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "500đ - 800đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dda-003",
    name: "10MM POLY TAPE HBT",
    slug: "10mm-poly-tape-hbt",
    size: "10mm",
    category: "day-dai",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "600đ - 800đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dda-004",
    name: "15MM PLAIN DOUBLE",
    slug: "15mm-plain-double",
    size: "15mm",
    category: "day-dai",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "700đ - 1.200đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dda-005",
    name: "15MM POLY WEBBING SMALL GROOVE",
    slug: "15mm-poly-webbing-small-groove",
    size: "15mm",
    category: "day-dai",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "2.000đ - 4.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dda-006",
    name: "20MM PLAIN DOUBLE",
    slug: "20mm-plain-double",
    size: "20mm",
    category: "day-dai",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.000đ - 1.600đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dda-007",
    name: "20MM POLY WEBBING SMALL GROOVE",
    slug: "20mm-poly-webbing-small-groove",
    size: "20mm",
    category: "day-dai",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "2.500đ - 5.500đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dda-008",
    name: "20MM POLY TAPE HBT",
    slug: "20mm-poly-tape-hbt",
    size: "20mm",
    category: "day-dai",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.200đ - 1.600đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dda-009",
    name: "23MM POLY TAPE HBT",
    slug: "23mm-poly-tape-hbt",
    size: "23mm",
    category: "day-dai",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.300đ - 1.800đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dda-010",
    name: "25MM POLY TAPE HBT",
    slug: "25mm-poly-tape-hbt",
    size: "25mm",
    category: "day-dai",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "1.500đ - 2.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dda-011",
    name: "25MM POLY WEBBING SMALL GROOVE",
    slug: "25mm-poly-webbing-small-groove",
    size: "25mm",
    category: "day-dai",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "3.500đ - 7.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dda-012",
    name: "38MM POLY WEBBING SMALL GROOVE",
    slug: "38mm-poly-webbing-small-groove",
    size: "38mm",
    category: "day-dai",
    description: "Loại dây bản dẹp có độ chắc và đàn hồi tốt, được dùng trong balo, túi xách, dây cố định, quai đeo và nhiều sản phẩm may mặc giúp tăng độ bền và khả năng chịu lự",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "4.800đ - 10.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  // ============ DÂY CHỮ ============
  {
    id: "dc-001",
    name: "25MM PP/WEBBING Jacquard",
    slug: "25mm-ppwebbing-jacquard",
    size: "25mm",
    category: "day-chu",
    description: "Dây bản dẹp được dệt trực tiếp chữ, logo hoặc họa tiết theo yêu cầu, được dùng trong balo, túi xách, quai đeo và sản phẩm thời trang để tăng tính thẩm mỹ và nhận diện thương hiệu.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "2.500đ - 3.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: false,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
  {
    id: "dc-002",
    name: "38MM PP/WEBBING Jacquard",
    slug: "38mm-ppwebbing-jacquard",
    size: "38mm",
    category: "day-chu",
    description: "Dây bản dẹp được dệt trực tiếp chữ, logo hoặc họa tiết theo yêu cầu, được dùng trong balo, túi xách, quai đeo và sản phẩm thời trang để tăng tính thẩm mỹ và nhận diện thương hiệu.",
    specifications: {
          "colors": "Đen và nhiều màu khác",
          "length": "50m/cuộn",
          "material": "Poly, PP, Nylon, spandex,.."
    },
    priceRange: "5.500đ - 7.000đ/mét",
    colors: ["black"],
    images: [],
    isFeatured: true,
    createdAt: "2026-06-11T06:21:19.432Z",
    updatedAt: "2026-06-11T06:21:19.432Z"
  },
];

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
