'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useAdminAuth } from '@/lib/admin-auth-context';
import ProductForm from '@/components/admin/ProductForm';

export default function EditProductPage() {
  const { id } = useParams();
  const { token } = useAdminAuth();
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProduct() {
      if (!token || !id) return;

      try {
        const res = await fetch(`/api/admin/products/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          setError('Không tìm thấy sản phẩm');
          return;
        }

        const data = await res.json();
        const p = data.product;

        setProductData({
          id: p.id,
          name: p.name,
          slug: p.slug,
          size: p.size || '',
          category: p.category,
          description: p.description || '',
          priceRange: p.price_range || '',
          colors: (p.colors || []).join(', '),
          images: p.images || [],
          videoUrl: p.video_url || '',
          isFeatured: p.is_featured || false,
          specifications: p.specifications || {},
        });
      } catch {
        setError('Lỗi tải dữ liệu');
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [token, id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  if (!productData) return null;

  return <ProductForm initialData={productData} isEdit />;
}
