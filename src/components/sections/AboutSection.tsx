import Link from "next/link";
import { 
  ArrowRight,
  Users, 
  Building2, 
  Trophy, 
  Truck,
  CheckCircle,
  Rocket,
  UserCircle
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { ABOUT_STATS, ABOUT_SECTION } from "@/lib/constants";

export function AboutSection() {
  // Icon mapping for stats and features
  const statIcons = {
    "Năm kinh nghiệm": Building2,
    "Khách hàng": Users,
    "Hài lòng": Trophy,
    "Tỉnh thành": Truck
  };

  const featureIcons = {
    "Chất lượng đảm bảo": CheckCircle,
    "Giao hàng nhanh": Rocket,
    "Tư vấn chuyên nghiệp": UserCircle
  };

  return (
    <section className="py-6 bg-gradient-to-br from-white to-slate-50/50 relative overflow-hidden">
      {/* Simplified background decoration */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-blue-400/8 to-indigo-400/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Compact Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                {ABOUT_SECTION.badge}
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-gradient">{ABOUT_SECTION.title.highlight}</span>{" "}
                <span className="text-gradient-accent">{ABOUT_SECTION.title.accent}</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                {ABOUT_SECTION.description}
              </p>
            </div>
            
            <div className="space-y-4">
              {ABOUT_SECTION.features.map((feature, index) => {
                const IconComponent = featureIcons[feature.title as keyof typeof featureIcons];
                return (
                  <div 
                    key={index} 
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-slate-200 hover:shadow-lg hover:bg-white/80 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="w-5 h-5 text-white group-hover:animate-pulse" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-900 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <Button 
                size="sm" 
                className="group bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden" 
                asChild
              >
                <Link href={ABOUT_SECTION.cta.href} className="flex items-center gap-2 relative z-10">
                  <span>{ABOUT_SECTION.cta.text}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced stats grid with hover effects */}
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_STATS.map((stat, index) => {
              const IconComponent = statIcons[stat.label as keyof typeof statIcons];
              return (
                <Card key={index} className="group text-center bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 rounded-xl cursor-pointer">
                  <CardContent className="p-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-3 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="h-5 w-5 text-white group-hover:animate-pulse" />
                    </div>
                    
                    <div className="text-2xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    
                    <div className="font-bold text-slate-900 text-sm mb-2 group-hover:text-blue-900 transition-colors duration-300">
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
        </div>
      </div>
    </section>
  );
}
