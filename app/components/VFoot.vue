<template>
  <footer
    class="w-full border-t border-gray-200 bg-gray-100 py-6 sm:mt-8 dark:border-gray-800 dark:bg-gray-900"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center text-center">
        <div class="mb-6">
          <img src="/icon.svg" alt="Color Xpret Logo" height="60" width="60" loading="lazy" />
        </div>
        <div class="mb-4">
          <a
            href="https://www.producthunt.com/posts/3rd-color?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-3rd&#0045;color"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Color Xpret on Product Hunt"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=939594&theme=light"
              alt="Featured on Product Hunt: Color Xpret - Color Tools for Designers & Developers"
              width="250"
              height="54"
              loading="lazy"
            />
          </a>
        </div>
        <nav class="mb-4 flex flex-wrap justify-center gap-4">
          <a href="/about" class="lnk" aria-label="Learn more about Color Xpret"> About </a>
          <a
            href="https://github.com/MFM-347/3rd-Color"
            target="_blank"
            rel="noopener"
            class="lnk"
            aria-label="View Color Xpret's GitHub repository"
          >
            GitHub
          </a>
          <a
            href="https://forms.gle/zou8TsJ1UAbwioff9"
            target="_blank"
            rel="noopener nofollow"
            class="lnk"
            aria-label="Provide feedback on Color Xpret"
          >
            Feedback
          </a>
        </nav>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          &copy; {{ new Date().getFullYear() }} Color Xpret. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
@reference "@/style.css";

.lnk {
  @apply text-gray-600 transition-colors hover:text-primary-hover focus-visible:ring focus-visible:ring-primary dark:text-gray-400 dark:hover:text-primary;
}
</style>
