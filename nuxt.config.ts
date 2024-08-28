// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.scss',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@nuxt/eslint',
    'shadcn-nuxt',
    'nuxt-lucide-icons',
    '@nuxtjs/leaflet'
  ],
  
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})