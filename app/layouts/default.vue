<template>
  <div class="flex min-h-screen flex-col">
    <header class="w-full">
      <div class="flex flex-col items-center gap-y-4 pb-4 pt-16">
        <img src="/logo.svg" width="96" height="96" loading="lazy" alt="3rd Color Logo" />
        <h1>3rd Color</h1>
        <div class="mx-auto my-2 w-fit">
          <vBreadcrumbs />
        </div>
      </div>
    </header>
    <main id="main" class="flex-grow">
      <slot />
    </main>
    <footer class="mt-8 w-full border-t border-zinc-200 dark:border-zinc-800">
      <div class="container mx-auto px-4 py-6">
        <vSitemap />
        <p class="text-center text-sm text-zinc-600 dark:text-zinc-400">
          © {{ new Date().getFullYear() }} 3rd Color. All rights reserved.
        </p>
      </div>
    </footer>
    <vFloat />
  </div>
</template>
