/**
 * Image constants for the ParacordPro website
 * Centralized management of all image assets
 */

// Base paths
const ASSETS_BASE = '/assets';
const PRODUCTS_BASE = `${ASSETS_BASE}/products`;
const FACTORY_BASE = `${ASSETS_BASE}/factory`;
const SAMPLES_BASE = `${ASSETS_BASE}/samples`;

// Sample images from img/ folder
export const SAMPLE_IMAGES = {
  sample1: `${SAMPLES_BASE}/sample1.jpg`,
  sample2: `${SAMPLES_BASE}/sample2.jpg`,
  sample3: `${SAMPLES_BASE}/sample3.jpg`,
  sample4: `${SAMPLES_BASE}/sample4.jpg`,
  sample5: `${SAMPLES_BASE}/sample5.jpg`,
  sample6: `${SAMPLES_BASE}/sample6.jpg`,
  sample7: `${SAMPLES_BASE}/sample7.jpg`,
} as const;

// Factory images from img/ folder
export const FACTORY_IMAGES = {
  factory1: `${FACTORY_BASE}/factory1.jpg`,
  factory2: `${FACTORY_BASE}/factory2.jpg`,
  factory3: `${FACTORY_BASE}/factory3.jpg`,
  factory4: `${FACTORY_BASE}/factory4.jpg`,
  factory5: `${FACTORY_BASE}/factory5.jpg`,
} as const;

// Product category image mappings
export const PRODUCT_IMAGES = {
  paracord: {
    primary: SAMPLE_IMAGES.sample1,
    secondary: [SAMPLE_IMAGES.sample2, SAMPLE_IMAGES.sample3, SAMPLE_IMAGES.sample4],
    featured: SAMPLE_IMAGES.sample1,
  },
  eband: {
    primary: SAMPLE_IMAGES.sample5,
    secondary: [SAMPLE_IMAGES.sample6, SAMPLE_IMAGES.sample7, SAMPLE_IMAGES.sample1],
    featured: SAMPLE_IMAGES.sample5,
  },
  service: {
    primary: SAMPLE_IMAGES.sample7,
    secondary: [SAMPLE_IMAGES.sample6, SAMPLE_IMAGES.sample5, SAMPLE_IMAGES.sample4],
    featured: SAMPLE_IMAGES.sample7,
  },
} as const;

// Specific product image assignments
export const SPECIFIC_PRODUCT_IMAGES = {
  // Paracord products
  paracord_black: {
    main: SAMPLE_IMAGES.sample1,
    gallery: [SAMPLE_IMAGES.sample1, SAMPLE_IMAGES.sample2, SAMPLE_IMAGES.sample3],
  },
  paracord_colorful: {
    main: SAMPLE_IMAGES.sample2,
    gallery: [SAMPLE_IMAGES.sample2, SAMPLE_IMAGES.sample3, SAMPLE_IMAGES.sample4],
  },
  paracord_rainbow: {
    main: SAMPLE_IMAGES.sample3,
    gallery: [SAMPLE_IMAGES.sample3, SAMPLE_IMAGES.sample4, SAMPLE_IMAGES.sample1],
  },
  
  // Eband products
  eband_multi: {
    main: SAMPLE_IMAGES.sample5,
    gallery: [SAMPLE_IMAGES.sample5, SAMPLE_IMAGES.sample6, SAMPLE_IMAGES.sample7],
  },
  eband_white: {
    main: SAMPLE_IMAGES.sample6,
    gallery: [SAMPLE_IMAGES.sample6, SAMPLE_IMAGES.sample7, SAMPLE_IMAGES.sample5],
  },
  
  // Service products
  service_tip: {
    main: SAMPLE_IMAGES.sample7,
    gallery: [SAMPLE_IMAGES.sample7, SAMPLE_IMAGES.sample6, SAMPLE_IMAGES.sample5],
  },
} as const;

// Background and pattern images
export const BACKGROUND_IMAGES = {
  heroFactory: FACTORY_IMAGES.factory1,
  aboutFactory: FACTORY_IMAGES.factory2,
  contactFactory: FACTORY_IMAGES.factory3,
  processingFactory: FACTORY_IMAGES.factory4,
  qualityFactory: FACTORY_IMAGES.factory5,
  circlePattern: '/patterns/circle-pattern.svg', // Keep existing pattern
} as const;

// Helper functions
export const getProductImage = (productId: string, type: 'main' | 'gallery' = 'main'): string | string[] => {
  const product = SPECIFIC_PRODUCT_IMAGES[productId as keyof typeof SPECIFIC_PRODUCT_IMAGES];
  if (product) {
    return type === 'main' ? product.main : [...product.gallery];
  }
  
  // Fallback to category-based images
  if (productId.includes('paracord')) {
    return type === 'main' ? PRODUCT_IMAGES.paracord.primary : [...PRODUCT_IMAGES.paracord.secondary];
  } else if (productId.includes('eband')) {
    return type === 'main' ? PRODUCT_IMAGES.eband.primary : [...PRODUCT_IMAGES.eband.secondary];
  } else {
    return type === 'main' ? PRODUCT_IMAGES.service.primary : [...PRODUCT_IMAGES.service.secondary];
  }
};

export const getCategoryImage = (category: 'paracord' | 'eband' | 'service') => {
  return PRODUCT_IMAGES[category]?.featured || SAMPLE_IMAGES.sample1;
};

// Featured products with proper image assignments
export const FEATURED_PRODUCTS_IMAGES = [
  {
    id: "1",
    name: "Dây dù bản tròn",
    category: "Paracord",
    description: "Dây dù đa năng cho quần áo, áo khoác, dây rút balo. Có thể bấm đầu típ và cắt theo yêu cầu.",
    features: ["Đa dạng màu sắc", "Gia công bấm đầu", "Cắt theo yêu cầu"],
    priceRange: "Liên hệ để báo giá",
    image: PRODUCT_IMAGES.paracord.featured
  },
  {
    id: "2",
    name: "Dây đai thun Eband",
    category: "Eband", 
    description: "Dây đai thun bản dẹp cho quai balo, túi xách, thun lưng. Độ đàn hồi cao, bền chắc.",
    features: ["Độ đàn hồi cao", "Bền chắc", "Đặt theo độ rộng"],
    priceRange: "Liên hệ để báo giá",
    image: PRODUCT_IMAGES.eband.featured
  },
  {
    id: "3",
    name: "Dịch vụ gia công",
    category: "Dịch vụ",
    description: "Chế biến, cắt, nối, bấm đầu, đóng gói. Tư vấn thiết kế mẫu và lên đơn nhanh.",
    features: ["Tư vấn thiết kế", "Gia công nhanh", "Đóng gói chuyên nghiệp"], 
    priceRange: "Theo yêu cầu",
    image: PRODUCT_IMAGES.service.featured
  }
];

export type ProductCategory = keyof typeof PRODUCT_IMAGES;
export type SampleImageKey = keyof typeof SAMPLE_IMAGES;
export type FactoryImageKey = keyof typeof FACTORY_IMAGES;
