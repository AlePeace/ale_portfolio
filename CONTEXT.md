# Portfolio — CONTEXT.md
> Brief di progetto per Claude Code. Leggere prima di qualsiasi modifica.

---

## Chi sono

**Alessandro Sparano** — Frontend Developer presso una web agency italiana.  
Lavoro principalmente su siti per clienti locali, quindi il portfolio deve essere leggibile anche da realtà non tecniche, pur mantenendo un'estetica da developer.

---

## Stack

| Tecnologia | Ruolo | Note |
|---|---|---|
| Next.js (App Router) | Framework principale | Routing basato su cartelle |
| React | UI | Solo JSX, niente TypeScript |
| Vercel | Deploy | |
| Sanity CMS | Gestione contenuti | Previsto per il futuro, non nella v1 |
| GSAP | Animazioni | Entrance animations, transizioni, effetti testo |
| Lenis | Smooth scroll | Scroll fluido — valutare se migliora l'esperienza su questo layout |
| JetBrains Mono | Font | Sia per UI che per il codice mockato |

> ⚠️ **Niente TypeScript.** Tutto il codice è JavaScript puro con JSX. Nessun `.ts` o `.tsx`.

---

## Concept & Estetica

Il sito non è un clone di un IDE, ma usa il **linguaggio visivo di un editor di codice** (Zed / VS Code) come design system.

Chi è del settore lo riconosce e apprezza. Chi non lo è vede semplicemente un sito bello, ordinato e professionale.

### Elementi IDE da includere
- **Titlebar** con window controls stile KDE/Linux (flat, geometrici — NON i pallini macOS)
- **Sidebar** con file tree per navigare le sezioni del sito
- **Tab bar** con le pagine aperte come file
- **Line numbers** nell'area contenuto
- **Breadcrumb** sopra l'editor
- **Minimap** decorativa sulla destra
- **Status bar** in fondo con info tipo: branch git, stato deploy, OS, nome font

### Palette colori
Ispirata a Material Theme / Zed dark:

```
--bg:        #0d0f16   background principale
--surface:   #0f1120   sidebar, pannelli
--titlebar:  #1a1d2e   titlebar, tabs inattivi
--border:    #252838   bordi e separatori
--muted:     #4a5270   testo secondario, icone
--text:      #cdd6f4   testo principale
--accent:    #4ec9b0   verde acqua — colore principale (active tab, cursore, highlights)
--keyword:   #c792ea   viola — keyword JS
--string:    #c3e88d   verde chiaro — stringhe
--fn:        #82aaff   blu — nomi funzione
--class:     #ffcb6b   giallo oro — classi/tipi
--number:    #f78c6c   arancione — numeri
--comment:   #3d4872   grigio blu — commenti (italic)
--prop:      #89ddff   azzurro — proprietà oggetto
--statusbar: #0b5e50   verde scuro — status bar
```

### Font
**JetBrains Mono** — sia per la UI che per il "codice" mockato nel contenuto.  
Da importare da Google Fonts con ligature abilitate.

---

## Struttura App Router

```
src/
├── app/
│   ├── layout.jsx        ← shell IDE globale (sidebar, tabs, statusbar, titlebar)
│   ├── page.jsx          ← home
│   ├── about/
│   │   └── page.jsx
│   ├── projects/
│   │   └── page.jsx
│   └── contact/
│       └── page.jsx
├── components/
│   ├── IDEShell.jsx      ← wrapper principale con tutti gli elementi IDE
│   ├── Sidebar.jsx       ← file tree navigabile
│   ├── TabBar.jsx        ← tabs con le pagine
│   ├── StatusBar.jsx     ← barra in fondo
│   ├── TitleBar.jsx      ← titlebar con window controls KDE
│   └── Hero.jsx          ← hero della home
└── utils/
    └── fetchSkills.js    ← utility che restituisce skills/stack (mock locale nella v1)
```

---

## Pagine previste

### `/` — Home
Il contenuto della pagina è presentato come codice JSX reale.

- **JSDoc comment** come hero text — il `@returns` è la tagline
- `fetchSkills()` importata da utils, risultato passato come prop a `<Hero>`
- Il codice mostrato nell'editor è *vero codice* del progetto, non decorazione

