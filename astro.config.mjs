// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://Texhnolyze47.github.io',
    base: 'personal-web',
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'es',
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: true,
        }

    },

});
