<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <h1>Cascina della Vachina</h1>
        </router-link>
        
        <nav class="nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/camere" class="nav-link">Le Camere</router-link>
          <router-link to="/servizi" class="nav-link">Servizi</router-link>
          <router-link to="/dove-siamo" class="nav-link">Dove Siamo</router-link>
          <router-link to="/galleria" class="nav-link">Galleria</router-link>
          <router-link to="/contatti" class="nav-link">Contatti</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
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
  color: #2c3e50;
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
  color: #2c3e50;
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #42b983;
  border-bottom-color: #42b983;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
}
</style>
