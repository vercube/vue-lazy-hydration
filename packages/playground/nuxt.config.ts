import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['~/assets/style.css'],
  modules: ['../nuxt-lazy-hydration/src/index.ts'],
  compatibilityDate: '2024-11-25',
});
