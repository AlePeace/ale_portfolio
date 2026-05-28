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

const contacts = [
  { key: "email",   value: "aledev@alessandrosparano.com", href: "mailto:aledev@alessandrosparano.com" },
  { key: "phone",   value: "+39 349 32 02 675",            href: "tel:+393493202675" },
  { key: "github",  value: "github.com/AlePeace",          href: "https://github.com/AlePeace" },
  { key: "web",     value: "alessandrosparano.com",        href: "https://alessandrosparano.com" },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.025, delayChildren: 0.1 } },
}

const rowAnim = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.16, ease: "easeOut" } },
}

let _ln = 1
function useLn() { return _ln++ }

export default function ContactCode() {
  _ln = 1

  const lines = [
    // header
    { type: "line", tokens: [{ t: "// contact/page.jsx", c: T.c }] },
    { type: "empty" },

    // oggetto contatti
    { type: "line", tokens: [{ t: "const", c: T.k }, { t: " ", c: T.tx }, { t: "contact", c: T.cl }, { t: " = {", c: T.tx }] },
    ...contacts.map(c => ({ type: "contact", ...c })),
    { type: "line", tokens: [{ t: "}", c: T.tx }] },
    { type: "empty" },

    // CTA commento
    { type: "line", tokens: [{ t: "// → hai un progetto in mente? partiamo da qui", c: T.c }] },
    { type: "cta" },
    { type: "empty" },

    // export
    { type: "line", tokens: [{ t: "export default function", c: T.k }, { t: " ", c: T.tx }, { t: "Contact", c: T.f }, { t: "() {", c: T.tx }] },
    { type: "line", tokens: [{ t: "  return", c: T.k }, { t: " <", c: T.tx }, { t: "ContactPage", c: T.cl }, { t: " contact={", c: T.tx }, { t: "contact", c: T.f }, { t: "} />", c: T.tx }] },
    { type: "line", tokens: [{ t: "}", c: T.tx }] },
  ]

  return (
    <div className="px-4 md:px-8 pt-10 pb-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col"
      >
        {lines.map((item, i) => {
          const ln = useLn()

          if (item.type === "empty") {
            return (
              <motion.div key={i} variants={rowAnim} className="flex items-baseline min-h-[1.6em]">
                <span className="w-6 md:w-8 text-right text-[12px] text-muted select-none mr-4 md:mr-8 shrink-0 tabular-nums">{ln}</span>
                <span> </span>
              </motion.div>
            )
          }

          if (item.type === "line") {
            return (
              <motion.div key={i} variants={rowAnim} className="flex items-baseline min-h-[1.6em]">
                <span className="w-6 md:w-8 text-right text-[12px] text-muted select-none mr-4 md:mr-8 shrink-0 tabular-nums">{ln}</span>
                <span className="text-[14px] leading-[1.6] whitespace-pre-wrap md:whitespace-pre">
                  {item.tokens.map((tok, j) => <span key={j} className={tok.c}>{tok.t}</span>)}
                </span>
              </motion.div>
            )
          }

          if (item.type === "contact") {
            const pad = Math.max(0, 8 - item.key.length)
            return (
              <motion.div key={i} variants={rowAnim} className="flex items-baseline min-h-[1.6em]">
                <span className="w-6 md:w-8 text-right text-[12px] text-muted select-none mr-4 md:mr-8 shrink-0 tabular-nums">{ln}</span>
                <span className="text-[14px] leading-[1.6] whitespace-pre">
                  <span className="text-prop">{"  " + item.key}</span>
                  <span className="text-text">{": " + " ".repeat(pad) + "'"}</span>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-string underline underline-offset-2 decoration-muted hover:text-accent hover:decoration-accent transition-colors"
                  >
                    {item.value}
                  </a>
                  <span className="text-text">{"',"}</span>
                </span>
              </motion.div>
            )
          }

          if (item.type === "cta") {
            return (
              <motion.div key={i} variants={rowAnim} className="flex items-start my-3">
                <span className="w-6 md:w-8 shrink-0 mr-4 md:mr-8" />
                <Link
                  href="/projects/new"
                  className="group flex items-center gap-3 border border-accent/40 bg-accent/5 rounded px-5 py-3
                    hover:bg-accent/10 hover:border-accent transition-all duration-200"
                >
                  <span className="text-accent font-mono text-[13px]">→</span>
                  <span className="text-text font-mono text-[13px]">inizia un nuovo progetto</span>
                  <span className="text-muted font-mono text-[11px] group-hover:text-accent transition-colors">/projects/new</span>
                </Link>
              </motion.div>
            )
          }

          return null
        })}
      </motion.div>
    </div>
  )
}
