/**
 * Videos Content
 * Quản lý tập trung tất cả video IDs và metadata
 */

export interface VideoData {
  id: string;
  title: string;
  description: string;
  category?: string;
}

// Video IDs từ YouTube
export const VIDEO_IDS = {
  // Trang chủ
  COMPANY_INTRO: "dQw4w9WgXcQ",
  MANUFACTURING_PROCESS: "Qdn0i9PTQQs",
  
  // Trang Products
  PRODUCT_GUIDE: "M7lc1UVf-VE",
  CUSTOMIZATION_GUIDE: "oHg5SJYRHA0",
  
  // Product Demo by Category
  PARACORD_DEMO: "uelHwf8o7_U",
  EBAND_DEMO: "kJQP7kiw5Fk",
  SERVICE_DEMO: "YQHsXMglC9A",
  
  // Trang About
  COMPANY_STORY: "CcNJaDuTgQ4",
  FACTORY_TOUR: "9bZkp7q19f0",
  APPLICATION_CASE_STUDY: "82s8PRgYSRU", // Thay bằng video ID khác
  
  // Trang Contact
  CONTACT_GUIDE: "kffacxfA7G4",
} as const;

// Metadata cho từng video
export const VIDEO_METADATA: Record<string, VideoData> = {
  [VIDEO_IDS.COMPANY_INTRO]: {
    id: VIDEO_IDS.COMPANY_INTRO,
    title: "Giới thiệu Công ty TNHH Sản xuất Dây Minh Tiến",
    description: "Khám phá hành trình 10 năm phát triển và cam kết chất lượng của chúng tôi"
  },
  
  [VIDEO_IDS.MANUFACTURING_PROCESS]: {
    id: VIDEO_IDS.MANUFACTURING_PROCESS,
    title: "Quy trình sản xuất chuyên nghiệp",
    description: "Từ nguyên liệu đầu vào đến thành phẩm hoàn thiện - mỗi bước đều được kiểm soát chặt chẽ"
  },
  
  [VIDEO_IDS.PRODUCT_GUIDE]: {
    id: VIDEO_IDS.PRODUCT_GUIDE,
    title: "Hướng dẫn chọn sản phẩm phù hợp",
    description: "Tìm hiểu về các dòng sản phẩm và cách lựa chọn sản phẩm phù hợp với nhu cầu của bạn"
  },
  
  [VIDEO_IDS.CUSTOMIZATION_GUIDE]: {
    id: VIDEO_IDS.CUSTOMIZATION_GUIDE,
    title: "Hướng dẫn đặt hàng tùy chỉnh",
    description: "Cách chọn màu sắc, kích thước và các tùy chọn khác cho sản phẩm của bạn"
  },
  
  [VIDEO_IDS.PARACORD_DEMO]: {
    id: VIDEO_IDS.PARACORD_DEMO,
    title: "Ứng dụng thực tế của Dây dù (Paracord)",
    description: "Xem cách dây dù được sử dụng trong các ngành may mặc, balo, đồ thể thao và nhiều lĩnh vực khác",
    category: "day-du"
  },
  
  [VIDEO_IDS.EBAND_DEMO]: {
    id: VIDEO_IDS.EBAND_DEMO,
    title: "Ứng dụng của Dây đai thun (Elastic Band)",
    description: "Khám phá tính năng co giãn vượt trội và ứng dụng đa dạng của dây đai thun chất lượng cao",
    category: "day-thun"
  },
  
  [VIDEO_IDS.SERVICE_DEMO]: {
    id: VIDEO_IDS.SERVICE_DEMO,
    title: "Dịch vụ gia công chuyên nghiệp",
    description: "Quy trình tư vấn, thiết kế và gia công sản phẩm theo yêu cầu của khách hàng",
    category: "service"
  },
  
  [VIDEO_IDS.COMPANY_STORY]: {
    id: VIDEO_IDS.COMPANY_STORY,
    title: "Câu chuyện thành lập và phát triển",
    description: "Hành trình từ một xưởng nhỏ đến đối tác tin cậy của hàng trăm doanh nghiệp"
  },
  
  [VIDEO_IDS.FACTORY_TOUR]: {
    id: VIDEO_IDS.FACTORY_TOUR,
    title: "Tour tham quan nhà máy sản xuất",
    description: "Khám phá cơ sở sản xuất hiện đại với máy móc tiên tiến và quy trình chuyên nghiệp"
  },
  
  [VIDEO_IDS.APPLICATION_CASE_STUDY]: {
    id: VIDEO_IDS.APPLICATION_CASE_STUDY,
    title: "Case Study: Ứng dụng thực tế từ khách hàng",
    description: "Xem cách các doanh nghiệp sử dụng sản phẩm của chúng tôi trong sản xuất và kinh doanh"
  },
  
  [VIDEO_IDS.CONTACT_GUIDE]: {
    id: VIDEO_IDS.CONTACT_GUIDE,
    title: "Quy trình tư vấn và hỗ trợ khách hàng",
    description: "Gặp gỡ đội ngũ chuyên nghiệp và tìm hiểu cách chúng tôi hỗ trợ bạn"
  }
};

// Helper function để lấy video metadata
export function getVideoMetadata(videoId: string): VideoData | undefined {
  return VIDEO_METADATA[videoId];
}

// Helper function để lấy video theo category
export function getVideoByCategory(category: string): VideoData | undefined {
  const videoId = {
    paracord: VIDEO_IDS.PARACORD_DEMO,
    eband: VIDEO_IDS.EBAND_DEMO,
    service: VIDEO_IDS.SERVICE_DEMO
  }[category];
  
  return videoId ? VIDEO_METADATA[videoId] : undefined;
}

// Video sections configuration
export const VIDEO_SECTIONS = {
  HOME: {
    intro: VIDEO_IDS.COMPANY_INTRO,
    manufacturing: VIDEO_IDS.MANUFACTURING_PROCESS
  },
  PRODUCTS: {
    guide: VIDEO_IDS.PRODUCT_GUIDE,
    customization: VIDEO_IDS.CUSTOMIZATION_GUIDE,
    demos: {
      paracord: VIDEO_IDS.PARACORD_DEMO,
      eband: VIDEO_IDS.EBAND_DEMO,
      service: VIDEO_IDS.SERVICE_DEMO
    }
  },
  ABOUT: {
    story: VIDEO_IDS.COMPANY_STORY,
    factory: VIDEO_IDS.FACTORY_TOUR,
    caseStudy: VIDEO_IDS.APPLICATION_CASE_STUDY
  },
  CONTACT: {
    guide: VIDEO_IDS.CONTACT_GUIDE
  }
} as const;
