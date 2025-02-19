<template>
  <div class="m-2 flex w-full flex-col gap-y-1 p-2">
    <h2 class="text-center text-2xl font-bold">Conversions</h2>
    <div @click="copy(clr.hex)" class="i cursor-pointer">{{ clr.hex }}</div>
    <div @click="copy(clr.rgb)" class="i cursor-pointer">{{ clr.rgb }}</div>
    <div @click="copy(clr.cmyk)" class="i cursor-pointer">{{ clr.cmyk }}</div>
    <div @click="copy(clr.hsl)" class="i cursor-pointer">{{ clr.hsl }}</div>
    <div @click="copy(clr.hsv)" class="i cursor-pointer">{{ clr.hsv }}</div>
    <div @click="copy(clr.hcl)" class="i cursor-pointer">{{ clr.hcl }}</div>
    <div @click="copy(clr.hsi)" class="i cursor-pointer">{{ clr.hsi }}</div>
    <div @click="copy(clr.oklch)" class="i cursor-pointer">{{ clr.oklch }}</div>
    <div @click="copy(clr.oklab)" class="i cursor-pointer">{{ clr.oklab }}</div>
    <div @click="copy(clr.lch)" class="i cursor-pointer">{{ clr.lch }}</div>
    <div @click="copy(clr.lab)" class="i cursor-pointer">{{ clr.lab }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import chroma from 'chroma-js'
import { copy } from '@/utils'

const props = defineProps({
  color: {
    type: String,
    default: '#000000',
  },
})
const clr = computed(() => {
  const c = new TinyColor(props.color)
  const d = chroma(props.color)
  const hcl = d.hcl()
  const hsi = d.hsi()
  const oklch = d.oklch()
  const oklab = d.oklab()
  const lch = d.lch()
  const lab = d.lab()
  return {
    hex: c.toHexString(),
    rgb: c.toRgbString(),
    cmyk: c.toCmykString(),
    hsl: c.toHslString(),
    hsv: c.toHsvString(),
    hcl: `hcl(${hcl[0].toFixed(1)}, ${hcl[1].toFixed(1)}, ${hcl[2].toFixed(1)})`,
    hsi: `hsi(${hsi[0].toFixed(1)}, ${hsi[1].toFixed(1)}, ${hsi[2].toFixed(1)})`,
    oklch: `oklch(${oklch[0].toFixed(1)}, ${oklch[1].toFixed(1)}, ${oklch[2].toFixed(1)})`,
    oklab: `oklab(${oklab[0].toFixed(1)}, ${oklab[1].toFixed(1)}, ${oklab[2].toFixed(1)})`,
    lch: `lch(${lch[0].toFixed(1)}, ${lch[1].toFixed(1)}, ${lch[2].toFixed(1)})`,
    lab: `lab(${lab[0].toFixed(1)}, ${lab[1].toFixed(1)}, ${lab[2].toFixed(1)})`,
  }
})
</script>
