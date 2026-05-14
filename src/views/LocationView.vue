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
        <div class="map-placeholder">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.1455631651697!2d12.855819076584838!3d42.488457926979315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132e545619965773%3A0x959c9d1964af84f6!2sBed%20and%20Breakfast%20La%20Cascina%20della%20Vachina!5e0!3m2!1sit!2sit!4v1778748521711!5m2!1sit!2sit"
            width="100%"
            height="450"
            style="border:0; border-radius: 10px;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>

        </div>
        
        <div class="address-info">
          <div class="info-item">
            <span class="icon">📍</span>
            <div>
              <h4>Indirizzo</h4>
              <p>Via della Cascina, 123<br>12345 Città (Provincia)</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">🚗</span>
            <div>
              <h4>In Auto</h4>
              <p>Uscita autostradale A12, seguire indicazioni per Città Centro</p>
            </div>
          </div>
          <div class="info-item">
            <span class="icon">🚂</span>
            <div>
              <h4>In Treno</h4>
              <p>Stazione di Città a 5 km (servizio navetta su richiesta)</p>
            </div>
          </div>
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
import { ref } from 'vue'

const attractions = ref([
  {
    id: 1,
    icon: '🏰',
    name: 'Centro Storico',
    distance: '3 km',
    description: 'Borghi medievali e architetture storiche da scoprire'
  },
  {
    id: 2,
    icon: '🍷',
    name: 'Cantine Vinicole',
    distance: '8 km',
    description: 'Degustazioni di vini locali e visite guidate'
  },
  {
    id: 3,
    icon: '⛰️',
    name: 'Sentieri Naturalistici',
    distance: '2 km',
    description: 'Percorsi di trekking e mountain bike nella natura'
  },
  {
    id: 4,
    icon: '🏛️',
    name: 'Musei',
    distance: '5 km',
    description: 'Arte e cultura locale da esplorare'
  },
  {
    id: 5,
    icon: '🏖️',
    name: 'Lago',
    distance: '15 km',
    description: 'Relax e sport acquatici sul lago'
  },
  {
    id: 6,
    icon: '🍝',
    name: 'Ristoranti Tipici',
    distance: '1-5 km',
    description: 'Cucina tradizionale e specialità locali'
  }
])

const distances = ref([
  { place: 'Centro città', distance: '3 km' },
  { place: 'Stazione ferroviaria', distance: '5 km' },
  { place: 'Aeroporto più vicino', distance: '45 km' },
  { place: 'Supermercato', distance: '2 km' },
  { place: 'Farmacia', distance: '3 km' },
  { place: 'Ospedale', distance: '8 km' }
])
</script>

<style scoped>
.page-header {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover;
  color: white;
  text-align: center;
  padding: 5rem 20px;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.3rem;
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
  color: #2c3e50;
}

.section-intro {
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.map-section {
  margin-bottom: 4rem;
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
  color: #42b983;
  margin-bottom: 0.5rem;
}

.info-item p {
  color: #555;
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
  transition: transform 0.3s;
}

.attraction-card:hover {
  transform: translateY(-5px);
}

.attraction-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.attraction-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.attraction-card .distance {
  color: #42b983;
  font-weight: 600;
  margin-bottom: 1rem;
}

.attraction-card p:last-child {
  color: #666;
  line-height: 1.6;
}

.distances-section {
  background: #f8f9fa;
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
  border-bottom: 1px solid #e0e0e0;
}

.distance-item:last-child {
  border-bottom: none;
}

.place {
  color: #2c3e50;
  font-weight: 500;
}

.dots {
  border-bottom: 2px dotted #ccc;
  height: 1px;
}

.distance-value {
  color: #42b983;
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
