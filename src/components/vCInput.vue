<template>
  <div class="flex flex-row">
    <label class="hidden" :for="label.toLowerCase()">{{ label }}</label>
    <input
      :id="label.toLowerCase()"
      type="text"
      :placeholder="ph"
      :value="modelValue"
      @input="onTChange"
      class="grow rounded-l-xl border border-zinc-400 bg-zinc-200 p-3 focus:border-clr-400 focus:ring-1 focus:ring-clr-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800"
    />
    <input type="color" :value="colorHex" @input="onCChange" class="mt-2 size-14 rounded-r-xl" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'

const props = defineProps({
  modelValue: { type: String, default: '' },
  ph: { type: String, default: 'Enter text' },
  label: { type: String, default: 'Enter text' },
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
