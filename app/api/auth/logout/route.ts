import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const response = NextResponse.json({ success: true });
  const store = await cookies();
  const existing = store.get("mock-auth");
  if (existing) {
    response.cookies.set("mock-auth", "", { maxAge: 0 });
  }
  return response;
}
