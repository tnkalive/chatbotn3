// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: { preset: 'static' },
  ssr: false,
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image'],
  colorMode: {
    preference: "light",
    storageKey: 'custom-key-color-mode'
  },

  devtools: {
    enabled: true
  },
  image: {
    dir: 'assets/img',
    provider: 'static',
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
