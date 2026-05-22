<template>
  <div class="room-detail">
    <div class="room-header">
      <div class="container">
        <h1>Camera Chiara</h1>
      </div>
    </div>

    <div class="container">
      <section class="gallery-section">
        <div class="masonry-grid">
          <div class="masonry-item" v-for="(image, index) in roomImages" :key="index">
            <img :src="image.src" :alt="image.alt">
          </div>
        </div>
      </section>
      <div class="room-main">
        <div class="room-info">
          <section class="section">
            <h2>Descrizione</h2>
            <p>
              La Camera Chiara è una camera luminosa e accogliente, perfetta per coppie che cercano 
              un rifugio tranquillo. Con la sua vista sul giardino e l'atmosfera rilassante, 
              questa camera offre tutto il comfort necessario per un soggiorno indimenticabile.
            </p>
          </section>

          <section class="section">
            <h2>Caratteristiche</h2>
            <div class="features-grid">
              <div class="feature-item">
                <span class="icon">👥</span>
                <div>
                  <strong>Capacità</strong>
                  <p>2 persone</p>
                </div>
              </div>
              <div class="feature-item">
                <span class="icon">🛏️</span>
                <div>
                  <strong>Letto</strong>
                  <p>Letto matrimoniale</p>
                </div>
              </div>
              <div class="feature-item">
                <span class="icon">🚿</span>
                <div>
                  <strong>Bagno</strong>
                  <p>Bagno privato finestrato</p>
                </div>
              </div>
              <!-- <div class="feature-item">
                <span class="icon">📏</span>
                <div>
                  <strong>Dimensione</strong>
                  <p>20 m²</p>
                </div>
              </div> -->
            </div>
          </section>

          <section class="section">
            <h2>Servizi</h2>
            <div class="amenities-list">
              <span class="amenity">Wi-Fi gratuito</span>
              <span class="amenity">TV</span>
              <span class="amenity">Aria condizionata</span>
              <span class="amenity">Armadio</span>
              <span class="amenity">Accessibile per persone con disabilità</span>
              <span class="amenity">Scrivania</span>
              <span class="amenity">Asciugacapelli</span>
              <span class="amenity">Set cortesia</span>
            </div>
          </section>

          <section class="section">
            <h2>Informazioni utili</h2>
            <div class="info-boxes">
              <div class="info-box">
                <h3>Check-in</h3>
                <p>Dalle {{ siteConfig.checkIn.from }} alle {{ siteConfig.checkIn.to }}</p>
              </div>
              <div class="info-box">
                <h3>Check-out</h3>
                <p>Entro le {{ siteConfig.checkOut.time }}</p>
              </div>
              <div class="info-box">
                <h3>Colazione</h3>
                <p>Inclusa nel prezzo (8:00-10:00)</p>
              </div>
            </div>
          </section>
        </div>

        <aside class="booking-sidebar">
          <div class="price-card">
            <div class="price-header">
              <span class="price-label">Da</span>
              <span class="price-amount">60€</span>
              <span class="price-period">per notte</span>
            </div>
            <router-link to="/contatti" class="btn-book-now">Prenota ora</router-link>
            <div class="price-info">
              <p>✓ Colazione inclusa</p>
              <p>✓ Wi-Fi gratuito</p>
              <p>✓ {{ siteConfig.policies.cancellation }}</p>
            </div>
          </div>

          <div class="contact-card">
            <h3>Hai domande?</h3>
            <p>Contattaci per maggiori informazioni</p>
            <router-link to="/contatti" class="btn-contact">Contattaci</router-link>
          </div>
        </aside>
      </div>

      <section class="section back-section">
        <router-link to="/camere" class="btn-back">← Torna alle camere</router-link>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import siteConfig from '@/config/siteConfig'

// Carica dinamicamente tutte le immagini dalla cartella chiara
const imageModules = import.meta.glob('/public/images/rooms/chiara/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })

// Trasforma l'oggetto in un array ordinato
const roomImages = computed(() => {
  return Object.entries(imageModules)
    .map(([path, url]) => {
      const filename = path.split('/').pop()
      return {
        src: url,
        alt: `Camera Chiara - ${filename}`,
        order: parseInt(filename.match(/\d+/)?.[0] || '999')
      }
    })
    .sort((a, b) => a.order - b.order)
})
</script>

<style scoped>
.room-header {
  background-color: var(--color-bg-secondary);
  padding: 3rem 0 2rem;
  border-bottom: 3px solid var(--color-primary);
}

.room-header h1 {
  color: var(--color-text-primary);
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
}

.gallery-section {
  margin-bottom: 3rem;
  padding-top: 2rem;
}

.masonry-grid {
  column-count: 3;
  column-gap: 1rem;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.masonry-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.masonry-item img {
  width: 100%;
  height: auto;
  display: block;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 20px;
}

.room-main {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 3rem;
  margin-bottom: 3rem;
}

.room-info {
  flex: 1;
}

.section {
  margin-bottom: 3rem;
}

.section h2 {
  color: var(--color-text-primary);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-primary);
}

.section p {
  color: var(--color-text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--color-bg-secondary);
  border-radius: 10px;
}

.feature-item .icon {
  font-size: 2rem;
}

.feature-item strong {
  color: var(--color-text-primary);
  display: block;
  margin-bottom: 0.3rem;
}

.feature-item p {
  color: var(--color-text-tertiary);
  margin: 0;
  font-size: 1rem;
}

.amenities-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.amenity {
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
}

.info-boxes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.info-box {
  background: var(--color-bg-secondary);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.info-box h3 {
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.info-box p {
  color: var(--color-text-tertiary);
  margin: 0;
  font-size: 1rem;
}

.booking-sidebar {
  position: sticky;
  top: 20px;
  height: fit-content;
}

.price-card {
  background: white;
  border: 2px solid var(--color-primary);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.price-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.price-label {
  display: block;
  color: var(--color-text-tertiary);
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.price-amount {
  display: block;
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.price-period {
  display: block;
  color: var(--color-text-tertiary);
  font-size: 0.95rem;
  margin-top: 0.3rem;
}

.btn-book-now {
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: var(--color-primary);
  color: white;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.3s;
  margin-bottom: 1.5rem;
}

.btn-book-now:hover {
  background-color: var(--color-primary-dark);
}

.price-info {
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.price-info p {
  color: var(--color-text-secondary);
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.contact-card {
  background: var(--color-bg-secondary);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
}

.contact-card h3 {
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.contact-card p {
  color: var(--color-text-tertiary);
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.btn-contact {
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: white;
  color: var(--color-primary);
  text-decoration: none;
  border: 2px solid var(--color-primary);
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-contact:hover {
  background-color: var(--color-primary);
  color: white;
}

.back-section {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.btn-back {
  display: inline-block;
  padding: 0.8rem 2rem;
  color: var(--color-primary);
  text-decoration: none;
  border: 2px solid var(--color-primary);
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-back:hover {
  background-color: var(--color-primary);
  color: white;
}

@media (max-width: 968px) {
  .room-main {
    grid-template-columns: 1fr;
  }

  .booking-sidebar {
    position: static;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .info-boxes {
    grid-template-columns: 1fr;
  }

  .masonry-grid {
    column-count: 2;
  }

  .room-header h1 {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .masonry-grid {
    column-count: 1;
  }
}
</style>
