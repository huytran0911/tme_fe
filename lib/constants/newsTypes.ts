/**
 * News Type Constants
 * Maps to the typeNews field in the API
 */

export const NewsType = {
  Support: "hotro",
  Promotion: "khuyenmai",
  News: "tintuc",
} as const;

export type NewsTypeValue = typeof NewsType[keyof typeof NewsType];

/**
 * Array of all news types
 */
export const AllNewsTypes: NewsTypeValue[] = [
  NewsType.Support,
  NewsType.Promotion,
  NewsType.News,
];

/**
 * Check if a given string is a valid news type
 * @param type - The type string to validate
 * @returns true if the type is valid, false otherwise
 */
export function isValidNewsType(type: string): type is NewsTypeValue {
  return AllNewsTypes.includes(type as NewsTypeValue);
}

/**
 * Get display name for news type (Vietnamese)
 * @param type - The news type
 * @returns Display name in Vietnamese
 */
export function getNewsTypeDisplayName(type: NewsTypeValue, locale: string = "vi"): string {
  const names: Record<NewsTypeValue, { vi: string; en: string }> = {
    [NewsType.Support]: { vi: "Tin hỗ trợ", en: "Support" },
    [NewsType.Promotion]: { vi: "Tin khuyến mãi", en: "Promotion" },
    [NewsType.News]: { vi: "Tin tức", en: "News" },
  };

  return locale === "vi" ? names[type].vi : names[type].en;
}
