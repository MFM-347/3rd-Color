<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <vInfo :color="color" />
    <vCnv class="col-span-2" :color="color" />
    <vMdf class="col-span-3" :color="color" />
  </div>
</template>
<script setup lang="ts">
import vInfo from '@/components/vInfo.vue'
import vCnv from '@/components/vCnv.vue'
import vMdf from '@/components/vMdf.vue'

defineProps({
  color: String,
})
</script>
