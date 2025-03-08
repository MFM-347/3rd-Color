<template>
  <div class="bgc flex flex-col">
    <header>
      <vNav />
    </header>
    <main id="main" class="h-full flex-grow pt-6">
      <slot />
    </main>
    <footer class="mt-8 w-full border-t border-zinc-200 py-4 dark:border-zinc-800">
      <div class="text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          Created with ❤️ by
          <a
            class="text-clr-600 hover:text-clr-700 dark:text-clr-400 dark:hover:text-clr-300 font-medium underline hover:no-underline"
            href="https://x.com/@mfm347"
            >@MFM347</a
          >
        </p>
        <p>&copy; {{ new Date().getFullYear() }} 3rd Color. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
