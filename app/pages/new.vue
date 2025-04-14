<script setup lang="ts">
import { ref, computed, watch } from '#imports'
import { TinyColor, random } from '@ctrl/tinycolor'
import chroma from 'chroma-js'
import { getUrl, meta, isDark } from '@/utils'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

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

defineOgImageComponent('NuxtSeo', {
  title: 'New Color - 3rd Color',
  description: description,
  siteName: '3rd Color',
  siteLogo: meta.logo,
  theme: '#187bff',
})

const copy = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() =>
      toast('Copied to clipboard!', {
        theme: 'auto',
        type: 'success',
        position: 'top-center',
        closeOnClick: false,
        autoClose: 1200,
        hideProgressBar: true,
      }),
    )
    .catch((e: unknown) =>
      toast(`Failed to copy: ${e}`, {
        theme: 'auto',
        type: 'error',
        position: 'top-center',
        closeOnClick: false,
        autoClose: 1200,
        hideProgressBar: true,
      }),
    )
}

const c = ref('#187bff')
const clr = computed(() => {
  const color = new TinyColor(c.value)
  return color.isValid
    ? color.toHexString() + 'ff' === color.toHex8String()
      ? color.toHexString()
      : color.toHex8String()
    : '#000000'
})
const handleRandom = (event: KeyboardEvent) => {
  if (event.key.toLowerCase() === 'r') {
    c.value = random().toHexString()
  }
}

const x = computed(() => new TinyColor(clr.value))
const y = computed(() => chroma(clr.value))

const formats = ref<Array<{ name: string; value: string }>>([])
const updateFormats = () => {
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
    {
      name: 'hex',
      value:
        color.toHexString() + 'ff' === color.toHex8String()
          ? color.toHexString()
          : color.toHex8String(),
    },
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
}

onMounted(() => {
  document.addEventListener('keydown', handleRandom)
  const savedColor = localStorage.getItem('savedColor')
  if (savedColor) {
    c.value = savedColor
  }
})

const save = () => {
  localStorage.removeItem('savedColor')
  localStorage.setItem('savedColor', clr.value)
}
watch(clr, useDebounceFn(updateFormats, 300), { immediate: true })
</script>

<template>
  <div class="min-h-screen pt-4 md:pt-8">
    <div class="mx-auto max-w-5xl">
      <div class="mb-4 px-2 text-center md:mb-8">
        <h1>Create New Color</h1>
        <p class="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Enter a valid color format (HEX, RGB, HSL, CMYK, HSV) to explore its properties.
        </p>
      </div>
      <div class="sec md:max-w-4xl">
        <vCInput
          type="text"
          ph="Enter any color format (e.g., #0063ff, rgb(0, 99, 255))"
          label="Color Input"
          v-model="c"
          aria-label="Enter a color code"
        />
        <div
          class="mt-4 flex h-32 items-center justify-center rounded-lg text-xl font-medium shadow-md transition-all"
          :style="{ backgroundColor: clr }"
          @click="copy(clr)"
          :class="[isDark(clr) ? 'text-gray-100 shadow-inner' : 'text-gray-900 shadow-md']"
          aria-live="polite"
          tabindex="0"
          aria-label="Color Preview"
        >
          {{ clr }}
        </div>
        <div class="grid gap-4 md:grid-cols-2">
          <!-- Color Info -->
          <div class="p-4" id="info">
            <h2 class="mb-4">Color Information</h2>
            <ul class="space-y-2">
              <li class="itm">
                <span>Brightness:</span> <span>{{ x.getBrightness().toFixed(2) }}</span>
              </li>
              <li class="itm">
                <span>Luminance:</span> <span>{{ x.getLuminance().toFixed(3) }}</span>
              </li>
              <li class="itm">
                <span>Temperature:</span> <span>{{ y.temperature() }}</span>
              </li>
              <li class="itm">
                <span>Is Dark:</span> <span>{{ x.isDark() ? 'Yes' : 'No' }}</span>
              </li>
              <li class="itm">
                <span>Complement:</span> <span>{{ x.complement().toHexString() }}</span>
              </li>
            </ul>
          </div>

          <!-- Color Conversions -->
          <div class="p-4" id="cnv">
            <h2 class="mb-4">Color Formats</h2>
            <div class="space-y-2">
              <div
                v-for="format in formats"
                :key="format.name"
                class="flex cursor-pointer justify-between rounded-md bg-gray-200 p-2 text-sm ta-150 hover:bg-gray-300 sm:rounded-lg sm:p-3 md:text-base dark:bg-gray-800 dark:hover:bg-gray-700"
                @click="copy(format.value)"
                tabindex="0"
                role="button"
                :aria-label="`Copy ${format.name}`"
              >
                <span class="font-medium uppercase">{{ format.name }}</span>
                <span class="font-mono">{{ format.value }}</span>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink to="/modify" role="link">
          <button
            @click="save"
            aria-label="Edit this Color"
            class="mt-3 w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
          >
            Edit Color
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "@/style.css";

.itm {
  @apply flex justify-between rounded-md bg-gray-50 p-2 text-sm sm:rounded-lg sm:p-3 sm:text-base dark:bg-gray-800;
}
</style>
