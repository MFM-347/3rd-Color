<template>
  <nav aria-label="Breadcrumb" class="mb-4 w-full">
    <ol class="flex flex-wrap items-center">
      <li class="flex items-center text-sm md:text-base">
        <NuxtLink to="/" class="lnk">Home</NuxtLink>
      </li>
      <li v-for="(crumb, i) in breadcrumbs" :key="i" class="flex items-center text-sm md:text-base">
        <span class="mx-2 text-zinc-400 dark:text-zinc-600" aria-hidden="true">/</span>
        <NuxtLink v-if="i < breadcrumbs.length - 1" :to="crumb.path" class="lnk">
          {{ crumb.name }}
        </NuxtLink>
        <span v-else class="font-medium text-zinc-800 dark:text-zinc-200" aria-current="page">{{ crumb.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const props = defineProps({
  items: {
    type: Array as () => Array<{ name: string; path: string }>,
    default: () => [],
  },
})
const breadcrumbs = computed(() => {
  if (props.items.length > 0) {
    return props.items
  }
  if (route.path === '/') {
    return []
  }
  const segments = route.path.split('/').filter(Boolean)
  return segments.map((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/')
    return {
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      path,
    }
  })
})
</script>
