import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, ChevronLeft, ChevronRight, PaletteIcon, WrenchIcon, TruckIcon, SparklesIcon } from "lucide-react";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";
import { FEATURED_PRODUCTS_IMAGES } from "@/lib/images";

export function ProductHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const products = FEATURED_PRODUCTS_IMAGES;

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [products.length]);

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);

  if (isLoading) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-600 font-medium">Đang tải...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced background with parallax */}
      <div 
        className="absolute inset-0 opacity-10 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: "url('/patterns/circle-pattern.svg')",
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg rotate-45 blur-lg animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full blur-lg animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Company Information */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-300">Sản xuất</span>{" "}
                <span className="text-gradient-accent inline-block hover:scale-105 transition-transform duration-300 cursor-default">dây dù</span>{" "}
                <span className="inline-block hover:scale-105 transition-transform duration-300">và</span>{" "}
                <span className="text-gradient-accent inline-block hover:scale-105 transition-transform duration-300 cursor-default">dây đai thun</span>{" "}
                <span className="inline-block hover:scale-105 transition-transform duration-300">chất lượng cao</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                {COMPANY_INFO.description}. Phục vụ khách hàng trên toàn quốc với chất lượng uy tín.
              </p>
            </div>

            {/* Enhanced key features badges */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {[
                { text: "Gia công theo yêu cầu", icon: <WrenchIcon className="h-4 w-4" /> },
                { text: "Đa dạng màu sắc", icon: <PaletteIcon className="h-4 w-4" /> }, 
                { text: "Giao hàng toàn quốc", icon: <TruckIcon className="h-4 w-4" /> }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center group bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:shadow-md hover:scale-105 hover:bg-white transition-all duration-300 cursor-default"
                  style={{animationDelay: `${0.6 + index * 0.1}s`}}
                >
                  <span className="mr-2 group-hover:animate-bounce">{feature.icon}</span>
                  {feature.text}
                </div>
              ))}
            </div>

            {/* Compact CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <Button
                size="default"
                className="group relative bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <Link href="/products" className="flex items-center gap-2 relative z-10">
                  <span className="relative z-10">Xem sản phẩm</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </Link>
              </Button>
              
              <Button
                size="default"
                variant="outline"
                className="group border-2 border-slate-300 text-slate-700 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Link
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 group-hover:animate-pulse" />
                  <span>Gọi ngay: {COMPANY_INFO.phone}</span>
                </Link>
              </Button>
            </div>

            {/* Compact Trust indicator */}
            <div className="pt-4 border-t border-slate-200/50 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <p className="flex items-center gap-2 text-sm text-slate-500 mb-2 font-medium">
                <SparklesIcon className="h-4 w-4 text-yellow-500" />
                Được tin tưởng bởi các doanh nghiệp</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Ngành may mặc", "Balo - túi xách", "Đồ thể thao", "Y tế - sức khỏe"].map((industry, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 cursor-default"
                    style={{animationDelay: `${1.2 + index * 0.1}s`}}
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Modern Product Showcase */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="relative">
              
              {/* Compact Product Stack Preview */}
              <div className="relative h-[460px]">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide 
                        ? 'z-30 scale-100 opacity-100 rotate-0' 
                        : index === currentSlide + 1 || (currentSlide === products.length - 1 && index === 0)
                        ? 'z-20 scale-95 opacity-60 rotate-2 translate-x-4 translate-y-2'
                        : index === currentSlide - 1 || (currentSlide === 0 && index === products.length - 1)
                        ? 'z-10 scale-90 opacity-30 -rotate-2 -translate-x-4 translate-y-4'
                        : 'z-0 scale-85 opacity-10 rotate-3 translate-x-8 translate-y-6'
                    }`}
                  >
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 h-full group hover:shadow-3xl transition-all duration-500">
                      
                      {/* Compact Product Image */}
                      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-2 text-white text-xs">
                              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                                Chất lượng cao
                              </span>
                              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                                Bảo hành
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Compact Product Info */}
                      <div className="p-4 space-y-3">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {product.name}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                        
                        {/* Compact Features */}
                        <div className="space-y-2">
                          {product.features.slice(0, 2).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600">
                              <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              </div>
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Compact Navigation */}
              <div className="flex items-center justify-between mt-6">
                {/* Compact Product Thumbnails */}
                <div className="flex items-center gap-3">
                  {products.map((product, index) => (
                    <button
                      key={product.id}
                      onClick={() => setCurrentSlide(index)}
                      className={`group relative transition-all duration-300 rounded-xl ${
                        index === currentSlide 
                          ? 'ring-2 ring-blue-500 ring-offset-2 scale-110' 
                          : 'hover:ring-2 hover:ring-blue-300 hover:ring-offset-2 hover:scale-105'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover rounded-xl group-hover:scale-100 transition-transform duration-300"
                        />
                      </div>
                      {index === currentSlide && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                
                {/* Compact Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="group w-10 h-10 bg-slate-100 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  >
                    <ChevronLeft className="h-4 w-4 text-slate-600 group-hover:text-white transition-colors duration-300" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="group w-10 h-10 bg-slate-100 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  >
                    <ChevronRight className="h-4 w-4 text-slate-600 group-hover:text-white transition-colors duration-300" />
                  </button>
                </div>
              </div>
              
              {/* Compact CTA Section */}
              <div className="mt-6">
                <Button 
                  className="group w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800 text-white py-3 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden rounded-2xl"
                >
                  <Link href="/products" className="flex items-center justify-center gap-2 relative z-10">
                    <span className="relative z-10 text-sm">Khám phá tất cả sản phẩm</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
