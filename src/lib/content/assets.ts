/**
 * Assets Content
 * Tổ chức và quản lý tất cả assets (hình ảnh, icons, files)
 */

// Company Images
export const COMPANY_IMAGES = {
  factory: {
    factory1: "/assets/factory/factory1.jpg",
    factory2: "/assets/factory/factory2.jpg", 
    factory3: "/assets/factory/factory3.jpg",
    factory4: "/assets/factory/factory4.jpg",
    factory5: "/assets/factory/factory5.jpg"
  },
  samples: {
    sample1: "/assets/samples/sample1.jpg",
    sample2: "/assets/samples/sample2.jpg",
    sample3: "/assets/samples/sample3.jpg",
    sample4: "/assets/samples/sample4.jpg",
    sample5: "/assets/samples/sample5.jpg",
    sample6: "/assets/samples/sample6.jpg",
    sample7: "/assets/samples/sample7.jpg"
  }
};

// UI Assets
export const UI_ASSETS = {
  patterns: {
    circle: "/patterns/circle-pattern.svg"
  },
  placeholders: {
    paracord: "/placeholders/paracord-sample.svg",
    eband: "/placeholders/eband-sample.svg", 
    service: "/placeholders/service-sample.svg"
  },
  icons: {
    file: "/file.svg",
    globe: "/globe.svg",
    next: "/next.svg",
    window: "/window.svg",
    vercel: "/vercel.svg"
  }
};

// Hero Background Images
export const HERO_BACKGROUNDS = [
  COMPANY_IMAGES.samples.sample1,
  COMPANY_IMAGES.samples.sample2,
  COMPANY_IMAGES.samples.sample3
];

// Default Product Images by Category
export const DEFAULT_PRODUCT_IMAGES = {
  paracord: UI_ASSETS.placeholders.paracord,
  eband: UI_ASSETS.placeholders.eband,
  service: UI_ASSETS.placeholders.service
};

// Company Logo Assets
export const LOGO_ASSETS = {
  favicon: "/favicon.ico",
  // Additional logo variations would go here
};

// Image Alt Text Templates
export const IMAGE_ALT_TEXTS = {
  factory: "Nhà máy sản xuất MINH TIEN STRING CO., LTD",
  sample: "Mẫu sản phẩm dây dù và dây đai thun",
  product: {
    paracord: "Sản phẩm dây dù chất lượng cao",
    eband: "Sản phẩm dây đai thun co giãn",
    service: "Dịch vụ gia công chuyên nghiệp"
  }
};
