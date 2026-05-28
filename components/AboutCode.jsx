"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const T = {
  c:  "text-comment italic",
  k:  "text-keyword",
  s:  "text-string",
  f:  "text-fn",
  p:  "text-prop",
  cl: "text-class",
  n:  "text-number",
  tx: "text-text",
}

const lines = [
  // ── JSDoc header ───────────────────────────────────────────────
  [{ t: "/**", c: T.c }],
  [{ t: " * ", c: T.c }, { t: "@name", c: T.k }, { t: "     Alessandro Sparano", c: T.c }],
  [{ t: " * ", c: T.c }, { t: "@role", c: T.k }, { t: "     Creative Developer", c: T.c }],
  [{ t: " * ", c: T.c }, { t: "@location", c: T.k }, { t: " Napoli, Italia", c: T.c }],
  [{ t: " * ", c: T.c }, { t: "@agency", c: T.k }, { t: "   QCore Agency", c: T.c }],
  [{ t: " */", c: T.c }],
  null,

  // ── profile ────────────────────────────────────────────────────
  [{ t: "const", c: T.k }, { t: " ", c: T.tx }, { t: "profile", c: T.cl }, { t: " = {", c: T.tx }],
  [{ t: "  email", c: T.p }, { t: ":  ", c: T.tx }, { t: "'aledev@alessandrosparano.com'", c: T.s }, { t: ",", c: T.tx }],
  [{ t: "  web", c: T.p }, { t: ":    ", c: T.tx }, { t: "'alessandrosparano.com'", c: T.s }, { t: ",", c: T.tx }],
  [{ t: "  github", c: T.p }, { t: ": ", c: T.tx }, { t: "'github.com/AlePeace'", c: T.s }, { t: ",", c: T.tx }],
  [{ t: "}", c: T.tx }],
  null,

  // ── story ──────────────────────────────────────────────────────
  [{ t: "// chi sono — la versione non compressa", c: T.c }],
  [{ t: "const", c: T.k }, { t: " ", c: T.tx }, { t: "story", c: T.cl }, { t: " = `", c: T.s }],
  [{ t: "  Vengo dal design — triennale e magistrale in Design &", c: T.s }],
  [{ t: "  Communication e Design X Innovation alla Vanvitelli.", c: T.s }],
  [{ t: "  Poi ILAS Academy (110/110 con lode) dove ho capito", c: T.s }],
  [{ t: "  che la parte che mi piaceva di più era scrivere codice.", c: T.s }],
  null,
  [{ t: "  Ora in QCore Agency faccio quello che mi piace di più:", c: T.s }],
  [{ t: "  trasformare idee in interfacce. WordPress headless,", c: T.s }],
  [{ t: "  Next.js, React — ma sempre con un occhio al design.", c: T.s }],
  null,
  [{ t: "  Mi interessa il punto in cui design e codice si toccano.", c: T.s }],
  [{ t: "  Dove un'animazione ha senso. Dove la tipografia conta.", c: T.s }],
  [{ t: "  Dove scrivere codice pulito è già una forma di cura.", c: T.s }],
  null,
  [{ t: "  Passioni: UI craftmanship, 3D web (Three.js, in arrivo),", c: T.s }],
  [{ t: "  performance, tipografia, e qualsiasi cosa sembri", c: T.s }],
  [{ t: "  impossibile da fare bene nel browser.", c: T.s }],
  [{ t: "`", c: T.s }],
  null,

  // ── experience ─────────────────────────────────────────────────
  [{ t: "const", c: T.k }, { t: " ", c: T.tx }, { t: "experience", c: T.cl }, { t: " = [", c: T.tx }],
  [{ t: "  {", c: T.tx }],
  [{ t: "    role", c: T.p }, { t: ":    ", c: T.tx }, { t: "'Web Developer'", c: T.s }, { t: ",", c: T.tx }],
  [{ t: "    company", c: T.p }, { t: ": ", c: T.tx }, { t: "'QCore Agency'", c: T.s }, { t: ",", c: T.tx }],
  [{ t: "    period", c: T.p }, { t: ":  ", c: T.tx }, { t: "'2024 → now'", c: T.s }, { t: ",", c: T.tx }],
  [{ t: "    stack", c: T.p }, { t: ":   ", c: T.tx }, { t: "[ ", c: T.tx }, { t: "'WordPress'", c: T.s }, { t: ", ", c: T.tx }, { t: "'Next.js'", c: T.s }, { t: ", ", c: T.tx }, { t: "'WPGraphQL'", c: T.s }, { t: ", ", c: T.tx }, { t: "'Sanity'", c: T.s }, { t: " ]", c: T.tx }, { t: ",", c: T.tx }],
  [{ t: "    focus", c: T.p }, { t: ":   ", c: T.tx }, { t: "[ ", c: T.tx }, { t: "'e-commerce'", c: T.s }, { t: ", ", c: T.tx }, { t: "'hospitality'", c: T.s }, { t: ", ", c: T.tx }, { t: "'electoral'", c: T.s }, { t: ", ", c: T.tx }, { t: "'AGID'", c: T.s }, { t: ", ", c: T.tx }, { t: "'GDPR'", c: T.s }, { t: " ]", c: T.tx }, { t: ",", c: T.tx }],
  [{ t: "  },", c: T.tx }],
  [{ t: "  {", c: T.tx }],
  [{ t: "    role", c: T.p }, { t: ":    ", c: T.tx }, { t: "'Designer'", c: T.s }, { t: ",", c: T.tx }],
  [{ t: "    company", c: T.p }, { t: ": ", c: T.tx }, { t: "'Studio F. Sparano'", c: T.s }, { t: ",", c: T.tx }],
  [{ t: "    period", c: T.p }, { t: ":  ", c: T.tx }, { t: "'2019 – 2021'", c: T.s }, { t: ",", c: T.tx }],
  [{ t: "    focus", c: T.p }, { t: ":   ", c: T.tx }, { t: "[ ", c: T.tx }, { t: "'design'", c: T.s }, { t: ", ", c: T.tx }, { t: "'grafica'", c: T.s }, { t: ", ", c: T.tx }, { t: "'identità visiva'", c: T.s }, { t: " ]", c: T.tx }, { t: ",", c: T.tx }],
  [{ t: "  },", c: T.tx }],
  [{ t: "  {", c: T.tx }],
  [{ t: "    role", c: T.p }, { t: ":    ", c: T.tx }, { t: "'Intern'", c: T.s }, { t: ",", c: T.tx }],
  [{ t: "    company", c: T.p }, { t: ": ", c: T.tx }, { t: "'Studio Mono Agency'", c: T.s }, { t: ",", c: T.tx }],
  [{ t: "    period", c: T.p }, { t: ":  ", c: T.tx }, { t: "'2018'", c: T.s }, { t: ",", c: T.tx }],
  [{ t: "    focus", c: T.p }, { t: ":   ", c: T.tx }, { t: "[ ", c: T.tx }, { t: "'digital content'", c: T.s }, { t: ", ", c: T.tx }, { t: "'corporate identity'", c: T.s }, { t: " ]", c: T.tx }, { t: ",", c: T.tx }],
  [{ t: "  },", c: T.tx }],
  [{ t: "]", c: T.tx }],
  null,

  // ── education ──────────────────────────────────────────────────
  [{ t: "const", c: T.k }, { t: " ", c: T.tx }, { t: "education", c: T.cl }, { t: " = [", c: T.tx }],
  [{ t: "  { degree", c: T.p }, { t: ": ", c: T.tx }, { t: "'Master — Design X Innovation'", c: T.s }, { t: ",  school", c: T.p }, { t: ": ", c: T.tx }, { t: "'Univ. Luigi Vanvitelli'", c: T.s }, { t: " },", c: T.tx }],
  [{ t: "  { degree", c: T.p }, { t: ": ", c: T.tx }, { t: "'Bachelor — Design & Communication'", c: T.s }, { t: ", school", c: T.p }, { t: ": ", c: T.tx }, { t: "'Univ. Luigi Vanvitelli'", c: T.s }, { t: " },", c: T.tx }],
  [{ t: "  { degree", c: T.p }, { t: ": ", c: T.tx }, { t: "'Specialist — Web Design & FE Dev'", c: T.s }, { t: ",  school", c: T.p }, { t: ": ", c: T.tx }, { t: "'ILAS Academy'", c: T.s }, { t: ", grade", c: T.p }, { t: ": ", c: T.tx }, { t: "'110/110 con lode'", c: T.s }, { t: ", year", c: T.p }, { t: ": ", c: T.tx }, { t: "2023", c: T.n }, { t: " },", c: T.tx }],
  [{ t: "]", c: T.tx }],
  null,

  // ── certifications ─────────────────────────────────────────────
  [{ t: "const", c: T.k }, { t: " ", c: T.tx }, { t: "certifications", c: T.cl }, { t: " = {", c: T.tx }],
  [{ t: "  completed", c: T.p }, { t: ": [", c: T.tx }],
  [{ t: "    { platform", c: T.p }, { t: ": ", c: T.tx }, { t: "'ILAS Academy'", c: T.s }, { t: ",  course", c: T.p }, { t: ": ", c: T.tx }, { t: "'Web Design & Front End Dev'", c: T.s }, { t: ",    grade", c: T.p }, { t: ": ", c: T.tx }, { t: "'110/110 con lode'", c: T.s }, { t: ", year", c: T.p }, { t: ": ", c: T.tx }, { t: "2023", c: T.n }, { t: " },", c: T.tx }],
  [{ t: "    { platform", c: T.p }, { t: ": ", c: T.tx }, { t: "'Udemy'", c: T.s }, { t: ",         course", c: T.p }, { t: ": ", c: T.tx }, { t: "'WordPress Theme Dev 2.0'", c: T.s }, { t: ",         hours", c: T.p }, { t: ": ", c: T.tx }, { t: "10.5", c: T.n }, { t: ",    month", c: T.p }, { t: ": ", c: T.tx }, { t: "'Luglio 2025'", c: T.s }, { t: " },", c: T.tx }],
  [{ t: "  ],", c: T.tx }],
  [{ t: "  wip", c: T.p }, { t: ": [", c: T.tx }],
  [{ t: "    { platform", c: T.p }, { t: ": ", c: T.tx }, { t: "'Udemy'", c: T.s }, { t: ",              course", c: T.p }, { t: ": ", c: T.tx }, { t: "'React — The Complete Guide'", c: T.s }, { t: ",          note", c: T.p }, { t: ": ", c: T.tx }, { t: "'Hooks, Redux, Next.js'", c: T.s }, { t: " },", c: T.tx }],
  [{ t: "    { platform", c: T.p }, { t: ": ", c: T.tx }, { t: "'Udemy'", c: T.s }, { t: ",              course", c: T.p }, { t: ": ", c: T.tx }, { t: "'Next.js & WordPress Headless'", c: T.s }, { t: ",     note", c: T.p }, { t: ": ", c: T.tx }, { t: "'GraphQL, Tailwind, Vercel'", c: T.s }, { t: " },", c: T.tx }],
  [{ t: "    { platform", c: T.p }, { t: ": ", c: T.tx }, { t: "'threejs-journey.com'", c: T.s }, { t: ", course", c: T.p }, { t: ": ", c: T.tx }, { t: "'Three.js Journey'", c: T.s }, { t: ",                note", c: T.p }, { t: ": ", c: T.tx }, { t: "'Bruno Simon'", c: T.s }, { t: " },", c: T.tx }],
  [{ t: "  ],", c: T.tx }],
  [{ t: "}", c: T.tx }],
  null,

  // ── ai & tools ─────────────────────────────────────────────────
  [{ t: "const", c: T.k }, { t: " ", c: T.tx }, { t: "aiTools", c: T.cl }, { t: " = {", c: T.tx }],
  [{ t: "  expert", c: T.p }, { t: ": [ ", c: T.tx }, { t: "'Claude.ai + Claude Code CLI'", c: T.s }, { t: ", ", c: T.tx }, { t: "'VS Code + GitHub Copilot'", c: T.s }, { t: ", ", c: T.tx }, { t: "'Zed + AI Agent'", c: T.s }, { t: " ],", c: T.tx }],
  [{ t: "  ok", c: T.p }, { t: ":     [ ", c: T.tx }, { t: "'Cursor AI'", c: T.s }, { t: ", ", c: T.tx }, { t: "'Figma + AI Plugins'", c: T.s }, { t: " ],", c: T.tx }],
  [{ t: "  note", c: T.p }, { t: ":   ", c: T.tx }, { t: "'AI-assisted workflow — daily driver'", c: T.s }, { t: ",", c: T.tx }],
  [{ t: "}", c: T.tx }],
  null,

  // ── cv download hint ───────────────────────────────────────────
  [{ t: "// ↓ versione cartacea — scarica il curriculum", c: T.c }],
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.02, delayChildren: 0.1 } },
}

