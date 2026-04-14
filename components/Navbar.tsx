"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, User, LogIn } from "lucide-react";

import { useTranslation } from "@/lib/i18n-context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useTranslation();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then(res => res.json())
      .then(data => setUser(data.user))
      .catch(() => setUser(null));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleLogout = async () => {
    await fetch("/logout");
    window.location.href = "/";
  };

  const navLinks = [
    { name: t("common.home"), href: "/" },
    { name: t("common.about"), href: "/about" },
    { name: t("common.services"), href: "#services-dropdown" },
    { name: t("common.countries"), href: "/countries" },
    { name: t("common.gallery"), href: "/#gallery" },
    { name: t("common.cargo"), href: "/cargo" },
    { name: t("common.contact"), href: "/contact" },
  ];

  const services = [
    { name: "Medical Tourism", href: "/services/medical-tourism" },
    { name: "Education", href: "/services/education-consultancy" },
    { name: "Business", href: "/services/business-facilitation" },
    { name: "Cargo", href: "/services/cargo-and-logistics" },
    { name: "Hospitality", href: "/services/catering-and-hospitality" },
    { name: "Travel/Events", href: "/services/travel-and-event-management" },
    { name: "Medical Training", href: "/services/medical-training" },
    { name: "Technical Training", href: "/services/technical-training" },
  ];

  const languages = [
    { code: "en", name: "English", flag: "EN" },
    { code: "fr", name: "Français", flag: "FR" },
    { code: "pt", name: "Português", flag: "PT" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3" : "bg-gradient-to-b from-slate-950/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-lg p-1 shadow-lg shadow-primary-500/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Equator Bridges Logo" className="w-full h-full object-contain" />
            </div>
            <span className={`font-black text-xl tracking-wide hidden md:block text-white`}>
              EQUATOR BRIDGES
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href === "#services-dropdown" ? (
                <div key={link.name} className="relative group">
                  <button className="text-slate-300 hover:text-white font-bold transition-colors flex items-center tracking-wide">
                    {link.name}
                  </button>
                  <div className="absolute left-0 mt-2 w-56 bg-slate-900 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-white/10 overflow-hidden">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-colors border-b border-white/5 last:border-0"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-slate-300 hover:text-white font-bold transition-colors tracking-wide ${
                    pathname === link.href ? "text-primary-400 font-black" : ""
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative group mr-4">
               <button className="flex items-center space-x-2 text-white hover:text-primary-400 font-black text-xs uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 transition-all">
                  <Globe className="w-4 h-4" />
                  <span>{locale}</span>
               </button>
               <div className="absolute right-0 mt-2 w-40 bg-slate-900 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-white/10 overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLocale(lang.code as any)}
                      className={`w-full text-left px-4 py-3 text-xs font-black uppercase tracking-tight hover:bg-white/10 hover:text-white transition-colors border-b border-white/5 last:border-0 ${locale === lang.code ? 'text-primary-500 bg-white/5' : 'text-slate-400'}`}
                    >
                      {lang.name}
                    </button>
                  ))}
               </div>
            </div>

            {user ? (
              <>
                <Link 
                  href={user.role === "ADMIN" ? "/admin/dashboard" : "/dashboard"} 
                  className="flex items-center text-slate-300 hover:text-white font-bold transition-colors tracking-wide"
                >
                  <User className="w-4 h-4 mr-2" />
                  {t("common.dashboard")}
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-red-600/20 text-red-400 border border-red-600/30 py-2.5 px-6 rounded-xl font-black text-xs uppercase hover:bg-red-600 hover:text-white transition-all"
                >
                  {t("common.logout")}
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="flex items-center text-slate-300 hover:text-white font-bold transition-colors tracking-wide">
                  <LogIn className="w-4 h-4 mr-2" />
                  {t("common.login")}
                </Link>
                <Link href="/register" className="btn-primary py-2.5 px-6 shadow-lg shadow-primary-500/20">
                  {t("common.getStarted")}
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-white/5 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-bold text-slate-300 hover:bg-white/5 hover:text-white rounded-xl transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Lang Switcher */}
            <div className="grid grid-cols-3 gap-2 px-3 py-4">
               {languages.map((lang) => (
                 <button
                   key={lang.code}
                   onClick={() => { setLocale(lang.code as any); setIsOpen(false); }}
                   className={`px-3 py-2 text-xs font-black rounded-xl border bg-white/5 transition-all ${locale === lang.code ? 'border-primary-500 text-primary-400' : 'border-white/10 text-slate-400'}`}
                 >
                   {lang.flag}
                 </button>
               ))}
            </div>

            <div className="border-t border-white/5 pt-4 space-y-2">
              {user ? (
                <>
                  <Link 
                    href={user.role === "ADMIN" ? "/admin/dashboard" : "/dashboard"} 
                    onClick={() => setIsOpen(false)} 
                    className="block px-3 py-3 text-base font-bold text-slate-300 hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {t("common.dashboard")}
                  </Link>
                  <button 
                    onClick={() => { handleLogout(); setIsOpen(false); }} 
                    className="w-full text-left block px-3 py-3 text-base font-bold text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                  >
                    {t("common.logout")}
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-bold text-slate-300 hover:bg-white/5 rounded-xl transition-colors">
                    {t("common.login")}
                  </Link>
                  <Link href="/register" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-black text-center bg-primary-600 text-white rounded-xl shadow-lg shadow-primary-500/20">
                    {t("common.getStarted")}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
