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
import { siteConfig } from '@/config/siteConfig'

const selectedCategory = ref('')
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

// Carica dinamicamente tutte le immagini da public/images e sottocartelle
const imageModules = import.meta.glob('/public/images/**/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })

// Processa le immagini ed evita duplicati
const loadImages = () => {
  const processedImages = []
  const seenFilenames = new Set() // Per tracciare i duplicati
  const foundCategories = new Set() // Categorie trovate dinamicamente
  
  for (const [path, url] of Object.entries(imageModules)) {
    // Escludi immagini dalla cartella 'hero'
    if (path.includes('/hero/')) {
      continue
    }
    
    // Estrai il nome del file
    const filename = path.split('/').pop()
    
    // Salta se è un duplicato
    if (seenFilenames.has(filename)) {
      continue
    }
    seenFilenames.add(filename)
    
    // Estrai categoria dal path (es: /public/images/rooms/chiara/1.jpg -> "rooms")
    const pathParts = path.replace('/public/images/', '').split('/')
    let category = 'Generale'
    let title = filename.replace(/\.\w+$/, '') // Nome file senza estensione
    
    if (pathParts.length > 1) {
      // Ha sottocartelle
      const folder = pathParts[0]
      
      // Mappa nomi cartelle a categorie user-friendly
      const categoryMap = {
        'rooms': 'Camere',
        'exterior': 'Esterni',
        'breakfast': 'Colazione',
        'structure': 'Struttura',
        'services': 'Servizi'
      }
      
      category = categoryMap[folder] || folder.charAt(0).toUpperCase() + folder.slice(1)
      
      // Se è una sottocartella di rooms, usa il nome della camera come titolo
      if (folder === 'rooms' && pathParts.length > 2) {
        const roomName = pathParts[1].charAt(0).toUpperCase() + pathParts[1].slice(1)
        title = `Camera ${roomName}`
      }
    }
    
    foundCategories.add(category)
    
    processedImages.push({
      url: url,
      title: title,
      category: category,
      filename: filename
    })
  }
  
  // Ordina le immagini per categoria (secondo ordine config) e poi per filename
  const sortedImages = processedImages.sort((a, b) => {
    const orderA = siteConfig.galleryCategories.indexOf(a.category)
    const orderB = siteConfig.galleryCategories.indexOf(b.category)
    
    if (orderA !== orderB) {
      return (orderA === -1 ? 999 : orderA) - (orderB === -1 ? 999 : orderB)
    }
    return a.filename.localeCompare(b.filename, undefined, { numeric: true })
  })
  
  // Ordina le categorie secondo l'ordine definito in siteConfig
  const sortedCategories = Array.from(foundCategories).sort((a, b) => {
    const orderA = siteConfig.galleryCategories.indexOf(a)
    const orderB = siteConfig.galleryCategories.indexOf(b)
    return (orderA === -1 ? 999 : orderA) - (orderB === -1 ? 999 : orderB)
  })
  
  return {
    images: sortedImages,
    categories: sortedCategories
  }
}

const { images: loadedImages, categories: loadedCategories } = loadImages()
const images = ref(loadedImages)
const categories = ref(loadedCategories)

// Imposta la prima categoria come default
if (loadedCategories.length > 0) {
  selectedCategory.value = loadedCategories[0]
}

const filteredImages = computed(() => {
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
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('/images/gallery/lago-lungo-pontile.jpeg') center/cover;
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
  border: 2px solid var(--color-border);
  background: white;
  color: var(--color-text-secondary);
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.filter-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.filter-btn.active {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}

.gallery-grid {
  column-count: 3;
  column-gap: 1.5rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  break-inside: avoid;
  margin-bottom: 1.5rem;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
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

@media (max-width: 1024px) {
  .gallery-grid {
    column-count: 2;
    column-gap: 1rem;
  }
  
  .gallery-item {
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .page-header p {
    font-size: 1.1rem;
  }
  
  .gallery-grid {
    column-count: 1;
    column-gap: 0;
  }
  
  .gallery-item {
    margin-bottom: 1rem;
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
