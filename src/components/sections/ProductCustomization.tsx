"use client";

import { useState } from "react";
import { 
  SwatchIcon,
  SparklesIcon,
  PaperAirplaneIcon,
  CheckCircleIcon as CheckCircleIconSolid,
  InformationCircleIcon,
  CheckIcon,
  XMarkIcon,
  ChevronDownIcon
} from "@heroicons/react/24/solid";
import {
  BeakerIcon,
  BoltIcon,
  SunIcon,
  FireIcon,
  ShieldCheckIcon,
  CubeIcon,
  RectangleStackIcon
} from "@heroicons/react/24/outline";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface Material {
  id: string;
  name: string;
  icon: IconComponent;
  durability: number;
  waterproof: boolean;
  uvResistant: boolean;
  stretch: boolean;
  ecoFriendly: boolean;
  recommended?: boolean;
}

interface Shape {
  id: string;
  name: string;
  icon: IconComponent;
  description: string;
}

const MATERIALS: Material[] = [
  { 
    id: "polyester", 
    name: "Polyester", 
    icon: CubeIcon,
    durability: 95,
    waterproof: true,
    uvResistant: true,
    stretch: false,
    ecoFriendly: false,
    recommended: true
  },
  { 
    id: "nylon", 
    name: "Nylon", 
    icon: BoltIcon,
    durability: 90,
    waterproof: true,
    uvResistant: false,
    stretch: true,
    ecoFriendly: false
  },
  { 
    id: "acrylic", 
    name: "Acrylic", 
    icon: SunIcon,
    durability: 85,
    waterproof: false,
    uvResistant: true,
    stretch: false,
    ecoFriendly: false
  },
  { 
    id: "cotton", 
    name: "Cotton", 
    icon: BeakerIcon,
    durability: 70,
    waterproof: false,
    uvResistant: false,
    stretch: false,
    ecoFriendly: true
  }
];

const SHAPES: Shape[] = [
  { id: "round", name: "Dây tròn", icon: CubeIcon, description: "Phù hợp dây rút, trang trí" },
  { id: "flat", name: "Dây dẹp", icon: RectangleStackIcon, description: "Phù hợp quai balo, túi xách" }
];

const SIZES = [
  { id: "2mm", name: "2mm", type: "round" },
  { id: "3mm", name: "3mm", type: "round" },
  { id: "4mm", name: "4mm", type: "round" },
  { id: "5mm", name: "5mm", type: "round" },
  { id: "10mm", name: "10mm", type: "flat" },
  { id: "15mm", name: "15mm", type: "flat" },
  { id: "20mm", name: "20mm", type: "flat" },
  { id: "25mm", name: "25mm", type: "flat" }
];

const FEATURES = [
  { id: "waterproof", name: "Chống nước", icon: BeakerIcon, description: "Không thấm nước" },
  { id: "uv", name: "Chống UV", icon: SunIcon, description: "Bảo vệ khỏi tia UV" },
  { id: "fireproof", name: "Chống cháy", icon: FireIcon, description: "Chậm cháy, an toàn" },
  { id: "mildew", name: "Chống nấm mốc", icon: ShieldCheckIcon, description: "Kháng khuẩn tốt" }
];



