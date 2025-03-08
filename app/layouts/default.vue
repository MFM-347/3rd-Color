<template>
  <div class="bgc flex flex-col">
    <header>
      <vNav />
    </header>
    <main id="main" class="h-full flex-grow pt-6">
      <slot />
    </main>
    <footer class="mt-8 w-full border-t border-zinc-200 py-4 dark:border-zinc-800">
      <div class="flex flex-col items-center text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          Created with ❤️ by
          <a
            class="text-clr-600 hover:text-clr-700 dark:text-clr-400 dark:hover:text-clr-300 font-medium underline hover:no-underline"
            href="https://x.com/@mfm347"
            >@MFM347</a
          >
        </p>
        <a
          class="my-2"
          href="https://www.producthunt.com/posts/3rd-color?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-3rd&#0045;color"
          target="_blank"
          ><img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=939594&theme=light"
            alt="3rd Color - Color Tools for Designers & Developers | Product Hunt"
            style="width: 250px; height: 54px"
            width="250"
            height="54"
        /></a>
        <p>&copy; {{ new Date().getFullYear() }} 3rd Color. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
