import Link from "next/link";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section className="py-6 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-blue-400/8 to-indigo-500/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-purple-400/8 to-pink-500/8 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Compact heading */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              Liên hệ ngay
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-gradient">Sẵn sàng hợp tác</span>{" "}
              <span className="text-gradient-accent">cùng chúng tôi?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Liên hệ ngay để được tư vấn miễn phí và nhận báo giá tốt nhất
              <br /><span className="text-blue-600 font-semibold">Cam kết phản hồi trong 15 phút!</span>
            </p>
          </div>

          {/* Compact Contact options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Phone,
                title: "Gọi điện",
                description: "Tư vấn trực tiếp",
                action: "Gọi ngay",
                href: `tel:${COMPANY_INFO.phone}`,
                detail: COMPANY_INFO.phone,
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Mail,
                title: "Gửi email",
                description: "Nhận báo giá",
                action: "Gửi email",
                href: `mailto:${COMPANY_INFO.email}`,
                detail: "info@paracordpro.com",
                color: "from-green-500 to-green-600"
              },
              {
                icon: MessageCircle,
                title: "Chat online",
                description: "Hỗ trợ nhanh",
                action: "Bắt đầu chat",
                href: "/contact",
                detail: "Phản hồi ngay",
                color: "from-purple-500 to-purple-600"
              }
            ].map((contact, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center p-6 bg-white border border-slate-200 rounded-xl hover:shadow-xl hover:border-blue-300 hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {/* Enhanced icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center mb-4 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <contact.icon className="h-6 w-6 text-white group-hover:animate-pulse" />
                </div>
                
                <h3 className="font-bold mb-2 text-slate-900 group-hover:text-blue-900 transition-colors duration-300">
                  {contact.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-3 text-center group-hover:text-slate-700 transition-colors duration-300">
                  {contact.description}
                </p>
                
                <p className="text-xs text-slate-500 mb-4 font-medium group-hover:text-blue-600 transition-colors duration-300">{contact.detail}</p>
                
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group/btn border border-slate-300 hover:border-blue-400 hover:bg-blue-50 hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  <a
                    href={contact.href}
                    className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium relative z-10"
                  >
                    {contact.action}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Compact Main CTA */}
          <div className="flex flex-col items-center gap-4">
            {/* Simple trust indicators */}
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Tư vấn miễn phí</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Báo giá cạnh tranh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Giao hàng nhanh</span>
              </div>
            </div>
            
            {/* Enhanced CTA Button */}
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden" 
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2 relative z-10">
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Yêu cầu báo giá ngay</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

