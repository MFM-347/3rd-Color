<script setup lang="ts">
import { meta } from '@/utils'

useSeoMeta({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow, max-image-preview:large',
  author: 'Farhan Madni',
  themeColor: '#008bff',
  ogLocale: 'en_US',
  ogType: 'website',
  twitterCreator: '@mfm347',
  twitterCard: 'summary_large_image',
  mobileWebAppCapable: 'yes',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppTitle: '3rd Color',
  appleMobileWebAppStatusBarStyle: 'black-translucent',
  googleSiteVerification: '9C3mmoooLN2NLh5PUEVgr98hTKYWPIarhqp7Efdfwuo',
  msapplicationTileColor: '#008bff',
})
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  titleTemplate: '%s - 3rd Color',
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' },
    {
      rel: 'preload',
      as: 'style',
      href: 'https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Assistant:wght@300..800&display=swap',
    },
    { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
  ],
  script: [
    {
      type: 'application/ld+json',
      value: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        inLanguage: 'en',
        name: '3rd Color',
        description:
          '3rd Color is a powerful suite of color tools for designers and developers. Create, analyze, and modify colors with professional-grade tools for your next project.',
        url: meta.url,
        logo: meta.logo,
        publisher: {
          '@type': 'Person',
          name: 'Farhan Madni',
          url: 'https://xyzdev.vercel.app/',
        },
        sameAs: [
          'https://github.com/mfm-347',
          'https://dev.to/mfm-347',
          'https://codepen.io/mfm-347/',
          'https://twitter.com/@mfm347',
          'https://xyzdev.vercel.app/',
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg"
      >Skip to content</a
    >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
