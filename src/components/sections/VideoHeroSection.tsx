"use client";

import { useState } from "react";
import { Play, X, ArrowDown } from "lucide-react";

interface VideoHeroSectionProps {
  videoId: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export function VideoHeroSection({
  videoId,
  title,
  subtitle,
  ctaText = "Xem video giới thiệu",
  onCtaClick
}: VideoHeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video Thumbnail */}
      <div className="absolute inset-0">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {subtitle}
          </p>

          <button
            onClick={() => {
              setIsPlaying(true);
              onCtaClick?.();
            }}
            className="group inline-flex items-center gap-3 bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-accent-600/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <Play className="h-6 w-6" fill="currentColor" />
            <span>{ctaText}</span>
          </button>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ArrowDown className="h-8 w-8 text-white mx-auto opacity-50" />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute -top-12 right-0 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              aria-label="Đóng video"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
