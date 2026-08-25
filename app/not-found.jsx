import NotFoundCode from "@/components/NotFoundCode"
import SimpleNotFound from "@/components/SimpleNotFound"
import IDEShell from "@/components/IDEShell"
import SimpleShell from "@/components/SimpleShell"
import { getSiteMode } from "@/utils/getSiteMode"

export const metadata = {
  title: "404 — PageNotImplemented",
}

export default async function NotFound() {
  const mode = await getSiteMode()

  if (mode === "dev") {
    return (
      <IDEShell>
        <NotFoundCode />
      </IDEShell>
    )
  }

  return (
    <SimpleShell>
      <SimpleNotFound />
    </SimpleShell>
  )
}
