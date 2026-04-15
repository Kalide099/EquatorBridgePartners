import { Users, Search, MoreVertical, ShieldCheck, ShieldAlert, Globe, ArrowRight, Zap, Mail, Phone, MapPin, Trash2 } from "lucide-react";
import Link from "next/link";
import { getUsers } from "@/lib/cms";
import { deleteUser } from "@/app/actions/admin";

export const dynamic = "force-dynamic";

export default async function UserManagementPage({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  const search = searchParams?.search?.toLowerCase() || "";
  const allUsers = await getUsers();
  
  const users = allUsers.filter(u => 
    !search || 
    u.firstName?.toLowerCase().includes(search) || 
    u.lastName?.toLowerCase().includes(search) || 
    u.email?.toLowerCase().includes(search)
  ).map(u => ({
    ...u,
    // Add default values for UI if properties don't exist
    name: u.firstName ? `${u.firstName} ${u.lastName || ''}`.trim() : 'Unknown',
    country: 'Global', // Temporary until users have country field
    joined: u.createdAt ? new Date(u.createdAt).toISOString().split('T')[0] : 'N/A'
  }));

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900/5 -skew-x-12 opacity-50 -z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 space-y-8 md:space-y-0">
          <div>
             <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">User <span className="text-primary-600 italic font-medium">Repository</span></h1>
             <p className="text-slate-500 font-extrabold uppercase tracking-widest text-xs mt-2 italic">Global Member Directory • Total Records: {users.length}</p>
          </div>
          <form action="/admin/users" method="GET" className="relative group w-full md:w-80 flex">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-600 transition-colors" />
             <input 
               type="text" 
               name="search"
               defaultValue={searchParams?.search || ""}
               placeholder="Search users by name, email..." 
               className="w-full pl-16 pr-6 py-4 bg-white border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-primary-600 transition-all font-medium text-slate-700 shadow-xl"
             />
             <button type="submit" className="hidden">Search</button>
          </form>
        </div>

        {/* User Table Card */}
        <div className="bg-white rounded-[3rem] p-4 lg:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden relative group">
           <div className="absolute top-0 right-0 w-full h-full bg-primary-50/20 skew-x-12 -z-0 opacity-40 transition-all duration-700 hover:skew-x-0" />
           <div className="relative z-10 overflow-x-auto">
              {users.length === 0 ? (
                <p className="text-center text-slate-500 font-medium py-10">No users found.</p>
              ) : (
                <table className="w-full text-left border-separate border-spacing-y-4">
                   <thead>
                      <tr className="uppercase text-[10px] font-black tracking-[0.2em] text-slate-400">
                         <th className="px-8 pb-4">Member Profile</th>
                         <th className="px-8 pb-4">Role / Node</th>
                         <th className="px-8 pb-4">Region</th>
                         <th className="px-8 pb-4">Status</th>
                         <th className="px-8 pb-4 text-right">Operations</th>
                      </tr>
                   </thead>
                   <tbody>
                      {users.map((user, idx) => (
                         <tr key={idx} className="group/row bg-white hover:bg-slate-50 transition-all transform hover:-translate-y-1">
                            <td className="px-8 py-6 rounded-l-[2rem] border-y border-l border-slate-50 group-hover/row:border-primary-100 shadow-sm relative overflow-hidden">
                               <div className="absolute top-0 right-0 w-1 h-full bg-primary-600 opacity-0 group-hover/row:opacity-100 transition-opacity" />
                               <div className="flex items-center space-x-6">
                                  <div className="w-14 h-14 bg-slate-900 border-4 border-white shadow-xl rounded-full flex items-center justify-center text-white font-black text-xl group-hover/row:bg-primary-600 transition-colors">
                                     {user.name.split(" ").slice(0, 2).map((n: string) => n[0]).join("")}
                                  </div>
                                  <div>
                                     <p className="font-extrabold text-slate-900 group-hover/row:text-primary-600 transition-colors text-lg">{user.name}</p>
                                     <div className="flex items-center space-x-4">
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{user.email}</p>
                                     </div>
                                  </div>
                               </div>
                            </td>
                            <td className="px-8 py-6 border-y border-slate-50 group-hover/row:border-primary-100 bg-white/50 group-hover/row:bg-white shadow-sm">
                               <div className="flex flex-col space-y-1">
                                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-slate-200 w-fit ${user.role === 'ADMIN' ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/50' : 'bg-slate-100 text-slate-500'}`}>
                                     {user.role}
                                  </span>
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic ml-1">Joined: {user.joined}</span>
                               </div>
                            </td>
                            <td className="px-8 py-6 border-y border-slate-50 group-hover/row:border-primary-100 bg-white shadow-sm">
                               <div className="flex items-center space-x-3 text-slate-600 font-extrabold text-sm uppercase italic">
                                  <Globe className="w-4 h-4 text-primary-400 flex-shrink-0" />
                                  <span>{user.country}</span>
                               </div>
                            </td>
                            <td className="px-8 py-6 border-y border-slate-50 group-hover/row:border-primary-100 bg-white/50 group-hover/row:bg-white shadow-sm">
                               <div className="flex items-center space-x-2">
                                  <div className={`w-3 h-3 rounded-full animate-pulse ${user.status === 'ACTIVE' ? 'bg-green-500' : user.status === 'PENDING' ? 'bg-orange-500' : 'bg-red-500'}`} />
                                  <span className="font-black text-[10px] uppercase tracking-[0.2em] italic text-slate-400">{user.status}</span>
                               </div>
                            </td>
                            <td className="px-8 py-6 rounded-r-[2rem] border-y border-r border-slate-50 group-hover/row:border-primary-100 shadow-sm text-right">
                               <div className="flex justify-end items-center space-x-4 opacity-40 group-hover/row:opacity-100 transition-all transform group-hover/row:translate-x-0">
                                  <button className="p-3 bg-slate-900 text-white rounded-xl hover:bg-primary-600 transition-all shadow-xl transform active:scale-95 group/btn hidden">
                                     <MoreVertical className="w-5 h-5 group-hover/btn:rotate-90 transition-transform" />
                                  </button>
                                  <form action={deleteUser.bind(null, user.id) as any}>
                                      <button type="submit" className="p-3 bg-red-600 text-white rounded-xl hover:bg-slate-900 transition-all shadow-xl transform active:scale-95" title="Delete User">
                                         <Trash2 className="w-5 h-5" />
                                      </button>
                                  </form>
                               </div>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
              )}
           </div>
        </div>

        {/* Action Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
           {[
              { icon: ShieldCheck, title: "Verified Identity", desc: "System auto-validated via regional node checks." },
              { icon: ShieldAlert, title: "Risk Mitigation", desc: "Flag potential fraud nodes using real-time API logs." },
              { icon: Globe, title: "Trans-Continental Node", desc: "Ensuring database syncing across HQ & regional hubs." }
           ].map((highlight, idx) => (
              <div key={idx} className="flex p-8 bg-white/50 rounded-3xl border border-slate-100 items-center space-x-8 hover:bg-white hover:shadow-2xl hover:border-primary-100 transition-all transform hover:-rotate-1 group">
                 <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-xl group-hover:bg-primary-600 transition-colors">
                    <highlight.icon className="w-8 h-8" />
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-xl font-extrabold uppercase tracking-tight italic text-slate-900">{highlight.title}</h3>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed italic">{highlight.desc}</p>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
}
