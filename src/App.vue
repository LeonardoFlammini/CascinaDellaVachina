<script setup>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import CookieBanner from './components/CookieBanner.vue'
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
    <CookieBanner />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
