export default defineNuxtConfig({
    modules: [
      // https://github.com/nuxt-modules/supabase
      '@nuxtjs/supabase',
      '@nuxtjs/tailwindcss',
      'nuxt-icon',
      '@nuxtjs/i18n'
    ],
    runtimeConfig: {
      public: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000'
      },
    },
    supabase: {
      redirectOptions: {
        login: '/',
        callback: '/confirm'
      },
    },
    i18n: {
      locales: [
        {
          code: 'de',
          file: 'de.json'
        },
        {
          code: 'en',
          file: 'en.json'
        },
      ],
      lazy: true,
      langDir: 'lang',
      defaultLocale: 'de'
    }
  })