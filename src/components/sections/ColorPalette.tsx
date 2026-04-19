"use client";

import { useState } from "react";
import { 
  SwatchIcon, 
  MagnifyingGlassIcon, 
  ClipboardDocumentIcon, 
  CheckIcon, 
  SparklesIcon as SparklesIconOutline
} from "@heroicons/react/24/outline";
import { 
  FireIcon,
  BeakerIcon,
  SparklesIcon as SparklesIconSolid
} from "@heroicons/react/24/solid";
import Link from "next/link";

const COLOR_CATEGORIES = {
  basic: {
    name: "Màu cơ bản",
    icon: <div className="w-6 h-6 bg-slate-400 rounded-full" />,
    colors: [
      { id: "black", name: "Đen", hex: "#000000" },
      { id: "white", name: "Trắng", hex: "#FFFFFF" },
      { id: "gray", name: "Xám", hex: "#6B7280" },
      { id: "silver", name: "Bạc", hex: "#C0C0C0" },
      { id: "beige", name: "Be", hex: "#F5F5DC" }
    ]
  },
  warm: {
    name: "Màu ấm",
    icon: <FireIcon className="h-5 w-5 text-orange-500" />,
    colors: [
      { id: "red", name: "Đỏ", hex: "#EF4444" },
      { id: "orange", name: "Cam", hex: "#F97316" },
      { id: "yellow", name: "Vàng", hex: "#F59E0B" },
      { id: "pink", name: "Hồng", hex: "#EC4899" },
      { id: "coral", name: "San hô", hex: "#FF7F50" },
      { id: "peach", name: "Đào", hex: "#FFDAB9" }
    ]
  },
  cool: {
    name: "Màu lạnh",
    icon: <SparklesIconSolid className="h-5 w-5 text-blue-500" />,
    colors: [
      { id: "blue", name: "Xanh dương", hex: "#3B82F6" },
      { id: "navy", name: "Xanh navy", hex: "#1E3A8A" },
      { id: "cyan", name: "Xanh cyan", hex: "#06B6D4" },
      { id: "teal", name: "Xanh teal", hex: "#14B8A6" },
      { id: "sky", name: "Xanh sky", hex: "#0EA5E9" },
      { id: "indigo", name: "Chàm", hex: "#6366F1" }
    ]
  },
  nature: {
    name: "Màu tự nhiên",
    icon: <BeakerIcon className="h-5 w-5 text-green-600" />,
    colors: [
      { id: "green", name: "Xanh lá", hex: "#10B981" },
      { id: "lime", name: "Xanh lime", hex: "#84CC16" },
      { id: "olive", name: "Ô liu", hex: "#808000" },
      { id: "brown", name: "Nâu", hex: "#92400E" },
      { id: "tan", name: "Nâu nhạt", hex: "#D2B48C" },
      { id: "khaki", name: "Kaki", hex: "#C3B091" }
    ]
  },
  vibrant: {
    name: "Màu rực rỡ",
    icon: <SparklesIconOutline className="h-5 w-5 text-purple-500" />,
    colors: [
      { id: "purple", name: "Tím", hex: "#8B5CF6" },
      { id: "violet", name: "Tím violet", hex: "#7C3AED" },
      { id: "magenta", name: "Đỏ tươi", hex: "#D946EF" },
      { id: "fuchsia", name: "Hồng tươi", hex: "#E879F9" },
      { id: "rose", name: "Hồng rose", hex: "#FB7185" },
      { id: "crimson", name: "Đỏ thẫm", hex: "#DC143C" }
    ]
  }
};

