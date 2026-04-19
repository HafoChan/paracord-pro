import { Factory, Cog, TrendingUp, Users } from "lucide-react";

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

export function ManufacturingCapabilitiesCompact() {
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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {CAPABILITIES.map((cap, index) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/10 text-center"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <div className="text-3xl font-bold text-white mb-1">
                  {cap.value}
                </div>
                
                <div className="font-semibold text-accent-300 mb-1 text-sm">
                  {cap.label}
                </div>
                
                <div className="text-xs text-slate-300">
                  {cap.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/about"
            className="inline-flex items-center gap-2 bg-white text-primary-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>Tìm hiểu thêm về chúng tôi</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
