import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  runtimeConfig: {
    public: {
      VITE_GA: process.env.VITE_GA,
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

  modules: [
    '@nuxtjs/sitemap',
    'nuxt-og-image',
    'nuxt-schema-org',
    'reka-ui/nuxt',
    '@vueuse/nuxt',
    '@nuxt/icon',
  ],

  site: {
    title: '3rd Color - Color Tools for Designers & Developers',
    description:
      '3rd Color is a powerful, user-friendly app that offers color information, color conversions, color modification and other color manipulation features.',
    url: 'https://3color.vercel.app/',
  },

  sitemap: {
    xsl: false,
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
