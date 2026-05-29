# Portfolio — CONTEXT.md
> Brief di progetto per Claude Code. Leggere prima di qualsiasi modifica.
> Ultimo aggiornamento: 2026-05-29

---

## Chi sono

**Alessandro Sparano** — Creative Developer presso QCore Agency, Napoli.
Lavoro principalmente su siti per clienti locali (e-commerce, hospitality, elettorale), quindi il portfolio deve essere leggibile anche da realtà non tecniche, pur mantenendo un'estetica da developer.

### Contatti
- Email: aledev@alessandrosparano.com
- Telefono: +39 349 32 02 675
- GitHub: github.com/AlePeace
- Web: alessandrosparano.com

---

## Stack

| Tecnologia | Ruolo | Note |
|---|---|---|
| Next.js 16 (App Router) | Framework principale | Routing basato su cartelle, Turbopack |
| React | UI | Solo JSX, niente TypeScript |
| Vercel | Deploy | Produzione su alessandrosparano.com |
| Sanity CMS | Gestione contenuti | Previsto per il futuro, non nella v1 |
| GSAP | Animazioni | Entrance animations, transizioni, effetti testo |
| Lenis | Smooth scroll | Da valutare |
| Framer Motion | Transizioni pagina | `AnimatePresence` — già installato e in uso |
| JetBrains Mono | Font | Sia per UI che per il codice mockato |
| Tailwind CSS v4 | Styling | Usa `@import "tailwindcss"` + `@theme inline` |
| @next/third-parties | Analytics | GoogleTagManager (GTM-NHGSMQ3D) + GoogleAnalytics (G-99TR9N1F5F) |

> ⚠️ **Niente TypeScript.** Solo `.js` e `.jsx`. Mai.
> ⚠️ **Tailwind v4** — NON usare la sintassi di configurazione v3.

---

## Concept & Estetica

Il sito usa il **linguaggio visivo di un code editor** (Zed / VS Code) come design system — non è un clone di IDE, è un sito web usabile con estetica da sviluppatore.

### Palette colori

```
--bg:        #0d0f16   background principale
--surface:   #0f1120   sidebar, pannelli
--titlebar:  #1a1d2e   titlebar, tabs inattivi
--border:    #252838   bordi e separatori
--muted:     #4a5270   testo secondario, icone
--text:      #cdd6f4   testo principale
--accent:    #4ec9b0   verde acqua — colore principale
--keyword:   #c792ea   viola — keyword JS
--string:    #c3e88d   verde chiaro — stringhe
--fn:        #82aaff   blu — nomi funzione
--class:     #ffcb6b   giallo oro — classi/tipi
--number:    #f78c6c   arancione — numeri
--comment:   #3d4872   grigio blu — commenti (italic)
--prop:      #89ddff   azzurro — proprietà oggetto
--statusbar: #0b5e50   verde scuro — status bar
```

---

## Struttura File Attuale

```
app/
├── layout.jsx              ← shell IDE globale + SEO + GTM + GA4
├── icon.svg                ← favicon (DEVE chiamarsi icon.*, non favicon.svg)
├── page.jsx                ← home (Hero + HomeCards)
├── opengraph-image.jsx     ← OG image dinamica (ImageResponse, edge)
├── sitemap.js              ← sitemap.xml
├── robots.js               ← robots.txt
├── not-found.jsx           ← pagina 404
├── about/
│   └── page.jsx            ✅ implementata
├── projects/
│   ├── page.jsx            ✅ implementata
│   └── new/
│       └── page.jsx        ✅ implementata — CTA nuovo progetto
├── skills/
│   └── page.jsx            ✅ implementata
└── contact/
    └── page.jsx            ✅ implementata

components/
├── IDEShell.jsx
├── Sidebar.jsx
├── TabBar.jsx              ← tab navigazione + tab dimmed "new-project.jsx" + tab download "curriculum.pdf" (verde)
├── StatusBar.jsx
├── TitleBar.jsx
├── PageTransition.jsx
├── Hero.jsx                ← home hero con syntax highlighting
├── HomeCards.jsx           ← card delle sezioni (colonna destra su desktop)
├── AboutCode.jsx           ← contenuto pagina about
├── ProjectsCode.jsx        ← contenuto pagina projects con thumbnail
├── NewProjectCode.jsx      ← file tree template + CTA
├── SkillsCode.jsx          ← contenuto pagina skills
├── ContactCode.jsx         ← contenuto pagina contact
├── NotFoundCode.jsx        ← contenuto 404
└── JsonLd.jsx              ← schema JSON-LD Person (nel layout)

utils/
└── fetchSkills.js

public/
├── cv/
│   └── cv_sparano.pdf      ← CV scaricabile (linkato da /about)
└── previews/
    ├── mosic.png           ✅
    ├── soundpopradio.png   ✅
    ├── quantumcrypto.png   ← TODO
    ├── portfolio-v1.png    ← TODO
    └── osteopata.png       ← TODO
```

---

## Pagine — Stato Attuale

### `/` — Home ✅
Hero con JSDoc + JSX reale con syntax highlighting.
Sotto: griglia di `HomeCards` — su desktop appaiono come colonna destra (w-72, border-l), su mobile sotto il codice in griglia 2×2.
Card presenti: about.jsx, projects.jsx, fetchSkills.js, **curriculum.pdf** (download diretto), contact.jsx.

