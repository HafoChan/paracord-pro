import { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductsHero } from "@/components/sections/ProductsHero";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { ProductFilters } from "@/components/sections/ProductFilters";

export const metadata: Metadata = {
  title: "Sản phẩm - MINH TIEN STRING CO., LTD | Dây dù và dây đai thun chất lượng cao",
  description: "Khám phá bộ sưu tập dây dù, dây đai thun và dịch vụ gia công chuyên nghiệp từ Công ty TNHH sản xuất dây Minh Tiến. Đa dạng màu sắc và kích thước.",
  keywords: ["sản phẩm dây dù", "dây đai thun", "paracord", "eband", "gia công dây"],
};

export default function ProductsPage() {
  return (
    <MainLayout>
      <ProductsHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          <aside className="lg:col-span-1">
            <ProductFilters />
          </aside>
          <main className="lg:col-span-3">
            <ProductGrid />
          </main>
        </div>
      </div>
    </MainLayout>
  );
}

