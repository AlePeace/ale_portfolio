"use client"

import { motion } from "framer-motion"

const starters = [
  {
    name: "Next.js + Sanity",
    color: "border-mint text-mint",
    bg: "bg-mint",
    desc: "Il modo in cui lavoro oggi. Sito veloce e fatto su misura, e i contenuti (testi, foto, progetti) li modifichi tu da un pannello semplice, senza toccare codice.",
    includes: ["Next.js + Sanity CMS", "Pannello contenuti tuo", "Animazioni", "Deploy su Vercel"],
  },
  {
    name: "WordPress",
    note: "Alternativa",
    color: "border-accent-teal text-accent-teal",
    bg: "bg-accent-teal",
    desc: "Se hai già un sito WordPress o ti serve proprio quello, lo faccio volentieri: tema custom, gestibile in autonomia.",
    includes: ["Tema custom", "Pannello di gestione", "Plugin su misura", "Hosting tradizionale"],
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
}

export default function SimpleNewProject() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="px-6 sm:px-16 pt-8 pb-20"
    >
      <motion.div variants={item} className="mb-12">
        <div className="text-[12px] font-bold uppercase tracking-[.14em] text-accent-teal mb-4">Nuovo progetto</div>
        <h1 className="font-heading font-bold text-[30px] sm:text-[40px] leading-[1.15] max-w-[560px]">
          Scegli da dove partire — decidiamo il resto insieme.
        </h1>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5 mb-14">
        {starters.map((s) => (
          <motion.div key={s.name} variants={item} className="bg-panel rounded-2xl p-7">
            <span className={`inline-block text-[12px] font-bold uppercase tracking-[.08em] border rounded-full px-3.5 py-1.5 mb-5 ${s.color}`}>
              {s.name}
            </span>
            {s.note && <span className="ml-2 text-[12px] text-ink-soft">{s.note}</span>}
            <p className="text-[14px] leading-relaxed text-ink-soft mb-5">{s.desc}</p>
            <div className="flex flex-col gap-2">
              {s.includes.map((i) => (
                <div key={i} className="flex items-center gap-2 text-[13px] text-ink-soft">
                  <span className={`w-1.5 h-1.5 rounded-full ${s.bg}`} />
                  {i}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={item} className="max-w-[480px]">
        <p className="text-[16px] leading-relaxed text-ink-soft mb-6">
          Non sai quale scegliere? Nessun problema — dimmi che progetto hai in mente e partiamo da lì.
        </p>
        <a
          href="mailto:aledev@alessandrosparano.com"
          className="inline-flex items-center gap-2 bg-ink text-paper font-bold text-[15px] rounded-lg px-6 py-3.5"
        >
          ✉ Scrivimi
        </a>
      </motion.div>
    </motion.div>
  )
}
