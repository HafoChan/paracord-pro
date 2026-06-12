import { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { AboutHero } from "@/components/sections/AboutHero";
import { CompanyStory } from "@/components/sections/CompanyStory";
import { ManufacturingCapabilities } from "@/components/sections/ManufacturingCapabilities";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ApplicationShowcase } from "@/components/sections/ApplicationShowcase";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { VideoGrid } from "@/components/sections/VideoGrid";
import { VideoSection } from "@/components/ui/VideoSection";

export const metadata: Metadata = {
  title: "Giới thiệu - MINH TIEN STRING CO., LTD | Về chúng tôi",
  description: "Tìm hiểu về Công ty TNHH sản xuất dây Minh Tiến - đơn vị tiên phong trong sản xuất dây dù và dây đai thun tại Việt Nam. Năng lực sản xuất, đội ngũ chuyên nghiệp và cam kết chất lượng.",
  keywords: ["giới thiệu paracord pro", "về chúng tôi", "năng lực sản xuất", "đội ngũ", "chất lượng"],
};

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutHero />
      
      {/* Video câu chuyện công ty - Hero style */}
      <VideoSection
        videoId="CcNJaDuTgQ4"
        title="Hành trình 10 năm phát triển"
        description="Từ một xưởng nhỏ đến đối tác tin cậy của hàng trăm doanh nghiệp"
        variant="hero"
      />
      
      <CompanyStory />
      <ManufacturingCapabilities />
      
      {/* Video Grid - Nhiều video về nhà máy và ứng dụng */}
      <VideoGrid
        title="Khám phá cơ sở sản xuất và ứng dụng thực tế"
        description="Xem video để hiểu rõ hơn về quy trình sản xuất và cách sản phẩm được ứng dụng"
        columns={2}
        videos={[
          {
            id: "9bZkp7q19f0",
            title: "Tour tham quan nhà máy",
            description: "Khám phá cơ sở sản xuất hiện đại với máy móc tiên tiến"
          },
          {
            id: "M7lc1UVf-VE",
            title: "Case Study từ khách hàng",
            description: "Xem cách doanh nghiệp sử dụng sản phẩm trong thực tế"
          }
        ]}
      />
      
      <CertificationsSection />
      <ApplicationShowcase />
      <PartnerLogos />
      <TeamSection />
      <ContactCTA />
    </MainLayout>
  );
}

