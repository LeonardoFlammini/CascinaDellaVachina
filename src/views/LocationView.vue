<template>
  <div class="location">
    <div class="page-header">
      <h1>Dove Siamo</h1>
      <p>Facilmente raggiungibili, immersi nella natura</p>
    </div>

    <div class="container">
      <!-- Map Section -->
      <section class="map-section">
        <h2>Come Raggiungerci</h2>
        <div class="map-container">
          <!-- Placeholder se consenso non dato -->
          <div v-if="!mapsConsent" class="map-consent-placeholder">
            <div class="consent-content">
              <div class="consent-icon">🗺️</div>
              <h3>Mappa Google Maps</h3>
              <p>
                Per visualizzare la mappa interattiva, è necessario accettare i cookie di Google Maps.
                Google potrebbe raccogliere dati di navigazione.
              </p>
              <button @click="acceptMaps" class="btn-accept-maps">
                Accetta e Carica Mappa
              </button>
              <p class="consent-note">
                <small>
                  Verranno installati cookie di terze parti. 
                  <router-link to="/privacy-policy">Privacy Policy</router-link>
                </small>
              </p>
            </div>
          </div>

          <!-- Mappa caricata dopo consenso -->
          <div v-else class="map-placeholder">
            <iframe
              :src="siteConfig.address.mapEmbedUrl"
              width="100%"
              height="450"
              style="border:0; border-radius: 10px;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        
        <div class="address-info">
          <div class="info-item">
            <span class="icon">📍</span>
            <div>
              <h4>Indirizzo</h4>
              <p>{{ siteConfig.address.street }}<br>{{ siteConfig.address.postalCode }} {{ siteConfig.address.city }} ({{ siteConfig.address.province }})</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">🚗</span>
            <div>
              <h4>In Auto</h4>
              <p>{{ siteConfig.directions.byCar }}</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">🚂</span>
            <div>
              <h4>In Treno</h4>
              <p>{{ siteConfig.directions.byTrain }}</p>
            </div>
          </div>
          <!-- <div class="info-item">
            <span class="icon">🅿️</span>
            <div>
              <h4>Parcheggio</h4>
              <p>{{ siteConfig.directions.parking }}</p>
            </div> -->
          <!-- </div> -->
        </div>
      </section>

      <!-- Nearby Attractions -->
      <section class="attractions-section">
        <h2>Cosa Visitare</h2>
        <p class="section-intro">Scopri le bellezze del territorio</p>
        
        <div class="attractions-grid">
          <div class="attraction-card" v-for="attraction in attractions" :key="attraction.id">
            <div class="attraction-icon">{{ attraction.icon }}</div>
            <h3>{{ attraction.name }}</h3>
            <p class="distance">{{ attraction.distance }}</p>
            <p>{{ attraction.description }}</p>
          </div>
        </div>
      </section>

      <!-- Distances -->
      <section class="distances-section">
        <h2>Distanze</h2>
        <div class="distances-grid">
          <div class="distance-item" v-for="item in distances" :key="item.place">
            <span class="place">{{ item.place }}</span>
            <span class="dots"></span>
            <span class="distance-value">{{ item.distance }}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { siteConfig, getFullAddress } from '@/config/siteConfig'

const mapsConsent = ref(false)

// Controlla se l'utente ha già dato il consenso
onMounted(() => {
  const consent = localStorage.getItem('googleMapsConsent')
  if (consent === 'true') {
    mapsConsent.value = true
  }
})

const acceptMaps = () => {
  localStorage.setItem('googleMapsConsent', 'true')
  localStorage.setItem('googleMapsConsentDate', new Date().toISOString())
  mapsConsent.value = true
}

// Dati da siteConfig
const attractions = siteConfig.attractions
const distances = siteConfig.distances
</script>

<style scoped>
.page-header {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover;
  color: white;
  text-align: center;
  padding: 5rem 20px;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  font-weight: 700;
}

.page-header p {
  font-size: 1.3rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 20px;
}

section {
  margin-bottom: 4rem;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
}

.section-intro {
  text-align: center;
  color: var(--color-text-tertiary);
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.map-section {
  margin-bottom: 4rem;
}

.map-container {
  margin: 2rem 0;
}

.map-consent-placeholder {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.consent-content {
  max-width: 500px;
  color: white;
}

.consent-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.consent-content h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
}

.consent-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

.btn-accept-maps {
  background-color: white;
  color: #667eea;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-accept-maps:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.consent-note {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.consent-note a {
  color: white;
  text-decoration: underline;
  font-weight: 600;
}

.consent-note a:hover {
  color: rgba(255, 255, 255, 0.9);
}

.map-placeholder {
  margin: 2rem 0;
}

.address-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  align-items: start;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info-item .icon {
  font-size: 2.5rem;
}

.info-item h4 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.info-item p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

.attractions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.attraction-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.attraction-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.attraction-card h3 {
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.attraction-card .distance {
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1rem;
}

.attraction-card p:last-child {
  color: var(--color-text-tertiary);
  line-height: 1.6;
}

.distances-section {
  background: var(--color-bg-secondary);
  padding: 3rem;
  border-radius: 10px;
}

.distances-grid {
  max-width: 700px;
  margin: 2rem auto 0;
}

.distance-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border);
}

.distance-item:last-child {
  border-bottom: none;
}

.place {
  color: var(--color-text-primary);
  font-weight: 500;
}

.dots {
  border-bottom: 2px dotted #ccc;
  height: 1px;
}

.distance-value {
  color: var(--color-primary);
  font-weight: 600;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .page-header p {
    font-size: 1.1rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  .address-info,
  .attractions-grid {
    grid-template-columns: 1fr;
  }
  
  .distances-section {
    padding: 2rem 1rem;
  }
}
</style>