### `/about` ✅
Modulo JS con:
- JSDoc header (name, role, location, agency)
- `const profile` — email, web, github
- `const story` — template literal con bio narrativa (percorso dal design al codice)
- `const experience` — QCore Agency 2024→now, Studio F. Sparano 2019–2021, Studio Mono Agency 2018
- `const education` — Vanvitelli (Master + Bachelor Design), ILAS Academy 110/110 lode 2023, Udemy WP
- `const certifications` — completate + WIP (React, Next.js/WP Headless, Three.js Journey)
- `const aiTools` — Claude Code CLI, VS Code+Copilot, Zed+AI, Cursor, Figma AI
- Link download CV → `/cv/cv_sparano.pdf`

### `/projects` ✅
`const projects = [...]` con 5 progetti:

| # | Progetto | Tipo | Status | Link |
|---|----------|------|--------|------|
| 01 | Mosic | ILAS project | mockup | nessuno |
| 02 | SoundPop Radio | ILAS project | live | legacy.alessandrosparano.com/soundpopradio |
| 03 | QuantumCrypto | ILAS project | live | legacy.alessandrosparano.com/quantumcrypto |
| 04 | Portfolio v1 | personal | legacy | legacy.alessandrosparano.com/portfolio |
| 05 | Studio Osteopata | collaboration | live | elisasaviano.it (con Francesco Li Petri → francescolipetri.it) |

Thumbnail grayscale con label overlay (sfondo nero, testo giallo `--class`).
In fondo: link `// ── new project ──` → `/projects/new`.

### `/projects/new` ✅
File tree di due strutture template (Next.js + WordPress) in stile syntax-highlighted.
CTA box con bottone email + link a /contact.

### `/skills` ✅
Body completo di `fetchSkills()` con tutte le categorie skill.

### `/contact` ✅
`const contact = { ... }` con tutti i contatti cliccabili.
CTA `→ inizia un nuovo progetto` → `/projects/new`.

---

## SEO — Implementata ✅

- Metadata globale con title template `%s — Alessandro Sparano`
- OpenGraph completo (og:title, og:description, og:image, og:url, og:locale `it_IT`)
- Twitter Card `summary_large_image`
- OG image dinamica 1200×630 in stile IDE (`app/opengraph-image.jsx`, edge runtime)
- JSON-LD schema `Person` (`components/JsonLd.jsx` nel layout)
- Sitemap → `/sitemap.xml`
- robots.txt → `/robots.txt`
- URL canonical su ogni pagina
- `metadataBase: https://alessandrosparano.com`
- Google Tag Manager — GTM-NHGSMQ3D (`@next/third-parties`)
- Google Analytics 4 — G-99TR9N1F5F (`@next/third-parties`)

> ⚠️ NON specificare manualmente `openGraph.images` o `twitter.images` nel metadata quando esiste `app/opengraph-image.jsx` — Next.js genera automaticamente la URL con hash di versione.

---

## DNS — Setup in corso

- DNS authority: **Netsons** (NS non spostati su Vercel)
- `alessandrosparano.com` → A record `76.76.21.21` (Vercel)
- `www` → CNAME `cname.vercel-dns.com`
- `legacy.alessandrosparano.com` → server Netsons (stessa `public_html`, shared document root)
- MX records → invariati su Netsons (mail rimane lì)

Cartelle su Netsons `public_html/`:
- `soundpopradio/` — progetto ILAS live
- `quantumcrypto/` — progetto ILAS live
- `portfolio/` — vecchio portfolio WordPress (wp-config con WP_HOME + WP_SITEURL impostati su legacy.alessandrosparano.com/portfolio)

**TODO:** aggiungere rewrites in `next.config.js` per fare proxy dei path `/soundpopradio`, `/quantumcrypto`, `/portfolio` verso il sottodominio legacy.

---

## TODO

- [x] Favicon → `app/icon.svg` ✅
- [x] Google Tag Manager + GA4 ✅
- [ ] Rewrites in `next.config.js` per i path legacy (quando DNS propaga)
- [ ] Preview mancanti: quantumcrypto.png, portfolio-v1.png, osteopata.png
- [ ] Animazione GSAP entrance hero (typing effect)
- [ ] Valutare Lenis
- [ ] LinkedIn se esiste un profilo
- [ ] Test su iPhone reale dopo switch DNS

---

## Cosa NON fare

- Niente pallini macOS nei window controls
- Niente TypeScript, niente `.ts`/`.tsx`
- Non replicare 1:1 un IDE — deve restare un sito web usabile
- Non esagerare con le animazioni
- Niente scroll-jacking aggressivo
- Niente transizioni lente — max 300–400ms
- NON usare sintassi configurazione Tailwind v3
- `break-words` su mobile in TUTTI i componenti di testo (Hero, AboutCode, SkillsCode, ProjectsCode, NotFoundCode) — mai `break-all`
- La favicon SVG deve chiamarsi `app/icon.svg`, non `app/favicon.svg` (Next.js App Router non supporta `favicon.*` per SVG)
- NON specificare `openGraph.images` / `twitter.images` manualmente quando esiste `app/opengraph-image.jsx`
- Tab di download nella TabBar usano `<a download>`, non `<Link>`, e sono colorati con `text-string` (verde)
