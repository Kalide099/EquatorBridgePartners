import { MapPin, Globe, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { countries } from "@/lib/data";

export default function CountriesPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Countries Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/30 skew-x-12" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">Our Global <span className="text-secondary-400 font-extrabold uppercase tracking-tight">Network</span></h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-semibold">
               Operating across 2 continents with dedicated on-ground teams in every region to ensure your success.
            </p>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {countries.map((country, idx) => (
                <div key={idx} className="group relative bg-white rounded-[2rem] border-2 border-slate-100 p-10 transition-all duration-300 hover:shadow-2xl hover:border-primary-600/20 transform hover:-translate-y-2">
                   {/* Flag/Icon Placeholder */}
                   <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 border border-slate-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                      <Globe className="w-8 h-8" />
                   </div>
                   
                   <h2 className="text-3xl font-black text-slate-900 mb-6">{country.name}</h2>
                   
                   <div className="space-y-4 mb-10 pt-6 border-t border-slate-50">
                      <p className="text-slate-400 font-extrabold uppercase tracking-widest text-xs">Available Services</p>
                      <div className="flex flex-wrap gap-3 pt-2">
                        {country.services.map((service, sIdx) => (
                           <div key={sIdx} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm font-bold text-slate-700 group-hover:bg-primary-50 transition-colors">
                              {service}
                           </div>
                        ))}
                      </div>
                   </div>

                   <Link href="/contact" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center hover:bg-primary-600 shadow-xl transition-all group-hover:shadow-primary-100 transform active:scale-95">
                      Contact Regional Office
                      <ArrowRight className="w-5 h-5 ml-2" />
                   </Link>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Why Our Network Section */}
      <section className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl overflow-hidden relative">
               <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-600/10 skew-y-12 opacity-50 transition-all duration-500 hover:skew-y-0" />
               <div className="flex-1 space-y-8 relative z-10">
                  <h2 className="text-4xl md:text-5xl font-black leading-tight">Verified On-Ground Operations</h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed">
                     Every country in our network is managed by certified Equator Bridges partners who handle all legal and logistic aspects locally.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                     <div className="flex items-center space-x-4">
                        <CheckCircle2 className="w-8 h-8 text-secondary-500" />
                        <span className="text-lg font-bold">24hr Turnaround</span>
                     </div>
                     <div className="flex items-center space-x-4">
                        <CheckCircle2 className="w-8 h-8 text-primary-500" />
                        <span className="text-lg font-bold">Local Legal Aide</span>
                     </div>
                  </div>
               </div>
               <div className="flex-1 relative z-10">
                  <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 text-center">
                     <p className="text-primary-400 font-black uppercase tracking-widest text-sm mb-4">Network Growth</p>
                     <p className="text-7xl font-black mb-6">9+</p>
                     <p className="text-xl font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Countries and Growing Across Asia Africa</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
