<template>
  <div class="rooms">
    <div class="page-header">
      <h1>Le Nostre Camere</h1>
      <p>Comfort e accoglienza per il tuo soggiorno</p>
    </div>

    <div class="container">
      <div class="rooms-grid">
        <router-link 
          v-for="room in rooms" 
          :key="room.id" 
          :to="`/camere/${room.slug}`"
          class="room-card-link"
        >
          <div class="room-card">
            <div class="room-image">
              <img :src="room.image" :alt="room.name">
            </div>
            <div class="room-content">
              <h3>{{ room.name }}</h3>
              <p class="room-description">{{ room.description }}</p>
              <div class="room-features">
                <span class="feature">
                  <span class="icon">👥</span> {{ room.capacity }} persone
                </span>
                <span class="feature">
                  <span class="icon">🛏️</span> {{ room.beds }}
                </span>
                <span class="feature">
                  <span class="icon">🚿</span> {{ room.bathroom }}
                </span>
              </div>
              <div class="room-amenities">
                <span v-for="amenity in room.amenities" :key="amenity" class="amenity">
                  {{ amenity }}
                </span>
              </div>
              <div class="room-footer">
                <span class="price">Da {{ room.price }}€/notte</span>
                <span class="btn-book">Dettagli</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const base = import.meta.env.BASE_URL

const rooms = ref([
  {
    id: 1,
    slug: 'chiara',
    name: 'Camera Chiara',
    description: 'Camera luminosa e accogliente con vista sul giardino, perfetta per coppie.',
    capacity: 2,
    beds: 'Letto matrimoniale',
    bathroom: 'Bagno privato',
    amenities: ['Wi-Fi', 'TV', 'Aria condizionata', 'Armadio','Camera accessibile per persone con disabilità', 'Bagno finestrato', 'Scrivania'],
    price: 60,
    image: `${base}images/rooms/camera-chiara-letto.jpeg`
  },
  {
    id: 2,
    slug: 'elena',
    name: 'Camera Elena',
    description: 'Elegante camera doppia con arredi raffinati e atmosfera rilassante.',
    capacity: 2,
    beds: 'Letto matrimoniale',
    bathroom: 'Bagno privato',
    amenities: ['Wi-Fi', 'TV', 'Aria condizionata', 'Armadio','Camera accessibile per persone con disabilità','Scrivania'],
    price: 60,
    image: `${base}images/rooms/camera-elena-letto.jpeg`
  },
  {
    id: 3,
    slug: 'giovanna',
    name: 'Camera Giovanna',
    description: 'Briosa e luminosa camera ideale per coppie.',
    capacity: 4,
    beds: 'Letto matrimoniale',
    bathroom: 'Bagno privato',
    amenities: ['Wi-Fi', 'TV', 'Aria condizionata', 'Armadio','Scrivania', 'Mini frigo', 'Bagno finestrato'],
    price: 60,
    image: `${base}images/rooms/camera-giovanna-letto.jpeg`
  },
  {
    id: 4,
    slug: 'francesco',
    name: 'Camera Francesco',
    description: 'Camera spaziosa con letti confortevoli, ideale per famiglie o gruppi.',
    capacity: 4,
    beds: 'Letto matrimoniale e 2 letti singoli',
    bathroom: 'Bagno privato',
    amenities: ['Wi-Fi', 'TV', 'Aria condizionata', 'Armadio','Scrivania', 'Mini frigo', 'Zona Giorno', 'Affaccio Cortile'],
    price: 104,
    image: `${base}images/rooms/camera-francesco-vista-laterale.jpeg`
  },
  {
    id: 5,
    slug: 'alice',
    name: 'Camera Alice',
    description: 'Briosa e luminosa camera ideale per coppie.',
    capacity: 2,
    beds: 'Letto matrimoniale',
    bathroom: 'Bagno privato',
    amenities: ['Wi-Fi', 'TV', 'Aria condizionata', 'Armadio','Scrivania', 'Mini frigo', 'Bagno finestrato'],
    price: 60,
    image: `${base}images/rooms/camera-alice-letto-2.jpeg`
  }
])
</script>

<style scoped>
.page-header {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover;
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

.rooms-grid {
  display: grid;
  gap: 3rem;
}

.room-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.room-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 400px 1fr;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.room-card-link:hover .room-card {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.room-image {
  width: 100%;
  height: 100%;
}

.room-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.room-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.room-content h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.room-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.room-features {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
}

.icon {
  font-size: 1.2rem;
}

.room-amenities {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.amenity {
  background-color: #f0f0f0;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #555;
}

.room-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.price {
  font-size: 1.5rem;
  font-weight: 600;
  color: #42b983;
}

.btn-book {
  padding: 0.8rem 2rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s;
  display: inline-block;
}

.room-card-link:hover .btn-book {
  background-color: #359268;
}

@media (max-width: 968px) {
  .room-card {
    grid-template-columns: 1fr;
  }
  
  .room-image {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .page-header p {
    font-size: 1.1rem;
  }
  
  .room-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .btn-book {
    text-align: center;
  }
}
</style>
