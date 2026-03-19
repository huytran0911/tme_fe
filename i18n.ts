import { getRequestConfig } from "next-intl/server";

export const locales = ["vi", "en"] as const;
export const defaultLocale = "vi";

export type Locale = (typeof locales)[number];

export default getRequestConfig(({ locale }) => ({
  locale: locale ?? defaultLocale,
}));
