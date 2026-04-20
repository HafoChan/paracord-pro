"use client";

import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductsHero } from "@/components/sections/ProductsHero";
import { CategoryTabs } from "@/components/sections/CategoryTabs";
import { CategoryIntro } from "@/components/sections/CategoryIntro";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductCustomization } from "@/components/sections/ProductCustomization";
import { ColorPalette } from "@/components/sections/ColorPalette";
import { TechnicalSpecs } from "@/components/sections/TechnicalSpecs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PRODUCTS_DATA } from "@/lib/data/products";
import { getCategoryDetail } from "@/lib/content/categories";
import { VideoWithContent } from "@/components/sections/VideoWithContent";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("paracord");

  // Lọc sản phẩm theo category
  const filteredProducts = PRODUCTS_DATA.filter(
    product => product.category === activeCategory
  );

  // Lấy thông tin chi tiết category
  const categoryDetail = getCategoryDetail(activeCategory);

  // Video data theo category
  const categoryVideos: Record<string, { id: string; title: string; description: string; features: string[] }> = {
    paracord: {
      id: "uelHwf8o7_U",
      title: "Dây dù (Paracord) - Ứng dụng đa dạng",
      description: "Dây dù chất lượng cao với độ bền vượt trội, được sử dụng rộng rãi trong nhiều ngành công nghiệp.",
      features: [
        "Chịu lực tốt, độ bền cao",
        "Đa dạng màu sắc và kích thước",
        "Ứng dụng trong may mặc, balo, thể thao",
        "Có thể tùy chỉnh theo yêu cầu"
      ]
    },
    eband: {
      id: "kJQP7kiw5Fk",
      title: "Dây đai thun - Co giãn vượt trội",
      description: "Dây đai thun với khả năng co giãn tốt, phù hợp cho các ứng dụng cần độ đàn hồi cao.",
      features: [
        "Co giãn tốt, đàn hồi cao",
        "Độ bền và tuổi thọ cao",
        "Nhiều độ rộng và độ dày",
        "Ứng dụng trong y tế, thời trang"
      ]
    },
    service: {
      id: "YQHsXMglC9A",
      title: "Dịch vụ gia công chuyên nghiệp",
      description: "Chúng tôi cung cấp dịch vụ gia công, tư vấn thiết kế và sản xuất theo yêu cầu khách hàng.",
      features: [
        "Tư vấn thiết kế miễn phí",
        "Gia công theo mẫu",
        "Giao hàng nhanh chóng",
        "Hỗ trợ kỹ thuật 24/7"
      ]
    }
  };

  const currentVideo = categoryVideos[activeCategory] || categoryVideos.paracord;

  return (
    <MainLayout>
      <ProductsHero />
      
      {/* Category Tabs */}
      <CategoryTabs 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Category Introduction */}
      {categoryDetail && <CategoryIntro category={categoryDetail} />}

      {/* Video demo theo category - layout linh hoạt */}
      <VideoWithContent
        videoId={currentVideo.id}
        title={currentVideo.title}
        description={currentVideo.description}
        features={currentVideo.features}
        layout={activeCategory === "eband" ? "right" : "left"}
        badge={`Demo ${categoryDetail?.name}`}
      />

      {/* Products Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary-900 mb-2">
              Sản phẩm {categoryDetail?.name}
            </h3>
            <p className="text-slate-600">
              Hiển thị {filteredProducts.length} sản phẩm
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <ProductCard 
                  product={product}
                  viewMode="grid"
                  showFavorite={false}
                  showShare={true}
                  onShare={(product) => {
                    if (navigator.share) {
                      navigator.share({
                        title: product.name,
                        text: product.description,
                        url: `/products/${product.id}`
                      });
                    }
                  }}
                />
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">
                Chưa có sản phẩm trong danh mục này
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Product Customization Tool - Collapsible */}
      <ProductCustomization />

      {/* Color Palette */}
      <ColorPalette />

      {/* Technical Specifications */}
      <TechnicalSpecs />

      {/* Contact CTA */}
      <ContactCTA />
    </MainLayout>
  );
}

