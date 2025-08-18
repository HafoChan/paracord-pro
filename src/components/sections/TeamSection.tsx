import { Card, CardContent } from "@/components/ui/Card";
import { Building2, Search, Beaker, TrendingUp } from "lucide-react";

const teamStats = [
  {
    number: "50+",
    label: "Nhân viên",
    description: "Đội ngũ chuyên nghiệp và giàu kinh nghiệm"
  },
  {
    number: "10+", 
    label: "Kỹ sư",
    description: "Chuyên gia kỹ thuật và nghiên cứu phát triển"
  },
  {
    number: "24/7",
    label: "Hỗ trợ",
    description: "Dịch vụ chăm sóc khách hàng liên tục"
  },
  {
    number: "15+",
    label: "Năm kinh nghiệm",
    description: "Kinh nghiệm trung bình của đội ngũ quản lý"
  }
];

const departments = [
  {
    name: "Sản xuất",
    description: "Vận hành dây chuyền sản xuất hiện đại với quy trình được chuẩn hóa",
    icon: Building2
  },
  {
    name: "Kiểm soát chất lượng",
    description: "Đảm bảo chất lượng sản phẩm từ nguyên liệu đến thành phẩm",
    icon: Search
  },
  {
    name: "Nghiên cứu & Phát triển",
    description: "Không ngừng cải tiến và phát triển sản phẩm mới",
    icon: Beaker
  },
  {
    name: "Kinh doanh & Marketing",
    description: "Tư vấn giải pháp và chăm sóc khách hàng chuyên nghiệp",
    icon: TrendingUp
  }
];

export function TeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Đội ngũ của chúng tôi
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sức mạnh của Paracord Pro đến từ đội ngũ nhân viên tận tâm, chuyên nghiệp 
            và không ngừng học hỏi để mang đến dịch vụ tốt nhất.
          </p>
        </div>

        {/* Team stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 px-16">
          {teamStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-slate-700 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-500">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Các bộ phận chuyên môn
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-16">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg flex-shrink-0">
                      <dept.icon className="h-6 w-6 text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-slate-900 mb-2">
                        {dept.name}
                      </h4>
                      <p className="text-slate-600">
                        {dept.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company culture */}
        <div className="mt-16 text-center">
          <Card className="bg-slate-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Văn hóa doanh nghiệp
              </h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Tại Paracord Pro, chúng tôi xây dựng một môi trường làm việc tích cực, khuyến khích sáng tạo 
                và phát triển cá nhân. Mỗi thành viên đều được tôn trọng, có cơ hội học hỏi và thăng tiến 
                trong sự nghiệp. Chúng tôi tin rằng nhân viên hạnh phúc sẽ tạo ra sản phẩm chất lượng 
                và dịch vụ xuất sắc.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

