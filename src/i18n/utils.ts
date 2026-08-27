import { ui, type Locales, type UiKey } from "./ui";
import { SITE } from "../config/site";

export type { Locales };

export const locales = SITE.locales;
export const defaultLocale = SITE.defaultLocale;

/** Returns native script display name for a locale */
export function getLocaleName(locale: Locales): string {
  const names: Record<Locales, string> = {
    en: "English",
    kn: "ಕನ್ನಡ",
    hi: "हिन्दी",
  };
  return names[locale];
}

/** Returns the HTML lang attribute for a locale */
export function getLangAttr(locale: Locales): string {
  const attrs: Record<Locales, string> = {
    en: "en",
    kn: "kn",
    hi: "hi",
  };
  return attrs[locale];
}

/** Returns hreflang value for a locale (BCP 47) */
export function getHreflang(locale: Locales): string {
  const tags: Record<Locales, string> = {
    en: "en",
    kn: "kn",
    hi: "hi",
  };
  return tags[locale];
}

/**
 * Returns a translation function for the given locale.
 * Usage: const t = useTranslations('en'); t('nav.home')
 */
export function useTranslations(locale: Locales) {
  return function t(key: UiKey): string {
    const localeStrings = ui[locale] as Record<string, string>;
    const fallback = ui.en as Record<string, string>;
    return localeStrings[key] ?? fallback[key] ?? key;
  };
}

/**
 * Extracts locale from a URL pathname.
 * '/en/some/path' → 'en'
 */
export function getLocaleFromPathname(pathname: string): Locales {
  const [, lang] = pathname.split("/");
  if (lang && locales.includes(lang as Locales)) {
    return lang as Locales;
  }
  return defaultLocale;
}

/**
 * Prepends locale to a path.
 * getLocaleUrl('en', '/python/') → '/en/python/'
 */
export function getLocaleUrl(locale: Locales, path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath === "/" ? "/" : cleanPath}`;
}

/**
 * Strips the locale prefix from a pathname.
 * '/en/python/roadmap/' → '/python/roadmap/'
 */
export function stripLocale(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && locales.includes(parts[0] as Locales)) {
    return "/" + parts.slice(1).join("/") + (pathname.endsWith("/") ? "/" : "");
  }
  return pathname;
}

/**
 * Builds alternate language URLs for a given pathname (with locale prefix stripped).
 * Used to generate hreflang tags.
 */
export function getAlternateUrls(
  siteUrl: string,
  localePath: string
): Array<{ locale: Locales; hreflang: string; url: string }> {
  return locales.map((locale) => ({
    locale,
    hreflang: getHreflang(locale),
    url: `${siteUrl}/${locale}${localePath === "/" ? "/" : localePath}`,
  }));
}

/**
 * Formats a Date for display using the locale's conventions.
 */
export function formatDate(date: Date, locale: Locales): string {
  const localeMap: Record<Locales, string> = {
    en: "en-US",
    kn: "kn-IN",
    hi: "hi-IN",
  };
  return new Intl.DateTimeFormat(localeMap[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/**
 * Returns the category label in the given locale.
 */
export function getCategoryLabel(
  category: string,
  locale: Locales,
  t: ReturnType<typeof useTranslations>
): string {
  const map: Record<string, UiKey> = {
    "ai-ml": "category.aiml",
    python: "category.python",
    "ai-tools": "category.aitools",
    projects: "category.projects",
    career: "category.career",
    tutorials: "category.tutorials",
  };
  return map[category] ? t(map[category]) : category;
}