const lineAnim = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.16, ease: "easeOut" } },
}

export default function AboutCode() {
  return (
    <div className="px-4 md:px-8 pt-10 pb-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col"
      >
        {lines.map((tokens, i) => (
          <motion.div
            key={i}
            variants={lineAnim}
            className="flex items-baseline min-h-[1.6em]"
          >
            <span className="w-6 md:w-8 text-right text-[12px] text-muted select-none mr-4 md:mr-8 shrink-0 tabular-nums">
              {i + 1}
            </span>
            <span className="text-[14px] leading-[1.6] whitespace-pre-wrap md:whitespace-pre break-all md:break-normal">
              {tokens
                ? tokens.map((token, j) => (
                    <span key={j} className={token.c}>{token.t}</span>
                  ))
                : " "
              }
            </span>
          </motion.div>
        ))}

        {/* riga CV download */}
        <motion.div variants={lineAnim} className="flex items-baseline min-h-[1.6em]">
          <span className="w-6 md:w-8 text-right text-[12px] text-muted select-none mr-4 md:mr-8 shrink-0 tabular-nums">
            {lines.length + 1}
          </span>
          <span className="text-[14px] leading-[1.6]">
            <a
              href="/cv/cv_sparano.pdf"
              download
              className="text-accent underline underline-offset-2 decoration-muted hover:decoration-accent transition-colors"
            >
              cv_sparano.pdf
            </a>
            <span className="text-comment italic">{"  // → download"}</span>
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
