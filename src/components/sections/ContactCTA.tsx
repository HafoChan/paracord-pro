import Link from "next/link";
import { Phone, Mail, MessageCircle, ArrowRight, SparklesIcon, ZapIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section className="py-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced background with animations */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/patterns/circle-pattern.svg')",
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-32 right-32 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg rotate-45 blur-lg animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full blur-lg animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced main heading */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Liên hệ ngay
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">Sẵn sàng hợp tác</span>{" "}
              <span className="text-gradient-accent">cùng chúng tôi?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Liên hệ ngay để được tư vấn miễn phí và nhận báo giá tốt nhất cho dự án của bạn <br />
              <span className="text-blue-600 font-semibold">Cam kết phản hồi trong 15 phút!</span>
            </p>
          </div>

          {/* Enhanced Contact options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Gọi điện thoại",
                description: "Tư vấn trực tiếp và chuyên nghiệp",
                action: "Gọi ngay",
                href: `tel:${COMPANY_INFO.phone}`,
                detail: COMPANY_INFO.phone,
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50/50",
                delay: "0s"
              },
              {
                icon: Mail,
                title: "Gửi email",
                description: "Gửi yêu cầu chi tiết và nhận báo giá",
                action: "Gửi email",
                href: `mailto:${COMPANY_INFO.email}`,
                detail: "info@paracordpro.com",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50/50",
                delay: "0.2s"
              },
              {
                icon: MessageCircle,
                title: "Chat trực tuyến",
                description: "Hỗ trợ nhanh qua Zalo/Messenger",
                action: "Bắt đầu chat",
                href: "/contact",
                detail: "Phản hồi ngay",
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50/50",
                delay: "0.4s"
              }
            ].map((contact, index) => (
              <div 
                key={index}
                className={`group relative flex flex-col items-center p-8 ${contact.bgColor} backdrop-blur-sm border border-white/20 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 animate-fade-in-up card-interactive`}
                style={{ animationDelay: contact.delay, animationFillMode: 'both' }}
              >
                {/* Floating icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <contact.icon className="h-8 w-8 text-white group-hover:animate-pulse" />
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-slate-900 group-hover:text-blue-900 transition-colors duration-300">
                  {contact.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 text-center leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {contact.description}
                </p>
                
                <p className="text-xs text-slate-500 mb-6 font-medium">{contact.detail}</p>
                
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group/btn border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <a
                    href={contact.href}
                    className="text-slate-700 group-hover/btn:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    {contact.action}
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Enhanced Main CTA */}
          <div className="relative animate-fade-in-up flex flex-col items-center gap-6 mb-8" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>

                {/* Trust indicators */}
                <div className="flex items-center gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Tư vấn miễn phí</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span className="font-medium">Báo giá cạnh tranh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span className="font-medium">Giao hàng nhanh</span>
                  </div>
                </div>
                
                {/* Main CTA Button */}
                <Button 
                  size="lg" 
                  className="group relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800 text-white px-12 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 rounded-2xl overflow-hidden" 
                  asChild
                >
                  <Link href="/contact" className="relative z-10 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                    <span className="relative z-10">Yêu cầu báo giá ngay</span>
                  </Link>
                </Button>

          </div>
        </div>
      </div>
    </section>
  );
}

