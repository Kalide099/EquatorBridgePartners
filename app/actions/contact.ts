"use server";
import { prisma } from "@/lib/prisma";

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;
  const service = formData.get("service") as string || "General Inquiry";
  
  if (!name || !email || !message) return { error: "Missing required fields" };
  
  try {
    await prisma.inquiry.create({
      data: {
        name,
        email,
        phone,
        message,
        service,
      }
    });
    return { success: true };
  } catch (error) {
    console.error("Submission error:", error);
    return { error: "Failed to send message. Please try again." };
  }
}
