<template>
  <div class="flex w-full flex-col gap-4 border-t p-2">
    <h2 class="text-center text-2xl font-bold">Modifications</h2>
    <div>
      <div class="flex h-24 flex-row overflow-hidden rounded-xl">
        <div
          class="grid w-1/2 cursor-pointer place-items-center border"
          :class="isDark(props.color) ? 'text-gray-50' : 'text-gray-950'"
          @click="copy(props.color)"
          :style="{ backgroundColor: props.color }"
        >
          {{ props.color }}
        </div>
        <div
          class="grid w-1/2 cursor-pointer place-items-center border"
          :class="isDark(c) ? 'text-gray-50' : 'text-gray-950'"
          @click="copy(c)"
          :style="{ backgroundColor: c }"
        >
          {{ c }}
        </div>
      </div>
    </div>
    <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <vInput
          v-model="mod.lighten"
          ph="0 - 100"
          :min="0"
          :max="100"
          :step="1"
          type="number"
          label="Lighten"
        />
      </div>
      <div>
        <vInput
          v-model="mod.darken"
          ph="0 - 100"
          :min="0"
          :max="100"
          :step="1"
          type="number"
          label="Darken"
        />
      </div>
      <div>
        <vInput
          v-model="mod.saturate"
          ph="0 - 100"
          :min="0"
          :max="100"
          :step="1"
          type="number"
          label="Saturate"
        />
      </div>
      <div>
        <vInput
          v-model="mod.desaturate"
          ph="0 - 100"
          :min="0"
          :max="100"
          :step="1"
          type="number"
          label="Desaturate"
        />
      </div>
      <div>
        <vInput
          v-model="mod.shade"
          ph="0 - 100"
          :min="0"
          :max="100"
          :step="1"
          type="number"
          label="Shade"
        />
      </div>
      <div>
        <vInput
          v-model="mod.tint"
          ph="0 - 100"
          :min="0"
          :max="100"
          :step="1"
          type="number"
          label="Tint"
        />
      </div>
      <div>
        <vInput
          v-model="mod.spin"
          ph="0 - 360"
          :min="0"
          :max="360"
          :step="1"
          type="number"
          label="Spin"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import vInput from '@/components/vInput.vue'
import { TinyColor } from '@ctrl/tinycolor'
import { copy, isDark } from '@/utils'

const props = defineProps({
  color: {
    type: String,
    default: '#000000',
  },
})
const mod = reactive({
  lighten: 0,
  darken: 0,
  saturate: 0,
  desaturate: 0,
  shade: 0,
  tint: 0,
  spin: 0,
})
const d = computed(() => props.color || '#000000')
const c = computed(() => {
  return new TinyColor(d.value)
    .lighten(mod.lighten)
    .darken(mod.darken)
    .saturate(mod.saturate)
    .desaturate(mod.desaturate)
    .shade(mod.shade)
    .tint(mod.tint)
    .spin(mod.spin)
    .toHexString()
})
</script>
