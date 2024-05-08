export default defineNuxtConfig({
  modules: [
    // https://github.com/nuxt-modules/supabase
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/devtools',
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

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'my.awesomeBible',
      short_name: 'Bibel',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },

  devtools: {
    enabled: true
  }
})
