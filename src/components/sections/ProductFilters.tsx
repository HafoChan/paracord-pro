"use client";

import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const categories = [
  { id: "all", name: "Tất cả sản phẩm", count: 48 },
  { id: "paracord", name: "Dây dù bản tròn", count: 20 },
  { id: "eband", name: "Dây đai thun", count: 15 },
  { id: "service", name: "Dịch vụ gia công", count: 13 }
];

const colors = [
  { id: "black", name: "Đen", hex: "#000000" },
  { id: "white", name: "Trắng", hex: "#FFFFFF" },
  { id: "red", name: "Đỏ", hex: "#DC2626" },
  { id: "blue", name: "Xanh dương", hex: "#2563EB" },
  { id: "green", name: "Xanh lá", hex: "#16A34A" },
  { id: "yellow", name: "Vàng", hex: "#EAB308" },
  { id: "pink", name: "Hồng", hex: "#EC4899" },
  { id: "orange", name: "Cam", hex: "#EA580C" }
];

const specifications = [
  { id: "diameter", name: "Đường kính", options: ["2mm", "3mm", "4mm", "5mm", "6mm"] },
  { id: "width", name: "Độ rộng", options: ["10mm", "15mm", "20mm", "25mm", "30mm"] },
  { id: "length", name: "Chiều dài", options: ["10m", "50m", "100m", "200m", "500m"] }
];

export function ProductFilters() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSpecs, setSelectedSpecs] = useState<Record<string, string[]>>({});

  const handleColorToggle = (colorId: string) => {
    setSelectedColors(prev => 
      prev.includes(colorId) 
        ? prev.filter(id => id !== colorId)
        : [...prev, colorId]
    );
  };

  const handleSpecToggle = (specId: string, option: string) => {
    setSelectedSpecs(prev => ({
      ...prev,
      [specId]: prev[specId]?.includes(option)
        ? prev[specId].filter(opt => opt !== option)
        : [...(prev[specId] || []), option]
    }));
  };

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedColors([]);
    setSelectedSpecs({});
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedColors.length > 0 || Object.values(selectedSpecs).some(specs => specs.length > 0);

  return (
    <div className="space-y-6">
      {/* Filter header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-slate-600" />
          <h3 className="font-semibold text-slate-900">Bộ lọc</h3>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-slate-500 hover:text-slate-700"
          >
            <X className="h-4 w-4 mr-1" />
            Xóa tất cả
          </Button>
        )}
      </div>

      {/* Category filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Danh mục</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full text-left p-2 rounded-md transition-colors ${
                  selectedCategory === category.id
                    ? "bg-slate-100 text-slate-900 font-medium"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm">{category.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Color filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Màu sắc</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-4 gap-2">
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => handleColorToggle(color.id)}
                className={`relative w-8 h-8 rounded-full border-2 transition-all ${
                  selectedColors.includes(color.id)
                    ? "border-slate-900 scale-110"
                    : "border-slate-200 hover:border-slate-300"
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              >
                {color.hex === "#FFFFFF" && (
                  <div className="absolute inset-0.5 border border-slate-200 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
          {selectedColors.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {selectedColors.map(colorId => {
                const color = colors.find(c => c.id === colorId);
                return color ? (
                  <Badge key={colorId} variant="secondary" className="text-xs">
                    {color.name}
                  </Badge>
                ) : null;
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Specifications filter */}
      {specifications.map((spec) => (
        <Card key={spec.id}>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">{spec.name}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              {spec.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSpecToggle(spec.id, option)}
                  className={`w-full text-left p-2 rounded-md text-sm transition-colors ${
                    selectedSpecs[spec.id]?.includes(option)
                      ? "bg-slate-100 text-slate-900 font-medium"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

