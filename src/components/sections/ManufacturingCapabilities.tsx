import { Factory, Cog, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

const CAPABILITIES = [
  {
    icon: Factory,
    value: "2,000m²",
    label: "Diện tích nhà xưởng",
    description: "Cơ sở sản xuất hiện đại"
  },
  {
    icon: Cog,
    value: "50+",
    label: "Máy móc thiết bị",
    description: "Công nghệ tiên tiến"
  },
  {
    icon: TrendingUp,
    value: "100,000m",
    label: "Công suất/tháng",
    description: "Đáp ứng đơn hàng lớn"
  },
  {
    icon: Users,
    value: "30+",
    label: "Nhân viên",
    description: "Đội ngũ giàu kinh nghiệm"
  }
];

const FACTORY_IMAGES = [
  {
    src: "/assets/factory/factory1.jpg",
    alt: "Nhà xưởng sản xuất"
  },
  {
    src: "/assets/factory/factory2.jpg",
    alt: "Dây chuyền sản xuất"
  },
  {
    src: "/assets/factory/factory3.jpg",
    alt: "Máy móc hiện đại"
  },
  {
    src: "/assets/factory/factory4.jpg",
    alt: "Kiểm tra chất lượng"
  }
];

export function ManufacturingCapabilities() {
  return (
    <section className="py-16 bg-primary-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-700 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Factory className="h-4 w-4" />
            <span>Năng lực sản xuất</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cơ sở sản xuất <span className="text-accent-400">hiện đại</span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Với hơn 10 năm kinh nghiệm, chúng tôi tự hào sở hữu nhà xưởng và thiết bị tiên tiến
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {CAPABILITIES.map((cap, index) => {
                const IconComponent = cap.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/10"
                  >
                    <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="text-3xl font-bold text-white mb-1">
                      {cap.value}
                    </div>
                    
                    <div className="font-semibold text-accent-300 mb-1">
                      {cap.label}
                    </div>
                    
                    <div className="text-sm text-slate-300">
                      {cap.description}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="font-bold text-xl mb-4 text-accent-300">Cam kết của chúng tôi</h3>
              <ul className="space-y-3">
                {[
                  "Kiểm tra chất lượng nghiêm ngặt từng công đoạn",
                  "Giao hàng đúng hẹn, đóng gói cẩn thận",
                  "Hỗ trợ kỹ thuật 24/7",
                  "Bảo hành sản phẩm theo tiêu chuẩn"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Factory Images */}
          <div className="grid grid-cols-2 gap-4">
            {FACTORY_IMAGES.map((img, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-2xl overflow-hidden group"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
