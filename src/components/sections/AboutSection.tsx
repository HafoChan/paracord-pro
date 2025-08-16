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
    <section className="py-8 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Enhanced Background decoration with more sophistication */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-gradient-to-r from-green-400/8 to-blue-400/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '6s' }}></div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/patterns/circle-pattern.svg')",
          backgroundSize: '300px 300px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left content with better typography */}
          <div className="animate-fade-in-up space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Về chúng tôi
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-gradient block mb-2">Tại sao chọn</span>
                <span className="text-gradient-accent">Paracord Pro?</span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Chúng tôi tự hào là đơn vị <span className="text-blue-600 font-semibold">tiên phong</span> trong lĩnh vực sản xuất dây dù và dây đai thun tại Việt Nam. 
                Với đội ngũ kỹ thuật giàu kinh nghiệm và hệ thống máy móc hiện đại, chúng tôi cam kết mang đến 
                những sản phẩm <span className="text-blue-600 font-semibold">chất lượng cao nhất</span>.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  icon: CheckCircle,
                  title: "Chất lượng đảm bảo",
                  description: "Kiểm tra chất lượng nghiêm ngặt trong từng công đoạn sản xuất",
                  color: "from-green-500 to-green-600",
                  bgColor: "bg-green-50",
                  delay: "0s"
                },
                {
                  icon: Rocket,
                  title: "Giao hàng nhanh chóng", 
                  description: "Hệ thống logistics phủ sóng toàn quốc, giao hàng trong 1-3 ngày",
                  color: "from-blue-500 to-blue-600",
                  bgColor: "bg-blue-50",
                  delay: "0.2s"
                },
                {
                  icon: UserCircle,
                  title: "Tư vấn chuyên nghiệp",
                  description: "Đội ngũ kỹ thuật hỗ trợ tư vấn giải pháp tối ưu cho từng dự án",
                  color: "from-purple-500 to-purple-600",
                  bgColor: "bg-purple-50",
                  delay: "0.4s"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className={`group flex items-start gap-6 p-6 rounded-2xl ${feature.bgColor}/50 backdrop-blur-sm border border-white/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up`}
                  style={{ animationDelay: feature.delay, animationFillMode: 'both' }}
                >
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Hover arrow indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
              ))}
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <Button 
                size="lg" 
                className="group relative bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden" 
                asChild
              >
                <Link href="/about" className="flex items-center gap-3 relative z-10">
                  <span className="relative z-10 font-semibold">Tìm hiểu thêm về chúng tôi</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced Right stats with sophisticated design */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'both' }}
              >
                <Card className="relative text-center bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden">
                  <CardContent className="p-8 relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl transform translate-x-6 -translate-y-6"></div>
                    
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <stat.icon className="h-8 w-8 text-white group-hover:animate-pulse" />
                      </div>
                      
                      <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      
                      <div className="font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                        {stat.label}
                      </div>
                      
                      <div className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {stat.description}
                      </div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
