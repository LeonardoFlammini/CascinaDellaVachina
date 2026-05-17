# 📸 Immagini del Sito - Cascina della Vachina

Questa cartella contiene tutte le immagini utilizzate nel sito web.

## 📁 Struttura Cartelle

### `/hero/`
Immagini per la sezione hero della homepage
- **Dimensioni consigliate**: 1920x1080px o superiori
- **Formato**: JPG o WebP
- **Peso**: Max 500KB (ottimizzare!)
- Esempio: `hero-main.jpg`, `hero-sunset.jpg`

### `/rooms/`
Foto delle camere del B&B
- **Dimensioni consigliate**: 1200x800px
- **Formato**: JPG
- Nomi file: `doppia-standard-1.jpg`, `familiare-2.jpg`, `superior-3.jpg`
- Includere foto di: letto, bagno, vista, dettagli

### `/gallery/`
Immagini per la galleria fotografica
- **Dimensioni consigliate**: 1200x900px
- **Formato**: JPG
- Categorie:
  - `gallery-camere-*.jpg` - Foto delle camere
  - `gallery-esterni-*.jpg` - Giardino, parcheggio, spazi comuni
  - `gallery-colazione-*.jpg` - Sala colazione, buffet, cibo
  - `gallery-struttura-*.jpg` - Edificio, reception, dettagli architettonici

### `/services/`
Icone o immagini per la sezione servizi
- **Dimensioni consigliate**: 800x600px o icone SVG
- **Formato**: JPG, PNG (per trasparenze), SVG (per icone)
- Esempio: `wifi.svg`, `parking.jpg`, `breakfast.jpg`

### `/location/`
Immagini della zona e attrazioni locali
- **Dimensioni consigliate**: 1000x750px
- **Formato**: JPG
- Esempio: `area-map.jpg`, `centro-storico.jpg`, `lago.jpg`

### `/about/`
Immagini per la sezione "Chi Siamo" o storia
- **Dimensioni consigliate**: 1000x750px
- **Formato**: JPG
- Esempio: `proprietari.jpg`, `storia-cascina.jpg`

## 🎨 Linee Guida

### Naming Convention
- Usa **kebab-case**: `nome-file-descrittivo.jpg`
- Sii descrittivo: `camera-doppia-vista-lago.jpg` ✅ invece di `img001.jpg` ❌
- Aggiungi numero per foto simili: `esterni-giardino-1.jpg`, `esterni-giardino-2.jpg`

### Ottimizzazione
Prima di caricare le immagini:
1. **Ridimensiona** alle dimensioni consigliate
2. **Comprimi** usando:
   - [TinyPNG](https://tinypng.com/) - Compressione online gratuita
   - [Squoosh](https://squoosh.app/) - Tool Google per ottimizzazione
   - Photoshop: "Salva per Web" con qualità 80%
3. **Formato WebP** per immagini moderne (opzionale ma consigliato)
4. **Target**: 100-300KB per immagine hero, 50-150KB per altre

### SEO & Accessibilità
- Nomi file descrittivi aiutano il SEO
- Nel codice, usa sempre `alt` attribute descrittivi
- Considera versioni responsive (mobile/desktop)

## 📊 Checklist Immagini Necessarie

### Priorità Alta (Minimo Indispensabile)
- [ ] 1 immagine hero homepage
- [ ] 3 immagini camere (una per tipo: doppia, familiare, superior)
- [ ] 6-8 immagini galleria (mix camere + esterni)

### Priorità Media
- [ ] Immagini per ogni servizio (wifi, colazione, ecc.)
- [ ] Foto esterni e giardino
- [ ] Foto sala colazione

### Priorità Bassa
- [ ] Foto proprietari/staff
- [ ] Immagini attrazioni zona
- [ ] Foto stagionali (estate/inverno)

## 🔄 Placeholder Attuali

Attualmente il sito usa immagini di Unsplash come placeholder:
- Homepage hero: Unsplash landscape
- Camere: Placeholder generici
- Galleria: Immagini stock

**TODO**: Sostituire con foto reali del B&B!

## 🛠️ Come Usare le Immagini nel Codice

### Da public/images/ (Immagini statiche)
```vue
<!-- In template Vue -->
<img src="/images/rooms/doppia-standard-1.jpg" alt="Camera doppia standard">

<!-- Per background CSS -->
<style>
.hero {
  background-image: url('/images/hero/hero-main.jpg');
}
</style>
```

### Da src/assets/ (Immagini processate da Vite)
```vue
<script setup>
import heroImg from '@/assets/images/hero.jpg'
</script>

<template>
  <img :src="heroImg" alt="Hero">
</template>
```

## 📝 Note
- Le immagini in `public/` NON vengono processate da Vite (copia diretta)
- Le immagini in `src/assets/` vengono ottimizzate da Vite durante il build
- Per immagini grandi (>200KB) meglio usare `public/`
- Per icone piccole meglio `src/assets/`

## ⚖️ Copyright & Licenze
- Usa solo immagini di cui hai i diritti
- Per immagini stock gratuite:
  - [Unsplash](https://unsplash.com/) - Gratis, senza attribuzione
  - [Pexels](https://www.pexels.com/) - Gratis, senza attribuzione
  - [Pixabay](https://pixabay.com/) - Gratis, licenza commerciale
- Considera di scattare foto professionali del B&B reale
