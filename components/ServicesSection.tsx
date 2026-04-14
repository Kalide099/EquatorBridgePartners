"use client";
import { useTranslation } from "@/lib/i18n-context";
import ServiceCard from "./ServiceCard";

export default function ServicesSection({ mappedServices }: { mappedServices: any[] }) {
  const { t } = useTranslation();

  return (
    <section id="services" className="relative py-32 premium-bg overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(37,99,235,0.05),transparent)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary-900/10 rounded-full blur-[120px] opacity-40 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">
            {t("services.section_title")}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mt-6 font-medium">
            {t("services.section_subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mappedServices.map((service: any) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
