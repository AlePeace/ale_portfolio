export async function fetchSkills({ stack, passion, agency }) {
  // v1: dati statici — in v2 verrà da Sanity CMS
  return {
    stack,
    passion,
    agency,
    languages: ["JavaScript", "PHP", "HTML5", "CSS3"],
    frameworks: ["Next.js", "React"],
    cms: ["WordPress (tema custom)", "Headless WordPress", "Sanity"],
    styling: ["Tailwind CSS", "Sass", "CSS3"],
    animations: ["GSAP", "Framer Motion"],
    tools: ["Git", "GitHub", "Vercel", "Figma"],
    deploy: ["Vercel", "cPanel / hosting tradizionale"],
    soft: ["client communication", "agenzia", "deadline"],
  };
}
