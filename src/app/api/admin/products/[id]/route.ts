import { NextRequest } from 'next/server';
import { verifyAdminToken, unauthorizedResponse } from '@/lib/admin-auth';
import { supabaseAdmin } from '@/lib/supabase-server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await verifyAdminToken(request);
  if (!user) return unauthorizedResponse();

  const { id } = await params;

  const { data, error } = await supabaseAdmin
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return Response.json({ error: 'Không tìm thấy sản phẩm' }, { status: 404 });
  }

  return Response.json({ product: data });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await verifyAdminToken(request);
  if (!user) return unauthorizedResponse();

  const { id } = await params;

  try {
    const body = await request.json();

    const updateData: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    };

    if (body.name !== undefined) updateData.name = body.name;
    if (body.slug !== undefined) updateData.slug = body.slug;
    if (body.size !== undefined) updateData.size = body.size;
    if (body.category !== undefined) updateData.category = body.category;
    if (body.description !== undefined) updateData.description = body.description;
    if (body.specifications !== undefined) updateData.specifications = body.specifications;
    if (body.priceRange !== undefined) updateData.price_range = body.priceRange;
    if (body.colors !== undefined) updateData.colors = body.colors;
    if (body.images !== undefined) updateData.images = body.images;
    if (body.videoUrl !== undefined) updateData.video_url = body.videoUrl;
    if (body.isFeatured !== undefined) updateData.is_featured = body.isFeatured;

    const { data, error } = await supabaseAdmin
      .from('products')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ product: data });
  } catch {
    return Response.json({ error: 'Dữ liệu không hợp lệ' }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await verifyAdminToken(request);
  if (!user) return unauthorizedResponse();

  const { id } = await params;

  const { error } = await supabaseAdmin
    .from('products')
    .delete()
    .eq('id', id);

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json({ message: 'Đã xóa sản phẩm' });
}
