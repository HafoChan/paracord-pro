"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { PhoneIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO, NAVIGATION_ITEMS } from "@/lib/constants";

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
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-slate-200/60 shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/30 shadow-sm'
    }`}>

      {/* Enhanced main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo with modern design */}
          <Link href="/" className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105">
            <div className="relative">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3">
                <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">PP</span>
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
            </div>
            <div className="space-y-1">
              <div className={`font-bold transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-xl'
              } text-gradient group-hover:text-gradient-accent`}>
                {COMPANY_INFO.name}
              </div>
              <div className="text-xs text-slate-500 font-medium bg-slate-50 px-2 py-0.5 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                Chất lượng cao
              </div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {NAVIGATION_ITEMS.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-slate-600 hover:text-blue-600 font-medium transition-all duration-300 rounded-xl group hover:bg-blue-50/50"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100"></div>
                
                {/* Bottom indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-8 rounded-full"></div>
              </Link>
            ))}
          </nav>

          {/* Enhanced CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="group flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white border border-slate-200 hover:border-blue-300 rounded-xl text-slate-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg backdrop-blur-sm"
              title="Gọi ngay"
            >
              <div className="relative">
                <PhoneIcon className="w-4 h-4 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
              </div>
              <span className="font-medium text-sm">{COMPANY_INFO.phone}</span>
            </a>
            
            <Button className="group relative bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden" asChild>
              <Link href="/contact" className="flex items-center gap-2 relative z-10">
                <ChatBubbleLeftRightIcon className="w-4 h-4 group-hover:animate-bounce" />
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
                  <X className="h-5 w-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-red-500/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
                </>
              ) : (
                <>
                  <Menu className="h-5 w-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
                </>
              )}
            </div>
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-slate-200/50 animate-fade-in-up">
            <div className="bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-lg rounded-3xl p-8 mt-6 shadow-xl border border-white/20">
              <div className="space-y-3">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between p-4 text-slate-600 hover:text-blue-600 font-medium transition-all duration-300 rounded-2xl hover:bg-white/60 hover:shadow-md animate-fade-in-up"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                  >
                    <span className="relative">
                      {item.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></div>
                      <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </Link>
                ))}
                
                <div className="mt-8 pt-6 border-t border-slate-200/50">
                  <Button className="w-full group relative bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden" asChild>
                    <Link href="/contact" className="relative z-10 flex items-center justify-center gap-2">
                      <ChatBubbleLeftRightIcon className="w-5 h-5" />
                      <span className="font-semibold">Liên hệ ngay</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </Link>
                  </Button>
                  
                  <div className="mt-4 text-center">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors duration-300"
                    >
                      <PhoneIcon className="w-4 h-4" />
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
