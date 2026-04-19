import { Trophy, Handshake, Zap, Lightbulb, Calendar, Target, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { CORE_VALUES } from "@/lib/content";

// Icon mapping for values
const valueIcons = {
  "Chất lượng": Trophy,
  "Uy tín": Handshake,
  "Chuyên nghiệp": Zap,
  "Sáng tạo": Lightbulb
};

const MILESTONES = [
  {
    year: "2014",
    title: "Thành lập công ty",
    description: "Khởi đầu với xưởng sản xuất nhỏ, 5 nhân viên và quyết tâm mang đến sản phẩm chất lượng",
    icon: Calendar,
    color: "bg-accent-600"
  },
  {
    year: "2017",
    title: "Mở rộng sản xuất",
    description: "Đầu tư máy móc hiện đại, tăng công suất lên 50,000m/tháng, mở rộng đội ngũ lên 15 người",
    icon: Target,
    color: "bg-primary-700"
  },
  {
    year: "2020",
    title: "Đạt chứng nhận chất lượng",
    description: "Đạt chứng nhận ISO 9001:2015, khẳng định cam kết về chất lượng và quy trình sản xuất",
    icon: Award,
    color: "bg-primary-600"
  },
  {
    year: "2024",
    title: "Phát triển vững mạnh",
    description: "Phục vụ 500+ khách hàng, công suất 100,000m/tháng, đội ngũ 30+ nhân viên chuyên nghiệp",
    icon: TrendingUp,
    color: "bg-accent-600"
  }
];

export function CompanyStory() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Core values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">
            {CORE_VALUES.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.values.map((value, index) => {
              const IconComponent = valueIcons[value.title as keyof typeof valueIcons];
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-4">
                      <IconComponent className="h-6 w-6 text-slate-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-slate-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Hành trình <span className="text-accent-600">phát triển</span>
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Từ một xưởng nhỏ đến đối tác tin cậy của hàng trăm doanh nghiệp
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-200 via-primary-200 to-accent-200 hidden lg:block"></div>

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
                          <div className={`inline-flex items-center gap-2 ${milestone.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-3`}>
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
                        <div className={`w-16 h-16 ${milestone.color} rounded-full flex items-center justify-center shadow-xl`}>
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
        </div>
      </div>
    </section>
  );
}

