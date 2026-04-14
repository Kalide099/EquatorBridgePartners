"use client";
import { useState } from "react";
import { Truck, Package, Globe, ArrowRight, Calculator, ShieldCheck, Zap, MapPin } from "lucide-react";

export default function CargoPage() {
  const [weight, setWeight] = useState("");
  const [origin, setOrigin] = useState("India");
  const [destination, setDestination] = useState("DR Congo");
  
  const pricePerKg = 12.5; // Dummy logic
  const estimatedTotal = weight ? (parseFloat(weight) * pricePerKg).toFixed(2) : "0.00";

  return (
    <div className="pt-24 min-h-screen bg-slate-50 overscroll-hidden">
      {/* Cargo Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-600/10 skew-x-12 opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8 animate-in slide-in-from-left duration-700">
             <div className="inline-flex items-center space-x-2 bg-primary-600/30 px-4 py-2 rounded-full border border-primary-500/50">
                <Truck className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-black uppercase tracking-widest text-primary-300">Logistics Division</span>
             </div>
             <h1 className="text-6xl md:text-8xl font-black leading-tight uppercase tracking-tighter">Global <span className="text-primary-500 italic tracking-tight">Cargo</span></h1>
             <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-semibold">
                Seamless door-to-door shipping solutions connecting Asian manufacturers with African markets. Fast, secure, and fully tracked.
             </p>
          </div>
        </div>
      </section>

      {/* Calculator & Booking Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
              {/* Form Side */}
              <div className="glass-card p-12 md:p-16 border-slate-100 bg-white shadow-2xl shadow-slate-200/50 transform hover:-translate-y-2 transition-all">
                 <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight">Book a Shipment</h2>
                 
                 <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <label className="text-slate-900 font-black uppercase tracking-widest text-xs">Origin Country</label>
                          <select 
                            value={origin} 
                            onChange={(e) => setOrigin(e.target.value)}
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary-600 outline-none transition-all font-medium text-slate-700"
                          >
                             <option>India</option>
                             <option>UAE</option>
                             <option>China</option>
                             <option>Malaysia</option>
                          </select>
                       </div>
                       <div className="space-y-3">
                          <label className="text-slate-900 font-black uppercase tracking-widest text-xs">Destination</label>
                          <select 
                            value={destination} 
                            onChange={(e) => setDestination(e.target.value)}
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary-600 outline-none transition-all font-medium text-slate-700"
                          >
                             <option>DR Congo</option>
                             <option>Nigeria</option>
                             <option>Kenya</option>
                             <option>Angola</option>
                          </select>
                       </div>
                    </div>

                    <div className="space-y-3">
                       <label className="text-slate-900 font-black uppercase tracking-widest text-xs">Parcel Weight (kg)</label>
                       <div className="relative group">
                          <Package className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-primary-600" />
                          <input 
                            type="number" 
                            placeholder="0.00" 
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full pl-16 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-primary-600 transition-all font-bold text-xl"
                          />
                       </div>
                    </div>

                    <div className="bg-primary-600 text-white p-8 rounded-3xl flex items-center justify-between shadow-2xl shadow-primary-200">
                       <div className="space-y-1">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Estimated Shipping cost</p>
                          <h3 className="text-4xl font-black">${estimatedTotal}</h3>
                       </div>
                       <Calculator className="w-10 h-10 text-white/50" />
                    </div>

                    <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-primary-600 transition-all shadow-xl hover:shadow-primary-100 transform active:scale-95 flex items-center justify-center">
                       Proceed to Booking
                       <ArrowRight className="w-6 h-6 ml-3" />
                    </button>
                 </form>
              </div>

              {/* Info Side */}
              <div className="space-y-12 flex flex-col justify-center">
                 <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">Why Ship With <span className="text-primary-600">Equator Bridges?</span></h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium italic">We handle the complexity of international customs and logistics so you can focus on building your business.</p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { title: "Real-time Tracking", desc: "Monitor your shipment 24/7 across borders.", icon: Globe, color: "text-blue-600", bg: "bg-blue-100" },
                      { title: "Secure Handling", desc: "Fragile and bulk cargo handled with export-grade care.", icon: ShieldCheck, color: "text-green-600", bg: "bg-green-100" },
                      { title: "Express Air", desc: "5-7 days delivery between major Asia-Africa hubs.", icon: Zap, color: "text-orange-600", bg: "bg-orange-100" },
                      { title: "Door-to-Door", desc: "No port hassle. We deliver direct to your warehouse.", icon: MapPin, color: "text-purple-600", bg: "bg-purple-100" }
                    ].map((feature, idx) => (
                       <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-2xl transition-all group border-b-4 border-b-transparent hover:border-b-slate-200">
                          <div className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6`}>
                             <feature.icon className="w-6 h-6" />
                          </div>
                          <h4 className="text-lg font-black text-slate-900 mb-3">{feature.title}</h4>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Tracking Placeholder Area */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-primary-600/5 -z-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
           <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Track Your Shipment</h2>
           <div className="relative group max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Enter Tracking ID (e.g. EB-12345678)" 
                className="w-full px-10 py-6 bg-white/5 border border-white/10 rounded-2xl outline-none focus:bg-white/10 transition-all font-black text-2xl placeholder:opacity-20 text-center"
              />
              <div className="absolute inset-0 border-2 border-primary-500 rounded-2xl opacity-0 group-focus-within:opacity-40 pointer-events-none transition-opacity" />
           </div>
           <button className="px-12 py-5 bg-primary-600 text-white rounded-2xl font-black text-xl hover:bg-primary-700 transition-all shadow-2xl shadow-primary-900/50 transform hover:scale-105 active:scale-95">
              Track Status
           </button>
        </div>
      </section>
    </div>
  );
}
