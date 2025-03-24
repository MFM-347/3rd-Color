<script setup lang="ts">
import { ref, onMounted } from 'vue'
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
  if (storedTheme) {
    isDarkMode.value = storedTheme === 'enabled'
  } else {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  icon.value = isDarkMode.value ? SunIcon : MoonIcon
})
</script>

<template>
  <nav
    class="flex items-center border-b border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-950"
  >
    <a href="/new" class="flex items-center space-x-1">
      <div
        class="flex aspect-square h-8 items-center justify-center rounded-xl bg-primary p-2 text-base font-bold text-foreground"
      >
        3C
      </div>
      <span class="hidden text-xl font-medium tracking-wide md:block">olors</span>
    </a>
    <div class="ml-6 flex items-center space-x-2">
      <NuxtLink
        v-for="link in ['new', 'edit', 'about']"
        :key="link"
        :to="`/${link}`"
        :class="['lnk', route.path === `/${link}` ? 'active' : '']"
        role="link"
        :aria-current="route.path === `/${link}` ? 'page' : undefined"
      >
        {{ link.charAt(0).toUpperCase() + link.slice(1) }}
      </NuxtLink>
    </div>
    <div class="ml-auto flex items-center space-x-2">
      <button
        @click="toggleDarkMode"
        :aria-label="isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'"
        :aria-pressed="isDarkMode"
        class="rounded-full p-2 ta-150 hover:bg-zinc-200 focus:ring focus:ring-stone-300 focus:outline-none dark:hover:bg-zinc-800 dark:focus:ring-stone-700"
      >
        <component
          :is="icon"
          class="size-6 transform text-stone-700 ta-140 ease-in-out hover:scale-110 dark:text-stone-300"
        />
      </button>
      <a
        href="https://github.com/MFM-347/3rd-Color"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Source Code"
        class="rounded-full p-2 ta-150 hover:bg-zinc-200 focus:ring focus:ring-stone-300 focus:outline-none dark:hover:bg-zinc-800 dark:focus:ring-stone-700"
      >
        <CodeBracketIcon
          class="size-6 transform text-stone-700 ta-140 ease-in-out hover:scale-110 dark:text-stone-300"
        />
      </a>
    </div>
  </nav>
</template>

<style scoped>
@reference "@/style.css";

.lnk {
  @apply px-3 py-2 text-sm font-medium text-stone-600 ta-125 hover:text-stone-900 sm:text-base dark:text-stone-400 dark:hover:text-stone-100;
}
.active {
  @apply font-semibold text-stone-950 dark:text-stone-50;
}
</style>
