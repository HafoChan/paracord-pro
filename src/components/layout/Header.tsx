"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { PhoneIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";
import { NAVIGATION_CONTENT } from "@/lib/content";
import { LOGO_ASSETS } from "@/lib/content/assets";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 px-4 sm:px-6 lg:px-12 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-slate-200/60 shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/30 shadow-sm'
    }`}>

      {/* Compact main navigation */}
      <div className="container mx-auto px-2 sm:px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Compact Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group transition-all duration-300 hover:scale-105">
            <div className="relative">
              <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3 overflow-hidden">
                <Image 
                  src={LOGO_ASSETS.main}
                  alt="MINH TIEN STRING CO., LTD Logo"
                  width={32}
                  height={32}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-xl border-2 border-accent-400/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
            </div>
            <div className="space-y-0.5">
              <div className={`font-bold transition-all duration-300 ${
                isScrolled ? 'text-base' : 'text-lg'
              } text-gradient group-hover:text-gradient-accent`}>
                {COMPANY_INFO.name}
              </div>
              <div className="text-xs text-slate-500 font-medium bg-slate-50 px-2 py-0.5 rounded-full group-hover:bg-accent-50 group-hover:text-accent-600 transition-all duration-300">
                Chất lượng cao
              </div>
            </div>
          </Link>

          {/* Compact Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAVIGATION_CONTENT.items.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-1.5 text-slate-600 hover:text-accent-600 font-medium transition-all duration-300 rounded-lg group hover:bg-accent-50/50 text-md" 
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-accent-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100"></div>
                
                {/* Bottom indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-accent-600 transition-all duration-300 group-hover:w-6 rounded-full"></div>
              </Link>
            ))}
          </nav>


          {/* Compact CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="group flex items-center gap-2 px-3 py-1.5 bg-white/90 hover:bg-white border border-slate-200 hover:border-accent-300 rounded-lg text-slate-700 hover:text-accent-600 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg backdrop-blur-sm text-sm"
              title="Gọi ngay"
            >
              <div className="relative">
                <PhoneIcon className="w-3.5 h-3.5 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-accent-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
              </div>
              <span className="font-medium">{COMPANY_INFO.phone}</span>
            </a>
            
            <Button className="group relative bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden text-sm" asChild>
              <Link href="/contact" className="flex items-center gap-2 relative z-10">
                <ChatBubbleLeftRightIcon className="w-3.5 h-3.5 group-hover:animate-bounce" />
                <span className="font-medium">Liên hệ ngay</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative p-2 rounded-xl hover:bg-slate-100 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6 flex flex-col justify-center">
              {isMenuOpen ? (
                <>
                  <X className="h-5 w-5 text-slate-600 group-hover:text-accent-600 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-red-500/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
                </>
              ) : (
                <>
                  <Menu className="h-5 w-5 text-slate-600 group-hover:text-accent-600 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-accent-500/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
                </>
              )}
            </div>
          </Button>
        </div>

        {/* Compact Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-200/50 animate-fade-in-up">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 mt-4 shadow-xl border border-slate-200">
              <div className="space-y-2">
                {NAVIGATION_CONTENT.items.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between p-3 text-slate-600 hover:text-accent-600 font-medium transition-all duration-300 rounded-xl hover:bg-white/60 hover:shadow-md animate-fade-in-up text-sm"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                  >
                    <span className="relative">
                      {item.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></div>
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></div>
                      <ArrowRight className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </Link>
                ))}
                
                <div className="mt-6 pt-4 border-t border-slate-200/50">
                  <Button className="w-full group relative bg-accent-600 hover:bg-accent-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden text-sm" asChild>
                    <Link href="/contact" className="relative z-10 flex items-center justify-center gap-2">
                      <ChatBubbleLeftRightIcon className="w-4 h-4" />
                      <span className="font-semibold">Liên hệ ngay</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </Link>
                  </Button>
                  
                  <div className="mt-3 text-center">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="inline-flex items-center gap-2 text-slate-600 hover:text-accent-600 text-sm font-medium transition-colors duration-300"
                    >
                      <PhoneIcon className="w-3.5 h-3.5" />
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
