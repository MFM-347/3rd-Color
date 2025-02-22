<template>
  <div class="flex flex-col px-8 py-4">
    <h1 class="text-center text-3xl font-bold">3rd Color</h1>
    <vCInput type="text" ph="Enter Color (e.g #0063ff)" label="Enter Color" v-model="clr" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <vInfo :color="clr" />
      <vCnv class="cols-span-1 md:col-span-2" :color="clr" />
      <vMdf class="cols-span-1 md:col-span-3" :color="clr" />
    </div>
  </div>
  <vFloat />
  <PWABadge />
</template>

<script setup lang="ts">
import vCInput from '@/components/vCInput.vue'
import vInfo from '@/components/vInfo.vue'
import vCnv from '@/components/vCnv.vue'
import vMdf from '@/components/vMdf.vue'
import vFloat from '@/components/vFloat.vue'
import PWABadge from '@/components/PWABadge.vue'
import { ref, watch, onMounted } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'

const clr = ref(new TinyColor('#0063ff').toHexString())

const updateUrl = (color: string) => {
  const url = new URL(window.location.href)
  const colorValue = color.replace('#', '')
  url.searchParams.set('c', encodeURIComponent(colorValue))
  window.history.replaceState({}, '', url.toString())
}
onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const colorParam = params.get('c')
  clr.value = colorParam ? `#${decodeURIComponent(colorParam)}` : '#0063ff'
})
watch(clr, (newColor) => {
  updateUrl(newColor)
})
</script>
