'use client';

import { useEffect, useState } from 'react';
import { useAdminAuth } from '@/lib/admin-auth-context';
import { Plus, Edit2, Trash2, Save, X, Check, AlertCircle } from 'lucide-react';

interface CategoryRow {
  id: string;
  name: string;
  name_vi: string;
  slug: string;
  description: string | null;
  description_vi: string | null;
  image_url: string | null;
  parent_id: string | null;
  sort_order: number;
  is_active: boolean;
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function AdminCategoriesPage() {
  const { token } = useAdminAuth();
  const [categories, setCategories] = useState<CategoryRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    name: '',
    nameVi: '',
    slug: '',
    description: '',
    descriptionVi: '',
    sortOrder: 0,
    isActive: true,
  });

  const fetchCategories = async () => {
    if (!token) return;
    try {
      const res = await fetch('/api/admin/categories', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setCategories(data.categories || []);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const resetForm = () => {
    setForm({ name: '', nameVi: '', slug: '', description: '', descriptionVi: '', sortOrder: 0, isActive: true });
    setShowForm(false);
    setEditingId(null);
    setError('');
  };

  const startEdit = (cat: CategoryRow) => {
    setForm({
      name: cat.name,
      nameVi: cat.name_vi || '',
      slug: cat.slug,
      description: cat.description || '',
      descriptionVi: cat.description_vi || '',
      sortOrder: cat.sort_order,
      isActive: cat.is_active,
    });
    setEditingId(cat.id);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    try {
      const url = editingId
        ? `/api/admin/categories/${editingId}`
        : '/api/admin/categories';
      const method = editingId ? 'PUT' : 'POST';

      const payload = {
        name: form.name,
        nameVi: form.nameVi,
        slug: form.slug || generateSlug(form.nameVi || form.name),
        description: form.description || null,
        descriptionVi: form.descriptionVi || null,
        sortOrder: form.sortOrder,
        isActive: form.isActive,
      };

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Lỗi lưu danh mục');
      }

      resetForm();
      fetchCategories();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Lỗi kết nối');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bạn có chắc muốn xóa danh mục này?')) return;

    try {
      await fetch(`/api/admin/categories/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCategories();
    } catch {
      alert('Lỗi khi xóa');
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Danh mục</h1>
          <p className="text-sm text-slate-500 mt-0.5">Quản lý danh mục sản phẩm</p>
        </div>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md shadow-blue-600/20 active:scale-[0.98]"
          >
            <Plus className="w-4 h-4" />
            Thêm danh mục
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900 mb-5">
            {editingId ? 'Chỉnh sửa danh mục' : 'Thêm danh mục mới'}
          </h2>

          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3.5 rounded-xl border border-red-100 mb-5 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Tên (Tiếng Anh) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="VD: Paracord String"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Tên (Tiếng Việt) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.nameVi}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      nameVi: e.target.value,
                      slug: generateSlug(e.target.value),
                    });
                  }}
                  required
                  placeholder="VD: Dây dù bán trơn"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Slug</label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  placeholder="Tự động từ tên tiếng Việt"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Thứ tự hiển thị</label>
                <input
                  type="number"
                  value={form.sortOrder}
                  onChange={(e) => setForm({ ...form, sortOrder: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Mô tả (Tiếng Việt)</label>
                <input
                  type="text"
                  value={form.descriptionVi}
                  onChange={(e) => setForm({ ...form, descriptionVi: e.target.value })}
                  placeholder="Mô tả ngắn về danh mục"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer group mt-6">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={form.isActive}
                      onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-6 bg-slate-200 peer-checked:bg-blue-600 rounded-full transition-colors" />
                    <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform peer-checked:translate-x-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">Kích hoạt</span>
                </label>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 transition-all shadow-md shadow-blue-600/20 active:scale-[0.98]"
              >
                {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
                {saving ? 'Đang lưu...' : 'Lưu danh mục'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all"
              >
                <X className="w-4 h-4" />
                Hủy
              </button>
            </div>
          </form>
        </div>
      )}

      {/* List */}
      <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-12 text-center">
            <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <span className="text-sm text-slate-400">Đang tải...</span>
          </div>
        ) : categories.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-3">
              <Plus className="w-8 h-8 text-slate-300" />
            </div>
            <p className="text-sm text-slate-500">Chưa có danh mục nào</p>
            <p className="text-xs text-slate-400 mt-1">Nhấn &ldquo;Thêm danh mục&rdquo; để bắt đầu</p>
          </div>
        ) : (
          <div>
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1fr_80px_60px_80px] gap-4 px-5 py-3 border-b border-slate-100 bg-slate-50/50">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Tên</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Slug</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide text-center">Thứ tự</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide text-center">Active</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide text-right">Thao tác</span>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-50">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="grid grid-cols-[1fr_1fr_80px_60px_80px] gap-4 px-5 py-3.5 items-center hover:bg-slate-50/50 transition-colors"
                >
                  <div>
                    <div className="font-medium text-sm text-slate-800">{cat.name_vi || cat.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{cat.name}</div>
                  </div>
                  <div className="text-sm text-slate-500 font-mono text-xs">{cat.slug}</div>
                  <div className="text-center">
                    <span className="inline-flex px-2 py-0.5 rounded-md bg-slate-100 text-xs font-medium text-slate-600">
                      {cat.sort_order}
                    </span>
                  </div>
                  <div className="text-center">
                    {cat.is_active ? (
                      <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-slate-300 mx-auto" />
                    )}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => startEdit(cat)}
                      className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      title="Sửa"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                      title="Xóa"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
