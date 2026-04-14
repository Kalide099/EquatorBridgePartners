"use client";
import { useState } from "react";
import { CreditCard, Search, MoreVertical, CheckCircle2, ShieldCheck, Zap, Globe, ArrowUpRight, ShoppingCart, Calendar, MapPin, TrendingUp, Filter } from "lucide-react";
import Link from "next/link";

export default function AdminPaymentManagement() {
  const [filter, setFilter] = useState("all");
  
  const payments = [
    { id: "TXN1024", user: "Jean-Pierre Kabangu", service: "Medical Tourism", package: "Premium", amount: "$1,200.00", status: "SUCCESS", gateway: "STRIPE", date: "2025-06-12", country: "DR Congo" },
    { id: "TXN1055", user: "Amara Okonkwo", service: "Education Consultancy", package: "Standard", amount: "$120.00", status: "SUCCESS", gateway: "RAZORPAY", date: "2025-06-11", country: "Nigeria" },
    { id: "TXN1089", user: "Moussa Traoré", service: "Business Facilitation", package: "Standard", amount: "$500.00", status: "PENDING", gateway: "FLW", date: "2025-06-10", country: "Mali" },
    { id: "TXN1090", user: "Abiola Adeniyi", service: "Cargo & Logistics", package: "Bulk", amount: "$3,450.00", status: "FAILED", gateway: "STRIPE", date: "2025-06-09", country: "Nigeria" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900/5 -skew-x-12 opacity-50 -z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 space-y-8 md:space-y-0">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase tracking-tighter italic">Global <span className="text-primary-600 font-extrabold not-italic">Revenue Hub</span></h1>
            <p className="text-slate-500 font-extrabold uppercase tracking-widest text-[10px] mt-2 italic flex items-center space-x-2">
               <ShieldCheck className="w-4 h-4 text-primary-500 animate-pulse" />
               <span>Audited Financial Records • Node: EX_PAY_GLOBAL_01</span>
            </p>
          </div>
          <div className="flex items-center space-x-6 w-full md:w-auto">
             <div className="relative group flex-1 md:flex-none">
                <Filter className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-primary-600 transition-colors" />
                <select className="w-full md:w-56 pl-16 pr-6 py-4 bg-white border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-primary-600 transition-all font-black uppercase text-xs tracking-widest shadow-xl shadow-slate-200/50 appearance-none">
                   <option>All Gateways</option>
                   <option>Stripe</option>
                   <option>Razorpay</option>
                   <option>Flutterwave</option>
                </select>
             </div>
             <button className="flex-1 md:flex-none p-4 bg-slate-900 text-white rounded-2xl hover:bg-primary-600 transition-all shadow-xl shadow-slate-300 transform active:scale-95 group">
                <TrendingUp className="w-6 h-6 group-hover:rotate-12 transition-transform" />
             </button>
          </div>
        </div>

        {/* Payment Summary Top Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 animate-in slide-in-from-bottom duration-500">
           {[
             { label: "Successful Volume", value: "$45,200", color: "text-green-600", bg: "bg-green-100/50" },
             { label: "Pending Transfers", value: "$8,540", color: "text-orange-600", bg: "bg-orange-100/50" },
             { label: "Processing Nodes", value: "3 Gateway Hubs", color: "text-primary-600", bg: "bg-primary-100/50" }
           ].map((sum, idx) => (
             <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 group relative overflow-hidden transition-all hover:border-primary-600">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                   <CreditCard className="w-20 h-20" />
                </div>
                <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] mb-4 italic italic">{sum.label}</p>
                <h3 className={`text-4xl font-black ${sum.color} tracking-tighter uppercase italic`}>{sum.value}</h3>
             </div>
           ))}
        </div>

        {/* Payments Table Card */}
        <div className="bg-white rounded-[3rem] p-4 lg:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden relative group">
           <div className="absolute top-0 right-0 w-full h-full bg-primary-50/20 skew-x-12 -z-0 opacity-40 group-hover:skew-x-0 transition-all duration-1000" />
           <div className="relative z-10 overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-y-4">
                 <thead>
                    <tr className="uppercase text-[10px] font-black tracking-[0.2em] text-slate-400 italic">
                       <th className="px-8 pb-4">Transaction Hub</th>
                       <th className="px-8 pb-4">Revenue Service</th>
                       <th className="px-8 pb-4">Region Trace</th>
                       <th className="px-8 pb-4 text-center">Gateway Node</th>
                       <th className="px-8 pb-4">Status</th>
                       <th className="px-8 pb-4 text-right">Accounting Action</th>
                    </tr>
                 </thead>
                 <tbody>
                    {payments.map((pay, idx) => (
                       <tr key={idx} className="group/row bg-white hover:bg-slate-50 transition-all transform hover:-translate-y-1">
                          <td className="px-8 py-6 rounded-l-[2rem] border-y border-l border-slate-50 group-hover/row:border-primary-100 shadow-sm relative overflow-hidden bg-white/50 group-hover/row:bg-white">
                             <div className="absolute top-0 right-0 w-1 h-full bg-primary-600 opacity-0 group-hover/row:opacity-100 transition-opacity" />
                             <div className="flex flex-col space-y-1">
                                <p className="font-extrabold text-slate-900 group-hover/row:text-primary-600 transition-colors text-lg uppercase tracking-tight italic">{pay.amount}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{pay.id} • {pay.date}</p>
                             </div>
                          </td>
                          <td className="px-8 py-6 border-y border-slate-50 group-hover/row:border-primary-100 bg-white shadow-sm">
                             <div className="space-y-1">
                                <p className="font-black text-slate-800 text-sm italic">{pay.service}</p>
                                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-slate-900 text-white rounded group-hover/row:bg-primary-600 transition-colors">{pay.package}</span>
                             </div>
                          </td>
                          <td className="px-8 py-6 border-y border-slate-50 group-hover/row:border-primary-100 bg-white/50 group-hover/row:bg-white shadow-sm">
                             <div className="space-y-1">
                                <p className="font-extrabold text-slate-800 text-sm uppercase italic">{pay.user}</p>
                                <div className="flex items-center space-x-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                   <MapPin className="w-3 h-3 text-primary-400" />
                                   <span>{pay.country}</span>
                                </div>
                             </div>
                          </td>
                          <td className="px-8 py-6 border-y border-slate-50 group-hover/row:border-primary-100 bg-white shadow-sm text-center">
                             <div className="bg-slate-100/50 p-3 rounded-2xl inline-flex items-center justify-center group-hover/row:bg-slate-900 group-hover/row:text-white transition-all shadow-sm">
                                <span className="font-black italic text-[10px] uppercase tracking-widest">{pay.gateway}</span>
                             </div>
                          </td>
                          <td className="px-8 py-6 border-y border-slate-50 group-hover/row:border-primary-100 bg-white/50 group-hover/row:bg-white shadow-sm">
                             <div className="flex items-center space-x-3">
                                <div className={`w-3 h-3 rounded-full animate-pulse ${pay.status === 'SUCCESS' ? 'bg-green-500' : 'bg-orange-500'}`} />
                                <span className={`font-black text-[10px] uppercase tracking-[0.2em] italic ${pay.status === 'SUCCESS' ? 'text-green-600' : 'text-orange-600'}`}>{pay.status}</span>
                             </div>
                          </td>
                          <td className="px-8 py-6 rounded-r-[2rem] border-y border-r border-slate-50 group-hover/row:border-primary-100 shadow-sm text-right">
                             <div className="flex justify-end items-center space-x-6 opacity-0 group-hover/row:opacity-100 transition-all transform group-hover/row:translate-x-0">
                                <button className="p-3 bg-slate-900 text-white rounded-xl hover:bg-primary-600 transition-all shadow-xl transform active:scale-95 group/btn">
                                   <ArrowUpRight className="w-5 h-5 group-hover/btn:rotate-45 transition-transform" />
                                </button>
                                <button className="p-3 bg-primary-600/10 text-primary-600 rounded-xl hover:bg-primary-600 hover:text-white transition-all shadow-sm transform active:scale-95">
                                   <Zap className="w-5 h-5 fill-current" />
                                </button>
                             </div>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

        {/* Revenue Breakdown UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
           {[
              { icon: Globe, title: "Global Settlement", desc: "Automated currency conversion for pan-African gateway points." },
              { icon: ShieldCheck, title: "Compliance Hub", desc: "Verifying trans-continental AML/KYC for high-volume revenue nodes." },
              { icon: TrendingUp, title: "Revenue Forecast", desc: "Real-time AI mapping for monthly growth metrics and intake trends." },
              { icon: ShoppingCart, title: "Bulk Intake Node", desc: "Logistics division revenue pipeline monitored via cargo-node." }
           ].map((highlight, idx) => (
              <div key={idx} className="flex p-10 bg-white rounded-[2.5rem] border border-slate-100 flex-col items-center text-center space-y-6 hover:bg-slate-900 hover:text-white hover:shadow-2xl hover:shadow-primary-900/40 transition-all transform hover:-translate-y-2 group">
                 <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-xl group-hover:bg-primary-600 transition-colors">
                    <highlight.icon className="w-8 h-8" />
                 </div>
                 <div className="space-y-3">
                    <h3 className="text-xl font-extrabold uppercase tracking-tight italic">{highlight.title}</h3>
                    <p className="text-xs font-medium opacity-60 leading-relaxed italic border-t border-slate-100 group-hover:border-white/10 pt-4">{highlight.desc}</p>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
}
