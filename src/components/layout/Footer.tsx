import Link from "next/link";
import { Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO, NAVIGATION_ITEMS, SOCIAL_LINKS } from "@/lib/constants";

// Define TypeScript interfaces (if using TypeScript)
interface NavigationItem {
  name: string;
  href: string;
}

// Constants for maintainability
const CURRENT_YEAR = new Date().getFullYear();
const DESIGN_CREDIT = "Paracord Pro";

export function Footer() {
  return (
    <>
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
                href={SOCIAL_LINKS.facebook}
                className="w-10 h-10 bg-slate-100 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all hover-lift shadow-soft border border-slate-200"
                aria-label="Visit our Facebook page"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook className="h-5 w-5 text-slate-600 hover:text-white transition-colors" aria-hidden="true" />
              </a>
              <a
                href={SOCIAL_LINKS.zalo}
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
            <h3 className="font-semibold text-lg sm:text-xl mb-6 text-slate-900">Liên kết nhanh</h3>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.map((item: NavigationItem) => (
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
            <h3 className="font-semibold text-lg sm:text-xl mb-6 text-slate-900">Liên hệ</h3>
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
              © {CURRENT_YEAR} {COMPANY_INFO.name}. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-sm text-slate-500">
              <span>Thiết kế bởi {DESIGN_CREDIT}</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                <span>Đang hoạt động</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}