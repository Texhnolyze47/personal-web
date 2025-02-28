
import { ui, defaultLanguage } from './ui';

export function useTranslations(lang: keyof typeof ui) {
  return function translate(key: keyof typeof ui[typeof defaultLanguage]) {
    return ui[lang][key] || ui[defaultLanguage][key];
  }
}

export function getTranslator(locale?: string) {
  const lang = locale || defaultLanguage;
  return useTranslations(lang as keyof typeof ui);
}