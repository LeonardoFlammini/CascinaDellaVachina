# 📋 GDPR Compliance Guide - Cascina della Vachina

Guida completa alla conformità GDPR (Regolamento UE 2016/679) per il sito web.

---

## ✅ Cosa Abbiamo Implementato

### 1. **Privacy Policy Completa** ✓
- Pagina dedicata: `/privacy-policy`
- Informazioni sul Titolare del Trattamento
- Tipologie di dati raccolti
- Finalità e base giuridica del trattamento
- Diritti degli utenti (accesso, rettifica, cancellazione, ecc.)
- Tempi di conservazione
- Cookie policy

### 2. **Consenso Esplicito nel Form** ✓
- Checkbox obbligatorio per consenso privacy
- Link diretto alla Privacy Policy
- Form non inviabile senza consenso
- Testo chiaro: "Autorizzo il trattamento dei miei dati personali"

### 3. **Cookie Banner** ✓
- Informazione sull'uso di cookie tecnici
- Link alla Privacy Policy
- Memorizzazione consenso in localStorage
- Visualizzazione solo al primo accesso

---

## 🍪 Cookie: Cosa Devi Sapere

### **Cookie Tecnici** (Implementati)
✅ **NON richiedono consenso** secondo GDPR
- Necessari per il funzionamento del sito
- Esempi: sessione, preferenze lingua, carrello

**Nel tuo caso:**
- Vue Router: usa la history API (no cookie)
- localStorage per consenso cookie: considerato cookie tecnico
- **Non serve banner di consenso cookie obbligatorio**

### **Cookie Analitici/Marketing** (NON implementati)
⚠️ **RICHIEDONO consenso esplicito**

Se aggiungi uno di questi servizi, devi implementare un banner cookie completo:

#### Google Analytics
```javascript
// ❌ NON fare così senza consenso
gtag('config', 'GA_MEASUREMENT_ID')

// ✅ Fare così dopo consenso
if (userConsent) {
  gtag('config', 'GA_MEASUREMENT_ID', { 
    'anonymize_ip': true 
  })
}
```

#### Google Maps Embedded
⚠️ Google Maps inserisce cookie di profilazione
- **Soluzione 1**: Chiedere consenso prima di caricare la mappa
- **Soluzione 2**: Usare modalità privacy-enhanced (non sempre disponibile)
- **Nel tuo sito**: Hai già Google Maps embed → serve consenso

#### Altri Servizi che Richiedono Consenso
- Facebook Pixel
- Google Ads
- Hotjar / Heatmaps
- Chat dal vivo (alcuni)
- Social media embed (iframe)

---

## 🎯 Cosa Devi Fare ADESSO

### **1. Google Maps - URGENTE**
La tua pagina "Dove Siamo" ha Google Maps embedded che inserisce cookie.

**Opzioni:**

#### A) Implementare Consenso Google Maps
```vue
<template>
  <div v-if="!mapsConsent" class="map-placeholder">
    <p>Per visualizzare la mappa, accetta i cookie di Google Maps</p>
    <button @click="acceptMaps">Carica Mappa</button>
    <p><small>Verranno installati cookie di profilazione Google</small></p>
  </div>
  <iframe v-else :src="mapUrl" ...></iframe>
</template>

<script setup>
import { ref } from 'vue'
const mapsConsent = ref(localStorage.getItem('googleMapsConsent'))

const acceptMaps = () => {
  localStorage.setItem('googleMapsConsent', 'true')
  mapsConsent.value = true
}
</script>
```

#### B) Usare Alternativa Privacy-Friendly
- OpenStreetMap (no cookie)
- Immagine statica con link a Google Maps

### **2. Aggiornare Privacy Policy**
Specifica nella sezione Cookie:
```markdown
### Google Maps
Utilizziamo Google Maps per mostrarti la nostra posizione.
Google può installare cookie per la visualizzazione della mappa.

Cookie installati:
- NID (durata: 6 mesi)
- CONSENT (durata: 20 anni)

Privacy Policy Google: https://policies.google.com/privacy
```

### **3. Verificare Altri Servizi**
Controlla se usi:
- [ ] Google Analytics → Serve consenso
- [ ] Google Tag Manager → Serve consenso
- [ ] Facebook Pixel → Serve consenso
- [ ] Font Google (caricati da CDN) → Zona grigia, meglio self-hosted
- [ ] Immagini da Unsplash/CDN esterni → Verificare

---

## 📊 Gestione Dati del Form

### **Cosa Fare con i Dati Raccolti**

#### Storage dei Dati
```javascript
// ❌ MAI fare così in produzione
console.log(formData) // Espone dati nel browser

// ✅ Inviare a backend sicuro
await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    ...formData,
    consentDate: new Date().toISOString(),
    ipAddress: '(auto-detected server-side)'
  })
})
```

#### Backend: Registrare il Consenso
```javascript
// Nel tuo database, salva:
{
  name: "Mario Rossi",
  email: "mario@example.com",
  message: "Richiesta informazioni",
  privacy_consent: true,
  consent_date: "2026-05-17T10:30:00Z",
  consent_ip: "192.168.1.1",
  privacy_version: "1.0" // Versione privacy policy accettata
}
```

#### Sicurezza
- [ ] Trasmissione: HTTPS obbligatorio
- [ ] Storage: Database cifrato
- [ ] Accesso: Solo personale autorizzato
- [ ] Backup: Cifrati e sicuri
- [ ] Log: Registrare accessi ai dati

