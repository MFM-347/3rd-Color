<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import { getUrl, isDark, copy } from '@/utils'

const description =
  "3rd Color's Color Editor let's you to modify and transform colors with 3rd Color's color editing tools"
const url = getUrl('/edit')
useSeoMeta({
  title: 'Color Editor',
  description,
  ogUrl: url,
  ogTitle: 'Color Editor - 3rd Color',
  ogDescription: description,
  ogImageAlt: meta.alt,
  twitterTitle: 'Color Editor - 3rd Color',
  twitterDescription: description,
  twitterImageAlt: meta.alt,
})
useHead({
  link: [{ rel: 'canonical', href: url }],
})
// defineOgImageComponent('NuxtSeo', {
//   title: 'Color Editor - 3rd Color',
//   description: description,
//   siteName: '3rd Color',
//   siteLogo: meta.logo,
//   theme: '008bff',
// })

const c = ref('#008bff')
const clr = ref(new TinyColor(c.value).toString())
const m = ref({
  lighten: 0,
  darken: 0,
  saturate: 0,
  desaturate: 0,
  tint: 0,
  shade: 0,
  spin: 0,
})
const mClr = computed(() => {
  let color = new TinyColor(clr.value)
  color = color
    .lighten(m.value.lighten)
    .darken(m.value.darken)
    .saturate(m.value.saturate)
    .desaturate(m.value.desaturate)
    .tint(m.value.tint)
    .shade(m.value.tint)
    .spin(m.value.spin)
  return color.toString()
})

onMounted(() => {
  const savedColor = localStorage.getItem('savedColor')
  if (savedColor) {
    c.value = savedColor
    clr.value = new TinyColor(savedColor).toString()
  }
})

watch(c, (newClr) => {
  try {
    const nC = new TinyColor(newClr).toString()
    clr.value = nC
  } catch (e) {
    console.warn('ERROR: Invalid color format - ' + e)
  }
})
</script>

<template>
  <div class="min-h-screen pt-8">
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 text-center">
        <h1 class="text-5xl font-extrabold text-gray-950 dark:text-gray-50">Color Editor</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Transform and modify different colors with precision
        </p>
      </div>
      <div class="mx-auto max-w-4xl space-y-8">
        <div class="relative rounded-2xl bg-zinc-100 p-6 shadow-xl dark:bg-zinc-900">
          <vCInput
            type="text"
            ph="Enter any color format (e.g., #0063ff, rgb(0, 99, 255))"
            label="Color Input"
            v-model="c"
          />
          <div class="mt-4 grid gap-4 md:grid-cols-2">
            <div
              class="h-40 cursor-pointer rounded-xl"
              :style="{ backgroundColor: clr }"
              :class="[isDark(clr) ? 'text-gray-100 shadow-inner' : 'text-gray-900 shadow-md']"
            >
              <div class="flex h-full items-center justify-center">
                <p class="text-xl font-medium">Original: {{ clr }}</p>
              </div>
            </div>
            <div
              class="h-40 cursor-pointer rounded-xl"
              :style="{ backgroundColor: mClr }"
              :class="[isDark(mClr) ? 'text-gray-100 shadow-inner' : 'text-gray-900 shadow-md']"
              @click="copy(mClr)"
            >
              <div class="flex h-full items-center justify-center">
                <p class="text-xl font-medium">Modified: {{ mClr }}</p>
              </div>
            </div>
          </div>
          <div class="mt-6 grid w-full gap-6 sm:grid-cols-2">
            <div v-for="(v, key) in m" :key="key">
              <VNInput
                v-model="m[key]"
                :label="key"
                :min="0"
                :max="100"
                :aria-label="v"
                class="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
