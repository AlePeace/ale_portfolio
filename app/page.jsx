import { cookies } from "next/headers"
import { fetchSkills } from "@/utils/fetchSkills"
import Hero from "@/components/Hero"
import HomeCards from "@/components/HomeCards"
import IDEShell from "@/components/IDEShell"
import SimpleShell from "@/components/SimpleShell"
import SimpleHome from "@/components/SimpleHome"
import Gateway from "@/components/Gateway"

async function DevHome() {
  const skills = await fetchSkills({
    stack:   ["Next.js", "React", "WordPress", "Vercel"],
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

export default async function Home() {
  const cookieStore = await cookies()
  const mode = cookieStore.get("site-mode")?.value

  if (mode === "dev") {
    return (
      <IDEShell>
        <DevHome />
      </IDEShell>
    )
  }

  if (mode === "simple") {
    return (
      <SimpleShell>
        <SimpleHome />
      </SimpleShell>
    )
  }

  return <Gateway />
}
