export default function StatusBar() {
  return (
    <footer className="bg-statusbar px-3 shrink-0 text-[11px] text-white/75 tracking-wide
      flex flex-col justify-center gap-0.5 py-1 md:py-0
      md:flex-row md:items-center md:justify-between md:h-6 md:gap-0">
      <div className="flex items-center gap-3">
        <span>⎇ main</span>
        <span className="text-white/30">|</span>
        <span>✓ deployed on Vercel</span>
        <span className="text-white/30">|</span>
        <span>0 errors · 0 warnings</span>
      </div>
      <div className="flex items-center gap-3">
        <span>Zorin OS</span>
        <span className="text-white/30">|</span>
        <span>JavaScript (React)</span>
        <span className="text-white/30">|</span>
        <span>JetBrains Mono</span>
      </div>
    </footer>
  )
}
