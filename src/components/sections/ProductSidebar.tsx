"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SidebarCategory {
  id: string;
  name: string;
  count?: number;
}

const SIDEBAR_CATEGORIES: SidebarCategory[] = [
  { id: "day-du", name: "Dây dù", count: 23 },
  { id: "day-du-thun", name: "Dây dù thun", count: 8 },
  { id: "day-tip", name: "Dây típ", count: 4 },
  { id: "day-thun", name: "Dây thun", count: 16 },
  { id: "day-dai", name: "Dây đai", count: 12 },
  { id: "day-chu", name: "Dây chữ (Jacquard)", count: 2 },
  { id: "service", name: "Dịch vụ gia công", count: 0 },
];

interface ProductSidebarProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export function ProductSidebar({ activeCategory, onCategoryChange }: ProductSidebarProps) {
  return (
    <aside className="w-full">
      {/* Sidebar Header - system color */}
      <div className="bg-primary-900 text-white px-4 py-3 rounded-t-md">
        <div className="text-sm font-bold uppercase tracking-wide leading-snug">
          Danh mục sản phẩm
        </div>
      </div>

      {/* Category List */}
      <div className="border border-t-0 border-slate-200 rounded-b-md overflow-hidden">
        {SIDEBAR_CATEGORIES.map((cat, index) => {
          const isActive = activeCategory === cat.id;
          const isLast = index === SIDEBAR_CATEGORIES.length - 1;

          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`
                w-full flex items-center justify-between px-4 py-3 text-left text-sm transition-all duration-200
                ${!isLast ? "border-b border-slate-200" : ""}
                ${isActive
                  ? "bg-accent-50 text-accent-700 font-semibold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-accent-600"
                }
              `}
            >
              <span className="flex items-center gap-2">
                <ChevronRight
                  className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                    isActive ? "text-accent-600 translate-x-0.5" : "text-slate-400"
                  }`}
                />
                {cat.name}
              </span>
              {cat.count !== undefined && (
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    isActive
                      ? "bg-accent-600 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {cat.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Contact Box */}
      <div className="mt-6 bg-gradient-to-br from-primary-700 to-primary-900 text-white rounded-md p-5 text-center">
        <p className="text-xs uppercase tracking-wider font-semibold mb-1 text-primary-200">
          Cần tư vấn?
        </p>
        <p className="text-lg font-bold mb-3">0901 234 567</p>
        <Link
          href="/contact"
          className="block w-full bg-accent-500 hover:bg-accent-400 text-white text-sm font-semibold py-2 px-4 rounded transition-colors duration-200"
        >
          Liên hệ ngay
        </Link>
      </div>
    </aside>
  );
}
