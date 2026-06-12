import Link from "next/link";
import { 
  ArrowRight,
  Users, 
  Building2, 
  Trophy, 
  Truck,
  Award,
  Clock,
  Headphones,
  Shield,
  Sparkles,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { ABOUT_STATS, ABOUT_SECTION } from "@/lib/constants";

const REASONS = [
  {
    icon: Award,
    title: "Chất lượng đảm bảo",
    description: "Kiểm tra nghiêm ngặt từng công đoạn sản xuất",
    color: "bg-accent-600"
  },
  {
    icon: Clock,
    title: "Giao hàng nhanh",
    description: "Phủ sóng toàn quốc, giao hàng 1-3 ngày",
    color: "bg-primary-700"
  },
  {
    icon: TrendingUp,
    title: "Giá cạnh tranh",
    description: "Giá tốt nhất thị trường, chiết khấu hấp dẫn",
    color: "bg-accent-600"
  },
  {
    icon: Sparkles,
    title: "Đa dạng màu sắc",
    description: "Hơn 200+ màu sắc, tùy chỉnh theo yêu cầu",
    color: "bg-primary-700"
  },
  {
    icon: Headphones,
    title: "Hỗ trợ 24/7",
    description: "Tư vấn chuyên nghiệp, nhiệt tình mọi lúc",
    color: "bg-accent-600"
  },
  {
    icon: Shield,
    title: "Bảo hành uy tín",
    description: "Cam kết chất lượng, đổi trả dễ dàng",
    color: "bg-primary-700"
  }
];

export function AboutSection() {
  // Icon mapping for stats
  const statIcons = {
    "Năm kinh nghiệm": Building2,
    "Khách hàng": Users,
    "Hài lòng": Trophy,
    "Tỉnh thành": Truck
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-accent-200">
            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
            {ABOUT_SECTION.badge}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            <span className="text-accent-600">{ABOUT_SECTION.title.highlight}</span>{" "}
            <span className="text-primary-900">{ABOUT_SECTION.title.accent}</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            {ABOUT_SECTION.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: 6 Reasons (2 columns) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REASONS.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 ${reason.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-accent-600 transition-colors">
                      {reason.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>

                    {/* Hover effect border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-400 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Stats (2x2 grid) */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_STATS.map((stat, index) => {
                const IconComponent = statIcons[stat.label as keyof typeof statIcons];
                return (
                  <Card key={index} className="group text-center bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 rounded-xl cursor-pointer">
                    <CardContent className="p-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-accent-600 rounded-lg mb-3 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="h-5 w-5 text-white group-hover:animate-pulse" />
                      </div>
                      
                      <div className="text-2xl font-bold text-accent-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      
                      <div className="font-bold text-slate-900 text-xs mb-1 group-hover:text-accent-600 transition-colors duration-300">
                        {stat.label}
                      </div>
                      
                      <div className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Button 
                size="sm" 
                className="w-full group bg-accent-600 hover:bg-accent-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden" 
                asChild
              >
                <Link href={ABOUT_SECTION.cta.href} className="flex items-center justify-center gap-2 relative z-10">
                  <span>{ABOUT_SECTION.cta.text}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
