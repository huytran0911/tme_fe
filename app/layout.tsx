import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TME - Thien Minh Electronics",
  description: "Cua hang linh kien dien tu TME - Thien Minh Electronics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-background text-slate-900" suppressHydrationWarning>{children}</body>
    </html>
  );
}
