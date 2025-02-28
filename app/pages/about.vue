<script setup lang="ts">
import { meta, getSocial, generateSchemas, getCanonicalUrl, generateBreadcrumb } from '@/utils'

const techs = [
  { name: 'Nuxt', link: 'https://Nuxt.com/' },
  { name: 'Vue', link: 'https://vuejs.org/' },
  { name: 'TailwindCSS', link: 'https://tailwindcss.com/' },
  { name: 'TinyColor', link: 'https://github.com/scttcper/tinycolor' },
  { name: 'Chroma-js', link: 'https://github.com/gka/chroma.js' },
  {
    name: 'KokonutUI (converted to vue)',
    link: 'https://kokonutui.com/',
  },
]

const pTitle = 'About - 3rd Color'
const pageDescription =
  'Learn about 3rd Color, why it was created, and the technologies behind this powerful color tool.'
const canonicalUrl = getCanonicalUrl('/about')

useSeoMeta({
  title: 'About',
  description: pageDescription,
  ...getSocial({
    title: pTitle,
    description: pageDescription,
    url: canonicalUrl,
  }),
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(
        generateSchemas({
          type: 'WebPage',
          title: pTitle,
          description: pageDescription,
          url: canonicalUrl,
          dateModified: new Date().toISOString().split('T')[0],
        }),
      ),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify(
        generateBreadcrumb([
          { name: 'Home', url: meta.url },
          { name: 'About', url: canonicalUrl },
        ]),
      ),
    },
  ],
})
</script>

<template>
  <div class="px-6 sm:px-8 md:px-12">
    <article class="my-6">
      <header>
        <h2>About 3rd Color</h2>
      </header>

      <section id="intro" class="my-6">
        <p>
          <strong>3rd Color</strong> is a tool made for designers, developers, and artists. It offers advanced color
          insights, seamless color format conversion, and powerful color modification capabilities. Whether you're
          crafting UI designs, curating the perfect color palettes, or fine-tuning colors with precision,
          <strong>3rd Color</strong> is your creative companion.
        </p>
      </section>

      <section id="why" class="my-6">
        <h3>Why Was 3rd Color Created?</h3>
        <p>
          The internet is filled with a sea of cross-platform and web-based color tools, most serving a specific role.
          Rather than sticking to a single purpose — such as a
          <i>contrast checker</i> — we coded an all-in-one platform that integrates the most essential and powerful
          color manipulation tools. Our goal was to create a unified and efficient solution that meets the diverse needs
          of creativity and professionalism.
        </p>
        <p class="mt-4">
          Inspired by the best features of some existing tools, <strong>3rd Color</strong> combines the strengths of:
        </p>
        <ul class="mt-2 list-disc space-y-2 pl-6 text-lg">
          <li>
            <a class="lnk" href="https://hue.tools/" target="_blank" rel="noopener">Hue.tools</a>
            – for effortless color mixing, blending, and modification.
          </li>
          <li>
            <a class="lnk" href="https://uicolors.app/" target="_blank" rel="noopener">UI Colors</a>
            – for generating harmonious and aesthetically pleasing color schemes (currently under development).
          </li>
          <li>
            <a class="lnk" href="https://it-tools.tech/color-converter" target="_blank" rel="noopener"
              >IT-Tools' Color Converter</a
            >
            – for accurate, multi-format color conversion to meet various project requirements.
          </li>
        </ul>

        <p class="mt-4">
          With <strong>3rd Color</strong>, you no longer need to switch between multiple tools each time. It allows you
          to enhance your creative workflow and boost your efficiency.
        </p>
      </section>

      <section id="credits" class="my-6">
        <h3>Credits</h3>
        <p>Techs used in the creation of <b>3rd Color</b> are as follows:</p>
        <ul class="mt-2 list-disc space-y-2 pl-6 text-lg">
          <li v-for="(tech, index) in techs" :key="index">
            <a class="lnk" :href="tech.link" target="_blank" rel="noopener" :title="tech.name">
              {{ tech.name }}
            </a>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>
