/**
 * Configurazione Globale - Cascina della Vachina
 * 
 * File centralizzato per gestire tutte le informazioni di contatto,
 * orari e altre costanti utilizzate nel sito.
 * 
 * IMPORTANTE: Modifica questo file per aggiornare le info in tutto il sito.
 */

export const siteConfig = {
  // ========== INFORMAZIONI STRUTTURA ==========
  name: 'Cascina della Vachina',
  tagline: 'Il tuo B&B nel cuore della campagna',
  description: 'Bed & breakfast immerso nella natura, dove tradizione e comfort si incontrano per offrirvi un\'esperienza unica.',
  
  // ========== CONTATTI ==========
  contact: {
    phone: '+39 xxx xxx xxxx',
    phoneRaw: '+39xxxxxxxxxx', // Per link tel:
    email: 'info@cascinadellavachina.it',
    whatsapp: '+39xxxxxxxxxx', // Per link WhatsApp
    
    // Orari di disponibilità telefonica
    phoneHours: 'Dalle 8:00 alle 20:00'
  },
  
  // ========== INDIRIZZO ==========
  address: {
    street: 'Via della Cascina, 123',
    city: 'Città',
    province: 'Provincia',
    postalCode: '12345',
    country: 'Italia',
    
    // Coordinate per la mappa
    coordinates: {
      lat: 42.488457926979315,
      lng: 12.855819076584838
    },
    
    // URL Google Maps embed
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.1455631651697!2d12.855819076584838!3d42.488457926979315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132e545619965773%3A0x959c9d1964af84f6!2sBed%20and%20Breakfast%20La%20Cascina%20della%20Vachina!5e0!3m2!1sit!2sit!4v1778748521711!5m2!1sit!2sit'
  },
  
  // ========== COME RAGGIUNGERCI ==========
  directions: {
    byCar: 'Uscita autostradale A12, seguire indicazioni per Città Centro',
    byTrain: 'Stazione di Città a 5 km (servizio navetta su richiesta)',
    parking: 'Parcheggio privato gratuito disponibile'
  },
  
  // ========== ORARI CHECK-IN/OUT ==========
  checkIn: {
    from: '14:00',
    to: '20:00',
    note: 'Per arrivi fuori orario, contattaci in anticipo'
  },
  
  checkOut: {
    time: '11:00',
    note: 'Check-out flessibile su richiesta'
  },
  
  // ========== POLITICHE ==========
  policies: {
    cancellation: 'Cancellazione gratuita fino a 7 giorni prima dell\'arrivo',
    pets: {
      allowed: true,
      description: 'Animali domestici di piccola taglia ammessi su richiesta',
      fee: '10€ al giorno'
    },
    minStay: 1, // Notti minime
    maxGuests: 10 // Ospiti massimi totali
  },
  
  // ========== SOCIAL MEDIA ==========
  social: {
    facebook: {
      url: 'https://facebook.com/cascinadellavachina',
      handle: '@cascinadellavachina'
    },
    instagram: {
      url: 'https://instagram.com/cascinadellavachina',
      handle: '@cascinadellavachina'
    },
    tripadvisor: {
      url: 'https://tripadvisor.com/cascinadellavachina'
    }
  },
  
  // ========== SERVIZI OFFERTI ==========
  amenities: {
    general: [
      'Wi-Fi gratuito',
      'Parcheggio privato',
      'Colazione inclusa',
      'Giardino',
      'Aria condizionata'
    ],
    room: [
      'Bagno privato',
      'TV',
      'Armadio',
      'Biancheria inclusa'
    ]
  },
  
  // ========== LINGUE PARLATE ==========
  languages: ['Italiano', 'Inglese', 'Francese'],
  
  // ========== SEO & METADATA ==========
  seo: {
    title: 'Cascina della Vachina - B&B nel cuore della campagna',
    description: 'Bed & breakfast immerso nella natura. Camere confortevoli, colazione genuina e accoglienza familiare.',
    keywords: ['b&b', 'bed and breakfast', 'agriturismo', 'natura', 'relax'],
    author: 'Cascina della Vachina',
    image: '/og-image.jpg' // Immagine per Open Graph/social sharing
  },
  
  // ========== LINK UTILI ==========
  links: {
    privacyPolicy: '/privacy-policy',
    termsAndConditions: '/termini-e-condizioni',
    cookiePolicy: '/cookie-policy'
  }
}

// Helper function per formattare l'indirizzo completo
export const getFullAddress = () => {
  const { street, postalCode, city, province } = siteConfig.address
  return `${street}, ${postalCode} ${city} (${province})`
}

// Helper function per ottenere il link tel:
export const getPhoneLink = () => {
  return `tel:${siteConfig.contact.phoneRaw}`
}

// Helper function per ottenere il link mailto:
export const getEmailLink = () => {
  return `mailto:${siteConfig.contact.email}`
}

// Helper function per ottenere il link WhatsApp
export const getWhatsAppLink = (message = '') => {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, '')}${message ? `?text=${encoded}` : ''}`
}

export default siteConfig
