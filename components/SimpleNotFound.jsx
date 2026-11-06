import Link from "next/link"

export default function SimpleNotFound() {
  return (
    <div className="px-6 sm:px-16 pt-16 pb-24 text-center flex flex-col items-center">
      <span className="font-heading font-bold text-[80px] sm:text-[120px] leading-none text-panel">404</span>
      <h1 className="font-heading font-bold text-[26px] sm:text-[32px] mt-4 mb-3">Questa pagina non esiste.</h1>
      <p className="text-[15px] text-ink-soft max-w-[380px] mb-8">
        Forse il link è sbagliato, o la pagina è stata spostata.
      </p>
      <Link href="/" className="bg-ink text-paper font-bold text-[15px] rounded-lg px-6 py-3.5">
        ← Torna alla home
      </Link>
    </div>
  )
}
