/**
 * UI Content
 * Chứa các text dùng chung cho UI elements
 */

// Header Content
export const HEADER_CONTENT = {
  logo: {
    shortName: "PP",
    tagline: "Chất lượng cao"
  },
  phone: {
    label: "Gọi ngay",
    ariaLabel: "Call us"
  },
  contact: {
    text: "Liên hệ ngay",
    ariaLabel: "Contact us"
  }
};

// Navigation Content
export const NAVIGATION_CONTENT = {
  items: [
    { name: "Trang chủ", href: "/" },
    { name: "Sản phẩm", href: "/products" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Liên hệ", href: "/contact" }
  ],
  mobileMenu: {
    open: "Mở menu",
    close: "Đóng menu"
  }
};

// Footer Content
export const FOOTER_CONTENT = {
  sections: {
    quickLinks: {
      title: "Liên kết nhanh"
    },
    contact: {
      title: "Liên hệ"
    }
  },
  copyright: {
    prefix: "©",
    suffix: "Tất cả quyền được bảo lưu."
  },
  designCredit: "Thiết kế bởi Paracord Pro",
  status: {
    indicator: "Đang hoạt động"
  },
  socialMedia: {
    title: "Mạng xã hội",
    links: {
      facebook: { name: "Facebook", url: "#" },
      tiktok: { name: "TikTok", url: "#" },
      zalo: { name: "Zalo", url: "#" }
    }
  }
};

// Button Content
export const BUTTONS = {
  // Common actions
  viewMore: "Xem thêm",
  viewLess: "Thu gọn",
  learnMore: "Tìm hiểu thêm",
  readMore: "Đọc thêm",
  viewAll: "Xem tất cả",
  
  // Contact actions
  contact: "Liên hệ",
  callNow: "Gọi ngay",
  getQuote: "Yêu cầu báo giá",
  
  // Form actions
  submit: "Gửi",
  send: "Gửi đi",
  save: "Lưu",
  cancel: "Hủy",
  reset: "Đặt lại",
  
  // Navigation
  back: "Quay lại",
  next: "Tiếp theo", 
  previous: "Trước đó",
  close: "Đóng",
  
  // Search/Filter
  search: "Tìm kiếm",
  filter: "Lọc",
  sort: "Sắp xếp",
  clear: "Xóa",
  
  // Loading states
  loading: "Đang tải...",
  submitting: "Đang gửi...",
  processing: "Đang xử lý..."
};

// Loading States
export const LOADING_STATES = {
  loading: "Đang tải...",
  submitting: "Đang gửi...",
  processing: "Đang xử lý...",
  saving: "Đang lưu...",
  searching: "Đang tìm kiếm...",
  updating: "Đang cập nhật..."
};

// Error Messages
export const ERROR_MESSAGES = {
  general: "Đã xảy ra lỗi. Vui lòng thử lại.",
  network: "Lỗi kết nối mạng. Vui lòng kiểm tra kết nối.",
  validation: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.",
  notFound: "Không tìm thấy dữ liệu yêu cầu.",
  unauthorized: "Bạn không có quyền truy cập.",
  serverError: "Lỗi máy chủ. Vui lòng thử lại sau."
};

// Success Messages  
export const SUCCESS_MESSAGES = {
  saved: "Đã lưu thành công!",
  sent: "Đã gửi thành công!",
  updated: "Đã cập nhật thành công!",
  deleted: "Đã xóa thành công!",
  submitted: "Đã gửi thành công!"
};

// Validation Messages
export const VALIDATION_MESSAGES = {
  required: "Trường này là bắt buộc",
  email: "Email không hợp lệ", 
  phone: "Số điện thoại không hợp lệ",
  minLength: "Tối thiểu {min} ký tự",
  maxLength: "Tối đa {max} ký tự",
  numeric: "Chỉ chấp nhận số",
  alphanumeric: "Chỉ chấp nhận chữ và số"
};

// Accessibility Labels
export const A11Y_LABELS = {
  menu: "Menu",
  search: "Tìm kiếm",
  close: "Đóng",
  expand: "Mở rộng",
  collapse: "Thu gọn",
  next: "Trang tiếp theo",
  previous: "Trang trước",
  loading: "Đang tải nội dung"
};

