"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserPlus, Mail, Lock, User, ArrowRight, ShieldCheck, Zap, Globe, FileCheck } from "lucide-react";
import { registerUser } from "@/app/actions/auth";
import { useTranslation } from "@/lib/i18n-context";

export default function RegisterPage() {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("firstName", firstName);
    formData.append("password", password);
    
    const res = await registerUser(formData);
    if (res.success) {
      router.push("/dashboard");
      router.refresh();
    } else {
      setError(res.error || "Registration Failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-24 flex items-center justify-center bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-secondary-600/10 -skew-x-12 opacity-50" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center">
         {/* Home Navigation Button */}
         <div className="w-full max-w-2xl flex justify-start mb-8">
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-white text-slate-700 rounded-2xl border border-slate-200 hover:bg-slate-50 hover:text-secondary-600 transition-all shadow-xl shadow-slate-200/50 group">
               <ArrowRight className="w-5 h-5 mr-3 -rotate-180 group-hover:-translate-x-1 transition-transform text-slate-400 group-hover:text-secondary-600" />
               <span className="font-bold tracking-wider uppercase text-xs">{t("auth.returnHome")}</span>
            </Link>
         </div>

         <div className="glass-card w-full max-w-2xl p-12 md:p-16 shadow-2xl shadow-slate-200 border-white relative group overflow-hidden bg-white/80 backdrop-blur-xl rounded-[2.5rem]">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary-600 to-primary-600" />
            
            <div className="mb-12 space-y-4">
               <div className="w-20 h-20 bg-secondary-600 rounded-3xl flex items-center justify-center text-white shadow-2xl transform transition-transform group-hover:rotate-6">
                  <UserPlus className="w-10 h-10" />
               </div>
               <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">{t("auth.registerTitle")}</h1>
               <p className="text-lg text-slate-500 font-medium">{t("auth.registerSubtitle")}</p>
            </div>

            {error && (
               <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-bold text-center">
                  {error}
               </div>
            )}

            <form onSubmit={handleRegister} className="space-y-8 relative z-0">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                     <User className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-secondary-600 transition-colors" />
                     <input 
                       type="text" 
                       placeholder={t("auth.firstNamePlaceholder")} 
                       value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}
                       required
                       className="w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-secondary-600 transition-all font-medium text-lg"
                     />
                  </div>
                  <div className="relative group">
                     <User className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-secondary-600 transition-colors" />
                     <input 
                       type="text" 
                       placeholder={t("auth.lastNamePlaceholder")} 
                       className="w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-secondary-600 transition-all font-medium text-lg"
                     />
                  </div>
               </div>

               <div className="relative group">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-secondary-600 transition-colors" />
                  <input 
                    type="email" 
                    placeholder={t("auth.emailPlaceholder")} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-secondary-600 transition-all font-medium text-lg"
                  />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                     <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-secondary-600 transition-colors" />
                     <input 
                       type="password" 
                       placeholder={t("auth.passwordPlaceholder")} 
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                       className="w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-secondary-600 transition-all font-medium text-lg"
                     />
                  </div>
                  <div className="relative group">
                     <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-secondary-600 transition-colors" />
                     <input 
                       type="password" 
                       placeholder="Confirm"
                       required
                       className="w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-secondary-600 transition-all font-medium text-lg"
                     />
                  </div>
               </div>

               <div className="space-y-4 pt-4 border-t border-slate-100">
                  <p className="text-slate-400 font-extrabold uppercase tracking-widest text-xs">{t("auth.interestTitle")}</p>
                  <div className="grid grid-cols-2 gap-4">
                     {[
                       { name: "Medical Tourism", icon: ShieldCheck },
                       { name: "Education Consultancy", icon: Zap },
                       { name: "Business Setup", icon: Globe },
                       { name: "Logistics Support", icon: FileCheck }
                     ].map((interest, idx) => (
                        <label key={idx} className="flex items-center space-x-4 p-4 border border-slate-100 rounded-xl hover:bg-secondary-50 hover:border-secondary-100 transition-all cursor-pointer group">
                           <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-secondary-600" />
                           <span className="text-xs font-bold text-slate-700">{interest.name}</span>
                        </label>
                     ))}
                  </div>
               </div>

               <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-500 font-medium">
                  <FileCheck className="w-6 h-6 text-secondary-500 flex-shrink-0" />
                  <p className="text-sm">{t("auth.agreeTerms")}</p>
               </div>

               <button 
                type="submit" 
                disabled={loading}
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-secondary-600 transition-all shadow-xl hover:shadow-secondary-100 flex items-center justify-center transform active:scale-95 group disabled:opacity-50"
               >
                  {loading ? t("auth.creating") : t("auth.registerBtn")}
                  <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2" />
               </button>
            </form>

            <div className="mt-12 text-center">
               <p className="text-slate-500 font-medium">
                  {t("auth.hasAccount")} <Link href="/login" className="text-secondary-600 font-extrabold hover:underline">{t("auth.signInInstead")}</Link>
               </p>
            </div>
         </div>
      </div>
    </div>
  );
}
