"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n-context";
import { ArrowRight, Globe, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const Hero = ({ carouselImages = [] }: { carouselImages?: { url: string, description?: string }[] }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden premium-bg font-sans">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-600/20 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-600/10 rounded-full blur-[100px] animate-float pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* Dynamic Carousel Background */}
      {carouselImages.length > 0 && (
         <div className="absolute inset-0 z-0">
            {carouselImages.map((img, idx) => (
               <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                  <Image src={img.url} alt="" fill className="object-cover" priority={idx === 0} />
               </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
         </div>
      )}

      {/* Decorative Background fallback */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6">
          <div className="space-y-6 md:space-y-10 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center space-x-3 bg-slate-800/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-slate-300 italic">
                {t("hero.badge")}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] md:leading-[0.95] tracking-tighter uppercase italic">
              {t("hero.title")} <br />
              <span className="text-primary-500 not-italic font-extrabold">{t("hero.title_highlight")}</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed font-medium max-w-xl italic border-l-4 border-primary-500 pl-6 md:pl-8">
              {t("hero.description")}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link href="/services" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 py-4 px-8 text-sm md:text-base flex items-center justify-center group shadow-2xl rounded-2xl transition-all font-black uppercase tracking-widest">
                {t("hero.cta_explore")}
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href="/contact" className="bg-primary-600/20 backdrop-blur-xl border border-primary-500/30 text-white hover:bg-primary-600/40 py-4 px-8 rounded-2xl font-black uppercase text-sm md:text-base tracking-widest transition-all text-center flex items-center justify-center shadow-2xl shadow-primary-500/20">
                {t("hero.cta_consult")}
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-800/80 backdrop-blur-md shadow-xl border border-white/10 rounded-2xl flex items-center justify-center text-secondary-400">
                     <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="font-black text-white uppercase text-[10px] tracking-widest">{t("hero.verified")}</p>
                     <p className="text-xs text-slate-400 font-bold italic">Certified excellence</p>
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-800/80 backdrop-blur-md shadow-xl border border-white/10 rounded-2xl flex items-center justify-center text-primary-400">
                     <Zap className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="font-black text-white uppercase text-[10px] tracking-widest">{t("hero.gateway")}</p>
                     <p className="text-xs text-slate-400 font-bold italic">Fast & seamless</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="relative animate-in zoom-in duration-1000 hidden lg:flex flex-col items-end justify-center">
             
             {/* Dynamic Hero Sub-text synced with slide */}
             {carouselImages.length > 0 && carouselImages[currentIndex]?.description && (
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 mb-8 text-left max-w-sm mr-auto animate-fade-in-up">
                   <p className="text-2xl font-black text-white italic tracking-tight">&quot;{carouselImages[currentIndex].description}&quot;</p>
                   <p className="text-primary-500 text-xs font-black uppercase tracking-widest mt-2">— Platform Focus</p>
                </div>
             )}

             <div className="relative z-10 flex flex-col items-center justify-center w-full min-w-[320px] aspect-[4/5] group">
                <div className="text-center text-white p-12 relative z-10">
                   <p className="text-7xl md:text-8xl lg:text-[7rem] font-black mb-6 italic tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">650+</p>
                   <p className="text-lg md:text-xl font-black uppercase tracking-[0.2em] leading-relaxed opacity-100 drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)]">{t("hero.stats_clients")}</p>
                </div>
             </div>
             
             {/* Floating UI Elements */}
             <div className="absolute bottom-10 -left-10 bg-slate-800/80 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl z-20 space-y-2 border border-white/10 transform hover:-rotate-3 transition-transform">
                <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center justify-center text-green-400">
                      <Zap className="w-5 h-5 fill-current" />
                   </div>
                   <p className="font-black text-white text-lg uppercase tracking-tight italic">24/7</p>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t("hero.support")}</p>
             </div>
             
             {/* Carousel Progress Indicators */}
             {carouselImages.length > 1 && (
               <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full pr-8 flex flex-col gap-3 z-20 hidden md:flex">
                  {carouselImages.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-2 rounded-full transition-all duration-500 ${idx === currentIndex ? 'h-8 bg-primary-500' : 'h-2 bg-white/30'}`}
                      />
                  ))}
               </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
