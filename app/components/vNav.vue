<script setup lang="ts">
import { ref, onMounted } from '#imports'
import { useRoute } from '#app'
import { SunIcon, CodeBracketIcon, MoonIcon } from '@heroicons/vue/24/solid'

const route = useRoute()
const isDark = ref<boolean>(false)
const icon = ref<typeof SunIcon | typeof MoonIcon>(MoonIcon)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('dark-mode', isDark.value ? 'enabled' : 'disabled')
  icon.value = isDark.value ? SunIcon : MoonIcon
}

onMounted(() => {
  const storedTheme = localStorage.getItem('dark-mode')
  isDark.value =
    storedTheme === 'enabled' ||
    (storedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
  icon.value = isDark.value ? SunIcon : MoonIcon
})
</script>

<template>
  <nav
    class="flex items-center border-b border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-950"
  >
    <!-- Brand Logo -->
    <NuxtLink href="/" aria-label="Home" title="Home" class="flex items-center space-x-1">
      <div
        class="flex aspect-square h-8 items-center justify-center rounded-xl bg-primary p-2 text-base font-bold text-foreground"
      >
        3C
      </div>
      <span class="hidden text-xl font-medium tracking-wide md:block">olors</span>
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
        :aria-label="isDark ? 'Toggle Light Mode' : 'Toggle Dark Mode'"
        :aria-pressed="isDark"
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
