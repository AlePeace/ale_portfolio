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
}

// Rappresentazione sintattica del page.jsx — il codice visualizzato È il codice reale
const lines = [
  [{ t: "/**", c: T.c }],
  [{ t: " * ", c: T.c }, { t: "@author", c: T.k }, { t: "  Alessandro Sparano", c: T.c }],
  [{ t: " * ", c: T.c }, { t: "@role", c: T.k }, { t: "    Frontend Developer · Web Agency", c: T.c }],
  [{ t: " * ", c: T.c }, { t: "@returns", c: T.k }, { t: " un dev che trasforma idee in esperienze web", c: T.tx }],
  [{ t: " */", c: T.c }],
  null,
  [{ t: "import", c: T.k }, { t: " { ", c: T.tx }, { t: "fetchSkills", c: T.f, href: "/skills" }, { t: " } ", c: T.tx }, { t: "from", c: T.k }, { t: " ", c: T.tx }, { t: "'@/utils/fetchSkills'", c: T.s }],
  [{ t: "import", c: T.k }, { t: " ", c: T.tx }, { t: "Hero", c: T.cl }, { t: " ", c: T.tx }, { t: "from", c: T.k }, { t: " ", c: T.tx }, { t: "'@/components/Hero'", c: T.s }],
  null,
  [{ t: "const", c: T.k }, { t: " skills = ", c: T.tx }, { t: "await", c: T.k }, { t: " ", c: T.tx }, { t: "fetchSkills", c: T.f, href: "/skills" }, { t: "({", c: T.tx }],
  [{ t: "  ", c: T.tx }, { t: "stack", c: T.p }, { t: ":   [ ", c: T.tx }, { t: "'Next.js'", c: T.s }, { t: ", ", c: T.tx }, { t: "'React'", c: T.s }, { t: ", ", c: T.tx }, { t: "'Sanity'", c: T.s }, { t: ", ", c: T.tx }, { t: "'Vercel'", c: T.s }, { t: " ],", c: T.tx }],
  [{ t: "  ", c: T.tx }, { t: "passion", c: T.p }, { t: ": [ ", c: T.tx }, { t: "'UI craftmanship'", c: T.s }, { t: ", ", c: T.tx }, { t: "'clean code'", c: T.s }, { t: " ],", c: T.tx }],
  [{ t: "  ", c: T.tx }, { t: "agency", c: T.p }, { t: ":  ", c: T.tx }, { t: "true", c: T.k }, { t: ",", c: T.tx }],
  [{ t: "})", c: T.tx }],
  null,
  [{ t: "export default function", c: T.k }, { t: " ", c: T.tx }, { t: "Home", c: T.f }, { t: "() {", c: T.tx }],
  [{ t: "  ", c: T.tx }, { t: "return", c: T.k }, { t: " (", c: T.tx }],
  [{ t: "    <", c: T.tx }, { t: "Hero", c: T.cl }, { t: " ", c: T.tx }, { t: "name", c: T.p }, { t: '="Alessandro Sparano"', c: T.s }, { t: " ", c: T.tx }, { t: "skills", c: T.p }, { t: "={", c: T.tx }, { t: "skills", c: T.f, href: "/skills" }, { t: "} />", c: T.tx }],
  [{ t: "  )", c: T.tx }],
  [{ t: "}", c: T.tx }],
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.15 } },
}

const lineAnim = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
}

export default function Hero({ name, skills }) {
  return (
    <div className="px-4 md:px-8 pt-10">
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
            <span className="text-[14px] leading-[1.6] whitespace-pre-wrap md:whitespace-pre break-words md:break-normal">
              {tokens
                ? tokens.map((token, j) =>
                    token.href ? (
                      <Link
                        key={j}
                        href={token.href}
                        className={`${token.c} underline underline-offset-2 decoration-muted hover:text-accent transition-colors`}
                      >
                        {token.t}
                      </Link>
                    ) : (
                      <span key={j} className={token.c}>{token.t}</span>
                    )
                  )
                : " "
              }
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
