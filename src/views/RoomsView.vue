<template>
  <div class="rooms">
    <div class="page-header">
      <h1>Le Nostre Camere</h1>
      <p>Comfort e accoglienza per il tuo soggiorno</p>
    </div>

    <div class="container">
      <div class="rooms-grid">
        <div class="room-card" v-for="room in rooms" :key="room.id">
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
              <router-link to="/contatti" class="btn-book">Prenota</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const rooms = ref([
  {
    id: 1,
    name: 'Camera Doppia Standard',
    description: 'Camera accogliente con vista sul giardino, ideale per coppie.',
    capacity: 2,
    beds: 'Letto matrimoniale',
    bathroom: 'Bagno privato',
    amenities: ['Wi-Fi', 'TV', 'Aria condizionata', 'Armadio'],
    price: 70,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Camera Familiare',
    description: 'Spaziosa camera perfetta per famiglie, con zona living.',
    capacity: 4,
    beds: '1 letto matrimoniale + 2 letti singoli',
    bathroom: 'Bagno privato',
    amenities: ['Wi-Fi', 'TV', 'Aria condizionata', 'Mini frigo', 'Zona soggiorno'],
    price: 110,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Camera Superior',
    description: 'La nostra camera più elegante con vista panoramica.',
    capacity: 2,
    beds: 'Letto king size',
    bathroom: 'Bagno privato con vasca',
    amenities: ['Wi-Fi', 'TV', 'Aria condizionata', 'Terrazzo privato', 'Minibar'],
    price: 95,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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

.room-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 400px 1fr;
  transition: transform 0.3s;
}

.room-card:hover {
  transform: translateY(-5px);
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
}

.btn-book:hover {
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
