import { 
  Users, 
  CreditCard, 
  Calendar, 
  Truck, 
  TrendingUp, 
  ArrowUpRight, 
  ShieldCheck, 
  Bell, 
  MessageSquare, 
  Zap,
  Globe,
  MapPin,
  Clock,
  Briefcase,
  Search,
  ImagePlus,
  Save,
  Trash2,
  Upload,
  User,
  Star,
  Settings
} from "lucide-react";
import Link from "next/link";
import { updateSeoSetting, uploadGalleryPhoto, deleteGalleryPhoto, toggleCarousel, updatePhotoDescription, uploadCarouselPhoto, addTestimonial, deleteTestimonial, addService, deleteService, deleteLead } from "@/app/actions/admin";

import { getGalleryData, getLeads, getSeoSettings, getServices, getTestimonials } from "@/lib/cms";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  try {
    const seoData = await getSeoSettings();
    const galleryData = await getGalleryData();
    const leadsData = await getLeads();
    const testimonialsData = await getTestimonials();
    const servicesData = await getServices();

  const allGallery = [
    { url: "/gallery/medical.png", hardcoded: true },
    { url: "/gallery/education.png", hardcoded: true },
    { url: "/gallery/business.png", hardcoded: true },
    { url: "/gallery/logistics.png", hardcoded: true },
    ...galleryData.uploads.map((u: any) => ({ url: u.url, hardcoded: false }))
  ];

  const stats = [
    { label: "Total Inquiries (Leads)", value: leadsData.length.toString(), trend: "+New", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Active Services", value: servicesData.length.toString(), trend: "Stable", icon: Briefcase, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "Testimonials", value: testimonialsData.length.toString(), trend: "Live", icon: Star, color: "text-orange-500", bg: "bg-orange-500/10" },
    { label: "Gallery Assets", value: allGallery.length.toString(), trend: "Sync", icon: ImagePlus, color: "text-primary-500", bg: "bg-primary-500/10" }
  ];

  const recentPayments = [
    { user: "Jean-Pierre Kabangu", service: "Medical Tourism", amount: "$500.00", status: "Success", date: "2025-06-12", country: "DR Congo" },
    { user: "Amara Okonkwo", service: "Education", amount: "$120.00", status: "Success", date: "2025-06-11", country: "Nigeria" },
    { user: "Moussa Traoré", service: "Business", amount: "$1,000.00", status: "Pending", date: "2025-06-10", country: "Mali" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-24 overflow-hidden relative">
      {/* Dark mode background elements */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-900/40 -skew-x-12 opacity-50 -z-0 pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-[120px] opacity-40 z-0 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-secondary-900/20 rounded-full blur-[100px] opacity-30 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 space-y-8 md:space-y-0">
          <div>
             <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">Admin <span className="text-primary-500 italic font-medium">Global Command</span></h1>
             <p className="text-slate-400 font-extrabold uppercase tracking-widest text-xs mt-2">Real-time Platform Monitoring • System Node: IN_HQ_01</p>
          </div>
          <div className="flex space-x-6 relative group w-full md:w-auto">
             <button className="flex-1 md:flex-none py-4 px-8 bg-slate-900 border border-white/10 text-white rounded-2xl font-black shadow-2xl hover:bg-primary-600 transition-all flex items-center justify-center transform active:scale-95 group">
                <Bell className="w-5 h-5 mr-3 text-primary-400 group-hover:text-white group-hover:animate-swing" />
                <span className="relative">Notifications <span className="absolute -top-4 -right-4 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-[10px] font-black shadow-xl border border-primary-500/50">{leadsData.length}</span></span>
             </button>
             <Link href="#inbox" className="flex-1 md:flex-none py-4 px-8 bg-slate-800/80 backdrop-blur-xl border border-white/5 text-white rounded-2xl font-black hover:bg-white/10 transition-all flex items-center justify-center transform active:scale-95 shadow-2xl">
                <MessageSquare className="w-5 h-5 mr-3" />
                Inbox
             </Link>
          </div>
        </div>

        {/* Global KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {stats.map((stat, idx) => (
             <div key={idx} className="bg-slate-900/60 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col justify-between hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 -z-0 group-hover:opacity-10 transition-opacity">
                   <stat.icon className="w-20 h-20 text-white" />
                </div>
                <div className="relative z-10">
                   <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-all transform border border-white/5`}>
                      <stat.icon className="w-8 h-8" />
                   </div>
                   <p className="text-slate-400 font-extrabold uppercase tracking-widest text-[10px] mb-2 italic">{stat.label}</p>
                   <div className="flex items-end space-x-4">
                      <h3 className="text-4xl font-black text-white">{stat.value}</h3>
                      <span className={`text-xs font-black uppercase flex items-center space-x-1 ${stat.trend.startsWith('+') ? 'text-primary-400' : 'text-slate-500'}`}>
                         <TrendingUp className="w-3 h-3" />
                         <span>{stat.trend}</span>
                      </span>
                   </div>
                </div>
             </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Activity Column */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-slate-900/60 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/5 shadow-2xl group overflow-hidden relative">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-900/10 skew-x-12 -z-0 opacity-40 transition-all duration-700 hover:skew-x-0" />
               <div className="relative z-10 flex justify-between items-center mb-16">
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">Recent Global Payments</h2>
                  <Link href="/admin/payments" className="p-4 bg-slate-800 rounded-2xl text-slate-300 border border-white/5 hover:bg-primary-600 hover:text-white hover:border-primary-500 transition-all font-black uppercase text-xs shadow-xl transform active:scale-95 group flex items-center">
                    Manage All
                    <ArrowUpRight className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
               </div>
               
               <div className="space-y-6 relative z-10">
                  {recentPayments.map((p, idx) => (
                     <div key={idx} className="flex items-center justify-between p-8 bg-slate-800/50 rounded-[2rem] border border-white/5 hover:bg-slate-800 hover:shadow-2xl transition-all group/item hover:border-primary-500/30">
                        <div className="flex items-center space-x-8">
                           <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-primary-500 shadow-sm border border-white/5 group-hover/item:bg-primary-600 group-hover/item:text-white transition-all transform group-hover/item:rotate-6">
                              <CreditCard className="w-8 h-8" />
                           </div>
                           <div>
                              <p className="font-extrabold text-xl text-white group-hover/item:text-primary-400 transition-colors">{p.user}</p>
                              <div className="flex items-center space-x-3 text-sm text-slate-500 font-bold uppercase tracking-widest mt-1">
                                 <MapPin className="w-3 h-3 text-slate-600" />
                                 <span>{p.country}</span>
                                 <span>•</span>
                                 <span>{p.service}</span>
                              </div>
                           </div>
                        </div>
                        <div className="flex flex-col items-end space-y-3">
                           <span className="font-black text-2xl text-white group-hover/item:text-primary-400 transition-colors uppercase tracking-tight italic">{p.amount}</span>
                           <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm border ${p.status === "Success" ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-orange-500/10 text-orange-400 border-orange-500/20"}`}>
                              {p.status}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Admin Insights UI */}
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group shadow-2xl border border-white/5 top-glow">
               <div className="absolute inset-0 bg-primary-600/10 pointer-events-none" />
               <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-16">
                  <div className="max-w-md space-y-8">
                     <div className="inline-flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                        <ShieldCheck className="w-5 h-5 text-secondary-400" />
                        <span className="text-xs font-black uppercase tracking-widest text-secondary-300">Operational Integrity</span>
                     </div>
                     <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none italic">System Health Metrics</h2>
                     <p className="text-xl text-slate-400 font-medium leading-relaxed italic border-l-4 border-primary-600 pl-8">Review critical global system logs and verify multi-node connectivity across Asian and African infrastructure points.</p>
                     <div className="flex items-center gap-8 pt-8">
                        <div className="text-center group-hover:scale-105 transition-transform">
                           <p className="text-4xl font-black mb-1 text-white">99.9%</p>
                           <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Uptime</p>
                        </div>
                        <div className="w-0.5 h-12 bg-white/10" />
                        <div className="text-center group-hover:scale-105 transition-transform">
                           <p className="text-4xl font-black mb-1 text-white">2s</p>
                           <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Avg Latency</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex-shrink-0 relative group">
                     <div className="absolute inset-0 bg-primary-600/20 rounded-full blur-3xl group-hover:opacity-100 opacity-60 transition-opacity" />
                     <Globe className="w-56 h-56 text-primary-500/50 animate-spin-slow relative z-10" />
                  </div>
               </div>
            </div>
          </div>

          {/* Secondary Admin Column */}
          <div className="space-y-12">
             {/* Operations Summary */}
             <div className="bg-slate-900/60 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/5 shadow-2xl">
                <div className="flex justify-between items-center mb-12">
                   <h2 className="text-2xl font-black text-white uppercase tracking-tight tracking-tighter italic">Regional Ops</h2>
                   <MapPin className="w-8 h-8 text-primary-500" />
                </div>
                <div className="space-y-10">
                   {[
                      { region: "Greater Noida (HQ)", active: "12 Agents", icon: Briefcase, color: "text-blue-400", bg: "bg-blue-500/10" },
                      { region: "DR Congo (Regional)", active: "8 Agents", icon: Globe, color: "text-green-400", bg: "bg-green-500/10" },
                      { region: "Dubai (Logistics)", active: "15 Agents", icon: Truck, color: "text-orange-400", bg: "bg-orange-500/10" }
                   ].map((node, idx) => (
                      <div key={idx} className="flex justify-between items-center group/node">
                         <div className="flex items-center space-x-6">
                            <div className={`w-12 h-12 rounded-xl ${node.bg} border border-white/5 flex items-center justify-center ${node.color} group-hover/node:bg-white/10 group-hover/node:text-white transition-all`}>
                               <node.icon className="w-6 h-6" />
                            </div>
                            <span className="font-extrabold text-slate-300 uppercase text-xs tracking-wider">{node.region}</span>
                         </div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 opacity-60">{node.active}</span>
                      </div>
                   ))}
                   <Link href="/admin/users" className="block w-full py-5 text-center bg-slate-800/80 border border-white/10 text-white rounded-2xl font-black hover:bg-slate-800 hover:border-primary-500/50 transition-all uppercase text-xs tracking-widest shadow-sm">View User Records</Link>
                </div>
             </div>

             {/* Live Activity Feed */}
             <div className="bg-slate-900 rounded-[3rem] p-12 border border-white/5 text-white relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-primary-900/20 pointer-events-none" />
                <div className="relative z-10 space-y-12">
                   <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-black uppercase tracking-tighter italic">Live Feed</h2>
                      <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center group-hover:animate-pulse border border-primary-500/30 text-primary-400">
                         <Zap className="w-6 h-6 fill-current" />
                      </div>
                   </div>
                   
                   <div className="space-y-8">
                      {[
                        { text: "New Shipment Booking in UAE", time: "2m ago", icon: Truck },
                        { text: "Medical Inquiry from Nigeria", time: "15m ago", icon: Briefcase },
                        { text: "Payment Verified: $500.00", time: "45m ago", icon: CreditCard }
                      ].map((item, idx) => (
                         <div key={idx} className="flex items-start space-x-6 group/item">
                            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary-600 group-hover/item:border-primary-500 group-hover/item:text-white transition-colors">
                               <item.icon className="w-5 h-5 text-slate-400 group-hover/item:text-white" />
                            </div>
                            <div className="space-y-1">
                               <p className="text-sm font-bold leading-tight text-slate-300 group-hover/item:text-white group-hover/item:translate-x-1 transition-all">{item.text}</p>
                               <div className="flex items-center space-x-4">
                                  <Clock className="w-3 h-3 text-primary-400/50" />
                                  <span className="text-[10px] font-black uppercase tracking-widest text-primary-400/70">{item.time}</span>
                               </div>
                            </div>
                         </div>
                      ))}
                   </div>
                   <div className="pt-8 border-t border-white/10 uppercase font-black text-[10px] tracking-[0.2em] text-slate-500 content-center flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                     System Core Operating: 100% Nominal
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Management & Content Control Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          
          {/* SEO Management */}
          <div className="bg-slate-900 rounded-[3rem] p-12 border border-white/5 shadow-2xl group overflow-hidden relative">
             <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
             <div className="flex justify-between items-center mb-10">
                <div>
                   <h2 className="text-3xl font-black text-white uppercase tracking-tight">Global SEO Control</h2>
                   <p className="text-slate-400 font-bold mt-2">Manage metadata for better search ranking across regions.</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center">
                   <Search className="w-6 h-6" />
                </div>
             </div>
             
             <form action={updateSeoSetting as any} className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Platform Meta Title</label>
                  <input type="text" name="title" defaultValue={seoData.title} className="w-full bg-slate-950 border border-white/10 py-4 px-6 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-bold text-white shadow-inner" required />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Global Meta Description</label>
                  <textarea rows={3} name="description" defaultValue={seoData.description} className="w-full bg-slate-950 border border-white/10 py-4 px-6 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium text-slate-300 resize-none shadow-inner" required />
                </div>
                <button type="submit" className="w-full py-5 bg-blue-600/20 border border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white rounded-2xl font-black shadow-xl transition-all group flex items-center justify-center uppercase tracking-widest text-sm">
                   <Save className="w-5 h-5 mr-3" />
                   Update SEO Settings
                </button>
             </form>
          </div>

          {/* Empty spacer / extra module */}
          <div className="lg:col-span-1 hidden lg:block border border-dashed border-white/5 rounded-[3rem]">
          </div>

          {/* INBOX CRM LEADS */}
          <div id="inbox" className="bg-slate-900 rounded-[3rem] p-12 shadow-2xl border border-white/5 group relative col-span-1 lg:col-span-3">
             <div className="absolute top-0 left-0 w-2 h-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
             <div className="flex justify-between items-center mb-10">
                <div>
                   <h2 className="text-3xl font-black text-white uppercase tracking-tight">CRM Inbox (Leads)</h2>
                   <p className="text-slate-400 font-bold mt-2">Manage contact forms submitted on the website.</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center">
                   <MessageSquare className="w-6 h-6" />
                </div>
             </div>
             <div className="space-y-6">
                {leadsData.length === 0 ? (
                   <p className="text-slate-500 italic text-center p-12 border border-slate-800 rounded-3xl">No inquiries found in the inbox.</p>
                ) : (
                   leadsData.map((lead: any, idx: number) => (
                      <div key={idx} className="bg-slate-800/80 p-8 rounded-3xl border border-white/5 relative group/lead shadow-lg">
                         <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                               <h3 className="text-xl font-bold text-white">{lead.name}</h3>
                               <p className="text-primary-400 text-sm font-black uppercase tracking-widest mt-1">{lead.service}</p>
                            </div>
                            <div className="flex flex-col md:items-end mt-4 md:mt-0 opacity-60 text-xs text-slate-300 font-medium space-y-1">
                               <span>{lead.email}</span>
                               <span>{lead.phone}</span>
                               <span className="text-slate-500">{new Date(lead.date).toLocaleString()}</span>
                            </div>
                         </div>
                         <p className="text-slate-300 p-6 bg-slate-950 rounded-2xl mt-4 border border-white/5 font-medium shadow-inner">&quot;{lead.message}&quot;</p>
                         <form action={deleteLead.bind(null, lead.id) as any} className="mt-6 flex justify-end">
                            <button type="submit" className="text-red-400 hover:text-white border border-red-500/20 bg-red-500/10 hover:bg-red-500 px-6 py-2.5 rounded-xl text-xs font-black uppercase transition-all shadow-sm">Delete / Mark Read</button>
                         </form>
                      </div>
                   ))
                )}
             </div>
          </div>

          {/* MAIN WEBSITE CAROUSEL CONTROL */}
          <div className="bg-slate-900 rounded-[3rem] p-12 shadow-2xl border border-white/5 group overflow-hidden relative col-span-1 lg:col-span-3">
             <div className="absolute top-0 left-0 w-2 h-full bg-primary-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
             <div className="flex justify-between items-center mb-10">
                <div>
                   <h2 className="text-3xl font-black text-white uppercase tracking-tight">Main Website Carousel Manager</h2>
                   <p className="text-slate-400 font-bold mt-2">Manage the Hero Carousel strictly displaying on the main page.</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 border border-primary-500/20 text-primary-500 flex items-center justify-center">
                   <ImagePlus className="w-6 h-6" />
                </div>
             </div>
             
             {/* Upload direct to Carousel */}
             <form action={uploadCarouselPhoto as any} className="border border-dashed border-primary-500/30 bg-primary-500/5 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between text-left hover:bg-primary-500/10 transition-all relative overflow-hidden group/upload mb-10 gap-6">
                <input type="file" name="file" accept="image/*" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                <div className="flex items-center space-x-6 relative z-0">
                   <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center group-hover/upload:scale-110 transition-transform shadow-inner border border-white/5">
                      <Upload className="w-6 h-6 text-primary-500" />
                   </div>
                   <div>
                      <p className="font-extrabold text-white text-lg mb-1">Upload New Slide</p>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Auto-added to Hero Carousel</p>
                   </div>
                </div>
                <div className="w-full md:w-1/2 relative z-20 flex flex-col sm:flex-row gap-3">
                   <input type="text" name="description" placeholder="Slide Hero Heading Text..." required className="w-full bg-slate-950 border border-white/10 py-3 px-4 rounded-xl outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-sm text-white pointer-events-auto shadow-inner" />
                   <button type="submit" className="px-8 py-3 bg-primary-600 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-xl pointer-events-auto hover:bg-primary-500 transition-colors whitespace-nowrap">Upload</button>
                </div>
             </form>
             
             {/* Read Carousel List */}
             <div className="space-y-4">
                {galleryData.carouselList.length === 0 ? (
                   <p className="text-slate-500 italic text-center py-6">No images currently in Carousel.</p>
                ) : (
                   galleryData.carouselList.map((url: string, idx: number) => {
                      const uploadObj = galleryData.uploads.find((u: any) => u.url === url);
                      const currentDescription = uploadObj?.description || "";
                      return (
                         <div key={idx} className="flex flex-col md:flex-row items-center gap-6 bg-slate-800/60 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                            <div className="w-32 h-20 rounded-xl relative overflow-hidden bg-slate-950 flex-shrink-0 shadow-inner">
                               <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${url}')`}} />
                            </div>
                            
                            {!uploadObj ? (
                               <div className="flex-1">
                                  <p className="text-sm font-bold text-slate-400">System Protected Image (Update disabled)</p>
                                  <p className="text-xs text-slate-500 font-mono mt-1">{url}</p>
                               </div>
                            ) : (
                               <form action={updatePhotoDescription as any} className="flex-1 flex flex-col sm:flex-row gap-3 w-full">
                                  <input type="hidden" name="url" value={url} />
                                  <input type="text" name="description" defaultValue={currentDescription} required className="flex-1 bg-slate-950 border border-white/10 py-2.5 px-4 rounded-xl outline-none focus:border-primary-500 transition-all font-medium text-sm text-white shadow-inner" />
                                  <button type="submit" className="px-5 py-2.5 bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all">Update Text</button>
                               </form>
                            )}

                            <form action={toggleCarousel.bind(null, url) as any} className="w-full sm:w-auto">
                               <button type="submit" className="w-full px-5 py-2.5 bg-red-600/10 border border-red-500/30 text-red-500 hover:bg-red-600 hover:text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all whitespace-nowrap">
                                  Drop from Carousel
                               </button>
                            </form>
                         </div>
                      );
                   })
                )}
             </div>
          </div>

          {/* Testimonials Manager */}
          <div className="bg-slate-900 rounded-[3rem] p-12 shadow-2xl border border-white/5 group relative col-span-1 lg:col-span-3">
             <div className="absolute top-0 left-0 w-2 h-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.8)]" />
             <div className="flex justify-between items-center mb-10">
                <div>
                   <h2 className="text-3xl font-black text-white uppercase tracking-tight">Testimonials Manager</h2>
                   <p className="text-slate-400 font-bold mt-2">Manage the client reviews publicly displayed on your platform.</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center">
                   <Star className="w-6 h-6" />
                </div>
             </div>
             
             <form action={addTestimonial as any} className="bg-slate-800/60 p-8 rounded-[2rem] border border-white/5 mb-10 shadow-lg">
                <h4 className="text-lg font-black mb-6 text-orange-500 uppercase tracking-widest text-sm">Deploy New Review</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                   <input type="text" name="name" placeholder="Client Name" className="w-full bg-slate-950 border border-white/10 py-3.5 px-6 rounded-xl outline-none focus:border-orange-500 transition-colors shadow-inner text-white font-medium text-sm" required />
                   <input type="text" name="role" placeholder="Service Used" className="w-full bg-slate-950 border border-white/10 py-3.5 px-6 rounded-xl outline-none focus:border-orange-500 transition-colors shadow-inner text-white font-medium text-sm" required />
                   <input type="text" name="location" placeholder="Country" className="w-full bg-slate-950 border border-white/10 py-3.5 px-6 rounded-xl outline-none focus:border-orange-500 transition-colors shadow-inner text-white font-medium text-sm" required />
                </div>
                <textarea name="text" rows={3} placeholder="Testimonial Body..." className="w-full bg-slate-950 border border-white/10 py-4 px-6 rounded-xl outline-none focus:border-orange-500 transition-colors shadow-inner text-white font-medium text-sm mb-6" required></textarea>
                <button type="submit" className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-black uppercase text-xs tracking-widest w-full transition-all shadow-xl shadow-orange-900/50">Publish Testimonial</button>
             </form>

             <div className="space-y-4">
               {testimonialsData.map((t: any, idx: number) => (
                  <div key={idx} className="flex flex-col md:flex-row justify-between md:items-end gap-6 bg-slate-800/80 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors shadow-lg">
                     <div>
                        <p className="font-extrabold text-white text-xl">{t.name} <span className="text-xs font-bold uppercase tracking-widest text-orange-400 ml-2">({t.location})</span></p>
                        <p className="text-slate-300 italic mt-3 font-medium text-lg leading-relaxed">&quot;{t.text}&quot;</p>
                        <p className="text-slate-500 text-sm font-bold mt-2">— {t.role}</p>
                     </div>
                     <form action={deleteTestimonial.bind(null, t.id) as any} className="flex-shrink-0">
                        <button type="submit" className="text-red-500 bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all">Revoke</button>
                     </form>
                  </div>
               ))}
             </div>
          </div>

          {/* Services Manager */}
          <div className="bg-slate-900 rounded-[3rem] p-12 shadow-2xl border border-white/5 group relative col-span-1 lg:col-span-3">
             <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)]" />
             <div className="flex justify-between items-center mb-10">
                <div>
                   <h2 className="text-3xl font-black text-white uppercase tracking-tight">Services Matrix Manager</h2>
                   <p className="text-slate-400 font-bold mt-2">Add or remove the services globally offered by Equator Bridges.</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 flex items-center justify-center">
                   <Briefcase className="w-6 h-6" />
                </div>
             </div>

             <form action={addService as any} className="bg-slate-800/60 p-8 rounded-[2rem] border border-white/5 mb-10 shadow-lg">
                <h4 className="text-lg font-black mb-6 text-cyan-400 uppercase tracking-widest text-sm">Construct New Service</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   <input type="text" name="title" placeholder="Service Title (e.g. Real Estate)" className="w-full bg-slate-950 border border-white/10 py-3.5 px-6 rounded-xl outline-none focus:border-cyan-500 transition-colors shadow-inner text-white font-medium" required />
                   <select name="iconType" className="w-full bg-slate-950 border border-white/10 py-3.5 px-6 rounded-xl outline-none focus:border-cyan-500 transition-colors shadow-inner text-slate-300 font-medium appearance-none" required>
                      <option value="Briefcase">💼 Business Briefcase Icon</option>
                      <option value="Stethoscope">🩺 Medical Icon</option>
                      <option value="Globe">🌍 Global Icon</option>
                      <option value="GraduationCap">🎓 Education Icon</option>
                      <option value="Truck">🚚 Logistics Icon</option>
                   </select>
                </div>
                <textarea name="description" rows={3} placeholder="Short Description representing the service..." className="w-full bg-slate-950 border border-white/10 py-4 px-6 rounded-xl outline-none focus:border-cyan-500 transition-colors shadow-inner text-white font-medium text-sm mb-6" required></textarea>
                <button type="submit" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-black uppercase text-xs tracking-widest w-full transition-all shadow-xl shadow-cyan-900/50">Deploy Service to Main Page</button>
             </form>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {servicesData.map((s: any, idx: number) => (
                  <div key={idx} className="flex justify-between items-start bg-slate-800/80 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all shadow-lg group/srv">
                     <div className="pr-6">
                        <p className="font-black text-lg text-white group-hover/srv:text-cyan-400 transition-colors">{s.title}</p>
                        <p className="text-sm font-medium text-slate-400 mt-2 leading-relaxed">{s.description}</p>
                     </div>
                     <form action={deleteService.bind(null, s.id) as any} className="flex-shrink-0">
                        <button type="submit" className="p-3 bg-slate-950 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white rounded-xl transition-all shadow-inner">
                           <Trash2 className="w-5 h-5"/>
                        </button>
                     </form>
                  </div>
               ))}
             </div>
          </div>

          {/* Gallery Media Management */}
          <div className="bg-slate-900 rounded-[3rem] p-12 shadow-2xl border border-white/5 group overflow-hidden relative col-span-1 lg:col-span-3">
             <div className="absolute top-0 left-0 w-2 h-full bg-secondary-500 shadow-[0_0_20px_rgba(236,72,153,0.8)]" />
             <div className="flex justify-between items-center mb-10">
                <div>
                   <h2 className="text-3xl font-black text-white uppercase tracking-tight">Gallery Media Hub</h2>
                   <p className="text-slate-400 font-bold mt-2">Upload and manage visual assets for the front-end gallery.</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-secondary-500/10 border border-secondary-500/20 text-secondary-500 flex items-center justify-center">
                   <ImagePlus className="w-6 h-6" />
                </div>
             </div>
             
             <form action={uploadGalleryPhoto as any} className="border-2 border-dashed border-slate-700 bg-slate-800/30 rounded-3xl p-10 flex flex-col items-center justify-center text-center hover:bg-slate-800 transition-all relative overflow-hidden group/upload mb-12">
                <input type="file" name="file" accept="image/*" required className="absolute inset-0 w-full h-[60%] opacity-0 cursor-pointer z-10" />
                <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center mb-4 group-hover/upload:scale-110 transition-transform relative z-0 border border-white/5">
                   <Upload className="w-8 h-8 text-secondary-500" />
                </div>
                <p className="font-extrabold text-white text-lg mb-1 relative z-0">Click or Drag to Upload Vault Photos</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 relative z-0 mb-8">Supports JPG, PNG, WEBP (Max 5MB)</p>
                
                <input type="text" name="description" placeholder="Photo Explanation / Description" required className="w-full bg-slate-950 border border-white/10 py-4 px-6 rounded-2xl outline-none focus:border-secondary-500 transition-all font-medium text-sm text-white relative z-20 pointer-events-auto shadow-inner" />
                
                <button type="submit" className="mt-4 px-8 py-4 bg-secondary-600/20 border border-secondary-500/30 text-secondary-400 hover:bg-secondary-600 hover:text-white text-xs font-black uppercase tracking-widest rounded-2xl shadow-xl relative z-20 pointer-events-auto w-full transition-all">Ingest into Gallery</button>
             </form>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {allGallery.map((img, idx) => (
                   <div key={idx} className={`aspect-square bg-slate-950 rounded-3xl relative overflow-hidden group/image border-4 transition-all shadow-xl ${galleryData.carouselList.includes(img.url) ? 'border-secondary-500 shadow-[0_0_20px_rgba(236,72,153,0.3)]' : 'border-slate-800'}`}>
                      <div className="absolute inset-0 bg-slate-700 opacity-60 bg-cover bg-center transition-transform duration-700 group-hover/image:scale-110" style={{ backgroundImage: `url('${img.url}')` }} />
                      
                      {galleryData.carouselList.includes(img.url) && (
                         <div className="absolute top-3 right-3 bg-secondary-500 text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-full z-10 shadow-lg">Active Hero</div>
                      )}

                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/image:opacity-100 bg-slate-900/90 backdrop-blur-sm transition-opacity p-4 text-center gap-3">
                         
                         <form action={toggleCarousel.bind(null, img.url) as any} className="w-full">
                            <button type="submit" className="w-full py-2.5 bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                               Hero Stage
                            </button>
                         </form>

                         {!img.hardcoded ? (
                            <form action={deleteGalleryPhoto.bind(null, img.url) as any} className="w-full">
                               <button type="submit" className="w-full py-2 bg-red-600/10 border border-red-500/20 text-red-500 hover:bg-red-600 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                                  <Trash2 className="w-3 h-3" />
                                  Delete
                               </button>
                            </form>
                         ) : (
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2 px-3 py-1 bg-white/5 rounded-full">Core Locked</span>
                         )}
                      </div>
                   </div>
                ))}
             </div>
          </div>
          
        </div>
      </div>
    </div>
    );
  } catch (error: any) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-black text-red-500 mb-4 uppercase">System Error</h1>
        <pre className="bg-slate-900/50 p-6 rounded-2xl border border-red-500/20 text-xs text-red-400 overflow-auto max-w-full font-mono">
          {error.message}
        </pre>
      </div>
    );
  }
}
