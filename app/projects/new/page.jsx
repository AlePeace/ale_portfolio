import NewProjectCode from "@/components/NewProjectCode"
import SimpleNewProject from "@/components/SimpleNewProject"
import IDEShell from "@/components/IDEShell"
import SimpleShell from "@/components/SimpleShell"
import { getSiteMode } from "@/utils/getSiteMode"

export const metadata = {
  title: "new-project — Alessandro Sparano",
}

export default async function NewProject() {
  const mode = await getSiteMode()

  if (mode === "dev") {
    return (
      <IDEShell>
        <NewProjectCode />
      </IDEShell>
    )
  }

  return (
    <SimpleShell>
      <SimpleNewProject />
    </SimpleShell>
  )
}
