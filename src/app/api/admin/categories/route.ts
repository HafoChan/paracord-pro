import { NextRequest } from 'next/server';
import { verifyAdminToken, unauthorizedResponse } from '@/lib/admin-auth';
import { supabaseAdmin } from '@/lib/supabase-server';

export async function GET(request: NextRequest) {
  const user = await verifyAdminToken(request);
  if (!user) return unauthorizedResponse();

  const { data, error } = await supabaseAdmin
    .from('categories')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ categories: data });
}

export async function POST(request: NextRequest) {
  const user = await verifyAdminToken(request);
  if (!user) return unauthorizedResponse();

  try {
    const body = await request.json();

    const categoryData = {
      name: body.name,
      name_vi: body.nameVi,
      slug: body.slug,
      description: body.description || null,
      description_vi: body.descriptionVi || null,
      image_url: body.imageUrl || null,
      parent_id: body.parentId || null,
      sort_order: body.sortOrder || 0,
      is_active: body.isActive !== undefined ? body.isActive : true,
    };

    const { data, error } = await supabaseAdmin
      .from('categories')
      .insert(categoryData)
      .select()
      .single();

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ category: data }, { status: 201 });
  } catch {
    return Response.json({ error: 'Dữ liệu không hợp lệ' }, { status: 400 });
  }
}
