"use client";

import { ProductHeroSection } from "@/components/sections/ProductHeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { QuickCategories } from "@/components/sections/QuickCategories";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { MainLayout } from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <ProductHeroSection />
      <QuickCategories />
      <AboutSection />
      <ContactCTA />
    </MainLayout>
  );
}
