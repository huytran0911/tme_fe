import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { defaultLocale, locales, type Locale } from "@/i18n";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { notFound } from "next/navigation";

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout(props: LocaleLayoutProps) {
  const { children, params } = props;
  const resolvedParams = await params;
  const localeStr = resolvedParams?.locale;

  if (!locales.includes(localeStr as any)) {
    notFound();
  }

  const locale = localeStr as Locale;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AuthProvider>
        <ReactQueryProvider>
          <CartProvider>
            <WishlistProvider>{children}</WishlistProvider>
          </CartProvider>
        </ReactQueryProvider>
      </AuthProvider>
    </NextIntlClientProvider>
  );
}
