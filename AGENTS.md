<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Portfolio — Project Context

## Author

**Alessandro Sparano** — Creative Developer @ QCore Agency, Napoli.
Clients are often non-technical, so the portfolio must be readable by anyone. The site now ships two full experiences so it works for both audiences at once (see below) instead of forcing a compromise.

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
| GSAP | Animations | Entrance animations, transitions, text effects — still not implemented |
| Lenis | Smooth scroll | Evaluate if it improves experience on this layout |
| Framer Motion | Page transitions + reveal | `AnimatePresence` for route changes; `whileInView` scroll-reveal in modalità visuale |
| JetBrains Mono | Font | Modalità dev only — UI + mocked code content |
| Oswald + Inter | Fonts | Modalità Visuale only — Oswald for headings, Inter for body, via `next/font/google` |
| Tailwind CSS v4 | Styling | Uses `@import "tailwindcss"` + `@theme inline` syntax |
| @next/third-parties | Analytics | GoogleTagManager + GoogleAnalytics components |

**No TypeScript.** All code is plain JavaScript with JSX. No `.ts` or `.tsx` files ever.

---

## Concept & Aesthetic

The site ships **two parallel experiences**, chosen once by the visitor and remembered via a cookie — instead of forcing one compromise design for both developers and non-technical clients/HR.

- **Modalità dev** — the original IDE-styled site. Always dark. Visual language of a code editor (Zed/VS Code); developers recognize and appreciate it, non-developers just see "a site," which is why it's no longer the *only* option.
- **Modalità Visuale** — a graphic, editorial-style site for non-technical visitors (clients, recruiters, HR). Light/dark themeable, built around Oswald/Inter + a mint/teal/orange/violet accent system inspired by Alessandro's old portfolio.

### Gateway (`/` — first visit only)

`components/Gateway.jsx`. Rendered **only** when no `site-mode` cookie exists at `/`. It is a one-time chooser, never a gate — deep links to any inner page never show it. Two pills: **"Modalità Visuale"** (blue `--brand-blue`) / **"Modalità dev"** (pink `--brand-pink`). These two colors are a fixed brand pair reserved for the gateway and the logo's highlighter underline — independent of the two site themes. Clicking a pill sets the `site-mode` cookie (1 year, `path=/`) and does a full reload.

### Mode & theme resolution

- `site-mode` cookie: `"dev"` | `"simple"`.
  - Missing **at `/`** → Gateway is shown.
  - Missing **anywhere else** → defaults to `"simple"` (the more accessible default for an unknown direct visitor). Read via `utils/getSiteMode.js`.
- `site-theme` cookie: `"light"` | `"dark"` — only relevant to modalità visuale (modalità dev is always dark, untouched by this).
  - Read server-side in `app/layout.jsx` via `next/headers` `cookies()`, set as `data-mode` / `data-theme` on `<html>` — no client flash on repeat visits.
  - A blocking inline `<script>` in `<head>` upgrades to dark **only when no theme cookie exists yet**, based on `prefers-color-scheme` — first-visit-only flash guard.
- Switching mode is **always a visible control on both sides**, per explicit request — not just discoverable on Home:
  - `SimpleNav.jsx` → "→ modalità dev" pill, **filled mint**, visible on desktop (full text) and mobile ("Dev" badge).
  - `StatusBar.jsx` → "→ modalità visuale" text link, right cluster.
  - Both just set the cookie + `window.location.reload()` — **stay on the same path**, no redirect to Home.
- `app/layout.jsx` **no longer wraps children in `IDEShell`**. Each top-level page (`page.jsx`, `about/page.jsx`, `projects/page.jsx`, `projects/new/page.jsx`, `skills/page.jsx`, `contact/page.jsx`, `not-found.jsx`) reads its own mode and picks its own shell/content pair itself (`IDEShell` + `*Code.jsx` vs `SimpleShell` + `Simple*.jsx`). This makes the root layout dynamic (opts out of static rendering) — expected, fine at this traffic scale.

