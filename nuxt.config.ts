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
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'robots', content: 'index,follow,max-image-preview:large' },
        { name: 'author', content: 'Farhan Madni' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  experimental: {
    inlineSSRStyles: true,
    viewTransition: true,
    renderJsonPayloads: true,
  },
  routeRules: {
    '/': { prerender: true },
    '/app': { prerender: true },
    '/about': { prerender: true },
    '/**/*.{css, svg}': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
  },
})
