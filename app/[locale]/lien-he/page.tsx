import MainLayout from "@/components/MainLayout";
import type { Metadata } from "next";
import ContactContentClient from "./ContactContentClient";

export const metadata: Metadata = {
  title: "Lien he - TME.vn",
  description: "Thong tin lien he va form gui yeu cau den TME.vn",
};

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactContentClient />
    </MainLayout>
  );
}
