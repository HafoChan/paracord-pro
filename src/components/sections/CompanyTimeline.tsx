import { Calendar, Target, Award, TrendingUp } from "lucide-react";

const MILESTONES = [
  {
    year: "2014",
    title: "Thành lập công ty",
    description: "Khởi đầu với xưởng sản xuất nhỏ, 5 nhân viên và quyết tâm mang đến sản phẩm chất lượng",
    icon: Calendar,
    color: "from-blue-500 to-blue-600"
  },
  {
    year: "2017",
    title: "Mở rộng sản xuất",
    description: "Đầu tư máy móc hiện đại, tăng công suất lên 50,000m/tháng, mở rộng đội ngũ lên 15 người",
    icon: Target,
    color: "from-green-500 to-green-600"
  },
  {
    year: "2020",
    title: "Đạt chứng nhận chất lượng",
    description: "Đạt chứng nhận ISO 9001:2015, khẳng định cam kết về chất lượng và quy trình sản xuất",
    icon: Award,
    color: "from-purple-500 to-purple-600"
  },
  {
    year: "2024",
    title: "Phát triển vững mạnh",
    description: "Phục vụ 500+ khách hàng, công suất 100,000m/tháng, đội ngũ 30+ nhân viên chuyên nghiệp",
    icon: TrendingUp,
    color: "from-orange-500 to-orange-600"
  }
];

export function CompanyTimeline() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Hành trình <span className="text-gradient">phát triển</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Từ một xưởng nhỏ đến đối tác tin cậy của hàng trăm doanh nghiệp
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-orange-200 hidden lg:block"></div>

            {/* Milestones */}
            <div className="space-y-12">
              {MILESTONES.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } flex-col gap-8`}
                    style={{ 
                      animationDelay: `${index * 0.2}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"} text-center lg:text-left`}>
                      <div className={`inline-block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 ${
                        isEven ? "lg:ml-auto" : "lg:mr-auto"
                      }`}>
                        <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${milestone.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-3`}>
                          <IconComponent className="h-4 w-4" />
                          <span>{milestone.year}</span>
                        </div>
                        
                        <h3 className="font-bold text-slate-900 text-xl mb-2">
                          {milestone.title}
                        </h3>
                        
                        <p className="text-slate-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Center icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-xl`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-100">
          <h3 className="font-bold text-slate-900 text-2xl mb-2">
            Tiếp tục hành trình cùng chúng tôi
          </h3>
          <p className="text-slate-600 mb-6">
            Chúng tôi không ngừng phát triển để phục vụ khách hàng tốt hơn mỗi ngày
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>Trở thành đối tác</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
