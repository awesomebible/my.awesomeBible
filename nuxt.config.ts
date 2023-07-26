export default defineNuxtConfig({
    modules: [
      // https://github.com/nuxt-modules/supabase
      '@nuxtjs/supabase',
      '@nuxtjs/tailwindcss',
      'nuxt-icon'
      // https://github.com/nuxt-modules/color-mode
    ],
    supabase: {
      // Options
      redirect: {
        login: "https://my-awesomebible.vercel.app/login",
        callback: "https://my-awesomebible.vercel.app/home"
      }
    }
  })