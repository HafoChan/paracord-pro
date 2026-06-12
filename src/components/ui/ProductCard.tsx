"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
  showFavorite?: boolean;
  showShare?: boolean;
  onFavorite?: (productId: string) => void;
  onShare?: (product: Product) => void;
}
const SPEC_TRANSLATIONS: Record<string, string> = {
  diameter: "Đường kính",
  length: "Chiều dài",
  material: "Chất liệu",
  width: "Độ rộng",
  elasticity: "Độ co giãn",
  processing: "Gia công",
  quantity: "Số lượng",
  delivery: "Giao hàng",
  colors: "Màu sắc",
};

const CATEGORY_TRANSLATIONS: Record<string, string> = {
  paracord: "Dây dù",
  eband: "Dây đai thun",
  service: "Dịch vụ",
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col h-full bg-white rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-transparent hover:border-slate-200"
      style={{ boxShadow: "rgba(99,99,99,0.2) 0px 2px 8px 0px" }}
    >
      {/* Product Image */}
      <div className="relative w-full aspect-square overflow-hidden bg-slate-50">
        {product.images && product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-slate-200 rounded-full" />
              <span className="text-sm text-slate-400">Hình ảnh sản phẩm</span>
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-2 sm:p-3 flex flex-col justify-between flex-1">
        <div>
          <p style={{ fontSize: "18px", fontWeight: 700 }} className="text-xs sm:text-sm font-semibold text-slate-800 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors duration-200">
            {product.name}
          </p>
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="text-[10px] sm:text-xs text-slate-500 mb-2 space-y-0.5 bg-slate-50 p-1.5 rounded">
              {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                <div key={key} className="flex justify-between gap-2">
                  <span className="capitalize text-slate-400 truncate">
                    {SPEC_TRANSLATIONS[key.toLowerCase()] || key}:
                  </span>
                  <span className="text-slate-700 font-medium truncate text-right">
                    {value as React.ReactNode}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="pt-2 border-t border-slate-100 flex justify-between items-center mt-auto">
          <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium uppercase truncate pr-2">
            {CATEGORY_TRANSLATIONS[product.category.toLowerCase()] || product.category}
          </span>
          <span className="text-[11px] sm:text-sm font-bold text-accent-600 flex-shrink-0">
            Liên hệ
          </span>
        </div>
      </div>
    </Link>
  );
}
