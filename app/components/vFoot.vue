<template>
  <footer
    class="w-full border-t border-zinc-200 bg-zinc-100 py-6 sm:mt-8 dark:border-zinc-800 dark:bg-zinc-900"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center text-center">
        <div class="mb-6">
          <img src="/icon.svg" alt="3rd Color Logo" height="60" width="60" loading="lazy" />
        </div>
        <div class="mb-4">
          <a
            href="https://www.producthunt.com/posts/3rd-color?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-3rd&#0045;color"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View 3rd Color on Product Hunt"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=939594&theme=light"
              alt="Featured on Product Hunt: 3rd Color - Color Tools for Designers & Developers"
              width="250"
              height="54"
              loading="lazy"
            />
          </a>
        </div>
        <nav class="mb-4 flex flex-wrap justify-center gap-4">
          <a
            href="/about"
            class="text-stone-600 transition-colors hover:text-primary-hover focus-visible:ring focus-visible:ring-primary dark:text-stone-400 dark:hover:text-primary"
            aria-label="Learn more about 3rd Color"
          >
            About
          </a>
          <a
            href="https://github.com/MFM-347/3rd-Color"
            target="_blank"
            rel="noopener"
            class="text-stone-600 transition-colors hover:text-primary-hover focus-visible:ring focus-visible:ring-primary dark:text-stone-400 dark:hover:text-primary"
            aria-label="View 3rd Color's GitHub repository"
          >
            GitHub
          </a>
          <a
            href="https://forms.gle/zou8TsJ1UAbwioff9"
            target="_blank"
            rel="noopener nofollow"
            class="text-stone-600 transition-colors hover:text-primary-hover focus-visible:ring focus-visible:ring-primary dark:text-stone-400 dark:hover:text-primary"
            aria-label="Provide feedback on 3rd Color"
          >
            Feedback
          </a>
        </nav>
        <p class="text-sm text-stone-600 dark:text-stone-400">
          &copy; {{ new Date().getFullYear() }} 3rd Color. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
