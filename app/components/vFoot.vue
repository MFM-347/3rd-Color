<template>
  <footer
    class="mt-8 w-full border-t border-zinc-200 bg-zinc-50 py-6 dark:border-zinc-800 dark:bg-zinc-900"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center text-center">
        <div class="mb-6">
          <img src="/icon.svg" alt="Logo" height="60" width="60" loading="lazy" />
        </div>
        <div class="mb-4">
          <a
            href="https://www.producthunt.com/posts/3rd-color?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-3rd&#0045;color"
            target="_blank"
            rel="noopener"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=939594&theme=light"
              alt="3rd Color - Color Tools for Designers & Developers | Product Hunt"
              width="250"
              height="54"
              loading="lazy"
            />
          </a>
        </div>
        <div class="mb-4 flex flex-wrap justify-center gap-4">
          <a
            href="/about"
            class="text-stone-600 transition-colors hover:text-clr-700 dark:text-stone-400 dark:hover:text-clr-300"
          >
            About
          </a>
          <a
            href="https://github.com/MFM-347/3rd-Color"
            target="_blank"
            rel="noopener"
            class="text-stone-600 transition-colors hover:text-clr-700 dark:text-stone-400 dark:hover:text-clr-300"
          >
            GitHub
          </a>
          <a
            href="https://forms.gle/zou8TsJ1UAbwioff9"
            target="_blank"
            rel="noopener"
            class="text-stone-600 transition-colors hover:text-clr-700 dark:text-stone-400 dark:hover:text-clr-300"
          >
            Feedback
          </a>
        </div>
        <p class="text-sm text-stone-600 dark:text-stone-400">
          &copy; {{ new Date().getFullYear() }} 3rd Color. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
