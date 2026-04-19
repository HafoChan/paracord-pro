"use client";

import { useState } from "react";
import { Play, X, CheckCircle } from "lucide-react";

interface VideoWithContentProps {
  videoId: string;
  title: string;
  description: string;
  features?: string[];
  layout?: "left" | "right";
  badge?: string;
}

export function VideoWithContent({
  videoId,
  title,
  description,
  features = [],
  layout = "left",
  badge
}: VideoWithContentProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const videoSection = (
    <div className="relative group">
      <div className="absolute inset-0 bg-accent-100/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        {!isPlaying ? (
          <div className="relative aspect-video bg-slate-900">
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
              aria-label="Phát video"
            >
              <div className="relative">
                <div className="absolute inset-0 w-16 h-16 bg-accent-600 rounded-full animate-ping opacity-75"></div>
                <div className="relative w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-accent-700 transition-all duration-300">
                  <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </button>
          </div>
        ) : (
          <div className="relative aspect-video bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm z-10"
              aria-label="Đóng video"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const contentSection = (
    <div className="space-y-6">
      {badge && (
        <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 px-4 py-2 rounded-full text-sm font-medium border border-accent-200">
          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
        {title}
      </h2>

      <p className="text-lg text-slate-600 leading-relaxed">
        {description}
      </p>

      {features.length > 0 && (
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-accent-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">{feature}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          layout === "right" ? "lg:grid-flow-dense" : ""
        }`}>
          <div className={layout === "right" ? "lg:col-start-2" : ""}>
            {videoSection}
          </div>
          <div className={layout === "right" ? "lg:col-start-1 lg:row-start-1" : ""}>
            {contentSection}
          </div>
        </div>
      </div>
    </section>
  );
}
