<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Portfolio — Project Context

## Author

**Alessandro Sparano** — Creative Developer @ QCore Agency, Napoli.
Clients are often non-technical, so the portfolio must be readable by anyone while keeping a developer aesthetic.

### Contact / Social
- Email: aledev@alessandrosparano.com
- Phone: +39 349 32 02 675
- GitHub: github.com/AlePeace
- Web: alessandrosparano.com

---

## Stack

| Technology | Role | Notes |
|---|---|---|
| Next.js 16 (App Router) | Main framework | Folder-based routing, Turbopack |
| React | UI | JSX only, no TypeScript |
| Vercel | Deploy | Production at alessandrosparano.com |
| Sanity CMS | Content management | Planned for future, NOT in v1 |
| GSAP | Animations | Entrance animations, transitions, text effects |
| Lenis | Smooth scroll | Evaluate if it improves experience on this layout |
| Framer Motion | Page transitions | `AnimatePresence` for route changes — already installed & in use |
| JetBrains Mono | Font | Both for UI and mocked code content |
| Tailwind CSS v4 | Styling | Uses `@import "tailwindcss"` + `@theme inline` syntax |
| @next/third-parties | Analytics | GoogleTagManager + GoogleAnalytics components |

**No TypeScript.** All code is plain JavaScript with JSX. No `.ts` or `.tsx` files ever.

---

## Concept & Aesthetic

The site is **not** a clone of an IDE — it uses the **visual language of a code editor** (Zed / VS Code) as its design system.

Developers recognize and appreciate it. Non-developers simply see a clean, professional site.

### IDE elements implemented

- **Titlebar** — KDE/Linux-style window controls (flat, geometric — NOT macOS traffic lights)
- **Sidebar** — navigable file tree (desktop always visible, mobile overlay)
- **Tab bar** — open pages as file tabs, including dimmed `new-project.jsx` tab and green `curriculum.pdf` download tab
- **Line numbers** — in all content areas
- **Status bar** — bottom bar with git branch, deploy status, OS, font name
- **Page transitions** — Framer Motion `AnimatePresence`, 180ms ease

### Color palette (Material Theme / Zed dark inspired)

```
--bg:        #0d0f16   main background
--surface:   #0f1120   sidebar, panels
--titlebar:  #1a1d2e   titlebar, inactive tabs
--border:    #252838   borders and separators
--muted:     #4a5270   secondary text, icons
--text:      #cdd6f4   primary text
--accent:    #4ec9b0   teal — main accent (active tab, cursor, highlights)
--keyword:   #c792ea   purple — JS keywords
--string:    #c3e88d   light green — strings
--fn:        #82aaff   blue — function names
--class:     #ffcb6b   gold — classes/types
--number:    #f78c6c   orange — numbers
--comment:   #3d4872   blue-grey — comments (italic)
--prop:      #89ddff   light blue — object properties
--statusbar: #0b5e50   dark green — status bar background
```

### Font

**JetBrains Mono** — imported via `next/font/google` with ligatures. Variable: `--font-jetbrains-mono`.

---

## App Router File Structure

```
app/
├── layout.jsx              ← global IDE shell + SEO metadata + GTM + GA4
├── icon.svg                ← favicon (must be icon.*, NOT favicon.svg)
├── page.jsx                ← home (Hero + HomeCards side by side on desktop)
├── opengraph-image.jsx     ← dynamic OG image (ImageResponse, edge runtime)
├── sitemap.js              ← sitemap.xml
├── robots.js               ← robots.txt
├── not-found.jsx           ← 404 page
├── about/
│   └── page.jsx
├── projects/
│   ├── page.jsx
│   └── new/
│       └── page.jsx        ← "start a new project" CTA page
├── skills/
│   └── page.jsx
└── contact/
    └── page.jsx

components/
├── IDEShell.jsx            ← main wrapper (sidebar toggle state)
├── Sidebar.jsx             ← file tree, desktop + mobile overlay
├── TabBar.jsx              ← tabs; includes dimmed new-project.jsx tab
├── StatusBar.jsx           ← bottom bar
├── TitleBar.jsx            ← KDE window controls + mobile hamburger
├── PageTransition.jsx      ← framer-motion AnimatePresence wrapper
├── Hero.jsx                ← home hero — syntax-highlighted code as content
├── HomeCards.jsx           ← home file cards (right column on desktop, below on mobile)
├── AboutCode.jsx           ← about page content
├── ProjectsCode.jsx        ← projects list with thumbnails
├── NewProjectCode.jsx      ← new project file tree + CTA
├── SkillsCode.jsx          ← skills page content
├── ContactCode.jsx         ← contact page content
├── NotFoundCode.jsx        ← 404 content
└── JsonLd.jsx              ← JSON-LD Person schema (in layout)

utils/
└── fetchSkills.js          ← returns skills/stack (local mock in v1)

public/
├── cv/
│   └── cv_sparano.pdf      ← downloadable CV (linked from /about)
└── previews/
    ├── mosic.png           ← project preview (grayscale in UI)
    ├── soundpopradio.png   ← project preview
    ├── quantumcrypto.png   ← TODO: add
    ├── portfolio-v1.png    ← TODO: add
    └── osteopata.png       ← TODO: add
```

