import { fetchSkills } from "@/utils/fetchSkills"
import Hero from "@/components/Hero"
import HomeCards from "@/components/HomeCards"

export default async function Home() {
  const skills = await fetchSkills({
    stack:   ["Next.js", "React", "Sanity", "Vercel"],
    passion: ["UI craftmanship", "clean code"],
    agency:  true,
  })

  return (
    <div className="flex flex-col md:flex-row md:items-start h-full">
      <div className="flex-1 min-w-0">
        <Hero name="Alessandro Sparano" skills={skills} />
      </div>
      <div className="md:w-72 md:shrink-0 md:border-l md:border-border">
        <HomeCards />
      </div>
    </div>
  )
}
