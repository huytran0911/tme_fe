import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import type { User } from "@/types/auth";

const mockUser: User = {
  id: "u-demo",
  fullName: "Nguyen Van A",
  email: "info@tme.vn",
  avatarUrl: null,
};

export async function GET() {
  const store = await cookies();
  const auth = store.get("mock-auth")?.value;
  if (!auth) {
    return NextResponse.json({ user: null });
  }
  return NextResponse.json({ user: mockUser });
}
