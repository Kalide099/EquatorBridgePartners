import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  cookies().set("session", "", { expires: new Date(0) });
  return NextResponse.redirect(new URL("/", request.url));
}
