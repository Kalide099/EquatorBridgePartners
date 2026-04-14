"use client";
import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import Link from "next/link";

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // delay showing the widget to avoid immediate distraction
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      {/* Tooltip */}
      <div 
        className={`absolute bottom-full right-0 mb-4 bg-white text-slate-800 p-4 rounded-2xl shadow-2xl border border-slate-100 transition-all duration-300 w-64 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <p className="font-bold text-sm mb-1 text-slate-900">Need Immediate Help?</p>
        <p className="text-xs text-slate-600 mb-3">Our global experts are available 24/7 on WhatsApp to assist you.</p>
        <a 
          href="https://wa.me/917982408940"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center w-full bg-green-500 hover:bg-green-600 text-white text-xs font-black uppercase tracking-widest py-2 rounded-lg transition-colors"
        >
          Start Chat
        </a>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 border-b border-r border-slate-100" />
      </div>

      {/* Button */}
      <div className="relative flex items-center justify-center">
         {/* Pulse effect */}
         <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-40"></div>
         <button 
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
           className="relative w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 z-10"
         >
           <MessageCircle className="w-8 h-8" />
         </button>
      </div>
    </div>
  );
};

export default WhatsAppWidget;
