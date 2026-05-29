"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

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

const projects = [
  {
    id:      "mosic",
    label:   "01 — Mosic",
    name:    "Mosic",
    type:    "ILAS project",
    desc:    "App di streaming musicale — concept UI/UX. Mockup ad alta fedeltà, non deployato.",
    stack:   ["Figma", "UI Design", "UX"],
    url:     null,
    preview: "/previews/mosic.png",
    status:  "mockup",
  },
  {
    id:      "soundpopradio",
    label:   "02 — SoundPop Radio",
    name:    "SoundPop Radio",
    type:    "ILAS project",
    desc:    "Radio web con player custom e visualizzazione tracce in tempo reale.",
    stack:   ["HTML", "CSS", "JavaScript"],
    url:     "https://legacy.alessandrosparano.com/soundpopradio",
    preview: "/previews/soundpopradio.png",
    status:  "live",
  },
  {
    id:      "quantumcrypto",
    label:   "03 — QuantumCrypto",
    name:    "QuantumCrypto",
    type:    "ILAS project",
    desc:    "Dashboard crypto con prezzi live e visualizzazione dati di mercato.",
    stack:   ["HTML", "CSS", "JavaScript"],
    url:     "https://legacy.alessandrosparano.com/quantumcrypto",
    preview: "/previews/quantumcrypto.png",
    status:  "live",
  },
  {
    id:      "portfolio",
    label:   "04 — Portfolio v1",
    name:    "Portfolio v1",
    type:    "personal project",
    desc:    "Primo portfolio personale. Tema WordPress custom, sviluppato durante ILAS.",
    stack:   ["WordPress", "PHP", "CSS"],
    url:     "https://legacy.alessandrosparano.com/portfolio",
    preview: "/previews/portfolio-v1.png",
    status:  "legacy",
  },
  {
    id:      "osteopata",
    label:   "05 — Studio Osteopata",
    name:    "Studio Osteopata",
    type:    "collaboration",
    desc:    "Sito per studio di osteopatia. Progetto in collaborazione con:",
    collab:  { name: "Francesco Li Petri", url: "https://francescolipetri.it/" },
    stack:   ["WordPress", "PHP", "CSS", "Elementor"],
    url:     "https://elisasaviano.it/",
    preview: "/previews/osteopata.png",
    status:  "live",
  },
]

// ── helpers ──────────────────────────────────────────────────────

function LineRow({ num, tokens }) {
  return (
    <div className="flex items-baseline min-h-[1.6em]">
      <span className="w-6 md:w-8 text-right text-[12px] text-muted select-none mr-4 md:mr-8 shrink-0 tabular-nums">
        {num}
      </span>
      <span className="text-[14px] leading-[1.6] whitespace-pre-wrap md:whitespace-pre break-words md:break-normal">
        {tokens.map((tok, j) => (
          <span key={j} className={tok.c}>{tok.t}</span>
        ))}
      </span>
    </div>
  )
}

function EmptyRow({ num }) {
  return (
    <div className="flex items-baseline min-h-[1.6em]">
      <span className="w-6 md:w-8 text-right text-[12px] text-muted select-none mr-4 md:mr-8 shrink-0 tabular-nums">
        {num}
      </span>
      <span> </span>
    </div>
  )
}

function PreviewRow({ project }) {
  const inner = (
    <div className={`relative w-full aspect-video bg-surface border rounded overflow-hidden transition-colors duration-200
      ${project.url ? "border-border group-hover:border-accent" : "border-border/50"}`}>
      <Image
        src={project.preview}
        alt={project.name}
        fill
        className="object-cover grayscale opacity-70 transition-all duration-300"
        onError={(e) => { e.currentTarget.style.display = "none" }}
      />
      {/* label sempre visibile — bg nero, testo giallo */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/90 px-3 py-1.5 flex items-center justify-between">
        <span className="text-class text-[11px] font-mono">{project.label}</span>
        {!project.url && (
          <span className="text-[10px] font-mono text-muted">mockup</span>
        )}
      </div>
    </div>
  )

  return (
    <div className="flex items-start min-h-[1.6em] my-1">
      <span className="w-6 md:w-8 shrink-0 mr-4 md:mr-8" />
      {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full max-w-xl group">
          {inner}
        </a>
      ) : (
        <div className="w-full max-w-xl">{inner}</div>
      )}
    </div>
  )
}

// ── build line list ───────────────────────────────────────────────

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.015, delayChildren: 0.1 } },
}

const rowAnim = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.16, ease: "easeOut" } },
}

