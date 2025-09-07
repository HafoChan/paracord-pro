/**
 * Location & Map Content
 * Chứa tất cả nội dung liên quan đến địa điểm và bản đồ
 */

// Location Map Content
export const LOCATION_MAP = {
  title: "Vị trí của chúng tôi",
  subtitle: "Đến thăm showroom và nhà máy sản xuất của chúng tôi để trải nghiệm trực tiếp sản phẩm.",
  mapPlaceholder: {
    title: "Bản đồ Google Maps",
    description: "Tích hợp bản đồ sẽ hiển thị vị trí chính xác của công ty",
    buttonText: "Mở trong Google Maps"
  },
  addresses: {
    title: "Địa chỉ",
    showroom: {
      title: "Showroom & Văn phòng",
      address: "Địa chỉ showroom"
    },
    factory: {
      title: "Nhà máy sản xuất", 
      address: "Địa chỉ nhà máy"
    }
  },
  visitNotes: {
    title: "Lưu ý khi đến thăm",
    notes: [
      "Vui lòng liên hệ trước khi đến để được hỗ trợ tốt nhất",
      "Có thể tham quan nhà máy sản xuất theo lịch hẹn",
      "Mang theo danh thiếp hoặc giấy tờ giới thiệu công ty",
      "Đội ngũ tư vấn sẵn sàng hỗ trợ từ 8:00 - 17:30"
    ]
  }
};

// Company Address (this would be replaced with actual addresses)
export const COMPANY_ADDRESS = {
  showroom: "Địa chỉ showroom",
  factory: "Địa chỉ nhà máy",
  googleMapsQuery: "Địa chỉ công ty" // This would be the actual address for Google Maps
};
