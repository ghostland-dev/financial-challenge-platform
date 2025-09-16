"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RefreshCcw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-gold-700 dark:text-gold-500">Erreur</h1>
        <h2 className="text-2xl font-semibold">Une erreur est survenue</h2>
        <p className="text-muted-foreground">
          Nous sommes désolés, une erreur inattendue s'est produite. Veuillez réessayer ou revenir à l'accueil.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button asChild variant="outline">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>
          <Button onClick={reset} className="flex items-center gap-2">
            <RefreshCcw className="h-4 w-4" />
            Réessayer
          </Button>
        </div>
      </div>
    </div>
  )
}

