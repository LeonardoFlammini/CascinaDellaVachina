# 📧 Form Contatti - Informazioni Importanti

## 🚫 Nessun Backend Necessario

Il sito è deployato su **GitHub Pages** (solo file statici), quindi non abbiamo un server per gestire l'invio dei form.

## ✉️ Soluzione Implementata: mailto

Il form contatti utilizza il protocollo `mailto:` che:
- Apre il client email predefinito dell'utente (Outlook, Gmail app, Thunderbird, etc.)
- Pre-compila i dati del form nell'email
- L'utente clicca "Invia" nel suo client email
- Tu ricevi l'email normalmente

### Vantaggi
✅ Nessun server necessario
✅ Nessun costo aggiuntivo
✅ Funziona su GitHub Pages
✅ GDPR compliant (nessun dato salvato nel sito)

### Svantaggi
⚠️ Richiede che l'utente abbia un client email configurato
⚠️ Non funziona su dispositivi senza app email
⚠️ Meno "professionale" di un form server-side

## 🔄 Alternative Gratuite (Se Preferisci)

### 1. **Formspree** (Consigliato)
- 50 invii/mese gratis
- Setup: 2 minuti
- Endpoint API semplice

```vue
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email">
  <textarea name="message"></textarea>
  <button type="submit">Invia</button>
</form>
```

👉 https://formspree.io

### 2. **Netlify Forms**
- Se deployassi su Netlify invece di GitHub Pages
- Gratis fino a 100 invii/mese
- Basta aggiungere `netlify` attribute al form

```vue
<form name="contact" method="POST" data-netlify="true">
  <!-- campi form -->
</form>
```

### 3. **Google Forms**
- Gratis e illimitato
- Meno integrabile visivamente
- Puoi embedare in iframe

### 4. **EmailJS**
- 200 email/mese gratis
- Solo JavaScript, no backend
- Funziona su GitHub Pages

```javascript
emailjs.send('service_id', 'template_id', {
  name: formData.name,
  email: formData.email,
  message: formData.message
})
```

👉 https://www.emailjs.com/

## 🎯 Cosa Fare Per GDPR

### Con mailto (Attuale)
✅ Già conforme - nessun dato salvato nel sito
✅ Privacy policy ok
✅ Consenso raccolto prima dell'invio
❌ Non puoi "dimostrare" il consenso (ma l'email ha data/ora)

### Con Formspree/EmailJS
✅ Puoi loggare il consenso nel messaggio email
✅ Timestamp automatico
⚠️ Dati passano per server terzi (specificare in privacy policy)
✅ Possibile aggiungere double opt-in

## 📋 Checklist Privacy (Già Implementato)

- [x] Checkbox privacy obbligatorio
- [x] Link a Privacy Policy
- [x] Testo consenso chiaro
- [x] Data/ora consenso nell'email
- [x] Form non inviabile senza consenso
- [x] Privacy Policy completa e accessibile

## 💡 Raccomandazione

Per un B&B, il **mailto** è accettabile perché:
- Ricevi poche richieste (non migliaia)
- I tuoi clienti target sono abituati all'email
- È gratuito e funziona sempre
- GDPR compliant

**Se vuoi qualcosa di più professionale**, usa **Formspree** (gratuito):
1. Registrati su formspree.io
2. Crea un form
3. Sostituisci l'action del form con il loro endpoint
4. Done! 🎉

## 🔧 Come Passare a Formspree

Se decidi di usare Formspree:

```vue
<template>
  <form @submit.prevent="handleSubmit" 
        action="https://formspree.io/f/YOUR_ID" 
        method="POST">
    <!-- campi form identici -->
    <input type="hidden" name="_subject" value="Nuova richiesta dal sito">
    <input type="hidden" name="_gotcha" style="display:none"> <!-- anti-spam -->
  </form>
</template>

<script setup>
const handleSubmit = async (e) => {
  const form = e.target
  const data = new FormData(form)
  
  const response = await fetch(form.action, {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
  
  if (response.ok) {
    submitSuccess.value = true
    // reset form
  }
}
</script>
```

---

📧 **Email di test**: Prova a inviare il form e verifica che il tuo client email si apra correttamente!
