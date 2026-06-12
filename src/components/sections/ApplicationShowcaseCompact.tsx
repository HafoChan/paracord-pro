import Image from "next/image";
import Link from "next/link";
import { Shirt, Backpack, Dumbbell } from "lucide-react";

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
  }
];

export function ApplicationShowcaseCompact() {
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
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span>Ứng dụng thực tế</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Sản phẩm của chúng tôi trong <span className="text-accent-600">thực tế</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Được tin dùng bởi hàng trăm doanh nghiệp trong nhiều lĩnh vực khác nhau
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 transition-colors text-lg"
          >
            <span>Xem thêm ứng dụng khác</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
