import SkillsCode from "@/components/SkillsCode"

export const metadata = {
  title:       "Skills",
  description: "Stack tecnico di Alessandro Sparano: Next.js, React, WordPress, Tailwind CSS, Sanity, GSAP, Framer Motion, Figma. JavaScript, PHP, HTML5, CSS3.",
  openGraph: {
    title:       "Skills — Alessandro Sparano",
    description: "Stack tecnico completo: Next.js, React, WordPress headless, Tailwind CSS, Sanity CMS e molto altro.",
    url:         "https://alessandrosparano.com/skills",
  },
  alternates: { canonical: "https://alessandrosparano.com/skills" },
}

export default function Skills() {
  return <SkillsCode />
}
