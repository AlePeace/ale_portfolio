import ProjectsCode from "@/components/ProjectsCode"
import SimpleProjects from "@/components/SimpleProjects"
import IDEShell from "@/components/IDEShell"
import SimpleShell from "@/components/SimpleShell"
import { getSiteMode } from "@/utils/getSiteMode"

export const metadata = {
  title:       "Progetti",
  description: "Portfolio di Alessandro Sparano: Mosic, SoundPop Radio, QuantumCrypto, siti WordPress e collaborazioni. Progetti web, UI design e sviluppo frontend.",
  openGraph: {
    title:       "Progetti — Alessandro Sparano",
    description: "Portfolio web di Alessandro Sparano: progetti personali, collaborazioni e lavori in agenzia.",
    url:         "https://alessandrosparano.com/projects",
  },
  alternates: { canonical: "https://alessandrosparano.com/projects" },
}

export default async function Projects() {
  const mode = await getSiteMode()

  if (mode === "dev") {
    return (
      <IDEShell>
        <ProjectsCode />
      </IDEShell>
    )
  }

  return (
    <SimpleShell>
      <SimpleProjects />
    </SimpleShell>
  )
}
