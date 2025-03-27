<script setup lang="ts">
import { meta, getUrl } from '@/utils'
import {
  InformationCircleIcon,
  ArrowsRightLeftIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/vue/24/solid'

const description =
  '3rd Color is a powerful, user-friendly app that offers color information, color conversions, color modification, and other color manipulation features.'
const url = getUrl('/')
useSeoMeta({
  title: '3rd Color - Color Tools for Designers & Developers',
  description,
  ogUrl: url,
  ogTitle: '3rd Color - Color Tools for Designers & Developers',
  ogDescription: description,
  ogImageAlt: '3rd Color logo',
  twitterTitle: '3rd Color - Color Tools for Designers & Developers',
  twitterDescription: description,
  twitterImageAlt: '3rd Color logo',
})
useHead({
  titleTemplate: null,
  link: [{ rel: 'canonical', href: url }],
})
defineOgImageComponent('NuxtSeo', {
  title: '3rd Color - Color Tools for Designers & Developers',
  description,
  siteName: '3rd Color',
  siteLogo: meta.logo,
  theme: '#187bff',
})
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="hero mx-auto flex flex-col items-center py-12 text-center">
      <img :src="meta.logo" alt="3rd Color Logo" class="my-6" height="125" width="125" />
      <h1 class="title">3rd Color</h1>
      <p class="mt-3 max-w-xl text-lg text-muted">
        {{ description }}
      </p>
      <a href="/new" class="btn mt-4"> Start 3rd Color </a>
    </div>
    <section class="features mt-12">
      <div class="text-center">
        <h2>Features</h2>
      </div>
      <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div class="feature-item">
          <InformationCircleIcon class="mb-4 h-12 w-12 text-primary" />
          <h3>Color Information</h3>
          <p class="mt-2 text-muted">
            Obtain detailed information about any color, including format, brightness, luminance,
            and more.
          </p>
          <a href="/new" aria-label="Check Out" class="btn"> Check it out </a>
        </div>
        <div class="feature-item">
          <ArrowsRightLeftIcon class="mb-4 h-12 w-12 text-primary" />
          <h3>Format Conversion</h3>
          <p class="mt-2 text-muted">
            Seamlessly convert between multiple color formats, including HEX, RGB, CMYK, HSL, HSV,
            and more.
          </p>
          <a href="/new" aria-label="Check Out" class="btn"> Check it out </a>
        </div>
        <div class="feature-item">
          <AdjustmentsHorizontalIcon class="mb-4 h-12 w-12 text-primary" />
          <h3>Color Modification</h3>
          <p class="mt-2 text-muted">
            Modify colors with precision using controls for lightness, saturation, tint, shade, and
            hue rotation.
          </p>
          <a href="/modify" aria-label="Check Out" class="btn"> Check it out </a>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
@reference "@/style.css";

.feature-item {
  @apply flex flex-col items-center rounded-lg border border-muted p-6 sm:p-8 text-center shadow-md sm:shadow-lg;
}
</style>
