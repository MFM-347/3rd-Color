<template>
  <div class="flex flex-col gap-2 px-8 py-4">
    <vCInput type="text" ph="Enter Color (e.g #0063ff)" label="Enter Color" v-model="c" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <vInfo :color="clr" />
      <vCnv class="col-span-1 md:col-span-2" :color="clr" />
      <vMdf class="col-span-1 md:col-span-3" :color="clr" />
    </div>
  </div>
</template>

<script setup lang="ts">
import vCInput from '@/components/vCInput.vue'
import vInfo from '@/components/vInfo.vue'
import vCnv from '@/components/vCnv.vue'
import vMdf from '@/components/vMdf.vue'
import { ref, watch, onMounted } from 'vue'
import chroma from 'chroma-js'

const hexRegex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/

const c = ref('#0063ff')
const clr = ref(chroma(c.value).hex())

const updateUrl = (color: string) => {
  const hexColor = chroma(color).hex().replace('#', '')
  const url = new URL(window.location.href)
  url.searchParams.set('c', hexColor)
  window.history.replaceState({}, '', url.toString())
}

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const colorParam = params.get('c')
  if (colorParam && hexRegex.test(`#${colorParam}`)) {
    try {
      const validColor = chroma(`#${colorParam}`).hex()
      clr.value = validColor
      c.value = validColor
    } catch (e) {
      console.warn('ERROR: Invalid color in URL - ' + e)
    }
  }
})

watch(c, (newClr) => {
  if (!hexRegex.test(newClr)) {
    console.warn('ERROR: Invalid color format')
    return
  }

  try {
    const valClr = chroma(newClr).hex()
    clr.value = valClr
    updateUrl(valClr)
  } catch (e) {
    console.warn('ERROR: Invalid color format - ' + e)
  }
})
</script>
