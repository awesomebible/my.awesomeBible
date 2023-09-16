export default defineNuxtConfig({
    modules: [
      // https://github.com/nuxt-modules/supabase
      '@nuxtjs/supabase',
      '@nuxtjs/tailwindcss',
      'nuxt-icon'
      // https://github.com/nuxt-modules/color-mode
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
    }
  })