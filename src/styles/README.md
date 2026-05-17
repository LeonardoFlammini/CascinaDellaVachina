# Design System - Cascina della Vachina

Questo documento descrive il design system del sito B&B.

## 📁 Struttura File

```
src/styles/
├── colors.css       # Palette colori completa
├── typography.css   # Font, spacing, dimensioni
└── README.md       # Questa documentazione
```

## 🎨 Palette Colori

### Colori Primari
```css
--color-primary: #42b983          /* Verde principale */
--color-primary-light: #5ecf9a    /* Verde chiaro */
--color-primary-dark: #359268     /* Verde scuro */
--color-primary-darker: #2a7453   /* Verde più scuro */
```

### Colori Testo
```css
--color-text-primary: #2c3e50     /* Titoli */
--color-text-secondary: #555      /* Testo standard */
--color-text-tertiary: #666       /* Testo secondario */
--color-text-muted: #888          /* Note/attenuato */
--color-text-white: #fff          /* Bianco su scuro */
```

### Colori Background
```css
--color-bg-primary: #ffffff       /* Sfondo principale */
--color-bg-secondary: #f8f9fa     /* Sfondo alternativo */
--color-bg-dark: #2c3e50         /* Footer/Hero */
```

### Colori Stati
- **Success**: `--color-success` (#28a745)
- **Error**: `--color-error` (#dc3545)
- **Warning**: `--color-warning` (#ffc107)
- **Info**: `--color-info` (#17a2b8)

## 📝 Tipografia

### Font Families
```css
--font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
```

### Font Sizes
```css
--font-size-xs: 0.75rem      /* 12px */
--font-size-sm: 0.875rem     /* 14px */
--font-size-base: 1rem       /* 16px */
--font-size-lg: 1.125rem     /* 18px */
--font-size-xl: 1.25rem      /* 20px */
--font-size-2xl: 1.5rem      /* 24px */
--font-size-3xl: 1.875rem    /* 30px */
--font-size-4xl: 2.25rem     /* 36px */
--font-size-5xl: 3rem        /* 48px */
```

### Spacing
```css
--spacing-xs: 0.25rem    /* 4px */
--spacing-sm: 0.5rem     /* 8px */
--spacing-md: 1rem       /* 16px */
--spacing-lg: 1.5rem     /* 24px */
--spacing-xl: 2rem       /* 32px */
--spacing-2xl: 3rem      /* 48px */
--spacing-3xl: 4rem      /* 64px */
```

## 🎯 Come Usare

### Nei componenti Vue
```vue
<style scoped>
.mio-elemento {
  color: var(--color-primary);
  background: var(--color-bg-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}
</style>
```

### Modificare la palette
1. Apri `src/styles/colors.css`
2. Modifica i valori delle variabili
3. I cambiamenti si applicano automaticamente a tutto il sito

## 💡 Best Practices

1. **Usa sempre le variabili** invece di colori hardcoded
2. **Non duplicare variabili** - usa quelle esistenti
3. **Mantieni la consistenza** - usa gli stessi colori per elementi simili
4. **Documenta modifiche** - se aggiungi colori, aggiorna questo README

## 🎯 Regole di Interazione

### Effetti Hover

**REGOLA IMPORTANTE**: Gli effetti hover "flottanti" (es. `transform: translateY(-5px)`) devono essere applicati **SOLO** a elementi interagibili/cliccabili.

✅ **Elementi che POSSONO avere effetto float:**
- Bottoni e link
- Card cliccabili (che portano a un'altra pagina o azione)
- Elementi della galleria
- Elementi con `cursor: pointer`

❌ **Elementi che NON devono avere effetto float:**
- Card informative non cliccabili
- Elementi di solo contenuto
- Sezioni statiche

**Esempio corretto:**
```css
/* Card NON cliccabile - solo informativa */
.info-card {
  box-shadow: var(--shadow-md);
  /* NO transform hover */
}

/* Card cliccabile - interagibile */
.clickable-card {
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base);
  cursor: pointer;
}

.clickable-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}
```

Questa regola migliora la UX comunicando visivamente quali elementi sono interagibili.

## 🔄 Migrazione

Alcuni componenti potrebbero ancora usare colori hardcoded. 
Per migrare gradualmente:

```css
/* Prima */
color: #42b983;

/* Dopo */
color: var(--color-primary);
```

## 📱 Responsive

Breakpoints di riferimento:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
