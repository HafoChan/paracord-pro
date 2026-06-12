'use client';

import { useEffect, useState } from 'react';
import { useAdminAuth } from '@/lib/admin-auth-context';
import Link from 'next/link';
import { Package, FolderTree, TrendingUp, Plus, ArrowUpRight } from 'lucide-react';

interface Stats {
  totalProducts: number;
  totalCategories: number;
  featuredProducts: number;
}

export default function AdminDashboard() {
  const { token } = useAdminAuth();
  const [stats, setStats] = useState<Stats>({ totalProducts: 0, totalCategories: 0, featuredProducts: 0 });
  const [loading, setLoading] = useState(true);
  const [recentProducts, setRecentProducts] = useState<Array<{ id: string; name: string; category: string; created_at: string }>>([]);

  useEffect(() => {
    async function fetchStats() {
      if (!token) return;

      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch('/api/admin/products?limit=5', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch('/api/admin/categories', {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();

        setStats({
          totalProducts: productsData.total || 0,
          totalCategories: categoriesData.categories?.length || 0,
          featuredProducts: 0,
        });
        setRecentProducts(productsData.products?.slice(0, 5) || []);
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [token]);

  const statCards = [
    {
      label: 'Tổng sản phẩm',
      value: stats.totalProducts,
      icon: Package,
      gradient: 'from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50',
    },
    {
      label: 'Danh mục',
      value: stats.totalCategories,
      icon: FolderTree,
      gradient: 'from-emerald-500 to-emerald-600',
      bgLight: 'bg-emerald-50',
    },
    {
      label: 'Sản phẩm nổi bật',
      value: stats.featuredProducts,
      icon: TrendingUp,
      gradient: 'from-amber-500 to-orange-500',
      bgLight: 'bg-amber-50',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Tổng quan hệ thống quản trị</p>
      </div>

      {/* Stats */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200/60 p-6 animate-pulse shadow-sm">
              <div className="h-4 bg-slate-100 rounded-lg w-24 mb-4" />
              <div className="h-9 bg-slate-100 rounded-lg w-16" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-500">{card.label}</span>
                <div className={`p-2.5 rounded-xl ${card.bgLight}`}>
                  <card.icon className={`w-4.5 h-4.5 bg-gradient-to-br ${card.gradient} bg-clip-text`} style={{ color: card.gradient.includes('blue') ? '#3b82f6' : card.gradient.includes('emerald') ? '#10b981' : '#f59e0b' }} />
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-900">{card.value}</div>
            </div>
          ))}
        </div>
      )}

      {/* Quick Actions + Recent */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Thao tác nhanh</h2>
          <div className="space-y-3">
            <Link
              href="/admin/products/new"
              className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Plus className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm text-slate-900">Thêm sản phẩm mới</div>
                <div className="text-xs text-slate-500">Tạo sản phẩm với hình ảnh và thông số</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
            </Link>
            <Link
              href="/admin/categories"
              className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <FolderTree className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm text-slate-900">Quản lý danh mục</div>
                <div className="text-xs text-slate-500">Thêm, sửa, xóa danh mục sản phẩm</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Recent Products */}
        <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-slate-900">Sản phẩm gần đây</h2>
            <Link href="/admin/products" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
              Xem tất cả
            </Link>
          </div>
          {recentProducts.length === 0 ? (
            <div className="text-sm text-slate-400 text-center py-8">Chưa có sản phẩm</div>
          ) : (
            <div className="space-y-2.5">
              {recentProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/admin/products/${product.id}/edit`}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                    <Package className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-slate-700 truncate">{product.name}</div>
                    <div className="text-xs text-slate-400">{product.category}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
