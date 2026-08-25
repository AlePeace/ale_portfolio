import ContactCode from "@/components/ContactCode"
import SimpleContact from "@/components/SimpleContact"
import IDEShell from "@/components/IDEShell"
import SimpleShell from "@/components/SimpleShell"
import { getSiteMode } from "@/utils/getSiteMode"

export const metadata = {
  title:       "Contatti",
  description: "Contatta Alessandro Sparano per un nuovo progetto web. Email, GitHub e link per iniziare subito.",
  openGraph: {
    title:       "Contatti — Alessandro Sparano",
    description: "Hai un progetto in mente? Contatta Alessandro Sparano per iniziare.",
    url:         "https://alessandrosparano.com/contact",
  },
  alternates: { canonical: "https://alessandrosparano.com/contact" },
}

export default async function Contact() {
  const mode = await getSiteMode()

  if (mode === "dev") {
    return (
      <IDEShell>
        <ContactCode />
      </IDEShell>
    )
  }

  return (
    <SimpleShell>
      <SimpleContact />
    </SimpleShell>
  )
}
