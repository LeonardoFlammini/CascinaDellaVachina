<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <img src="@/assets/logo/logo-la-cascina.jpg" alt="Cascina della Vachina">
        </router-link>
        
        <!-- Hamburger Button (mobile only) -->
        <button class="hamburger" @click="toggleMenu" :class="{ active: menuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav class="nav" :class="{ open: menuOpen }">
          <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
          <router-link to="/camere" class="nav-link" @click="closeMenu">Le Camere</router-link>
          <router-link to="/servizi" class="nav-link" @click="closeMenu">Servizi</router-link>
          <router-link to="/dove-siamo" class="nav-link" @click="closeMenu">Dove Siamo</router-link>
          <router-link to="/galleria" class="nav-link" @click="closeMenu">Galleria</router-link>
          <router-link to="/contatti" class="nav-link" @click="closeMenu">Contatti</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  text-decoration: none;
  color: var(--color-text-primary);
}

.logo img {
  height: 60px;
  width: auto;
  display: block;
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--color-text-primary);
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

/* Hamburger Menu Button */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 101;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: var(--color-bg-dark);
  transition: all 0.3s;
  border-radius: 2px;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .header-content {
    position: relative;
  }
  
  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    gap: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  .nav.open {
    max-height: 400px;
  }

  .nav-link {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--color-bg-tertiary);
    border-bottom-color: transparent;
  }

  .nav-link:hover,
  .nav-link.router-link-active {
    background-color: var(--color-bg-secondary);
    color: var(--color-primary);
    border-bottom-color: transparent;
  }
}
</style>
