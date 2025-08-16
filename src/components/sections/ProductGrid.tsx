"use client";

import { useState } from "react";
import { Search, Grid3x3, List, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "../ui/ProductCard";
import { SPECIFIC_PRODUCT_IMAGES } from "@/lib/images";

// Mock product data
const products = [
  {
    id: "1",
    name: "Dây dù bản tròn màu đen",
    category: "paracord",
    description: "Dây dù chất lượng cao, bền chắc, phù hợp cho quần áo và phụ kiện thời trang",
    specifications: {
      diameter: "4mm",
      length: "100m",
      material: "Polyester"
    },
    priceRange: "50,000 - 80,000 VNĐ/m",
    colors: ["black"],
    images: [SPECIFIC_PRODUCT_IMAGES.paracord_black.main],
    isFeatured: true
  },
  {
    id: "2", 
    name: "Dây đai thun đa năng",
    category: "eband",
    description: "Dây đai thun co giãn tốt, ideal cho quai balo và túi xách",
    specifications: {
      width: "20mm",
      length: "50m",
      elasticity: "150%"
    },
    priceRange: "80,000 - 120,000 VNĐ/m",
    colors: ["black", "white", "blue"],
    images: [SPECIFIC_PRODUCT_IMAGES.eband_multi.main],
    isFeatured: true
  },
  {
    id: "3",
    name: "Dây dù màu đỏ cam",
    category: "paracord", 
    description: "Dây dù màu sắc nổi bật, chất lượng cao cho các ứng dụng thể thao",
    specifications: {
      diameter: "5mm",
      length: "200m",
      material: "Nylon"
    },
    priceRange: "60,000 - 90,000 VNĐ/m",
    colors: ["red", "orange"],
    images: [SPECIFIC_PRODUCT_IMAGES.paracord_colorful.main],
    isFeatured: false
  },
  {
    id: "4",
    name: "Dịch vụ bấm đầu típ",
    category: "service",
    description: "Dịch vụ gia công bấm đầu típ chuyên nghiệp, nhanh chóng",
    specifications: {
      processing: "Bấm đầu típ",
      quantity: "Min 100 chiếc",
      delivery: "2-3 ngày"
    },
    priceRange: "5,000 - 15,000 VNĐ/chiếc",
    colors: [],
    images: [SPECIFIC_PRODUCT_IMAGES.service_tip.main],
    isFeatured: false
  },
  {
    id: "5",
    name: "Dây đai thun trắng",
    category: "eband",
    description: "Dây đai thun màu trắng tinh khiết, phù hợp cho y tế và thời trang",
    specifications: {
      width: "15mm",
      length: "100m", 
      elasticity: "200%"
    },
    priceRange: "70,000 - 100,000 VNĐ/m",
    colors: ["white"],
    images: [SPECIFIC_PRODUCT_IMAGES.eband_white.main],
    isFeatured: false
  },
  {
    id: "6",
    name: "Dây dù đa màu sắc",
    category: "paracord",
    description: "Bộ sưu tập dây dù với nhiều màu sắc đa dạng cho mọi nhu cầu",
    specifications: {
      diameter: "3mm",
      length: "50m",
      colors: "10+ màu"
    },
    priceRange: "45,000 - 75,000 VNĐ/m",
    colors: ["red", "blue", "green", "yellow", "pink"],
    images: [SPECIFIC_PRODUCT_IMAGES.paracord_rainbow.main],
    isFeatured: true
  }
];

const sortOptions = [
  { value: "name", label: "Tên sản phẩm" },
  { value: "price", label: "Giá" },
  { value: "category", label: "Danh mục" },
  { value: "featured", label: "Nổi bật" }
];

export function ProductGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleShare = (product: any) => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: `/products/${product.id}`
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${window.location.origin}/products/${product.id}`);
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "category":
        return a.category.localeCompare(b.category);
      case "featured":
        return b.isFeatured ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6">
      {/* Search and controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* View and sort controls */}
        <div className="flex items-center gap-2">
          {/* Enhanced View mode toggle */}
          <div className="flex border-2 border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`rounded-none transition-all duration-300 ${
                viewMode === "grid" 
                  ? "bg-blue-900 text-white shadow-md" 
                  : "hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={`rounded-none transition-all duration-300 ${
                viewMode === "list" 
                  ? "bg-blue-900 text-white shadow-md" 
                  : "hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          {/* Enhanced Sort dropdown */}
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSortOptions(!showSortOptions)}
              className="flex items-center gap-2 border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span className="hidden sm:inline font-medium">Sắp xếp:</span>
              <span className="font-medium">{sortOptions.find(opt => opt.value === sortBy)?.label}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                showSortOptions ? 'rotate-180' : ''
              }`} />
            </Button>

            {showSortOptions && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border-2 border-slate-200 rounded-xl shadow-xl z-10 overflow-hidden animate-fade-in-up">
                {sortOptions.map((option, index) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setShowSortOptions(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-between group ${
                      sortBy === option.value ? "bg-blue-900 text-white font-medium" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span>{option.label}</span>
                    {sortBy === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between text-sm text-slate-600">
        <span>Hiển thị {sortedProducts.length} sản phẩm</span>
        {searchTerm && (
          <span>Kết quả cho &quot;{searchTerm}&quot;</span>
        )}
      </div>

      {/* Enhanced Products grid/list */}
      <div className={
        viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          : "space-y-6"
      }>
        {sortedProducts.map((product, index) => (
          <div 
            key={product.id}
            className="animate-fade-in-up"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'both'
            }}
          >
            <ProductCard 
              product={product} 
              viewMode={viewMode}
              showFavorite={true}
              showShare={true}
              onFavorite={handleFavorite}
              onShare={handleShare}
            />
          </div>
        ))}
      </div>

      {/* No results */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 mb-4">Không tìm thấy sản phẩm nào phù hợp</p>
          <Button 
            variant="outline" 
            onClick={() => setSearchTerm("")}
          >
            Xóa bộ lọc
          </Button>
        </div>
      )}

      {/* Enhanced Load more button */}
      {sortedProducts.length > 0 && sortedProducts.length >= 6 && (
        <div className="text-center pt-12 animate-fade-in-up">
          <div className="max-w-md mx-auto">
            <Button 
              variant="outline" 
              size="lg"
              className="group relative border-2 border-slate-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl px-8 py-4 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 font-semibold">
                <Grid3x3 className="h-5 w-5 group-hover:animate-pulse" />
                Xem thêm sản phẩm
                <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            
            <p className="text-sm text-slate-500 mt-4">
              Hiển thị {sortedProducts.length} sản phẩm • Còn nhiều sản phẩm khác
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

