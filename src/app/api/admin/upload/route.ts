import { NextRequest } from 'next/server';
import { verifyAdminToken, unauthorizedResponse } from '@/lib/admin-auth';
import { supabaseAdmin } from '@/lib/supabase-server';

const BUCKET_NAME = 'product-images';

export async function POST(request: NextRequest) {
  const user = await verifyAdminToken(request);
  if (!user) return unauthorizedResponse();

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return Response.json({ error: 'Không có file nào được chọn' }, { status: 400 });
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return Response.json(
        { error: 'Chỉ hỗ trợ định dạng: JPEG, PNG, WebP, GIF' },
        { status: 400 }
      );
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return Response.json(
        { error: 'File không được vượt quá 5MB' },
        { status: 400 }
      );
    }

    const ext = file.name.split('.').pop();
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 8);
    const filePath = `${timestamp}-${randomStr}.${ext}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const { error: uploadError } = await supabaseAdmin.storage
      .from(BUCKET_NAME)
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      return Response.json({ error: uploadError.message }, { status: 500 });
    }

    const { data: urlData } = supabaseAdmin.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    return Response.json({
      url: urlData.publicUrl,
      path: filePath,
    });
  } catch {
    return Response.json({ error: 'Lỗi upload file' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const user = await verifyAdminToken(request);
  if (!user) return unauthorizedResponse();

  try {
    const { path } = await request.json();

    if (!path) {
      return Response.json({ error: 'Thiếu đường dẫn file' }, { status: 400 });
    }

    const { error } = await supabaseAdmin.storage
      .from(BUCKET_NAME)
      .remove([path]);

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ message: 'Đã xóa ảnh' });
  } catch {
    return Response.json({ error: 'Lỗi xóa file' }, { status: 500 });
  }
}