export function ProductCustomization() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [currentColor, setCurrentColor] = useState("#2B6A8E");

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const addCurrentColor = () => {
    if (!selectedColors.includes(currentColor)) {
      setSelectedColors(prev => [...prev, currentColor]);
    }
  };

  const removeColor = (color: string) => {
    setSelectedColors(prev => prev.filter(c => c !== color));
  };

  const availableSizes = SIZES.filter(size => 
    !selectedShape || size.type === selectedShape
  );

  const isFormComplete = selectedMaterial && selectedShape && selectedSize && selectedColors.length > 0;

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-accent-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Collapsible Header */}
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full bg-white rounded-2xl shadow-xl border-2 border-accent-200 p-6 md:p-8 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-left flex-1">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-600 to-accent-700 rounded-xl flex items-center justify-center shadow-lg">
                  <SparklesIcon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-accent-700 text-sm font-semibold mb-2">
                    <span>Công cụ tùy chỉnh sản phẩm</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-1">
                    Thiết kế sản phẩm theo yêu cầu
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base">
                    Tùy chỉnh vật liệu, kích thước, màu sắc và tính năng cho sản phẩm của bạn
                  </p>
                </div>
              </div>
              
              <div className="ml-4 flex items-center gap-3">
                {!isExpanded && (
                  <span className="hidden md:inline-block text-sm font-semibold text-accent-700 bg-accent-50 px-4 py-2 rounded-lg">
                    Nhấn để mở
                  </span>
                )}
                <div className={`w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                  <ChevronDownIcon className="h-6 w-6 text-accent-700" />
                </div>
              </div>
            </div>
          </button>

          {/* Collapsible Content */}
          <div 
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded ? 'max-h-[10000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}
          >
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Progress indicator */}
            <div className="p-6 md:p-8 pb-0">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-slate-700">Tiến độ</span>
              <span className="text-sm font-bold text-accent-700">
                {[selectedMaterial, selectedShape, selectedSize, selectedColors.length > 0].filter(Boolean).length}/4
              </span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-accent-600 to-accent-500 transition-all duration-500"
                style={{ width: `${([selectedMaterial, selectedShape, selectedSize, selectedColors.length > 0].filter(Boolean).length / 4) * 100}%` }}
              ></div>
            </div>
            </div>

            <div className="p-6 md:p-8 pt-4 space-y-8">
              
              {/* Step 1: Material Selection */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                  <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-900 text-lg">
                      Chọn vật liệu
                    </h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {MATERIALS.map((material) => {
                    const IconComponent = material.icon;
                    return (
                      <button
                        key={material.id}
                        onClick={() => setSelectedMaterial(material.id)}
                        className={`group relative p-5 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-xl cursor-pointer ${
                          selectedMaterial === material.id
                            ? "border-accent-500 bg-gradient-to-br from-accent-50 to-primary-50 shadow-xl"
                            : "border-slate-200 hover:border-accent-300 hover:bg-slate-50"
                        }`}
                      >
                        {material.recommended && (
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                            <SparklesIcon className="h-3 w-3" />
                            <span>Đề xuất</span>
                          </div>
                        )}
                        
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3 transition-all ${
                          selectedMaterial === material.id 
                            ? "bg-gradient-to-br from-accent-600 to-accent-700 shadow-lg" 
                            : "bg-slate-100 group-hover:bg-slate-200"
                        }`}>
                          <IconComponent className={`h-7 w-7 ${
                            selectedMaterial === material.id ? "text-white" : "text-slate-600"
                          }`} />
                        </div>
                        
                        <div className="font-bold text-primary-900 mb-1 text-base">{material.name}</div>
                        
                        {selectedMaterial === material.id && (
                          <CheckCircleIconSolid className="absolute top-3 right-3 h-6 w-6 text-accent-600" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Material Comparison Table */}
                {selectedMaterial && (
                  <div className="mt-4 bg-slate-50 rounded-xl p-4 border border-slate-200 animate-fade-in-up">
                    <h4 className="font-bold text-primary-900 mb-3 text-sm">So sánh tính năng vật liệu</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-300">
                            <th className="text-left py-2 px-2 font-semibold text-slate-700">Vật liệu</th>
                            <th className="text-center py-2 px-2 font-semibold text-slate-700">Độ bền</th>
                            <th className="text-center py-2 px-2 font-semibold text-slate-700">Chống nước</th>
                            <th className="text-center py-2 px-2 font-semibold text-slate-700">Chống UV</th>
                            <th className="text-center py-2 px-2 font-semibold text-slate-700">Co giãn</th>
                            <th className="text-center py-2 px-2 font-semibold text-slate-700">Thân thiện MT</th>
                          </tr>
                        </thead>
                        <tbody>
                          {MATERIALS.map((material) => {
                            const IconComponent = material.icon;
                            const isSelected = selectedMaterial === material.id;
                            return (
                              <tr 
                                key={material.id} 
                                className={`border-b border-slate-200 ${isSelected ? "bg-accent-50" : ""}`}
                              >
                                <td className="py-2 px-2">
                                  <div className="flex items-center gap-2">
                                    <div className={`w-6 h-6 rounded flex items-center justify-center ${
                                      isSelected ? "bg-accent-600" : "bg-slate-200"
                                    }`}>
                                      <IconComponent className={`h-4 w-4 ${
                                        isSelected ? "text-white" : "text-slate-600"
                                      }`} />
                                    </div>
                                    <span className={`font-semibold ${isSelected ? "text-accent-700" : "text-slate-700"}`}>
                                      {material.name}
                                    </span>
                                  </div>
                                </td>
                                <td className="py-2 px-2 text-center">
                                  <div className="flex items-center justify-center gap-1">
                                    <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                                      <div 
                                        className="h-full bg-accent-600 rounded-full"
                                        style={{ width: `${material.durability}%` }}
                                      ></div>
                                    </div>
                                    <span className="text-xs font-semibold text-slate-600">{material.durability}%</span>
                                  </div>
                                </td>
                                <td className="py-2 px-2 text-center">
                                  {material.waterproof ? (
                                    <CheckIcon className="h-5 w-5 text-green-600 mx-auto" />
                                  ) : (
                                    <XMarkIcon className="h-5 w-5 text-slate-400 mx-auto" />
                                  )}
                                </td>
                                <td className="py-2 px-2 text-center">
                                  {material.uvResistant ? (
                                    <CheckIcon className="h-5 w-5 text-green-600 mx-auto" />
                                  ) : (
                                    <XMarkIcon className="h-5 w-5 text-slate-400 mx-auto" />
                                  )}
                                </td>
                                <td className="py-2 px-2 text-center">
                                  {material.stretch ? (
                                    <CheckIcon className="h-5 w-5 text-green-600 mx-auto" />
                                  ) : (
                                    <XMarkIcon className="h-5 w-5 text-slate-400 mx-auto" />
                                  )}
                                </td>
                                <td className="py-2 px-2 text-center">
                                  {material.ecoFriendly ? (
                                    <CheckIcon className="h-5 w-5 text-green-600 mx-auto" />
                                  ) : (
                                    <XMarkIcon className="h-5 w-5 text-slate-400 mx-auto" />
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Step 2: Shape Selection */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                  <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-900 text-lg">
                      Chọn hình dạng
                    </h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {SHAPES.map((shape) => {
                    const IconComponent = shape.icon;
                    return (
                      <button
                        key={shape.id}
                        onClick={() => {
                          setSelectedShape(shape.id);
                          setSelectedSize("");
                        }}
                        className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                          selectedShape === shape.id
                            ? "border-accent-500 bg-gradient-to-br from-accent-50 to-primary-50 shadow-xl"
                            : "border-slate-200 hover:border-accent-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto transition-all ${
                          selectedShape === shape.id 
                            ? "bg-gradient-to-br from-accent-600 to-accent-700 shadow-xl" 
                            : "bg-slate-100 group-hover:bg-slate-200"
                        }`}>
                          <IconComponent className={`h-10 w-10 ${
                            selectedShape === shape.id ? "text-white" : "text-slate-600"
                          }`} />
                        </div>
                        
                        <div className="font-bold text-primary-900 mb-2 text-center text-lg">{shape.name}</div>
                        <div className="text-sm text-slate-600 text-center leading-relaxed">{shape.description}</div>
                        
                        {selectedShape === shape.id && (
                          <CheckCircleIconSolid className="absolute top-4 right-4 h-7 w-7 text-accent-600" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Size Selection */}
              {selectedShape && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                    <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-primary-900 text-lg">
                        Chọn kích thước
                      </h3>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                    {availableSizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSize(size.id)}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 font-bold hover:shadow-md cursor-pointer ${
                          selectedSize === size.id
                            ? "border-accent-500 bg-accent-600 text-white shadow-lg"
                            : "border-slate-200 hover:border-accent-300 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Features Selection */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-500 rounded-lg flex items-center justify-center text-white shadow-md">
                    <InformationCircleIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-900 text-lg">
                      Tính năng đặc biệt (Tùy chọn)
                    </h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {FEATURES.map((feature) => {
                    const IconComponent = feature.icon;
                    return (
                      <button
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`group relative p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                          selectedFeatures.includes(feature.id)
                            ? "border-accent-500 bg-gradient-to-br from-accent-50 to-primary-50 shadow-lg"
                            : "border-slate-200 hover:border-accent-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all ${
                          selectedFeatures.includes(feature.id) 
                            ? "bg-gradient-to-br from-accent-600 to-accent-700 shadow-lg" 
                            : "bg-slate-100 group-hover:bg-slate-200"
                        }`}>
                          <IconComponent className={`h-6 w-6 ${
                            selectedFeatures.includes(feature.id) ? "text-white" : "text-slate-600"
                          }`} />
                        </div>
                        
                        <div className="font-bold text-primary-900 text-sm mb-1">{feature.name}</div>
                        <div className="text-xs text-slate-600 leading-relaxed">{feature.description}</div>
                        
                        {selectedFeatures.includes(feature.id) && (
                          <CheckCircleIconSolid className="absolute top-3 right-3 h-5 w-5 text-accent-600" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>


              {/* Step 5: Color Selection */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                  <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-900 text-lg flex items-center gap-2">
                      <SwatchIcon className="h-5 w-5 text-accent-700" />
                      Chọn màu sắc
                    </h3>
                  </div>
                </div>

                {/* Selected Colors Display */}
                {selectedColors.length > 0 && (
                  <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl p-5 border-2 border-accent-200 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm font-bold text-accent-900">
                        <SwatchIcon className="h-5 w-5" />
                        <span>Đã chọn {selectedColors.length} màu</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedColors.map((color, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border-2 border-slate-200 shadow-md hover:shadow-lg transition-all"
                        >
                          <div
                            className="w-10 h-10 rounded-lg border-2 border-slate-300 shadow-sm"
                            style={{ backgroundColor: color }}
                          ></div>
                          <span className="text-sm font-bold text-slate-700 uppercase flex-1">{color}</span>
                          <button
                            onClick={() => removeColor(color)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all"
                          >
                            <XMarkIcon className="h-5 w-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Color Picker Input */}
                <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1 w-full">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Chọn màu từ bảng màu
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={currentColor}
                          onChange={(e) => setCurrentColor(e.target.value)}
                          className="w-20 h-20 rounded-lg border-2 border-slate-300 cursor-pointer hover:border-accent-500 transition-colors"
                        />
                        <div className="flex-1">
                          <div className="text-sm text-slate-600 mb-1">Mã màu hiện tại:</div>
                          <div className="text-lg font-bold text-primary-900 uppercase">{currentColor}</div>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={addCurrentColor}
                      disabled={selectedColors.includes(currentColor)}
                      className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shadow-lg ${
                        selectedColors.includes(currentColor)
                          ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-accent-600 to-accent-700 text-white hover:from-accent-700 hover:to-accent-800 hover:scale-105 cursor-pointer"
                      }`}
                    >
                      <CheckCircleIconSolid className="h-5 w-5" />
                      <span>Thêm màu</span>
                    </button>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-300">
                    <p className="text-sm text-slate-600 flex items-center gap-2">
                      <InformationCircleIcon className="h-5 w-5 text-accent-600" />
                      <span>Bạn có thể chọn nhiều màu khác nhau cho sản phẩm của mình</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary & CTA */}
            <div className="bg-gradient-to-r from-accent-600 to-accent-700 p-6 md:p-8 mt-8">
              <div className="max-w-4xl mx-auto">
                <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-2">
                  <CheckCircleIconSolid className="h-6 w-6" />
                  Thông tin đã chọn
                </h4>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="text-white/80 text-xs mb-1">Vật liệu</div>
                    <div className="text-white font-bold text-sm">
                      {selectedMaterial ? MATERIALS.find(m => m.id === selectedMaterial)?.name : "Chưa chọn"}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="text-white/80 text-xs mb-1">Hình dạng</div>
                    <div className="text-white font-bold text-sm">
                      {selectedShape ? SHAPES.find(s => s.id === selectedShape)?.name : "Chưa chọn"}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="text-white/80 text-xs mb-1">Kích thước</div>
                    <div className="text-white font-bold text-sm">
                      {selectedSize || "Chưa chọn"}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="text-white/80 text-xs mb-1">Màu sắc</div>
                    <div className="text-white font-bold text-sm">
                      {selectedColors.length > 0 ? `${selectedColors.length} màu` : "Chưa chọn"}
                    </div>
                  </div>
                </div>
                
                <button 
                  disabled={!isFormComplete}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isFormComplete
                      ? "bg-white text-accent-700 hover:bg-accent-50 hover:scale-105 shadow-2xl cursor-pointer"
                      : "bg-white/20 text-white/50 cursor-not-allowed"
                  }`}
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                  <span>{isFormComplete ? "Gửi yêu cầu báo giá" : "Vui lòng hoàn thành form"}</span>
                </button>
                
                {isFormComplete && (
                  <p className="text-white/90 text-sm text-center mt-4 flex items-center justify-center gap-2">
                    <SparklesIcon className="h-4 w-4" />
                    <span>Phản hồi trong 24 giờ</span>
                  </p>
                )}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