---

## Pages — Current State

### `/` — Home ✅

Hero showing real JSDoc + JSX code with syntax highlighting.
Below the code, a 2×2 grid of `HomeCards` on mobile; on desktop the cards appear as a right column (w-72) next to the code, separated by a border.

Cards: about.jsx, projects.jsx, fetchSkills.js, **curriculum.pdf** (download), contact.jsx.

### `/about` — Chi sono ✅

Content as a JS module with syntax highlighting. Sections:
- JSDoc header (@name, @role, @location, @agency)
- `const profile` — email, web, github
- `const story` — template literal with personal narrative (design background → code)
- `const experience` — QCore Agency (2024→now), Studio F. Sparano (2019–2021), Studio Mono Agency (2018)
- `const education` — Vanvitelli (Master + Bachelor in Design), ILAS Academy 110/110 con lode 2023, Udemy WordPress
- `const certifications` — completed + wip (React course, Next.js/WP Headless, Three.js Journey)
- `const aiTools` — expert/ok split, note "AI-assisted workflow: daily driver"
- CV download link → `/cv/cv_sparano.pdf`

### `/projects` — Progetti ✅

`const projects = [...]` style with 5 entries:

| # | Name | Type | Status | URL |
|---|------|------|--------|-----|
| 01 | Mosic | ILAS project | mockup | no link |
| 02 | SoundPop Radio | ILAS project | live | legacy.alessandrosparano.com/soundpopradio |
| 03 | QuantumCrypto | ILAS project | live | legacy.alessandrosparano.com/quantumcrypto |
| 04 | Portfolio v1 | personal | legacy | legacy.alessandrosparano.com/portfolio |
| 05 | Studio Osteopata | collaboration | live | elisasaviano.it |

Each project has: preview thumbnail (grayscale, label overlay with black bg + gold text), name, type, desc, stack, url, status.
Studio Osteopata has a `collab` field linking to Francesco Li Petri (francescolipetri.it).

At the bottom: `// ── new project ──` link → `/projects/new`.

### `/projects/new` ✅

File tree visualization of two project templates (Next.js structure + WordPress structure) rendered as syntax-highlighted code. Below: CTA box with email button + link to /contact.

Tab bar shows `new-project.jsx` as a dimmed/special tab.

### `/skills` — fetchSkills.js ✅

Full `fetchSkills()` function body showing all skill categories as return object properties:
languages, frameworks, cms, styling, animations, tools, deploy, soft.

### `/contact` — Contatti ✅

`const contact = { ... }` with all contacts as clickable strings:
- email → mailto
- phone → tel
- github → external link
- web → external link

CTA button `→ inizia un nuovo progetto` links to `/projects/new`.

---

## SEO — Implemented ✅

| What | Where |
|------|-------|
| Global metadata (title template, description, keywords, authors) | `app/layout.jsx` |
| OpenGraph (og:title, og:description, og:image, og:url, og:locale it_IT) | `app/layout.jsx` + each page |
| Twitter Card (summary_large_image) | `app/layout.jsx` |
| Dynamic OG image 1200×630 | `app/opengraph-image.jsx` (edge, ImageResponse) |
| JSON-LD Person schema | `components/JsonLd.jsx` (in layout) |
| Sitemap | `app/sitemap.js` → /sitemap.xml |
| robots.txt | `app/robots.js` → /robots.txt |
| Canonical URLs | each page metadata |
| Per-page title + description | about, projects, skills, contact |
| Google Tag Manager | `app/layout.jsx` via `@next/third-parties` — ID: GTM-NHGSMQ3D |
| Google Analytics 4 | `app/layout.jsx` via `@next/third-parties` — ID: G-99TR9N1F5F |

