import { NextRequest } from 'next/server';
import { verifyAdminToken, unauthorizedResponse } from '@/lib/admin-auth';
import { supabaseAdmin } from '@/lib/supabase-server';

export async function GET(request: NextRequest) {
  const user = await verifyAdminToken(request);
  if (!user) return unauthorizedResponse();

  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '20');
  const offset = (page - 1) * limit;

  let query = supabaseAdmin
    .from('products')
    .select('*', { count: 'exact' });

  if (category) {
    query = query.eq('category', category);
  }

  if (search) {
    query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`);
  }

  const { data, error, count } = await query
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({
    products: data,
    total: count,
    page,
    limit,
    totalPages: Math.ceil((count || 0) / limit),
  });
}

export async function POST(request: NextRequest) {
  const user = await verifyAdminToken(request);
  if (!user) return unauthorizedResponse();

  try {
    const body = await request.json();
    const now = new Date().toISOString();

    const productData = {
      id: body.id,
      name: body.name,
      slug: body.slug,
      size: body.size || null,
      category: body.category,
      description: body.description || '',
      specifications: body.specifications || {},
      price_range: body.priceRange || '',
      colors: body.colors || [],
      images: body.images || [],
      video_url: body.videoUrl || null,
      is_featured: body.isFeatured || false,
      created_at: now,
      updated_at: now,
    };

    const { data, error } = await supabaseAdmin
      .from('products')
      .insert(productData)
      .select()
      .single();

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ product: data }, { status: 201 });
  } catch {
    return Response.json({ error: 'Dữ liệu không hợp lệ' }, { status: 400 });
  }
}
