"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
}

interface VideoGridProps {
  videos: VideoItem[];
  title?: string;
  description?: string;
  columns?: 2 | 3;
}

export function VideoGrid({
  videos,
  title,
  description,
  columns = 2
}: VideoGridProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
          {videos.map((video, index) => {
            const thumbnailUrl = video.thumbnail || `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
            const isActive = activeVideo === video.id;

            return (
              <div
                key={video.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="relative aspect-video bg-slate-900">
                  {!isActive ? (
                    <>
                      <img
                        src={thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      <button
                        onClick={() => setActiveVideo(video.id)}
                        className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                        aria-label={`Phát ${video.title}`}
                      >
                        <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-accent-700 transition-all duration-300">
                          <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                        </div>
                      </button>
                    </>
                  ) : (
                    <>
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                      
                      <button
                        onClick={() => setActiveVideo(null)}
                        className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm z-10"
                        aria-label="Đóng video"
                      >
                        <X className="h-5 w-5 text-white" />
                      </button>
                    </>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-accent-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
