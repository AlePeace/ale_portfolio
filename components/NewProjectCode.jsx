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

// file tree entries: indent = livello, folder = true/false
const tree = [
  { label: "// scegli la struttura per il tuo progetto →", type: "comment" },
  null,
  { label: "next-js-project/",     indent: 0, folder: true },
  { label: "app/",                 indent: 1, folder: true },
  { label: "layout.jsx",           indent: 2, folder: false },
  { label: "page.jsx",             indent: 2, folder: false },
  { label: "globals.css",          indent: 2, folder: false },
  { label: "components/",          indent: 1, folder: true },
  { label: "public/",              indent: 1, folder: true },
  { label: "next.config.js",       indent: 1, folder: false },
  { label: "tailwind.config.js",   indent: 1, folder: false },
  { label: "package.json",         indent: 1, folder: false },
  null,
  { label: "wordpress-project/",   indent: 0, folder: true },
  { label: "wp-content/",          indent: 1, folder: true },
  { label: "themes/",              indent: 2, folder: true },
  { label: "custom-theme/",        indent: 3, folder: true },
  { label: "style.css",            indent: 4, folder: false },
  { label: "functions.php",        indent: 4, folder: false },
  { label: "index.php",            indent: 4, folder: false },
  { label: "plugins/",             indent: 2, folder: true },
  { label: "wp-config.php",        indent: 1, folder: false },
  { label: ".htaccess",            indent: 1, folder: false },
  null,
  { label: "// → dicci che struttura vuoi, partiamo da lì", type: "comment" },
]

const INDENT = 16 // px per livello

function treeColor(item) {
  if (item.type === "comment") return T.c
  if (item.folder) return T.cl
  if (item.label.endsWith(".jsx") || item.label.endsWith(".js")) return T.fn
  if (item.label.endsWith(".css")) return T.s
  if (item.label.endsWith(".php")) return T.keyword
  return T.tx
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.02, delayChildren: 0.1 } },
}

const rowAnim = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.16, ease: "easeOut" } },
}

export default function NewProjectCode() {
  let ln = 1

  return (
    <div className="px-4 md:px-8 pt-10 pb-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col"
      >
        {tree.map((item, i) => {
          if (item === null) {
            const num = ln++
            return (
              <motion.div key={i} variants={rowAnim} className="flex items-baseline min-h-[1.6em]">
                <span className="w-6 md:w-8 text-right text-[12px] text-muted select-none mr-4 md:mr-8 shrink-0 tabular-nums">
                  {num}
                </span>
                <span> </span>
              </motion.div>
            )
          }

          const num = ln++
          const color = treeColor(item)
          const pad = item.indent ? item.indent * INDENT : 0
          const prefix = item.folder ? "▸ " : "  "

          return (
            <motion.div key={i} variants={rowAnim} className="flex items-baseline min-h-[1.6em]">
              <span className="w-6 md:w-8 text-right text-[12px] text-muted select-none mr-4 md:mr-8 shrink-0 tabular-nums">
                {num}
              </span>
              <span
                className={`text-[14px] leading-[1.6] font-mono ${color}`}
                style={{ paddingLeft: pad }}
              >
                {item.type === "comment" ? item.label : `${prefix}${item.label}`}
              </span>
            </motion.div>
          )
        })}

        {/* CTA line */}
        <motion.div variants={rowAnim} className="flex items-baseline min-h-[1.6em] mt-6">
          <span className="w-6 md:w-8 shrink-0 mr-4 md:mr-8" />
          <span className="text-[14px] leading-[1.6]">
            <span className="text-keyword">{"<"}</span>
            <span className="text-class">ContactCTA</span>
            <span className="text-prop">{" email"}</span>
            <span className="text-text">{"="}</span>
            <span className="text-string">{'"aledev@alessandrosparano.com"'}</span>
            <span className="text-keyword">{" />"}</span>
          </span>
        </motion.div>

        {/* CTA box */}
        <motion.div variants={rowAnim} className="flex items-start mt-4">
          <span className="w-6 md:w-8 shrink-0 mr-4 md:mr-8" />
          <div className="border border-accent/30 bg-accent/5 rounded px-5 py-4 max-w-md">
            <p className="text-text text-[13px] leading-relaxed mb-3">
              Hai un progetto in mente?<br />
              Dimmi che struttura vuoi usare e partiamo da lì.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="mailto:aledev@alessandrosparano.com"
                className="text-[12px] text-accent border border-accent/40 rounded px-3 py-1
                  hover:bg-accent hover:text-bg transition-colors duration-200 font-mono"
              >
                ✉ scrivimi
              </a>
              <Link
                href="/contact"
                className="text-[12px] text-muted border border-border rounded px-3 py-1
                  hover:text-text hover:border-muted transition-colors duration-200 font-mono"
              >
                → contact page
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
