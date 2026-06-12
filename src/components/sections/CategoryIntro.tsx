import Image from "next/image";
import { CheckCircle, Sparkles } from "lucide-react";

interface CategoryIntroProps {
  category: {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    features: string[];
    applications: string[];
    image: string;
  };
}

export function CategoryIntro({ category }: CategoryIntroProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-accent-100/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 px-4 py-2 rounded-full text-sm font-medium border border-accent-200">
              <Sparkles className="h-4 w-4" />
              <span>Sản phẩm chất lượng cao</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
              {category.name}
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed">
              {category.longDescription}
            </p>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-bold text-primary-900 text-lg">Đặc điểm nổi bật:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="bg-accent-50 rounded-xl p-6 border border-accent-100">
              <h3 className="font-bold text-primary-900 mb-3">Ứng dụng:</h3>
              <div className="flex flex-wrap gap-2">
                {category.applications.map((app, index) => (
                  <span
                    key={index}
                    className="bg-white text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
