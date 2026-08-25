import SimpleNav from "@/components/SimpleNav"
import SimpleFooter from "@/components/SimpleFooter"
import PageTransition from "@/components/PageTransition"

export default function SimpleShell({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-paper text-ink">
      <SimpleNav />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <SimpleFooter />
    </div>
  )
}
