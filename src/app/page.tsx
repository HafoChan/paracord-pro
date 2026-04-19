import { HeroSlider } from "@/components/sections/HeroSlider";
import { QuickCategories } from "@/components/sections/QuickCategories";
import { AboutSection } from "@/components/sections/AboutSection";
import { ApplicationShowcaseCompact } from "@/components/sections/ApplicationShowcaseCompact";
import { ManufacturingCapabilitiesCompact } from "@/components/sections/ManufacturingCapabilitiesCompact";
import { CustomerTestimonials } from "@/components/sections/CustomerTestimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { MainLayout } from "@/components/layout/MainLayout";
import { VideoWithContent } from "@/components/sections/VideoWithContent";

export default function Home() {
  return (
    <MainLayout>
      <HeroSlider />
      <QuickCategories />
      
      {/* Video giới thiệu với content bên cạnh */}
      <VideoWithContent
        videoId="dQw4w9WgXcQ"
        title="Công ty TNHH Sản xuất Dây Minh Tiến"
        description="Với hơn 10 năm kinh nghiệm trong ngành sản xuất dây dù và dây đai thun, chúng tôi tự hào là đối tác tin cậy của hàng trăm doanh nghiệp trên toàn quốc."
        features={[
          "Nhà xưởng 2,000m² với máy móc hiện đại",
          "Công suất 100,000m/tháng",
          "Hơn 200+ màu sắc có sẵn",
          "Đội ngũ 30+ nhân viên chuyên nghiệp"
        ]}
        layout="left"
        badge="Giới thiệu công ty"
      />
      
      <AboutSection />
      <ApplicationShowcaseCompact />
      <ManufacturingCapabilitiesCompact />
      
      {/* Video quy trình sản xuất với content bên phải */}
      <VideoWithContent
        videoId="Qdn0i9PTQQs"
        title="Quy trình sản xuất chuyên nghiệp"
        description="Mỗi sản phẩm đều trải qua quy trình kiểm soát chất lượng nghiêm ngặt, từ khâu chọn nguyên liệu đến thành phẩm hoàn thiện."
        features={[
          "Nguyên liệu nhập khẩu chất lượng cao",
          "Kiểm tra chất lượng từng công đoạn",
          "Đóng gói cẩn thận, giao hàng đúng hẹn",
          "Bảo hành và hỗ trợ sau bán hàng"
        ]}
        layout="right"
        badge="Quy trình sản xuất"
      />
      
      <CustomerTestimonials />
      <ContactCTA />
    </MainLayout>
  );
}
