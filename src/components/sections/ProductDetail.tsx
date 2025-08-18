"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  ShareIcon, 
  HeartIcon,
  CheckCircleIcon,
  TruckIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_INFO } from "@/lib/constants";
import { getProductImage, getCategoryImage } from "@/lib/images";

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
    <div className="py-8 bg-white relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-16 relative z-10">
        {/* Enhanced Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-8 animate-fade-in-up">
          <Link href="/" className="hover:text-slate-900 hover:text-gradient transition-all">Trang chủ</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-slate-900 hover:text-gradient transition-all">Sản phẩm</Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">{product.name}</span>
        </div>

        {/* Back button */}
        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link href="/products" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại danh sách
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Enhanced Product Images */}
          <div className="space-y-4 lg:sticky lg:top-24">
            <div className="relative h-[600px] w-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow card-interactive group overflow-hidden">
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
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center group/btn"
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-600 group-hover/btn:text-slate-800" />
                  </button>
                  
                  <button
                    onClick={() => setSelectedImageIndex(selectedImageIndex === productImages.length - 1 ? 0 : selectedImageIndex + 1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center group/btn"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover/btn:text-slate-800" />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                {selectedImageIndex + 1} / {productImages.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-8 gap-3">
              {productImages.map((image, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedImageIndex(index)}
                  className={`
                    aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl 
                    flex items-center justify-center shadow-md hover:shadow-lg 
                    transition-all duration-300 cursor-pointer group relative overflow-hidden
                    ${selectedImageIndex === index 
                      ? 'ring-2 ring-blue-500 ring-offset-2 shadow-lg transform scale-105' 
                      : 'hover:ring-1 hover:ring-slate-300 hover:ring-offset-1 hover:scale-102'
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
                    <div className="absolute inset-0 bg-blue-500/10 rounded-xl"></div>
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
                        ? 'bg-blue-500 w-6' 
                        : 'bg-slate-300 hover:bg-slate-400'
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
                  <Badge>Nổi bật</Badge>
                )}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {product.name}
              </h3>
              <p className="text-md text-slate-600">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
              <div className="text-sm text-slate-500 mb-1">Giá</div>
              <div className="text-2xl font-bold text-slate-900">
                {product.priceRange}
              </div>
              <div className="text-sm text-slate-500 mt-1">
                *Giá có thể thay đổi tùy theo số lượng và yêu cầu gia công
              </div>
            </div>

            {/* Enhanced Actions */}
            <div className="space-y-4">
              <Button size="lg" className="w-full gradient-button hover:shadow-hover btn-magnetic group" asChild>
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center">
                  <PhoneIcon className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Gọi ngay để đặt hàng
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full hover:bg-blue-50 hover:border-blue-200 transition-all hover-lift group" asChild>
                <a href={`mailto:${COMPANY_INFO.email}?subject=Yêu cầu báo giá ${product.name}`} className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 mr-2 group-hover:text-blue-600 transition-colors" />
                  Yêu cầu báo giá qua email
                </a>
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1 hover:bg-purple-50 hover:border-purple-200 transition-all hover-lift group">
                  <ShareIcon className="h-4 w-4 mr-2 group-hover:text-purple-600 transition-colors" />
                  Chia sẻ
                </Button>
                <Button variant="outline" size="sm" className="flex-1 hover:bg-pink-50 hover:border-pink-200 transition-all hover-lift group">
                  <HeartIcon className="h-4 w-4 mr-2 group-hover:text-pink-600 transition-colors" />
                  Yêu thích
                </Button>
              </div>
            </div>

            {/* Quick specs */}
            <Card className="shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-md">Thông số nhanh</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-sm text-slate-500">{key}</div>
                      <div className="font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Description */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle>Mô tả chi tiết</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-slate max-w-none">
                  {product.fullDescription.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="mb-4 text-slate-700 leading-relaxed">
                        {paragraph.includes('**') 
                          ? paragraph.split('**').map((part, i) => 
                              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
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
            <Card className="shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle>Thông số kỹ thuật</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-slate-100 last:border-b-0">
                      <span className="text-slate-600 text-sm">{key}</span>
                      <span className="font-medium text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact card */}
            <Card className="mt-8 shadow-sm rounded-xl">
              <CardHeader>
                <CardTitle className="text-lg">Cần tư vấn?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm mb-4">
                  Liên hệ với chúng tôi để được tư vấn chi tiết về sản phẩm và nhận báo giá tốt nhất.
                </p>
                <div className="space-y-3">
                  <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all hover-lift group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <PhoneIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-blue-900">{COMPANY_INFO.phone}</div>
                      <div className="text-xs text-blue-600">Gọi ngay</div>
                    </div>
                  </a>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-all hover-lift group">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <EnvelopeIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-purple-900">{COMPANY_INFO.email}</div>
                      <div className="text-xs text-purple-600">Gửi email</div>
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

