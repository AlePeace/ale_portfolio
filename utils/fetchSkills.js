export async function fetchSkills({ stack, passion, agency }) {
  return {
    stack,
    passion,
    agency,
    languages: ["JavaScript", "PHP", "HTML5", "CSS3"],
    frameworks: ["Next.js", "React"],
    cms: ["Sanity", "WordPress (tema custom)", "Headless WordPress"],
    styling: ["Tailwind CSS", "Sass", "CSS3"],
    animations: ["GSAP", "Framer Motion"],
    tools: ["Git", "GitHub", "Vercel", "Figma"],
    deploy: ["Vercel", "cPanel / hosting tradizionale"],
    soft: ["client communication", "agenzia", "deadline"],
  };
}
