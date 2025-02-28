
import { ui, defaultLanguage, showDefaultLang } from './ui';

export function useTranslations(lang: keyof typeof ui) {
  return function translate(key: keyof typeof ui[typeof defaultLanguage]) {
    return ui[lang][key] || ui[defaultLanguage][key];
  }
}

export function getTranslator(locale?: string) {
  const lang = locale || defaultLanguage;
  return useTranslations(lang as keyof typeof ui);
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLanguage ? path : `/${l}${path}`
  }
}
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLanguage;
}