### Modalità dev — IDE elements

- **Titlebar** — KDE/Linux-style window controls (flat, geometric — NOT macOS traffic lights)
- **Sidebar** — navigable file tree (desktop always visible, mobile overlay)
- **Tab bar** — open pages as file tabs, including dimmed `new-project.jsx` tab and green `curriculum.pdf` download tab
- **Line numbers** — in all content areas
- **Status bar** — bottom bar with git branch, deploy status, OS, font name, **+ mode-switch link**
- **Page transitions** — Framer Motion `AnimatePresence`, 180ms ease

### Modalità dev — Color palette (Material Theme / Zed dark inspired)

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

### Modalità Visuale — Color palette

Defined in `app/globals.css`, gated by `:root[data-theme="dark"]` — a **separate token namespace** from modalità dev above, so nothing collides and both sets exist in the DOM regardless of which mode is active.

```
--paper          page background   light #e4e5e7 / dark #0d0f16
--panel          card/panel tint   light #d9dadd / dark #171a26
--ink            primary text      light #15171b / dark #eceef4
--ink-soft       secondary text (translucent)
--hairline       dividers/borders  light #c7c9cd / dark #262a3a
--mint           #53cb87 — constant across both themes, the main accent
--accent-teal    light #53cbc4 / dark #6fd6cf
--accent-orange  light #f66e1b / dark #f6874a
--accent-violet  light #9680fe / dark #a897ff
--footer-bg / --footer-ink   footer block, always dark-on-light regardless of theme
--brand-blue / --brand-pink  GATEWAY + LOGO HIGHLIGHTER ONLY — light #3d6fe0/#e0479a, dark #4c8dff/#f65ca6
```

### Fonts

- **JetBrains Mono** — modalità dev only, imported via `next/font/google` with ligatures. Variable: `--font-jetbrains-mono`, Tailwind class `font-mono`.
- **Oswald** (weights 500/700) + **Inter** — modalità visuale only, via `next/font/google`. Tailwind classes `font-heading` (Oswald) / `font-body` (Inter, also the default body font when `site-mode=simple`).

---

## App Router File Structure