metadataBase: `https://alessandrosparano.com`

---

## Status Bar Content

```
left:   ⎇ main  |  ✓ deployed on Vercel  |  0 errors · 0 warnings
right:  Zorin OS  |  JavaScript (React)  |  JetBrains Mono
```

"Zorin OS" instead of the usual "UTF-8" — a small easter egg for those who know.

---

## DNS Setup (in progress)

- Domain registrar / DNS authority: **Netsons**
- `alessandrosparano.com` A record → `76.76.21.21` (Vercel)
- `www` CNAME → `cname.vercel-dns.com`
- `legacy.alessandrosparano.com` → Netsons server (same public_html, shared document root)
- MX records → unchanged on Netsons (mail stays there)

Old projects hosted at:
- `legacy.alessandrosparano.com/soundpopradio`
- `legacy.alessandrosparano.com/quantumcrypto`
- `legacy.alessandrosparano.com/portfolio` (WordPress, wp-config has WP_HOME + WP_SITEURL defined)

Next.js rewrites needed in `next.config.js` to proxy `/soundpopradio`, `/quantumcrypto`, `/portfolio` → legacy subdomain.

---

## Animations & Transitions

### Framer Motion — in use
- Page transitions: `AnimatePresence mode="wait"` in `PageTransition.jsx`
- Content entrance: staggered `motion.div` with `opacity + x` in all page components
- Sidebar mobile: slide in/out with backdrop

### GSAP — planned
- Hero typing animation on first load (not yet implemented)
- Project card hover effects (not yet implemented)
- Always use `useGSAP()` hook for cleanup

### Lenis — not yet evaluated
Likely low impact given the full-page layout. Evaluate when /projects gets longer.

---

## Implementation Notes

- **No TypeScript** — only `.js` and `.jsx`
- **Tailwind v4** — uses `@import "tailwindcss"` and `@theme inline` in globals.css. Do NOT use v3 config patterns.
- **GSAP** — use `useGSAP()` hook for automatic React cleanup
- **Framer Motion** — already installed, used for page transitions and entrance animations
- **Mobile**: sidebar collapsible overlay, tab bar horizontally scrollable, cards stack below hero
- KDE window controls: inline SVG (X, minimize line, maximize square)
- Status bar: `position: sticky; bottom: 0`
- All page text: `break-words` on mobile (NEVER `break-all`) — applies to Hero, AboutCode, SkillsCode, ProjectsCode, NotFoundCode
- Token-based line rendering pattern used in all page components (Hero, AboutCode, SkillsCode, etc.)
- **Favicon**: must be `app/icon.svg` (or `icon.png`) — `favicon.svg` is NOT picked up by Next.js App Router
- **OG image**: do NOT manually specify `openGraph.images` or `twitter.images` in metadata when `app/opengraph-image.jsx` exists — Next.js handles the URL automatically with version hash
- **Tab bar download tabs**: use `<a href="..." download>` instead of `<Link>` — download tabs styled with `text-string` (green) to distinguish from nav tabs
- **Analytics**: GTM loaded via `<GoogleTagManager>` before `<body>`, GA4 via `<GoogleAnalytics>` after `</body>` — both from `@next/third-parties/google`

---

## TODO / Next Steps

- [x] Add favicon — `app/icon.svg` ✅
- [x] Google Tag Manager + GA4 via `@next/third-parties` ✅
- [ ] Add `next.config.js` rewrites for legacy subpaths once DNS propagates
- [ ] Add remaining preview images: quantumcrypto.png, portfolio-v1.png, osteopata.png
- [ ] Evaluate Lenis integration
- [ ] GSAP hero entrance animation
- [ ] `/contact` — consider adding LinkedIn if account exists
- [ ] Test on real device (iPhone) after DNS switch

---

## What NOT to Do

- No macOS traffic-light window controls
- No TypeScript, no `.ts`/`.tsx`
- Do not replicate an IDE 1:1 — it must remain a usable website
- Do not overdo animations — blinking cursor, subtle hover, hero entrance animation. Stop there.
- No aggressive scroll-jacking — Lenis should make scroll smoother, not control it
- No slow page transitions — max 300–400ms total
- Do NOT use Tailwind v3 config syntax — this project uses v4
