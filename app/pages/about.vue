<script setup lang="ts">
import { meta, getUrl } from '@/utils'

const description = 'Learn about 3rd Color, a powerful color tool for designers and developers.'
const url = getUrl('/about')
useSeoMeta({
  title: 'About',
  description,
  ogUrl: url,
  ogTitle: 'About - 3rd Color',
  ogDescription: description,
  ogImageAlt: meta.alt,
  twitterTitle: 'About - 3rd Color',
  twitterDescription: description,
  twitterImageAlt: meta.alt,
})
useHead({
  link: [{ rel: 'canonical', href: url }],
})
defineOgImageComponent('NuxtSeo', {
  title: 'About - 3rd Color',
  description: description,
  siteName: '3rd Color',
  siteLogo: meta.logo,
  theme: '008bff',
})

const techs = [
  { name: 'Nuxt', link: 'https://Nuxt.com/' },
  { name: 'Vue', link: 'https://vuejs.org/' },
  { name: 'TailwindCSS', link: 'https://tailwindcss.com/' },
  { name: 'TinyColor', link: 'https://github.com/scttcper/tinycolor' },
  { name: 'Chroma-js', link: 'https://github.com/gka/chroma.js' },
  { name: 'KokonutUI (vue-ed components)', link: 'https://kokonutui.com/' },
]
</script>

<template>
  <div class="min-h-screen pt-4 md:pt-8">
    <div class="mx-auto max-w-5xl">
      <div class="mb-4 px-2 text-center md:mb-8">
        <h1 class="title">About 3rd Color</h1>
      </div>
      <div class="sec max-w-3xl">
        <section id="intro" class="mb-8">
          <p class="text-lg leading-relaxed">
            <strong>3rd Color</strong> is a comprehensive color tool designed for designers and
            developers. It combines essential <i>color manipulation features</i> into a single but
            efficient platform, providing color insights, format conversion, and modification
            capabilities.
          </p>
        </section>
        <section id="techs">
          <h2 class="text-2xl font-bold">Credits</h2>
          <p class="mt-4 mb-2 text-lg">Built with following amazing technologies:</p>
          <ul class="flex flex-row flex-wrap gap-2">
            <li v-for="tech in techs" :key="tech.name">
              <a
                :href="tech.link"
                target="_blank"
                rel="noopener nofollow"
                class="inline-flex items-center rounded-lg bg-zinc-200 px-4 py-2 text-lg hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              >
                {{ tech.name }}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
