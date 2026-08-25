"use client"

import { motion } from "framer-motion"

export default function SimpleFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-footer-bg text-footer-ink px-6 sm:px-16 pt-16 pb-10"
    >
      <h2 className="font-heading font-bold text-[30px] sm:text-[42px] leading-[1.15] max-w-[640px]">
        Hai un progetto in mente? Parliamone.
      </h2>
      <a
        href="mailto:aledev@alessandrosparano.com"
        className="inline-block mt-7 text-[18px] sm:text-[22px] font-semibold text-mint hover:opacity-80 transition-opacity"
      >
        aledev@alessandrosparano.com
      </a>

      <div className="flex flex-wrap gap-x-7 gap-y-2 mt-11 pt-6 border-t border-white/15 text-[13px] text-footer-ink/60">
        <a href="tel:+393493202675" className="hover:text-footer-ink transition-colors">+39 349 32 02 675</a>
        <a href="https://github.com/AlePeace" target="_blank" rel="noopener noreferrer" className="hover:text-footer-ink transition-colors">
          github.com/AlePeace
        </a>
        <span>© {new Date().getFullYear()} Alessandro Sparano</span>
      </div>
    </motion.footer>
  )
}
