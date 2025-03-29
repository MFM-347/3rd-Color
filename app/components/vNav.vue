<script setup lang="ts">
import { ref, onMounted } from '#imports'
import { useRoute } from '#app'
import { SunIcon, CodeBracketIcon, MoonIcon } from '@heroicons/vue/24/solid'

const route = useRoute()
const isDarkMode = ref<boolean>(false)
const icon = ref<typeof SunIcon | typeof MoonIcon>(MoonIcon)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('dark-mode', isDarkMode.value ? 'enabled' : 'disabled')
  icon.value = isDarkMode.value ? SunIcon : MoonIcon
}

onMounted(() => {
  const storedTheme = localStorage.getItem('dark-mode')
  isDarkMode.value =
    storedTheme === 'enabled' ||
    (storedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
  icon.value = isDarkMode.value ? SunIcon : MoonIcon
})
</script>

<template>
  <nav
    class="flex items-center border-b border-ground-200 bg-ground-50 px-4 py-2 dark:border-ground-800 dark:bg-ground-950"
  >
    <!-- Brand Logo -->
    <NuxtLink href="/" aria-label="Home" title="Home" class="flex items-center space-x-1">
      <div
        class="flex items-center justify-center rounded-lg bg-gradient-to-br from-x to-primary-hover p-1.5 text-base font-bold text-ground-100"
      >
        3C
      </div>
      <span class="hidden text-xl font-bold tracking-wide text-ground-200 md:block">olors</span>
    </NuxtLink>

    <!-- Navigation Links -->
    <div class="ml-6 flex items-center space-x-2">
      <NuxtLink
        v-for="link in ['new', 'modify', 'about']"
        :key="link"
        :to="`/${link}`"
        :class="['lnk', route.path === `/${link}` ? 'active' : '']"
        :aria-label="link"
        :title="link"
        :aria-current="route.path === `/${link}` ? 'page' : undefined"
      >
        {{ link.charAt(0).toUpperCase() + link.slice(1) }}
      </NuxtLink>
    </div>

    <!-- Right-side Buttons -->
    <div class="ml-auto flex items-center space-x-2">
      <button
        type="button"
        @click="toggleDarkMode"
        :aria-label="isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'"
        :aria-pressed="isDarkMode"
        class="rounded-full p-2 ta-150 hover:bg-ground-200 focus:ring focus:ring-ground-300 focus:outline-none dark:hover:bg-ground-800 dark:focus:ring-ground-700"
      >
        <component :is="icon" class="size-6 text-ground-700 ta-200 dark:text-ground-300" />
      </button>
      <a
        href="https://github.com/MFM-347/3rd-Color"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Source Code"
        class="rounded-full p-2 ta-150 hover:bg-ground-200 focus:ring focus:ring-ground-300 focus:outline-none dark:hover:bg-ground-800 dark:focus:ring-ground-700"
      >
        <CodeBracketIcon class="size-6 text-ground-700 ta-200 dark:text-ground-300" />
      </a>
    </div>
  </nav>
</template>

<style scoped>
@reference "@/style.css";

.lnk {
  @apply px-3 py-2 text-sm font-medium text-ground-600 ta-125 hover:text-ground-900 sm:text-base dark:text-ground-400 dark:hover:text-ground-100;
}
.active {
  @apply font-semibold text-ground-950 dark:text-ground-50;
}
</style>
