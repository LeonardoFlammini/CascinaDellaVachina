<template>
  <div class="color-switcher">
    <span class="label">🎨 Palette</span>
    <button
      v-for="palette in palettes"
      :key="palette.id"
      class="palette-btn"
      :class="{ active: activePalette === palette.id }"
      :style="{ '--preview': palette.primary }"
      :title="palette.name"
      @click="switchPalette(palette)"
    >
      <span class="swatch"></span>
      <span class="palette-name">{{ palette.name }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import css1 from '@/styles/colors.css?raw'
import css2 from '@/styles/colors2.css?raw'
import css3 from '@/styles/colors3.css?raw'
import css4 from '@/styles/colors4.css?raw'

const palettes = [
  { id: 1, name: 'Verde (default)', primary: '#42b983', css: css1 },
  { id: 2, name: 'Rustico Caldo',   primary: '#cf6332', css: css2 },
  { id: 3, name: 'Paprika & Mauve', primary: '#e4572e', css: css3 },
  { id: 4, name: 'Blu & Ferro',     primary: '#eb4511', css: css4 },
]

const activePalette = ref(1)

function switchPalette(palette) {
  activePalette.value = palette.id
  let tag = document.getElementById('palette-override')
  if (!tag) {
    tag = document.createElement('style')
    tag.id = 'palette-override'
    document.head.appendChild(tag)
  }
  tag.textContent = palette.css
}
</script>

<style scoped>
.color-switcher {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #1a1a1a;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  font-size: 0.8rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
}

.label {
  font-weight: 600;
  margin-right: 0.5rem;
  white-space: nowrap;
}

.palette-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: #2d2d2d;
  border: 2px solid transparent;
  border-radius: 20px;
  padding: 0.25rem 0.7rem 0.25rem 0.4rem;
  cursor: pointer;
  color: #ccc;
  font-size: 0.75rem;
  transition: border-color 0.2s, color 0.2s;
}

.palette-btn:hover {
  border-color: var(--preview);
  color: #fff;
}

.palette-btn.active {
  border-color: var(--preview);
  color: #fff;
  background: #3a3a3a;
}

.swatch {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--preview);
  flex-shrink: 0;
}

.palette-name {
  white-space: nowrap;
}
</style>
