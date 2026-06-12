import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CATEGORY_DETAILS } from "@/lib/content/categories";

// Build categories from the centralized data
const categories = [
  {
    id: "day-du",
    name: CATEGORY_DETAILS["day-du"].name,
    description: CATEGORY_DETAILS["day-du"].description,
    image: CATEGORY_DETAILS["day-du"].image,
    features: CATEGORY_DETAILS["day-du"].features.slice(0, 3),
    href: "/products?category=day-du",
  },
  {
    id: "day-du-thun",
    name: CATEGORY_DETAILS["day-du-thun"].name,
    description: CATEGORY_DETAILS["day-du-thun"].description,
    image: CATEGORY_DETAILS["day-du-thun"].image,
    features: CATEGORY_DETAILS["day-du-thun"].features.slice(0, 3),
    href: "/products?category=day-du-thun",
  },
  {
    id: "day-tip",
    name: CATEGORY_DETAILS["day-tip"].name,
    description: CATEGORY_DETAILS["day-tip"].description,
    image: CATEGORY_DETAILS["day-tip"].image,
    features: CATEGORY_DETAILS["day-tip"].features.slice(0, 3),
    href: "/products?category=day-tip",
  },
  {
    id: "day-thun",
    name: CATEGORY_DETAILS["day-thun"].name,
    description: CATEGORY_DETAILS["day-thun"].description,
    image: CATEGORY_DETAILS["day-thun"].image,
    features: CATEGORY_DETAILS["day-thun"].features.slice(0, 3),
    href: "/products?category=day-thun",
  },
  {
    id: "day-dai",
    name: CATEGORY_DETAILS["day-dai"].name,
    description: CATEGORY_DETAILS["day-dai"].description,
    image: CATEGORY_DETAILS["day-dai"].image,
    features: CATEGORY_DETAILS["day-dai"].features.slice(0, 3),
    href: "/products?category=day-dai",
  },
  {
    id: "day-chu",
    name: CATEGORY_DETAILS["day-chu"].name,
    description: CATEGORY_DETAILS["day-chu"].description,
    image: CATEGORY_DETAILS["day-chu"].image,
    features: CATEGORY_DETAILS["day-chu"].features.slice(0, 3),
    href: "/products?category=day-chu",
  },
];

export function QuickCategories() {
  return (
    <section className="py-6 bg-gradient-to-br from-white to-slate-50/50 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-400/10 to-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-accent-300/10 to-primary-400/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        
        {/* Compact Section Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm font-medium mb-4 border border-accent-200">
            <span className="w-1.5 h-1.5 bg-accent-600 rounded-full animate-pulse"></span>
            Sản phẩm nổi bật
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Danh mục</span>{" "}
            <span className="text-gradient-accent">sản phẩm</span>
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá các sản phẩm chất lượng cao được nhiều khách hàng tin tưởng và lựa chọn hàng đầu
          </p>
        </div>

        {/* Categories Grid - 3 columns on large screen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up card-interactive"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
            >
              {/* Floating badge */}
              <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                #{index + 1}
              </div>
              
              {/* Category Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-50 to-accent-50/30">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Interactive overlay with icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Category Content */}
              <div className="p-6 relative">
                <h3 className="text-lg font-bold text-primary-900 mb-3 group-hover:text-accent-700 transition-colors duration-300">
                  {category.name}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300">
                  {category.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center gap-2 text-sm text-slate-600 group-hover:text-slate-700 transition-all duration-300"
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <div className="w-5 h-5 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={category.href}
                  className="group/btn inline-flex items-center gap-2 bg-accent-700 text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10">Xem chi tiết</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <div className="max-w-lg mx-auto">
            <div className="bg-gradient-to-r from-white to-accent-50/50 rounded-2xl border border-slate-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
              
              <h3 className="text-lg font-bold text-primary-900 mb-2">Cần tư vấn chuyên nghiệp?</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Đội ngũ kỹ thuật giàu kinh nghiệm sẵn sàng hỗ trợ bạn lựa chọn sản phẩm phù hợp nhất
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-accent-700 hover:bg-accent-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10">Liên hệ ngay</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
                
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Phản hồi trong 15 phút</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
