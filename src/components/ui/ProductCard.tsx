"use client";

import Link from "next/link";
import Image from "next/image";
import { Eye, Phone, ShoppingCart, Star, Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./Card";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { COMPANY_INFO } from "@/lib/constants";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  viewMode: "grid" | "list";
  showFavorite?: boolean;
  showShare?: boolean;
  onFavorite?: (productId: string) => void;
  onShare?: (product: Product) => void;
}

const categoryLabels = {
  paracord: "Dây dù",
  eband: "Dây đai thun", 
  service: "Dịch vụ"
};

const colorMap = {
  black: { name: "Đen", hex: "#000000" },
  white: { name: "Trắng", hex: "#FFFFFF" },
  red: { name: "Đỏ", hex: "#DC2626" },
  blue: { name: "Xanh", hex: "#2563EB" },
  green: { name: "Xanh lá", hex: "#16A34A" },
  yellow: { name: "Vàng", hex: "#EAB308" },
  pink: { name: "Hồng", hex: "#EC4899" },
  orange: { name: "Cam", hex: "#EA580C" }
};

export function ProductCard({ 
  product, 
  viewMode, 
  showFavorite = true, 
  showShare = true, 
  onFavorite, 
  onShare 
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isFavorited, setIsFavorited] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    onFavorite?.(product.id);
  };

  const handleShare = () => {
    onShare?.(product);
  };
  if (viewMode === "list") {
    return (
      <Card 
        className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 bg-white hover:bg-blue-50/10 min-h-[200px] flex flex-col sm:flex-row"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative sm:w-64 h-48 sm:h-auto bg-slate-50 overflow-hidden flex-shrink-0">
            {product.images && product.images[0] ? (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className={`object-cover transition-all duration-700 ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
                onLoad={() => setIsImageLoading(false)}
              />
            ) : (
              <div className="flex items-center justify-center h-full text-slate-400 text-sm font-medium">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-slate-300 rounded-full animate-pulse"></div>
                  Hình ảnh sản phẩm
                </div>
              </div>
            )}
            {/* Loading shimmer */}
            {isImageLoading && (
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-shimmer"></div>
            )}
          </div>

          {/* Enhanced Product info */}
          <div className="flex-1 p-4 relative flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 transition-colors duration-300"
                  >
                    {categoryLabels[product.category as keyof typeof categoryLabels]}
                  </Badge>
                </div>
                
                <h3 className={`font-bold text-slate-900 mb-2 transition-all duration-300 ${
                  isHovered ? 'text-blue-600 text-xl' : 'text-lg'
                }`}>
                  {product.name}
                </h3>
                
                <p className={`text-slate-600 mb-2 line-clamp-2 transition-all duration-300 ${
                  isHovered ? 'text-slate-700' : ''
                }`}>
                  {product.description}
                </p>

                {/* Enhanced Colors */}
                {product.colors.length > 0 && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-slate-700">Màu sắc:</span>
                    <div className="flex gap-2">
                      {product.colors.slice(0, 4).map((colorId, index) => {
                        const color = colorMap[colorId as keyof typeof colorMap];
                        return color ? (
                          <button
                            key={colorId}
                            onClick={() => setSelectedColorIndex(index)}
                            className={`group/color w-6 h-6 rounded-full border-2 transition-all duration-300 hover:scale-125 ${
                              selectedColorIndex === index 
                                ? 'border-blue-500 shadow-lg' 
                                : 'border-slate-300 hover:border-blue-400'
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          >
                            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover/color:opacity-100 transition-opacity duration-300"></div>
                          </button>
                        ) : null;
                      })}
                      {product.colors.length > 4 && (
                        <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                          +{product.colors.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Specifications preview */}
                <div className="space-y-1 mb-2">
                  {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 capitalize font-medium">{key}:</span>
                      <span className="text-slate-900 bg-slate-50 px-2 py-1 rounded-md">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Price and actions */}
              <div className="text-right ml-4 min-w-[140px] flex flex-col justify-between">
                <div className="mb-3">
                  <p className={`font-bold transition-all duration-300 ${
                    isHovered ? 'text-blue-600 text-xl' : 'text-slate-900 text-lg'
                  }`}>
                    {product.priceRange}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Giá đã bao gồm VAT</p>
                </div>
                
                <div className="space-y-2 mt-auto">
                  <Button 
                    size="sm" 
                    className="w-full group relative bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                    asChild
                  >
                    <Link href={`/products/${product.id}`} className="flex items-center justify-center gap-2 relative z-10">
                      <Eye className="h-4 w-4 group-hover:animate-pulse" />
                      <span>Chi tiết</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </Link>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full border-2 border-green-300 hover:border-green-400 hover:bg-green-50 hover:text-green-600 transition-all duration-300 hover:scale-105 group"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    <span>Thêm giỏ hàng</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
    );
  }

  return (
    <Card 
      className="group overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[500px] flex flex-col rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Product image */}
      <div className="aspect-square bg-slate-50 relative overflow-hidden rounded-t-2xl">
        {product.images && product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className={`object-cover transition-all duration-700 ${
              isHovered ? 'scale-110 rotate-1' : 'scale-100'
            }`}
            onLoad={() => setIsImageLoading(false)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-slate-300 rounded-2xl animate-pulse flex items-center justify-center">
                <Eye className="w-8 h-8 text-slate-400" />
              </div>
              <div className="text-sm">Hình ảnh sản phẩm</div>
            </div>
          </div>
        )}
        
        {/* Interactive action buttons overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          
          {/* Quick add to cart */}
          <div className="absolute bottom-4 left-4 right-4">
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Thêm giỏ hàng
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>
        </div>
        
        {/* Loading shimmer */}
        {isImageLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-shimmer"></div>
        )}
      </div>

      <CardHeader className="pb-2 px-4">
        <div className="flex items-center justify-between mb-3">
          <Badge 
            variant="secondary" 
            className="text-xs bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 transition-colors duration-300"
          >
            {categoryLabels[product.category as keyof typeof categoryLabels]}
          </Badge>
        </div>
        
        <CardTitle className={`leading-tight mb-2 transition-all duration-300 ${
          isHovered ? 'text-blue-600 text-xl' : 'text-slate-900 text-lg'
        }`}>
          {product.name}
        </CardTitle>
        
        <CardDescription className={`text-sm line-clamp-3 transition-all duration-300 ${
          isHovered ? 'text-slate-700' : 'text-slate-600'
        }`}>
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 px-4">
        {/* Enhanced Colors */}
        {product.colors.length > 0 && (
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium text-slate-700">Màu:</span>
            <div className="flex gap-2">
              {product.colors.slice(0, 3).map((colorId, index) => {
                const color = colorMap[colorId as keyof typeof colorMap];
                return color ? (
                  <button
                    key={colorId}
                    onClick={() => setSelectedColorIndex(index)}
                    className={`w-6 h-6 rounded-full border-2 transition-all duration-300 hover:scale-125 ${
                      selectedColorIndex === index 
                        ? 'border-blue-500 shadow-lg' 
                        : 'border-slate-300 hover:border-blue-400'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ) : null;
              })}
              {product.colors.length > 3 && (
                <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                  +{product.colors.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Enhanced Key specs */}
        <div className="space-y-2 mb-3">
          {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between text-sm group/spec">
              <span className="text-slate-600 capitalize font-medium group-hover/spec:text-slate-800 transition-colors">
                {key}:
              </span>
              <span className="text-slate-900 bg-slate-50 px-2 py-1 rounded-md group-hover/spec:bg-blue-50 group-hover/spec:text-blue-700 transition-all">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Enhanced Price and actions */}
        <div className="pt-3 border-t border-slate-100 mt-auto">
          <div className="flex items-center justify-between mb-4">
            <p className={`font-bold transition-all duration-300 ${
              isHovered ? 'text-blue-600 text-lg' : 'text-slate-900'
            }`}>
              {product.priceRange}
            </p>
          </div>
          
          <div className="space-y-2">
            <Button 
              size="sm" 
              className="w-full group relative bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
              asChild
            >
              <Link href={`/products/${product.id}`} className="flex items-center justify-center gap-2 relative z-10">
                <Eye className="h-4 w-4 group-hover:animate-pulse" />
                <span>Chi tiết</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

