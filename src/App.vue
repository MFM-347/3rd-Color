<template>
  <div class="flex flex-col px-8 py-4">
    <h1 class="text-center text-3xl font-bold">VibrantX</h1>
    <vCInput type="text" v-model="clr" />
    <vMain :color="clr" />
  </div>
  <PWABadge />
  <vFloat />
</template>

<script setup lang="ts">
import vCInput from '@/components/vCInput.vue'
import vMain from '@/components/vMain.vue'
import PWABadge from '@/components/PWABadge.vue'
import vFloat from '@/components/vFloat.vue'
import { ref, watch, onMounted } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'

const clr = ref(new TinyColor('#255bff').toHexString())

const updateUrl = (color: string) => {
  const url = new URL(window.location.href)
  const colorValue = color.replace('#', '')
  url.searchParams.set('c', encodeURIComponent(colorValue))
  window.history.replaceState({}, '', url.toString())
}
onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const colorParam = params.get('c')
  clr.value = colorParam ? `#${decodeURIComponent(colorParam)}` : '#255bff'
})
watch(clr, (newColor) => {
  updateUrl(newColor)
})
</script>
