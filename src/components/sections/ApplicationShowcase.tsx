import Image from "next/image";
import { Shirt, Backpack, Dumbbell, Heart, Package, Scissors } from "lucide-react";

const APPLICATIONS = [
  {
    title: "Thời trang & May mặc",
    description: "Dây dù cho áo khoác, quần áo thể thao, phụ kiện thời trang",
    icon: Shirt,
    image: "/assets/samples/sample1.jpg",
    color: "bg-accent-600"
  },
  {
    title: "Balo & Túi xách",
    description: "Dây đai thun cho quai balo, túi xách, dây đeo chéo",
    icon: Backpack,
    image: "/assets/samples/sample2.jpg",
    color: "bg-accent-600"
  },
  {
    title: "Đồ thể thao",
    description: "Dây dù và dây thun cho thiết bị thể thao, yoga, gym",
    icon: Dumbbell,
    image: "/assets/samples/sample3.jpg",
    color: "bg-primary-700"
  },
  {
    title: "Y tế & Chăm sóc",
    description: "Dây thun y tế, khẩu trang, băng đai hỗ trợ",
    icon: Heart,
    image: "/assets/samples/sample4.jpg",
    color: "bg-primary-600"
  },
  {
    title: "Đóng gói & Vận chuyển",
    description: "Dây buộc, dây đai cố định hàng hóa",
    icon: Package,
    image: "/assets/samples/sample5.jpg",
    color: "bg-primary-600"
  },
  {
    title: "Thủ công mỹ nghệ",
    description: "Dây dù cho đồ handmade, trang trí, móc khóa",
    icon: Scissors,
    image: "/assets/samples/sample6.jpg",
    color: "bg-accent-600"
  }
];

export function ApplicationShowcase() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-accent-200">
            <Package className="h-4 w-4" />
            <span>Ứng dụng thực tế</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Sản phẩm của chúng tôi trong <span className="text-accent-600">thực tế</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Được tin dùng bởi hàng trăm doanh nghiệp trong nhiều lĩnh vực khác nhau
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APPLICATIONS.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 ${app.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-xl mb-2 group-hover:text-accent-600 transition-colors">
                    {app.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {app.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-accent-400 rounded-2xl transition-all duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Bạn có ứng dụng đặc biệt? Chúng tôi sẵn sàng tư vấn giải pháp phù hợp
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Liên hệ tư vấn</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
