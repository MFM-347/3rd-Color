<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { InformationCircleIcon, HomeIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

const route = useRoute(),
  text = ref('Toggle Dark Mode'),
  icon = ref(SunIcon)
const darkMode = () => {
  const isDark = document.documentElement.classList.toggle('dark')
  localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled')
  text.value = `Toggle ${isDark ? 'Light' : 'Dark'} Mode`
  icon.value = isDark ? SunIcon : MoonIcon
}

onMounted(() => {
  const isDarkMode = localStorage.getItem('dark-mode') === 'enabled'
  if (isDarkMode) {
    document.documentElement.classList.add('dark')
    text.value = 'Toggle Light Mode'
    icon.value = SunIcon
  } else {
    text.value = 'Toggle Dark Mode'
    icon.value = MoonIcon
  }
})
</script>

<template>
  <div
    class="fixed left-1/2 top-2 -translate-x-1/2 gap-1 rounded-full border bg-zinc-50 p-1 shadow-sm shadow-black dark:bg-zinc-950 dark:shadow-white"
  >
    <div class="grid grid-cols-3">
      <NuxtLink
        to="/"
        title="Home"
        :class="['rounded-l-full', route.path === '/' ? 'active' : 'vf-btn']"
        aria-label="Home"
      >
        <HomeIcon class="size-5" />
        <span class="sr-only">Home</span>
      </NuxtLink>
      <NuxtLink
        to="/about"
        title="About"
        :class="['rounded-none', route.path === '/about' ? 'active' : 'vf-btn']"
        aria-label="About"
      >
        <InformationCircleIcon class="size-5" />
        <span class="sr-only">About</span>
      </NuxtLink>
      <button :title="text" class="vf-btn rounded-r-full" @click="darkMode" :aria-label="text">
        <component :is="icon" class="size-5"></component>
        <span class="sr-only">{{ text }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
@reference "@/style.css";

.vf-btn {
  @apply inline-flex items-center justify-center gap-2 whitespace-nowrap px-3 py-1.5 text-sm font-medium outline-none hover:bg-zinc-200 hover:dark:bg-zinc-800;
}
.active {
  @apply inline-flex items-center justify-center gap-2 whitespace-nowrap bg-zinc-200 px-3 py-1.5 text-sm font-medium outline-none dark:bg-zinc-800;
}
</style>
