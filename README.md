# Cascina della Vachina — Sito Web

Sito web ufficiale del Bed & Breakfast **Cascina della Vachina**, realizzato con Vue 3 e Vite.

🌐 **[www.lacascinadellavachina.it](https://www.lacascinadellavachina.it)**

---

## Tecnologie

- **[Vue 3](https://vuejs.org/)** — Composition API con `<script setup>`
- **[Vite 8](https://vitejs.dev/)** — Build tool e dev server
- **[Vue Router 4](https://router.vuejs.org/)** — Navigazione SPA
- **[EmailJS](https://www.emailjs.com/)** — Invio email dal form contatti
- **GitHub Pages** — Hosting statico con dominio personalizzato
- **GitHub Actions** — Deploy automatico al push su `main`

---

## Struttura del Progetto

```
src/
├── config/
│   └── siteConfig.js        # Configurazione centralizzata (contatti, orari, servizi...)
├── views/
│   ├── HomeView.vue
│   ├── RoomsView.vue         # Lista camere
│   ├── ChiaraRoomView.vue    # Dettaglio camera Chiara
│   ├── ElenaRoomView.vue     # Dettaglio camera Elena
│   ├── GiovannaRoomView.vue  # Dettaglio camera Giovanna
│   ├── FrancescoRoomView.vue # Dettaglio camera Francesco
│   ├── AliceRoomView.vue     # Dettaglio camera Alice
│   ├── GalleryView.vue       # Galleria fotografica con lightbox
│   ├── ServicesView.vue      # Servizi offerti
│   ├── LocationView.vue      # Dove siamo
│   ├── ContactsView.vue      # Form contatti + info
│   └── PrivacyPolicyView.vue
├── components/
│   └── layout/
│       ├── Header.vue
│       └── Footer.vue
└── router/
    └── index.js
public/
├── images/                   # Immagini statiche (camere, galleria, hero)
└── CNAME                     # Dominio personalizzato GitHub Pages
```

---

## Avvio in Locale

```bash
npm install
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`.

---

## Variabili d'Ambiente

Crea un file `.env.local` nella root del progetto (non committato):

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Per il deploy, le stesse variabili vanno aggiunte come **Secrets** nel repository GitHub:  
`Settings → Secrets and variables → Actions`

---

## Deploy

Il deploy è automatico tramite GitHub Actions ad ogni push su `main`.

```bash
git push origin main
```

Il workflow in `.github/workflows/deploy.yml`:
1. Installa le dipendenze
2. Esegue `npm run build` iniettando le variabili d'ambiente dai Secrets
3. Copia `dist/index.html` → `dist/404.html` per il routing SPA su GitHub Pages
4. Deploya la cartella `dist/` su GitHub Pages

---

## Configurazione Centralizzata

Tutti i dati del B&B (contatti, orari, servizi, politiche) sono in `src/config/siteConfig.js`.  
Modificare solo quel file per aggiornare le informazioni su tutto il sito.

