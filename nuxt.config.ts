import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  runtimeConfig: {
    public: {
      NUXT_GA: process.env.NUXT_GA,
    },
  },

  css: ['@/style.css'],

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

  modules: ['reka-ui/nuxt', '@nuxt/icon', '@nuxtjs/seo', '@vueuse/nuxt'],

  site: {
    title: 'Color Xpret - Color Tools for Designers & Developers',
    description:
      'Color Xpret is a powerful, user-friendly app that offers color information, color conversions, color modification and other color manipulation features.',
    url: 'https://xpret.vercel.app/',
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Color Xpret',
      alternateName: 'Xpret',
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

  icon: {
    mode: 'svg',
    serverBundle: 'auto',
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
    '/': { sitemap: { changefreq: 'weekly', priority: 1.0 } },
    '/new': { sitemap: { changefreq: 'weekly', priority: 0.9 } },
    '/edit': { redirect: '/modify' },
    '/modify': { sitemap: { changefreq: 'weekly', priority: 0.9 } },
    '/about': { sitemap: { changefreq: 'monthly', priority: 0.8 } },
    '/**/*.{css,svg,png,woff2}': {
      headers: {
        'Cache-Control': 'public, max-age=432000, stale-while-revalidate=604800',
      },
    },
  },
})
