<template>
  <div class="services">
    <div class="page-header">
      <h1>I Nostri Servizi</h1>
      <p>Tutto quello che offriamo per il tuo comfort</p>
    </div>

    <div class="container">
      <div class="services-grid">
        <div class="service-card" v-for="service in services" :key="service.id">
          <div class="service-icon">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <ul v-if="service.details">
            <li v-for="detail in service.details" :key="detail">{{ detail }}</li>
          </ul>
        </div>
      </div>

      <section class="info-section">
        <h2>Informazioni Utili</h2>
        <div class="info-grid">
          <div class="info-card">
            <h4>Check-in / Check-out</h4>
            <p><strong>Check-in:</strong> dalle 14:00 alle 20:00</p>
            <p><strong>Check-out:</strong> entro le 11:00</p>
            <p class="note">Per arrivi fuori orario, contattaci in anticipo</p>
          </div>
          <div class="info-card">
            <h4>Cancellazione</h4>
            <p>Cancellazione gratuita fino a 7 giorni prima dell'arrivo</p>
            <p class="note">Consulta le nostre condizioni complete al momento della prenotazione</p>
          </div>
          <div class="info-card">
            <h4>Animali</h4>
            <p>Animali domestici di piccola taglia ammessi su richiesta</p>
            <p class="note">Supplemento di 10€ al giorno</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    id: 1,
    icon: '🥐',
    title: 'Colazione',
    description: 'Inizia la giornata con la nostra colazione genuina',
    details: [
      'Prodotti freschi e locali',
      'Torte artigianali',
      'Marmellate artigianali',
      'Caffè e bevande calde',
      'Opzioni per celiaci, intolleranti al lattosio e vegetariani',
      'Possibilità di colazione all\'aperto nei mesi più caldi'
    ]
  },
  {
    id: 2,
    icon: '🅿️',
    title: 'Parcheggio',
    description: 'Parcheggio privato gratuito per tutti gli ospiti',
    details: [
      'Ampio parcheggio interno',
      'Accesso custodito',
      'Posti auto riservati'
    ]
  },
  {
    id: 3,
    icon: '📶',
    title: 'Wi-Fi Gratuito',
    description: 'Connessione internet veloce in tutta la struttura',
    details: [
      'Fibra ottica ad alta velocità',
      'Copertura in tutte le camere',
      'Rete sicura e protetta'
    ]
  },
  {
    id: 4,
    icon: '🌳',
    title: 'Spazi Esterni',
    description: 'Rilassati nei nostri spazi verdi',
    details: [
      'Giardino con zona relax',
      'Area barbecue',
      'Tavoli e sedie da esterno',
      'Giochi per bambini'
    ]
  },
  {
    id: 5,
    icon: '🛎️',
    title: 'I nostri comfort',
    description: 'Per rendere il tuo soggiorno ancora più piacevole',
    details: [
      'Camere climatizzate',
      'Bagno privato in tutte le camere',
      'Finestre panoramiche con vista',
      'Set cortesia di alta qualità',
      'Atmosfera rilassante immersa nella natura',
      'Privacy e tranquillità',
      'Camere per ospiti con disabilità',
    ]
  },
  {
    id: 6,
    icon: 'ℹ️',
    title: 'Info Turistiche',
    description: 'Ti aiutiamo a scoprire il territorio',
    details: [
      'Consigli su itinerari e visite',
      'Mappe e guide turistiche',
      'Prenotazione ristoranti',
      'Informazioni su eventi locali',
      'Attività convenzionate e sconti per attrazioni turistiche',
    ]
  }
])
</script>

<style scoped>
.page-header {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover;
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.service-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.service-card p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.service-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-card li {
  color: #555;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.service-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #42b983;
  font-weight: bold;
}

.info-section {
  background-color: #f8f9fa;
  padding: 3rem;
  border-radius: 10px;
  margin-top: 3rem;
}

.info-section h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.info-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
}

.info-card h4 {
  color: #42b983;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.info-card p {
  color: #555;
  margin: 0.5rem 0;
  line-height: 1.6;
}

.info-card .note {
  color: #888;
  font-size: 0.9rem;
  font-style: italic;
  margin-top: 0.8rem;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .page-header p {
    font-size: 1.1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .info-section {
    padding: 2rem 1rem;
  }
}
</style>
