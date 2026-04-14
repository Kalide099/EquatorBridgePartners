import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import seoData from "@/lib/seo.json";
import { cookies } from "next/headers";
import { I18nProvider } from "@/lib/i18n-context";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const locale = cookies().get("NEXT_LOCALE")?.value || "en";
  
  // Basic translation for metadata
  const titles: Record<string, string> = {
    en: "Equator Bridges Partners | Connecting Africa and Asia",
    fr: "Equator Bridges Partners | Connecter l'Afrique et l'Asie",
    pt: "Equator Bridges Partners | Conectando África e Ásia"
  };

  const descriptions: Record<string, string> = {
    en: "Premier multi-service platform for Medical Tourism, Education, Business Facilitation, Logistics, and more between Africa and Asia.",
    fr: "Plateforme multi-services de premier plan pour le tourisme médical, l'éducation et les affaires entre l'Afrique et l'Asie.",
    pt: "Plataforma multisserviços líder para turismo médico, educação e negócios entre a África e a Ásia."
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: ["Medical Tourism", "Education Consultancy", "Business Facilitation", "Logistics Africa Asia", "Cargo India Africa", "Afrique Asie", "África Ásia"],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = cookies().get("NEXT_LOCALE")?.value || "en";

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <I18nProvider defaultValue={locale}>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <WhatsAppWidget />
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
