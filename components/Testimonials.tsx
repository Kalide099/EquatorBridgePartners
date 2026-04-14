"use client";
import { Quote, Star } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";

const Testimonials = ({ testimonialsData = [] }: { testimonialsData?: any[] }) => {
  const { t } = useTranslation();

  return (
    <section className="py-32 premium-bg relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(37,99,235,0.1),transparent)] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary-900/10 rounded-full blur-[120px] opacity-40 transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">{t("testimonials.title")}</h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium mt-4">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((test: any, index: number) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-xl p-10 rounded-[2rem] border border-white/5 shadow-2xl hover:shadow-primary-500/10 hover:border-primary-500/50 transition-all duration-500 flex flex-col justify-between group">
               <div>
                  <div className="flex mb-8 text-yellow-500/80">
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current mr-1" />)}
                  </div>
                  <Quote className="w-10 h-10 text-primary-500/30 mb-8 group-hover:text-primary-500 transition-colors" />
                  <p className="text-lg text-slate-300 leading-relaxed font-medium mb-12 italic">
                     &quot;{test.text}&quot;
                  </p>
               </div>
               <div className="flex items-center space-x-5 pt-6 border-t border-white/5 mt-auto">
                  <div className="w-14 h-14 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center text-primary-400 font-black text-xl uppercase shadow-inner group-hover:bg-primary-600 group-hover:text-white transition-colors duration-500">
                     {test.name.split(" ").map((n: string) => n[0]).join("")}
                  </div>
                  <div>
                     <p className="font-extrabold text-white text-lg">{test.name}</p>
                     <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{test.role} • {test.location}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
