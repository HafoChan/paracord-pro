import { HeroSlider } from "@/components/sections/HeroSlider";
import { QuickCategories } from "@/components/sections/QuickCategories";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { MainLayout } from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSlider />
      <QuickCategories />
      <AboutSection />
      <ContactCTA />
    </MainLayout>
  );
}
