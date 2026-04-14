"use server";
import { login_user } from "@/lib/auth";

export async function signInAdmin(formData: FormData) {
  const email = (formData.get("email") as string)?.toLowerCase().trim();
  const password = (formData.get("password") as string)?.trim();

  const isAdminCreds = (email === "admin@equatorbridges.com" && password === "admin123") || 
                       (email === "root@equator.com" && password === "root");

  if (isAdminCreds) {
    await login_user({
      id: "admin-id-master",
      email: email || "admin@equatorbridges.com",
      firstName: "Admin",
      role: "ADMIN"
    });
    return { success: true };
  }
  return { error: "Identifiants invalides." };
}

export async function signInUser(formData: FormData) {
  const email = (formData.get("email") as string)?.toLowerCase().trim();
  const password = (formData.get("password") as string)?.trim();

  // Check for admin first
  const isAdminCreds = (email === "admin@equatorbridges.com" && password === "admin123") || 
                       (email === "root@equator.com" && password === "root");

  if (isAdminCreds) {
    await login_user({
      id: "admin-id-master",
      email: email || "admin@equatorbridges.com",
      firstName: "Admin",
      role: "ADMIN"
    });
    return { success: true, role: "ADMIN" };
  }

  if (email && password) {
    await login_user({
      id: "user-regular",
      email,
      firstName: email.split("@")[0],
      role: "USER"
    });
    return { success: true, role: "USER" };
  }
  return { error: "Veuillez entrer un email et un mot de passe valides." };
}

export async function registerUser(formData: FormData) {
  const email = formData.get("email") as string;
  const firstName = formData.get("firstName") as string;
  
  if (email && firstName) {
    await login_user({
      id: "user-new",
      email,
      firstName,
      role: "USER"
    });
    return { success: true };
  }
  return { error: "Please provide valid information." };
}
