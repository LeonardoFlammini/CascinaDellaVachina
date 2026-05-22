<template>
  <div class="privacy-policy">
    <div class="page-header">
      <div class="container">
        <h1>Privacy Policy</h1>
        <p>Informativa sul trattamento dei dati personali</p>
      </div>
    </div>

    <div class="container">
      <div class="privacy-content">
        <div class="last-update">
          Ultimo aggiornamento: 17 maggio 2026
        </div>

        <section class="privacy-section">
          <h2>1. Titolare del Trattamento</h2>
          <p>
            Il Titolare del trattamento dei dati personali è <strong>{{ siteConfig.name }}</strong>,<br>
            con sede in {{ getFullAddress() }}<br>
            Email: <a :href="getEmailLink()">{{ siteConfig.contact.email }}</a><br>
            Telefono: <a :href="getPhoneLink()">{{ siteConfig.contact.phone }}</a>
          </p>
        </section>

        <section class="privacy-section">
          <h2>2. Tipologie di Dati Raccolti</h2>
          <p>
            In conformità al Regolamento UE 2016/679 (GDPR), raccogliamo i seguenti dati personali:
          </p>
          
          <h3>2.1 Dati forniti volontariamente</h3>
          <p>Tramite il <strong>modulo di contatto</strong>, raccogliamo:</p>
          <ul>
            <li>Nome e cognome</li>
            <li>Indirizzo email</li>
            <li>Numero di telefono (opzionale)</li>
            <li>Date del soggiorno</li>
            <li>Numero di ospiti</li>
            <li>Messaggio/richiesta</li>
          </ul>

          <h3>2.2 Dati di navigazione</h3>
          <p>
            Durante la navigazione, potrebbero essere raccolti automaticamente dati tecnici come:
            indirizzo IP, tipo di browser, sistema operativo, pagine visitate.
            Questi dati sono utilizzati esclusivamente per finalità tecniche e di sicurezza.
          </p>
        </section>

        <section class="privacy-section">
          <h2>3. Finalità e Base Giuridica del Trattamento</h2>
          
          <div class="info-box">
            <h4>📧 Modulo di Contatto</h4>
            <p><strong>Finalità:</strong> Rispondere alle richieste di informazioni e prenotazioni</p>
            <p><strong>Base giuridica:</strong> Consenso esplicito (Art. 6.1.a GDPR)</p>
            <p><strong>Conservazione:</strong> I dati saranno conservati per 24 mesi dalla ricezione, salvo necessità contrattuali o di legge</p>
          </div>

          <div class="info-box">
            <h4>🔒 Dati Tecnici di Navigazione</h4>
            <p><strong>Finalità:</strong> Sicurezza del sito, prevenzione frodi, ottimizzazione tecnica</p>
            <p><strong>Base giuridica:</strong> Legittimo interesse (Art. 6.1.f GDPR)</p>
            <p><strong>Conservazione:</strong> Fino a 12 mesi per log tecnici</p>
          </div>
        </section>

        <section class="privacy-section">
          <h2>4. Cookie e Tecnologie di Tracciamento</h2>
          
          <h3>4.1 Cookie Tecnici</h3>
          <p>
            Il sito utilizza esclusivamente <strong>cookie tecnici necessari</strong> per il corretto funzionamento.
            Questi cookie non richiedono consenso ai sensi del GDPR.
          </p>
          
          <h3>4.2 Google Maps</h3>
          <div class="warning-box">
            <p>
              ⚠️ <strong>Google Maps richiede il tuo consenso</strong>
            </p>
            <p>
              La pagina "Dove Siamo" include una mappa interattiva di Google Maps.
              Google potrebbe installare cookie per la visualizzazione della mappa:
            </p>
            <ul>
              <li><strong>NID</strong> - Cookie Google (durata: 6 mesi)</li>
              <li><strong>CONSENT</strong> - Preferenze consenso (durata: 20 anni)</li>
              <li><strong>1P_JAR, DV</strong> - Cookie pubblicità e analitici</li>
            </ul>
            <p>
              <strong>Come funziona:</strong> La mappa è bloccata di default. 
              Quando visiti la pagina "Dove Siamo", ti verrà chiesto se vuoi caricare Google Maps.
              Solo dopo il tuo consenso esplicito verranno installati i cookie di Google.
            </p>
            <p>
              <strong>Privacy Policy Google:</strong> 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a>
            </p>
          </div>

          <h3>4.3 Servizi NON Utilizzati</h3>
          <div class="info-box">
            <p>
              ✅ <strong>Questo sito NON utilizza</strong>:
            </p>
            <ul>
              <li>Google Analytics (nessun tracciamento)</li>
              <li>Facebook Pixel (nessuna pubblicità)</li>
              <li>Cookie di profilazione</li>
              <li>Cookie di marketing</li>
            </ul>
          </div>

          <h3>4.4 Gestione dei Cookie</h3>
          <p>
            Puoi gestire o disabilitare i cookie attraverso le impostazioni del tuo browser.
            Disabilitare i cookie tecnici potrebbe compromettere alcune funzionalità del sito.
          </p>
        </section>

        <section class="privacy-section">
          <h2>5. Modalità del Trattamento</h2>
          <p>Il trattamento dei dati avviene mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.</p>
          <p>
            I dati personali sono trattati con misure di sicurezza adeguate a prevenire:
          </p>
          <ul>
            <li>Accesso non autorizzato</li>
            <li>Divulgazione non autorizzata</li>
            <li>Modifica o distruzione non autorizzata</li>
            <li>Perdita accidentale</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>6. Comunicazione e Diffusione dei Dati</h2>
          <p>
            I dati personali <strong>non vengono diffusi</strong> e potrebbero essere comunicati solo a:
          </p>
          <ul>
            <li><strong>Fornitori di servizi tecnici</strong> (hosting, email) in qualità di Responsabili del Trattamento</li>
            <li><strong>Autorità pubbliche</strong>, quando richiesto per legge</li>
          </ul>
          <p>
            I dati <strong>non vengono trasferiti</strong> al di fuori dell'Unione Europea.
          </p>
        </section>

        <section class="privacy-section">
          <h2>7. I Tuoi Diritti (Artt. 15-22 GDPR)</h2>
          <p>In qualità di interessato, hai diritto di:</p>
          
          <div class="rights-grid">
            <div class="right-card">
              <h4>🔍 Accesso</h4>
              <p>Ottenere conferma dell'esistenza dei tuoi dati e una copia degli stessi</p>
            </div>
            <div class="right-card">
              <h4>✏️ Rettifica</h4>
              <p>Richiedere la correzione di dati inesatti o incompleti</p>
            </div>
            <div class="right-card">
              <h4>🗑️ Cancellazione</h4>
              <p>Richiedere la cancellazione dei tuoi dati ("diritto all'oblio")</p>
            </div>
            <div class="right-card">
              <h4>⛔ Limitazione</h4>
              <p>Richiedere la limitazione del trattamento</p>
            </div>
            <div class="right-card">
              <h4>📤 Portabilità</h4>
              <p>Ricevere i dati in formato strutturato e leggibile</p>
            </div>
            <div class="right-card">
              <h4>🚫 Opposizione</h4>
              <p>Opporti al trattamento dei tuoi dati</p>
            </div>
            <div class="right-card">
              <h4>❌ Revoca Consenso</h4>
              <p>Revocare il consenso in qualsiasi momento</p>
            </div>
            <div class="right-card">
              <h4>⚖️ Reclamo</h4>
              <p>Proporre reclamo al Garante per la Privacy</p>
            </div>
          </div>

          <div class="contact-box">
            <h4>Come Esercitare i Tuoi Diritti</h4>
            <p>
              Per esercitare i tuoi diritti, puoi contattarci a:<br>
              <strong>Email:</strong> <a :href="getEmailLink()">{{ siteConfig.contact.email }}</a><br>
              <strong>Telefono:</strong> <a :href="getPhoneLink()">{{ siteConfig.contact.phone }}</a>
            </p>
            <p>
              Ti risponderemo entro <strong>30 giorni</strong> dalla richiesta.
            </p>
          </div>

          <div class="warning-box">
            <p>
              <strong>📧 Autorità di Controllo</strong><br>
              Puoi proporre reclamo al Garante per la Protezione dei Dati Personali:<br>
              <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">www.garanteprivacy.it</a>
            </p>
          </div>
        </section>

        <section class="privacy-section">
          <h2>8. Modifiche alla Privacy Policy</h2>
          <p>
            Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento.
            Le modifiche saranno pubblicate su questa pagina con aggiornamento della data in alto.
          </p>
          <p>
            Ti invitiamo a consultare periodicamente questa pagina per essere informato 
            sulle eventuali modifiche.
          </p>
        </section>

        <section class="privacy-section">
          <h2>9. Contatti</h2>
          <p>
            Per qualsiasi domanda riguardante questa Privacy Policy o il trattamento 
            dei tuoi dati personali, puoi contattarci:
          </p>
          <div class="contact-info">
            <p><strong>Email:</strong> <a :href="getEmailLink()">{{ siteConfig.contact.email }}</a></p>
            <p><strong>Telefono:</strong> <a :href="getPhoneLink()">{{ siteConfig.contact.phone }}</a></p>
            <p><strong>Indirizzo:</strong> {{ getFullAddress() }}</p>
          </div>
        </section>

        <div class="back-link">
          <router-link to="/contatti" class="btn-primary">← Torna ai Contatti</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { siteConfig, getFullAddress, getPhoneLink, getEmailLink } from '@/config/siteConfig'
