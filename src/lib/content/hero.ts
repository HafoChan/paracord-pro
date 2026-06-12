/**
 * Hero Section Content
 * Chứa tất cả nội dung cho các hero sections trên website
 */

// Hero Section chính
export const HERO_CONTENT = {
  title: "Sản xuất dây dù và dây đai thun chất lượng cao",
  subtitle: "Phục vụ khách hàng trên toàn quốc với chất lượng uy tín",
  keyFeatures: [
    { text: "Gia công theo yêu cầu", delay: "0s" },
    { text: "Đa dạng màu sắc", delay: "0.5s" },
    { text: "Giao hàng toàn quốc", delay: "1s" },
  ],
  ctaButtons: {
    primary: "Xem sản phẩm",
    secondary: "Gọi ngay"
  },
  trustIndicators: {
    title: "Được tin tưởng bởi các doanh nghiệp",
    industries: [
      { name: "Ngành may mặc", ariaLabel: "Clothing industry" },
      { name: "Balo - túi xách", ariaLabel: "Backpacks and bags" },
      { name: "Đồ thể thao", ariaLabel: "Sports equipment" },
      { name: "Y tế - sức khỏe", ariaLabel: "Healthcare" },
      { name: "Thủ công mỹ nghệ", ariaLabel: "Handicrafts" },
    ]
  }
};

// Hero Slider Content
export const HERO_SLIDES = [
  {
    id: 1,
    title: "Sản xuất dây dù chuyên nghiệp",
    subtitle: "Giải pháp toàn diện cho ngành dệt may và phụ kiện",
    description: "Với công nghệ hiện đại và đội ngũ kỹ thuật giàu kinh nghiệm",
    backgroundImage: "/assets/samples/sample1.jpg"
  },
  {
    id: 2,
    title: "Dây đai thun cao cấp", 
    subtitle: "Chất lượng vượt trội, độ bền đảm bảo",
    description: "Đáp ứng mọi yêu cầu từ cơ bản đến phức tạp",
    backgroundImage: "/assets/samples/sample2.jpg"
  },
  {
    id: 3,
    title: "Gia công theo yêu cầu",
    subtitle: "Từ ý tưởng đến sản phẩm hoàn thiện",
    description: "Tư vấn thiết kế và sản xuất theo tiêu chuẩn quốc tế",
    backgroundImage: "/assets/samples/sample3.jpg"
  }
];

export const HERO_SLIDER_FEATURES = [
  { text: "Chất lượng cao", icon: "Award" },
  { text: "Gia công theo yêu cầu", icon: "Target" }, 
  { text: "Giao hàng toàn quốc", icon: "Truck" }
];

export const HERO_SLIDER_BRAND = {
  name: "MINH TIEN STRING CO., LTD",
  tagline: "Sản xuất dây chuyên nghiệp"
};

export const HERO_SLIDER_CTA = {
  primary: {
    text: "Khám phá sản phẩm",
    href: "/products"
  },
  secondary: {
    text: "Gọi ngay",
    href: "tel:0353788878"
  }
};

