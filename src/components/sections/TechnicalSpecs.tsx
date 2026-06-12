import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { 
  SparklesIcon as SparklesIconSolid,
  FireIcon,
  BeakerIcon,
  ChartBarIcon
} from "@heroicons/react/24/solid";

const MATERIAL_COMPARISON = [
  {
    property: "Độ bền",
    polyester: { value: "Cao", rating: 5 },
    nylon: { value: "Rất cao", rating: 5 },
    acrylic: { value: "Trung bình", rating: 4 },
    cotton: { value: "Trung bình", rating: 3 }
  },
  {
    property: "Chống nước",
    polyester: { value: "Tốt", rating: 4 },
    nylon: { value: "Rất tốt", rating: 5 },
    acrylic: { value: "Trung bình", rating: 3 },
    cotton: { value: "Kém", rating: 2 }
  },
  {
    property: "Chống UV",
    polyester: { value: "Tốt", rating: 4 },
    nylon: { value: "Trung bình", rating: 3 },
    acrylic: { value: "Rất tốt", rating: 5 },
    cotton: { value: "Kém", rating: 2 }
  },
  {
    property: "Co giãn",
    polyester: { value: "Thấp", rating: 2 },
    nylon: { value: "Cao", rating: 5 },
    acrylic: { value: "Thấp", rating: 2 },
    cotton: { value: "Thấp", rating: 2 }
  },
  {
    property: "Giá thành",
    polyester: { value: "Trung bình", rating: 4 },
    nylon: { value: "Cao", rating: 3 },
    acrylic: { value: "Cao", rating: 3 },
    cotton: { value: "Thấp", rating: 5 }
  },
  {
    property: "Thân thiện môi trường",
    polyester: { value: "Trung bình", rating: 3 },
    nylon: { value: "Trung bình", rating: 3 },
    acrylic: { value: "Trung bình", rating: 3 },
    cotton: { value: "Cao", rating: 5 }
  }
];

const PRODUCT_COMPARISON = [
  {
    feature: "Độ co giãn",
    paracord: false,
    eband: true,
    description: "Dây đai thun có độ co giãn 150-250%"
  },
  {
    feature: "Chịu lực cao",
    paracord: true,
    eband: false,
    description: "Dây dù chịu lực tốt hơn"
  },
  {
    feature: "Đa dạng màu sắc",
    paracord: true,
    eband: true,
    description: "Cả hai đều có 200+ màu"
  },
  {
    feature: "Chống nước",
    paracord: true,
    eband: true,
    description: "Cả hai đều chống nước tốt"
  },
  {
    feature: "Phù hợp may mặc",
    paracord: true,
    eband: true,
    description: "Cả hai đều phù hợp"
  },
  {
    feature: "Phù hợp balo/túi",
    paracord: true,
    eband: true,
    description: "Cả hai đều phù hợp"
  }
];

