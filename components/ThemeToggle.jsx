"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "light")
  }, [])

  function toggle() {
    const next = theme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", next)
    document.cookie = `site-theme=${next}; path=/; max-age=31536000`
    setTheme(next)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Cambia tema chiaro/scuro"
      className="w-9 h-9 flex items-center justify-center rounded-full border border-hairline text-ink hover:border-ink/40 transition-colors shrink-0"
    >
      {theme === "dark" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 1V2.6M8 13.4V15M15 8H13.4M2.6 8H1M12.7 3.3L11.6 4.4M4.4 11.6L3.3 12.7M12.7 12.7L11.6 11.6M4.4 4.4L3.3 3.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M13.5 8.8A6 6 0 1 1 6.2 1.5A5 5 0 0 0 13.5 8.8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}
