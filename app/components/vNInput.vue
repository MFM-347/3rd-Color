<template>
  <div class="flex w-full flex-col">
    <label class="text-lg" :for="label.toLowerCase()">{{ label }}</label>
    <div class="group relative">
      <div
        class="flex items-center rounded-lg border border-zinc-200 bg-white group-focus:border-clr-500/25 group-focus:ring-2 group-focus:ring-clr-500/20 dark:border-zinc-800 dark:bg-zinc-900"
      >
        <button
          type="button"
          @click="decr"
          class="rounded-l-lg px-3 py-2 text-stone-500 ta-125 hover:bg-zinc-300 dark:text-stone-400 dark:hover:bg-zinc-700"
          aria-label="Decrease button"
        >
          -
        </button>
        <input
          type="number"
          :id="label.toLowerCase()"
          v-model="val"
          :min="min"
          :max="max"
          :step="step"
          @focus="focused = true"
          @blur="focused = false"
          class="w-full border-none bg-transparent text-center text-stone-900 [-moz-appearance:textfield] focus:outline-hidden dark:text-stone-100 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          type="button"
          @click="incr"
          class="rounded-r-lg px-3 py-2 text-stone-500 ta-125 hover:bg-zinc-300 dark:text-stone-400 dark:hover:bg-zinc-700"
          aria-label="Increase button"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  label: { type: String, default: 'Enter Value' },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  modelValue: { type: Number, default: 0 },
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: number): void
}>()
const val = ref(props.modelValue)
const focused = ref(false)
watch(val, (newVal) => {
  if (newVal >= props.min && newVal <= props.max) {
    emit('update:modelValue', newVal)
  }
})
const incr = () => {
  val.value = Math.min(val.value + props.step, props.max)
}
const decr = () => {
  val.value = Math.max(val.value - props.step, props.min)
}
</script>
