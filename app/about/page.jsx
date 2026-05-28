import AboutCode from "@/components/AboutCode"

export const metadata = {
  title:       "Chi sono",
  description: "Creative Developer con background in Design. Laurea alla Vanvitelli, specializzazione ILAS con 110/110. Ora in QCore Agency su Next.js, React e WordPress headless.",
  openGraph: {
    title:       "Chi sono — Alessandro Sparano",
    description: "Dal design al codice: percorso, esperienze e passioni di Alessandro Sparano, Creative Developer @ QCore Agency.",
    url:         "https://alessandrosparano.com/about",
  },
  alternates: { canonical: "https://alessandrosparano.com/about" },
}

export default function About() {
  return <AboutCode />
}
