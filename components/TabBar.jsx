"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const tabs = [
  { label: "index.jsx",      path: "/" },
  { label: "about.jsx",      path: "/about" },
  { label: "projects.jsx",   path: "/projects" },
  { label: "new-project.jsx", path: "/projects/new", dimmed: true },
  { label: "contact.jsx",    path: "/contact" },
  { label: "fetchSkills.js", path: "/skills" },
]

export default function TabBar() {
  const pathname = usePathname()

  return (
    <div className="h-9 bg-titlebar border-b border-border flex items-end overflow-x-auto shrink-0">
      {tabs.map(({ label, path, dimmed }) => {
        const isActive = pathname === path
        return (
          <Link
            key={path}
            href={path}
            className={`
              flex items-center gap-2 px-4 h-full text-[12px] border-r border-border
              whitespace-nowrap shrink-0 transition-colors
              ${isActive
                ? "bg-bg text-text border-t-2 border-t-accent -mt-px"
                : dimmed
                  ? "text-muted/50 hover:text-muted bg-titlebar border-t-2 border-t-transparent border-dashed"
                  : "text-muted hover:text-text bg-titlebar border-t-2 border-t-transparent"
              }
            `}
          >
            <span className={`text-[9px] ${isActive ? "text-accent" : dimmed ? "text-muted/40" : "text-class"}`}>●</span>
            {label}
          </Link>
        )
      })}
    </div>
  )
}
