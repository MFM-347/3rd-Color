<script setup lang="ts">
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <vNav />
    <main id="main" class="container mx-auto flex-grow px-4 pt-6 sm:px-6 lg:px-8">
      <slot />
    </main>
    <vFoot />
  </div>
  <AlertDialogRoot>
    <AlertDialogTrigger
      class="fixed right-4 bottom-4 m-1 grid size-10 place-items-center rounded-full bg-gray-200 shadow-lg ta-150 hover:m-0 hover:size-11 hover:bg-gray-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
      aria-label="Help & Tips"
      title="Help & Tips"
    >
      <QuestionMarkCircleIcon class="size-10 fill-foreground" />
    </AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay class="fixed inset-0 z-30 bg-zinc-950/70 backdrop-blur-md" />
      <AlertDialogContent
        class="fixed top-1/2 left-1/2 z-50 max-h-[85vh] w-11/12 max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-zinc-200 p-6 text-sm shadow-xl focus:outline-none dark:bg-zinc-900"
      >
        <AlertDialogTitle class="flex items-center gap-2 text-lg font-semibold">
          <QuestionMarkCircleIcon class="h-6 w-6" />
          Tips & Tricks
        </AlertDialogTitle>
        <AlertDialogDescription class="mt-4 mb-5 space-y-2 text-sm text-muted">
          <ul class="list-inside list-disc space-y-1">
            <li>
              Press <kbd class="rounded bg-gray-300 px-1 py-0.5 dark:bg-zinc-700">R</kbd> on your
              keyboard for a <b>random color</b>.
            </li>
            <li>
              Colors including <i>HCL, HSI, OKLCH, OKLAB, LCH, LAB</i> are not supported by
              <b>Input</b>.
            </li>
            <li>Click on a color tile to copy its code.</li>
          </ul>
        </AlertDialogDescription>
        <AlertDialogCancel
          class="inline-flex h-9 items-center justify-center rounded-md bg-gray-200 px-4 font-semibold text-gray-700 transition hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 dark:bg-zinc-800 dark:text-gray-100 dark:hover:bg-zinc-700"
        >
          OK
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>
