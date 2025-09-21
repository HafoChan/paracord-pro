/**
 * Forms Content
 * Chứa tất cả nội dung liên quan đến forms và validation
 */

// Contact Form Content (additional to existing contact.ts)
export const CONTACT_FORM_UI = {
  title: "Gửi tin nhắn cho chúng tôi",
  subtitle: "Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.",
  successMessage: {
    title: "Cảm ơn bạn đã liên hệ!",
    description: "Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi trong vòng 30 phút trong giờ làm việc. Để được hỗ trợ nhanh hơn, vui lòng gọi hotline.",
    callToAction: {
      text: "Gọi ngay: 0353788878",
      phone: "0353788878"
    }
  }
};

// Form Field Labels and Placeholders
export const FORM_FIELDS = {
  name: {
    label: "Họ và tên",
    placeholder: "Nhập họ và tên của bạn",
    required: true
  },
  email: {
    label: "Email",
    placeholder: "email@example.com",
    required: false
  },
  phone: {
    label: "Số điện thoại",
    placeholder: "0353788878",
    required: true
  },
  company: {
    label: "Công ty",
    placeholder: "Tên công ty (nếu có)",
    required: false
  },
  message: {
    label: "Nội dung tin nhắn",
    placeholder: "Vui lòng mô tả chi tiết nhu cầu của bạn: loại sản phẩm, số lượng, yêu cầu đặc biệt...",
    helper: "Thông tin càng chi tiết, chúng tôi càng có thể tư vấn chính xác hơn.",
    required: true
  }
};

// Form Buttons
export const FORM_BUTTONS = {
  submit: {
    default: "Gửi tin nhắn",
    loading: "Đang gửi..."
  }
};

// Privacy Notice
export const PRIVACY_NOTICE = "Bằng việc gửi tin nhắn, bạn đồng ý với việc chúng tôi thu thập và xử lý thông tin để phục vụ mục đích tư vấn và hỗ trợ khách hàng.";

// Search and Filter Content
export const SEARCH_FILTER = {
  search: {
    placeholder: "Tìm kiếm sản phẩm...",
    resultsCount: "Hiển thị {count} sản phẩm",
    searchResults: "Kết quả cho \"{term}\"",
    noResults: {
      message: "Không tìm thấy sản phẩm nào phù hợp",
      clearButton: "Xóa bộ lọc"
    }
  },
  sort: {
    label: "Sắp xếp:",
    options: [
      { value: "name", label: "Tên sản phẩm" },
      { value: "price", label: "Giá" },
      { value: "category", label: "Danh mục" },
      { value: "featured", label: "Nổi bật" }
    ]
  },
  viewModes: {
    grid: "Lưới",
    list: "Danh sách"
  },
  loadMore: {
    buttonText: "Xem thêm sản phẩm",
    summary: "Hiển thị {count} sản phẩm • Còn nhiều sản phẩm khác"
  }
};
