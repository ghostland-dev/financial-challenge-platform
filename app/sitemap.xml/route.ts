import type { NextRequest } from "next/server"

export function GET(request: NextRequest) {
  const hostname = request.headers.get("host") || "finchallenge.com"
  const baseUrl = `https://${hostname}`

  // Liste des pages statiques
  const pages = [
    "",
    "/login",
    "/register",
    "/dashboard",
    "/dashboard/challenges",
    "/dashboard/simulators",
    "/dashboard/guides",
    "/dashboard/community",
    "/dashboard/leaderboard",
    "/dashboard/profile",
    "/dashboard/settings",
    "/terms",
    "/privacy",
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      // Priorité plus élevée pour les pages principales
      const priority = page === "" ? "1.0" : page.includes("/dashboard") ? "0.7" : "0.8"

      return `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === "" ? "daily" : "weekly"}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join("")}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}

