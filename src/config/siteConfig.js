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
    phone: '+39 348 5240803',
    phoneRaw: '+393485240803', // Per link tel:
    email: 'lacascinadellavachina@gmail.com',
    whatsapp: '+393470787959', // Per link WhatsApp
    
    // Orari di disponibilità telefonica
    phoneHours: 'Dalle 8:00 alle 20:00'
  },
  
  // ========== INDIRIZZO ==========
  address: {
    street: 'Località Pescatore nr 3',
    city: 'Poggio Bustone',
    province: 'Rieti',
    postalCode: '02018',
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
    byCar: 'Uscita superstrada Piediluco a 10 km, seguire le indicazioni per Poggio Bustone',
    byTrain: 'Stazione di Rieti a 13 km ',
    parking: 'Parcheggio privato gratuito disponibile'
  },
  
  // ========== ORARI CHECK-IN/OUT ==========
  checkIn: {
    from: '10:00',
    to: '12:00',
    note: 'Per arrivi fuori orario, contattaci in anticipo'
  },
  
  checkOut: {
    time: '10:00',
    note: 'Check-out flessibile su richiesta'
  },
  
  // ========== POLITICHE ==========
  policies: {
    cancellation: 'Cancellazione gratuita fino a 3 giorni prima dell\'arrivo',
    pets: {
      allowed: false,
      description: 'Animali domestici non ammessi per garantire il comfort di tutti gli ospiti',
      fee: '10€ al giorno'
    },
    minStay: 1, // Notti minime
    maxGuests: 10 // Ospiti massimi totali
  },
  
  // ========== SOCIAL MEDIA ==========
  social: {
    facebook: {
      url: 'https://www.facebook.com/lacascinadellavachina',
      handle: '@lacascinadellavachina'
    },
    instagram: {
      url: 'https://www.instagram.com/la_cascina_della_vachina?igsh=bWVxazI3ZmtlNG54',
      handle: '@la_cascina_della_vachina'
    },
    tripadvisor: {
      url: 'https://www.tripadvisor.it/Hotel_Review-g1997021-d13006960-Reviews-La_Cascina_della_Vachina-Poggio_Bustone_Province_of_Rieti_Lazio.html'
    }
  },
  
  // ========== SERVIZI OFFERTI ==========
  services: [
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
  ],
  
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
  languages: ['Italiano', 'Inglese', 'Spagnolo'],
  
  // ========== ORDINE CATEGORIE GALLERY ==========
  galleryCategories: ['Camere', 'Location', 'Gallery'],
  
  // ========== ATTRAZIONI NELLE VICINANZE ==========
  attractions: [
    {
      id: 1,
      icon: '🏰',
      name: 'Centro Storico',
      distance: '6 km',
      description: 'Borghi medievali e architetture storiche da scoprire'
    },
    {
      id: 2,
      icon: '🍷',
      name: 'Cantine Vinicole',
      distance: '4 km',
      description: 'Degustazioni di vini locali e visite guidate'
    },
    {
      id: 3,
      icon: '⛰️',
      name: 'Sentieri Naturalistici',
      distance: '0 km',
      description: 'Percorsi di trekking e mountain bike nella natura'
    },
    {
      id: 4,
      icon: '🏛️',
      name: 'Musei',
      distance: '13 km',
      description: 'Arte e cultura locale da esplorare'
    },
    {
      id: 5,
      icon: '🏖️',
      name: 'Lago',
      distance: '1 km',
      description: 'Relax e sport acquatici sul lago'
    },
    {
      id: 6,
      icon: '🍝',
      name: 'Ristoranti Tipici',
      distance: '1-5 km',
      description: 'Cucina tradizionale e specialità locali'
    }
  ],
  
  // ========== DISTANZE DA SERVIZI ==========
  distances: [
    { place: 'Centro città', distance: '13 km' },
    { place: 'Stazione ferroviaria', distance: '13 km' },
    { place: 'Aeroporto più vicino', distance: '100 km' },
    { place: 'Supermercato', distance: '2 km' },
    { place: 'Farmacia', distance: '3 km' },
    { place: 'Ospedale', distance: '16 km' }
  ],
  
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
