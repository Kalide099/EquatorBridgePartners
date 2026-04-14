import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  const { pathname } = request.nextUrl;

  // Validate session actively
  let decoded = null;
  if (session) {
     decoded = await decrypt(session);
  }

  // Protect Admin dashboard route
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!decoded) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    if (decoded?.user?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/login", request.url)); 
    }
  }

  // Protect User dashboard route
  if (pathname.startsWith("/dashboard") && !pathname.startsWith("/admin")) {
    if (!decoded) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }


  // Clear bad cookies dynamically if they visit public routes and session is invalid
  if (session && !decoded) {
     const response = NextResponse.next();
     response.cookies.delete("session");
     return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/register", "/admin/login"],
};
