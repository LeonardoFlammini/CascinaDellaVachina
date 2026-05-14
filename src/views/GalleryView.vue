<template>
  <div class="gallery">
    <div class="page-header">
      <h1>Galleria Fotografica</h1>
      <p>Scopri la bellezza della nostra struttura</p>
    </div>

    <div class="container">
      <!-- Category Filters -->
      <div class="filters">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          :class="['filter-btn', { active: selectedCategory === category }]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="gallery-grid">
        <div 
          v-for="(image, index) in filteredImages" 
          :key="index"
          class="gallery-item"
          @click="openLightbox(index)"
        >
          <img :src="image.url" :alt="image.title">
          <div class="image-overlay">
            <span class="image-title">{{ image.title }}</span>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="close-btn" @click.stop="closeLightbox">&times;</button>
        <button class="nav-btn prev" @click.stop="prevImage">&lsaquo;</button>
        <button class="nav-btn next" @click.stop="nextImage">&rsaquo;</button>
        <img :src="filteredImages[currentImageIndex]?.url" :alt="filteredImages[currentImageIndex]?.title">
        <div class="lightbox-caption">{{ filteredImages[currentImageIndex]?.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ref(['Tutte', 'Camere', 'Esterni', 'Colazione', 'Struttura'])
const selectedCategory = ref('Tutte')
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const images = ref([
  { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800', title: 'Camera Doppia', category: 'Camere' },
  { url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800', title: 'Camera Familiare', category: 'Camere' },
  { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800', title: 'Camera Superior', category: 'Camere' },
  { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800', title: 'Esterno Cascina', category: 'Esterni' },
  { url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800', title: 'Giardino', category: 'Esterni' },
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', title: 'Ingresso', category: 'Struttura' },
  { url: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800', title: 'Colazione', category: 'Colazione' },
  { url: 'https://images.unsplash.com/photo-1533920379810-6bedac961555?w=800', title: 'Dolci fatti in casa', category: 'Colazione' },
  { url: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800', title: 'Area relax', category: 'Esterni' },
  { url: 'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=800', title: 'Sala comune', category: 'Struttura' },
  { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800', title: 'Dettaglio camera', category: 'Camere' },
  { url: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800', title: 'Vista panoramica', category: 'Esterni' }
])

const filteredImages = computed(() => {
  if (selectedCategory.value === 'Tutte') {
    return images.value
  }
  return images.value.filter(img => img.category === selectedCategory.value)
})

const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % filteredImages.value.length
}

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + filteredImages.value.length) % filteredImages.value.length
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover;
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 20px;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.8rem 1.5rem;
  border: 2px solid #e0e0e0;
  background: white;
  color: #555;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.filter-btn:hover {
  border-color: #42b983;
  color: #42b983;
}

.filter-btn.active {
  background-color: #42b983;
  border-color: #42b983;
  color: white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  aspect-ratio: 4/3;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1rem 1rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .image-overlay {
  opacity: 1;
}

.image-title {
  color: white;
  font-weight: 500;
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.lightbox img {
  max-width: 90%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 5px;
}

.close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}

.close-btn:hover {
  transform: scale(1.2);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.nav-btn.prev {
  left: 2rem;
}

.nav-btn.next {
  right: 2rem;
}

.lightbox-caption {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.2rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 1rem 2rem;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .page-header p {
    font-size: 1.1rem;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .nav-btn {
    width: 40px;
    height: 40px;
    font-size: 2rem;
  }
  
  .nav-btn.prev {
    left: 1rem;
  }
  
  .nav-btn.next {
    right: 1rem;
  }
  
  .close-btn {
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
  }
}
</style>
