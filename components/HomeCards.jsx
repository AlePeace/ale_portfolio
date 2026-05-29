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
  tx: "text-text",
  a:  "text-accent",
}

const cards = [
  {
    filename: "about.jsx",
    path:     "/about",
    dot:      "text-fn",
    preview: [
      [{ t: "const ", c: T.k }, { t: "Alessandro", c: T.cl }, { t: " = {", c: T.tx }],
      [{ t: "  role", c: T.p }, { t: ": ", c: T.tx }, { t: "'Creative Developer'", c: T.s }],
      [{ t: "  agency", c: T.p }, { t: ": ", c: T.tx }, { t: "'QCore Agency'", c: T.s }],
      [{ t: "  location", c: T.p }, { t: ": ", c: T.tx }, { t: "'Napoli'", c: T.s }],
    ],
  },
  {
    filename: "projects.jsx",
    path:     "/projects",
    dot:      "text-fn",
    preview: [
      [{ t: "const ", c: T.k }, { t: "projects", c: T.cl }, { t: " = [", c: T.tx }],
      [{ t: "  { name", c: T.p }, { t: ": ", c: T.tx }, { t: "'Mosic'", c: T.s }, { t: ", ", c: T.tx }],
      [{ t: "    status", c: T.p }, { t: ": ", c: T.tx }, { t: "'mockup'", c: T.k }, { t: " }," , c: T.tx }],
      [{ t: "  { name", c: T.p }, { t: ": ", c: T.tx }, { t: "'SoundPop'", c: T.s }, { t: " },", c: T.tx }],
    ],
  },
  {
    filename: "fetchSkills.js",
    path:     "/skills",
    dot:      "text-class",
    preview: [
      [{ t: "export ", c: T.k }, { t: "async ", c: T.k }, { t: "function", c: T.k }],
      [{ t: "  fetchSkills", c: T.f }, { t: "({", c: T.tx }],
      [{ t: "    stack", c: T.p }, { t: ", ", c: T.tx }, { t: "passion", c: T.p }, { t: ", ", c: T.tx }, { t: "agency", c: T.p }],
      [{ t: "  }) { ", c: T.tx }, { t: "return", c: T.k }, { t: " {...}", c: T.tx }],
    ],
  },
  {
    filename: "curriculum.pdf",
    download: "/cv/cv_sparano.pdf",
    dot:      "text-string",
    preview: [
      [{ t: "// Alessandro Sparano", c: T.c }],
      [{ t: "type", c: T.k }, { t: ": ", c: T.tx }, { t: "'curriculum vitae'", c: T.s }],
      [{ t: "format", c: T.p }, { t: ": ", c: T.tx }, { t: "'PDF'", c: T.cl }],
      [{ t: "→ ", c: T.a }, { t: "download", c: T.f }],
    ],
  },
  {
    filename: "contact.jsx",
    path:     "/contact",
    dot:      "text-fn",
    preview: [
      [{ t: "const ", c: T.k }, { t: "contact", c: T.cl }, { t: " = {", c: T.tx }],
      [{ t: "  email", c: T.p }, { t: ": ", c: T.tx }, { t: "'aledev@...'", c: T.s }],
      [{ t: "  github", c: T.p }, { t: ": ", c: T.tx }, { t: "'AlePeace'", c: T.s }],
      [{ t: "  // → ", c: T.c }, { t: "nuovo progetto", c: T.a }],
    ],
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
}

export default function HomeCards() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="px-4 pb-8 pt-6 md:pt-10 md:px-4 grid grid-cols-2 md:grid-cols-1 gap-3"
    >
      {cards.map((card) => {
        const inner = (
          <>
            <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-titlebar">
              <span className={`text-[9px] ${card.dot}`}>●</span>
              <span className="text-[11px] text-muted font-mono group-hover:text-text transition-colors">
                {card.filename}
              </span>
              <span className="ml-auto text-[10px] text-muted/40 font-mono group-hover:text-accent transition-colors">
                →
              </span>
            </div>
            <div className="px-3 py-2.5 flex flex-col gap-0.5">
              {card.preview.map((tokens, i) => (
                <div key={i} className="flex text-[11px] leading-[1.7] font-mono whitespace-pre overflow-hidden">
                  <span className="text-muted/40 select-none mr-3 tabular-nums text-[10px]">{i + 1}</span>
                  <span className="truncate">
                    {tokens.map((tok, j) => (
                      <span key={j} className={tok.c}>{tok.t}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </>
        )
        const cls = "group flex flex-col border border-border rounded overflow-hidden hover:border-accent transition-colors duration-200 bg-surface"
        return (
          <motion.div key={card.filename} variants={cardAnim}>
            {card.download ? (
              <a href={card.download} download className={cls}>{inner}</a>
            ) : (
              <Link href={card.path} className={cls}>{inner}</Link>
            )}
          </motion.div>
        )
      })}
    </motion.div>
  )
}
