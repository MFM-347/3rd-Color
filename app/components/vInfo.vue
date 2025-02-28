<template>
  <div class="flex w-full flex-col gap-2 p-2">
    <h2 class="text-center text-2xl font-bold">Info</h2>
    <div class="i">Color: {{ color }}</div>
    <div class="i">Format: {{ clr.format }}</div>
    <div class="i">Brightness: {{ clr.brightness.toFixed(2) }}</div>
    <div class="i">Luminance: {{ clr.luminance.toFixed(3) }}</div>
    <div class="i">Alpha: {{ clr.alpha }}</div>
    <div class="i">Dark: {{ clr.isDark }}</div>
    <div class="i">Light: {{ clr.isLight }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'

const props = defineProps({
  color: String,
})

const clr = computed(() => {
  const c = new TinyColor(props.color)
  return {
    format: c.format,
    brightness: c.getBrightness(),
    luminance: c.getLuminance(),
    alpha: c.getAlpha(),
    isDark: c.isDark(),
    isLight: c.isLight(),
  }
})
</script>
