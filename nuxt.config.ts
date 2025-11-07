// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'static',
    database: {
    }
  },
  ssr: false,
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  colorMode: {
    preference: "light",
    storageKey: 'custom-key-color-mode'
  },

  devtools: {
    enabled: true
  },
  // image: {
  //   // provider: 'static',
  //   dir: 'public/images'
  // },

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
