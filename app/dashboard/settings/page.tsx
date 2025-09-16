import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Bell, Shield, User, Moon, Sun, Globe, Smartphone, Laptop } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Paramètres</h1>
        <p className="text-muted-foreground">Gérez vos préférences et paramètres de compte</p>
      </div>

      <Tabs defaultValue="compte" className="space-y-4">
        <TabsList>
          <TabsTrigger value="compte" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Compte
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="securite" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Sécurité
          </TabsTrigger>
          <TabsTrigger value="apparence" className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            Apparence
          </TabsTrigger>
        </TabsList>

        <TabsContent value="compte" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informations du compte</CardTitle>
              <CardDescription>Mettez à jour les informations de votre compte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input id="firstName" defaultValue="Jean" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input id="lastName" defaultValue="Dupont" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="jean.dupont@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Nom d'utilisateur</Label>
                <Input id="username" defaultValue="jean_dupont" />
              </div>
              <div className="flex justify-end">
                <Button>Enregistrer</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Préférences de langue et région</CardTitle>
              <CardDescription>Personnalisez vos paramètres régionaux</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Langue</Label>
                  <Select defaultValue="fr">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Sélectionnez une langue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Devise</Label>
                  <Select defaultValue="eur">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Sélectionnez une devise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eur">Euro (€)</SelectItem>
                      <SelectItem value="usd">Dollar US ($)</SelectItem>
                      <SelectItem value="gbp">Livre Sterling (£)</SelectItem>
                      <SelectItem value="chf">Franc Suisse (CHF)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Enregistrer</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Supprimer le compte</CardTitle>
              <CardDescription>Supprimez définitivement votre compte et toutes vos données</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Cette action est irréversible et supprimera toutes vos données, y compris votre progression, vos badges
                et votre historique.
              </p>
              <Button variant="destructive">Supprimer mon compte</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Préférences de notifications</CardTitle>
              <CardDescription>Choisissez quand et comment vous souhaitez être notifié</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Notifications par email</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-challenges" className="flex-1">
                      Mises à jour des challenges
                    </Label>
                    <Switch id="email-challenges" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-badges" className="flex-1">
                      Nouveaux badges débloqués
                    </Label>
                    <Switch id="email-badges" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-newsletter" className="flex-1">
                      Newsletter hebdomadaire
                    </Label>
                    <Switch id="email-newsletter" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-marketing" className="flex-1">
                      Offres promotionnelles
                    </Label>
                    <Switch id="email-marketing" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Notifications push</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-challenges" className="flex-1">
                      Rappels de challenges
                    </Label>
                    <Switch id="push-challenges" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-badges" className="flex-1">
                      Nouveaux badges débloqués
                    </Label>
                    <Switch id="push-badges" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-deadlines" className="flex-1">
                      Deadlines proches
                    </Label>
                    <Switch id="push-deadlines" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-news" className="flex-1">
                      Actualités et nouveautés
                    </Label>
                    <Switch id="push-news" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Enregistrer</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="securite" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mot de passe</CardTitle>
              <CardDescription>Mettez à jour votre mot de passe</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Mot de passe actuel</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Nouveau mot de passe</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmer le nouveau mot de passe</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <div className="flex justify-end">
                <Button>Mettre à jour le mot de passe</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Authentification à deux facteurs</CardTitle>
              <CardDescription>Ajoutez une couche de sécurité supplémentaire à votre compte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Authentification à deux facteurs</h3>
                  <p className="text-sm text-muted-foreground">
                    Protégez votre compte avec une authentification à deux facteurs
                  </p>
                </div>
                <Switch id="2fa" />
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  L'authentification à deux facteurs ajoute une couche de sécurité supplémentaire en demandant un code
                  temporaire en plus de votre mot de passe lors de la connexion.
                </p>
              </div>
              <Button variant="outline">Configurer l'authentification à deux facteurs</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sessions actives</CardTitle>
              <CardDescription>Gérez les appareils connectés à votre compte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Laptop className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">MacBook Pro</h3>
                      <p className="text-xs text-muted-foreground">Paris, France • Dernière activité: Aujourd'hui</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500">Actuel</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">iPhone 15</h3>
                      <p className="text-xs text-muted-foreground">Paris, France • Dernière activité: Hier</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Déconnecter
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Firefox</h3>
                      <p className="text-xs text-muted-foreground">Lyon, France • Dernière activité: 15/05/2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Déconnecter
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Déconnecter tous les appareils
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="apparence" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Thème</CardTitle>
              <CardDescription>Personnalisez l'apparence de l'application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="border rounded-lg p-4 w-full aspect-square flex items-center justify-center bg-background">
                    <Sun className="h-8 w-8" />
                  </div>
                  <Label className="text-center">Clair</Label>
                  <Button variant="outline" size="sm">
                    Appliquer
                  </Button>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="border rounded-lg p-4 w-full aspect-square flex items-center justify-center bg-black text-white">
                    <Moon className="h-8 w-8" />
                  </div>
                  <Label className="text-center">Sombre</Label>
                  <Button variant="outline" size="sm">
                    Appliquer
                  </Button>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="border rounded-lg p-4 w-full aspect-square flex items-center justify-center bg-gradient-to-br from-background to-black">
                    <div className="flex">
                      <Sun className="h-8 w-8" />
                      <Moon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <Label className="text-center">Système</Label>
                  <Button size="sm">Actif</Button>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <Label>Couleur d'accent</Label>
                <div className="grid grid-cols-6 gap-2">
                  {["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500", "bg-pink-500", "bg-slate-500"].map(
                    (color, index) => (
                      <div key={index} className="flex flex-col items-center gap-1">
                        <div className={`w-8 h-8 rounded-full ${color}`}></div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibilité</CardTitle>
              <CardDescription>Paramètres d'accessibilité pour améliorer votre expérience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Réduire les animations</h3>
                  <p className="text-sm text-muted-foreground">Désactiver ou réduire les animations de l'interface</p>
                </div>
                <Switch id="reduce-motion" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Contraste élevé</h3>
                  <p className="text-sm text-muted-foreground">
                    Augmenter le contraste des couleurs pour une meilleure lisibilité
                  </p>
                </div>
                <Switch id="high-contrast" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Taille de police</h3>
                  <p className="text-sm text-muted-foreground">Ajuster la taille du texte dans l'application</p>
                </div>
                <Select defaultValue="medium">
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Taille" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Petite</SelectItem>
                    <SelectItem value="medium">Moyenne</SelectItem>
                    <SelectItem value="large">Grande</SelectItem>
                    <SelectItem value="x-large">Très grande</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

