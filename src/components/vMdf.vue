<template>
  <div class="flex w-full flex-col gap-y-4 p-2">
    <h2 class="text-center text-2xl font-bold">Modifications</h2>
    <div>
      <div class="flex h-24 flex-row overflow-hidden rounded-xl">
        <div
          class="grid w-1/2 cursor-pointer place-items-center"
          :class="isDark(props.color) ? 'text-gray-200' : 'text-gray-800'"
          @click="copy(props.color)"
          :style="{ backgroundColor: props.color }"
        >
          {{ props.color }}
        </div>
        <div
          class="grid w-1/2 cursor-pointer place-items-center"
          :class="isDark(c) ? 'text-gray-200' : 'text-gray-800'"
          @click="copy(c)"
          :style="{ backgroundColor: c }"
        >
          {{ c }}
        </div>
      </div>
    </div>
    <div class="flex w-full flex-col gap-y-1">
      <label for="lighten">Lighten</label>
      <vInput
        v-model="mod.lighten"
        ph="Enter value"
        :min="0"
        :max="100"
        :step="1"
        type="number"
        name="lighten"
      />
      <label for="darken">Darken</label>
      <vInput
        v-model="mod.darken"
        ph="Enter value"
        :min="0"
        :max="100"
        :step="1"
        type="number"
        name="darken"
      />
      <label for="saturate">Saturate</label>
      <vInput
        v-model="mod.saturate"
        ph="Enter value"
        :min="0"
        :max="100"
        :step="1"
        type="number"
        name="saturate"
      />
      <label for="desaturate">Desaturate</label>
      <vInput
        v-model="mod.desaturate"
        ph="Enter value"
        :min="0"
        :max="100"
        :step="1"
        type="number"
        name="desaturate"
      />
      <label for="shade">Shade</label>
      <vInput
        v-model="mod.shade"
        ph="Enter value"
        :min="0"
        :max="100"
        :step="1"
        type="number"
        name="shade"
      />
      <label for="tint">Tint</label>
      <vInput
        v-model="mod.tint"
        ph="Enter value"
        :min="0"
        :max="100"
        :step="1"
        type="number"
        name="tint"
      />
      <label for="spin">Spin</label>
      <vInput
        v-model="mod.spin"
        ph="Enter value"
        :min="0"
        :max="360"
        :step="1"
        type="number"
        name="spin"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import vInput from '@/components/vInput.vue'
import { TinyColor } from '@ctrl/tinycolor'
import { copy, isDark } from '@/utils'

const props = defineProps({ color: String })
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
