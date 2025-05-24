<script setup lang="ts">
import { meta, getUrl } from '@/utils'

const description =
  'Color Xpret is a powerful, user-friendly app that offers color information, color conversions, color modification, and other color manipulation features.'
const url = getUrl('/')

useSeoMeta({
  title: 'Color Xpret - Color Tools for Designers & Developers',
  description,
  ogUrl: url,
  ogTitle: 'Color Xpret - Color Tools for Designers & Developers',
  ogDescription: description,
  ogImageAlt: 'Color Xpret logo',
  twitterTitle: 'Color Xpret - Color Tools for Designers & Developers',
  twitterDescription: description,
  twitterImageAlt: 'Color Xpret logo',
})

useHead({
  titleTemplate: null,
  link: [{ rel: 'canonical', href: url }],
})

defineOgImageComponent('NuxtSeo', {
  title: 'Color Xpret - Color Tools for Designers & Developers',
  description,
  siteName: 'Color Xpret',
  siteLogo: meta.logo,
  theme: '#187bff',
})
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <header id="hero" class="mx-auto flex flex-col items-center py-12 text-center">
      <img
        :src="meta.logo"
        alt="Color Xpret logo"
        class="my-6"
        height="125"
        width="125"
        aria-hidden="true"
      />
      <h1 class="title">Color Xpret</h1>
      <p class="mt-3 max-w-xl text-lg text-gray-700 dark:text-gray-300">
        {{ description }}
      </p>
      <div id="cta" class="inline-flex gap-x-1">
        <NuxtLink
          to="/new"
          class="mt-4 transform rounded-full bg-gradient-to-r from-primary to-x px-6 py-3 font-medium text-white shadow-lg shadow-primary/25 ta-300 hover:-translate-y-1 hover:shadow-primary/40 focus:outline-2 focus:outline-offset-2 focus:outline-primary-hover"
          role="link"
          aria-label="Get Started with Color Xpret"
        >
          Get Started
        </NuxtLink>
        <a
          href="https://github.com/MFM-347/3rd-Color"
          class="mt-4 transform rounded-full border border-gray-200 bg-muted px-6 py-3 font-medium text-background shadow-lg ta-300 hover:-translate-y-1 hover:border-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary-hover dark:border-gray-700 dark:hover:border-x"
          role="link"
          target="_blank"
          aria-label="View Source Code on GitHub"
        >
          Source Code
        </a>
      </div>
    </header>

    <section id="features" class="mt-12 text-center" aria-labelledby="features-heading">
      <h2 id="features-heading">Features</h2>
      <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div class="feature-item">
          <Icon
            name="material-symbols:info-i-rounded"
            size="48"
            class="mb-4 fill-primary dark:fill-x"
            aria-hidden="true"
          />
          <h3 class="text-xl font-medium">Color Information</h3>
          <p class="mt-2 text-gray-700 dark:text-gray-300">
            Obtain detailed information about any color, including format, brightness, luminance,
            and more.
          </p>
          <a
            href="/new/#info"
            class="mt-4 btn"
            role="button"
            aria-label="Explore Color Information"
          >
            Check it out
          </a>
        </div>

        <div class="feature-item">
          <Icon
            name="material-symbols:compare-arrows-rounded"
            size="48"
            class="fill-primary dark:fill-x"
            aria-hidden="true"
          />
          <h3 class="text-xl font-medium">Format Conversion</h3>
          <p class="mt-2 text-gray-700 dark:text-gray-300">
            Seamlessly convert between multiple color formats, including HEX, RGB, CMYK, HSL, HSV,
            and more.
          </p>
          <a href="/new/#cnv" class="mt-4 btn" role="button" aria-label="Explore Format Conversion">
            Check it out
          </a>
        </div>

        <div class="feature-item">
          <Icon
            name="material-symbols:tune-rounded"
            size="48"
            class="fill-primary dark:fill-x"
            aria-hidden="true"
          />
          <h3 class="text-xl font-medium">Color Modification</h3>
          <p class="mt-2 text-gray-700 dark:text-gray-300">
            Modify colors with precision using controls for lightness, saturation, tint, shade, and
            hue rotation.
          </p>
          <a href="/modify" class="mt-4 btn" role="button" aria-label="Explore Color Modification">
            Check it out
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@reference "@/style.css";

.feature-item {
  @apply flex flex-col items-center rounded-2xl border border-gray-200 bg-white/50 p-4 text-center shadow-xl backdrop-blur-lg ta-500 ease-in-out hover:border-primary hover:shadow-2xl hover:shadow-primary/20 sm:p-8 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-x dark:hover:shadow-x/20;
}
</style>
