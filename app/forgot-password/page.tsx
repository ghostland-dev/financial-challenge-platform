"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Loader2, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer votre adresse email",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simuler un envoi d'email
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      toast({
        title: "Email envoyé",
        description:
          "Si un compte existe avec cette adresse email, vous recevrez un lien pour réinitialiser votre mot de passe.",
      })
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted">
        <div className="w-full max-w-md space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/login">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gold-700 dark:text-gold-500">FinChallenge</h1>
            <ThemeToggle />
          </div>

          <Card className="border-gold-200 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Mot de passe oublié</CardTitle>
              <CardDescription>Entrez votre adresse email pour recevoir un lien de réinitialisation</CardDescription>
            </CardHeader>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="exemple@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      "Envoyer le lien de réinitialisation"
                    )}
                  </Button>
                </CardContent>
              </form>
            ) : (
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4 flex flex-col items-center text-center">
                  <Mail className="h-12 w-12 text-gold-600 dark:text-gold-500 mb-2" />
                  <h3 className="font-medium text-lg">Vérifiez votre boîte de réception</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Nous avons envoyé un lien de réinitialisation à <strong>{email}</strong>
                  </p>
                </div>
                <Button variant="outline" className="w-full" onClick={() => setIsSubmitted(false)}>
                  Essayer une autre adresse email
                </Button>
              </CardContent>
            )}
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                  Retour à la connexion
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