```jsx
/**
 * @author  Alessandro Sparano
 * @role    Frontend Developer · Web Agency
 * @returns un dev che trasforma idee in esperienze web
 */

import { fetchSkills } from '@/utils/fetchSkills'
import Hero from '@/components/Hero'

const skills = await fetchSkills({
  stack:   [ 'Next.js', 'React', 'Sanity', 'Vercel' ],
  passion: [ 'UI craftmanship', 'clean code' ],
  agency:  true,
})

export default function Home() {
  return (
    <Hero name="Alessandro Sparano" skills={skills} />
  )
}
```

### `/about` — Chi sono
Presentazione come oggetto JavaScript con i dati personali/professionali.

### `/projects` — Progetti
Ogni progetto come "file aperto" in un tab. Attualmente 3 progetti personali + 1 in collaborazione con un collega + esperienza in agenzia.

### `/contact` — Contatti
Form di contatto o lista link (email, GitHub, LinkedIn).

---

## Status bar — contenuto

```
sinistra:  ⎇ main  |  ✓ deployed on Vercel  |  0 errors · 0 warnings
destra:    Zorin OS  |  JavaScript (React)  |  JetBrains Mono
```

> Zorin OS al posto del solito "UTF-8" — piccolo easter egg per chi sa.

---

## Animazioni & Transizioni

### GSAP
Usato per animazioni mirate, non per tutto. Principi guida: **sottile, veloce, intenzionale**.

Usi previsti:
- Entrance animation dell'hero al primo caricamento (line numbers che appaiono, codice che si "scrive")
- Hover sui project card — reveal leggero
- Testo che appare riga per riga come se venisse digitato (solo sull'hero, non ovunque)
- Niente scroll-trigger pesante — solo enhacement progressivo

### Lenis (smooth scroll)
Da valutare in fase di sviluppo. Il layout IDE è prevalentemente **a pagina intera senza scroll lungo**, quindi Lenis potrebbe avere poco impatto rispetto a un portfolio classico. Utile soprattutto se la pagina `/projects` diventa lunga. Integrare con GSAP ScrollTrigger se serve.

### Transizioni tra pagine — sono importanti ✅
In un portfolio con estetica IDE le transizioni sono **una delle cose più memorabili** e vanno curate. L'idea non è una transizione generica (fade, slide) ma qualcosa che parla il linguaggio del sito.

**Concept consigliato — "tab switch":**
Quando si naviga tra pagine, animare come se si stesse cliccando un tab nell'editor:
1. Il contenuto corrente fa un leggero fade-out verso il basso (come un file che si chiude)
2. Il tab attivo nella tab bar si aggiorna con una transizione fluida
3. Il nuovo contenuto entra dall'alto con un leggero fade-in + translate

**Concept alternativo — "compile flash":**
Un brevissimo flash/glitch orizzontale (tipo scan line) che copre l'editor per ~150ms prima che appaia il nuovo contenuto. Molto in tema, da usare con parsimonia.

**Implementazione in Next.js App Router:**
App Router non ha un sistema di transizioni nativo fluido come Pages Router. Opzioni:
- `framer-motion` con `AnimatePresence` — il più semplice e affidabile con App Router
- GSAP manuale con `useLayoutEffect` e contesto globale
- **Consigliato per la v1:** `framer-motion` per le transizioni di pagina + GSAP per micro-animazioni interne

> Aggiungere `framer-motion` allo stack se si procede con le transizioni.

---

## Note implementative

- **Niente TypeScript** — conferma: solo `.js` e `.jsx`
- **Sanity** non nella v1, ma la struttura deve permettere di aggiungerlo facilmente in futuro (es. `fetchSkills` già come utility separata)
- **GSAP** — installare `gsap`, usare `useGSAP()` hook per cleanup automatico nei componenti React
- **Lenis** — installare `lenis`, inizializzare in `layout.jsx` solo se la pagina ha scroll significativo
- **Framer Motion** — installare `framer-motion` per transizioni tra pagine con `AnimatePresence`
- **Mobile**: sidebar collassabile, tab bar scrollabile orizzontalmente
- I window controls KDE sono SVG inline — linea (minimize), quadrato (maximize), X (close)
- La status bar usa `position: sticky; bottom: 0` nel layout

---

## Cosa NON fare

- Niente pallini macOS nei window controls
- Niente TypeScript, niente `.ts`/`.tsx`
- Non replicare 1:1 un IDE — deve restare un sito web usabile
- Non esagerare con le animazioni — il cursore che lampeggia, hover sottili, entrance animation dell'hero. Stop.
- Niente scroll-jacking aggressivo — Lenis deve rendere lo scroll più fluido, non controllarlo
- Niente transizioni di pagina lente — massimo 300-400ms totali, l'utente non deve aspettare
