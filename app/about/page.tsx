import Link from "next/link";
import { Info, Target, Eye, MapPin, Mail, Phone, Clock, ShieldCheck, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="bg-slate-50 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/50 to-transparent -z-0 opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]">
              About Who <span className="text-primary-600">We Are</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-semibold">
              Your trusted partner in navigating the cross-continental landscape of opportunities between Africa and Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="glass-card flex flex-col items-center text-center p-12 hover:border-primary-600 transition-all transform hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all transform hover:rotate-3">
                <Target className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-primary-700">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                To simplify and facilitate seamless international transitions for Africans through specialized, high-integrity services in medical care, world-class education, and expanding business horizons.
              </p>
            </div>
            
            <div className="glass-card flex flex-col items-center text-center p-12 hover:border-secondary-600 transition-all transform hover:-translate-y-2 group">
               <div className="w-20 h-20 bg-secondary-100 rounded-2xl flex items-center justify-center text-secondary-600 mb-8 group-hover:bg-secondary-600 group-hover:text-white transition-all transform hover:-rotate-3">
                  <Eye className="w-10 h-10" />
               </div>
               <h2 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-secondary-700">Our Vision</h2>
               <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  To become the leading global gateway that fosters life-changing connections between African nations and Asian expertise, delivering excellence with every interaction.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile / Detail */}
      <section className="py-24 bg-slate-900 text-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-10">
                  <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                     <span className="text-sm font-black uppercase tracking-widest text-primary-400">Our Reputation</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black leading-tight">
                     Pioneering Excellence in Cross-Regional Partnership
                  </h2>
                  <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
                     Equator Bridges Partners OPC Pvt Ltd operates with a deep commitment to professionalism and transparency. We understand the unique challenges of international travel and relocation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                     <div className="flex items-start space-x-4">
                        <ShieldCheck className="w-8 h-8 text-secondary-400" />
                        <div>
                           <p className="text-xl font-bold">100% Verified</p>
                           <p className="text-slate-500 font-medium">Accredited international partners</p>
                        </div>
                     </div>
                     <div className="flex items-start space-x-4">
                        <Globe className="w-8 h-8 text-primary-400" />
                        <div>
                           <p className="text-xl font-bold">Pan-Asian Reach</p>
                           <p className="text-slate-500 font-medium">Regional offices across India & UAE</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="relative">
                   <div className="bg-gradient-to-br from-primary-600 to-secondary-600 h-[500px] w-full rounded-2xl p-1 shadow-2xl skew-x-3 transition-transform hover:skew-x-0">
                      <div className="bg-slate-900 w-full h-full rounded-2xl flex items-center justify-center text-center p-12">
                         <div>
                            <p className="text-6xl font-black mb-6">OPC</p>
                            <p className="text-2xl font-bold text-slate-400 uppercase tracking-widest">ONE PERSON COMPANY</p>
                            <div className="mt-12 pt-12 border-t border-slate-800">
                               <p className="text-lg font-medium opacity-80">Registered under the Ministry of Corporate Affairs (MCA), India.</p>
                            </div>
                         </div>
                      </div>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* Office Representative Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="section-title">Visit Our Global Headquarters</h2>
              <p className="section-subtitle">A strategic hub located in Greater Noida, India, connecting our regional offices and diverse service centers.</p>
           </div>
           
           <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 md:p-20 shadow-xl flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 space-y-12">
                 <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl flex-shrink-0">
                       <MapPin className="w-8 h-8" />
                    </div>
                    <div>
                       <h3 className="text-2xl font-black text-slate-900 mb-2">Office Address</h3>
                       <p className="text-xl font-medium text-slate-600 leading-relaxed">Office 318, AOK Tower, Paramount Golf Forest, Greater Noida, India</p>
                    </div>
                 </div>

                 <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-secondary-600 rounded-2xl flex items-center justify-center text-white shadow-xl flex-shrink-0">
                       <Mail className="w-8 h-8" />
                    </div>
                    <div>
                       <h3 className="text-2xl font-black text-slate-900 mb-2">Email Support</h3>
                       <p className="text-xl font-medium text-slate-600 transition-colors hover:text-primary-600 break-all">diambakaglobalhospitalityservi@gmail.com</p>
                    </div>
                 </div>

                 <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-xl flex-shrink-0">
                       <Phone className="w-8 h-8" />
                    </div>
                    <div>
                       <h3 className="text-2xl font-black text-slate-900 mb-2">WhatsApp / Phone</h3>
                       <p className="text-xl font-medium text-slate-600">+91 7982408940</p>
                       <p className="text-sm text-slate-400 mt-2 font-black uppercase tracking-wider">Available 24/7 for urgent consultations</p>
                    </div>
                 </div>
              </div>
              
              <div className="flex-1">
                 <div className="w-full h-96 bg-slate-200 rounded-3xl overflow-hidden relative shadow-2xl group border-8 border-white">
                    <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
                       <MapPin className="w-12 h-12 text-slate-400" />
                       <span className="ml-4 font-bold text-slate-400">Interactive Map Preview</span>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-primary-900/40 flex items-center justify-center text-white">
                       <Link href="/contact" className="px-8 py-3 bg-white text-primary-600 rounded-xl font-bold shadow-2xl">Open in Maps</Link>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
