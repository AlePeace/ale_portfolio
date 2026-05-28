import ContactCode from "@/components/ContactCode"

export const metadata = {
  title:       "Contatti",
  description: "Contatta Alessandro Sparano per un nuovo progetto web. Email, GitHub e link per iniziare subito.",
  openGraph: {
    title:       "Contatti — Alessandro Sparano",
    description: "Hai un progetto in mente? Contatta Alessandro Sparano per iniziare.",
    url:         "https://alessandrosparano.com/contact",
  },
  alternates: { canonical: "https://alessandrosparano.com/contact" },
}

export default function Contact() {
  return <ContactCode />
}