```
app/
├── layout.jsx              ← root: fonts, reads site-mode/site-theme cookies → data-mode/data-theme on <html>, GTM/GA/JsonLd. NO shell here.
├── icon.svg                ← favicon (must be icon.*, NOT favicon.svg)
├── page.jsx                ← Home: Gateway (no cookie) | IDEShell+Hero/HomeCards (dev) | SimpleShell+SimpleHome (simple)
├── opengraph-image.jsx     ← dynamic OG image (ImageResponse, edge runtime)
├── sitemap.js              ← sitemap.xml
├── robots.js               ← robots.txt
├── not-found.jsx           ← same dual-mode pattern as pages below
├── about/
│   └── page.jsx             ← dual-mode: IDEShell+AboutCode | SimpleShell+SimpleAbout
├── projects/
│   ├── page.jsx              ← dual-mode: IDEShell+ProjectsCode | SimpleShell+SimpleProjects
│   └── new/
│       └── page.jsx          ← dual-mode: IDEShell+NewProjectCode | SimpleShell+SimpleNewProject
├── skills/
│   └── page.jsx              ← dual-mode: IDEShell+SkillsCode | SimpleShell+SimpleSkills
└── contact/
    └── page.jsx              ← dual-mode: IDEShell+ContactCode | SimpleShell+SimpleContact

components/
├── IDEShell.jsx            ← modalità dev wrapper (sidebar toggle state)
├── Sidebar.jsx / TabBar.jsx / StatusBar.jsx / TitleBar.jsx   ← modalità dev shell pieces (StatusBar now also carries the "→ modalità visuale" switch)
├── Hero.jsx / HomeCards.jsx / AboutCode.jsx / ProjectsCode.jsx
├── NewProjectCode.jsx / SkillsCode.jsx / ContactCode.jsx / NotFoundCode.jsx   ← modalità dev content, unchanged
├── Gateway.jsx              ← first-visit pill chooser, only rendered by app/page.jsx when no site-mode cookie
├── SimpleShell.jsx          ← modalità visuale wrapper: SimpleNav + PageTransition + SimpleFooter
├── SimpleNav.jsx            ← logo w/ blue→pink highlighter, desktop nav links, mobile hamburger + slide-down menu, ThemeToggle, filled-mint "→ modalità dev"
├── SimpleFooter.jsx         ← dark CTA block, scroll-reveal on whileInView
├── ThemeToggle.jsx          ← light/dark switch (sun/moon), sets site-theme cookie
├── SimpleHome.jsx / SimpleAbout.jsx / SimpleProjects.jsx
├── SimpleSkills.jsx / SimpleContact.jsx / SimpleNewProject.jsx / SimpleNotFound.jsx
│                            ← modalità visuale content. Real prose (no code-as-content), mint/teal/orange/violet accents,
│                              scroll-reveal via framer-motion `whileInView` (once per section, `viewport={{once:true, amount:0.2}}`)
├── PageTransition.jsx      ← shared AnimatePresence wrapper, used by both shells
└── JsonLd.jsx               ← JSON-LD Person schema (in layout)

utils/
├── fetchSkills.js           ← returns skills/stack (local mock in v1)
└── getSiteMode.js           ← reads `site-mode` cookie server-side (async, next/headers), defaults to "simple"

public/
├── cv/
│   ├── cv_sparano.pdf              ← modalità dev download (unchanged — do NOT touch without being asked)
│   ├── cv_sparano_semplice.pdf     ← modalità visuale download. Modern 1-page CV (sidebar + main column), mint/Oswald/Inter,
│   │                                  same content as the site but restrained color use (print-appropriate). Built from a plain
│   │                                  static HTML twin of the design (not committed — was in session scratchpad) rendered via
│   │                                  `chromium --headless --print-to-pdf`. Regenerate the same way if content changes; keep
│   │                                  main-column text ≥16px/12pt, tighten `.mainBlock`/`.side` margins first if it overflows to page 2.
│   └── profilo-pic.png             ← real photo (B&W, pre-cropped circular, transparent corners). Used in SimpleHome + SimpleAbout
│                                       avatar circles with `object-contain` (no extra CSS crop needed) and in the CV sidebar.
└── previews/
    ├── mosic.png / soundpopradio.png / quantumcrypto.png / portfolio-v1.png / osteopata.png
    │      ← all 5 present (grayscale treatment in modalità dev's ProjectsCode, full color in SimpleProjects)
    └── fotoale.jpeg             ← superseded by profilo-pic.png, no longer referenced anywhere — safe to delete
```

---

## Pages — Current State

Every page below exists in **both modes**; only modalità dev's structure is detailed here since it hasn't changed. Modalità Visuale equivalents (`Simple*.jsx`) carry the same real data rewritten as plain prose/cards — see the file structure above for which component pairs with which.

### `/` — Home ✅

**Gateway** on first visit (no cookie). Once a mode is chosen:
- Dev: Hero showing real JSDoc + JSX code with syntax highlighting. Below, `HomeCards` (2×2 grid mobile / right column desktop): about.jsx, projects.jsx, fetchSkills.js, **curriculum.pdf** (download → `cv_sparano.pdf`), contact.jsx, **startProject.js** (mailto, green dot).
- Simple: hero + 3 service cards + chi-sono teaser (real photo) + skill chips + numbered project list (5 real projects) + footer CTA.

### `/about` — Chi sono ✅

