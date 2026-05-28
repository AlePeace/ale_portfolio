import ProjectsCode from "@/components/ProjectsCode"

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

export default function Projects() {
  return <ProjectsCode />
}
