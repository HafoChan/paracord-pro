/**
 * Products Content
 * Chứa tất cả nội dung liên quan đến sản phẩm
 */

// Products Hero Content
export const PRODUCTS_HERO = {
  title: "Danh mục sản phẩm",
  subtitle: "Khám phá bộ sưu tập đa dạng các sản phẩm chất lượng cao",
  description: "Từ dây dù đa năng đến dây đai thun chuyên dụng, chúng tôi cung cấp giải pháp hoàn chỉnh cho mọi nhu cầu của bạn."
};

// Featured Products Content
export const FEATURED_PRODUCTS_SECTION = {
  title: {
    highlight: "Sản phẩm",
    accent: "nổi bật"
  },
  subtitle: "Khám phá các sản phẩm chất lượng cao được nhiều khách hàng tin tưởng và lựa chọn hàng đầu",
  cta: {
    title: "Khám phá thêm",
    description: "Xem toàn bộ danh mục sản phẩm của chúng tôi",
    buttonText: "Xem tất cả sản phẩm",
    href: "/products"
  }
};

// Product Grid Content
export const PRODUCT_GRID = {
  searchPlaceholder: "Tìm kiếm sản phẩm...",
  sortOptions: [
    { value: "name", label: "Tên sản phẩm" },
    { value: "price", label: "Giá" },
    { value: "category", label: "Danh mục" },
    { value: "featured", label: "Nổi bật" }
  ],
  sortLabel: "Sắp xếp:",
  viewModes: {
    grid: "Lưới",
    list: "Danh sách"
  },
  resultsText: "Hiển thị {count} sản phẩm",
  searchResultsText: "Kết quả cho \"{term}\"",
  noResults: {
    message: "Không tìm thấy sản phẩm nào phù hợp",
    clearButton: "Xóa bộ lọc"
  },
  loadMore: {
    buttonText: "Xem thêm sản phẩm",
    summary: "Hiển thị {count} sản phẩm • Còn nhiều sản phẩm khác"
  }
};

// Product Categories
export const PRODUCT_CATEGORIES_CONTENT = {
  paracord: {
    name: "Dây dù (Paracord)",
    description: "Dây dù chất lượng cao cho nhiều ứng dụng",
    features: ["Bền chắc", "Đa dạng màu sắc", "Kháng nước"]
  },
  eband: {
    name: "Dây đai thun (Elastic Band)",
    description: "Dây đai thun co giãn tốt cho các ứng dụng chuyên dụng", 
    features: ["Co giãn cao", "Độ bền tốt", "Đa dạng kích thước"]
  },
  service: {
    name: "Dịch vụ gia công",
    description: "Các dịch vụ gia công chuyên nghiệp",
    features: ["Tư vấn thiết kế", "Gia công nhanh", "Chất lượng đảm bảo"]
  }
};

// Quick Categories Content
export const QUICK_CATEGORIES = {
  title: "Danh mục nhanh",
  categories: [
    {
      name: "Dây dù",
      description: "Dây dù đa năng cho mọi ứng dụng", 
      icon: "rope",
      href: "/products?category=paracord"
    },
    {
      name: "Dây đai thun",
      description: "Dây thun co giãn chất lượng cao",
      icon: "elastic", 
      href: "/products?category=eband"
    },
    {
      name: "Dịch vụ",
      description: "Gia công và tư vấn chuyên nghiệp",
      icon: "service",
      href: "/products?category=service"
    }
  ]
};

// Product Card Content
export const PRODUCT_CARD = {
  pricePrefix: "Từ",
  buttons: {
    quote: "Yêu cầu báo giá",
    viewDetail: "Xem chi tiết",
    favorite: "Yêu thích", 
    share: "Chia sẻ"
  },
  badges: {
    featured: "Nổi bật",
    new: "Mới",
    sale: "Khuyến mãi"
  }
};

// Product Detail Content
export const PRODUCT_DETAIL = {
  sections: {
    overview: "Tổng quan",
    specifications: "Thông số kỹ thuật", 
    features: "Tính năng",
    gallery: "Thư viện ảnh"
  },
  labels: {
    category: "Danh mục",
    priceRange: "Khoảng giá",
    colors: "Màu sắc có sẵn",
    specifications: "Thông số",
    description: "Mô tả sản phẩm"
  },
  buttons: {
    requestQuote: "Yêu cầu báo giá",
    contact: "Liên hệ tư vấn",
    backToProducts: "Quay lại danh sách"
  }
};

