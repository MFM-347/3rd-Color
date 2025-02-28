<script setup lang="ts">
import { meta } from '@/utils'

useSeoMeta({
  ogLocale: 'en_US',
  ogType: 'website',
  twitterCreator: '@mfm347',
  mobileWebAppCapable: 'yes',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppTitle: '3rd Color',
  appleMobileWebAppStatusBarStyle: 'black-translucent',
  themeColor: '#0063ff',
  googleSiteVerification: '9C3mmoooLN2NLh5PUEVgr98hTKYWPIarhqp7Efdfwuo',
})
useHead({
  titleTemplate: '%s - 3rd Color',
  link: [
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' },
    {
      rel: 'preload',
      as: 'style',
      href: 'https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&display=swap',
    },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&display=swap' },
    { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        inLanguage: 'en',
        name: '3rd Color',
        description:
          '3rd Color is a powerful, user-friendly color tool app that provides color information, seamless conversion, and advanced color modification.',
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
