"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const T = {
  c:  "text-comment italic",
  k:  "text-keyword",
  s:  "text-string",
  f:  "text-fn",
  p:  "text-prop",
  n:  "text-number",
  cl: "text-class",
  tx: "text-text",
  a:  "text-accent",
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
}

const lineAnim = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
}

export default function NotFoundCode() {
  const pathname = usePathname()

  const lines = [
    [{ t: "✗  Error [", c: T.n }, { t: "404", c: T.n }, { t: "]: ", c: T.n }, { t: "PageNotImplemented", c: T.cl }],
    null,
    [{ t: "Cannot resolve route: ", c: T.tx }, { t: `'${pathname}'`, c: T.s }],
    [{ t: "This page is under active development.", c: T.tx }],
    null,
    [{ t: "throw", c: T.k }, { t: " ", c: T.tx }, { t: "new", c: T.k }, { t: " ", c: T.tx }, { t: "Error", c: T.cl }, { t: "({", c: T.tx }],
    [{ t: "  code", c: T.p }, { t: ":    ", c: T.tx }, { t: "404", c: T.n }, { t: ",", c: T.tx }],
    [{ t: "  type", c: T.p }, { t: ":   ", c: T.tx }, { t: "'PageNotImplemented'", c: T.s }, { t: ",", c: T.tx }],
    [{ t: "  path", c: T.p }, { t: ":   ", c: T.tx }, { t: `'${pathname}'`, c: T.s }, { t: ",", c: T.tx }],
    [{ t: "  status", c: T.p }, { t: ": ", c: T.tx }, { t: "'under development'", c: T.s }, { t: ",", c: T.tx }],
    [{ t: "  eta", c: T.p }, { t: ":    ", c: T.tx }, { t: "'soon™'", c: T.s }, { t: ",", c: T.tx }],
    [{ t: "})", c: T.tx }],
    null,
    [{ t: "// Stack trace:", c: T.c }],
    [{ t: `//   at app${pathname}/page.jsx:1:1`, c: T.c }],
    [{ t: "//   at IDEShell (components/IDEShell.jsx)", c: T.c }],
    [{ t: "//   at RootLayout (app/layout.jsx)", c: T.c }],
    null,
  ]

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

        {/* Link torna alla home — fuori dal loop per gestire il Link */}
        <motion.div variants={lineAnim} className="flex items-baseline min-h-[1.6em]">
          <span className="w-6 md:w-8 text-right text-[12px] text-muted select-none mr-4 md:mr-8 shrink-0 tabular-nums">
            {lines.length + 1}
          </span>
          <span className="text-[14px] leading-[1.6]">
            <span className="text-comment italic">{"// → "}</span>
            <Link
              href="/"
              className="text-accent italic underline underline-offset-2 decoration-muted hover:decoration-accent transition-colors"
            >
              torna alla home
            </Link>
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
