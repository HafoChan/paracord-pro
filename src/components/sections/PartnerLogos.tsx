import { Building2 } from "lucide-react";

const PARTNERS = [
  { name: "Công ty May Mặc Việt Tiến", industry: "May mặc" },
  { name: "Xưởng Balo Túi Xách HN", industry: "Balo & Túi" },
  { name: "Công ty Thể Thao Outdoor VN", industry: "Thể thao" },
  { name: "Xưởng Thủ Công Mỹ Nghệ SG", industry: "Handmade" },
  { name: "Công ty Dệt May Phương Nam", industry: "Dệt may" },
  { name: "Nhà máy Sản xuất Balo ABC", industry: "Sản xuất" },
  { name: "Công ty Y Tế Medico", industry: "Y tế" },
  { name: "Xưởng Thời Trang Trendy", industry: "Thời trang" }
];

const INDUSTRIES = [
  "May mặc & Thời trang",
  "Balo & Túi xách",
  "Thể thao & Outdoor",
  "Y tế & Chăm sóc",
  "Thủ công mỹ nghệ",
  "Đóng gói & Logistics"
];

export function PartnerLogos() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-accent-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white shadow-lg text-accent-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 border-2 border-accent-200">
            <Building2 className="h-5 w-5" />
            <span>Đối tác tin cậy</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 leading-tight">
            Được tin dùng bởi <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent-600 to-primary-600">500+ doanh nghiệp</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Chúng tôi tự hào là đối tác tin cậy của nhiều doanh nghiệp trong và ngoài nước
          </p>
        </div>

        {/* Industries served */}
        <div className="mb-12">
          <h3 className="text-center text-primary-900 font-bold text-lg mb-6">Các ngành nghề đã phục vụ:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((industry, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border-2 border-slate-200 hover:border-accent-300 group"
              >
                <span className="text-slate-700 font-semibold group-hover:text-accent-700 transition-colors">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partner cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-slate-200 hover:border-accent-300"
              style={{ 
                animationDelay: `${index * 0.05}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Logo placeholder */}
              <div className="w-16 h-16 bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-accent-200">
                <Building2 className="h-8 w-8 text-accent-700" />
              </div>
              
              <h4 className="font-bold text-primary-900 text-sm mb-1 group-hover:text-accent-700 transition-colors">
                {partner.name}
              </h4>
              
              <p className="text-xs text-slate-600">
                {partner.industry}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "500+", label: "Đối tác" },
            { value: "63", label: "Tỉnh thành" },
            { value: "10+", label: "Năm kinh nghiệm" },
            { value: "99%", label: "Hài lòng" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border-2 border-slate-200 hover:border-accent-300 hover:shadow-md transition-all group">
              <div className="text-3xl font-bold text-accent-700 mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
