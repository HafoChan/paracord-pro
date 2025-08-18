export function ProductsHero() {
  return (
    <section className="bg-gradient-to-r from-slate-50 to-white py-8">
      <div className="container mx-auto px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Sản phẩm của chúng tôi
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>200+ mẫu màu sắc</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Gia công theo yêu cầu</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Chất lượng đảm bảo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

