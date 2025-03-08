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
// defineOgImageComponent('NuxtSeo', {
//   title: 'About - 3rd Color',
//   description: description,
//   siteName: '3rd Color',
//   siteLogo: meta.logo,
//   theme: '008bff',
// })

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
  <div class="min-h-screen pt-8">
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 text-center">
        <h1 class="text-5xl font-extrabold text-gray-950 dark:text-gray-50">About 3rd Color</h1>
      </div>
      <div class="mx-auto max-w-3xl rounded-2xl bg-zinc-100 p-8 shadow-xl dark:bg-zinc-900">
        <section id="intro" class="mb-8">
          <p class="text-lg leading-relaxed">
            <strong>3rd Color</strong> is a comprehensive color tool designed for designers and
            developers. It combines essential color manipulation features into a single but
            efficient platform, providing color insights, format conversion, and modification
            capabilities.
          </p>
        </section>
        <section id="techs">
          <h2 class="text-2xl font-bold">Credits</h2>
          <p class="mb-2 mt-4 text-lg">Built with following amazing technologies:</p>
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