Dev — content as a JS module with syntax highlighting:
- JSDoc header (@name, @role, @location, @agency)
- `const profile` — email, web, github
- `const story` — template literal with personal narrative (design background → code)
- `const experience` — QCore Agency (2024→now), Studio F. Sparano (2019–2021), Studio Mono Agency (2018)
- `const education` — Vanvitelli (Master + Bachelor in Design), ILAS Academy 110/110 con lode 2023, Udemy WordPress
- `const certifications` — completed + wip (React course, Next.js/WP Headless, Three.js Journey)
- `const aiTools` — expert/ok split, note "AI-assisted workflow: daily driver"
- CV download link → `/cv/cv_sparano.pdf`

Simple — same data as plain prose: photo + name/role, bio paragraphs, experience timeline w/ tags, education list, certifications (completed/in corso), AI tools chips, CV download → `/cv/cv_sparano_semplice.pdf`.

### `/projects` — Progetti ✅

`const projects = [...]` style with 5 entries:

| # | Name | Type | Status | URL |
|---|------|------|--------|-----|
| 01 | Mosic | ILAS project | mockup | no link |
| 02 | SoundPop Radio | ILAS project | live | legacy.alessandrosparano.com/soundpopradio |
| 03 | QuantumCrypto | ILAS project | live | legacy.alessandrosparano.com/quantumcrypto |
| 04 | Portfolio v1 | personal | legacy | legacy.alessandrosparano.com/portfolio |
| 05 | Studio Osteopata | collaboration | live | elisasaviano.it |

Each project has: preview thumbnail, name, type, desc, stack, url, status. Studio Osteopata has a `collab` field linking to Francesco Li Petri (francescolipetri.it). Dev mode shows thumbnails grayscale with a label overlay; Simple mode shows them full color with description + stack tags, and each row reveals on scroll individually.

At the bottom: `// ── new project ──` (dev) / "Hai un progetto in mente? →" (simple), both → `/projects/new`.

### `/projects/new` ✅

Dev — file tree visualization of two project templates (Next.js structure + WordPress structure) as syntax-highlighted code, CTA box with email button + link to /contact. Tab bar shows `new-project.jsx` as a dimmed/special tab.

Simple — the same two starters (Next.js / WordPress) as plain cards explaining what each includes, plus a "scrivimi" CTA.

### `/skills` — fetchSkills.js ✅

Dev — full `fetchSkills()` function body showing all skill categories as return object properties: languages, frameworks, cms, styling, animations, tools, deploy, soft.

Simple — same categories as labeled chip groups.

### `/contact` — Contatti ✅

Dev — `const contact = { ... }` with all contacts as clickable strings (email/phone/github/web) + CTA button `→ inizia un nuovo progetto` linking to `/projects/new`.

Simple — same contacts as a clickable list + same CTA.

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

URLs are identical across both modes (no `/dev/...` or `/simple/...` prefixes) — deliberate, to protect the URLs already submitted to Search Console.

---

## Status Bar Content (modalità dev)

