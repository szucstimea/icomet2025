<template>
  <ScrollToTop />
    <header class="bg-white shadow">
        <!-- <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 id="page-title" class="text-2xl text-center font-bold tracking-tight text-gray-900">{{ title }}</h1>
        </div> -->
      </header>
      <main>
        <div class="">
          <slot></slot>
        </div>
      </main>
</template>

<script setup>
import ScrollToTop from './ScrollToTop.vue';

// const props = defineProps({
//     title: String
// })
</script>

<style>
</style>