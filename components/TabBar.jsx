"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const tabs = [
  { label: "index.jsx",        path: "/" },
  { label: "about.jsx",        path: "/about" },
  { label: "curriculum.pdf",   path: "/cv/cv_sparano.pdf", download: true },
  { label: "projects.jsx",     path: "/projects" },
  { label: "new-project.jsx",  path: "/projects/new", dimmed: true },
  { label: "fetchSkills.js",   path: "/skills" },
  { label: "contact.jsx",      path: "/contact" },
]

export default function TabBar() {
  const pathname = usePathname()

  return (
    <div className="h-9 bg-titlebar border-b border-border flex items-end overflow-x-auto shrink-0">
      {tabs.map(({ label, path, dimmed, download }) => {
        const isActive = !download && pathname === path
        const cls = `
          flex items-center gap-2 px-4 h-full text-[12px] border-r border-border
          whitespace-nowrap shrink-0 transition-colors
          ${isActive
            ? "bg-bg text-text border-t-2 border-t-accent -mt-px"
            : dimmed
              ? "text-muted/50 hover:text-muted bg-titlebar border-t-2 border-t-transparent border-dashed"
              : download
                ? "text-string hover:text-text bg-titlebar border-t-2 border-t-transparent"
                : "text-muted hover:text-text bg-titlebar border-t-2 border-t-transparent"
          }
        `
        const dot = isActive ? "text-accent" : dimmed ? "text-muted/40" : download ? "text-string" : "text-class"
        const inner = (
          <>
            <span className={`text-[9px] ${dot}`}>●</span>
            {label}
          </>
        )
        return download ? (
          <a key={path} href={path} download className={cls}>{inner}</a>
        ) : (
          <Link key={path} href={path} className={cls}>{inner}</Link>
        )
      })}
    </div>
  )
}
