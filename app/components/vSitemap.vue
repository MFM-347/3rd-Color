<template>
  <div class="mx-auto my-8 w-full max-w-3xl px-4">
    <h2>Site Map</h2>
    <nav aria-label="Site Map" class="mt-4">
      <ul class="space-y-4">
        <li v-for="(page, index) in pages" :key="index">
          <NuxtLink
            :to="page.path"
            :title="page.title"
            class="text-clr-600 hover:text-clr-800 dark:text-clr-400 dark:hover:text-clr-300 text-xl font-semibold"
          >
            {{ page.name }}
          </NuxtLink>
          <p v-if="page.description" class="mt-1 text-zinc-700 dark:text-zinc-300">{{ page.description }}</p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const pages = [
  {
    name: 'Home',
    path: '/',
    title: '3rd Color - Super Powerful Color Tools',
    description: 'WebSite homepage to offer you tour of the whole site',
  },
  {
    name: 'App',
    path: '/app',
    title: '3rd Color - Super Powerful Color Tools',
    description: 'Get started with 3rd Color and explore, modify, and convert any colors to any format.',
  },
  {
    name: 'About',
    path: '/about',
    title: 'About 3rd Color - Our Story and Mission',
    description:
      'Learn about 3rd Color, why was it created, what was inspiration and the technologies behind this color tool.',
  },
]
</script>
