import { Loader2 } from "lucide-react"

export default function DashboardLoading() {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-10 w-10 animate-spin text-gold-600 dark:text-gold-500" />
        <h2 className="text-xl font-semibold">Chargement...</h2>
        <p className="text-sm text-muted-foreground">Préparation de votre tableau de bord</p>
      </div>
    </div>
  )
}

