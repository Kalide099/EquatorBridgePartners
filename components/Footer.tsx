"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin, Globe } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="premium-bg border-t border-white/5 text-slate-300">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-lg p-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="Equator Bridges Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white uppercase">
                EQUATOR BRIDGES
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              {t("footer.desc")}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-primary-600 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-primary-600 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-primary-600 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">{t("footer.quick_links")}</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">{t("common.about")}</Link></li>
              <li><Link href="/services/medical-tourism" className="hover:text-primary-400 transition-colors">Medical Tourism</Link></li>
              <li><Link href="/services/education-consultancy" className="hover:text-primary-400 transition-colors">Education Consultancy</Link></li>
              <li><Link href="/services/medical-training" className="hover:text-primary-400 transition-colors">Medical Training</Link></li>
              <li><Link href="/services/technical-training" className="hover:text-primary-400 transition-colors">Technical Training</Link></li>
              <li><Link href="/cargo" className="hover:text-primary-400 transition-colors">{t("common.cargo")}</Link></li>
              <li><Link href="/countries" className="hover:text-primary-400 transition-colors">{t("common.countries")}</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">{t("common.contact")}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">{t("footer.policies")}</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Refund Policy</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">{t("footer.contact_info")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-sm">Office 318, AOK Tower, Paramount Golf Forest, Greater Noida, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-sm">diambakaglobalhospitalityservi@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-sm">+91 7982408940</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-sm">English / French / Português</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {currentYear} Equator Bridges Partners OPC Pvt Ltd. {t("footer.rights")}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-slate-500">{t("footer.made_with")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
