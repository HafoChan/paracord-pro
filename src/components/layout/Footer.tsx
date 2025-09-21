"use client";

import Link from "next/link";
import { Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { FOOTER_CONTENT, NAVIGATION_CONTENT } from "@/lib/content";
import { useState, useRef, useEffect } from "react";

// Define TypeScript interfaces (if using TypeScript)
interface NavigationItem {
  name: string;
  href: string;
}

// Constants for maintainability
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowContactOptions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="px-12">
      {/* Footer Divider */}
      <div className="bg-slate-100 h-0.5"></div>
      
      <footer className="bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
        {/* Background decoration */}
        <div
          className="absolute inset-0 bg-[url('/patterns/circle-pattern.svg')] opacity-5"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 bg-navy-900 rounded-xl flex items-center justify-center shadow-soft">
                <span className="text-white font-bold text-lg">PP</span>
              </div>
              <div>
                <div className="font-bold text-xl sm:text-2xl text-slate-900">
                  {COMPANY_INFO.name}
                </div>
                <div className="text-sm text-slate-600 font-medium">{COMPANY_INFO.slogan}</div>
              </div>
            </div>
            <p className="text-slate-600 mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={FOOTER_CONTENT.socialMedia.links.facebook.url}
                className="w-10 h-10 bg-slate-100 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all hover-lift shadow-soft border border-slate-200"
                aria-label="Visit our Facebook page"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook className="h-5 w-5 text-slate-600 hover:text-white transition-colors" aria-hidden="true" />
              </a>
              <a
                href={FOOTER_CONTENT.socialMedia.links.zalo.url}
                className="w-10 h-10 bg-slate-100 hover:bg-blue-500 rounded-xl flex items-center justify-center transition-all hover-lift shadow-soft border border-slate-200"
                aria-label="Connect with us on Zalo"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle className="h-5 w-5 text-slate-600 hover:text-white transition-colors" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <h3 className="font-semibold text-lg sm:text-xl mb-6 text-slate-900">{FOOTER_CONTENT.sections.quickLinks.title}</h3>
            <ul className="space-y-3">
              {NAVIGATION_CONTENT.items.map((item: NavigationItem) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-slate-900 transition-all flex items-center gap-2 group py-1 text-sm sm:text-base"
                  >
                    <div className="w-1 h-1 bg-slate-400 rounded-full group-hover:bg-navy-900 transition-colors"></div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            <h3 className="font-semibold text-lg sm:text-xl mb-6 text-slate-900">{FOOTER_CONTENT.sections.contact.title}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <Phone className="h-4 w-4 text-slate-600 group-hover:text-white" aria-hidden="true" />
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm sm:text-base"
                  aria-label={`Call us at ${COMPANY_INFO.phone}`}
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="h-4 w-4 text-slate-600 group-hover:text-white" aria-hidden="true" />
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm sm:text-base"
                  aria-label={`Email us at ${COMPANY_INFO.email}`}
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-red-600 transition-colors">
                  <MapPin className="h-4 w-4 text-slate-600 group-hover:text-white" aria-hidden="true" />
                </div>
                <span className="text-slate-600 font-medium text-sm sm:text-base">
                  {COMPANY_INFO.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              {FOOTER_CONTENT.copyright.prefix} {CURRENT_YEAR} {COMPANY_INFO.name}. {FOOTER_CONTENT.copyright.suffix}
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-sm text-slate-500">
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setShowContactOptions(!showContactOptions)}
                  className="hover:text-slate-700 transition-colors cursor-pointer"
                >
                  {FOOTER_CONTENT.designCredit}
                </button>
                
                {/* Contact Options Dropdown */}
                {showContactOptions && (
                  <div className="absolute bottom-full mb-2 right-0 bg-white border border-slate-200 rounded-lg shadow-lg p-2 min-w-[200px] z-50">
                    <div className="text-xs text-slate-600 mb-2 font-medium">{FOOTER_CONTENT.designCreditTitle}</div>
                    
                    {/* Email Option */}
                    <a 
                      href={FOOTER_CONTENT.designCreditUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 transition-colors text-slate-700 hover:text-slate-900"
                      onClick={() => setShowContactOptions(false)}
                    >
                      <Mail className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{FOOTER_CONTENT.designCreditSendEmail}</span>
                    </a>
                    
                    {/* Zalo Option */}
                    <a 
                      href={FOOTER_CONTENT.designCreditZalo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 transition-colors text-slate-700 hover:text-slate-900"
                      onClick={() => setShowContactOptions(false)}
                    >
                      <MessageCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{FOOTER_CONTENT.designCreditChatZalo}</span>
                    </a>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                <span>{FOOTER_CONTENT.status.indicator}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}