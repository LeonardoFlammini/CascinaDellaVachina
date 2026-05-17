<template>
  <Transition name="slide-up">
    <div v-if="!cookieConsent" class="cookie-banner">
      <div class="cookie-content">
        <div class="cookie-text">
          <h3>🍪 Cookie Policy</h3>
          <p>
            Questo sito utilizza <strong>cookie tecnici</strong> necessari per il funzionamento.
            Per visualizzare Google Maps, verranno richiesti cookie aggiuntivi di terze parti.
            <router-link to="/privacy-policy" class="privacy-link">Leggi la Privacy Policy</router-link>
          </p>
        </div>
        <div class="cookie-actions">
          <button @click="acceptCookies" class="btn-accept">
            Ho capito
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cookieConsent = ref(true) // Inizia come true per non mostrare subito

// Controlla se l'utente ha già accettato
onMounted(() => {
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) {
    // Mostra il banner dopo un piccolo delay per evitare flash
    setTimeout(() => {
      cookieConsent.value = false
    }, 500)
  }
})

const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'true')
  localStorage.setItem('cookieConsentDate', new Date().toISOString())
  cookieConsent.value = true
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  padding: 1.5rem;
  border-top: 3px solid var(--color-primary);
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
}

.cookie-text {
  flex: 1;
}

.cookie-text h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: var(--color-text-primary);
}

.cookie-text p {
  margin: 0;
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

.privacy-link {
  color: var(--color-primary);
  text-decoration: underline;
  font-weight: 600;
  margin-left: 0.5rem;
}

.privacy-link:hover {
  color: var(--color-primary-dark);
}

.cookie-actions {
  flex-shrink: 0;
}

.btn-accept {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  white-space: nowrap;
}

.btn-accept:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
}

/* Animazione slide-up */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media (max-width: 768px) {
  .cookie-banner {
    padding: 1rem;
  }

  .cookie-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .cookie-text h3 {
    font-size: 1rem;
  }

  .cookie-text p {
    font-size: 0.9rem;
  }

  .btn-accept {
    width: 100%;
  }
}
</style>
