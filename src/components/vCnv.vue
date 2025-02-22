<template>
  <div class="m-2 flex w-full flex-col gap-y-1 p-2">
    <h2 class="text-center text-2xl font-bold">Conversions</h2>
    <div class="grid grid-cols-1 gap-1 sm:grid-cols-2">
      <div @click="copy(clr.hex)" class="i">{{ clr.hex }}</div>
      <div @click="copy(clr.rgb)" class="i">{{ clr.rgb }}</div>
      <div @click="copy(clr.cmyk)" class="i">{{ clr.cmyk }}</div>
      <div @click="copy(clr.hsl)" class="i">{{ clr.hsl }}</div>
      <div @click="copy(clr.hsv)" class="i">{{ clr.hsv }}</div>
      <div @click="copy(clr.hcl)" class="i">{{ clr.hcl }}</div>
      <div @click="copy(clr.hsi)" class="i">{{ clr.hsi }}</div>
      <div @click="copy(clr.oklch)" class="i">{{ clr.oklch }}</div>
      <div @click="copy(clr.oklab)" class="i">{{ clr.oklab }}</div>
      <div @click="copy(clr.lch)" class="i">{{ clr.lch }}</div>
      <div @click="copy(clr.lab)" class="i">{{ clr.lab }}</div>
    </div>
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
  const sV = (value: number) => (isNaN(value) ? 0 : value.toFixed(0))
  const hcl = d.hcl().map(sV)
  const hsi = d.hsi().map(sV)
  const oklch = d.oklch().map(sV)
  const oklab = d.oklab().map(sV)
  const lch = d.lch().map(sV)
  const lab = d.lab().map(sV)
  return {
    hex: c.toHexString(),
    rgb: c.toRgbString(),
    cmyk: c.toCmykString(),
    hsl: c.toHslString(),
    hsv: c.toHsvString(),
    hcl: `hcl(${hcl[0]}, ${hcl[1]}, ${hcl[2]})`,
    hsi: `hsi(${hsi[0]}, ${hsi[1]}, ${hsi[2]})`,
    oklch: `oklch(${oklch[0]}, ${oklch[1]}, ${oklch[2]})`,
    oklab: `oklab(${oklab[0]}, ${oklab[1]}, ${oklab[2]})`,
    lch: `lch(${lch[0]}, ${lch[1]}, ${lch[2]})`,
    lab: `lab(${lab[0]}, ${lab[1]}, ${lab[2]})`,
  }
})
</script>
