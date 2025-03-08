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
  modules: ['@nuxtjs/sitemap', 'nuxt-schema-org'],
  site: {
    url: 'https://3color.vercel.app',
    name: '3rd Color - Color Tools for Designers & Developers',
  },
  siteConfig: {
    title: '3rd Color - Color Tools for Designers & Developers',
    description:
      '3rd Color is a powerful, user-friendly app that offers color information, color conversions, color modification and other color manipulation features.',
    url: 'https://3color.vercel.app/',
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: '3rd Color',
      alternateName: '3Color',
      logo: '/icon.svg',
      sameAs: [
        'https://github.com/mfm-347',
        'https://dev.to/mfm-347',
        'https://codepen.io/mfm-347/',
        'https://twitter.com/@mfm347',
        'https://xyzdev.vercel.app/',
      ],
    },
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
