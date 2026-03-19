import { NextResponse } from "next/server";
import type { User } from "@/types/auth";

const mockUser: User = {
  id: "u-demo",
  fullName: "Nguyen Van A",
  email: "info@tme.vn",
  avatarUrl: null,
};

export async function POST() {
  const response = NextResponse.json({ success: true, user: mockUser });
  response.cookies.set("mock-auth", "1", { httpOnly: false });
  return response;
}
