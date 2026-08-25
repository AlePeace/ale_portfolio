"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    n: "01",
    name: "Mosic",
    type: "Progetto ILAS",
    status: "Mockup",
    desc: "App di streaming musicale — concept UI/UX. Mockup ad alta fedeltà, non deployato.",
    stack: ["Figma", "UI Design", "UX"],
    url: null,
    preview: "/previews/mosic.png",
  },
  {
    n: "02",
    name: "SoundPop Radio",
    type: "Progetto ILAS",
    status: "Live",
    desc: "Radio web con player custom e visualizzazione tracce in tempo reale.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://legacy.alessandrosparano.com/soundpopradio",
    preview: "/previews/soundpopradio.png",
  },
  {
    n: "03",
    name: "QuantumCrypto",
    type: "Progetto ILAS",
    status: "Live",
    desc: "Dashboard crypto con prezzi live e visualizzazione dati di mercato.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://legacy.alessandrosparano.com/quantumcrypto",
    preview: "/previews/quantumcrypto.png",
  },
  {
    n: "04",
    name: "Portfolio v1",
    type: "Personale",
    status: "Legacy",
    desc: "Primo portfolio personale. Tema WordPress custom, sviluppato durante ILAS.",
    stack: ["WordPress", "PHP", "CSS"],
    url: "https://legacy.alessandrosparano.com/portfolio",
    preview: "/previews/portfolio-v1.png",
  },
  {
    n: "05",
    name: "Studio Osteopata",
    type: "Collaborazione",
    status: "Live",
    desc: "Sito per studio di osteopatia, in collaborazione con Francesco Li Petri.",
    stack: ["WordPress", "PHP", "CSS", "Elementor"],
    url: "https://elisasaviano.it/",
    preview: "/previews/osteopata.png",
  },
]

const statusColor = {
  Live: "border-mint text-mint",
  Mockup: "border-accent-violet text-accent-violet",
  Legacy: "border-ink/30 text-ink-soft",
}

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}
const inView = { once: true, amount: 0.2 }

export default function SimpleProjects() {
  return (
    <div>

      <motion.section initial="hidden" whileInView="visible" viewport={inView} variants={reveal} className="px-6 sm:px-16 pt-8 pb-4">
        <div className="text-[12px] font-bold uppercase tracking-[.14em] text-accent-teal mb-4">Progetti</div>
        <h1 className="font-heading font-bold text-[30px] sm:text-[40px] leading-[1.15] max-w-[560px]">
          Una selezione di lavori, tra studio e collaborazioni vere.
        </h1>
      </motion.section>

      <div className="px-6 sm:px-16 pb-16">
        {projects.map((p) => {
          const card = (
            <div className="grid sm:grid-cols-[260px_1fr] gap-6 py-9 border-b border-hairline items-center">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-panel">
                <Image src={p.preview} alt={p.name} fill className="object-cover" />
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-heading font-bold text-[26px] sm:text-[32px]">{p.name}</span>
                  <span className="font-heading font-bold text-[15px] opacity-25">{p.n}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-[11px] font-bold border border-ink/25 text-ink-soft rounded-full px-2.5 py-1">{p.type}</span>
                  <span className={`text-[11px] font-bold border rounded-full px-2.5 py-1 ${statusColor[p.status]}`}>{p.status}</span>
                </div>
                <p className="text-[14px] leading-relaxed text-ink-soft mb-3 max-w-[480px]">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] font-semibold text-ink-soft">#{s}</span>
                  ))}
                </div>
              </div>
            </div>
          )

          return p.url ? (
            <motion.a
              key={p.n}
              initial="hidden"
              whileInView="visible"
              viewport={inView}
              variants={reveal}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              {card}
            </motion.a>
          ) : (
            <motion.div key={p.n} initial="hidden" whileInView="visible" viewport={inView} variants={reveal}>{card}</motion.div>
          )
        })}
      </div>

      <motion.section initial="hidden" whileInView="visible" viewport={inView} variants={reveal} className="px-6 sm:px-16 pb-20">
        <Link
          href="/projects/new"
          className="inline-flex items-center gap-2 bg-ink text-paper font-bold text-[15px] rounded-lg px-6 py-3.5"
        >
          Hai un progetto in mente? →
        </Link>
      </motion.section>

    </div>
  )
}
