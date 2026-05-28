export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name:     "Alessandro Sparano",
    jobTitle: "Creative Developer",
    url:      "https://alessandrosparano.com",
    email:    "aledev@alessandrosparano.com",
    telephone: "+393493202675",
    image:    "https://alessandrosparano.com/opengraph-image",
    sameAs: [
      "https://github.com/AlePeace",
    ],
    worksFor: {
      "@type": "Organization",
      name:    "QCore Agency",
    },
    address: {
      "@type":           "PostalAddress",
      addressLocality:   "Napoli",
      addressCountry:    "IT",
    },
    knowsAbout: [
      "Next.js", "React", "WordPress", "JavaScript",
      "Tailwind CSS", "Sanity CMS", "UI Design", "Frontend Development",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
