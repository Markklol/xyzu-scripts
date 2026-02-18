// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-swiper',
    '@vueuse/nuxt',
  ],
  devtools: { enabled: false },
  css: ['~/assets/css/variables.css'],
  eslint: {
    config: {},
  },
  icon: {
    mode: 'css',
    cssLayer: 'base',
  },
});
