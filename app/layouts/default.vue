<template>
  <div class="bgc flex flex-col">
    <vNav />
    <main id="main" class="h-full flex-grow pt-6">
      <slot />
    </main>
    <vFoot />
  </div>
</template>
