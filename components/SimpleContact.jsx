"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const contacts = [
  { label: "Email", value: "aledev@alessandrosparano.com", href: "mailto:aledev@alessandrosparano.com" },
  { label: "Telefono", value: "+39 349 32 02 675", href: "tel:+393493202675" },
  { label: "GitHub", value: "github.com/AlePeace", href: "https://github.com/AlePeace" },
  { label: "Web", value: "alessandrosparano.com", href: "https://alessandrosparano.com" },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
}

export default function SimpleContact() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="px-6 sm:px-16 pt-8 pb-20"
    >
      <motion.div variants={item} className="mb-12">
        <div className="text-[12px] font-bold uppercase tracking-[.14em] text-accent-teal mb-4">Contatti</div>
        <h1 className="font-heading font-bold text-[30px] sm:text-[40px] leading-[1.15] max-w-[520px] mb-5">
          Hai un progetto in mente? Parliamone.
        </h1>
        <p className="text-[16px] leading-relaxed text-ink-soft max-w-[480px]">
          Scrivimi o chiamami: ti rispondo io, senza intermediari.
        </p>
      </motion.div>

      <motion.div variants={item} className="flex flex-col max-w-[440px] mb-10">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between py-4 border-b border-hairline hover:opacity-70 transition-opacity"
          >
            <span className="text-[12px] font-bold uppercase tracking-[.1em] text-ink-soft/70">{c.label}</span>
            <span className="font-semibold text-[15px]">{c.value}</span>
          </a>
        ))}
      </motion.div>

      <motion.div variants={item}>
        <Link
          href="/projects/new"
          className="inline-flex items-center gap-2 bg-ink text-paper font-bold text-[15px] rounded-lg px-6 py-3.5"
        >
          → Inizia un nuovo progetto
        </Link>
      </motion.div>
    </motion.div>
  )
}
