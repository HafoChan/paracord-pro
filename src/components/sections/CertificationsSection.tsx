import { Award, Shield, Leaf, CheckCircle } from "lucide-react";

const CERTIFICATIONS = [
  {
    name: "ISO 9001:2015",
    description: "Hệ thống quản lý chất lượng",
    icon: Award,
    color: "bg-accent-600"
  },
  {
    name: "OEKO-TEX Standard 100",
    description: "Chứng nhận an toàn dệt may",
    icon: Shield,
    color: "bg-primary-700"
  },
  {
    name: "Thân thiện môi trường",
    description: "Cam kết phát triển bền vững",
    icon: Leaf,
    color: "bg-primary-600"
  },
  {
    name: "Kiểm định chất lượng",
    description: "Kiểm tra nghiêm ngặt từng sản phẩm",
    icon: CheckCircle,
    color: "bg-accent-600"
  }
];

export function CertificationsSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-100/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-accent-200">
            <Award className="h-4 w-4" />
            <span>Chứng nhận & Cam kết</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Chất lượng được <span className="text-accent-600">chứng nhận</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sản phẩm của chúng tôi đạt các tiêu chuẩn chất lượng quốc tế, đảm bảo an toàn và thân thiện với môi trường
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className={`w-16 h-16 ${cert.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-accent-600 transition-colors">
                  {cert.name}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            * Chúng tôi cam kết tuân thủ các tiêu chuẩn chất lượng và an toàn cao nhất trong sản xuất
          </p>
        </div>
      </div>
    </section>
  );
}