export function ColorPalette() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<{ id: string; name: string; hex: string } | null>(null);
  const [copiedHex, setCopiedHex] = useState(false);

  const allColors = Object.values(COLOR_CATEGORIES).flatMap(cat => cat.colors);
  
  const displayColors = searchTerm
    ? allColors.filter(color => 
        color.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : selectedCategory === "all"
    ? null
    : COLOR_CATEGORIES[selectedCategory as keyof typeof COLOR_CATEGORIES]?.colors || null;

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(true);
    setTimeout(() => setCopiedHex(false), 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-accent-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white text-accent-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-lg border-2 border-accent-200">
            <SwatchIcon className="h-5 w-5" />
            <span>Bảng màu chuyên nghiệp</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hơn <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent-600 to-primary-600">200+ màu sắc</span> đa dạng
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Khám phá bảng màu phong phú với hệ thống phân loại khoa học. Hỗ trợ màu Pantone và tùy chỉnh theo yêu cầu.
          </p>

          {/* Search & Filter */}
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm kiếm màu (VD: đỏ, xanh, tím...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-accent-500 focus:ring-4 focus:ring-accent-100 focus:outline-none transition-all shadow-sm"
              />
            </div>

            {/* Category Filter */}
            {!searchTerm && (
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                    selectedCategory === "all"
                      ? "bg-gradient-to-r from-accent-600 to-primary-600 text-white shadow-lg scale-105"
                      : "bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-200"
                  }`}
                >
                  Tất cả
                </button>
                {Object.entries(COLOR_CATEGORIES).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-6 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 ${
                      selectedCategory === key
                        ? "bg-gradient-to-r from-accent-600 to-primary-600 text-white shadow-lg scale-105"
                        : "bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-200"
                    }`}
                  >
                    <span className={selectedCategory === key ? "" : "opacity-70"}>{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Color Display */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Color Grid - Takes 2 columns */}
          <div className="lg:col-span-2">
            {displayColors ? (
              <div>
                <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                  <SparklesIconOutline className="h-5 w-5 text-accent-600" />
                  {searchTerm ? `Kết quả tìm kiếm (${displayColors.length} màu)` : COLOR_CATEGORIES[selectedCategory as keyof typeof COLOR_CATEGORIES]?.name}
                </h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                  {displayColors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className="group relative"
                      title={`${color.name} - ${color.hex}`}
                    >
                      <div
                        className={`w-full aspect-square rounded-xl transition-all duration-300 ${
                          selectedColor?.id === color.id
                            ? "ring-4 ring-accent-500 scale-110 shadow-2xl"
                            : "ring-2 ring-slate-200 hover:ring-accent-300 hover:scale-105 shadow-md hover:shadow-xl"
                        }`}
                        style={{ backgroundColor: color.hex }}
                      >
                        {color.hex === "#FFFFFF" && (
                          <div className="absolute inset-0 border-2 border-slate-200 rounded-xl"></div>
                        )}
                      </div>
                      <div className="text-xs text-slate-700 mt-2 text-center font-medium truncate px-1">
                        {color.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-10">
                {Object.entries(COLOR_CATEGORIES).map(([key, category]) => (
                  <div key={key} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-100 to-primary-100 rounded-lg flex items-center justify-center">
                    {category.icon}
                  </div>
                  <span>{category.name}</span>
                  <span className="text-sm font-normal text-slate-500">({category.colors.length} màu)</span>
                </h3>
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                      {category.colors.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => setSelectedColor(color)}
                          className="group relative"
                          title={`${color.name} - ${color.hex}`}
                        >
                          <div
                            className={`w-full aspect-square rounded-xl transition-all duration-300 ${
                              selectedColor?.id === color.id
                                ? "ring-4 ring-accent-500 scale-110 shadow-2xl"
                                : "ring-2 ring-slate-200 hover:ring-accent-300 hover:scale-105 shadow-md hover:shadow-xl"
                            }`}
                            style={{ backgroundColor: color.hex }}
                          >
                            {color.hex === "#FFFFFF" && (
                              <div className="absolute inset-0 border-2 border-slate-200 rounded-xl"></div>
                            )}
                          </div>
                          <div className="text-xs text-slate-700 mt-2 text-center font-medium truncate px-1">
                            {color.name}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Color Preview Panel - Takes 1 column */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 overflow-hidden">
                {selectedColor ? (
                  <>
                    <div
                      className="h-48 relative"
                      style={{ backgroundColor: selectedColor.hex }}
                    >
                      {selectedColor.hex === "#FFFFFF" && (
                        <div className="absolute inset-0 border-b-2 border-slate-200"></div>
                      )}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-700">
                          {selectedColor.hex}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-1">{selectedColor.name}</h4>
                        <p className="text-sm text-slate-500">Mã màu HEX</p>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-3 border border-slate-200">
                        <code className="flex-1 font-mono font-semibold text-slate-900">{selectedColor.hex}</code>
                        <button
                          onClick={() => copyToClipboard(selectedColor.hex)}
                          className="p-2 hover:bg-slate-200 rounded-lg transition-colors"
                          title="Copy mã màu"
                        >
                          {copiedHex ? (
                            <CheckIcon className="h-5 w-5 text-green-600" />
                          ) : (
                            <ClipboardDocumentIcon className="h-5 w-5 text-slate-600" />
                          )}
                        </button>
                      </div>

                      <div className="pt-4 border-t border-slate-200">
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Màu này có sẵn cho tất cả các sản phẩm dây dù và dây đai thun. Liên hệ để được tư vấn chi tiết.
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <SwatchIcon className="h-10 w-10 text-accent-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Chọn một màu</h4>
                    <p className="text-sm text-slate-500">
                      Click vào bất kỳ màu nào để xem chi tiết và copy mã màu
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-accent-600 to-primary-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Cần màu đặc biệt?</h3>
            <p className="text-lg text-white/90 mb-6">
              Chúng tôi hỗ trợ sản xuất theo mã màu Pantone, RAL hoặc mẫu màu tùy chỉnh của bạn. 
              Đội ngũ chuyên gia sẵn sàng tư vấn miễn phí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-accent-700 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span>Tư vấn màu sắc miễn phí</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-white/20"
              >
                <span>Xem sản phẩm</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