```
left:   ⎇ main  |  ✓ deployed on Vercel  |  0 errors · 0 warnings
right:  Zorin OS  |  JavaScript (React)  |  JetBrains Mono  |  → modalità visuale
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
- Page transitions: `AnimatePresence mode="wait"` in `PageTransition.jsx`, shared by both shells
- Modalità dev: staggered `motion.div` with `opacity + x`, triggered on mount (unchanged)
- Modalità Visuale: scroll-reveal via `whileInView` (`viewport={{ once: true, amount: 0.2 }}`), fade + `y:28→0`, ~0.5s ease-out — each section/row animates independently as it enters view, not on page mount
- Sidebar mobile (dev): slide in/out with backdrop
- SimpleNav mobile menu: height/opacity `AnimatePresence` slide-down

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
- **Framer Motion** — used for page transitions, mount-stagger (dev) and scroll-reveal (simple)
- **Mobile**: dev sidebar collapsible overlay + tab bar horizontally scrollable; simple mode has its own hamburger menu (`SimpleNav.jsx`), independent of the dev sidebar
- KDE window controls: inline SVG (X, minimize line, maximize square)
- Status bar: `position: sticky; bottom: 0`
- All page text: `break-words` on mobile (NEVER `break-all`) — applies to Hero, AboutCode, SkillsCode, ProjectsCode, NotFoundCode
- Token-based line rendering pattern used in all dev-mode page components (Hero, AboutCode, SkillsCode, etc.)
- **Favicon**: must be `app/icon.svg` (or `icon.png`) — `favicon.svg` is NOT picked up by Next.js App Router
- **OG image**: do NOT manually specify `openGraph.images` or `twitter.images` in metadata when `app/opengraph-image.jsx` exists — Next.js handles the URL automatically with version hash
- **Tab bar download tabs**: use `<a href="..." download>` instead of `<Link>` — download tabs styled with `text-string` (green) to distinguish from nav tabs
- **Analytics**: GTM loaded via `<GoogleTagManager>` before `<body>`, GA4 via `<GoogleAnalytics>` after `</body>` — both from `@next/third-parties/google`
- **Mode/theme cookies**: `site-mode` and `site-theme`, both `path=/`, `max-age=31536000` (1 year), set client-side (`document.cookie`) then `window.location.reload()` — never use `next/navigation` router methods for a mode/theme switch, a full reload is what re-evaluates the server-read cookie in `layout.jsx`/each `page.jsx`
- **Root layout is dynamic** (calls `cookies()`) — no static rendering for any page anymore; acceptable at this traffic scale, worth knowing if build output looks different than expected

---

## TODO / Next Steps

### Site
- [x] Favicon — `app/icon.svg` ✅
- [x] Google Tag Manager + GA4 via `@next/third-parties` ✅
- [x] Gateway + dual-mode (semplice/dev) architecture, cookie-based, same URLs ✅
- [x] Modalità Visuale built out for every page (Home, About, Projects, Projects/new, Skills, Contact, 404) ✅
- [x] Light/dark theme toggle for modalità visuale ✅
- [x] Mode-switch control always visible in both modes (nav pill + status bar link) ✅
- [x] Mobile hamburger menu for modalità visuale ✅
- [x] Scroll-reveal animations (`whileInView`) across modalità visuale ✅
- [x] Real profile photo wired into SimpleHome/SimpleAbout + CV ✅
- [x] All 5 project preview images present ✅
- [ ] Add `next.config.js` rewrites for legacy subpaths once DNS propagates
- [ ] Evaluate Lenis integration
- [ ] GSAP hero entrance animation
- [ ] Test on real device (iPhone) after DNS switch
- [ ] Delete unused `public/previews/fotoale.jpeg` (superseded by `profilo-pic.png`)

### Job search (parallel track — not code, but active)
- [x] New modern CV (`cv_sparano_semplice.pdf`) — used going forward for applications
- [ ] **Tomorrow**: connect Claude in Chrome (Brave) to LinkedIn, Twine and Indeed profiles — review current content, propose updated text in chat, edit **only after per-section confirmation** (no bulk auto-edit; no login on the user's behalf)
- [ ] **Tomorrow**: draft tailored cover letters for Accenture and Eng.it (Ingegneria Informatica) from the new CV, walk through each application form together — **explicit confirmation required before any submit click**, applications aren't reversible once sent

---

## What NOT to Do

- No macOS traffic-light window controls
- No TypeScript, no `.ts`/`.tsx`
- Do not replicate an IDE 1:1 in modalità dev — it must remain a usable website
- Do not overdo animations — blinking cursor, subtle hover, entrance/reveal animation. Stop there.
- No aggressive scroll-jacking — Lenis should make scroll smoother, not control it
- No slow page transitions — max 300–400ms total
- Do NOT use Tailwind v3 config syntax — this project uses v4
- Do NOT touch `cv_sparano.pdf` / dev-mode CV download paths when changing the simple-mode CV
- Do NOT add a `/dev/...` or `/simple/...` URL prefix — both modes must keep living at the same URLs (Search Console is already tracking them)
- Do NOT submit any job application or publish/save an edit on LinkedIn/Indeed/Twine without an explicit per-action go-ahead in chat first
