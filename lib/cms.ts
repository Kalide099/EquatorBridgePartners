import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";
import { Service, Testimonial, GalleryItem } from "@prisma/client";

/**
 * CMS utility to handle data fetching from Prisma with JSON fallback.
 * This ensures Vercel compatibility while keeping existing data.
 */

export async function getSeoSettings() {
  let dbSeo = null;
  try {
    dbSeo = await prisma.seoSetting.findUnique({ where: { id: "global" } });
  } catch (e) {
    console.warn("DB not ready? Falling back to JSON for SEO");
  }

  if (dbSeo) return dbSeo;
  
  const filepath = path.join(process.cwd(), "lib", "seo.json");
  if (fs.existsSync(filepath)) {
    try { return JSON.parse(fs.readFileSync(filepath, "utf-8")); } catch(e){}
  }
  return { title: "Equator Bridges", description: "Connecting Africa and Asia" };
}

export async function getServices() {
  let dbServices: Service[] = [];
  try {
    dbServices = await prisma.service.findMany({ orderBy: { createdAt: "desc" } });
  } catch (e) {
    console.warn("DB not ready? Falling back to JSON for Services");
  }

  if (dbServices.length > 0) return dbServices;

  const filepath = path.join(process.cwd(), "lib", "servicesData.json");
  if (fs.existsSync(filepath)) {
    try { return JSON.parse(fs.readFileSync(filepath, "utf-8")); } catch(e){}
  }
  return [];
}

export async function getTestimonials() {
  let dbTestimonials: Testimonial[] = [];
  try {
    dbTestimonials = await prisma.testimonial.findMany({ orderBy: { createdAt: "desc" } });
  } catch (e) {
    console.warn("DB not ready? Falling back to JSON for Testimonials");
  }

  if (dbTestimonials.length > 0) return dbTestimonials;

  const filepath = path.join(process.cwd(), "lib", "testimonialsData.json");
  if (fs.existsSync(filepath)) {
    try { return JSON.parse(fs.readFileSync(filepath, "utf-8")); } catch(e){}
  }
  return [];
}

export async function getGalleryData() {
  let dbItems: GalleryItem[] = [];
  try {
    dbItems = await prisma.galleryItem.findMany({ orderBy: { createdAt: "desc" } });
  } catch (e) {
    console.warn("DB not ready? Falling back to JSON for Gallery");
  }

  if (dbItems.length === 0) {
    const filepath = path.join(process.cwd(), "lib", "galleryData.json");
    if (fs.existsSync(filepath)) {
      try { return JSON.parse(fs.readFileSync(filepath, "utf-8")); } catch(e){}
    }
  }

  return {
    carouselList: dbItems.filter(i => i.isCarousel).map(i => i.url),
    uploads: dbItems.map(i => ({ url: i.url, description: i.description }))
  };
}

export async function getLeads() {
  try {
    return await prisma.inquiry.findMany({ orderBy: { createdAt: "desc" } });
  } catch (e) {
    console.warn("DB not ready? Lead query failed.");
    return [];
  }
}

export async function getUsers() {
  try {
    return await prisma.user.findMany({ orderBy: { createdAt: "desc" } });
  } catch (e) {
    console.warn("DB not ready? User query failed.");
    return [];
  }
}

export async function getPayments() {
  try {
    return await prisma.payment.findMany({ 
      include: { user: true },
      orderBy: { createdAt: "desc" } 
    });
  } catch (e) {
    console.warn("DB not ready? Payment query failed.");
    return [];
  }
}
