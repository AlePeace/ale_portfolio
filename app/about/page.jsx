import AboutCode from "@/components/AboutCode"
import SimpleAbout from "@/components/SimpleAbout"
import IDEShell from "@/components/IDEShell"
import SimpleShell from "@/components/SimpleShell"
import { getSiteMode } from "@/utils/getSiteMode"

export const metadata = {
  title:       "Chi sono",
  description: "Creative Developer con background in Design. Laurea alla Vanvitelli, specializzazione ILAS con 110/110. Oggi in QCore Agency (WordPress, tema custom); per i propri progetti Next.js + Sanity.",
  openGraph: {
    title:       "Chi sono — Alessandro Sparano",
    description: "Dal design al codice: percorso, esperienze e passioni di Alessandro Sparano, Creative Developer @ QCore Agency.",
    url:         "https://alessandrosparano.com/about",
  },
  alternates: { canonical: "https://alessandrosparano.com/about" },
}

export default async function About() {
  const mode = await getSiteMode()

  if (mode === "dev") {
    return (
      <IDEShell>
        <AboutCode />
      </IDEShell>
    )
  }

  return (
    <SimpleShell>
      <SimpleAbout />
    </SimpleShell>
  )
}
