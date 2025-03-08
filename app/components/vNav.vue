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
  isDarkMode.value = localStorage.getItem('dark-mode') === 'enabled'
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  icon.value = isDarkMode.value ? SunIcon : MoonIcon
})
</script>

<template>
  <nav
    class="flex items-center border-b border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-950"
  >
    <NuxtLink to="/new" class="flex items-center space-x-1">
      <div
        class="bg-clr-400 flex size-8 items-center justify-center rounded-xl p-1 text-lg font-bold text-gray-800"
      >
        3C
      </div>
      <span class="hidden text-xl font-medium tracking-wide md:block">olors</span>
    </NuxtLink>
    <div class="ml-6 flex items-center space-x-2">
      <NuxtLink
        v-for="link in ['new', 'edit', 'about']"
        :key="link"
        :to="`/${link}`"
        :class="['lnk', route.path === `/${link}` ? 'active' : '']"
        :aria-current="route.path === `/${link}` ? 'page' : undefined"
      >
        {{ link.charAt(0).toUpperCase() + link.slice(1) }}
      </NuxtLink>
    </div>
    <div class="ml-auto flex items-center space-x-2">
      <button
        @click="toggleDarkMode"
        :aria-label="isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'"
        class="ta-100 rounded-lg p-2 hover:bg-zinc-300 dark:hover:bg-zinc-700"
      >
        <component :is="icon" class="size-6" />
      </button>
      <a
        href="https://github.com/MFM-347/3rd-Color"
        target="_blank"
        rel="noopener"
        aria-label="Source Code"
        class="ta-100 rounded-lg p-2 hover:bg-zinc-300 dark:hover:bg-zinc-700"
      >
        <CodeBracketIcon class="size-6" />
      </a>
    </div>
  </nav>
</template>

<style scoped>
@reference "@/style.css";

.lnk {
  @apply ta-125 px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100;
}
.active {
  @apply font-semibold text-gray-950 dark:text-gray-50;
}
</style>
