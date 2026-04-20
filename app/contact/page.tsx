"use client";
import { Mail, Phone, MapPin, MessageSquare, Send, Globe, ArrowRight, Zap, Star, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { submitContact } from "@/app/actions/contact";
import { useTranslation } from "@/lib/i18n-context";

export default function ContactPage() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const res = await submitContact(formData);
    if (res.success) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }
    setLoading(false);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 overscroll-hidden">
      {/* Contact Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-600/10 skew-x-12 opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8 animate-in slide-in-from-left duration-700">
            <h1 className="text-6xl md:text-8xl font-black leading-tight uppercase tracking-tighter">
              {t("contact_page.hero_title")} <span className="text-primary-500 font-extrabold italic tracking-tight">{t("contact_page.hero_title_highlight")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-semibold">
               {t("contact_page.hero_subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* Form Side */}
              <div className="glass-card p-12 md:p-16 border-slate-100 bg-white shadow-2xl shadow-slate-200 relative transform hover:-translate-y-2 transition-all">
                 <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary-600 rounded-3xl flex items-center justify-center text-white shadow-2xl flex-shrink-0 z-10">
                    <Send className="w-10 h-10" />
                 </div>
                 
                 {success ? (
                    <div className="text-center py-16 space-y-6">
                       <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                          <CheckCircle className="w-12 h-12" />
                       </div>
                       <h3 className="text-3xl font-black text-slate-900">{t("contact_page.form_success_title")}</h3>
                       <p className="text-slate-600 font-medium text-lg leading-relaxed">{t("contact_page.form_success_desc")}</p>
                       <button onClick={() => setSuccess(false)} className="mt-8 px-8 py-3 bg-slate-100 font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors">{t("contact_page.form_btn_another")}</button>
                    </div>
                 ) : (
                    <form onSubmit={handleSubmit} className="space-y-8 relative z-0 mt-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <label className="text-slate-900 font-black uppercase tracking-widest text-xs">{t("contact_page.label_name")}</label>
                             <input 
                               type="text" 
                               name="name"
                               required
                               placeholder={t("contact_page.placeholder_name")} 
                               className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary-600 outline-none transition-all font-medium text-slate-700"
                             />
                          </div>
                          <div className="space-y-3">
                             <label className="text-slate-900 font-black uppercase tracking-widest text-xs">{t("contact_page.label_email")}</label>
                             <input 
                               type="email" 
                               name="email"
                               required
                               placeholder={t("contact_page.placeholder_email")} 
                               className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary-600 outline-none transition-all font-medium text-slate-700"
                             />
                          </div>
                       </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <label className="text-slate-900 font-black uppercase tracking-widest text-xs">{t("contact_page.label_phone")}</label>
                             <input 
                               type="tel" 
                               name="phone"
                               placeholder={t("contact_page.placeholder_phone")} 
                               className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary-600 outline-none transition-all font-medium text-slate-700"
                             />
                          </div>
                          <div className="space-y-3">
                             <label className="text-slate-900 font-black uppercase tracking-widest text-xs">{t("contact_page.label_service")}</label>
                             <select name="service" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary-600 outline-none transition-all font-medium text-slate-700">
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Medical Tourism">Medical Tourism</option>
                                <option value="Education Consultancy">Education Consultancy</option>
                                <option value="Business Facilitation">Business Facilitation</option>
                                <option value="Cargo & Logistics">Cargo & Logistics</option>
                             </select>
                          </div>
                       </div>

                       <div className="space-y-3">
                          <label className="text-slate-900 font-black uppercase tracking-widest text-xs">{t("contact_page.label_message")}</label>
                          <textarea 
                            name="message"
                            required
                            rows={5} 
                            placeholder={t("contact_page.placeholder_message")} 
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary-600 outline-none transition-all font-medium text-slate-700"
                          ></textarea>
                       </div>

                       <button disabled={loading} className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-primary-600 transition-all shadow-xl hover:shadow-primary-100 transform active:scale-95 flex items-center justify-center disabled:opacity-50">
                          {loading ? t("contact_page.btn_sending") : t("contact_page.btn_send")}
                          {!loading && <ArrowRight className="w-6 h-6 ml-3" />}
                       </button>
                    </form>
                 )}
              </div>

              {/* Info Side */}
              <div className="space-y-16">
                 <div className="space-y-10">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">{t("contact_page.visit_title")}</h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">{t("contact_page.visit_subtitle")}</p>
                 </div>

                 <div className="space-y-10">
                    <div className="flex items-start space-x-8 group">
                       <div className="w-16 h-16 bg-primary-100 rounded-3xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors flex-shrink-0 shadow-sm border border-primary-50/50">
                          <MapPin className="w-8 h-8" />
                       </div>
                       <div>
                          <h4 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-wide">{t("contact_page.office_title")}</h4>
                          <p className="text-lg text-slate-600 font-medium">Office 318, AOK Tower, Paramount Golf Forest, Greater Noida, India</p>
                       </div>
                    </div>

                    <div className="flex items-start space-x-8 group">
                       <div className="w-16 h-16 bg-secondary-100 rounded-3xl flex items-center justify-center text-secondary-600 group-hover:bg-secondary-600 group-hover:text-white transition-colors flex-shrink-0 shadow-sm border border-secondary-50/50">
                          <Mail className="w-8 h-8" />
                       </div>
                       <div>
                          <h4 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-wide">{t("contact_page.email_title")}</h4>
                          <p className="text-lg text-slate-600 font-medium break-all">equatorbridgespartners@gmail.com</p>
                       </div>
                    </div>

                     <div className="flex items-start space-x-8">
                       <a 
                         href="https://wa.me/917982408940" 
                         target="_blank"
                         rel="noopener noreferrer"
                         className="w-full p-8 bg-green-500 rounded-3xl text-white flex items-center justify-between hover:bg-green-600 transition-all shadow-xl shadow-green-100 transform hover:scale-[1.02] flex-shrink-0"
                       >
                          <div className="flex items-center space-x-6">
                             <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                                <MessageSquare className="w-8 h-8" />
                             </div>
                             <div>
                                <h4 className="text-2xl font-black mb-1 uppercase tracking-wider">{t("contact_page.whatsapp_title")}</h4>
                                <p className="text-lg font-medium opacity-90 text-white/80">+91 7982408940</p>
                             </div>
                          </div>
                          <Zap className="w-8 h-8 text-white animate-pulse" />
                       </a>
                    </div>
                 </div>

                 <div className="pt-10 border-t border-slate-200">
                    <div className="flex items-center space-x-4 mb-6">
                       <div className="flex text-yellow-500">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                       </div>
                       <span className="font-bold text-slate-700 text-sm italic">{t("contact_page.trusted_badge")}</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Map Area */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="h-[500px] w-full bg-slate-100 rounded-[3rem] shadow-2xl border-8 border-white overflow-hidden flex items-center justify-center relative">
              <div className="text-center space-y-4">
                 <Globe className="w-20 h-20 text-slate-300 mx-auto animate-spin-slow" />
                 <p className="text-xl font-black text-slate-400 uppercase tracking-widest">{t("contact_page.map_loading")}</p>
                 <Link href="#" className="inline-block py-3 px-10 bg-slate-900 text-white rounded-xl font-bold hover:bg-primary-600 transition-all shadow-2xl">{t("contact_page.map_btn")}</Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
