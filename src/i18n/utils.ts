
import { ui, defaultLanguage } from './ui';
export function useTranslations(lang: keyof typeof ui) {
  return function translate(key: keyof typeof ui[typeof defaultLanguage]) {
    return ui[lang][key] || ui[defaultLanguage][key];
  }
}