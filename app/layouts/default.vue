<template>
  <div class="flex flex-col">
    <vNav />
    <main id="main" class="h-full flex-grow pt-6 opacity-0 ta-400" @load="fadeIn">
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
