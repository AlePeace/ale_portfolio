"use client"

import { motion } from "framer-motion"

const groups = [
  { label: "Linguaggi", items: ["JavaScript", "PHP", "HTML5", "CSS3"], color: "border-mint text-mint" },
  { label: "Framework", items: ["Next.js", "React"], color: "border-mint text-mint" },
  { label: "CMS", items: ["Sanity", "WordPress (tema custom)", "Headless WordPress"], color: "border-accent-teal text-accent-teal" },
  { label: "Styling", items: ["Tailwind CSS", "Sass", "CSS3"], color: "border-accent-teal text-accent-teal" },
  { label: "Animazioni", items: ["GSAP", "Framer Motion"], color: "border-accent-orange text-accent-orange" },
  { label: "Tools", items: ["Git", "GitHub", "Vercel", "Figma"], color: "border-accent-violet text-accent-violet" },
  { label: "Deploy", items: ["Vercel", "cPanel / hosting tradizionale"], color: "border-accent-violet text-accent-violet" },
  { label: "Soft skills", items: ["Client communication", "Agenzia", "Deadline"], color: "border-ink/30 text-ink-soft" },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
}

export default function SimpleSkills() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="px-6 sm:px-16 pt-8 pb-20"
    >
      <motion.div variants={item} className="mb-12">
        <div className="text-[12px] font-bold uppercase tracking-[.14em] text-accent-teal mb-4">Cosa uso</div>
        <h1 className="font-heading font-bold text-[30px] sm:text-[40px] leading-[1.15] max-w-[560px]">
          Stack, strumenti e qualche soft skill.
        </h1>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-x-14 gap-y-10">
        {groups.map((g) => (
          <motion.div key={g.label} variants={item}>
            <div className="font-heading font-bold text-[17px] mb-4">{g.label}</div>
            <div className="flex flex-wrap gap-2.5">
              {g.items.map((i) => (
                <span key={i} className={`text-[13px] font-semibold border rounded-full px-4 py-2 ${g.color}`}>{i}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
