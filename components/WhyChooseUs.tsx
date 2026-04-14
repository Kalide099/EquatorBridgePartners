"use client";
import { CheckCircle2, Globe, Users, TrendingUp } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const points = [
    {
      title: t("whyUs.p1_title"),
      description: t("whyUs.p1_desc"),
      icon: Globe,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: t("whyUs.p2_title"),
      description: t("whyUs.p2_desc"),
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: t("whyUs.p3_title"),
      description: t("whyUs.p3_desc"),
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
       title: t("whyUs.p4_title"),
       description: t("whyUs.p4_desc"),
       icon: CheckCircle2,
       color: "text-orange-600",
       bg: "bg-orange-100",
    }
  ];

  return (
    <section className="py-32 premium-bg relative overflow-hidden border-y border-white/5">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] opacity-30 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 p-10 opacity-5 pointer-events-none">
         <Globe className="w-96 h-96 text-white" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">{t("whyUs.title")}</h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium mb-12">
               {t("whyUs.subtitle")}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {points.map((point, index) => (
                <div key={index} className="flex flex-col space-y-4 group">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-900 border border-white/10 shadow-inner group-hover:scale-110 group-hover:shadow-primary-500/20 transition-all duration-300`}>
                     <point.icon className={`w-7 h-7 text-primary-500 group-hover:text-primary-400 transition-colors`} />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-wide text-white group-hover:text-primary-400 transition-colors">{point.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group perspective-1000">
             <div className="absolute -inset-4 bg-primary-600/10 rounded-[3rem] blur-2xl group-hover:bg-primary-600/20 transition-all duration-500" />
             <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-white/10 p-4 xl:p-8 overflow-hidden transform hover:-rotate-1 transition-transform duration-500">
                <div className="w-full aspect-square md:aspect-auto md:h-96 bg-gradient-to-br from-slate-950 to-primary-950 rounded-[2rem] flex flex-col items-center justify-center text-white text-center p-12 border border-white/5 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl" />
                   <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-500/20 rounded-full blur-3xl" />
                   
                   <div className="relative z-10">
                      <h4 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter drop-shadow-xl text-primary-400">15k<span className="text-white">+</span></h4>
                      <p className="text-lg md:text-xl font-bold opacity-80 uppercase tracking-widest text-slate-300">Clients Successfully Facilitated Since Incorporation</p>
                      <div className="mt-10 flex justify-center space-x-3">
                         {[1,2,3,4,5].map(i => <div key={i} className="w-3 h-3 bg-white/20 rounded-full" />)}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
