"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HomeCarousel({ carouselImages }: { carouselImages: { url: string, description?: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages]);

  if (carouselImages.length === 0) return null;

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-slate-900 border-b border-white/10">
      {carouselImages.map((img, idx) => (
        <div 
          key={idx} 
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
           <Image
             src={img.url}
             alt={img.description || "Carousel Photo"}
             fill
             className="object-cover"
             priority={idx === 0}
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex items-end justify-center pb-24 md:pb-32 px-4">
              {img.description && (
                 <div className="text-center p-6 md:p-8 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl max-w-3xl transform">
                    <p className="text-xl md:text-3xl font-black text-white tracking-tight">{img.description}</p>
                 </div>
              )}
           </div>
        </div>
      ))}
      
      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
         {carouselImages.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-primary-500 scale-125' : 'bg-white/50 hover:bg-white'}`}
            />
         ))}
      </div>
    </div>
  );
}