export function TechnicalSpecs() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Bảng so sánh <span className="text-gradient">thông số kỹ thuật</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            So sánh chi tiết các loại vật liệu và sản phẩm để chọn lựa phù hợp nhất
          </p>
        </div>

        {/* Material Comparison - Card Style */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-100 to-primary-100 rounded-lg flex items-center justify-center">
              <BeakerIcon className="h-6 w-6 text-accent-600" />
            </div>
            So sánh vật liệu
          </h3>
          <p className="text-slate-600 mb-8 text-lg">
            Chọn vật liệu phù hợp với nhu cầu sử dụng của bạn
          </p>

          {/* Material Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Polyester Card */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 hover:border-accent-400 transition-all hover:shadow-xl overflow-hidden group">
              <div className="bg-gradient-to-br from-accent-600 to-accent-700 p-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Polyester</h4>
                <p className="text-accent-100 text-sm">Cân bằng tốt nhất</p>
              </div>
              <div className="p-6 space-y-4">
                {MATERIAL_COMPARISON.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">{item.property}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900">{item.polyester.value}</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < item.polyester.rating ? "bg-accent-600" : "bg-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6">
                <div className="bg-accent-50 rounded-lg p-3 border border-accent-200">
                  <p className="text-xs text-accent-900 font-medium">✓ Phù hợp đa dụng</p>
                </div>
              </div>
            </div>

            {/* Nylon Card */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 hover:border-primary-400 transition-all hover:shadow-xl overflow-hidden group">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Nylon</h4>
                <p className="text-primary-100 text-sm">Độ bền cao nhất</p>
              </div>
              <div className="p-6 space-y-4">
                {MATERIAL_COMPARISON.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">{item.property}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900">{item.nylon.value}</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < item.nylon.rating ? "bg-primary-600" : "bg-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6">
                <div className="bg-primary-50 rounded-lg p-3 border border-primary-200">
                  <p className="text-xs text-primary-900 font-medium">✓ Chịu lực tốt nhất</p>
                </div>
              </div>
            </div>

            {/* Acrylic Card */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 hover:border-purple-400 transition-all hover:shadow-xl overflow-hidden group">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Acrylic</h4>
                <p className="text-purple-100 text-sm">Chống UV tốt</p>
              </div>
              <div className="p-6 space-y-4">
                {MATERIAL_COMPARISON.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">{item.property}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900">{item.acrylic.value}</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < item.acrylic.rating ? "bg-purple-600" : "bg-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6">
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                  <p className="text-xs text-purple-900 font-medium">✓ Dùng ngoài trời</p>
                </div>
              </div>
            </div>

            {/* Cotton Card */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 hover:border-green-400 transition-all hover:shadow-xl overflow-hidden group">
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Cotton</h4>
                <p className="text-green-100 text-sm">Thân thiện môi trường</p>
              </div>
              <div className="p-6 space-y-4">
                {MATERIAL_COMPARISON.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">{item.property}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900">{item.cotton.value}</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < item.cotton.rating ? "bg-green-600" : "bg-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6">
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <p className="text-xs text-green-900 font-medium">✓ Tự nhiên 100%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ChartBarIcon className="h-5 w-5 text-accent-600" />
              Hướng dẫn đọc bảng
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-accent-600" />
                  ))}
                </div>
                <div>
                  <span className="font-semibold text-slate-900">5 điểm:</span>
                  <span className="text-slate-600"> Xuất sắc</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex gap-0.5 mt-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-accent-600" />
                  ))}
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900">4 điểm:</span>
                  <span className="text-slate-600"> Tốt</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex gap-0.5 mt-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-accent-600" />
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-slate-300" />
                  ))}
                </div>
                <div>
                  <span className="font-semibold text-slate-900">3 điểm:</span>
                  <span className="text-slate-600"> Trung bình</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex gap-0.5 mt-1">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-accent-600" />
                  ))}
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-slate-300" />
                  ))}
                </div>
                <div>
                  <span className="font-semibold text-slate-900">2 điểm:</span>
                  <span className="text-slate-600"> Khá</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex gap-0.5 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent-600" />
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-slate-300" />
                  ))}
                </div>
                <div>
                  <span className="font-semibold text-slate-900">1 điểm:</span>
                  <span className="text-slate-600"> Yếu</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Comparison */}
        <div>
          <h3 className="text-2xl font-bold text-primary-900 mb-6">So sánh Dây dù vs Dây đai thun</h3>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-accent-700 to-primary-700 text-white">
                    <th className="px-6 py-4 text-left font-bold">Tính năng</th>
                    <th className="px-6 py-4 text-center font-bold">Dây dù (Paracord)</th>
                    <th className="px-6 py-4 text-center font-bold">Dây đai thun (Eband)</th>
                    <th className="px-6 py-4 text-left font-bold">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCT_COMPARISON.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-slate-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.paracord ? (
                          <CheckCircleIcon className="h-6 w-6 text-accent-600 mx-auto" />
                        ) : (
                          <XCircleIcon className="h-6 w-6 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.eband ? (
                          <CheckCircleIcon className="h-6 w-6 text-accent-600 mx-auto" />
                        ) : (
                          <XCircleIcon className="h-6 w-6 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-slate-600 text-sm">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center text-slate-500 text-sm">
          * Đánh giá dựa trên điều kiện sử dụng tiêu chuẩn. Kết quả thực tế có thể khác nhau tùy ứng dụng.
        </div>
      </div>
    </section>
  );
}
