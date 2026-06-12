"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  ShareIcon, 
  HeartIcon
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_INFO } from "@/lib/constants";
import { getProductImage, getCategoryImage } from "@/lib/assets";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  specifications: Record<string, string>;
  priceRange: string;
  colors: string[];
  images: string[];
  isFeatured: boolean;
  relatedProducts?: string[];
}

interface ProductDetailProps {
  product: Product;
}

const categoryLabels = {
  paracord: "Dây dù",
  eband: "Dây đai thun", 
  service: "Dịch vụ"
};

export function ProductDetail({ product }: ProductDetailProps) {
  // State cho ảnh hiện tại
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Tạo danh sách ảnh từ product.images hoặc fallback images
  const productImages = product.images.length > 0 
    ? product.images 
    : [
        getProductImage(`${product.category}_${product.id}`, 'main') as string,
        getCategoryImage(product.category as 'paracord' | 'eband' | 'service'),
        getCategoryImage(product.category as 'paracord' | 'eband' | 'service'),
        getCategoryImage(product.category as 'paracord' | 'eband' | 'service')
      ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setSelectedImageIndex(selectedImageIndex === 0 ? productImages.length - 1 : selectedImageIndex - 1);
      } else if (event.key === 'ArrowRight') {
        setSelectedImageIndex(selectedImageIndex === productImages.length - 1 ? 0 : selectedImageIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, productImages.length]);

  return (
    <div className="py-8 bg-gradient-to-br from-slate-50 via-white to-accent-50/30 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Enhanced Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-8 animate-fade-in-up">
          <Link href="/" className="hover:text-accent-700 transition-all">Trang chủ</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-accent-700 transition-all">Sản phẩm</Link>
          <span>/</span>
          <span className="text-primary-900 font-semibold">{product.name}</span>
        </div>

        {/* Back button */}
        <Button variant="ghost" size="sm" className="mb-6 hover:bg-accent-50 hover:text-accent-700" asChild>
          <Link href="/products" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại danh sách
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Enhanced Product Images */}
          <div className="space-y-4 lg:sticky lg:top-24">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center shadow-soft hover:shadow-hover transition-shadow card-interactive group overflow-hidden border border-slate-200">
              <Image 
                src={productImages[selectedImageIndex]}
                alt={`${product.name} - Ảnh ${selectedImageIndex + 1}`}
                fill
                className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Navigation Arrows */}
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImageIndex(selectedImageIndex === 0 ? productImages.length - 1 : selectedImageIndex - 1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center group/btn border border-slate-200"
                  >
                    <ChevronLeft className="w-5 h-5 text-primary-900 group-hover/btn:text-accent-700" />
                  </button>
                  
                  <button
                    onClick={() => setSelectedImageIndex(selectedImageIndex === productImages.length - 1 ? 0 : selectedImageIndex + 1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center group/btn border border-slate-200"
                  >
                    <ChevronRight className="w-5 h-5 text-primary-900 group-hover/btn:text-accent-700" />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              <div className="absolute bottom-3 right-3 bg-primary-900/80 text-white text-xs px-3 py-1.5 rounded-lg font-semibold">
                {selectedImageIndex + 1} / {productImages.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
              {productImages.map((image, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedImageIndex(index)}
                  className={`
                    aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl 
                    flex items-center justify-center shadow-sm hover:shadow-md 
                    transition-all duration-300 cursor-pointer group relative overflow-hidden border
                    ${selectedImageIndex === index 
                      ? 'ring-2 ring-accent-600 ring-offset-2 shadow-md transform scale-105 border-accent-600' 
                      : 'border-slate-200 hover:ring-1 hover:ring-accent-300 hover:ring-offset-1 hover:scale-102'
                    }
                  `}
                >
                  <Image 
                    src={image}
                    alt={`${product.name} - Ảnh ${index + 1}`}
                    fill
                    className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  {selectedImageIndex === index && (
                    <div className="absolute inset-0 bg-accent-600/10 rounded-xl"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Dots Indicator */}
            {productImages.length > 1 && (
              <div className="flex justify-center space-x-2 mt-4">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${selectedImageIndex === index 
                        ? 'bg-accent-600 w-6' 
                        : 'bg-slate-300 hover:bg-accent-400'
                      }
                    `}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6 lg:sticky lg:top-24">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">
                  {categoryLabels[product.category as keyof typeof categoryLabels]}
                </Badge>
                {product.isFeatured && (
                  <Badge className="bg-gradient-to-r from-accent-600 to-accent-700">Nổi bật</Badge>
                )}
              </div>
              <h3 className="text-3xl font-bold text-primary-900 mb-4 leading-tight">
                {product.name}
              </h3>
              <p className="text-md text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="border-2 border-accent-200 rounded-xl p-6 bg-gradient-to-br from-accent-50 to-primary-50 shadow-sm">
              <div className="text-sm text-accent-700 font-semibold mb-1">Giá</div>
              <div className="text-2xl font-bold text-primary-900">
                {product.priceRange}
              </div>
              <div className="text-sm text-slate-600 mt-2">
                *Giá có thể thay đổi tùy theo số lượng và yêu cầu gia công
              </div>
            </div>

            {/* Enhanced Actions */}
            <div className="space-y-4">
              <Button size="lg" className="w-full bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 group" asChild>
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center">
                  <PhoneIcon className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Gọi ngay để đặt hàng
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full border-2 border-accent-600 text-accent-700 hover:bg-accent-50 hover:border-accent-700 transition-all hover-lift group" asChild>
                <a href={`mailto:${COMPANY_INFO.email}?subject=Yêu cầu báo giá ${product.name}`} className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 mr-2 group-hover:text-accent-800 transition-colors" />
                  Yêu cầu báo giá qua email
                </a>
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1 border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all hover-lift group">
                  <ShareIcon className="h-4 w-4 mr-2 group-hover:text-primary-900 transition-colors" />
                  Chia sẻ
                </Button>
                <Button variant="outline" size="sm" className="flex-1 border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all hover-lift group">
                  <HeartIcon className="h-4 w-4 mr-2 group-hover:text-red-600 transition-colors" />
                  Yêu thích
                </Button>
              </div>
            </div>

            {/* Quick specs */}
            <Card className="shadow-sm rounded-xl border border-slate-200">
              <CardHeader>
                <CardTitle className="text-md text-primary-900">Thông số nhanh</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="text-sm text-slate-600 mb-1">{key}</div>
                      <div className="font-semibold text-primary-900">{value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Description */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-sm rounded-xl border border-slate-200">
              <CardHeader>
                <CardTitle className="text-primary-900">Mô tả chi tiết</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-slate max-w-none">
                  {product.fullDescription.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="mb-4 text-slate-700 leading-relaxed">
                        {paragraph.includes('**') 
                          ? paragraph.split('**').map((part, i) => 
                              i % 2 === 1 ? <strong key={i} className="text-primary-900">{part}</strong> : part
                            )
                          : paragraph
                        }
                      </p>
                    )
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Specifications */}
          <div>
            <Card className="shadow-sm rounded-xl border border-slate-200">
              <CardHeader>
                <CardTitle className="text-primary-900">Thông số kỹ thuật</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-slate-100 last:border-b-0">
                      <span className="text-slate-600 text-sm font-medium">{key}</span>
                      <span className="font-semibold text-sm text-primary-900">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact card */}
            <Card className="mt-8 shadow-sm rounded-xl border border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg text-primary-900">Cần tư vấn?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Liên hệ với chúng tôi để được tư vấn chi tiết về sản phẩm và nhận báo giá tốt nhất.
                </p>
                <div className="space-y-3">
                  <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-accent-50 to-primary-50 hover:from-accent-100 hover:to-primary-100 transition-all hover-lift group border border-accent-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-600 to-accent-700 rounded-full flex items-center justify-center shadow-md">
                      <PhoneIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary-900">{COMPANY_INFO.phone}</div>
                      <div className="text-xs text-accent-700">Gọi ngay</div>
                    </div>
                  </a>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all hover-lift group border border-slate-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-800 to-primary-900 rounded-full flex items-center justify-center shadow-md">
                      <EnvelopeIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary-900">{COMPANY_INFO.email}</div>
                      <div className="text-xs text-slate-600">Gửi email</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

