<script setup lang="ts">
import { ref, onMounted } from '#imports'
import { useRoute } from '#app'

const route = useRoute()
const isDarkMode = ref<boolean>(false)
const icon = ref('moon-stars')

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('dark-mode', isDarkMode.value ? 'enabled' : 'disabled')
  icon.value = isDarkMode.value ? 'sunny-rounded' : 'moony-stars'
}

onMounted(() => {
  const storedTheme = localStorage.getItem('dark-mode')
  isDarkMode.value =
    storedTheme === 'enabled' ||
    (storedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
  icon.value = isDarkMode.value ? 'sunny-rounded' : 'moony-stars'
})
</script>

<template>
  <nav
    class="flex items-center border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-800 dark:bg-gray-950"
  >
    <!-- Brand Logo -->
    <NuxtLink href="/" aria-label="Home" title="Home" class="flex items-center space-x-1">
      <span class="text-2xl font-bold tracking-normal text-primary dark:text-x">3X</span
      ><span
        class="hidden text-xl font-semibold tracking-wide text-gray-800 md:block dark:text-gray-200"
        >pret</span
      >
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
        class="rounded-full p-2 ta-150 hover:bg-gray-200 focus:ring focus:ring-gray-300 focus:outline-none dark:hover:bg-gray-800 dark:focus:ring-gray-700"
      >
        <Icon
          :name="`material-symbols:${icon}`"
          size="24"
          class="text-gray-700 ta-200 dark:text-gray-300"
        />
      </button>
      <a
        href="https://github.com/MFM-347/3rd-Color"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Source Code"
        class="rounded-full p-2 ta-150 hover:bg-gray-200 focus:ring focus:ring-gray-300 focus:outline-none dark:hover:bg-gray-800 dark:focus:ring-gray-700"
      >
        <Icon
          name="material-symbols:code-rounded"
          size="24"
          class="text-gray-700 ta-200 dark:text-gray-300"
        />
      </a>
    </div>
  </nav>
</template>

<style scoped>
@reference "@/style.css";

.lnk {
  @apply px-3 py-2 text-sm font-medium text-gray-600 ta-125 hover:text-gray-900 sm:text-base dark:text-gray-400 dark:hover:text-gray-100;
}
.active {
  @apply font-semibold text-gray-950 dark:text-gray-50;
}
</style>
