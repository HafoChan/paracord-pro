/**
 * Product Data
 * Chứa tất cả dữ liệu sản phẩm của website
 */

import { SPECIFIC_PRODUCT_IMAGES } from "@/lib/assets";
import { Product } from "@/types";

// Featured Products Data
export const FEATURED_PRODUCTS_DATA = [
  {
    id: "1",
    name: "Dây dù bản tròn",
    category: "Paracord",
    description: "Dây dù đa năng cho quần áo, áo khoác, dây rút balo. Có thể bấm đầu típ và cắt theo yêu cầu.",
    features: ["Đa dạng màu sắc", "Gia công bấm đầu", "Cắt theo yêu cầu"],
    priceRange: "Liên hệ để báo giá",
    image: "/assets/samples/sample1.jpg"
  },
  {
    id: "2",
    name: "Dây đai thun Eband",
    category: "Eband", 
    description: "Dây đai thun bản dẹp cho quai balo, túi xách, thun lưng. Độ đàn hồi cao, bền chắc.",
    features: ["Độ đàn hồi cao", "Bền chắc", "Đặt theo độ rộng"],
    priceRange: "Liên hệ để báo giá",
    image: "/assets/samples/sample5.jpg"
  },
  {
    id: "3",
    name: "Dịch vụ gia công",
    category: "Dịch vụ",
    description: "Chế biến, cắt, nối, bấm đầu, đóng gói. Tư vấn thiết kế mẫu và lên đơn nhanh.",
    features: ["Tư vấn thiết kế", "Gia công nhanh", "Đóng gói chuyên nghiệp"], 
    priceRange: "Theo yêu cầu",
    image: "/assets/samples/sample7.jpg"
  }
];

// All Products Data
export const PRODUCTS_DATA: Product[] = [
  {
    id: "1",
    name: "Dây dù bản tròn màu đen",
    category: "paracord",
    description: "Dây dù chất lượng cao, bền chắc, phù hợp cho quần áo và phụ kiện thời trang",
    specifications: {
      diameter: "4mm",
      length: "100m",
      material: "Polyester"
    },
    priceRange: "50,000 - 80,000 VNĐ/m",
    colors: ["black"],
    images: [SPECIFIC_PRODUCT_IMAGES.paracord_black.main],
    isFeatured: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "2", 
    name: "Dây đai thun đa năng",
    category: "eband",
    description: "Dây đai thun co giãn tốt, ideal cho quai balo và túi xách",
    specifications: {
      width: "20mm",
      length: "50m",
      elasticity: "150%"
    },
    priceRange: "80,000 - 120,000 VNĐ/m",
    colors: ["black", "white", "blue"],
    images: [SPECIFIC_PRODUCT_IMAGES.eband_multi.main],
    isFeatured: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "3",
    name: "Dây dù màu đỏ cam",
    category: "paracord", 
    description: "Dây dù màu sắc nổi bật, chất lượng cao cho các ứng dụng thể thao",
    specifications: {
      diameter: "5mm",
      length: "200m",
      material: "Nylon"
    },
    priceRange: "60,000 - 90,000 VNĐ/m",
    colors: ["red", "orange"],
    images: [SPECIFIC_PRODUCT_IMAGES.paracord_colorful.main],
    isFeatured: false,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "4",
    name: "Dịch vụ bấm đầu típ",
    category: "service",
    description: "Dịch vụ gia công bấm đầu típ chuyên nghiệp, nhanh chóng",
    specifications: {
      processing: "Bấm đầu típ",
      quantity: "Min 100 chiếc",
      delivery: "2-3 ngày"
    },
    priceRange: "5,000 - 15,000 VNĐ/chiếc",
    colors: [],
    images: [SPECIFIC_PRODUCT_IMAGES.service_tip.main],
    isFeatured: false,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "5",
    name: "Dây đai thun trắng",
    category: "eband",
    description: "Dây đai thun màu trắng tinh khiết, phù hợp cho y tế và thời trang",
    specifications: {
      width: "15mm",
      length: "100m", 
      elasticity: "200%"
    },
    priceRange: "70,000 - 100,000 VNĐ/m",
    colors: ["white"],
    images: [SPECIFIC_PRODUCT_IMAGES.eband_white.main],
    isFeatured: false,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "6",
    name: "Dây dù đa màu sắc",
    category: "paracord",
    description: "Bộ sưu tập dây dù với nhiều màu sắc đa dạng cho mọi nhu cầu",
    specifications: {
      diameter: "3mm",
      length: "50m",
      colors: "10+ màu"
    },
    priceRange: "45,000 - 75,000 VNĐ/m",
    colors: ["red", "blue", "green", "yellow", "pink"],
    images: [SPECIFIC_PRODUCT_IMAGES.paracord_rainbow.main],
    isFeatured: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  }
];

// Product Categories Data
export const PRODUCT_CATEGORIES_DATA = [
  {
    id: "paracord",
    name: "Dây dù (Paracord)",
    description: "Dây dù chất lượng cao cho nhiều ứng dụng",
    image: "/assets/samples/sample1.jpg",
    features: ["Bền chắc", "Đa dạng màu sắc", "Kháng nước"],
    productCount: PRODUCTS_DATA.filter(p => p.category === "paracord").length
  },
  {
    id: "eband", 
    name: "Dây đai thun (Elastic Band)",
    description: "Dây đai thun co giãn tốt cho các ứng dụng chuyên dụng",
    image: "/assets/samples/sample5.jpg",
    features: ["Co giãn cao", "Độ bền tốt", "Đa dạng kích thước"],
    productCount: PRODUCTS_DATA.filter(p => p.category === "eband").length
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

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return PRODUCTS_DATA.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};

