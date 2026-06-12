"use client";

import { Package, Zap, Wrench, CircleDot, Tag, Layers, Type } from "lucide-react";

interface CategoryTab {
  id: string;
  name: string;
  icon: "package" | "zap" | "wrench" | "circle-dot" | "tag" | "layers" | "type";
  description: string;
  count: number;
}

const CATEGORY_TABS: CategoryTab[] = [
  {
    id: "day-du",
    name: "Dây dù",
    icon: "package",
    description: "Dây dù đa năng, bền chắc",
    count: 23
  },
  {
    id: "day-du-thun",
    name: "Dây dù thun",
    icon: "circle-dot",
    description: "Dây dù co giãn",
    count: 8
  },
  {
    id: "day-tip",
    name: "Dây típ",
    icon: "tag",
    description: "Dây bấm đầu típ sẵn",
    count: 4
  },
  {
    id: "day-thun",
    name: "Dây thun",
    icon: "zap",
    description: "Dây thun co giãn cao",
    count: 16
  },
  {
    id: "day-dai",
    name: "Dây đai",
    icon: "layers",
    description: "Dây đai bền chắc",
    count: 12
  },
  {
    id: "day-chu",
    name: "Dây chữ",
    icon: "type",
    description: "Dây dệt chữ/logo",
    count: 2
  },
  {
    id: "service",
    name: "Dịch vụ gia công",
    icon: "wrench",
    description: "Gia công chuyên nghiệp",
    count: 0
  }
];

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "package": return Package;
      case "zap": return Zap;
      case "wrench": return Wrench;
      case "circle-dot": return CircleDot;
      case "tag": return Tag;
      case "layers": return Layers;
      case "type": return Type;
      default: return Package;
    }
  };

  return (
    <div className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex overflow-x-auto scrollbar-hide gap-2">
          {CATEGORY_TABS.map((tab) => {
            const IconComponent = getIcon(tab.icon);
            const isActive = activeCategory === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onCategoryChange(tab.id)}
                className={`
                  group flex items-center gap-3 px-5 py-3 border-b-2 transition-all duration-300 whitespace-nowrap cursor-pointer
                  ${isActive 
                    ? "border-accent-600 text-accent-700 bg-accent-50" 
                    : "border-transparent text-slate-600 hover:text-accent-700 hover:bg-accent-50/50 hover:border-accent-300"
                  }
                `}
              >
                {/* Icon */}
                <div className={`
                  w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300
                  ${isActive 
                    ? "bg-accent-600 text-white shadow-md" 
                    : "bg-slate-100 text-slate-600 group-hover:bg-accent-100 group-hover:text-accent-600"
                  }
                `}>
                  <IconComponent className="h-5 w-5" />
                </div>
                
                {/* Content */}
                <div className="text-left">
                  <div className={`font-bold text-sm flex items-center gap-2 ${
                    isActive ? "text-accent-700" : "text-primary-900 group-hover:text-accent-700"
                  }`}>
                    {tab.name}
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      isActive 
                        ? "bg-accent-600 text-white" 
                        : "bg-slate-200 text-slate-600 group-hover:bg-accent-200 group-hover:text-accent-700"
                    }`}>
                      {tab.count}
                    </span>
                  </div>
                  <div className={`text-xs ${
                    isActive ? "text-accent-600" : "text-slate-500 group-hover:text-slate-600"
                  }`}>
                    {tab.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
