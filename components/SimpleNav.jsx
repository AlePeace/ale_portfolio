"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import ThemeToggle from "@/components/ThemeToggle"

function switchToDev() {
  document.cookie = "site-mode=dev; path=/; max-age=31536000"
  window.location.reload()
}

const links = [
  { href: "/about", label: "Chi sono" },
  { href: "/projects", label: "Progetti" },
  { href: "/contact", label: "Contatti" },
]

export default function SimpleNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative">
      <div className="flex items-center justify-between px-6 sm:px-16 py-7">
        <Link href="/" className="relative inline-block font-heading font-bold text-[17px] sm:text-[19px] tracking-wide text-ink">
          <span className="relative z-10">alessandrosparano</span>
          <span
            className="absolute left-[-3px] right-[-4px] bottom-[2px] h-[8px] sm:h-[9px] z-0"
            style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-pink))" }}
          />
        </Link>

        <nav className="hidden sm:flex items-center gap-9 text-[14px] font-semibold text-ink">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:opacity-70 transition-opacity">{l.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={switchToDev}
            className="text-[12.5px] font-bold bg-mint text-[#15171b] rounded-lg px-3 sm:px-3.5 py-2 hover:opacity-85 transition-opacity"
          >
            <span className="sm:hidden">Dev</span>
            <span className="hidden sm:inline">→ modalità dev</span>
          </button>
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Apri menu"
            aria-expanded={menuOpen}
            className="sm:hidden w-9 h-9 flex items-center justify-center rounded-full border border-hairline text-ink shrink-0"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              {menuOpen ? (
                <path d="M1 1L15 11M15 1L1 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M0 1H16M0 6H16M0 11H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden border-t border-hairline"
          >
            <div className="flex flex-col px-6 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-[15px] font-semibold text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
