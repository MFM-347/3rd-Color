<template>
  <div class="flex min-h-screen flex-col">
    <vNav />
    <main id="main" class="container mx-auto flex-grow px-4 pt-6 sm:px-6 lg:px-8">
      <slot />
    </main>
    <vFoot />
  </div>
</template>
<script setup>
import { onMounted } from 'vue'

const fadeIn = () => {
  document.getElementById('main').classList.add('opacity-100')
}
onMounted(() => {
  fadeIn()
})
</script>
