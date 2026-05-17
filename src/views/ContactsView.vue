<template>
  <div class="contacts">
    <div class="page-header">
      <h1>Contattaci</h1>
      <p>Siamo a tua disposizione per ogni informazione</p>
    </div>

    <div class="container">
      <div class="contacts-grid">
        <!-- Contact Information -->
        <section class="contact-info">
          <h2>Informazioni di Contatto</h2>
          
          <div class="info-cards">
            <div class="info-card">
              <div class="icon">📞</div>
              <h3>Telefono</h3>
              <p><a href="tel:+39xxxxxxxxxx">+39 xxx xxx xxxx</a></p>
              <p class="note">Dalle 8:00 alle 20:00</p>
            </div>

            <div class="info-card">
              <div class="icon">📧</div>
              <h3>Email</h3>
              <p><a href="mailto:info@cascinadellavachina.it">info@cascinadellavachina.it</a></p>
              <p class="note">Risposta entro 24 ore</p>
            </div>

            <div class="info-card">
              <div class="icon">💬</div>
              <h3>WhatsApp</h3>
              <p><a href="https://wa.me/39xxxxxxxxxx" target="_blank">Chatta con noi</a></p>
              <p class="note">Risposta rapida</p>
            </div>
          </div>

          <div class="social-section">
            <h3>Seguici sui Social</h3>
            <div class="social-links">
              <a href="#" target="_blank" class="social-btn facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="social-icon">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
              <a href="#" target="_blank" class="social-btn instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="social-icon">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a href="#" target="_blank" class="social-btn tripadvisor">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="social-icon">
                  <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 00.622 10.973 5.997 5.997 0 008.512-3.307 5.997 5.997 0 008.512 3.307 5.997 5.997 0 00.622-10.973L24 6.648h-4.361c-2.307-1.569-4.976-2.353-7.633-2.353zM7.904 9.42a3.428 3.428 0 110 6.857 3.428 3.428 0 010-6.857zm8.192 0a3.428 3.428 0 110 6.857 3.428 3.428 0 010-6.857zM7.904 11c-.902 0-1.634.731-1.634 1.634s.732 1.634 1.634 1.634a1.634 1.634 0 000-3.268zm8.192 0c-.902 0-1.634.731-1.634 1.634s.732 1.634 1.634 1.634a1.634 1.634 0 000-3.268z"/>
                </svg>
                <span>TripAdvisor</span>
              </a>
            </div>
          </div>
        </section>

        <!-- Contact Form -->
        <section class="contact-form-section">
          <h2>Richiedi Informazioni</h2>
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Nome e Cognome *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  required
                  placeholder="Il tuo nome"
                >
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  required
                  placeholder="tua@email.it"
                >
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="phone">Telefono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="formData.phone"
                  placeholder="+39 xxx xxx xxxx"
                >
              </div>

              <div class="form-group">
                <label for="guests">Numero Ospiti</label>
                <select id="guests" v-model="formData.guests">
                  <option value="">Seleziona</option>
                  <option value="1">1 persona</option>
                  <option value="2">2 persone</option>
                  <option value="3">3 persone</option>
                  <option value="4">4 persone</option>
                  <option value="5+">5+ persone</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="checkin">Check-in</label>
                <input 
                  type="date" 
                  id="checkin" 
                  v-model="formData.checkin"
                >
              </div>

              <div class="form-group">
                <label for="checkout">Check-out</label>
                <input 
                  type="date" 
                  id="checkout" 
                  v-model="formData.checkout"
                >
              </div>
            </div>

            <div class="form-group">
              <label for="message">Messaggio *</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                required
                rows="5"
                placeholder="Scrivici qui la tua richiesta o le tue domande..."
              ></textarea>
            </div>

            <div class="form-group checkbox">
              <input 
                type="checkbox" 
                id="privacy" 
                v-model="formData.privacy" 
                required
              >
              <label for="privacy">
                Accetto la <router-link to="/privacy-policy" target="_blank">Privacy Policy</router-link> e autorizzo il trattamento dei miei dati personali *
              </label>
            </div>

            <button type="submit" class="submit-btn">
              Invia Richiesta via Email
            </button>

            <p v-if="submitSuccess" class="success-message">
              ✓ Il tuo client email si aprirà con i dati compilati. Invia l'email per completare la richiesta.
            </p>

            <p class="form-note">
              <small>💡 Il form aprirà il tuo client email predefinito. Se non funziona, contattaci direttamente via email o telefono.</small>
            </p>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  guests: '',
  checkin: '',
  checkout: '',
  message: '',
  privacy: false
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

const handleSubmit = () => {
  // Poiché non c'è backend, crea un link mailto con i dati del form
  const subject = encodeURIComponent('Richiesta informazioni da ' + formData.name)
  const body = encodeURIComponent(
    `Nome: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Telefono: ${formData.phone || 'Non fornito'}\n` +
    `Numero Ospiti: ${formData.guests || 'Non specificato'}\n` +
    `Check-in: ${formData.checkin || 'Non specificato'}\n` +
    `Check-out: ${formData.checkout || 'Non specificato'}\n\n` +
    `Messaggio:\n${formData.message}\n\n` +
    `---\n` +
    `Consenso privacy accordato il: ${new Date().toLocaleString('it-IT')}`
  )
  
  // Apri client email
  window.location.href = `mailto:info@cascinadellavachina.it?subject=${subject}&body=${body}`
  
  // Mostra messaggio di successo
  submitSuccess.value = true
  
  // Reset form dopo 3 secondi
  setTimeout(() => {
    Object.keys(formData).forEach(key => {
      if (typeof formData[key] === 'boolean') {
        formData[key] = false
      } else {
        formData[key] = ''
      }
    })
    submitSuccess.value = false
  }, 3000)
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover;
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

.contacts-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
}

h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.info-cards {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.info-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.info-card .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.info-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.info-card p {
  margin: 0.3rem 0;
}

.info-card a {
  color: #42b983;
  text-decoration: none;
  font-weight: 600;
}

.info-card a:hover {
  text-decoration: underline;
}

.info-card .note {
  color: #888;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.social-section {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
}

.social-section h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: opacity 0.3s, transform 0.3s;
}

.social-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.social-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.facebook { background-color: #1877f2; }
.instagram { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
.tripadvisor { background-color: #00af87; }

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #2c3e50;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #42b983;
}

.form-group.checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-group.checkbox input {
  width: auto;
  margin: 0;
}

.form-group.checkbox label {
  margin: 0;
  font-weight: normal;
}

.form-group.checkbox a {
  color: #42b983;
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background-color: #359268;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-note {
  text-align: center;
  margin-top: 1rem;
  color: var(--color-text-secondary);
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 5px;
  border-left: 4px solid var(--color-primary);
}

.success-message {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border-radius: 5px;
  text-align: center;
}

.error-message {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 5px;
  text-align: center;
}

@media (max-width: 968px) {
  .contacts-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .page-header p {
    font-size: 1.1rem;
  }
  
  .contact-form {
    padding: 1.5rem;
  }
}
</style>
