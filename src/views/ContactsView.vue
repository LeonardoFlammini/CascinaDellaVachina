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
                <span>Facebook</span>
              </a>
              <a href="#" target="_blank" class="social-btn instagram">
                <span>Instagram</span>
              </a>
              <a href="#" target="_blank" class="social-btn tripadvisor">
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
                Accetto la <a href="#" target="_blank">Privacy Policy</a> *
              </label>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? 'Invio in corso...' : 'Invia Richiesta' }}
            </button>

            <p v-if="submitSuccess" class="success-message">
              ✓ Messaggio inviato con successo! Ti risponderemo al più presto.
            </p>
            <p v-if="submitError" class="error-message">
              ✗ Si è verificato un errore. Riprova o contattaci telefonicamente.
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

const handleSubmit = async () => {
  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = false

  try {
    // Simula invio form (sostituire con chiamata API reale)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form
    Object.keys(formData).forEach(key => {
      if (typeof formData[key] === 'boolean') {
        formData[key] = false
      } else {
        formData[key] = ''
      }
    })
    
    submitSuccess.value = true
    
    // Nascondi messaggio dopo 5 secondi
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  } catch (error) {
    submitError.value = true
    setTimeout(() => {
      submitError.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover;
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
  padding: 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: opacity 0.3s;
}

.social-btn:hover {
  opacity: 0.9;
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
