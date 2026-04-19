import { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm";
import { LocationMap } from "@/components/sections/LocationMap";
import { VideoSection } from "@/components/ui/VideoSection";

export const metadata: Metadata = {
  title: "Liên hệ - MINH TIEN STRING CO., LTD | Tư vấn và báo giá",
  description: "Liên hệ với Công ty TNHH sản xuất dây Minh Tiến để được tư vấn miễn phí và nhận báo giá tốt nhất cho dây dù, dây đai thun. Hotline: 0353788878, hỗ trợ chuyên nghiệp.",
  keywords: ["liên hệ paracord pro", "tư vấn dây dù", "báo giá dây đai thun", "hotline", "hỗ trợ khách hàng"],
};

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactHero />
      
      {/* Video hướng dẫn - Compact style */}
      <VideoSection
        videoId="kffacxfA7G4"
        title="Quy trình tư vấn và hỗ trợ"
        description="Gặp gỡ đội ngũ chuyên nghiệp và tìm hiểu cách chúng tôi hỗ trợ bạn"
        variant="compact"
        showStats={false}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
      <LocationMap />
    </MainLayout>
  );
}

