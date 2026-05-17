# 🖼️ Galleria Immagini Camere - Istruzioni

Ogni camera ha la sua cartella dedicata con una griglia masonry/Pinterest per mostrare le immagini.

## 📁 Struttura Cartelle

```
/public/images/rooms/
├── chiara/
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   ├── 4.jpg
│   ├── 5.jpg
│   └── 6.jpg
├── elena/
│   ├── 1.jpg
│   └── ...
├── giovanna/
│   ├── 1.jpg
│   └── ...
├── francesco/
│   ├── 1.jpg
│   └── ...
└── alice/
    ├── 1.jpg
    └── ...
```

## 🎨 Layout Masonry/Pinterest

Le immagini vengono visualizzate in una griglia stile Pinterest con:
- **Desktop**: 3 colonne
- **Tablet**: 2 colonne  
- **Mobile**: 1 colonna

Le immagini mantengono le proporzioni originali e si adattano automaticamente creando l'effetto masonry.

## 📸 Specifiche Immagini

### Dimensioni Consigliate
- **Larghezza**: 1200px (fissa)
- **Altezza**: Variabile (per creare l'effetto masonry)
  - Mix di orientamenti: ritratto, paesaggio, quadrato
  - Altezze consigliate: 800px, 1000px, 1200px, 1400px, 1600px

### Formato e Qualità
- **Formato**: JPG
- **Peso**: Max 200KB per immagine
- **Qualità**: Alta ma compressa (usa [TinyPNG](https://tinypng.com/))

## 🏷️ Nomenclatura File

Le immagini devono essere numerate in modo sequenziale:
- `1.jpg` - Prima immagine (es. vista d'insieme)
- `2.jpg` - Seconda immagine (es. letto)
- `3.jpg` - Terza immagine (es. bagno)
- `4.jpg` - Quarta immagine (es. dettagli)
- `5.jpg` - Quinta immagine (es. vista finestra)
- `6.jpg` - Sesta immagine (es. armadio/servizi)

Puoi aggiungere più o meno immagini, basta seguire la numerazione progressiva.

## 📷 Cosa Fotografare

Per ogni camera includi:
1. ✅ **Vista d'insieme** - Tutta la camera
2. ✅ **Letto** - Ben fatto con biancheria pulita
3. ✅ **Bagno** - Pulito e ordinato
4. ✅ **Dettagli** - Arredi, decorazioni
5. ✅ **Vista dalla finestra** - Se bella
6. ✅ **Servizi** - Scrivania, armadio, TV, etc.

## 💡 Consigli Fotografici

- Scatta in **orizzontale** per la maggior parte delle foto
- Aggiungi qualche scatto **verticale** per varietà (effetto masonry)
- Usa **luce naturale** (mattina/pomeriggio)
- Evita angoli troppo stretti
- Mostra i punti di forza di ogni camera
- Mantieni l'ambiente **ordinato e pulito**

## 🔄 Aggiornamento Immagini

Per modificare il numero di immagini per camera:
1. Aggiungi/rimuovi file numerati nella cartella
2. Aggiorna l'array `roomImages` nel file Vue della camera
3. Esempio in `ChiaraRoomView.vue`:
   ```javascript
   const roomImages = ref([
     { src: '/images/rooms/chiara/1.jpg', alt: 'Camera Chiara - Vista 1' },
     { src: '/images/rooms/chiara/2.jpg', alt: 'Camera Chiara - Vista 2' },
     // ... aggiungi o rimuovi qui
   ])
   ```

## 🎯 Note

- Le immagini vengono caricate solo quando necessario
- Hover effect su ogni immagine (solleva e ombra)
- Layout completamente responsive
- Mantiene proporzioni originali delle foto
- Effetto masonry automatico con CSS columns
