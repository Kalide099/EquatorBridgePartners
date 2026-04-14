import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    slug: string;
    icon: any;
    description: string;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <div className="group relative bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-10 transition-all duration-700 hover:bg-slate-900/60 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] hover:border-primary-500/50 overflow-hidden flex flex-col justify-between h-full">
      {/* Background shape */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-600/10 rounded-full transition-transform group-hover:scale-[3] duration-1000 blur-3xl pointer-events-none" />
      
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="w-20 h-20 bg-slate-950 border border-white/5 rounded-3xl flex items-center justify-center text-primary-400 mb-10 shadow-inner group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
          <Icon className="w-10 h-10" />
        </div>
        
        <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-primary-400 transition-colors leading-none">
          {service.title}
        </h3>
        
        <p className="text-slate-400 mb-10 leading-relaxed font-medium line-clamp-3 text-lg">
          {service.description}
        </p>
        
        <Link 
          href={`/services/${service.slug}`} 
          className="mt-auto inline-flex items-center w-full sm:w-max px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-black uppercase text-xs tracking-[0.2em] hover:bg-primary-600 hover:border-primary-500 transition-all duration-500 group/btn shadow-xl"
        >
          {service.slug === "cargo-and-logistics" ? "Explore Logistics" : "Detailed Preview"}
          <ArrowUpRight className="w-5 h-5 ml-3 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
