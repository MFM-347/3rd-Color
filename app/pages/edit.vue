<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import chroma from 'chroma-js'
import { getUrl, isDark, copy } from '@/utils'
import {
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  Label,
} from 'reka-ui'
import { PlusIcon, MinusIcon } from '@heroicons/vue/24/solid'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

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
defineOgImageComponent('NuxtSeo', {
  title: 'Color Editor - 3rd Color',
  description: description,
  siteName: '3rd Color',
  siteLogo: meta.logo,
  theme: '#385cfa',
})
const c = ref('#385cfa')
const clr = computed(() => {
  const color = new TinyColor(c.value)
  if (color.isValid) {
    return color.toHexString()
  }
  try {
    const chromaColor = chroma(c.value)
    if (chroma.valid(c.value)) {
      return chromaColor.hex()
    }
  } catch (error) {
    console.warn('ERROR: Invalid color format')
  }
  toast(`ERROR: Invalid color format`, {
    theme: 'auto',
    type: 'warning',
  })
  return '#000000'
})
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
  return color
    .lighten(m.value.lighten)
    .darken(m.value.darken)
    .saturate(m.value.saturate)
    .desaturate(m.value.desaturate)
    .tint(m.value.tint)
    .shade(m.value.shade)
    .spin(m.value.spin * 3.6)
    .toHexString()
})
onMounted(() => {
  if (typeof window !== 'undefined') {
    const savedColor = localStorage.getItem('savedColor')
    if (savedColor) {
      c.value = savedColor
    }
  }
})
watch(c, (newClr) => {
  if (!new TinyColor(newClr).isValid) {
    toast('ERROR: Invalid color format', {
      theme: 'auto',
      type: 'warning',
    })
  }
})
const updateValue = (key: keyof typeof m.value, value: number) => {
  Object.assign(m.value, { [key]: value })
}
</script>

<template>
  <div class="min-h-screen pt-4 md:pt-8">
    <div class="mx-auto max-w-5xl">
      <div class="mb-4 px-2 text-center md:mb-8">
        <h1 class="title">Color Editor</h1>
        <p class="mt-4 text-lg text-stone-600 dark:text-stone-400">
          Transform and modify different colors with precision
        </p>
      </div>
      <div class="sec md:max-w-4xl">
        <vCInput
          type="text"
          ph="Enter any color format (e.g., #0063ff, rgb(0, 99, 255))"
          label="Color Input"
          v-model="c"
        />
        <div class="mt-4 grid gap-3 md:grid-cols-2">
          <div
            class="h-40 cursor-pointer rounded-xl"
            :style="{ backgroundColor: clr }"
            :class="[isDark(clr) ? 'text-stone-100 shadow-inner' : 'text-stone-900 shadow-md']"
          >
            <div class="flex h-full items-center justify-center">
              <p class="text-xl font-medium">Original: {{ clr }}</p>
            </div>
          </div>
          <div
            class="h-40 cursor-pointer rounded-xl"
            :style="{ backgroundColor: mClr }"
            :class="[isDark(mClr) ? 'text-stone-100 shadow-inner' : 'text-stone-900 shadow-md']"
            @click="copy(mClr)"
          >
            <div class="flex h-full items-center justify-center">
              <p class="text-xl font-medium">Modified: {{ mClr }}</p>
            </div>
          </div>
        </div>
        <div class="mt-4 grid w-full gap-6 sm:grid-cols-2">
          <div v-for="(v, key) in m" :key="key">
            <NumberFieldRoot
              :id="key"
              :name="key"
              :min="0"
              :max="100"
              :default-value="0"
              :modelValue="m[key]"
              @update:modelValue="(value) => updateValue(key, value)"
              class="w-full"
            >
              <Label
                :for="key"
                class="text-sm leading-[35px] font-semibold text-stone-700 dark:text-stone-300"
              >
                {{ key }} (%)
              </Label>
              <div
                class="flex items-center rounded-lg bg-white shadow-sm focus-within:shadow-[0_0_0_2px] focus-within:shadow-blue-500 hover:bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              >
                <NumberFieldDecrement class="p-2 disabled:opacity-30">
                  <MinusIcon class="size-5 fill-zinc-600 dark:fill-zinc-300" />
                </NumberFieldDecrement>
                <NumberFieldInput class="w-full p-2 text-center tabular-nums focus:outline-0" />
                <NumberFieldIncrement class="p-2 disabled:opacity-30">
                  <PlusIcon class="size-4 fill-zinc-600 dark:fill-zinc-300" />
                </NumberFieldIncrement>
              </div>
            </NumberFieldRoot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
