"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldAlert, Mail, Lock, ArrowRight, Zap, Globe } from "lucide-react";
import Link from "next/link";
import { signInAdmin } from "@/app/actions/auth";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const res = await signInAdmin(formData);
    if (res.success) {
      window.location.href = "/admin/dashboard";
    } else {
      setError(res.error || "Unauthorized access.");
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-24 flex items-center justify-center bg-slate-900 relative overflow-hidden">
      {/* Admin Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-600/10 skew-x-12 opacity-50 transition-all duration-700" />
      <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-secondary-900/40 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center">
         {/* Home Navigation Button */}
         <div className="w-full max-w-xl flex justify-start mb-8">
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-slate-800/80 text-slate-300 rounded-2xl backdrop-blur-md border border-white/5 hover:bg-white/10 hover:text-white transition-all shadow-xl group">
               <ArrowRight className="w-5 h-5 mr-3 -rotate-180 group-hover:-translate-x-1 transition-transform" />
               <span className="font-bold tracking-wider uppercase text-xs">Return to Home</span>
            </Link>
         </div>

         <div className="glass-card w-full max-w-xl p-12 md:p-20 shadow-2xl shadow-primary-900/50 border-white/10 bg-slate-800/80 text-white relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-600 to-primary-900" />
            
            <div className="text-center mb-16 space-y-6">
               <div className="w-20 h-20 bg-primary-600/20 border border-primary-500/30 rounded-3xl flex items-center justify-center mx-auto text-primary-400 shadow-2xl transform transition-transform group-hover:rotate-12">
                  <ShieldAlert className="w-10 h-10" />
               </div>
               <h1 className="text-4xl font-black tracking-tight uppercase">Admin <span className="text-primary-500 italic font-medium">Control Portal</span></h1>
               <p className="text-lg text-slate-400 font-medium italic">Secure authentication required for global management</p>
            </div>

            {error && (
               <div className="mb-8 p-6 bg-red-900/20 border-2 border-red-500/30 rounded-2xl flex items-center space-x-4 animate-in slide-in-from-top duration-300">
                  <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                     <Zap className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-sm font-bold text-red-100">{error}</p>
               </div>
            )}

            <form onSubmit={handleAdminLogin} className="space-y-10">
               <div className="space-y-4">
                  <div className="relative group">
                     <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500 group-focus-within:text-primary-500 transition-colors" />
                     <input 
                       type="email" 
                       placeholder="admin@equatorbridges.com" 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       className="w-full pl-16 pr-6 py-5 bg-slate-900/50 border border-slate-700/50 rounded-2xl outline-none focus:ring-2 focus:ring-primary-600 transition-all font-medium text-lg text-white"
                     />
                  </div>
                  <div className="relative group">
                     <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500 group-focus-within:text-primary-500 transition-colors" />
                     <input 
                       type="password" 
                       placeholder="••••••••" 
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       className="w-full pl-16 pr-6 py-5 bg-slate-900/50 border border-slate-700/50 rounded-2xl outline-none focus:ring-2 focus:ring-primary-600 transition-all font-medium text-lg text-white"
                     />
                  </div>
               </div>

               <button type="submit" className="w-full py-5 bg-primary-600 text-white rounded-2xl font-black text-xl hover:bg-primary-700 transition-all shadow-xl hover:shadow-primary-100 flex items-center justify-center transform active:scale-95 group">
                  Authenticate Admin
                  <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2" />
               </button>
            </form>

            <div className="mt-12 text-center text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center justify-center space-x-2 opacity-50">
               <Globe className="w-4 h-4" />
               <span>Encrypted Regional Access Point • Node_IN_DEL_02</span>
            </div>
            
            <div className="absolute -bottom-2 -right-2 p-10 opacity-5 -z-10 group-hover:opacity-10 transition-opacity">
               <ShieldAlert className="w-40 h-40 text-primary-900" />
            </div>
         </div>
      </div>
    </div>
  );
}
