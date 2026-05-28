"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const fileTree = [
  { label: "index.jsx", path: "/" },
  {
    label: "about",
    children: [{ label: "page.jsx", path: "/about" }],
  },
  {
    label: "projects",
    children: [{ label: "page.jsx", path: "/projects" }],
  },
  {
    label: "contact",
    children: [{ label: "page.jsx", path: "/contact" }],
  },
  {
    label: "utils",
    children: [{ label: "fetchSkills.js", path: "/skills" }],
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
}

const row = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
}

function ChevronDown() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function FolderIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0">
      <path d="M1 3C1 2.45 1.45 2 2 2H5L6.5 3.5H11C11.55 3.5 12 3.95 12 4.5V10C12 10.55 11.55 11 11 11H2C1.45 11 1 10.55 1 10V3Z" stroke="currentColor" strokeWidth="1"/>
    </svg>
  )
}

function FileIcon() {
  return (
    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" className="shrink-0">
      <path d="M1 1H7L10 4V12C10 12.28 9.78 12.5 9.5 12.5H1.5C1.22 12.5 1 12.5 1 12V1Z" stroke="currentColor" strokeWidth="1"/>
      <path d="M7 1V4H10" stroke="currentColor" strokeWidth="1"/>
    </svg>
  )
}

function SidebarContent({ onClose }) {
  const pathname = usePathname()

  return (
    <>
      <div className="px-3 py-2 text-[10px] text-muted tracking-widest uppercase font-semibold">
        Explorer
      </div>

      <div className="flex items-center gap-1 px-2 py-0.5 text-[12px] text-muted">
        <ChevronDown />
        <FolderIcon />
        <span className="ml-0.5">ale_portfolio</span>
      </div>

      <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col">
        {fileTree.map((node) =>
          node.children ? (
            <motion.div key={node.label} variants={row}>
              <div className="flex items-center gap-1 py-0.5 text-[12px] text-muted" style={{ paddingLeft: "20px" }}>
                <ChevronDown />
                <FolderIcon />
                <span className="ml-0.5">{node.label}</span>
              </div>
              {node.children.map((child) => {
                const isActive = pathname === child.path
                return (
                  <Link
                    key={child.path}
                    href={child.path}
                    onClick={onClose}
                    className={`flex items-center gap-1.5 py-0.5 text-[12px] transition-colors ${
                      isActive ? "bg-border text-fn" : "text-muted hover:text-text"
                    }`}
                    style={{ paddingLeft: "34px" }}
                  >
                    <span className={isActive ? "text-accent" : "text-muted"}>
                      <FileIcon />
                    </span>
                    {child.label}
                  </Link>
                )
              })}
            </motion.div>
          ) : (
            <motion.div key={node.label} variants={row}>
              {(() => {
                const isActive = pathname === node.path
                return (
                  <Link
                    href={node.path}
                    onClick={onClose}
                    className={`flex items-center gap-1.5 py-0.5 text-[12px] transition-colors ${
                      isActive ? "bg-border text-fn" : "text-muted hover:text-text"
                    }`}
                    style={{ paddingLeft: "20px" }}
                  >
                    <span className={isActive ? "text-accent" : "text-muted"}>
                      <FileIcon />
                    </span>
                    {node.label}
                  </Link>
                )
              })()}
            </motion.div>
          )
        )}
      </motion.div>
    </>
  )
}

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Desktop: sempre visibile */}
      <aside className="hidden md:flex flex-col w-52 bg-surface border-r border-border shrink-0 overflow-y-auto">
        <SidebarContent onClose={onClose} />
      </aside>

      {/* Mobile: overlay animato */}
      <AnimatePresence>
        {isOpen && (
          <div className="md:hidden">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-bg/70 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
            />
            {/* Pannello sidebar */}
            <motion.aside
              className="fixed left-0 z-30 w-52 bg-surface border-r border-border overflow-y-auto flex flex-col"
              style={{ top: "32px", bottom: "24px" }}
              initial={{ x: -208 }}
              animate={{ x: 0 }}
              exit={{ x: -208 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <SidebarContent onClose={onClose} />
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
