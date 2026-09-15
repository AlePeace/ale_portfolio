import { JetBrains_Mono, Oswald, Inter } from "next/font/google"
import { cookies } from "next/headers"
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"
import JsonLd from "@/components/JsonLd"

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
})

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
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

export default async function RootLayout({ children }) {
  const cookieStore = await cookies()
  const mode = cookieStore.get("site-mode")?.value === "dev" ? "dev" : "simple"
  const hasThemeCookie = cookieStore.has("site-theme")
  const theme = cookieStore.get("site-theme")?.value === "dark" ? "dark" : "light"

  return (
    <html
      lang="it"
      data-mode={mode}
      data-theme={theme}
      className={`${jetbrainsMono.variable} ${oswald.variable} ${inter.variable}`}
    >
      <head>
        {!hasThemeCookie && (
          <script
            // evita il flash chiaro→scuro al primo arrivo, prima che venga salvato un cookie
            dangerouslySetInnerHTML={{
              __html: `if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark');}`,
            }}
          />
        )}
      </head>
      <GoogleTagManager gtmId="GTM-NHGSMQ3D" />
      <body
        className={
          mode === "dev"
            ? "font-mono bg-bg text-text antialiased"
            : "font-body bg-paper text-ink antialiased"
        }
      >
        <JsonLd />
        {children}
      </body>
      <GoogleAnalytics gaId="G-99TR9N1F5F" />
    </html>
  )
}
