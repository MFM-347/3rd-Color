<template>
  <vFloat />
  <div class="flex flex-col items-center gap-y-4 pt-16 pb-8">
    <img src="/logo.svg" class="w-24" alt="3rd Color Logo" />
    <h1>3rd Color</h1>
  </div>
  <div>
    <RouterView />
  </div>
  <PWABadge />
</template>

<script setup lang="ts">
import vFloat from '@/components/vFloat.vue'
import PWABadge from '@/components/PWABadge.vue'
</script>
