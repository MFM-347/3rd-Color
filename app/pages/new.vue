<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter } from '#app'
import { TinyColor } from '@ctrl/tinycolor'
import chroma from 'chroma-js'
import { getUrl, isDark, copy } from '@/utils'

const router = useRouter()
const description =
  "3rd Color's Color Creator let's you create and analyze colors with 3rd Color's color tools"
const url = getUrl('/new')
useSeoMeta({
  title: 'New Color',
  description,
  ogUrl: url,
  ogTitle: 'New Color - 3rd Color',
  ogDescription: description,
  ogImageAlt: meta.alt,
  twitterTitle: 'New Color - 3rd Color',
  twitterDescription: description,
  twitterImageAlt: meta.alt,
})
useHead({
  link: [{ rel: 'canonical', href: url }],
})
// defineOgImageComponent('NuxtSeo', {
//   title: 'New Color - 3rd Color',
//   description: description,
//   siteName: '3rd Color',
//   siteLogo: meta.logo,
//   theme: '008bff',
// })

const c = ref('#008bff')
const clr = computed(() => {
  try {
    return new TinyColor(c.value).toString()
  } catch (e) {
    console.warn('ERROR: Invalid color format - ' + e)
    return '#000000'
  }
})
const formats = ref<Array<{ name: string; value: string }>>([])
const updateFormats = () => {
  try {
    const color = new TinyColor(clr.value)
    const y = chroma(clr.value)
    const sV = (value: number) => (isNaN(value) ? '0' : value.toFixed(2))
    const hcl = y.hcl().map(sV)
    const hsi = y.hsi().map(sV)
    const oklch = y.oklch().map(sV)
    const oklab = y.oklab().map(sV)
    const lch = y.lch().map(sV)
    const lab = y.lab().map(sV)
    formats.value = [
      { name: 'hex', value: color.toHexString() },
      { name: 'rgb', value: color.toRgbString() },
      { name: 'cmyk', value: color.toCmykString() },
      { name: 'hsl', value: color.toHslString() },
      { name: 'hsv', value: color.toHsvString() },
      { name: 'hcl', value: `hcl(${hcl.join(', ')})` },
      { name: 'hsi', value: `hsi(${hsi.join(', ')})` },
      { name: 'oklab', value: `oklab(${oklab.join(', ')})` },
      { name: 'oklch', value: `oklch(${oklch.join(', ')})` },
      { name: 'lab', value: `lab(${lab.join(', ')})` },
      { name: 'lch', value: `lch(${lch.join(', ')})` },
    ]
  } catch (e) {
    console.warn('ERROR: Failed to update color formats - ' + e)
  }
}
onMounted(() => {
  localStorage.removeItem('savedColor')
})
const edit = () => {
  localStorage.setItem('savedColor', clr.value)
  router.push('/edit')
}
watch(clr, updateFormats, { immediate: true })
</script>

<template>
  <div class="min-h-screen pt-8">
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 text-center">
        <h1 class="text-5xl font-extrabold text-gray-950 dark:text-gray-50">Create New Color</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Enter any color format (only hex, rgb, hsl, cmyk, hsv) to explore its properties and
          variations
        </p>
      </div>
      <div class="mx-auto max-w-3xl space-y-8">
        <div class="relative rounded-2xl bg-zinc-100 p-6 shadow-xl dark:bg-zinc-900">
          <vCInput
            type="text"
            ph="Enter any color format (e.g., #0063ff, rgb(0, 99, 255))"
            label="Color Input"
            v-model="c"
          />
          <div
            class="mt-4 h-32 rounded-xl transition-colors"
            :style="{ backgroundColor: clr }"
            :class="[isDark(clr) ? 'text-gray-100 shadow-inner' : 'text-gray-900 shadow-lg']"
          >
            <div class="flex h-full items-center justify-center">
              <p class="text-2xl font-medium">{{ clr }}</p>
            </div>
          </div>
          <div class="grid gap-4 rounded-2xl md:grid-cols-2">
            <div class="p-4">
              <h2 class="mb-4 text-2xl font-bold">Color Information</h2>
              <div class="space-y-3">
                <div class="flex justify-between rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
                  <span class="font-medium">Format</span>
                  <span>{{ new TinyColor(clr).format }}</span>
                </div>
                <div class="flex justify-between rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
                  <span class="font-medium">Brightness</span>
                  <span>{{ new TinyColor(clr).getBrightness().toFixed(2) }}</span>
                </div>
                <div class="flex justify-between rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
                  <span class="font-medium">Luminance</span>
                  <span>{{ new TinyColor(clr).getLuminance().toFixed(3) }}</span>
                </div>
                <div class="flex justify-between rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
                  <span class="font-medium">Is Dark</span>
                  <span>{{ new TinyColor(clr).isDark() ? 'Yes' : 'No' }}</span>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h2 class="mb-4 text-2xl font-bold">Color Formats</h2>
              <div class="space-y-3">
                <div
                  v-for="format in formats"
                  :key="format.name"
                  class="ta-150 group cursor-pointer rounded-lg bg-zinc-200 p-3 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                  @click="copy(format.value)"
                >
                  <div class="flex items-center justify-between">
                    <span class="font-medium uppercase">{{ format.name }}</span>
                    <span class="font-mono">{{ format.value ?? 'N/A' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            @click="edit"
            class="mt-6 w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
          >
            Edit Color
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
