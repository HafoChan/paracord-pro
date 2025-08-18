import { Calendar, Target, Award, Users, Trophy, Handshake, Zap, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const milestones = [
  {
    year: "2014",
    title: "Thành lập công ty",
    description: "Bắt đầu với xưởng sản xuất nhỏ, chuyên về dây dù cơ bản",
    icon: Calendar
  },
  {
    year: "2017", 
    title: "Mở rộng sản xuất",
    description: "Đầu tư máy móc hiện đại, mở rộng sang dây đai thun",
    icon: Target
  },
  {
    year: "2020",
    title: "Chứng nhận chất lượng",
    description: "Đạt các chứng nhận ISO, xuất khẩu quốc tế",
    icon: Award
  },
  {
    year: "2024",
    title: "Phát triển bền vững",
    description: "500+ khách hàng tin tưởng, đội ngũ 50+ nhân viên",
    icon: Users
  }
];

const values = [
  {
    title: "Chất lượng",
    description: "Cam kết mang đến sản phẩm chất lượng cao nhất với quy trình kiểm soát nghiêm ngặt",
    icon: Trophy
  },
  {
    title: "Uy tín", 
    description: "Xây dựng mối quan hệ lâu dài với khách hàng dựa trên sự tin tưởng và minh bạch",
    icon: Handshake
  },
  {
    title: "Chuyên nghiệp",
    description: "Đội ngũ có kinh nghiệm, luôn cập nhật công nghệ và xu hướng mới nhất",
    icon: Zap
  },
  {
    title: "Sáng tạo",
    description: "Không ngừng nghiên cứu và phát triển các sản phẩm mới đáp ứng nhu cầu thị trường",
    icon: Lightbulb
  }
];

export function CompanyStory() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Company story */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-8">
            Câu chuyện của chúng tôi
          </h2>
          <div className="space-y-6 text-lg text-slate-600">
            <p>
              Paracord Pro ra đời từ niềm đam mê với chất lượng và mong muốn mang đến cho thị trường Việt Nam 
              những sản phẩm dây dù, dây đai thun đạt tiêu chuẩn quốc tế. Bắt đầu từ một xưởng sản xuất nhỏ 
              vào năm 2014, chúng tôi đã không ngừng phát triển và hoàn thiện.
            </p>
            <p>
              Ngày nay, với đội ngũ hơn 50 nhân viên chuyên nghiệp, hệ thống máy móc hiện đại và quy trình 
              sản xuất được chuẩn hóa, chúng tôi tự hào là đối tác tin cậy của hơn 500 doanh nghiệp trên 
              toàn quốc và khu vực.
            </p>
            <p>
              Chúng tôi tin rằng, thành công đến từ sự kết hợp hoàn hảo giữa chất lượng sản phẩm, 
              dịch vụ khách hàng xuất sắc và tinh thần đổi mới không ngừng.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Các mốc quan trọng
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-16">
            {milestones.map((milestone, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-4">
                    <milestone.icon className="h-6 w-6 text-slate-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">
                    {milestone.year}
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core values */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Giá trị cốt lõi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-16">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-4">
                    <value.icon className="h-6 w-6 text-slate-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-slate-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

