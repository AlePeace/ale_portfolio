import { JetBrains_Mono } from "next/font/google"
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"
import IDEShell from "@/components/IDEShell"
import JsonLd from "@/components/JsonLd"

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
})

const BASE_URL = "https://alessandrosparano.com"

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  "Alessandro Sparano — Creative Developer",
    template: "%s — Alessandro Sparano",
  },
  description:
    "Creative Developer presso QCore Agency, Napoli. Specializzato in Next.js, React e WordPress headless. Portfolio di progetti web, UI design e frontend moderno.",
  keywords: [
    "Alessandro Sparano",
    "Creative Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "WordPress headless",
    "Tailwind CSS",
    "Sanity CMS",
    "Web Developer Napoli",
    "QCore Agency",
    "Portfolio",
  ],
  authors:  [{ name: "Alessandro Sparano", url: BASE_URL }],
  creator:  "Alessandro Sparano",

  openGraph: {
    type:        "website",
    locale:      "it_IT",
    url:         BASE_URL,
    siteName:    "Alessandro Sparano",
    title:       "Alessandro Sparano — Creative Developer",
    description: "Creative Developer @ QCore Agency. Next.js, React, WordPress headless. Napoli, Italia.",
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Alessandro Sparano — Creative Developer",
    description: "Creative Developer @ QCore Agency. Next.js, React, WordPress headless.",
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  verification: {
    google: "lf5Obr-XzGC41AdXnpklAFDlN2BDNiECmZYqtCmEyIo",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={jetbrainsMono.variable}>
      <GoogleTagManager gtmId="GTM-NHGSMQ3D" />
      <body className="font-mono bg-bg text-text antialiased">
        <JsonLd />
        <IDEShell>{children}</IDEShell>
      </body>
      <GoogleAnalytics gaId="G-99TR9N1F5F" />
    </html>
  )
}
