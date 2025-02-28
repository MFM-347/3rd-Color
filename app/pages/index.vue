<script setup lang="ts">
import { getSocial, generateSchemas, getCanonicalUrl } from '@/utils'

const pTitle = '3rd Color - Super Powerful Color Tools'
const pageDescription =
  '3rd Color helps you explore, modify, and convert colors with ease. Discover advanced color features for all your creative needs.'
useSeoMeta({
  title: pTitle,
  description: pageDescription,
  ...getSocial({
    title: pTitle,
    description: pageDescription,
  }),
})
useHead({
  titleTemplate: null,
  link: [{ rel: 'canonical', href: getCanonicalUrl() }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(
        generateSchemas({
          type: 'WebPage',
          title: pTitle,
          description: pageDescription,
          dateModified: new Date().toISOString().split('T')[0],
        }),
      ),
    },
  ],
})
</script>

<template>
  <div>
    <section class="flex flex-col items-center px-4 py-6">
      <h2>Best Color Tools</h2>
      <p class="mx-auto mb-6 max-w-2xl text-center">
        Get detailed information about any color, conversion to any format and modification with precision, all in one
        app, the <b>3rd Color</b>.
      </p>
      <NuxtLink to="/app">
        <button class="bg-clr-600 hover:bg-clr-500 ta-150 rounded-lg p-2">Get Started for free</button>
      </NuxtLink>
    </section>
    <section class="mt-8 bg-zinc-50 px-4 py-8 dark:bg-zinc-800">
      <h2>Key Features</h2>
      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <article class="card">
          <h3>Color Information</h3>
          <p>Get detailed information about any color including format, brightness, luminance, and more.</p>
        </article>
        <article class="card">
          <h3>Format Conversion</h3>
          <p>Convert between multiple color formats including HEX, RGB, CMYK, HSL, HSV, and more advanced formats.</p>
        </article>
        <article class="card">
          <h3>Color Modification</h3>
          <p>Modify colors with precision using controls for lightness, saturation, tint, shade, and hue rotation.</p>
        </article>
      </div>
    </section>
  </div>
</template>
