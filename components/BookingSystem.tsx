"use client";
import { useState } from "react";
import { Calendar, Clock, CheckCircle2, Zap, ArrowRight, ShieldCheck, Mail, Phone, Calculator, Globe } from "lucide-react";
import Link from "next/link";

export default function BookingSystem({ service }: { service: string }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const times = ["09:00 AM", "10:30 AM", "12:00 PM", "02:30 PM", "04:00 PM"];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
       <div className="p-12 text-center space-y-8 bg-green-50 rounded-[3rem] border-2 border-green-200 animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto text-white shadow-2xl transform rotate-12">
             <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-black text-slate-900 uppercase">Consultation Booked!</h3>
          <p className="text-lg text-slate-600 font-medium italic">We have confirmed your consultation for {service}. A calendar invite has been sent to your email.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
             <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold uppercase text-xs tracking-widest shadow-xl">Go to Dashboard</Link>
             <button onClick={() => setSuccess(false)} className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-slate-50">Book Another</button>
          </div>
       </div>
    );
  }

  return (
    <div className="glass-card p-12 md:p-16 border-slate-100 bg-white shadow-2xl shadow-slate-200/50 transform hover:-translate-y-2 transition-all relative overflow-hidden group">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50/50 skew-x-12 -z-0 opacity-50" />
       
       <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-10">
             <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-xl">
                <Calendar className="w-6 h-6" />
             </div>
             <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Book Consultation</h2>
          </div>

          <form onSubmit={handleBooking} className="space-y-10">
             <div className="space-y-4">
                <label className="text-slate-400 font-black uppercase tracking-widest text-[10px] italic">Select Preferred Date</label>
                <input 
                  type="date" 
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-primary-600 transition-all font-bold text-slate-700"
                />
             </div>

             <div className="space-y-6">
                <label className="text-slate-400 font-black uppercase tracking-widest text-[10px] italic">Available Time Slots (Indian Standard Time)</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                   {times.map((t, idx) => (
                      <button 
                         key={idx}
                         type="button"
                         onClick={() => setSelectedTime(t)}
                         className={`px-4 py-3 border-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all transform active:scale-95 ${selectedTime === t ? 'bg-slate-900 border-slate-900 text-white shadow-xl' : 'border-slate-50 bg-slate-50 text-slate-400 hover:border-primary-100 hover:bg-white hover:text-primary-600 italic'}`}
                      >
                         {t}
                      </button>
                   ))}
                </div>
             </div>

             <button 
                type="submit" 
                disabled={!selectedDate || !selectedTime || loading}
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-primary-600 transition-all shadow-xl hover:shadow-primary-100 flex items-center justify-center transform active:scale-95 group-hover:bg-primary-600/90 disabled:opacity-50"
             >
                {loading ? "Securing Slot..." : "Confirm My Meeting"}
                <Zap className="w-6 h-6 ml-3 fill-current text-primary-400 group-hover:rotate-12 transition-transform" />
             </button>

             <div className="pt-8 border-t border-slate-50 flex items-center justify-between text-[10px] text-slate-400 font-black uppercase tracking-widest italic">
                <div className="flex items-center space-x-2">
                   <ShieldCheck className="w-4 h-4 text-primary-500" />
                   <span>Real-time availability confirmed</span>
                </div>
                <span>Zoom / WhatsApp Meet</span>
             </div>
          </form>
       </div>
    </div>
  );
}
