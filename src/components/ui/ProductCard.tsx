"use client";

import Link from "next/link";
import { Eye, Phone, ShoppingCart, Star, Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./Card";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { COMPANY_INFO } from "@/lib/constants";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: Record<string, any>;
  priceRange: string;
  colors: string[];
  images: string[];
  isFeatured: boolean;
}

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
        className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-r from-white to-slate-50/50 hover:from-white hover:to-blue-50/30 hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col sm:flex-row relative">
          {/* Enhanced Product image */}
          <div className="relative sm:w-48 h-48 sm:h-32 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
            {product.images && product.images[0] ? (
              <img
                src={product.images[0]}
                alt={product.name}
                className={`w-full h-full object-cover transition-all duration-700 ${
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
            
            {/* Enhanced hover overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                <div className="flex gap-1">
                  {product.colors.slice(0, 3).map((colorId, index) => {
                    const color = colorMap[colorId as keyof typeof colorMap];
                    return color ? (
                      <button
                        key={colorId}
                        onClick={() => setSelectedColorIndex(index)}
                        className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                          selectedColorIndex === index ? 'border-white scale-110' : 'border-white/50 hover:border-white'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ) : null;
                  })}
                </div>
                
                <div className="flex gap-2">
                  {showFavorite && (
                    <button
                      onClick={handleFavorite}
                      className={`w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                        isFavorited 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white/80 text-slate-600 hover:bg-white hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
                    </button>
                  )}
                  {showShare && (
                    <button
                      onClick={handleShare}
                      className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white hover:text-blue-500 flex items-center justify-center transition-all duration-300"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            {/* Loading shimmer */}
            {isImageLoading && (
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-shimmer"></div>
            )}
          </div>

          {/* Enhanced Product info */}
          <div className="flex-1 p-6 relative">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 transition-colors duration-300"
                  >
                    {categoryLabels[product.category as keyof typeof categoryLabels]}
                  </Badge>
                  {product.isFeatured && (
                    <Badge 
                      className="text-xs bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-md animate-pulse"
                    >
                      ⭐ Nổi bật
                    </Badge>
                  )}
                  
                  {/* Quality indicator */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < 4 ? 'text-yellow-400 fill-current' : 'text-slate-300'
                        } transition-colors duration-300`}
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className={`font-bold text-slate-900 mb-3 transition-all duration-300 ${
                  isHovered ? 'text-blue-600 text-xl' : 'text-lg'
                }`}>
                  {product.name}
                </h3>
                
                <p className={`text-slate-600 mb-4 leading-relaxed transition-all duration-300 ${
                  isHovered ? 'text-slate-700' : ''
                }`}>
                  {product.description}
                </p>

                {/* Enhanced Colors */}
                {product.colors.length > 0 && (
                  <div className="flex items-center gap-3 mb-4">
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
                <div className="space-y-2 mb-4">
                  {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 capitalize font-medium">{key}:</span>
                      <span className="text-slate-900 bg-slate-50 px-2 py-1 rounded-md">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Price and actions */}
              <div className="text-right ml-6 min-w-[180px]">
                <div className="mb-4">
                  <p className={`font-bold transition-all duration-300 ${
                    isHovered ? 'text-blue-600 text-xl' : 'text-slate-900 text-lg'
                  }`}>
                    {product.priceRange}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Giá đã bao gồm VAT</p>
                </div>
                
                <div className="space-y-3">
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
                    className="w-full border-2 border-slate-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-105 group"
                    asChild
                  >
                    <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4 group-hover:animate-bounce" />
                      <span>Liên hệ</span>
                    </a>
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
                
                {/* Quick stats */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Còn hàng</span>
                    </div>
                    <span>⚡ Giao nhanh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card 
      className="group overflow-hidden bg-gradient-to-br from-white to-slate-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 card-interactive rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Product image */}
      <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden rounded-t-3xl">
        {product.images && product.images[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
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
        
        {/* Enhanced featured badge */}
        {product.isFeatured && (
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-lg animate-pulse border-0 text-xs">
            ⭐ Nổi bật
          </Badge>
        )}
        
        {/* Interactive action buttons overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex gap-3">
              <Button 
                size="sm" 
                className="bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-110 shadow-lg"
                asChild
              >
                <Link href={`/products/${product.id}`}>
                  <Eye className="h-4 w-4" />
                </Link>
              </Button>
              
              {showFavorite && (
                <Button
                  size="sm"
                  onClick={handleFavorite}
                  className={`backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg ${
                    isFavorited 
                      ? 'bg-red-500 text-white hover:bg-red-600' 
                      : 'bg-white/90 text-slate-700 hover:bg-white hover:text-red-500'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
                </Button>
              )}
              
              {showShare && (
                <Button
                  size="sm"
                  onClick={handleShare}
                  className="bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          
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
        
        {/* Color picker overlay */}
        {product.colors.length > 0 && (
          <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            {product.colors.slice(0, 3).map((colorId, index) => {
              const color = colorMap[colorId as keyof typeof colorMap];
              return color ? (
                <button
                  key={colorId}
                  onClick={() => setSelectedColorIndex(index)}
                  className={`w-8 h-8 rounded-full border-3 backdrop-blur-sm transition-all duration-300 hover:scale-125 ${
                    selectedColorIndex === index 
                      ? 'border-white shadow-xl' 
                      : 'border-white/60 hover:border-white'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ) : null;
            })}
          </div>
        )}
        
        {/* Loading shimmer */}
        {isImageLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-shimmer"></div>
        )}
      </div>

      <CardHeader className="pb-4 px-6">
        <div className="flex items-center justify-between mb-3">
          <Badge 
            variant="secondary" 
            className="text-xs bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 transition-colors duration-300"
          >
            {categoryLabels[product.category as keyof typeof categoryLabels]}
          </Badge>
          
          {/* Quality rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 transition-all duration-300 ${
                  i < 4 
                    ? 'text-yellow-400 fill-current hover:scale-125' 
                    : 'text-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        <CardTitle className={`leading-tight mb-2 transition-all duration-300 ${
          isHovered ? 'text-blue-600 text-xl' : 'text-slate-900 text-lg'
        }`}>
          {product.name}
        </CardTitle>
        
        <CardDescription className={`text-sm leading-relaxed transition-all duration-300 ${
          isHovered ? 'text-slate-700' : 'text-slate-600'
        }`}>
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 px-6">
        {/* Enhanced Colors */}
        {product.colors.length > 0 && (
          <div className="flex items-center gap-3 mb-4">
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
        <div className="space-y-3 mb-4">
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
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <p className={`font-bold transition-all duration-300 ${
              isHovered ? 'text-blue-600 text-lg' : 'text-slate-900'
            }`}>
              {product.priceRange}
            </p>
            <div className="text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Còn hàng</span>
              </div>
            </div>
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
            
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1 border-2 border-slate-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center justify-center gap-2">
                  <Phone className="h-3 w-3 group-hover:animate-bounce" />
                  <span>Gọi</span>
                </a>
              </Button>
              
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1 border-2 border-green-300 hover:border-green-400 hover:bg-green-50 hover:text-green-600 transition-all duration-300 hover:scale-105 group"
              >
                <ShoppingCart className="h-3 w-3 mr-1 group-hover:animate-bounce" />
                <span>Giỏ</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

