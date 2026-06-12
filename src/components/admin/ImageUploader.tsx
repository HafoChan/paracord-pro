'use client';

import { useState, useRef } from 'react';
import { useAdminAuth } from '@/lib/admin-auth-context';
import { Upload, X, Loader2, ImagePlus } from 'lucide-react';

interface ImageUploaderProps {
  images: string[];
  onChange: (images: string[]) => void;
}

export default function ImageUploader({ images, onChange }: ImageUploaderProps) {
  const { token } = useAdminAuth();
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    const newImages = [...images];

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append('file', files[i]);

      try {
        const res = await fetch('/api/admin/upload', {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        });

        if (res.ok) {
          const data = await res.json();
          newImages.push(data.url);
        }
      } catch {
        // skip failed
      }
    }

    onChange(newImages);
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    handleUpload(e.dataTransfer.files);
  };

  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {/* Image grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((url, index) => (
            <div key={index} className="relative group aspect-square rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all shadow-sm hover:bg-red-50"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              {index === 0 && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600/90 to-blue-600/70 backdrop-blur-sm text-white text-[10px] font-semibold text-center py-1 uppercase tracking-wide">
                  Ảnh chính
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Upload area */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
          dragActive
            ? 'border-blue-400 bg-blue-50/50'
            : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
        } ${uploading ? 'pointer-events-none opacity-60' : ''}`}
      >
        {uploading ? (
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
            <span className="text-sm text-slate-500">Đang tải ảnh lên...</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              {dragActive ? (
                <Upload className="w-6 h-6 text-blue-500" />
              ) : (
                <ImagePlus className="w-6 h-6 text-blue-500" />
              )}
            </div>
            <div>
              <span className="text-sm font-medium text-slate-700">
                {dragActive ? 'Thả ảnh vào đây' : 'Kéo thả ảnh hoặc nhấp để chọn'}
              </span>
              <p className="text-xs text-slate-400 mt-1">JPEG, PNG, WebP, GIF • Tối đa 5MB/ảnh</p>
            </div>
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        multiple
        onChange={(e) => handleUpload(e.target.files)}
        className="hidden"
      />
    </div>
  );
}
