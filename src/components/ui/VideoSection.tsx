"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Volume2, VolumeX } from "lucide-react";

interface VideoSectionProps {
  videoId: string;
  title?: string;
  description?: string;
  variant?: "default" | "compact" | "hero" | "inline" | "split-left" | "split-right" | "floating" | "minimal";
  className?: string;
  autoplay?: boolean;
  showStats?: boolean;
}

export function VideoSection({
  videoId,
  title,
  description,
  variant = "default",
  className = "",
  autoplay: _autoplay = false, // eslint-disable-line @typescript-eslint/no-unused-vars
  showStats = true
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const variantStyles = {
    default: "py-16 bg-slate-50",
    compact: "py-8 bg-white",
    hero: "py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900",
    inline: "py-0 bg-transparent",
    "split-left": "py-0 bg-transparent",
    "split-right": "py-0 bg-transparent",
    floating: "py-12 bg-gradient-to-b from-white to-slate-50",
    minimal: "py-8 bg-transparent"
  };

  const containerStyles = {
    default: "container mx-auto px-4 sm:px-6 lg:px-16",
    compact: "container mx-auto px-4 sm:px-6 lg:px-16",
    hero: "container mx-auto px-4 sm:px-6 lg:px-16",
    inline: "w-full",
    "split-left": "w-full",
    "split-right": "w-full",
    floating: "container mx-auto px-4 sm:px-6 lg:px-16",
    minimal: "container mx-auto px-4 sm:px-6 lg:px-16"
  };

  const videoWrapperStyles = {
    default: "max-w-5xl mx-auto",
    compact: "max-w-4xl mx-auto",
    hero: "max-w-6xl mx-auto",
    inline: "w-full",
    "split-left": "w-full",
    "split-right": "w-full",
    floating: "max-w-4xl mx-auto",
    minimal: "max-w-3xl mx-auto"
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
  };

  return (
    <section className={`${variantStyles[variant]} ${className} relative overflow-hidden`}>
      {variant === "hero" && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      )}

      <div className={`${containerStyles[variant]} relative z-10`}>
        {(title || description) && (
          <div className="text-center mb-8 animate-fade-in-up">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                variant === "hero" ? "text-white" : "text-primary-900"
              }`}>
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-lg max-w-3xl mx-auto ${
                variant === "hero" ? "text-slate-200" : "text-slate-600"
              }`}>
                {description}
              </p>
            )}
          </div>
        )}

        <div className={`${videoWrapperStyles[variant]} animate-fade-in-up`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            {!isPlaying ? (
              <>
                <div className="relative aspect-video bg-slate-900">
                  <Image
                    src={thumbnailUrl}
                    alt={title || "Video"}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Play button overlay */}
                  <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                    aria-label="Phát video"
                  >
                    <div className="relative">
                      {/* Pulse effect */}
                      <div className="absolute inset-0 w-20 h-20 bg-accent-600 rounded-full animate-ping opacity-75"></div>
                      
                      {/* Main button */}
                      <div className="relative w-20 h-20 bg-accent-600 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-accent-700 transition-all duration-300 group-hover:scale-110">
                        <Play className="h-10 w-10 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </button>

                  {/* Video info overlay */}
                  {title && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-semibold text-sm truncate">
                            {title}
                          </p>
                          <p className="text-slate-300 text-xs">
                            Click để xem video
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1${isMuted ? '&mute=1' : ''}`}
                  title={title || "Video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                
                {/* Control buttons */}
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                    aria-label={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
                  >
                    {isMuted ? (
                      <VolumeX className="h-5 w-5 text-white" />
                    ) : (
                      <Volume2 className="h-5 w-5 text-white" />
                    )}
                  </button>
                  
                  <button
                    onClick={handleCloseClick}
                    className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                    aria-label="Đóng video"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Video stats/info below */}
          {!isPlaying && showStats && variant !== "inline" && variant !== "split-left" && variant !== "split-right" && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Video HD
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Xem ngay
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
