import { 
  User, 
  FileText, 
  CreditCard, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  Zap, 
  Upload, 
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  GraduationCap,
  Truck
} from "lucide-react";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getSession();
  
  if (!session) {
    redirect("/login");
  }

  const firstName = session?.user?.firstName || "User";
  const initials = firstName.substring(0, 2).toUpperCase();
  const applications = [
    { id: "APP1024", service: "Medical Tourism (Apollo India)", status: "In Progress", date: "2025-05-12", color: "text-blue-600 bg-blue-100", icon: Stethoscope },
    { id: "APP1055", service: "Education (University of Delhi)", status: "Approved", date: "2025-06-01", color: "text-green-600 bg-green-100", icon: GraduationCap },
    { id: "APP1089", service: "Cargo Shipment #4456", status: "Pending", date: "2025-06-15", color: "text-orange-600 bg-orange-100", icon: Truck }
  ];

  const payments = [
    { id: "TXN9982", amount: "$500.00", status: "Successful", date: "2025-05-12" },
    { id: "TXN1002", amount: "$120.00", status: "Pending", date: "2025-06-14" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Dashboard BG Decoration */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-primary-600/5 -skew-x-12 opacity-50 -z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 space-y-8 md:space-y-0">
          <div className="max-w-xl">
             <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-primary-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-primary-500/30 font-black text-2xl">
                   {initials}
                </div>
                <div>
                   <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Welcome, <span className="text-primary-600">{firstName}</span></h1>
                   <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Client Dashboard • Account ID: EQ-884592</p>
                </div>
             </div>
          </div>
          <div className="flex space-x-4 w-full md:w-auto">
             <button className="flex-1 md:flex-none py-4 px-8 bg-slate-900 text-white rounded-2xl font-black shadow-xl hover:bg-primary-600 transition-all flex items-center justify-center transform active:scale-95">
                <Upload className="w-5 h-5 mr-3" />
                Upload Docs
             </button>
             <button className="flex-1 md:flex-none py-4 px-8 border-2 border-slate-200 text-slate-700 rounded-2xl font-black hover:bg-slate-100 transition-all flex items-center justify-center transform active:scale-95">
                <ShieldCheck className="w-5 h-5 mr-3" />
                Verification
             </button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Active Applications", value: "3", icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Document Status", value: "85%", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
            { label: "Pending Payments", value: "$120", icon: Clock, color: "text-orange-600", bg: "bg-orange-50" },
            { label: "Unread Messages", value: "2", icon: MessageSquare, color: "text-purple-600", bg: "bg-purple-50" }
          ].map((stat, idx) => (
             <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between hover:border-primary-600 transition-all group">
                <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6 shadow-sm transform group-hover:rotate-6 transition-transform`}>
                   <stat.icon className="w-8 h-8" />
                </div>
                <div>
                   <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-1">{stat.label}</p>
                   <h3 className="text-4xl font-black text-slate-900">{stat.value}</h3>
                </div>
             </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Applications Column */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-2xl shadow-slate-200/50 group overflow-hidden relative">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50/30 skew-x-12 -z-0 opacity-50" />
               <div className="relative z-10 flex justify-between items-center mb-12">
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Active Trackings</h2>
                  <Link href="#" className="p-3 bg-slate-900 rounded-xl text-white hover:bg-primary-600 transition-all font-black uppercase text-xs">View All History</Link>
               </div>
               
               <div className="space-y-6 relative z-10">
                  {applications.map((app, idx) => (
                     <div key={idx} className="flex items-center justify-between p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group/item hover:border-primary-100">
                        <div className="flex items-center space-x-8">
                           <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${app.color} shadow-sm group-hover/item:shadow-xl transition-all`}>
                              <app.icon className="w-8 h-8" />
                           </div>
                           <div>
                              <p className="font-extrabold text-xl text-slate-900 group-hover/item:text-primary-600 transition-colors">{app.service}</p>
                              <div className="flex items-center space-x-3 text-sm text-slate-500 font-bold uppercase tracking-widest mt-1">
                                 <span>{app.id}</span>
                                 <span>•</span>
                                 <span>Applied: {app.date}</span>
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center space-x-6">
                           <div className={`px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest border border-slate-200 ${app.color} group-hover/item:bg-white`}>
                              {app.status}
                           </div>
                           <ArrowRight className="w-6 h-6 text-slate-300 group-hover/item:text-primary-600 transition-all group-hover/item:translate-x-1" />
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Upload Section UI */}
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-full bg-primary-600/10 skew-y-12 pointer-events-none" />
               <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                  <div className="max-w-md space-y-6">
                     <h2 className="text-4xl font-black uppercase tracking-tight">Document Center</h2>
                     <p className="text-xl text-slate-400 font-medium leading-relaxed italic">Upload required documents to expedite your application process between Africa and Asia.</p>
                     <div className="flex items-center space-x-4 pt-6">
                        <div className="w-4 h-4 rounded-full bg-secondary-500 animate-pulse" />
                        <span className="font-bold text-slate-400">Secure AES-256 Encryption active</span>
                     </div>
                  </div>
                  <div className="w-full md:w-80 h-80 border-4 border-dashed border-white/20 rounded-[3rem] flex flex-col items-center justify-center p-8 hover:border-primary-500 transition-all group-hover:bg-white/5 cursor-pointer">
                     <Upload className="w-16 h-16 text-primary-500 mb-6 animate-bounce" />
                     <p className="text-xl font-black mb-2">Drop Files</p>
                     <p className="text-slate-500 font-bold uppercase text-xs">PDF, JPG, PNG (Max 10MB)</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Secondary Info Column */}
          <div className="space-y-12">
             {/* Payment Summary */}
             <div className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-2xl shadow-slate-200/50">
                <div className="flex justify-between items-center mb-12">
                   <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Financials</h2>
                   <CreditCard className="w-8 h-8 text-primary-600" />
                </div>
                <div className="space-y-8">
                   {payments.map((txn, idx) => (
                      <div key={idx} className="flex justify-between items-start pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                         <div>
                            <p className="font-black text-slate-900 uppercase text-lg">{txn.amount}</p>
                            <p className="text-xs text-slate-500 font-bold mt-1 tracking-widest">{txn.id} • {txn.date}</p>
                         </div>
                         <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${txn.status === "Successful" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"}`}>
                            {txn.status}
                         </span>
                      </div>
                   ))}
                   <Link href="/payment" className="block w-full py-4 text-center border-2 border-slate-100 text-slate-700 rounded-2xl font-black hover:bg-slate-50 transition-all uppercase text-sm tracking-widest">Make New Payment</Link>
                </div>
             </div>

             {/* Message UI */}
             <div className="bg-primary-600 rounded-[3rem] p-12 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-full h-full bg-secondary-600/10 pointer-events-none" />
                <div className="relative z-10 space-y-10">
                   <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-black uppercase tracking-tighter">Live Chat</h2>
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                         <MessageSquare className="w-6 h-6" />
                      </div>
                   </div>
                   
                   <div className="space-y-6">
                      <div className="bg-white/10 p-6 rounded-2xl border border-white/10 italic font-medium leading-relaxed">
                         &quot;Hello John, we have received your medical report from Apollo Delhi. We are reviewing it now.&quot;
                         <p className="text-[10px] font-black uppercase tracking-widest mt-4 text-primary-300">Agent Diambaka • 2h ago</p>
                      </div>
                      <div className="bg-primary-900/40 p-6 rounded-2xl border border-white/5 italic font-medium leading-relaxed text-right opacity-60">
                         &quot;Thank you agent. Looking forward to the update.&quot;
                         <p className="text-[10px] font-black uppercase tracking-widest mt-4 text-slate-400">Sent • 1h ago</p>
                      </div>
                   </div>
                   <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Type a message..." 
                        className="w-full pl-6 pr-14 py-4 bg-primary-700/50 border border-white/10 rounded-xl outline-none focus:bg-primary-800 transition-all text-sm font-medium"
                      />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white text-primary-600 rounded-lg hover:rotate-12 transition-transform">
                         <Zap className="w-5 h-5 fill-current" />
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
