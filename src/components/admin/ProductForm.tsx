'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/lib/admin-auth-context';
import ImageUploader from '@/components/admin/ImageUploader';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  { value: 'day-du', label: 'Dây dù' },
  { value: 'day-du-thun', label: 'Dây dù thun' },
  { value: 'day-tip', label: 'Dây típ' },
  { value: 'day-thun', label: 'Dây thun' },
  { value: 'day-dai', label: 'Dây đai' },
  { value: 'day-chu', label: 'Dây chữ' },
  { value: 'service', label: 'Dịch vụ gia công' },
];

interface ProductFormData {
  id: string;
  name: string;
  slug: string;
  size: string;
  category: string;
  description: string;
  priceRange: string;
  colors: string;
  images: string[];
  videoUrl: string;
  isFeatured: boolean;
  specifications: Record<string, string>;
}

interface ProductFormProps {
  initialData?: ProductFormData;
  isEdit?: boolean;
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

export default function ProductForm({ initialData, isEdit }: ProductFormProps) {
  const { token } = useAdminAuth();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState<ProductFormData>(
    initialData || {
      id: '',
      name: '',
      slug: '',
      size: '',
      category: 'day-du',
      description: '',
      priceRange: '',
      colors: '',
      images: [],
      videoUrl: '',
      isFeatured: false,
      specifications: {},
    }
  );

  const [specKeys, setSpecKeys] = useState<{ key: string; value: string }[]>(
    initialData?.specifications
      ? Object.entries(initialData.specifications).map(([key, value]) => ({ key, value }))
      : [{ key: '', value: '' }]
  );

  const updateField = (field: keyof ProductFormData, value: unknown) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field === 'name' && !isEdit) {
      setForm((prev) => ({ ...prev, slug: generateSlug(value as string) }));
    }
  };

  const handleSpecChange = (index: number, field: 'key' | 'value', value: string) => {
    const updated = [...specKeys];
    updated[index][field] = value;
    setSpecKeys(updated);
  };

  const addSpec = () => setSpecKeys([...specKeys, { key: '', value: '' }]);
  const removeSpec = (index: number) => setSpecKeys(specKeys.filter((_, i) => i !== index));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    const specifications: Record<string, string> = {};
    specKeys.forEach(({ key, value }) => {
      if (key.trim()) specifications[key.trim()] = value.trim();
    });

    const payload = {
      ...form,
      colors: form.colors.split(',').map((c) => c.trim()).filter(Boolean),
      specifications,
    };

    try {
      const url = isEdit ? `/api/admin/products/${form.id}` : '/api/admin/products';
      const method = isEdit ? 'PUT' : 'POST';

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
        throw new Error(data.error || 'Lỗi lưu sản phẩm');
      }

      router.push('/admin/products');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Lỗi không xác định');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/admin/products"
          className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-slate-500" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            {isEdit ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới'}
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            {isEdit ? `Đang sửa: ${form.name}` : 'Điền thông tin sản phẩm bên dưới'}
          </p>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 text-sm p-4 rounded-xl border border-red-100 mb-6 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900 mb-5">Thông tin cơ bản</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {!isEdit && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Mã sản phẩm <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.id}
                  onChange={(e) => updateField('id', e.target.value)}
                  required
                  placeholder="VD: dd-001"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>
            )}

            <div className={isEdit ? 'md:col-span-2' : ''}>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Tên sản phẩm <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Slug (URL)</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => updateField('slug', e.target.value)}
                placeholder="Tự động tạo từ tên"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Kích thước</label>
              <input
                type="text"
                value={form.size}
                onChange={(e) => updateField('size', e.target.value)}
                placeholder="VD: 3mm, 5mm"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Danh mục <span className="text-red-500">*</span>
              </label>
              <select
                value={form.category}
                onChange={(e) => updateField('category', e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Khoảng giá</label>
              <input
                type="text"
                value={form.priceRange}
                onChange={(e) => updateField('priceRange', e.target.value)}
                placeholder="VD: 300đ - 500đ/mét"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Mô tả sản phẩm</label>
              <textarea
                value={form.description}
                onChange={(e) => updateField('description', e.target.value)}
                rows={4}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Màu sắc <span className="text-xs text-slate-400 font-normal">(phân tách bởi dấu phẩy)</span>
              </label>
              <input
                type="text"
                value={form.colors}
                onChange={(e) => updateField('colors', e.target.value)}
                placeholder="đen, trắng, đỏ, xanh..."
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Video URL</label>
              <input
                type="url"
                value={form.videoUrl}
                onChange={(e) => updateField('videoUrl', e.target.value)}
                placeholder="https://youtube.com/watch?v=..."
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={form.isFeatured}
                    onChange={(e) => updateField('isFeatured', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-6 bg-slate-200 peer-checked:bg-blue-600 rounded-full transition-colors" />
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform peer-checked:translate-x-4" />
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                  Đánh dấu là sản phẩm nổi bật
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900 mb-5">Thông số kỹ thuật</h2>
          <div className="space-y-3">
            {specKeys.map((spec, index) => (
              <div key={index} className="flex gap-3 items-start">
                <input
                  type="text"
                  value={spec.key}
                  onChange={(e) => handleSpecChange(index, 'key', e.target.value)}
                  placeholder="Tên thông số (VD: Chất liệu)"
                  className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
                />
                <input
                  type="text"
                  value={spec.value}
                  onChange={(e) => handleSpecChange(index, 'value', e.target.value)}
                  placeholder="Giá trị (VD: Poly, Nylon)"
                  className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => removeSpec(index)}
                  className="px-3 py-2.5 text-red-500 hover:bg-red-50 rounded-xl text-sm font-medium transition-colors shrink-0"
                >
                  Xóa
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addSpec}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors"
            >
              + Thêm thông số
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900 mb-5">Hình ảnh sản phẩm</h2>
          <ImageUploader
            images={form.images}
            onChange={(images) => updateField('images', images)}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 pb-8">
          <Link
            href="/admin/products"
            className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all"
          >
            Hủy bỏ
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 transition-all shadow-md shadow-blue-600/20 active:scale-[0.98]"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {saving ? 'Đang lưu...' : 'Lưu sản phẩm'}
          </button>
        </div>
      </form>
    </div>
  );
}
