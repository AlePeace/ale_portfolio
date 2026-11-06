"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const experience = [
  {
    role: "Web Developer",
    company: "QCore Agency",
    period: "2024 → oggi",
    tags: ["WordPress", "Tema custom", "Siti vetrina", "E-commerce", "Strutture ricettive", "Front-end Cilento Horizon"],
  },
  {
    role: "Designer",
    company: "Studio F. Sparano",
    period: "2019 – 2021",
    tags: ["Design", "Grafica", "Identità visiva"],
  },
  {
    role: "Intern",
    company: "Studio Mono Agency",
    period: "2018",
    tags: ["Contenuti digitali", "Corporate identity"],
  },
]

const education = [
  { degree: "Master — Design X Innovation", school: "Univ. Luigi Vanvitelli" },
  { degree: "Bachelor — Design & Communication", school: "Univ. Luigi Vanvitelli" },
  { degree: "Specialist — Web Design & FE Dev", school: "ILAS Academy · 110/110 con lode · 2023" },
]

const certifications = {
  completed: [
    "ILAS Academy — Web Design & Front End Dev (110/110 con lode, 2023)",
    "Udemy — WordPress Theme Dev 2.0 (10.5h, luglio 2025)",
  ],
  wip: [
    "Udemy — React: The Complete Guide",
    "Udemy — Next.js & WordPress Headless",
    "Three.js Journey (Bruno Simon)",
  ],
}

const aiTools = {
  expert: ["Claude.ai + Claude Code CLI", "VS Code + GitHub Copilot", "Zed + AI Agent"],
  ok: ["Cursor AI", "Figma + AI Plugins"],
}

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}
const inView = { once: true, amount: 0.2 }

function SectionLabel({ children }) {
  return <div className="text-[12px] font-bold uppercase tracking-[.14em] text-accent-teal mb-5">{children}</div>
}

export default function SimpleAbout() {
  return (
    <div>

      <motion.section initial="hidden" whileInView="visible" viewport={inView} variants={reveal} className="px-6 sm:px-16 pt-8 pb-14">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
          <div className="relative w-[110px] h-[110px] shrink-0">
            <div className="absolute -left-2 -bottom-2 w-full h-full rounded-full border-[8px] border-mint" />
            <div className="relative w-full h-full">
              <Image src="/cv/profilo-pic.png" alt="Alessandro Sparano" fill className="object-contain" />
            </div>
          </div>
          <div>
            <h1 className="font-heading font-bold text-[30px] sm:text-[38px] leading-[1.15]">Alessandro Sparano</h1>
            <p className="text-[15px] text-ink-soft mt-1">Creative Developer @ QCore Agency · Napoli, Italia</p>
          </div>
        </div>

        <p className="text-[16px] leading-[1.8] text-ink-soft max-w-[620px] mb-4">
          Vengo dal design — triennale e magistrale in Design &amp; Communication e Design X Innovation
          alla Vanvitelli. Poi ILAS Academy (110/110 con lode), dove ho capito che la parte che mi piaceva
          di più era scrivere codice.
        </p>
        <p className="text-[16px] leading-[1.8] text-ink-soft max-w-[620px] mb-4">
          Ora lavoro in QCore Agency, dove faccio soprattutto siti WordPress con tema custom: siti
          vetrina, e-commerce, siti per strutture ricettive e il front-end di Cilento Horizon. Per i miei progetti
          invece uso Next.js con Sanity come CMS: il sito è veloce e fatto su misura, e chi lo gestisce
          cambia testi e immagini da solo. Questo portfolio è in Next.js, su Vercel.
        </p>
        <p className="text-[16px] leading-[1.8] text-ink-soft max-w-[620px]">
          Mi interessa il punto in cui design e codice si toccano. Dove un&apos;animazione ha senso,
          dove la tipografia conta. Passioni: UI craftmanship, 3D web (Three.js, in arrivo),
          performance, tipografia — e qualsiasi cosa sembri impossibile da fare bene nel browser.
        </p>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={inView} variants={reveal} className="px-6 sm:px-16 pb-14">
        <SectionLabel>Esperienza</SectionLabel>
        <div className="flex flex-col gap-7">
          {experience.map((e) => (
            <div key={e.company} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 pb-7 border-b border-hairline last:border-b-0 last:pb-0">
              <div>
                <div className="font-heading font-bold text-[20px]">{e.role} — {e.company}</div>
                <div className="flex flex-wrap gap-2 mt-2.5">
                  {e.tags.map((t) => (
                    <span key={t} className="text-[11px] font-bold border border-ink/25 text-ink-soft rounded-full px-2.5 py-1">{t}</span>
                  ))}
                </div>
              </div>
              <div className="text-[13px] text-ink-soft shrink-0">{e.period}</div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={inView} variants={reveal} className="px-6 sm:px-16 pb-14 grid sm:grid-cols-2 gap-10">
        <div>
          <SectionLabel>Formazione</SectionLabel>
          <div className="flex flex-col gap-4">
            {education.map((e) => (
              <div key={e.degree}>
                <div className="font-semibold text-[15px]">{e.degree}</div>
                <div className="text-[13px] text-ink-soft">{e.school}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionLabel>Certificazioni</SectionLabel>
          <div className="flex flex-col gap-2 mb-5">
            {certifications.completed.map((c) => (
              <div key={c} className="flex items-baseline gap-2 text-[14px] text-ink-soft">
                <span className="text-mint shrink-0">✓</span> {c}
              </div>
            ))}
          </div>
          <div className="text-[11px] font-bold uppercase tracking-[.1em] text-ink-soft/70 mb-2">In corso</div>
          <div className="flex flex-col gap-2">
            {certifications.wip.map((c) => (
              <div key={c} className="flex items-baseline gap-2 text-[14px] text-ink-soft">
                <span className="text-accent-orange shrink-0">→</span> {c}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={inView} variants={reveal} className="px-6 sm:px-16 pb-14">
        <SectionLabel>AI · workflow quotidiano</SectionLabel>
        <div className="flex flex-wrap gap-2.5 mb-2">
          {aiTools.expert.map((t) => (
            <span key={t} className="text-[13px] font-semibold border border-mint text-mint rounded-full px-4 py-2">{t}</span>
          ))}
          {aiTools.ok.map((t) => (
            <span key={t} className="text-[13px] font-semibold border border-accent-violet text-accent-violet rounded-full px-4 py-2">{t}</span>
          ))}
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={inView} variants={reveal} className="px-6 sm:px-16 pb-20">
        <a
          href="/cv/cv_sparano_semplice.pdf"
          download
          className="inline-block bg-ink text-paper font-bold text-[15px] rounded-lg px-6 py-3.5"
        >
          ↓ Scarica il curriculum
        </a>
      </motion.section>

    </div>
  )
}
