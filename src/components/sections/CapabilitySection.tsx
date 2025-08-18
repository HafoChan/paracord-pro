import { Factory, Cog, Truck, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const capabilities = [
  {
    icon: Factory,
    title: "Năng lực sản xuất",
    items: [
      "Dây chuyền sản xuất hiện đại từ Nhật Bản",
      "Công suất 10,000m dây/ngày",
      "Kho bãi rộng 2,000m² được tổ chức khoa học",
      "Hệ thống quản lý chất lượng ISO 9001:2015"
    ]
  },
  {
    icon: Cog,
    title: "Dịch vụ gia công",
    items: [
      "Cắt dây theo độ dài yêu cầu",
      "Bấm đầu típ kim loại và nhựa",
      "Nối dây với độ chính xác cao",
      "Đóng gói theo yêu cầu khách hàng"
    ]
  },
  {
    icon: CheckCircle,
    title: "Kiểm soát chất lượng",
    items: [
      "Kiểm tra nguyên liệu đầu vào 100%",
      "Giám sát quy trình sản xuất 24/7",
      "Test sản phẩm theo tiêu chuẩn quốc tế",
      "Bảo hành sản phẩm lên đến 12 tháng"
    ]
  },
  {
    icon: Truck,
    title: "Giao hàng & Hỗ trợ",
    items: [
      "Giao hàng toàn quốc trong 1-3 ngày",
      "Hỗ trợ kỹ thuật 24/7",
      "Tư vấn giải pháp miễn phí",
      "Chính sách đổi trả linh hoạt"
    ]
  }
];

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Hệ thống quản lý chất lượng"
  },
  {
    name: "CE Marking",
    description: "Chứng nhận an toàn châu Âu"
  },
  {
    name: "REACH Compliance",
    description: "Tuân thủ quy định hóa chất EU"
  },
  {
    name: "OEKO-TEX",
    description: "An toàn sinh thái dệt may"
  }
];

export function CapabilitySection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Năng lực và dịch vụ
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Với cơ sở vật chất hiện đại và đội ngũ chuyên nghiệp, chúng tôi cam kết 
            mang đến dịch vụ toàn diện từ sản xuất đến hậu mãi.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-16">
          {capabilities.map((capability, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <capability.icon className="h-5 w-5 text-slate-600" />
                  </div>
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Chứng nhận & Tiêu chuẩn
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-16">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-slate-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {cert.description}
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

