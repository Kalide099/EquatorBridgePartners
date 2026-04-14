"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  MapPin, 
  HelpCircle, 
  CreditCard,
  Zap,
  ShieldCheck,
  CalendarDays
} from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";
import { useState, useEffect } from "react";

// Client-side mapping for static generation params if needed, but here we use dynamic fetching
function getDynamicServices() {
  // In a real app, this would be a server-side fetch, but since we're in a "use client" component,
  // we'll fetch from the public API or just use the local import if possible.
  // For this fix, I'll use a standard approach.
  return require("@/lib/servicesData.json");
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const { t, locale } = useTranslation();
  const dynamicServices = getDynamicServices();
  const service = dynamicServices.find((s: any) => s.slug === params.service);

  if (!service) {
    notFound();
  }

  const IconWrapper = (LucideIcons as any)[service.iconType] || LucideIcons.Globe;
  const Icon = ({ className }: { className?: string }) => <IconWrapper className={className} />;

  // Multi-language content selection
  const title = locale === "en" ? service.title : (locale === "fr" ? (service.title_fr || service.title) : (service.title_pt || service.title));
  const fullDescription = locale === "en" ? service.fullDescription : (locale === "fr" ? (service.fullDescription_fr || service.fullDescription) : (service.fullDescription_pt || service.fullDescription));

  return (
    <div className="pt-24 overflow-hidden">
      {/* Dynamic Hero */}
      <section className="bg-slate-900 text-white py-24 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-600/10 skew-x-12" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="space-y-8 animate-in slide-in-from-left duration-700">
                <div className="inline-flex items-center space-x-2 bg-primary-600/30 px-4 py-2 rounded-full border border-primary-500/50">
                   <Icon className="w-5 h-5 text-primary-400" />
                   <span className="text-sm font-black uppercase tracking-widest text-primary-300">{t("service_detail.our_services")}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-tight uppercase italic">{title}</h1>
                <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
                   {fullDescription}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                   <Link href="/contact" className="btn-primary w-full sm:w-auto text-lg py-4 px-10 shadow-2xl shadow-primary-500/20">
                      {t("service_detail.cta_consult")}
                   </Link>
                   <Link href="/login" className="px-10 py-4 border-2 border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all w-full sm:w-auto text-center flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-3 text-secondary-500" />
                      {t("service_detail.cta_apply")}
                   </Link>
                </div>
             </div>
             <div className="relative group w-full h-full min-h-[400px]">
                <div className="absolute -inset-4 bg-primary-500/20 rounded-[3rem] blur-3xl group-hover:bg-primary-500/30 transition-all duration-700" />
                <div 
                   className="relative w-full h-full bg-slate-900 rounded-[3rem] border border-white/10 shadow-2xl transform md:hover:rotate-2 hover:scale-[1.02] transition-all duration-700 overflow-hidden"
                   style={{ backgroundImage: `url('/gallery/${service.slug}.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                   {/* Gradient overlay for cinematic effect */}
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                   <div className="absolute bottom-6 right-6">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
                         <Icon className="w-8 h-8 text-primary-400" />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">{t("service_detail.how_it_works")}</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium mt-4">{t("service_detail.how_it_works_subtitle")}</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-0 hidden md:block" />
              {[
                { title: t("service_detail.steps.step1_title"), desc: t("service_detail.steps.step1_desc") },
                { title: t("service_detail.steps.step2_title"), desc: t("service_detail.steps.step2_desc") },
                { title: t("service_detail.steps.step3_title"), desc: t("service_detail.steps.step3_desc") },
                { title: t("service_detail.steps.step4_title"), desc: t("service_detail.steps.step4_desc") }
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 bg-white p-8 rounded-2xl border border-slate-100 shadow-xl group hover:border-primary-600 transition-all">
                   <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-black mb-6 group-hover:bg-primary-600 transition-colors">
                      {idx + 1}
                   </div>
                   <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                   <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Countries & Documents Area */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Features List */}
              <div className="space-y-12">
                 <div className="flex items-center space-x-4">
                    <MapPin className="w-10 h-10 text-primary-600" />
                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{t("service_detail.core_features")}</h2>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {service.features.map((feature: string, idx: number) => (
                       <div key={idx} className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 group hover:shadow-lg transition-all">
                          <CheckCircle2 className="w-6 h-6 text-secondary-500 flex-shrink-0" />
                          <span className="font-bold text-slate-700 text-sm">{feature}</span>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Required Documents */}
              <div className="space-y-12">
                 <div className="flex items-center space-x-4">
                    <FileText className="w-10 h-10 text-primary-600" />
                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{t("service_detail.required_docs")}</h2>
                 </div>
                 <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 space-y-4">
                    {[
                      t("service_detail.docs.passport"),
                      t("service_detail.docs.forms"),
                      t("service_detail.docs.funding"),
                      t("service_detail.docs.transcripts"),
                      t("service_detail.docs.history")
                    ].map((doc, idx) => (
                       <div key={idx} className="flex items-start space-x-4 border-b border-slate-50 last:border-0 pb-4 last:pb-0">
                          <div className="w-8 h-8 rounded bg-primary-100 flex items-center justify-center flex-shrink-0">
                             <span className="text-primary-700 font-black text-xs">{idx + 1}</span>
                          </div>
                          <p className="text-slate-700 font-medium pt-1 italic">{doc}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Pricing Modules */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-20 space-y-6">
              <h2 className="section-title uppercase tracking-tighter text-6xl opacity-10 absolute -top-10 left-0 right-0 -z-0">{t("service_detail.packages_badge")}</h2>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight relative z-10">{t("service_detail.packages_title")}</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium relative z-10">{t("service_detail.packages_subtitle")}</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Basic Package */}
              <div className="glass-card flex flex-col justify-between border-2 border-slate-100 hover:border-primary-200 shadow-2xl shadow-slate-200 p-12 group transition-all transform hover:-translate-y-2">
                 <div>
                    <div className="flex justify-between items-start mb-10">
                       <div>
                          <p className="text-primary-600 font-black uppercase tracking-widest text-sm mb-2">{service.pricing.basic.name}</p>
                          <h3 className="text-5xl font-black text-slate-900">{service.pricing.basic.price}</h3>
                       </div>
                       <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                          <Zap className="w-7 h-7" />
                       </div>
                    </div>
                    <ul className="space-y-6 pt-10 border-t border-slate-100">
                       {service.pricing.basic.features.map((f: string, idx: number) => (
                          <li key={idx} className="flex items-center space-x-4">
                             <CheckCircle2 className="w-6 h-6 text-slate-300" />
                             <span className="text-lg font-medium text-slate-600">{f}</span>
                          </li>
                       ))}
                    </ul>
                 </div>
                 <Link href={`/payment?service=${service.slug}&package=basic`} className="mt-12 py-5 bg-slate-900 text-white w-full rounded-2xl font-black text-center text-xl hover:bg-slate-800 transition-all flex items-center justify-center group-hover:bg-primary-600">
                    {t("service_detail.select_standard")}
                    <CreditCard className="w-6 h-6 ml-3" />
                 </Link>
              </div>

              {/* Premium Package */}
              <div className="glass-card flex flex-col justify-between border-4 border-primary-600/20 shadow-2xl shadow-primary-200/50 p-12 bg-slate-900 text-white relative overflow-hidden group transition-all transform hover:-translate-y-2">
                 <div className="absolute -top-4 -right-10 bg-primary-600 text-white px-20 py-8 rotate-45 font-black uppercase tracking-widest text-xs z-10 shadow-2xl">{t("service_detail.premium_choice")}</div>
                 <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                       <div>
                          <p className="text-primary-400 font-black uppercase tracking-widest text-sm mb-2">{service.pricing.premium.name}</p>
                          <h3 className="text-5xl font-black text-white">{service.pricing.premium.price}</h3>
                       </div>
                       <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center">
                          <ShieldCheck className="w-7 h-7" />
                       </div>
                    </div>
                    <ul className="space-y-6 pt-10 border-t border-white/10">
                       {service.pricing.premium.features.map((f: string, idx: number) => (
                          <li key={idx} className="flex items-center space-x-4">
                             <CheckCircle2 className="w-6 h-6 text-primary-500" />
                             <span className="text-lg font-medium text-slate-400">{f}</span>
                          </li>
                       ))}
                    </ul>
                 </div>
                 <Link href={`/payment?service=${service.slug}&package=premium`} className="mt-12 py-5 bg-primary-600 text-white w-full rounded-2xl font-black text-center text-xl hover:bg-primary-700 transition-all flex items-center justify-center relative z-10 shadow-2xl shadow-primary-900/50">
                    {t("service_detail.proceed_vip")}
                    <ArrowRight className="w-6 h-6 ml-3" />
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Placeholder */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">{t("service_detail.common_questions")}</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium mt-4">{t("service_detail.faq_subtitle")}</p>
           </div>
           
           <div className="space-y-6">
              {[
                { q: "How long does the visa processing take?", a: "Typically 5-15 business days depending on the destination and service type." },
                { q: "Do you provide on-ground airport support?", a: "Yes, both our Standard and Premium packages include meet-and-greet services." },
                { q: "Can I upgrade my package mid-process?", a: "Absolutely! Contact your regional manager to adjust your service tier." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 flex items-start space-x-6">
                   <HelpCircle className="w-8 h-8 text-primary-600 flex-shrink-0" />
                   <div>
                      <h4 className="text-xl font-black text-slate-900 mb-4">{faq.q}</h4>
                      <p className="text-slate-600 font-medium leading-relaxed italic border-l-4 border-slate-100 pl-6">{faq.a}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
