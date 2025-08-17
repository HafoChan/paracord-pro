import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { 
  SwatchIcon, 
  BriefcaseIcon, 
  HeartIcon, 
  UserGroupIcon,
  PaintBrushIcon 
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/Button";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { COMPANY_INFO } from "@/lib/constants";

// Define industries constant for better maintainability
const INDUSTRIES = [
  { name: "Ngành may mặc", icon: SwatchIcon, ariaLabel: "Clothing industry" },
  { name: "Balo - túi xách", icon: BriefcaseIcon, ariaLabel: "Backpacks and bags" },
  { name: "Đồ thể thao", icon: HeartIcon, ariaLabel: "Sports equipment" },
  { name: "Y tế - sức khỏe", icon: UserGroupIcon, ariaLabel: "Healthcare" },
  { name: "Thủ công mỹ nghệ", icon: PaintBrushIcon, ariaLabel: "Handicrafts" },
];

export function HeroSection() {
  return (
    <section className="relative gradient-hero py-12 lg:py-20 overflow-hidden">
      {/* Enhanced Background decorations */}
      <div
        className="absolute inset-0 bg-[url('/patterns/circle-pattern.svg')] opacity-30"
        aria-hidden="true"
      />
      <ParticleBackground />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading */}
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              Sản xuất{" "}
              <span className="text-shimmer">dây dù</span> và{" "}
              <span className="text-shimmer">dây đai thun</span>{" "}
              chất lượng cao
            </h1>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto font-medium leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            {COMPANY_INFO.description}. Phục vụ khách hàng trên toàn quốc với chất lượng uy tín.
          </p>

          {/* Key features */}
          <div
            className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 sm:mb-12 text-slate-600 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            {[
              { text: "Gia công theo yêu cầu", delay: "0s" },
              { text: "Đa dạng màu sắc", delay: "0.5s" },
              { text: "Giao hàng toàn quốc", delay: "1s" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-soft hover:shadow-hover transition-all hover-lift"
              >
                <div
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 gradient-accent rounded-full animate-pulse"
                  style={{ animationDelay: feature.delay }}
                />
                <span className="font-medium text-sm sm:text-base">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            <Button
              size="lg"
              className="gradient-button hover:shadow-hover transition-all hover-lift group"
              asChild
            >
              <Link href="/products" className="flex items-center gap-2">
                Xem sản phẩm
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-slate-50 hover:shadow-hover transition-all hover-lift group"
              asChild
            >
              <Link
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2"
                aria-label={`Call us at ${COMPANY_INFO.phone}`}
              >
                <Phone className="h-5 w-5 group-hover:animate-bounce-slow" />
                Gọi ngay: {COMPANY_INFO.phone}
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-16 sm:mt-20 pt-6 sm:pt-8 animate-fade-in-up"
            style={{ animationDelay: "0.8s", animationFillMode: "both" }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8 shadow-soft">
              <p className="text-slate-500 text-sm font-medium mb-6">
                Được tin tưởng bởi các doanh nghiệp
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                                 {INDUSTRIES.map((industry, index) => (
                   <div
                     key={index}
                     className="text-center p-3 rounded-xl hover:bg-white/60 transition-all hover-lift group"
                     aria-label={industry.ariaLabel}
                   >
                     <div className="w-8 h-8 mx-auto mb-2 text-slate-600 group-hover:text-blue-600 transition-colors">
                       <industry.icon className="w-full h-full" />
                     </div>
                     <div className="text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors">{industry.name}</div>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}