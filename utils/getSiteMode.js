import { cookies } from "next/headers"

export async function getSiteMode() {
  const cookieStore = await cookies()
  return cookieStore.get("site-mode")?.value === "dev" ? "dev" : "simple"
}
