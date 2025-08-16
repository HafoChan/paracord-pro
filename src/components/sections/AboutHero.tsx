import { COMPANY_INFO } from "@/lib/constants";

export function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Về {COMPANY_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            {COMPANY_INFO.slogan}
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Chúng tôi tự hào là đơn vị tiên phong trong lĩnh vực sản xuất dây dù và dây đai thun tại Việt Nam. 
            Với hơn 10 năm kinh nghiệm, chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất, 
            phục vụ đa dạng các ngành công nghiệp từ thời trang, thể thao đến y tế.
          </p>
        </div>
      </div>
    </section>
  );
}

