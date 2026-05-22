<script setup>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import CookieBanner from './components/CookieBanner.vue'
import ColorSwitcher from './components/devcomponents/ColorSwitcher.vue'
</script>

<template>
  <div id="app">
    <ColorSwitcher />
    <div class="dev-offset"></div>
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

.dev-offset {
  height: 33px; /* compensa l'altezza della barra ColorSwitcher */
}
</style>
