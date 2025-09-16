import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Upload, Bell, Shield, User, Settings } from "lucide-react"

export default function ProfilePage() {
  const badges = [
    {
      name: "Débutant en Crypto",
      icon: "₿",
      description: "A complété son premier challenge crypto",
      date: "15/03/2025",
    },
    {
      name: "Maître de l'Affiliation",
      icon: "🔗",
      description: "A généré plus de 500€ en affiliation",
      date: "02/04/2025",
    },
    { name: "E-commerçant", icon: "🛒", description: "A lancé sa première boutique en ligne", date: "10/04/2025" },
    { name: "Investisseur", icon: "📈", description: "A obtenu un ROI de plus de 20%", date: "22/04/2025" },
    { name: "Flipper", icon: "🔄", description: "A revendu 10 produits avec profit", date: "05/05/2025" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Profil</h1>
        <p className="text-muted-foreground">Gérez vos informations personnelles et suivez vos accomplissements</p>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-5 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
              <CardDescription>Mettez à jour vos informations de profil</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Upload className="h-4 w-4" />
                    Changer
                  </Button>
                </div>
                <div className="grid gap-4 flex-1">
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
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Enregistrer les modifications</Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="badges" className="space-y-4">
            <TabsList>
              <TabsTrigger value="badges">Badges</TabsTrigger>
              <TabsTrigger value="historique">Historique</TabsTrigger>
              <TabsTrigger value="statistiques">Statistiques</TabsTrigger>
            </TabsList>
            <TabsContent value="badges" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {badges.map((badge, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-2 text-2xl">
                        {badge.icon}
                      </div>
                      <h3 className="font-medium">{badge.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{badge.description}</p>
                      <Badge variant="outline" className="mt-2">
                        Obtenu le {badge.date}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="historique" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Challenges terminés</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                          🔄
                        </div>
                        <div>
                          <h3 className="font-medium">Flipper 5 produits sur LeBonCoin</h3>
                          <p className="text-sm text-muted-foreground">Terminé le 05/05/2025</p>
                        </div>
                      </div>
                      <Badge>+200 XP</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                          ₿
                        </div>
                        <div>
                          <h3 className="font-medium">DCA sur Bitcoin pendant 30 jours</h3>
                          <p className="text-sm text-muted-foreground">Terminé le 15/03/2025</p>
                        </div>
                      </div>
                      <Badge>+150 XP</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="statistiques" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Challenges terminés</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Badges débloqués</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">XP total</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,250</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Valeur simulée</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,350 €</div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Répartition des activités</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Crypto</span>
                        <span>35%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "35%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Achat / Revente</span>
                        <span>25%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Affiliation</span>
                        <span>20%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>E-commerce</span>
                        <span>15%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Autres</span>
                        <span>5%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "5%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Niveau 5</CardTitle>
              <CardDescription>Intermédiaire</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>XP: 1,250 / 1,500</span>
                  <span>83%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "83%" }}></div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">250 XP restants pour atteindre le niveau 6</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Réalisations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <span className="text-sm">3 challenges terminés</span>
              </div>
              <div className="flex items-center gap-2">
                <Medal className="h-5 w-5 text-primary" />
                <span className="text-sm">5 badges débloqués</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm">Top 10% des utilisateurs</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Paramètres rapides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="w-full flex flex-col h-auto py-4 gap-1">
                  <Bell className="h-5 w-5" />
                  <span className="text-xs">Notifications</span>
                </Button>
                <Button variant="outline" className="w-full flex flex-col h-auto py-4 gap-1">
                  <Shield className="h-5 w-5" />
                  <span className="text-xs">Sécurité</span>
                </Button>
                <Button variant="outline" className="w-full flex flex-col h-auto py-4 gap-1">
                  <User className="h-5 w-5" />
                  <span className="text-xs">Compte</span>
                </Button>
                <Button variant="outline" className="w-full flex flex-col h-auto py-4 gap-1">
                  <Settings className="h-5 w-5" />
                  <span className="text-xs">Préférences</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

