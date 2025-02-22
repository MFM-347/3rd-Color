<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const text = ref('Dark')
const darkMode = () => {
  const isDark = document.documentElement.classList.toggle('dark')
  localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled')
  text.value = isDark ? 'Light' : 'Dark'
}

onMounted(() => {
  const isDarkMode = localStorage.getItem('dark-mode') === 'enabled'
  if (isDarkMode) {
    document.documentElement.classList.add('dark')
    text.value = 'Light'
  } else {
    text.value = 'Dark'
  }
})
</script>

<template>
  <div
    class="fixed top-2 left-1/2 -translate-x-1/2 gap-1 rounded-full border bg-zinc-50 p-1 shadow-sm shadow-black dark:bg-zinc-950 dark:shadow-white"
  >
    <div class="grid grid-cols-3">
      <RouterLink
        to="/"
        title="Home"
        :class="['rounded-l-full', route.path === '/' ? 'active' : 'vf-btn']"
      >
        <span>Home</span>
      </RouterLink>
      <RouterLink
        to="/about"
        title="About"
        :class="['rounded-none', route.path === '/about' ? 'active' : 'vf-btn']"
      >
        <span>About</span>
      </RouterLink>
      <button :title="`${text} Mode`" class="vf-btn rounded-r-full" @click="darkMode">
        <span>{{ text }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
@reference "@/style.css";

.vf-btn {
  /*  vFloat Button  */
  @apply inline-flex items-center justify-center gap-2 px-3 py-1.5 text-sm font-medium whitespace-nowrap outline-none hover:bg-zinc-200 hover:dark:bg-zinc-800;
}
.active {
  /*  Active Button  */
  @apply inline-flex items-center justify-center gap-2 bg-zinc-200 px-3 py-1.5 text-sm font-medium whitespace-nowrap outline-none dark:bg-zinc-800;
}
</style>
