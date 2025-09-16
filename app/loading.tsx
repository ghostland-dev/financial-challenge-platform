import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-10 w-10 animate-spin text-gold-600 dark:text-gold-500" />
        <h2 className="text-xl font-semibold">Chargement...</h2>
        <p className="text-sm text-muted-foreground">Veuillez patienter</p>
      </div>
    </div>
  )
}

