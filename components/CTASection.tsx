"use client";
import Link from "next/link";
import { MessageSquare, ArrowRight, Zap } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 premium-bg relative overflow-hidden border-t border-white/5">
      {/* Premium dark glow background */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-full bg-primary-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-12 bg-slate-900/50 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
          {/* subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent opacity-50" />
          
          <div className="relative z-10">
             <div className="inline-flex items-center space-x-2 bg-primary-500/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-primary-500/20 mb-8 transition-colors hover:bg-primary-500/20">
                <Zap className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-black uppercase tracking-widest text-primary-300">{t("cta_section.badge")}</span>
             </div>

             <h2 className="text-5xl md:text-7xl font-black leading-[1.1] text-white tracking-tight mb-8">
                {t("cta_section.title")}
             </h2>
             
             <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium mb-12">
                {t("cta_section.subtitle")}
             </p>

             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link 
                  href="/contact" 
                  className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all flex items-center justify-center w-full sm:w-auto transform hover:scale-105 shadow-2xl shadow-white/10 border border-white/20"
                >
                   {t("cta_section.btn_start")}
                   <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
                <a 
                  href="https://wa.me/917982408940" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-primary-600/20 backdrop-blur-xl border border-primary-500/50 text-white rounded-2xl font-black text-lg hover:bg-primary-600/40 transition-all flex items-center justify-center w-full sm:w-auto transform hover:scale-105 shadow-2xl shadow-primary-900/20"
                >
                   <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center mr-3 border border-primary-500/30">
                      <MessageSquare className="w-5 h-5 text-primary-400" />
                   </div>
                   {t("cta_section.btn_whatsapp")}
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
