<script setup lang="ts">
import { ref, watch } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import { getSocial, generateSchemas, getCanonicalUrl } from '@/utils'

const c = ref('#0063ff')
const clr = ref(new TinyColor(c.value).toString())
watch(c, (newClr) => {
  try {
    const nC = new TinyColor(newClr).toString()
    clr.value = nC
  } catch (e) {
    console.warn('ERROR: Invalid color format - ' + e)
  }
})
const pTitle = 'App - Super-Powerful Color App'
const description =
  '3rd Color app lets you explore, modify, and convert colors with ease. Discover advanced color features for all your creative needs.'
const canonicalUrl = getCanonicalUrl('/app')
useSeoMeta({
  title: 'App',
  description: description,
  ...getSocial({
    title: pTitle,
    description: description,
  }),
})
useHead({
  titleTemplate: null,
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(
        generateSchemas({
          type: 'WebPage',
          title: pTitle,
          description: description,
          dateModified: new Date().toISOString().split('T')[0],
        }),
      ),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify(
        generateBreadcrumb([
          { name: 'Home', url: meta.url },
          { name: 'App', url: canonicalUrl },
        ]),
      ),
    },
  ],
})
</script>

<template>
  <section class="px-4 py-6">
    <h2>Color Tools</h2>
    <p class="mx-auto mb-6 max-w-2xl text-center">
      Enter any color format (HEX, RGB, HSL, etc.) to see detailed information, conversions, and modifications.
    </p>
    <div class="flex flex-col gap-2 px-2 py-4">
      <vCInput type="text" ph="Enter Color (e.g #0063ff)" label="Enter Color" v-model="c" />
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <vInfo class="tool" :color="clr" />
        <vCnv class="tool md:col-span-2" :color="clr" />
        <vMdf class="tool md:col-span-3" :color="clr" />
      </div>
    </div>
  </section>
</template>

<style>
@reference '@/style.css';

.tool {
  @apply overflow-hidden rounded-lg border border-zinc-300 dark:border-zinc-700;
}
</style>
