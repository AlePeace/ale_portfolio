const BASE_URL = "https://alessandrosparano.com"

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow:     "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
