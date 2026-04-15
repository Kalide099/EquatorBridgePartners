"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateSeoSetting(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  if (!title || !description) return { error: "Missing fields" };

  await prisma.seoSetting.upsert({
    where: { id: "global" },
    update: { title, description },
    create: { id: "global", title, description }
  });

  revalidatePath("/", "layout");
}

export async function uploadGalleryPhoto(formData: FormData) {
  const file = formData.get("file") as File;
  const description = formData.get("description") as string || "Gallery Update";
  
  if (!file || typeof file === "string") return { error: "No valid file provided" };

  // Note: On Vercel, local file system is read-only. 
  // For a production deployment, use Cloudinary or Vercel Blob.
  // For now, we store the URL path in the DB.
  const uniqueName = `upload_${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
  const url = `/gallery/${uniqueName}`;

  try {
    await prisma.galleryItem.create({
      data: { url, description, isCarousel: false }
    });
  } catch (e) {
    return { error: "Failed to store gallery item in database" };
  }

  revalidatePath("/");
  return { success: true, url };
}

export async function deleteGalleryPhoto(url: string) {
  try {
    await prisma.galleryItem.delete({ where: { url } });
    revalidatePath("/");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch (e) {
     return { error: "Delete failed" };
  }
}

export async function toggleCarousel(url: string) {
  const item = await prisma.galleryItem.findUnique({ where: { url } });
  
  if (item) {
    await prisma.galleryItem.update({
      where: { url },
      data: { isCarousel: !item.isCarousel }
    });
  } else {
    // If it was a hardcoded image not in DB yet, create it
    await prisma.galleryItem.create({
      data: { url, isCarousel: true }
    });
  }

  revalidatePath("/");
}

export async function updatePhotoDescription(formData: FormData) {
  const url = formData.get("url") as string;
  const description = formData.get("description") as string;
  if (!url || !description) return { error: "Missing fields" };

  await prisma.galleryItem.update({
    where: { url },
    data: { description }
  });
  
  revalidatePath("/");
}

export async function uploadCarouselPhoto(formData: FormData) {
  const file = formData.get("file") as File;
  const description = formData.get("description") as string || "Gallery Update";
  
  if (!file || typeof file === "string") return { error: "No valid file provided" };

  const uniqueName = `upload_${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
  const url = `/gallery/${uniqueName}`;

  await prisma.galleryItem.create({
    data: { url, description, isCarousel: true }
  });

  revalidatePath("/");
}

// ------ FEATURES MANAGEMENT ------
export async function addTestimonial(formData: FormData) {
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const location = formData.get("location") as string;
  const text = formData.get("text") as string;
  
  if (!name || !text) return { error: "Name and text are required" };
  
  await prisma.testimonial.create({
    data: { name, role, location, text }
  });
  
  revalidatePath("/");
}

export async function deleteTestimonial(id: string) {
  try {
    await prisma.testimonial.delete({ where: { id } });
    revalidatePath("/");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch (e) {
     return { error: "Delete failed" };
  }
}

export async function addService(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const iconType = formData.get("iconType") as string || "Briefcase";
  
  if (!title || !description) return { error: "Missing required fields" };
  
  await prisma.service.create({
    data: {
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      iconType,
      description,
      fullDescription: description,
    }
  });
  
  revalidatePath("/");
}

export async function deleteService(id: string) {
  try {
    await prisma.service.delete({ where: { id } });
    revalidatePath("/");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch (e) {
    return { error: "Delete failed" };
  }
}

export async function deleteLead(id: string) {
  try {
    await prisma.inquiry.delete({ where: { id } });
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch (e) {
    return { error: "Delete failed" };
  }
}

export async function deleteUser(id: string) {
  try {
    await prisma.user.delete({ where: { id } });
    revalidatePath("/admin/users");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch (e) {
    return { error: "User deletion failed" };
  }
}

export async function deletePayment(id: string) {
  try {
    await prisma.payment.delete({ where: { id } });
    revalidatePath("/admin/payments");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch (e) {
    return { error: "Payment deletion failed" };
  }
}
