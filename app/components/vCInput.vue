<template>
  <div class="group relative">
    <label
      :for="computedId"
      class="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-300"
    >
      {{ label }}
    </label>
    <div class="flex flex-row gap-0 rounded-lg shadow-sm sm:rounded-xl">
      <input
        :id="computedId"
        type="text"
        :placeholder="ph + ' (e.g., #ff0000, rgb(255,0,0))'"
        :value="modelValue"
        @input="onTChange"
        class="min-w-20 flex-1 rounded-l-lg border border-transparent bg-zinc-200 px-4 py-1 text-sm ta-175 outline-none placeholder:text-stone-400 focus:ring focus:ring-primary sm:rounded-l-xl sm:py-0.5 sm:text-base dark:border-zinc-700 dark:bg-zinc-800 dark:placeholder:text-stone-400"
        :aria-labelledby="computedId"
      />
      <input
        type="color"
        :value="colorHex"
        @input="onCChange"
        class="c-input"
        :aria-labelledby="computedId"
        title="Select a color"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'

const props = defineProps({
  modelValue: { type: String, default: '' },
  ph: { type: String, default: 'Enter color value' },
  label: { type: String, default: 'Color' },
})
const emit = defineEmits(['update:modelValue'])
const computedId = computed(() => props.label.replace(/\s+/g, '-').toLowerCase())
const colorHex = ref(
  new TinyColor(props.modelValue).isValid
    ? new TinyColor(props.modelValue).toHexString()
    : '#000000',
)
watch(
  () => props.modelValue,
  (newValue) => {
    if (new TinyColor(newValue).isValid) {
      colorHex.value = new TinyColor(newValue).toHexString()
    } else {
      console.error('ERROR: invalid color input')
    }
  },
)
const onTChange = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value
  emit('update:modelValue', inputValue)
  if (new TinyColor(inputValue).isValid) {
    colorHex.value = new TinyColor(inputValue).toHexString()
  } else {
    console.error('ERROR: invalid color input')
  }
}
const onCChange = (event: Event) => {
  const pickerValue = (event.target as HTMLInputElement).value
  colorHex.value = pickerValue
  emit('update:modelValue', pickerValue)
}
</script>
<style scoped>
@reference "@/style.css";

.c-input {
  @apply aspect-square h-full cursor-pointer rounded-r-lg sm:rounded-r-xl;
  -webkit-appearance: none;
  appearance: none;
}
</style>
