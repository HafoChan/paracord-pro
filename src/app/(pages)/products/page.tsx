"use client";

import { useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductSidebar } from "@/components/sections/ProductSidebar";
import { ProductCard } from "@/components/ui/ProductCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PRODUCTS_DATA } from "@/lib/data/products";
import { getCategoryDetail } from "@/lib/content/categories";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("paracord");

  // Lọc sản phẩm theo category
  const filteredProducts = PRODUCTS_DATA.filter(
    product => product.category === activeCategory
  );

  // Lấy thông tin chi tiết category
  const categoryDetail = getCategoryDetail(activeCategory);

  return (
    <MainLayout>

      {/* Page Title */}
      <div className="bg-white border-b border-slate-100 py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h1
            className="font-bold uppercase tracking-widest"
            style={{ color: "#2B6A8E", fontSize: "1.5rem", lineHeight: "1.3" }}
          >
            {categoryDetail?.name || "Sản phẩm"}
          </h1>
        </div>
      </div>

      {/* Main Content: Sidebar + Product Grid */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <ProductSidebar
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              {/* Result count */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
                <p className="text-sm text-slate-500">
                  Hiển thị{" "}
                  <span className="font-semibold text-slate-700">
                    {filteredProducts.length}
                  </span>{" "}
                  sản phẩm trong{" "}
                  <span className="font-semibold text-accent-600">
                    {categoryDetail?.name}
                  </span>
                </p>
              </div>

              {/* Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-fade-in-up"
                      style={{
                        animationDelay: `${index * 0.08}s`,
                        animationFillMode: "both",
                      }}
                    >
                      <ProductCard product={product} viewMode="grid" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <p className="text-slate-500 text-base font-medium">
                    Chưa có sản phẩm trong danh mục này
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    Vui lòng chọn danh mục khác hoặc liên hệ để được tư vấn
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </MainLayout>
  );
}
