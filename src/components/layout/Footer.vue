<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Cascina della Vachina</h3>
          <p>Il tuo B&B nel cuore della campagna</p>
        </div>
        
        <div class="footer-section">
          <h4>Contatti</h4>
          <p>📞 <a href="tel:+39xxxxxxxxxx">+39 xxx xxx xxxx</a></p>
          <p>📧 <a href="mailto:info@cascinadellavachina.it">info@cascinadellavachina.it</a></p>
        </div>
        
        <div class="footer-section">
          <h4>Seguici</h4>
          <div class="social-links">
            <a href="#" target="_blank" rel="noopener">Facebook</a>
            <a href="#" target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Cascina della Vachina. Tutti i diritti riservati.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #2c3e50;
  color: #fff;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin-top: 0;
  color: #42b983;
}

.footer-section h4 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.footer-section p {
  margin: 0.5rem 0;
}

.footer-section a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #42b983;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  margin: 0;
  opacity: 0.8;
}
</style>
