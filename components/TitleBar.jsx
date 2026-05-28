"use client"

export default function TitleBar({ onMenuToggle }) {
  return (
    <header className="h-8 bg-titlebar border-b border-border flex items-center justify-between px-3 shrink-0">
      <div className="flex items-center gap-2">
        {/* KDE-style controls: flat, geometric, no macOS dots */}
        <button className="w-3.5 h-3.5 flex items-center justify-center text-muted hover:text-text transition-colors" aria-label="Close">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
          </svg>
        </button>
        <button className="w-3.5 h-3.5 flex items-center justify-center text-muted hover:text-text transition-colors" aria-label="Minimize">
          <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
            <path d="M0 1H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
          </svg>
        </button>
        <button className="w-3.5 h-3.5 flex items-center justify-center text-muted hover:text-text transition-colors" aria-label="Maximize">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <rect x="0.75" y="0.75" width="8.5" height="8.5" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>

      <span className="text-[11px] text-muted tracking-wide">
        ale_portfolio —{' '}
        <span className="text-accent">⎇ main</span>
      </span>

      {/* Sidebar toggle — solo mobile */}
      <button
        className="md:hidden w-6 h-6 flex items-center justify-center text-muted hover:text-text transition-colors"
        onClick={onMenuToggle}
        aria-label="Toggle sidebar"
      >
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
          <path d="M0 1H14M0 6H14M0 11H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
        </svg>
      </button>

      {/* Spacer desktop per bilanciare il layout */}
      <div className="hidden md:block w-6" />
    </header>
  )
}
