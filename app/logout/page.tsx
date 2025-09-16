"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function LogoutPage() {
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Simuler une déconnexion
    const logout = setTimeout(() => {
      toast({
        title: "Déconnexion réussie",
        description: "Vous avez été déconnecté avec succès.",
      })
      router.push("/login")
    }, 1500)

    return () => clearTimeout(logout)
  }, [router, toast])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-10 w-10 animate-spin text-gold-600 dark:text-gold-500" />
        <h2 className="text-xl font-semibold">Déconnexion en cours...</h2>
        <p className="text-sm text-muted-foreground">Veuillez patienter</p>
      </div>
    </div>
  )
}

