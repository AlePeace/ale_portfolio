"use client"

import { motion } from "framer-motion"

function setModeCookie(mode) {
  document.cookie = `site-mode=${mode}; path=/; max-age=31536000`
}

export default function Gateway() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#0d0f16]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex flex-col items-center text-center"
      >
        <h1 className="relative inline-block font-heading font-bold text-[28px] sm:text-[34px] tracking-wide text-[#eceef4]">
          <span className="relative z-10">alessandrosparano</span>
          <span
            className="absolute left-[-6px] right-[-7px] bottom-[3px] h-[14px] sm:h-[16px] z-0"
            style={{ background: "linear-gradient(90deg, #4c8dff, #f65ca6)" }}
          />
        </h1>

        <p className="mt-8 text-[15px] leading-relaxed text-[#eceef4]/60 max-w-[380px]">
          Stesso lavoro, due modalità. Scegli la tua.
        </p>

        <div className="mt-11 flex flex-col sm:flex-row gap-5">
          <a
            href="/"
            onClick={() => setModeCookie("simple")}
            className="w-[240px] rounded-[20px] px-6 py-7 flex flex-col items-center gap-2.5 shadow-[0_16px_32px_-14px_rgba(0,0,0,0.5)]"
            style={{ background: "#4c8dff" }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <circle cx="13" cy="8" r="4.2" stroke="#0d0f16" strokeWidth="1.8" />
              <path d="M4 22C4 17.6 8 15 13 15C18 15 22 17.6 22 22" stroke="#0d0f16" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span className="font-heading font-bold text-[19px] text-[#0d0f16]">Modalità semplice</span>
            <span className="text-[12.5px] font-medium text-[#0d0f16]/70">dritti al sodo, senza fronzoli</span>
          </a>

          <a
            href="/"
            onClick={() => setModeCookie("dev")}
            className="w-[240px] rounded-[20px] px-6 py-7 flex flex-col items-center gap-2.5 shadow-[0_16px_32px_-14px_rgba(0,0,0,0.5)]"
            style={{ background: "#f65ca6" }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M9 6L2 13L9 20M17 6L24 13L17 20" stroke="#0d0f16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-heading font-bold text-[19px] text-[#0d0f16]">Modalità dev</span>
            <span className="text-[12.5px] font-medium text-[#0d0f16]/70">IDE, terminale, tutto acceso</span>
          </a>
        </div>

        <p className="mt-8 text-[12.5px] text-[#eceef4]/40">Puoi cambiare quando vuoi, dal menu</p>
      </motion.div>
    </div>
  )
}
