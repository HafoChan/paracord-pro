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

const stats = [
  {
    icon: Building2,
    value: "10+",
    label: "Năm kinh nghiệm",
    description: "Trong ngành sản xuất dây dù và dây đai thun"
  },
  {
    icon: Users,
    value: "500+",
    label: "Khách hàng",
    description: "Tin tưởng và sử dụng sản phẩm của chúng tôi"
  },
  {
    icon: Trophy,
    value: "99%",
    label: "Hài lòng",
    description: "Khách hàng đánh giá tích cực về chất lượng"
  },
  {
    icon: Truck,
    value: "63",
    label: "Tỉnh thành",
    description: "Giao hàng trên toàn quốc nhanh chóng"
  }
];

export function AboutSection() {
  return (
    <section className="py-6 bg-gradient-to-br from-white to-slate-50/50 relative overflow-hidden">
      {/* Simplified background decoration */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-blue-400/8 to-indigo-400/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Compact Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                Về chúng tôi
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-gradient">Tại sao chọn</span>{" "}
                <span className="text-gradient-accent">Paracord Pro?</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Đơn vị <span className="text-blue-600 font-semibold">tiên phong</span> sản xuất dây dù và dây đai thun tại Việt Nam. 
                Cam kết mang đến sản phẩm <span className="text-blue-600 font-semibold">chất lượng cao</span> với đội ngũ kỹ thuật giàu kinh nghiệm.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  icon: CheckCircle,
                  title: "Chất lượng đảm bảo",
                  description: "Kiểm tra nghiêm ngặt từng công đoạn sản xuất",
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: Rocket,
                  title: "Giao hàng nhanh", 
                  description: "Phủ sóng toàn quốc, giao hàng 1-3 ngày",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: UserCircle,
                  title: "Tư vấn chuyên nghiệp",
                  description: "Hỗ trợ giải pháp tối ưu cho từng dự án",
                  color: "from-purple-500 to-purple-600"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-slate-200 hover:shadow-lg hover:bg-white/80 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <feature.icon className="w-5 h-5 text-white group-hover:animate-pulse" />
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
              ))}
            </div>

            <div>
              <Button 
                size="sm" 
                className="group bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden" 
                asChild
              >
                <Link href="/about" className="flex items-center gap-2 relative z-10">
                  <span>Tìm hiểu thêm</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced stats grid with hover effects */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="group text-center bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 rounded-xl cursor-pointer">
                <CardContent className="p-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-3 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="h-5 w-5 text-white group-hover:animate-pulse" />
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
