"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  {
    title: "Design",
    body: "Interfacce chiare e curate, pensate per chi le usa prima ancora che per chi le guarda.",
    bg: "bg-mint",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="18" height="14" rx="2" stroke="#15171b" strokeWidth="1.6" />
        <path d="M2 8H20" stroke="#15171b" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Sviluppo",
    body: "Ogni idea diventa un sito vero: veloce, solido, e facile da mantenere nel tempo.",
    bg: "bg-accent-orange",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M7 5L2 11L7 17M15 5L20 11L15 17" stroke="#15171b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Entrambi, insieme",
    body: "Design e codice seguiti dalla stessa persona: niente si perde nel passaggio tra i due.",
    bg: "bg-accent-violet",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="7" cy="11" r="5" stroke="#15171b" strokeWidth="1.6" />
        <circle cx="14" cy="11" r="5" stroke="#15171b" strokeWidth="1.6" />
      </svg>
    ),
  },
]

const skills = [
  { label: "Next.js", color: "text-mint border-mint" },
  { label: "React", color: "text-mint border-mint" },
  { label: "Sanity CMS", color: "text-accent-teal border-accent-teal" },
  { label: "Tailwind CSS", color: "text-accent-teal border-accent-teal" },
  { label: "Framer Motion", color: "text-accent-orange border-accent-orange" },
  { label: "Three.js — in arrivo", color: "text-accent-violet border-accent-violet" },
  { label: "Figma", color: "text-accent-violet border-accent-violet" },
]

const projects = [
  { n: "01", name: "Mosic", tags: ["Progetto ILAS", "Mockup"] },
  { n: "02", name: "SoundPop Radio", tags: ["Progetto ILAS", "Live"] },
  { n: "03", name: "QuantumCrypto", tags: ["Progetto ILAS", "Live"] },
  { n: "04", name: "Portfolio v1", tags: ["Personale", "Legacy"] },
  { n: "05", name: "Studio Osteopata", tags: ["Collaborazione", "Live"] },
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}
const inView = { once: true, amount: 0.2 }

export default function SimpleHome() {
  return (
    <div>

      <motion.section initial="hidden" whileInView="visible" viewport={inView} variants={reveal} className="px-6 sm:px-16 pt-8 pb-16">
        <span className="inline-flex items-center bg-mint text-[#15171b] text-[12px] font-bold uppercase tracking-[.08em] rounded-full px-4 py-1.5 mb-6">
          Creative Developer · QCore Agency · Napoli
        </span>
        <h1 className="font-heading font-bold text-[36px] sm:text-[52px] leading-[1.1] max-w-[780px] mb-5">
          Trasformo idee in interfacce che le persone capiscono al primo sguardo.
        </h1>
        <p className="text-[16px] sm:text-[18px] leading-relaxed text-ink-soft max-w-[580px] mb-9">
          Vengo dal design, oggi scrivo codice. Costruisco siti e prodotti digitali chiari,
          veloci e curati nei dettagli — dal wireframe alla riga di codice.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/projects" className="bg-ink text-paper font-bold text-[15px] rounded-lg px-6 py-3.5">
            Guarda i progetti →
          </Link>
          <a href="mailto:aledev@alessandrosparano.com" className="border border-ink text-ink font-bold text-[15px] rounded-lg px-6 py-3.5">
            Scrivimi ✉
          </a>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={inView} variants={reveal} className="px-6 sm:px-16 pb-20 grid sm:grid-cols-3 gap-5">
        {services.map((s) => (
          <div key={s.title} className="bg-panel rounded-2xl p-7">
            <div className={`w-11 h-11 rounded-[10px] flex items-center justify-center mb-5 ${s.bg}`}>
              {s.icon}
            </div>
            <h3 className="font-heading font-bold text-[19px] mb-2.5">{s.title}</h3>
            <p className="text-[14px] leading-relaxed text-ink-soft">{s.body}</p>
          </div>
        ))}
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={inView} variants={reveal} className="px-6 sm:px-16 pb-16 grid sm:grid-cols-[280px_1fr] gap-10 sm:gap-16 items-center">
        <div className="flex flex-col items-center sm:items-start">
          <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px]">
            <div className="absolute -left-4 -bottom-4 w-full h-full rounded-full border-[12px] border-mint" />
            <div className="relative w-full h-full">
              <Image src="/cv/profilo-pic.png" alt="Alessandro Sparano" fill className="object-contain" />
            </div>
          </div>
        </div>
        <div>
          <div className="text-[12px] font-bold uppercase tracking-[.14em] text-accent-teal mb-4">Chi sono</div>
          <p className="text-[16px] leading-[1.8] text-ink-soft mb-4">
            Vengo dal design — triennale e magistrale alla Vanvitelli, poi ILAS Academy (110/110 con lode),
            dove ho scoperto che la parte che amavo di più era scrivere codice.
          </p>
          <p className="text-[16px] leading-[1.8] text-ink-soft mb-5">
            Oggi lavoro in QCore Agency, soprattutto su WordPress con tema custom. Per i miei progetti uso Next.js e Sanity: veloci, fatti su
            misura, e con i contenuti che il cliente può cambiare da solo.
          </p>
          <Link href="/about" className="font-bold text-accent-teal hover:opacity-75 transition-opacity">
            Scopri di più su di me →
          </Link>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={inView} variants={reveal} className="px-6 sm:px-16 pb-20">
        <div className="text-[12px] font-bold uppercase tracking-[.14em] text-accent-teal mb-4">Cosa uso</div>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((s) => (
            <span key={s.label} className={`text-[13px] font-semibold border rounded-full px-4 py-2 ${s.color}`}>
              {s.label}
            </span>
          ))}
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={inView} variants={reveal} className="px-6 sm:px-16 pb-20">
        <div className="text-[12px] font-bold uppercase tracking-[.14em] text-accent-teal mb-4">Progetti</div>
        <div className="border-t border-hairline">
          {projects.map((p) => (
            <Link
              key={p.n}
              href="/projects"
              className="flex items-baseline justify-between py-7 border-b border-hairline group"
            >
              <div>
                <div className="font-heading font-bold text-[26px] sm:text-[38px] mb-2 group-hover:opacity-70 transition-opacity">
                  {p.name}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] font-bold border border-ink/30 text-ink-soft rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="font-heading font-bold text-[22px] sm:text-[28px] opacity-20 shrink-0">{p.n}</div>
            </Link>
          ))}
        </div>
      </motion.section>

    </div>
  )
}
