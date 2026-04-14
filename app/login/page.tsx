"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogIn, Mail, Lock, ArrowRight, Github, Chrome, ShieldCheck } from "lucide-react";
import { signInUser } from "@/app/actions/auth";
import { useTranslation } from "@/lib/i18n-context";

export default function LoginPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    
    const res = await signInUser(formData);
    if (res.success) {
      // Force a hard reload to ensure cookies are read correctly by middleware
      window.location.href = res.role === "ADMIN" ? "/admin/dashboard" : "/dashboard";
    } else {
      setError(res.error || "Login Failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-24 flex items-center justify-center bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-600/10 skew-x-12 opacity-50" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center">
         {/* Home Navigation Button */}
         <div className="w-full max-w-xl flex justify-start mb-8">
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-white text-slate-700 rounded-2xl border border-slate-200 hover:bg-slate-50 hover:text-primary-600 transition-all shadow-xl shadow-slate-200/50 group">
               <ArrowRight className="w-5 h-5 mr-3 -rotate-180 group-hover:-translate-x-1 transition-transform text-slate-400 group-hover:text-primary-600" />
               <span className="font-bold tracking-wider uppercase text-xs">{t("auth.returnHome")}</span>
            </Link>
         </div>

         <div className="glass-card w-full max-w-xl p-12 md:p-20 shadow-2xl shadow-slate-200 border-white relative group overflow-hidden bg-white/80 backdrop-blur-xl rounded-[2.5rem]">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-600 to-secondary-600" />
            
            <div className="text-center mb-16 space-y-6">
               <div className="w-20 h-20 bg-primary-600 rounded-3xl flex items-center justify-center mx-auto text-white shadow-2xl transform transition-transform group-hover:rotate-6">
                  <LogIn className="w-10 h-10" />
               </div>
               <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">{t("auth.loginTitle")}</h1>
               <p className="text-lg text-slate-500 font-medium">{t("auth.loginSubtitle")}</p>
            </div>

            {error && (
               <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-bold text-center">
                  {error}
               </div>
            )}

            <form onSubmit={handleLogin} className="space-y-10">
               <div className="space-y-4">
                  <div className="relative group">
                     <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-primary-600 transition-colors" />
                     <input 
                       type="email" 
                       placeholder={t("auth.emailPlaceholder")} 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required
                       className="w-full pl-16 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-primary-600 transition-all font-medium text-lg"
                     />
                  </div>
                  <div className="relative group">
                     <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-primary-600 transition-colors" />
                     <input 
                       type="password" 
                       placeholder={t("auth.passwordPlaceholder")} 
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                       className="w-full pl-16 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-primary-600 transition-all font-medium text-lg"
                     />
                  </div>
               </div>

               <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                     <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-primary-600 transition-all focus:ring-primary-600 bg-slate-100" />
                     <span className="text-sm font-bold text-slate-600 group-hover:text-primary-600 transition-colors">{t("auth.rememberMe")}</span>
                  </label>
                  <Link href="#" className="text-sm font-black text-primary-600 hover:underline">{t("auth.forgotPassword")}</Link>
               </div>

               <button 
                type="submit" 
                disabled={loading}
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-primary-600 transition-all shadow-xl hover:shadow-primary-100 flex items-center justify-center transform active:scale-95 group disabled:opacity-50"
               >
                  {loading ? t("auth.authenticating") : t("auth.signInBtn")}
                  <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2" />
               </button>
            </form>

            <div className="mt-12 text-center">
               <p className="text-slate-500 font-medium">
                  {t("auth.noAccount")} <Link href="/register" className="text-primary-600 font-extrabold hover:underline">{t("auth.registerNow")}</Link>
               </p>
            </div>
            
            <div className="mt-16 pt-10 border-t border-slate-100 grid grid-cols-2 gap-6">
               <button className="flex items-center justify-center space-x-3 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
                  <Chrome className="w-5 h-5 text-red-500" />
                  <span className="font-bold text-slate-700">Google</span>
               </button>
               <button className="flex items-center justify-center space-x-3 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
                  <Github className="w-5 h-5 text-slate-900" />
                  <span className="font-bold text-slate-700">Github</span>
               </button>
            </div>
            
            <div className="absolute -bottom-2 -right-2 p-10 opacity-5 -z-10 group-hover:opacity-10 transition-opacity">
               <ShieldCheck className="w-40 h-40 text-primary-900" />
            </div>
         </div>
      </div>
    </div>
  );
}
