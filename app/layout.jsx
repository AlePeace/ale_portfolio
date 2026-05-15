import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Alessandro Sparano — Frontend Developer",
  description: "Frontend Developer presso web agency italiana. Portfolio.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={jetbrainsMono.variable}>
      <body className="font-mono bg-bg text-text min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
