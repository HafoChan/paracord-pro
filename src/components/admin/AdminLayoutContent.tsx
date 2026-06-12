'use client';

import { useAdminAuth } from '@/lib/admin-auth-context';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Package,
  FolderTree,
  LogOut,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';

const NAV_ITEMS = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/products', label: 'Sản phẩm', icon: Package },
  { href: '/admin/categories', label: 'Danh mục', icon: FolderTree },
];

export default function AdminLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading, logout } = useAdminAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !user && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [user, isLoading, router, pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm text-slate-500">Đang tải...</span>
        </div>
      </div>
    );
  }

  if (!user && pathname !== '/admin/login') {
    return null;
  }

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[260px] bg-white/95 backdrop-blur-xl border-r border-slate-200/80 shadow-xl shadow-slate-200/20 transform transition-transform duration-300 ease-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-[68px] px-5 border-b border-slate-100">
          <Link href="/admin" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-600/20">
              <span className="text-white font-bold text-sm">MT</span>
            </div>
            <div>
              <div className="font-semibold text-slate-900 text-sm leading-tight">Minh Tiến</div>
              <div className="text-[10px] text-slate-400 leading-tight">Admin Panel</div>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-3 space-y-0.5 mt-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/admin' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm shadow-blue-100'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <item.icon className={`w-[18px] h-[18px] ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
              <span className="text-white text-xs font-medium">
                {user?.email?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-slate-700 truncate">{user?.email}</div>
              <div className="text-[10px] text-slate-400">Quản trị viên</div>
            </div>
          </div>
          <button
            onClick={() => {
              logout();
              router.push('/admin/login');
            }}
            className="flex items-center gap-2 w-full px-3 py-2 text-xs text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:ml-[260px]">
        <header className="sticky top-0 z-30 h-[68px] bg-white/80 backdrop-blur-xl border-b border-slate-200/60 flex items-center px-4 lg:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-all mr-3"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex-1" />

          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 font-medium transition-colors"
          >
            Xem website
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </header>

        <main className="p-4 lg:p-8 max-w-7xl">{children}</main>
      </div>
    </div>
  );
}