export default function ProjectsCode() {
  // build rows: mix of line rows, empty rows, preview rows
  const rows = []
  let ln = 1

  const push = (el) => rows.push({ key: `row-${rows.length}`, el })

  // header
  push(<LineRow num={ln++} tokens={[{ t: "// projects/page.jsx", c: T.c }]} />)
  push(<EmptyRow num={ln++} />)
  push(<LineRow num={ln++} tokens={[{ t: "const", c: T.k }, { t: " projects = [", c: T.tx }]} />)
  push(<EmptyRow num={ln++} />)

  projects.forEach((p) => {
    // section comment
    push(<LineRow num={ln++} tokens={[{ t: `  // ── ${p.label} `, c: T.c }]} />)

    // preview image (no line number — visual break)
    push(<PreviewRow project={p} />)

    // object open
    push(<LineRow num={ln++} tokens={[{ t: "  {", c: T.tx }]} />)
    push(<LineRow num={ln++} tokens={[{ t: "    name", c: T.p }, { t: ":    ", c: T.tx }, { t: `'${p.name}'`, c: T.s }, { t: ",", c: T.tx }]} />)
    push(<LineRow num={ln++} tokens={[{ t: "    type", c: T.p }, { t: ":    ", c: T.tx }, { t: `'${p.type}'`, c: T.s }, { t: ",", c: T.tx }]} />)
    push(<LineRow num={ln++} tokens={[{ t: "    desc", c: T.p }, { t: ":    ", c: T.tx }, { t: `'${p.desc}'`, c: T.s }, { t: ",", c: T.tx }]} />)
    if (p.collab) {
      push(
        <div key={`collab-${p.id}`} className="flex items-baseline min-h-[1.6em]">
          <span className="w-6 md:w-8 text-right text-[12px] text-muted select-none mr-4 md:mr-8 shrink-0 tabular-nums">
            {ln++}
          </span>
          <span className="text-[14px] leading-[1.6] whitespace-pre">
            <span className="text-prop">{"    collab"}</span>
            <span className="text-text">{":  '"}</span>
            <a
              href={p.collab.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-string underline underline-offset-2 decoration-muted hover:text-accent hover:decoration-accent transition-colors"
            >
              {p.collab.name}
            </a>
            <span className="text-text">{"',"}</span>
          </span>
        </div>
      )
    }
    push(<LineRow num={ln++} tokens={[
      { t: "    stack", c: T.p }, { t: ":   [ ", c: T.tx },
      ...p.stack.flatMap((s, i) => [
        { t: `'${s}'`, c: T.s },
        i < p.stack.length - 1 ? { t: ", ", c: T.tx } : { t: "", c: T.tx },
      ]),
      { t: " ],", c: T.tx },
    ]} />)
    push(<LineRow num={ln++} tokens={[
      { t: "    url", c: T.p }, { t: ":     ", c: T.tx }, { t: `'${p.url}'`, c: T.s }, { t: ",", c: T.tx },
    ]} />)
    push(<LineRow num={ln++} tokens={[
      { t: "    status", c: T.p }, { t: ":  ", c: T.tx },
      { t: `'${p.status}'`, c: p.status === "live" ? "text-accent" : p.status === "mockup" ? "text-keyword" : "text-class" },
      { t: ",", c: T.tx },
    ]} />)
    push(<LineRow num={ln++} tokens={[{ t: "  },", c: T.tx }]} />)
    push(<EmptyRow num={ln++} />)
  })

  push(<LineRow num={ln++} tokens={[{ t: "]", c: T.tx }]} />)
  push(<EmptyRow num={ln++} />)

  return (
    <div className="px-4 md:px-8 pt-10 pb-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col"
      >
        {rows.map((r) => (
          <motion.div key={r.key} variants={rowAnim}>
            {r.el}
          </motion.div>
        ))}

        {/* New Project CTA */}
        <motion.div variants={rowAnim} className="flex items-baseline min-h-[1.6em]">
          <span className="w-6 md:w-8 text-right text-[12px] text-muted select-none mr-4 md:mr-8 shrink-0 tabular-nums">
            {ln++}
          </span>
          <span className="text-[14px] leading-[1.6]">
            <span className="text-comment italic">{"// ── "}</span>
            <Link
              href="/projects/new"
              className="text-accent underline underline-offset-2 decoration-muted hover:decoration-accent transition-colors"
            >
              new project
            </Link>
            <span className="text-comment italic">{" ── hai un progetto in mente?"}</span>
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
