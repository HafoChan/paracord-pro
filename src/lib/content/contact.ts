/**
 * Contact Content
 * Chứa tất cả nội dung liên quan đến liên hệ và forms
 */

// Contact Hero Content
export const CONTACT_HERO = {
  title: "Liên hệ với chúng tôi",
  subtitle: "Sẵn sàng hỗ trợ và tư vấn cho mọi nhu cầu của bạn",
  description: "Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng lắng nghe và đưa ra giải pháp tối ưu nhất cho dự án của bạn."
};

// Contact Info Content
export const CONTACT_INFO = {
  title: "Thông tin liên hệ",
  subtitle: "Nhiều cách để kết nối với chúng tôi",
  workingHours: {
    title: "Giờ làm việc",
    schedule: [
      "Thứ 2 - Thứ 7: 7:00 - 19:00",
      "Chủ nhật: Nghỉ"
    ]
  },
  responseTime: {
    title: "Thời gian phản hồi",
    details: [
      "Điện thoại: Ngay lập tức",
      "Email: Trong vòng 2 giờ",
      "Báo giá: Trong vòng 24 giờ"
    ]
  }
};

// Business Hours (moved from constants.ts)
export const BUSINESS_HOURS = {
  workdays: "Thứ 2 - Thứ 7: 7:00 - 19:00", 
  sunday: "Chủ nhật: Nghỉ"
};

// Response Times (moved from constants.ts)
export const RESPONSE_TIMES = {
  phone: "Ngay lập tức",
  email: "Trong vòng 2 giờ",
  quote: "Trong vòng 24 giờ"
};

// Contact Form Content
export const CONTACT_FORM = {
  title: "Gửi tin nhắn cho chúng tôi",
  subtitle: "Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.",
  fields: {
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
      required: true,
      rows: 6,
      helper: "Thông tin càng chi tiết, chúng tôi càng có thể tư vấn chính xác hơn."
    }
  },
  buttons: {
    submit: "Gửi tin nhắn",
    submitting: "Đang gửi..."
  },
  privacyNote: "Bằng việc gửi tin nhắn, bạn đồng ý với việc chúng tôi thu thập và xử lý thông tin để phục vụ mục đích tư vấn và hỗ trợ khách hàng."
};

// Success Message Content
export const SUCCESS_MESSAGE = {
  title: "Cảm ơn bạn đã liên hệ!",
  description: "Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi trong vòng 30 phút trong giờ làm việc. Để được hỗ trợ nhanh hơn, vui lòng gọi hotline.",
  callToAction: {
    text: "Gọi ngay",
    phoneDisplay: "0353788878"
  }
};

// Contact CTA Content  
export const CONTACT_CTA = {
  title: "Sẵn sàng bắt đầu dự án?",
  subtitle: "Liên hệ ngay để được tư vấn miễn phí",
  description: "Đội ngũ chuyên gia của chúng tôi sẽ hỗ trợ bạn từ khâu thiết kế đến sản xuất hoàn thiện.",
  buttons: {
    primary: {
      text: "Liên hệ tư vấn",
      href: "/contact"
    },
    secondary: {
      text: "Gọi hotline",
      href: "tel:0353788878"
    }
  },
  features: [
    "Tư vấn miễn phí 24/7",
    "Báo giá nhanh chóng", 
    "Hỗ trợ kỹ thuật chuyên nghiệp"
  ]
};

