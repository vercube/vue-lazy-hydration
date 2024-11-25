import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['~/assets/style.css'],
  modules: ['@vercube/nuxt-lazy-hydration'],
});
