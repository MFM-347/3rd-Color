<script setup lang="ts">
import { ref, watch, onMounted, computed } from '#imports'
import { TinyColor, random } from '@ctrl/tinycolor'
import { getUrl, meta, isDark } from '@/utils'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const description = "3rd Color's Color Editor lets you modify and transform colors with precision."
const url = getUrl('/modify')

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

const m = ref({
  lighten: 0,
  darken: 0,
  saturate: 0,
  desaturate: 0,
  tint: 0,
  shade: 0,
  spin: 0,
})
const computeMods = () => {
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
}

const mClr = ref(computeMods())
const updateMods = useDebounceFn(() => {
  mClr.value = computeMods()
  localStorage.setItem('savedMClr', JSON.stringify(m.value))
}, 300)
const handleRandom = (event: KeyboardEvent) => {
  if (event.key.toLowerCase() === 'r') {
    c.value = random().toHexString()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleRandom)
  if (typeof window !== 'undefined') {
    const savedColor = localStorage.getItem('savedColor')
    const savedMods = localStorage.getItem('savedMClr')
    if (savedColor) c.value = savedColor
    if (savedMods) m.value = JSON.parse(savedMods)
  }
})

watch(c, (newClr) => {
  if (!new TinyColor(newClr).isValid) {
    console.warn('ERROR: Invalid color format')
  }
  localStorage.setItem('savedColor', newClr)
})
watch(m, updateMods, { deep: true })
</script>

<template>
  <div class="min-h-screen pt-4 md:pt-8">
    <div class="mx-auto max-w-5xl">
      <div class="mb-4 px-2 text-center md:mb-8">
        <h1>Color Editor</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Transform and modify different colors with precision
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
        <div class="mt-4 grid gap-3 md:grid-cols-2">
          <div
            class="h-40 cursor-pointer rounded-xl focus-visible:ring-2"
            :style="{ backgroundColor: clr }"
            :class="[isDark(clr) ? 'text-gray-100 shadow-inner' : 'text-gray-900 shadow-md']"
            tabindex="0"
            :aria-label="`Original color: ${clr}.`"
          >
            <div class="flex h-full items-center justify-center">
              <p class="text-xl font-medium">Original: {{ clr }}</p>
            </div>
          </div>
          <div
            class="h-40 cursor-pointer rounded-xl focus-visible:ring-2"
            :style="{ backgroundColor: mClr }"
            :class="[isDark(mClr) ? 'text-gray-100 shadow-inner' : 'text-gray-900 shadow-md']"
            tabindex="0"
            @click="copy(mClr)"
            @keydown.enter="copy(mClr)"
            :aria-label="`Modified color: ${mClr}. Click to copy.`"
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
              @update:modelValue="(value: number) => (m[key] = value)"
              class="w-full"
            >
              <Label :for="key" class="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {{ key }} (%)
              </Label>
              <div
                class="flex min-h-8 flex-row rounded-lg bg-gray-100 shadow-sm focus-within:ring-2 focus-within:ring-primary dark:bg-gray-800"
              >
                <NumberFieldDecrement
                  class="min-h-8 rounded-l-lg p-2 hover:bg-gray-300 focus-visible:ring-2 dark:hover:bg-gray-700"
                  :aria-label="'Decrease ' + key"
                >
                  <Icon
                    name="material-symbos:remove-rounded"
                    size="16"
                    class="fill-gray-600 dark:fill-gray-300"
                  />
                </NumberFieldDecrement>
                <NumberFieldInput
                  class="flex-1 p-2 text-center text-base outline-none"
                  :aria-label="'Input for ' + key"
                />
                <NumberFieldIncrement
                  class="min-h-8 rounded-r-lg p-2 hover:bg-gray-300 focus-visible:ring-2 dark:hover:bg-gray-700"
                  :aria-label="'Increase ' + key"
                >
                  <Icon
                    name="material-symbos:add-rounded"
                    size="16"
                    class="fill-gray-600 dark:fill-gray-300"
                  />
                </NumberFieldIncrement>
              </div>
            </NumberFieldRoot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
