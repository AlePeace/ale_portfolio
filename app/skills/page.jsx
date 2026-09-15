import SkillsCode from "@/components/SkillsCode"
import SimpleSkills from "@/components/SimpleSkills"
import IDEShell from "@/components/IDEShell"
import SimpleShell from "@/components/SimpleShell"
import { getSiteMode } from "@/utils/getSiteMode"

export const metadata = {
  title:       "Skills",
  description: "Stack tecnico di Alessandro Sparano: Next.js, React, WordPress, Tailwind CSS, GSAP, Framer Motion, Figma. JavaScript, PHP, HTML5, CSS3.",
  openGraph: {
    title:       "Skills — Alessandro Sparano",
    description: "Stack tecnico completo: Next.js, React, WordPress (temi custom e headless), Tailwind CSS e molto altro.",
    url:         "https://alessandrosparano.com/skills",
  },
  alternates: { canonical: "https://alessandrosparano.com/skills" },
}

export default async function Skills() {
  const mode = await getSiteMode()

  if (mode === "dev") {
    return (
      <IDEShell>
        <SkillsCode />
      </IDEShell>
    )
  }

  return (
    <SimpleShell>
      <SimpleSkills />
    </SimpleShell>
  )
}
