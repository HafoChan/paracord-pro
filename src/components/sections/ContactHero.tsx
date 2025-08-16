import { Phone, Mail, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn tìm được giải pháp tốt nhất. 
            Liên hệ ngay để nhận báo giá và tư vấn miễn phí!
          </p>
          
          {/* Quick contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-slate-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Hotline</h3>
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-slate-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-slate-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Giờ làm việc</h3>
              <div className="text-slate-600 text-center text-sm">
                <div>T2-T6: 8:00 - 17:30</div>
                <div>T7: 8:00 - 12:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

