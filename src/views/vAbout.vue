<script setup lang="ts">
const techs = [
  { name: 'Vite', link: 'https://vite.dev/' },
  { name: 'Vue', link: 'https://vuejs.org/' },
  { name: 'TailwindCSS', link: 'https://tailwindcss.com/' },
  { name: 'TinyColor', link: 'https://github.com/scttcper/tinycolor' },
  { name: 'Chroma-js', link: 'https://github.com/gka/chroma.js' },
  {
    name: 'KokonutUI (converted to vue)',
    link: 'https://kokonutui.com/',
  },
]
</script>

<template>
  <div class="p-4 sm:px-10 md:px-20">
    <h2>About</h2>
    <section>
      <div id="intro">
        <p>
          <strong>3rd Color</strong> is an tool made for designers, developers, and artists. It
          offers advanced color insights, seamless color format conversion, and powerful color
          modification capabilities. Whether you're crafting UI designs, curating the perfect color
          palettes, or fine-tuning colors with precision, <strong>3rd Color</strong> is your
          creative companion.
        </p>
      </div>
    </section>
    <section id="why" class="mt-6">
      <h3>Why Was 3rd Color Created?</h3>
      <p>
        The internet is filled with a sea of cross-platform and web-based color tools, most serving
        a specific role. Rather than sticking to a single purpose — such as a
        <i>contrast checker</i> — we coded an all-in-one platform that integrates the most essential
        and powerful color manipulation tools. Our goal was to create a unified and efficient
        solution that meets the diverse needs of creativity and professionalism.
      </p>
      <p class="mt-4">
        Inspired by the best features of some existing tools, <strong>3rd Color</strong> combines
        the strengths of:
      </p>
      <ul class="mt-2 list-disc pl-6 text-lg">
        <li>
          <a href="https://hue.tools/" target="_blank">Hue.tools</a>
          – for effortless color mixing, blending, and modification.
        </li>
        <li>
          <a href="https://uicolors.app/" target="_blank">UI Colors</a>
          – for generating harmonious and aesthetically pleasing color schemes (currently under
          development).
        </li>
        <li>
          <a href="https://it-tools.tech/color-converter" target="_blank"
            >IT-Tools' Color Converter</a
          >
          – for accurate, multi-format color conversion to meet various project requirements.
        </li>
      </ul>

      <p class="mt-4">
        With <strong>3rd Color</strong>, you no longer need to switch between multiple tools each
        time. It allows you to enhances your creative workflow and boosts your efficiency.
      </p>
    </section>
    <section id="credits">
      <h3>Credits</h3>
      <p>Techs used in the creation of <b>3rd Color</b> are as follows:</p>
      <ul class="mt-2 list-disc pl-6 text-lg">
        <li v-for="(tech, index) in techs" :key="index">
          <a :href="tech.link" target="_blank" :title="tech.name">
            {{ tech.name }}
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