</script>

<style scoped>
.privacy-policy {
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200') center/cover;
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
}

.page-header p {
  font-size: 1.2rem;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
}

.privacy-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

.last-update {
  background-color: var(--color-bg-secondary);
  padding: 1rem;
  border-left: 4px solid var(--color-primary);
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  font-style: italic;
}

.privacy-section {
  margin-bottom: 3rem;
}

.privacy-section h2 {
  color: var(--color-text-primary);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-primary);
}

.privacy-section h3 {
  color: var(--color-text-primary);
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.privacy-section h4 {
  color: var(--color-text-primary);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.privacy-section p {
  line-height: 1.8;
  margin-bottom: 1rem;
  color: var(--color-text-secondary);
}

.privacy-section ul {
  margin-left: 2rem;
  margin-bottom: 1rem;
  line-height: 1.8;
}

.privacy-section li {
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
}

.privacy-section a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.privacy-section a:hover {
  text-decoration: underline;
}

.info-box,
.warning-box,
.contact-box {
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.info-box {
  background-color: #e7f5ff;
  border-left: 4px solid #1c7ed6;
}

.info-box p {
  margin-bottom: 0.5rem;
  color: var(--color-text-primary);
}

.warning-box {
  background-color: #fff4e6;
  border-left: 4px solid #fd7e14;
}

.warning-box p,
.warning-box ul {
  color: var(--color-text-primary);
}

.contact-box {
  background-color: var(--color-bg-secondary);
  border-left: 4px solid var(--color-primary);
}

.contact-box p {
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.rights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.right-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  border-left: 4px solid var(--color-primary);
}

.right-card h4 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.right-card p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin: 0;
}

.contact-info {
  background: var(--color-bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.contact-info p {
  margin-bottom: 0.5rem;
  color: var(--color-text-primary);
}

.back-link {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.btn-primary {
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.3s;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .page-header {
    padding: 2rem 0;
  }

  .page-header h1 {
    font-size: 1.8rem;
  }

  .privacy-content {
    padding: 2rem 1rem;
  }

  .privacy-section h2 {
    font-size: 1.5rem;
  }

  .rights-grid {
    grid-template-columns: 1fr;
  }
}
</style>
