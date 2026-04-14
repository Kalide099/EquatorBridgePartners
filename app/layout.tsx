import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import seoData from "@/lib/seo.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: ["Medical Tourism", "Education Consultancy", "Business Facilitation", "Logistics Africa Asia", "Cargo India Africa"],
};

import { I18nProvider } from "@/lib/i18n-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>
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
