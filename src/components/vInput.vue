<template>
  <div class="flex w-full flex-col">
    <label class="text-lg" :for="label.toLowerCase()">{{ label }}</label>
    <div class="relative">
      <div
        :class="[
          'flex items-center rounded-lg border',
          'border-zinc-300 dark:border-zinc-700',
          'bg-zinc-200 dark:bg-zinc-800',
          focused ? 'border-clr-400 ring-clr-500' : '',
        ]"
      >
        <button
          type="button"
          @click="decr"
          class="px-3 py-2 text-zinc-500 transition-colors hover:bg-zinc-300 dark:text-zinc-400 dark:hover:bg-zinc-700"
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
          class="w-full border-none bg-transparent text-center text-zinc-900 [-moz-appearance:textfield] focus:outline-hidden dark:text-zinc-100 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          type="button"
          @click="incr"
          class="px-3 py-2 text-zinc-500 transition-colors hover:bg-zinc-300 dark:text-zinc-400 dark:hover:bg-zinc-700"
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
  modelValue: { type: Number, default: 50 },
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
