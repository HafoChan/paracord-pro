import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  ShareIcon, 
  HeartIcon,
  StarIcon,
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
  return (
    <div className="py-8 bg-white relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Product Images */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center shadow-soft hover:shadow-hover transition-all card-interactive group">
              <img 
                src={product.images[0] || getProductImage(`${product.category}_${product.id}`, 'main') as string}
                alt={product.name}
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center shadow-soft hover:shadow-hover transition-all cursor-pointer group">
                  <img 
                    src={getCategoryImage(product.category as 'paracord' | 'eband' | 'service')}
                    alt={`${product.name} - Ảnh ${index + 2}`}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
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
              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-slate-600">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="border border-slate-200 rounded-lg p-4">
              <div className="text-sm text-slate-500 mb-1">Giá</div>
              <div className="text-2xl font-bold text-slate-900">
                {product.priceRange}
              </div>
              <div className="text-sm text-slate-500 mt-1">
                *Giá có thể thay đổi tùy theo số lượng và yêu cầu gia công
              </div>
            </div>

            {/* Enhanced Actions */}
            <div className="space-y-3">
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
            
            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
              <div className="text-center p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors group">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-medium text-green-700">Chất lượng</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group">
                <TruckIcon className="h-6 w-6 text-blue-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-medium text-blue-700">Giao nhanh</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors group">
                <ShieldCheckIcon className="h-6 w-6 text-purple-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-medium text-purple-700">Bảo hành</div>
              </div>
            </div>

            {/* Quick specs */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Thông số nhanh</CardTitle>
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
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
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
            <Card>
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
            <Card className="mt-6">
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

