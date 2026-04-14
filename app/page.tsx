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
      
import ServicesSection from "@/components/ServicesSection";
// ... in Home component ...
      <ServicesSection mappedServices={mappedServices} />

      <WhyChooseUs />
      
      <CountriesSection />
      
      <Gallery uploads={galleryData.uploads} />
      
      <Testimonials testimonialsData={testimonialsData} />
      
      <CTASection />
    </div>
  );
}
