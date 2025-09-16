"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      // Ici, vous pouvez intégrer votre solution d'analytics
      // Par exemple, Google Analytics, Plausible, Fathom, etc.
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

      // Exemple avec Google Analytics (GA4)
      // window.gtag("config", "G-XXXXXXXXXX", {
      //   page_path: url,
      // })

      console.log(`Page view: ${url}`)
    }
  }, [pathname, searchParams])

  return null
}

