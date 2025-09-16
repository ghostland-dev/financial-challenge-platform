import type { NextRequest } from "next/server"

export function GET(request: NextRequest) {
  const hostname = request.headers.get("host") || "finchallenge.com"

  return new Response(
    `# *
User-agent: *
Allow: /

# Host
Host: https://${hostname}

# Sitemaps
Sitemap: https://${hostname}/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
  )
}

