import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import CountriesSection from "@/components/CountriesSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Gallery from "@/components/Gallery";
import * as LucideIcons from "lucide-react";
import { getGalleryData, getServices, getTestimonials } from "@/lib/cms";

export default async function Home() {
  const galleryData = await getGalleryData();
  const dynamicServices = await getServices();
  const testimonialsData = await getTestimonials();
  
  const mappedServices = dynamicServices.map((s: any) => ({
    ...s,
    icon: (LucideIcons as any)[s.iconType] || LucideIcons.Globe
  }));

  const hardcodedMap: Record<string, string> = {
    "/gallery/medical.png": "Medical Tourism Operations",
    "/gallery/education.png": "Education Consultancy",
    "/gallery/business.png": "Business Setup in Asia",
    "/gallery/logistics.png": "Logistics and Cargo Delivery"
  };
  
  const carouselImages = galleryData.carouselList.map((url: string) => {
    let desc = "Platform Featured Image";
    if (hardcodedMap[url]) desc = hardcodedMap[url];
    const up = galleryData.uploads.find((u: any) => u.url === url);
    if (up && up.description) desc = up.description;
    return { url, description: desc };
  });

  return (
    <div className="overflow-hidden">
      <Hero carouselImages={carouselImages} />
      
      <section id="services" className="relative py-32 premium-bg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(37,99,235,0.05),transparent)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary-900/10 rounded-full blur-[120px] opacity-40 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">Global Expertise, Local Focus</h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mt-6 font-medium">
              Empowering individuals and businesses across two continents through specialized, reliable services that matter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mappedServices.map((service: any) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      
      <CountriesSection />
      
      <Gallery uploads={galleryData.uploads} />
      
      <Testimonials testimonialsData={testimonialsData} />
      
      <CTASection />
    </div>
  );
}
