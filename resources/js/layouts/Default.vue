<template>
    <div class="flex min-h-screen flex-col">
      <Navbar />
      <main class="py-20 grow">
        <slot />
      </main>
      <Footer />
    </div>
  </template>

  <script>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue'
    export default {
      components: {
        Navbar,
        Footer,
      }

    }
  </script>

  <style lang="scss" scoped>
  </style>