---

## 👤 Diritti degli Utenti - Come Gestirli

### **Richiesta di Accesso**
Utente chiede: "Quali dati avete su di me?"

**Risposta entro 30 giorni:**
```json
{
  "dati_personali": {
    "nome": "Mario Rossi",
    "email": "mario@example.com",
    "telefono": "+39 xxx xxx xxxx",
    "data_raccolta": "2026-05-17",
    "fonte": "Form contatto sito web"
  },
  "consensi": [
    {
      "tipo": "Privacy Policy",
      "data": "2026-05-17",
      "ip": "192.168.1.1"
    }
  ],
  "comunicazioni": [
    {
      "data": "2026-05-17",
      "tipo": "Risposta richiesta informazioni"
    }
  ]
}
```

### **Richiesta di Cancellazione**
Utente chiede: "Cancellate i miei dati"

**Procedura:**
1. Verificare identità utente (email, documento)
2. Controllare obblighi legali (fatture: 10 anni, contratti: vari)
3. Se nessun obbligo: cancellare entro 30 giorni
4. Confermare cancellazione via email
5. Tenere log della cancellazione (senza dati personali)

### **Richiesta di Rettifica**
Utente chiede: "Correggete il mio indirizzo email"

**Procedura:**
1. Verificare identità
2. Aggiornare dati
3. Confermare modifica

---

## 🔒 Checklist Sicurezza

### **Tecnica**
- [ ] HTTPS attivo (certificato SSL)
- [ ] Form con validazione server-side
- [ ] Protezione SQL Injection (prepared statements)
- [ ] Protezione XSS (sanitizzazione input)
- [ ] Rate limiting su form (anti-spam)
- [ ] CAPTCHA se necessario

### **Organizzativa**
- [ ] Registro trattamenti aggiornato
- [ ] Procedura gestione data breach
- [ ] Formazione staff su GDPR
- [ ] Contratti con fornitori (DPA - Data Processing Agreement)
- [ ] Backup regolari e testati

---

## ⚠️ Data Breach - Cosa Fare

Se i dati vengono compromessi (hack, perdita, accesso non autorizzato):

### **Entro 72 ore:**
1. **Notifica al Garante Privacy**
   - Online: https://www.garanteprivacy.it
   - Dettagli: cosa, quando, quanti utenti, tipo dati

2. **Notifica agli Utenti** (se alto rischio)
   - Email a tutti gli interessati
   - Spiegare cosa è successo
   - Misure adottate
   - Cosa possono fare

### **Documentare:**
- Cronologia eventi
- Dati compromessi
- Misure correttive
- Comunicazioni inviate

---

## 📞 Risorse Utili

### **Garante Privacy Italia**
- Sito: https://www.garanteprivacy.it
- Email: garante@gpdp.it
- Tel: 06.69677.1

### **Template e Guide**
- [Guida GDPR per PMI](https://www.garanteprivacy.it/guida-all-applicazione-del-regolamento-europeo-in-materia-di-protezione-dei-dati-personali)
- [Registro Trattamenti](https://www.garanteprivacy.it/registro-delle-attivita-di-trattamento)
- [Modello Informativa Privacy](https://www.garanteprivacy.it/temi/informativa-privacy)

### **Verifiche Conformità**
- [GDPR Checklist](https://gdpr.eu/checklist/)
- [Cookie Scanner](https://www.cookiemetrix.com/)

---

## 💰 Sanzioni GDPR

Le multe possono essere MOLTO salate:

### **Violazioni Gravi**
- **Fino a 20 milioni €** o **4% fatturato annuo globale**
- Esempi: mancanza consenso, data breach non notificato

### **Violazioni Meno Gravi**
- **Fino a 10 milioni €** o **2% fatturato annuo globale**
- Esempi: mancanza informativa, registro non aggiornato

### **Non Vale la Pena Rischiare** 🚨

---

## ✅ TODO List Implementazione

### **Immediato (Prima di andare online)**
- [ ] Aggiungere consenso Google Maps o rimuovere embed
- [ ] Aggiornare Privacy Policy con dettagli Google Maps
- [ ] Verificare HTTPS attivo
- [ ] Testare form contatto
- [ ] Configurare email ricezione form

### **Prima Settimana**
- [ ] Implementare backend per form contatto
- [ ] Creare database sicuro per consensi
- [ ] Testare procedura cancellazione dati
- [ ] Formare staff su GDPR

### **Primo Mese**
- [ ] Audit completo cookie e tracciamento
- [ ] Contratti DPA con fornitori (hosting, email)
- [ ] Registro trattamenti completo
- [ ] Piano data breach

### **Manutenzione Continua**
- [ ] Review privacy policy ogni 6 mesi
- [ ] Verifica conformità fornitori
- [ ] Backup e test ripristino mensile
- [ ] Aggiornamento log consensi

---

## 🎓 Conclusione

**Il GDPR non è opzionale.** È legge europea dal 2018.

**La buona notizia:**
- Hai già implementato le basi (privacy policy, consenso form, cookie banner)
- Serve solo completare Google Maps e backend

**Prossimi passi:**
1. Decidi come gestire Google Maps
2. Aggiorna Privacy Policy di conseguenza
3. Implementa backend sicuro per form
4. Documenta tutto

**Ricorda:** La conformità GDPR non è un progetto una-tantum, ma un processo continuo.

---

📧 **Hai dubbi?** Consulta un avvocato specializzato in privacy o un DPO (Data Protection Officer).
