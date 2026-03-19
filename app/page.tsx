import { defaultLocale } from "@/i18n";
import { redirect } from "next/navigation";

export default function RootRedirect() {
  redirect(`/${defaultLocale}`);
}
