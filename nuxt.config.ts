import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    compressPublicAssets: true,
  },
  css: ['@/style.css'],
  future: {
    compatibilityVersion: 4,
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
  modules: ['@nuxtjs/sitemap'],
  site: {
    url: 'https://3color.vercel.app',
    name: '3rd Color - Professional Color Tools',
  },
  features: {
    inlineStyles: true,
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  experimental: {
    viewTransition: true,
    renderJsonPayloads: true,
  },
  routeRules: {
    '/': { redirect: '/new' },
    '/new': { prerender: true },
    '/edit': { prerender: true },
    '/about': { prerender: true },
    '/**/*.{css,svg,jpg,jpeg,png,webp}': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
  },
})
