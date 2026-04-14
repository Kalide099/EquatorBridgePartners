"use client";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/lib/i18n-context";

const Gallery = ({ uploads = [] }: { uploads?: { url: string, description: string }[] }) => {
  const { t } = useTranslation();

  const baseGalleryItems = [
    {
      id: 1,
      title: t("gallery.items.medical.title"),
      category: t("gallery.items.medical.category"),
      src: "/gallery/medical.png",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      title: t("gallery.items.education.title"),
      category: t("gallery.items.education.category"),
      src: "/gallery/education.png",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      title: t("gallery.items.business.title"),
      category: t("gallery.items.business.category"),
      src: "/gallery/business.png",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 4,
      title: t("gallery.items.logistics.title"),
      category: t("gallery.items.logistics.category"),
      src: "/gallery/logistics.png",
      span: "md:col-span-3 md:row-span-1",
    },
  ];

  const extraGalleryItems = uploads.map((item, i) => ({
    id: 5 + i,
    title: item.description,
    category: "Admin Update",
    src: item.url,
    span: "md:col-span-1 md:row-span-1"
  }));

  const galleryItems = [...baseGalleryItems, ...extraGalleryItems];

  return (
    <section id="gallery" className="py-24 premium-bg relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-secondary-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            {t("gallery.title_main")}<span className="text-primary-500 italic">{t("gallery.title_highlight")}</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto italic">
            {t("gallery.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[300px] gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${item.span} shadow-2xl border border-white/10 flex flex-col bg-slate-950`}
            >
              <div className="relative flex-1 w-full min-h-[200px] overflow-hidden">
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-end justify-between">
                    <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 text-white shadow-xl rotate-45 group-hover:rotate-0 transition-transform duration-500 ml-auto">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-4 px-6 bg-slate-950/80 backdrop-blur-sm border-t border-white/5 flex items-center justify-center z-20">
                <p className="text-white text-sm md:text-base font-bold text-center line-clamp-1 group-hover:text-primary-400 transition-colors">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
