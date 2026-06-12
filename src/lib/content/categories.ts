/**
 * Categories Content
 * Chứa thông tin chi tiết về từng danh mục sản phẩm
 */

export const CATEGORY_DETAILS = {
  paracord: {
    id: "paracord",
    name: "Dây dù (Paracord)",
    description: "Dây dù chất lượng cao cho nhiều ứng dụng",
    longDescription: "Dây dù (Paracord) của chúng tôi được sản xuất từ chất liệu Polyester và Nylon cao cấp, đảm bảo độ bền chắc và khả năng chịu lực tốt. Với hơn 200 màu sắc đa dạng, chúng tôi có thể đáp ứng mọi nhu cầu thiết kế của khách hàng từ thời trang, thể thao đến thủ công mỹ nghệ.",
    features: [
      "Độ bền cao, chịu lực tốt",
      "Hơn 200 màu sắc đa dạng",
      "Chống nước, chống UV",
      "Đường kính từ 2mm - 8mm",
      "Có thể bấm đầu típ theo yêu cầu",
      "Cắt theo chiều dài tùy chỉnh"
    ],
    applications: [
      "Quần áo & Áo khoác",
      "Dây rút balo",
      "Dây tag treo",
      "Đồ thể thao",
      "Thủ công mỹ nghệ",
      "Phụ kiện thời trang"
    ],
    image: "/assets/samples/sample1.jpg"
  },
  eband: {
    id: "eband",
    name: "Dây đai thun (Elastic Band)",
    description: "Dây đai thun co giãn tốt cho các ứng dụng chuyên dụng",
    longDescription: "Dây đai thun (Elastic Band) với độ co giãn từ 150% - 250%, được sản xuất từ chất liệu cao su tổng hợp và polyester. Sản phẩm có độ đàn hồi cao, bền chắc theo thời gian, không bị giãn nhanh. Chúng tôi cung cấp đa dạng độ rộng từ 10mm đến 100mm, phù hợp cho mọi ứng dụng.",
    features: [
      "Độ co giãn 150% - 250%",
      "Độ bền cao, không giãn nhanh",
      "Đa dạng độ rộng (10mm - 100mm)",
      "Nhiều màu sắc lựa chọn",
      "Chất liệu an toàn, không độc hại",
      "Có thể in logo, họa tiết"
    ],
    applications: [
      "Quai balo & Túi xách",
      "Thun lưng quần",
      "Đồ thể thao",
      "Đồ y tế",
      "Khẩu trang",
      "Phụ kiện thời trang"
    ],
    image: "/assets/samples/sample5.jpg"
  },
  service: {
    id: "service",
    name: "Dịch vụ gia công",
    description: "Các dịch vụ gia công chuyên nghiệp",
    longDescription: "Chúng tôi cung cấp đầy đủ các dịch vụ gia công chuyên nghiệp từ tư vấn thiết kế, cắt, nối, bấm đầu típ đến đóng gói hoàn thiện. Với đội ngũ kỹ thuật giàu kinh nghiệm và máy móc hiện đại, chúng tôi cam kết giao hàng đúng hẹn với chất lượng cao nhất.",
    features: [
      "Tư vấn thiết kế miễn phí",
      "Cắt theo chiều dài yêu cầu",
      "Bấm đầu típ chuyên nghiệp",
      "Nối dây, hàn đầu",
      "Đóng gói theo yêu cầu",
      "Giao hàng nhanh 1-3 ngày"
    ],
    applications: [
      "Gia công theo mẫu",
      "Sản xuất hàng loạt",
      "Đơn hàng nhỏ lẻ",
      "Tư vấn giải pháp",
      "Thiết kế mẫu mới",
      "Hỗ trợ kỹ thuật"
    ],
    image: "/assets/samples/sample7.jpg"
  }
};

export const getCategoryDetail = (categoryId: string) => {
  return CATEGORY_DETAILS[categoryId as keyof typeof CATEGORY_DETAILS];
};
