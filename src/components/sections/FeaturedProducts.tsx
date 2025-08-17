import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SparklesIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FEATURED_PRODUCTS_IMAGES } from "@/lib/images";

const featuredProducts = FEATURED_PRODUCTS_IMAGES;

export function FeaturedProducts() {
  return (
    <section className="py-16 gradient-primary relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-r from-green-400/15 to-blue-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Sản phẩm</span>{" "}
            <span className="text-gradient-accent">nổi bật</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá các sản phẩm chất lượng cao được nhiều khách hàng tin tưởng và lựa chọn hàng đầu
          </p>
        </div>

        {/* Enhanced products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in-up hover-lift transition-all"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
            >
              <Card className="h-full gradient-card border-0 shadow-soft hover:shadow-hover transition-all group card-interactive overflow-hidden">
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="gradient-accent text-white shadow-soft">{product.category}</Badge>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <SparklesIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{product.name}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Enhanced features list */}
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-slate-600 group/item">
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <CheckCircleIcon className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium group-hover/item:text-slate-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Enhanced price and CTA */}
                  <div className="pt-6 border-t border-slate-100">
                    <p className="text-lg font-bold text-gradient mb-4">
                      {product.priceRange}
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full hover:bg-blue-50 hover:border-blue-300 transition-all group/btn">
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Yêu cầu báo giá
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <div className="glass rounded-2xl p-8 max-w-md mx-auto shadow-soft">
            <h3 className="text-xl font-bold text-gradient mb-4">Khám phá thêm</h3>
            <p className="text-slate-600 mb-6">Xem toàn bộ danh mục sản phẩm của chúng tôi</p>
            <Button size="lg" className="gradient-button hover:shadow-hover transition-all hover-lift group" asChild>
              <Link href="/products" className="flex items-center gap-2">
                Xem tất cả sản phẩm
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
