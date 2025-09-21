import { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { AboutHero } from "@/components/sections/AboutHero";
import { CompanyStory } from "@/components/sections/CompanyStory";
import { CapabilitySection } from "@/components/sections/CapabilitySection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Giới thiệu - MINH TIEN STRING CO., LTD | Về chúng tôi",
  description: "Tìm hiểu về Công ty TNHH sản xuất dây Minh Tiến - đơn vị tiên phong trong sản xuất dây dù và dây đai thun tại Việt Nam. Năng lực sản xuất, đội ngũ chuyên nghiệp và cam kết chất lượng.",
  keywords: ["giới thiệu paracord pro", "về chúng tôi", "năng lực sản xuất", "đội ngũ", "chất lượng"],
};

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutHero />
      <CompanyStory />
      <CapabilitySection />
      <ContactCTA />
    </MainLayout>
  );
}

