<template>
  <div class="group relative">
    <label
      :for="label.toLowerCase()"
      class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      {{ label }}
    </label>
    <div
      class="ta-175 flex overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800"
    >
      <input
        :id="label.toLowerCase()"
        type="text"
        :placeholder="ph"
        :value="modelValue"
        @input="onTChange"
        class="flex-1 border-none bg-transparent px-4 py-1 text-lg outline-none placeholder:text-gray-400 sm:py-2 dark:placeholder:text-gray-600"
      />
      <input
        type="color"
        :value="colorHex"
        @input="onCChange"
        class="aspect-square h-full cursor-pointer border-l border-zinc-200 bg-transparent transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-700"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'

const props = defineProps({
  modelValue: { type: String, default: '' },
  ph: { type: String, default: 'Enter color value' },
  label: { type: String, default: 'Color' },
})

const emit = defineEmits(['update:modelValue'])

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
    }
  },
)

const onTChange = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value
  emit('update:modelValue', inputValue)
  if (new TinyColor(inputValue).isValid) {
    colorHex.value = new TinyColor(inputValue).toHexString()
  }
}

const onCChange = (event: Event) => {
  const pickerValue = (event.target as HTMLInputElement).value
  colorHex.value = pickerValue
  emit('update:modelValue', pickerValue)
}
</script>
