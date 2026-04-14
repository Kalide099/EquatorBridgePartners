import Link from "next/link";
import { CheckCircle2, ArrowRight, FileText, Zap, ShieldCheck } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen pt-24 pb-24 flex items-center justify-center bg-slate-50 relative overflow-hidden">
      {/* Success Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/5 skew-x-12" />
      <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center">
         <div className="glass-card w-full max-w-2xl p-12 md:p-20 shadow-2xl shadow-green-200/50 border-white text-center space-y-12 bg-white rounded-[3rem]">
            <div className="relative inline-block">
               <div className="w-24 h-24 bg-green-500 rounded-3xl flex items-center justify-center mx-auto text-white shadow-2xl animate-in zoom-in duration-500 transform rotate-12">
                  <CheckCircle2 className="w-12 h-12" />
               </div>
               <div className="absolute -top-4 -right-4 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white animate-bounce shadow-xl">
                  <Zap className="w-5 h-5 fill-current" />
               </div>
            </div>

            <div className="space-y-6">
               <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">Payment <span className="text-green-600">Successful</span></h1>
               <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
                  Thank you for your trust. Your transaction has been verified across our regional networks.
               </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-6 text-left relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-1 h-full bg-green-500 opacity-20" />
               <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-600 shadow-sm">
                     <FileText className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-slate-900 font-extrabold text-lg">Invoice Sent</p>
                     <p className="text-sm text-slate-500 font-medium">A detailed receipt has been mailed to your registered email.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary-600 shadow-sm">
                     <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-slate-900 font-extrabold text-lg">Application Activated</p>
                     <p className="text-sm text-slate-500 font-medium">Your regional manager will contact you within the next 2-4 business hours.</p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
               <Link href="/dashboard" className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-primary-600 transition-all flex items-center justify-center shadow-xl transform active:scale-95 group">
                  Go to Dashboard
                  <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2" />
               </Link>
               <Link href="/" className="w-full sm:w-auto px-10 py-5 border-2 border-slate-100 text-slate-700 rounded-2xl font-black hover:bg-slate-50 transition-all text-xl uppercase tracking-widest text-sm">
                  Back to Home
               </Link>
            </div>

            <div className="pt-8 border-t border-slate-100 text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
               Reference ID: EQ-99482-PAYZ-X
            </div>
         </div>
      </div>
    </div>
  );
}
