"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Phone, ArrowRight, Factory, Truck, Award, Target } from 'lucide-react';
import { COMPANY_INFO, HERO_SLIDES, HERO_SLIDER_FEATURES, HERO_SLIDER_BRAND, HERO_SLIDER_CTA } from '@/lib/constants';


export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setIsAutoPlay(false);
  };


  const currentSlideData = HERO_SLIDES[currentSlide];

  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Modern Hero Slider */}
      <div className="relative h-[75vh]">
        
        {/* Background Images with Modern Overlay */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={slide.backgroundImage}
              alt={slide.title}
              fill
              className="object-cover transition-transform duration-1000"
              priority={index === 0}
            />
            {/* Modern Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-slate-900/60 to-navy-900/90"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
          </div>
        ))}

        {/* Modern Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              
              {/* Modern Brand Header */}
              <div className="flex items-center justify-center lg:justify-start mb-8 hero-animate-in">
                <div className="glass-card flex items-center gap-4 rounded-3xl p-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-900 rounded-2xl flex items-center justify-center shadow-lg">
                    <Factory className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">{HERO_SLIDER_BRAND.name}</h2>
                    <p className="text-white/80 text-sm font-medium">{HERO_SLIDER_BRAND.tagline}</p>
                  </div>
                </div>
              </div>

              {/* Refined Typography */}
              <div className="text-center lg:text-left hero-animate-in" style={{animationDelay: '0.2s'}}>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
                  {currentSlideData.title}
                </h1>
                <p className="text-xl lg:text-2xl text-white mb-3 font-semibold leading-tight">
                  {currentSlideData.subtitle}
                </p>
                <p className="text-base lg:text-lg text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  {currentSlideData.description}
                </p>
              </div>

              {/* Modern CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-animate-in" style={{animationDelay: '0.4s'}}>
                <Link 
                  href={HERO_SLIDER_CTA.primary.href}
                  className="group bg-white text-navy-900 px-8 py-4 rounded-3xl font-bold text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-3 min-w-[220px]"
                >
                  <span>{HERO_SLIDER_CTA.primary.text}</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a 
                  href={`${HERO_SLIDER_CTA.secondary.href}${COMPANY_INFO.phone}`}
                  className="glass-button group text-white px-8 py-4 rounded-3xl font-semibold text-lg flex items-center justify-center gap-3 min-w-[220px]"
                >
                  <Phone className="h-5 w-5" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>

              {/* Modern Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-12 hero-animate-in" style={{animationDelay: '0.6s'}}>
                {HERO_SLIDER_FEATURES.map((feature, index) => {
                  const IconComponent = feature.icon === "Award" ? Award : 
                                      feature.icon === "Target" ? Target : Truck;
                  return (
                    <div
                      key={index}
                      className="glass-card group px-4 py-2 text-white font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-3 rounded-2xl"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-900 rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-md font-semibold">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Side Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 text-white/70 hover:text-white transition-all duration-300 hover:scale-125 group"
        >
          <ChevronLeft className="h-8 w-8 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 text-white/70 hover:text-white transition-all duration-300 hover:scale-125 group"
        >
          <ChevronRight className="h-8 w-8 group-hover:scale-110 transition-transform" />
        </button>


        {/* Modern Progress Indicator */}
        <div className="absolute top-8 right-8 z-20">
          <div className="glass-card rounded-3xl px-4 py-2">
            <div className="flex items-center gap-2 text-white/80 text-sm font-bold">
              <span className="text-white font-black text-lg">{String(currentSlide + 1).padStart(2, '0')}</span>
              <span className="text-white/60">/</span>
              <span className="text-white/80">{String(HERO_SLIDES.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
