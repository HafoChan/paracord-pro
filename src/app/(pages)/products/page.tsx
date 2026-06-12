"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductSidebar } from "@/components/sections/ProductSidebar";
import { ProductCard } from "@/components/ui/ProductCard";
import { getCategoryDetail } from "@/lib/content/categories";
import { Product } from "@/types";
import { supabase } from "@/lib/supabase";
import { PRODUCTS_DATA } from "@/lib/data/products";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl || "day-du");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Sync URL param with state
  useEffect(() => {
    if (categoryFromUrl && categoryFromUrl !== activeCategory) {
      setActiveCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  // Fetch products from Supabase
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("category", activeCategory)
          .order("created_at", { ascending: false });

        if (error || !data || data.length === 0) {
          // Fallback to local data
          const localFiltered = PRODUCTS_DATA.filter(
            (p) => p.category === activeCategory
          );
          setProducts(localFiltered);
        } else {
          // Map database rows to Product interface
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const mapped: Product[] = data.map((row: any) => ({
            id: row.id,
            name: row.name,
            slug: row.slug,
            size: row.size,
            category: row.category,
            description: row.description || "",
            specifications: row.specifications || {},
            priceRange: row.price_range || "",
            colors: row.colors || [],
            images: row.images || [],
            videoUrl: row.video_url,
            isFeatured: row.is_featured || false,
            createdAt: row.created_at,
            updatedAt: row.updated_at,
          }));
          setProducts(mapped);
        }
      } catch {
        // Fallback to local data on any error
        const localFiltered = PRODUCTS_DATA.filter(
          (p) => p.category === activeCategory
        );
        setProducts(localFiltered);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [activeCategory]);

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
                    {products.length}
                  </span>{" "}
                  sản phẩm trong{" "}
                  <span className="font-semibold text-accent-600">
                    {categoryDetail?.name}
                  </span>
                </p>
              </div>

              {/* Loading state */}
              {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-slate-100 rounded-md animate-pulse"
                    />
                  ))}
                </div>
              ) : products.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
                  {products.map((product, index) => (
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
                    <svg
                      className="w-8 h-8 text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
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

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <MainLayout>
          <div className="bg-white py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16">
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-slate-200 rounded w-1/3" />
                <div className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-slate-100 rounded-md" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}