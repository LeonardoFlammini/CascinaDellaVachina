# Configurazione Sito

File di configurazione centralizzato per tutte le informazioni della struttura.

## 📍 File Principale

**`src/config/siteConfig.js`**

Contiene tutte le informazioni riutilizzabili:
- Informazioni di contatto (telefono, email, WhatsApp)
- Indirizzo completo e coordinate
- Orari check-in/check-out
- Politiche (cancellazione, animali, ecc.)
- Link social media
- Servizi offerti
- Metadata SEO

## 🚀 Come Usare

### Import nel componente Vue

```vue
<script setup>
import { siteConfig, getPhoneLink, getEmailLink } from '@/config/siteConfig'
</script>

<template>
  <div>
    <h1>{{ siteConfig.name }}</h1>
    <p>{{ siteConfig.tagline }}</p>
    
    <a :href="getPhoneLink()">{{ siteConfig.contact.phone }}</a>
    <a :href="getEmailLink()">{{ siteConfig.contact.email }}</a>
    
    <p>Check-in: {{ siteConfig.checkIn.from }} - {{ siteConfig.checkIn.to }}</p>
  </div>
</template>
```

### Esempi Pratici

#### Informazioni di Contatto
```javascript
import { siteConfig } from '@/config/siteConfig'

// Telefono
siteConfig.contact.phone // "+39 xxx xxx xxxx"
siteConfig.contact.phoneHours // "Dalle 8:00 alle 20:00"

// Email
siteConfig.contact.email // "info@cascinadellavachina.it"
```

#### Indirizzo
```javascript
import { siteConfig, getFullAddress } from '@/config/siteConfig'

// Indirizzo completo
getFullAddress() // "Via della Cascina, 123, 12345 Città (Provincia)"

// Componenti separati
siteConfig.address.street
siteConfig.address.city
siteConfig.address.coordinates.lat
```

#### Social Media
```javascript
import { siteConfig } from '@/config/siteConfig'

siteConfig.social.facebook.url
siteConfig.social.instagram.url
siteConfig.social.tripadvisor.url
```

#### Orari e Politiche
```javascript
import { siteConfig } from '@/config/siteConfig'

// Check-in
siteConfig.checkIn.from // "14:00"
siteConfig.checkIn.to // "20:00"

// Check-out
siteConfig.checkOut.time // "11:00"

// Politiche
siteConfig.policies.cancellation
siteConfig.policies.pets.allowed
siteConfig.policies.pets.fee
```

## 🔧 Helper Functions

Il file include funzioni helper utili:

```javascript
import { 
  getFullAddress, 
  getPhoneLink, 
  getEmailLink, 
  getWhatsAppLink 
} from '@/config/siteConfig'

// Indirizzo formattato
const address = getFullAddress()

// Link cliccabili
const telLink = getPhoneLink() // "tel:+39xxxxxxxxxx"
const mailLink = getEmailLink() // "mailto:info@cascinadellavachina.it"
const waLink = getWhatsAppLink('Ciao, vorrei informazioni') // Link WhatsApp con messaggio
```

## 📝 Modificare le Informazioni

1. Apri `src/config/siteConfig.js`
2. Modifica i valori necessari
3. Le modifiche si applicano automaticamente a tutto il sito

**Non serve modificare i singoli componenti!**

## ✅ Vantaggi

- ✨ **Centralizzato**: Un solo file da modificare
- 🔄 **Riutilizzabile**: Importa dove serve
- 🛡️ **Type-safe**: Facile trovare errori
- 📖 **Documentato**: Commenti chiari
- 🚀 **Manutenibile**: Aggiornamenti veloci

## 🎯 TODO

- [ ] Aggiornare i componenti esistenti per usare siteConfig
- [ ] Aggiungere i link social reali
- [ ] Aggiungere numero di telefono reale
- [ ] Verificare coordinate GPS
- [ ] Aggiungere prezzi camere (se necessario)
