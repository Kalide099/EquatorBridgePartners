"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import { CreditCard, Smartphone, Zap, ArrowRight, ShieldCheck, ShoppingCart, Globe, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";

function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const serviceSlug = searchParams.get("service") || "medical-tourism";
  const pkgType = searchParams.get("package") || "basic";

  const selectedService = services.find(s => s.slug === serviceSlug) || services[0];
  const pkgData = pkgType === "premium" ? selectedService.pricing.premium : selectedService.pricing.basic;

  const serviceName = selectedService.title;
  const price = pkgData.price;
  const pkgName = pkgData.name;

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/payment/success");
    }, 2000);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Payment Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-600/5 skew-x-12 opacity-50 -z-0" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl opacity-50 -z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full flex justify-center">
         <div className="glass-card w-full max-w-5xl p-0 shadow-2xl shadow-slate-200 border-white relative group overflow-hidden flex flex-col md:flex-row bg-white rounded-[3rem]">
            {/* Left: Payment Form */}
            <div className="flex-1 p-12 md:p-20 space-y-12">
               <div className="space-y-4">
                  <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Checkout <span className="text-primary-600">Securely</span></h1>
                  <p className="text-lg text-slate-500 font-medium">Select your preferred international payment method and proceed.</p>
               </div>

               <div className="space-y-6">
                  <p className="font-black uppercase tracking-widest text-xs text-slate-400">Payment Methods</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <button 
                       onClick={handlePayment} 
                       disabled={loading}
                       className="p-8 border-2 border-slate-100 rounded-3xl hover:border-primary-600 hover:bg-primary-50 transition-all group flex flex-col items-center justify-center space-y-4 disabled:opacity-50"
                     >
                        <CreditCard className="w-10 h-10 text-slate-400 group-hover:text-primary-600 transition-colors" />
                        <span className="font-black text-slate-900 uppercase text-xs tracking-wider">Debit/Credit Card</span>
                     </button>
                     <button 
                       onClick={handlePayment} 
                       disabled={loading}
                       className="p-8 border-2 border-slate-100 rounded-3xl hover:border-secondary-600 hover:bg-secondary-50 transition-all group flex flex-col items-center justify-center space-y-4 disabled:opacity-50"
                     >
                        <Smartphone className="w-10 h-10 text-slate-400 group-hover:text-secondary-600 transition-colors" />
                        <span className="font-black text-slate-900 uppercase text-xs tracking-wider">Mobile Money</span>
                     </button>
                     <button 
                       onClick={handlePayment} 
                       disabled={loading}
                       className="p-8 border-2 border-slate-100 rounded-3xl hover:border-blue-600 hover:bg-blue-50 transition-all group flex flex-col items-center justify-center space-y-4 disabled:opacity-50"
                     >
                        <Zap className="w-10 h-10 text-slate-400 group-hover:text-blue-600 transition-colors shadow-2xl shadow-blue-200" />
                        <span className="font-black text-slate-900 uppercase text-xs tracking-wider">UPI / International</span>
                     </button>
                     <div className="bg-slate-900 text-white p-8 rounded-3xl flex flex-col items-center justify-center space-y-4 opacity-50 cursor-not-allowed grayscale">
                        <Globe className="w-10 h-10" />
                        <span className="font-black uppercase text-xs tracking-wider">Bank Transfer (Soon)</span>
                     </div>
                  </div>
               </div>

               <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                     <ShieldCheck className="w-5 h-5 text-green-500" />
                     <span>Secured by Stripe & Equator Bridges Pay</span>
                  </div>
                  <div className="flex -space-x-3">
                     {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />)}
                  </div>
               </div>

               {loading && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center flex-col space-y-6">
                     <div className="w-20 h-20 border-8 border-slate-100 border-t-primary-600 rounded-full animate-spin" />
                     <p className="text-xl font-black text-slate-900 uppercase tracking-widest animate-pulse">Processing Simulation...</p>
                     <p className="text-slate-500 font-medium">Validating gateway and regional regulations...</p>
                  </div>
               )}
            </div>

            {/* Right: Summary Side */}
            <div className="bg-slate-900 text-white w-full md:w-[400px] p-12 md:p-20 flex flex-col justify-between relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-full h-full bg-primary-600/10 skew-y-12 pointer-events-none" />
               <div className="relative z-10 space-y-12">
                  <div className="flex items-center space-x-4">
                     <ShoppingCart className="w-8 h-8 text-primary-400 flex-shrink-0" />
                     <h2 className="text-2xl font-black uppercase tracking-tight">Order Summary</h2>
                  </div>

                  <div className="space-y-8">
                     <div className="pb-8 border-b border-white/10">
                        <p className="text-primary-400 font-black uppercase tracking-widest text-[10px] mb-2">Service Ordered</p>
                        <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight italic">{serviceName}</h3>
                        <p className="text-xs text-slate-400 font-bold mt-2 uppercase tracking-widest italic">{pkgName} Tier Support</p>
                     </div>
                     
                     <div className="space-y-6">
                        <div className="flex justify-between items-center text-slate-400 font-bold text-sm">
                           <span>Base Service Fee</span>
                           <span className="text-white">{price}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-400 font-bold text-sm">
                           <span>Global Processing Tax</span>
                           <span className="text-white">$0.00 (Promo)</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-400 font-bold text-sm">
                           <span>On-Ground Consultant</span>
                           <span className="text-white">Included</span>
                        </div>
                     </div>

                     <div className="pt-10 border-t border-primary-500/50 flex justify-between items-end">
                        <p className="text-lg font-black uppercase tracking-widest">Total Pay</p>
                        <p className="text-5xl font-black text-primary-400 opacity-90">{price}</p>
                     </div>
                  </div>

                  <div className="space-y-6 pt-10">
                     <div className="flex items-start space-x-4 opacity-60">
                         <Phone className="w-5 h-5 mt-1" />
                         <div>
                            <p className="font-extrabold text-sm">+91 7982408940</p>
                            <p className="text-xs text-slate-500">24/7 Billing Support</p>
                         </div>
                     </div>
                     <div className="flex items-start space-x-4 opacity-60">
                         <Mail className="w-5 h-5 mt-1" />
                         <div>
                            <p className="font-extrabold text-sm">diambakaglobalhospitalityservi@gmail.com</p>
                            <p className="text-xs text-slate-500">Invoice & Receipt Dept</p>
                         </div>
                     </div>
                  </div>
               </div>
               
               <Link href="/" className="mt-16 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors underline flex items-center group/back">
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover/back:-translate-x-2 transition-transform" />
                  Cancel and Return
               </Link>
            </div>
         </div>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
