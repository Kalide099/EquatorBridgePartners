"use client";
import Link from "next/link";
import { Globe, MapPin, ArrowRight } from "lucide-react";
import { countries } from "@/lib/data";
import { useTranslation } from "@/lib/i18n-context";

const CountriesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 premium-bg overflow-hidden">
      {/* Premium Business Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-900/10 rounded-full blur-[120px] opacity-50 transform translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-900/10 rounded-full blur-[100px] opacity-40 transform -translate-x-1/3 translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
          <div className="max-w-3xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">{t("countries_section.title")}</h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mt-6 font-medium">
              {t("countries_section.subtitle")}
            </p>
          </div>
          <Link href="/countries" className="mt-8 md:mt-0 flex items-center text-primary-400 font-bold hover:text-white transition-colors bg-primary-900/20 px-6 py-4 rounded-xl border border-primary-500/30 group">
            {t("countries_section.view_all")}
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.slice(0, 6).map((country, index) => (
            <div key={index} className="group relative p-8 bg-slate-900/60 backdrop-blur-xl rounded-[2rem] border border-white/5 transition-all duration-500 hover:bg-slate-800 hover:shadow-2xl hover:shadow-primary-500/10 hover:border-primary-500/50 flex flex-col justify-between overflow-hidden">
               {/* Accent glow on hover */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div className="flex items-start space-x-6 mb-8">
                  <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-primary-500 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-500 shrink-0">
                     <MapPin className="w-8 h-8" />
                  </div>
                  <div className="pt-2">
                     <h3 className="text-2xl font-black text-white uppercase tracking-wide group-hover:text-primary-400 transition-colors">{country.name}</h3>
                  </div>
               </div>
               
               <div className="pt-6 border-t border-white/5 mt-auto">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">{t("countries_section.services_available")}</p>
                  <div className="flex flex-wrap gap-2">
                     {country.services.map((svc, sIdx) => (
                        <span key={sIdx} className="px-3 py-1.5 bg-white/5 text-slate-300 text-xs font-semibold rounded-lg border border-white/5">
                           {t(`services_list.${svc}`)}
                        </span>
                     ))}
                  </div>
               </div>
               
               {/* Arrow button bottom right absolute */}
               <div className="absolute bottom-8 right-8 w-12 h-12 rounded-xl bg-primary-600/10 border border-primary-500/20 text-primary-400 flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="w-6 h-6" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
