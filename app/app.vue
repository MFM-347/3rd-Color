<script setup lang="ts">
const gaId = useRuntimeConfig().public.NUXT_GA
const isDark = ref<boolean>(false)
const enableDark = (enabled: boolean) => {
  document.documentElement.classList.toggle('dark', enabled)
  localStorage.setItem('dark-mode', enabled ? 'enabled' : 'disabled')
  isDark.value = enabled
}

onMounted(() => {
  const savedTheme = localStorage.getItem('dark-mode')
  const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  enableDark(savedTheme === 'enabled' || (!savedTheme && preferDark))
})

useSeoMeta({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow, max-image-preview:large',
  author: 'Farhan Madni',
  themeColor: '#187bff',
  ogLocale: 'en_US',
  ogType: 'website',
  twitterCreator: '@mfm347',
  twitterCard: 'summary_large_image',
  mobileWebAppCapable: 'yes',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppTitle: 'Color Xpret',
  googleSiteVerification: '9C3mmoooLN2NLh5PUEVgr98hTKYWPIarhqp7Efdfwuo',
})

useHead({
  htmlAttrs: {
    lang: 'en',
    class: isDark.value ? 'dark' : '',
  },
  titleTemplate: '%s - Color Xpret',
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: undefined },
    {
      rel: 'preload',
      href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..800;1,14..32,300..800&display=swap',
      as: 'style',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..800;1,14..32,300..800&display=swap',
    },
  ],
  script: [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
      async: true,
    },
    {
      value: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `,
      type: 'text/javascript',
    },
  ],
})
</script>

<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>

<style>
@reference "@/style.css";

.page-enter-active,
.page-leave-active {
  @apply ta-300;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.125;
  filter: blur(0.8rem) saturate(125%);
}
</style>
