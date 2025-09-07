/**
 * Assets Management
 * Centralized management of all static assets and images
 */

// Base Asset Paths
export const ASSET_PATHS = {
  base: '/assets',
  factory: '/assets/factory',
  samples: '/assets/samples',
  products: '/assets/products',
  patterns: '/patterns',
  placeholders: '/placeholders'
} as const;

// Sample Images from img/ folder
export const SAMPLE_IMAGES = {
  sample1: `${ASSET_PATHS.samples}/sample1.jpg`,
  sample2: `${ASSET_PATHS.samples}/sample2.jpg`,
  sample3: `${ASSET_PATHS.samples}/sample3.jpg`,
  sample4: `${ASSET_PATHS.samples}/sample4.jpg`,
  sample5: `${ASSET_PATHS.samples}/sample5.jpg`,
  sample6: `${ASSET_PATHS.samples}/sample6.jpg`,
  sample7: `${ASSET_PATHS.samples}/sample7.jpg`,
} as const;

// Factory Images
export const FACTORY_IMAGES = {
  factory1: `${ASSET_PATHS.factory}/factory1.jpg`,
  factory2: `${ASSET_PATHS.factory}/factory2.jpg`,
  factory3: `${ASSET_PATHS.factory}/factory3.jpg`,
  factory4: `${ASSET_PATHS.factory}/factory4.jpg`,
  factory5: `${ASSET_PATHS.factory}/factory5.jpg`,
} as const;

// Background and Pattern Images
export const BACKGROUND_IMAGES = {
  heroFactory: FACTORY_IMAGES.factory1,
  aboutFactory: FACTORY_IMAGES.factory2,
  contactFactory: FACTORY_IMAGES.factory3,
  processingFactory: FACTORY_IMAGES.factory4,
  qualityFactory: FACTORY_IMAGES.factory5,
  circlePattern: '/patterns/circle-pattern.svg',
} as const;

// Product Category Image Mappings
export const PRODUCT_CATEGORY_IMAGES = {
  paracord: {
    primary: SAMPLE_IMAGES.sample1,
    secondary: [SAMPLE_IMAGES.sample2, SAMPLE_IMAGES.sample3, SAMPLE_IMAGES.sample4],
    featured: SAMPLE_IMAGES.sample1,
    thumbnail: SAMPLE_IMAGES.sample1
  },
  eband: {
    primary: SAMPLE_IMAGES.sample5,
    secondary: [SAMPLE_IMAGES.sample6, SAMPLE_IMAGES.sample7, SAMPLE_IMAGES.sample1],
    featured: SAMPLE_IMAGES.sample5,
    thumbnail: SAMPLE_IMAGES.sample5
  },
  service: {
    primary: SAMPLE_IMAGES.sample7,
    secondary: [SAMPLE_IMAGES.sample6, SAMPLE_IMAGES.sample5, SAMPLE_IMAGES.sample4],
    featured: SAMPLE_IMAGES.sample7,
    thumbnail: SAMPLE_IMAGES.sample7
  },
} as const;

// Specific Product Image Assignments
export const SPECIFIC_PRODUCT_IMAGES = {
  // Paracord products
  paracord_black: {
    main: SAMPLE_IMAGES.sample1,
    gallery: [SAMPLE_IMAGES.sample1, SAMPLE_IMAGES.sample2, SAMPLE_IMAGES.sample3],
    thumbnail: SAMPLE_IMAGES.sample1
  },
  paracord_colorful: {
    main: SAMPLE_IMAGES.sample2,
    gallery: [SAMPLE_IMAGES.sample2, SAMPLE_IMAGES.sample3, SAMPLE_IMAGES.sample4],
    thumbnail: SAMPLE_IMAGES.sample2
  },
  paracord_rainbow: {
    main: SAMPLE_IMAGES.sample3,
    gallery: [SAMPLE_IMAGES.sample3, SAMPLE_IMAGES.sample4, SAMPLE_IMAGES.sample1],
    thumbnail: SAMPLE_IMAGES.sample3
  },
  
  // Eband products
  eband_multi: {
    main: SAMPLE_IMAGES.sample5,
    gallery: [SAMPLE_IMAGES.sample5, SAMPLE_IMAGES.sample6, SAMPLE_IMAGES.sample7],
    thumbnail: SAMPLE_IMAGES.sample5
  },
  eband_white: {
    main: SAMPLE_IMAGES.sample6,
    gallery: [SAMPLE_IMAGES.sample6, SAMPLE_IMAGES.sample7, SAMPLE_IMAGES.sample5],
    thumbnail: SAMPLE_IMAGES.sample6
  },
  
  // Service products
  service_tip: {
    main: SAMPLE_IMAGES.sample7,
    gallery: [SAMPLE_IMAGES.sample7, SAMPLE_IMAGES.sample6, SAMPLE_IMAGES.sample5],
    thumbnail: SAMPLE_IMAGES.sample7
  },
} as const;

// Placeholder Images
export const PLACEHOLDER_IMAGES = {
  paracord: '/placeholders/paracord-sample.svg',
  eband: '/placeholders/eband-sample.svg', 
  service: '/placeholders/service-sample.svg'
} as const;

// Icon Assets
export const ICONS = {
  logo: {
    favicon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    android: '/android-chrome-192x192.png'
  },
  ui: {
    file: '/file.svg',
    globe: '/globe.svg',
    next: '/next.svg',
    vercel: '/vercel.svg',
    window: '/window.svg'
  }
} as const;

// Helper Functions
export const getProductImage = (productId: string, type: 'main' | 'gallery' | 'thumbnail' = 'main'): string | string[] => {
  const product = SPECIFIC_PRODUCT_IMAGES[productId as keyof typeof SPECIFIC_PRODUCT_IMAGES];
  if (product) {
    switch (type) {
      case 'main':
      case 'thumbnail':
        return product[type];
      case 'gallery':
        return [...product.gallery];
      default:
        return product.main;
    }
  }
  
  // Fallback to category-based images
  if (productId.includes('paracord')) {
    return type === 'gallery' 
      ? [...PRODUCT_CATEGORY_IMAGES.paracord.secondary] 
      : PRODUCT_CATEGORY_IMAGES.paracord.primary;
  } else if (productId.includes('eband')) {
    return type === 'gallery'
      ? [...PRODUCT_CATEGORY_IMAGES.eband.secondary]
      : PRODUCT_CATEGORY_IMAGES.eband.primary;
  } else {
    return type === 'gallery'
      ? [...PRODUCT_CATEGORY_IMAGES.service.secondary]
      : PRODUCT_CATEGORY_IMAGES.service.primary;
  }
};

export const getCategoryImage = (category: 'paracord' | 'eband' | 'service', type: 'featured' | 'primary' | 'thumbnail' = 'featured') => {
  return PRODUCT_CATEGORY_IMAGES[category]?.[type] || SAMPLE_IMAGES.sample1;
};

export const getBackgroundImage = (context: keyof typeof BACKGROUND_IMAGES) => {
  return BACKGROUND_IMAGES[context];
};

export const getPlaceholderImage = (type: keyof typeof PLACEHOLDER_IMAGES) => {
  return PLACEHOLDER_IMAGES[type];
};

// Type exports
export type SampleImageKey = keyof typeof SAMPLE_IMAGES;
export type FactoryImageKey = keyof typeof FACTORY_IMAGES;
export type ProductCategoryKey = keyof typeof PRODUCT_CATEGORY_IMAGES;
export type BackgroundImageKey = keyof typeof BACKGROUND_IMAGES;

