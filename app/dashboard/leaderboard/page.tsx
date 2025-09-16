import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trophy, Award, Search, Filter, ArrowUp, ArrowDown, Users, Star, Clock } from "lucide-react"

export default function LeaderboardPage() {
  const globalLeaderboard = [
    {
      rank: 1,
      name: "Sophie Martin",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 12,
      xp: 4850,
      badges: 15,
      challenges: 12,
      change: "up",
    },
    {
      rank: 2,
      name: "Thomas Dubois",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 11,
      xp: 4320,
      badges: 13,
      challenges: 10,
      change: "same",
    },
    {
      rank: 3,
      name: "Julie Leroy",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 10,
      xp: 3980,
      badges: 12,
      challenges: 9,
      change: "up",
    },
    {
      rank: 4,
      name: "Marc Petit",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 9,
      xp: 3650,
      badges: 10,
      challenges: 8,
      change: "down",
    },
    {
      rank: 5,
      name: "Lucie Moreau",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 9,
      xp: 3520,
      badges: 9,
      challenges: 8,
      change: "up",
    },
    {
      rank: 6,
      name: "Antoine Bernard",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 8,
      xp: 3250,
      badges: 8,
      challenges: 7,
      change: "down",
    },
    {
      rank: 7,
      name: "Emma Rousseau",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 8,
      xp: 3120,
      badges: 8,
      challenges: 7,
      change: "same",
    },
    {
      rank: 8,
      name: "Nicolas Lambert",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 7,
      xp: 2980,
      badges: 7,
      challenges: 6,
      change: "up",
    },
    {
      rank: 9,
      name: "Camille Fournier",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 7,
      xp: 2850,
      badges: 7,
      challenges: 6,
      change: "down",
    },
    {
      rank: 10,
      name: "Jean Dupont",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 6,
      xp: 2650,
      badges: 6,
      challenges: 5,
      change: "up",
    },
  ]

  const challengeLeaderboards = {
    affiliation: [
      {
        rank: 1,
        name: "Sophie Martin",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "1,450€",
        completion: 100,
        time: "28 jours",
      },
      {
        rank: 2,
        name: "Thomas Dubois",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "1,320€",
        completion: 100,
        time: "30 jours",
      },
      {
        rank: 3,
        name: "Julie Leroy",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "1,180€",
        completion: 100,
        time: "29 jours",
      },
      {
        rank: 4,
        name: "Marc Petit",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "980€",
        completion: 95,
        time: "30 jours",
      },
      {
        rank: 5,
        name: "Jean Dupont",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "850€",
        completion: 85,
        time: "30 jours",
      },
    ],
    crypto: [
      {
        rank: 1,
        name: "Thomas Dubois",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "320€",
        completion: 100,
        time: "30 jours",
      },
      {
        rank: 2,
        name: "Lucie Moreau",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "290€",
        completion: 100,
        time: "30 jours",
      },
      {
        rank: 3,
        name: "Antoine Bernard",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "275€",
        completion: 100,
        time: "30 jours",
      },
      {
        rank: 4,
        name: "Emma Rousseau",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "260€",
        completion: 100,
        time: "30 jours",
      },
      {
        rank: 5,
        name: "Jean Dupont",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "180€",
        completion: 90,
        time: "30 jours",
      },
    ],
    ecommerce: [
      {
        rank: 1,
        name: "Julie Leroy",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "2,450€",
        completion: 100,
        time: "15 jours",
      },
      {
        rank: 2,
        name: "Nicolas Lambert",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "1,980€",
        completion: 100,
        time: "15 jours",
      },
      {
        rank: 3,
        name: "Camille Fournier",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "1,750€",
        completion: 100,
        time: "15 jours",
      },
      {
        rank: 4,
        name: "Antoine Bernard",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "1,520€",
        completion: 100,
        time: "15 jours",
      },
      {
        rank: 5,
        name: "Jean Dupont",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "950€",
        completion: 80,
        time: "15 jours",
      },
    ],
    flipping: [
      {
        rank: 1,
        name: "Marc Petit",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "580€",
        completion: 100,
        time: "14 jours",
      },
      {
        rank: 2,
        name: "Emma Rousseau",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "520€",
        completion: 100,
        time: "14 jours",
      },
      {
        rank: 3,
        name: "Sophie Martin",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "490€",
        completion: 100,
        time: "14 jours",
      },
      {
        rank: 4,
        name: "Lucie Moreau",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "450€",
        completion: 100,
        time: "14 jours",
      },
      {
        rank: 5,
        name: "Jean Dupont",
        avatar: "/placeholder.svg?height=40&width=40",
        earnings: "320€",
        completion: 90,
        time: "14 jours",
      },
    ],
  }

  const getChangeIcon = (change: string) => {
    switch (change) {
      case "up":
        return <ArrowUp className="h-4 w-4 text-green-500" />
      case "down":
        return <ArrowDown className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Classements</h1>
        <p className="text-muted-foreground">
          Découvrez les meilleurs participants et leur progression dans les différents challenges
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Rechercher un utilisateur..." className="w-full pl-8" />
        </div>
        <Select defaultValue="xp">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="xp">XP</SelectItem>
            <SelectItem value="level">Niveau</SelectItem>
            <SelectItem value="badges">Badges</SelectItem>
            <SelectItem value="challenges">Challenges</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="sm:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filtres
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Top 3 Global</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end mt-4">
              <div className="flex flex-col items-center">
                <Avatar className="h-16 w-16 border-2 border-primary">
                  <AvatarImage src={globalLeaderboard[1].avatar} />
                  <AvatarFallback>{globalLeaderboard[1].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Badge className="mt-2 bg-[#C0C0C0]">2</Badge>
                <span className="font-medium mt-1">{globalLeaderboard[1].name}</span>
                <span className="text-xs text-muted-foreground">Niveau {globalLeaderboard[1].level}</span>
              </div>

              <div className="flex flex-col items-center -mt-6">
                <Avatar className="h-20 w-20 border-2 border-primary">
                  <AvatarImage src={globalLeaderboard[0].avatar} />
                  <AvatarFallback>{globalLeaderboard[0].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Badge className="mt-2 bg-[#FFD700]">1</Badge>
                <span className="font-medium mt-1">{globalLeaderboard[0].name}</span>
                <span className="text-xs text-muted-foreground">Niveau {globalLeaderboard[0].level}</span>
              </div>

              <div className="flex flex-col items-center">
                <Avatar className="h-16 w-16 border-2 border-primary">
                  <AvatarImage src={globalLeaderboard[2].avatar} />
                  <AvatarFallback>{globalLeaderboard[2].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Badge className="mt-2 bg-[#CD7F32]">3</Badge>
                <span className="font-medium mt-1">{globalLeaderboard[2].name}</span>
                <span className="text-xs text-muted-foreground">Niveau {globalLeaderboard[2].level}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Vos statistiques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center justify-center p-3 border rounded-lg">
                <Trophy className="h-5 w-5 text-primary mb-1" />
                <span className="text-xs text-muted-foreground">Classement</span>
                <span className="text-lg font-medium">10ème</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 border rounded-lg">
                <Star className="h-5 w-5 text-primary mb-1" />
                <span className="text-xs text-muted-foreground">XP Total</span>
                <span className="text-lg font-medium">2,650</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 border rounded-lg">
                <Award className="h-5 w-5 text-primary mb-1" />
                <span className="text-xs text-muted-foreground">Badges</span>
                <span className="text-lg font-medium">6</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 border rounded-lg">
                <Clock className="h-5 w-5 text-primary mb-1" />
                <span className="text-xs text-muted-foreground">Challenges</span>
                <span className="text-lg font-medium">5</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="global" className="space-y-4">
        <TabsList className="flex flex-wrap h-auto">
          <TabsTrigger value="global" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            Global
          </TabsTrigger>
          <TabsTrigger value="affiliation" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Affiliation
          </TabsTrigger>
          <TabsTrigger value="crypto" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Crypto
          </TabsTrigger>
          <TabsTrigger value="ecommerce" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            E-commerce
          </TabsTrigger>
          <TabsTrigger value="flipping" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Flipping
          </TabsTrigger>
        </TabsList>

        <TabsContent value="global" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Classement global</CardTitle>
              <CardDescription>Basé sur l'XP totale, le niveau et les badges obtenus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 bg-muted p-3 text-sm font-medium">
                  <div className="col-span-1 text-center">#</div>
                  <div className="col-span-5">Utilisateur</div>
                  <div className="col-span-2 text-center">Niveau</div>
                  <div className="col-span-2 text-center">XP</div>
                  <div className="col-span-1 text-center">Badges</div>
                  <div className="col-span-1 text-center">Évolution</div>
                </div>
                {globalLeaderboard.map((user, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-12 p-3 text-sm ${
                      user.name === "Jean Dupont" ? "bg-primary/10" : ""
                    } ${index !== globalLeaderboard.length - 1 ? "border-b" : ""}`}
                  >
                    <div className="col-span-1 text-center font-medium">{user.rank}</div>
                    <div className="col-span-5">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">{user.level}</div>
                    <div className="col-span-2 text-center">{user.xp}</div>
                    <div className="col-span-1 text-center">{user.badges}</div>
                    <div className="col-span-1 flex justify-center items-center">{getChangeIcon(user.change)}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <Button variant="outline">Voir plus</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="affiliation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Challenge: Gagner 1000€ en 30 jours avec l'affiliation</CardTitle>
              <CardDescription>Classement basé sur les revenus générés</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 bg-muted p-3 text-sm font-medium">
                  <div className="col-span-1 text-center">#</div>
                  <div className="col-span-5">Utilisateur</div>
                  <div className="col-span-2 text-center">Revenus</div>
                  <div className="col-span-2 text-center">Complétion</div>
                  <div className="col-span-2 text-center">Temps</div>
                </div>
                {challengeLeaderboards.affiliation.map((user, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-12 p-3 text-sm ${
                      user.name === "Jean Dupont" ? "bg-primary/10" : ""
                    } ${index !== challengeLeaderboards.affiliation.length - 1 ? "border-b" : ""}`}
                  >
                    <div className="col-span-1 text-center font-medium">{user.rank}</div>
                    <div className="col-span-5">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">{user.earnings}</div>
                    <div className="col-span-2 text-center">{user.completion}%</div>
                    <div className="col-span-2 text-center">{user.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crypto" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Challenge: DCA sur Bitcoin pendant 30 jours</CardTitle>
              <CardDescription>Classement basé sur les gains générés</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 bg-muted p-3 text-sm font-medium">
                  <div className="col-span-1 text-center">#</div>
                  <div className="col-span-5">Utilisateur</div>
                  <div className="col-span-2 text-center">Gains</div>
                  <div className="col-span-2 text-center">Complétion</div>
                  <div className="col-span-2 text-center">Temps</div>
                </div>
                {challengeLeaderboards.crypto.map((user, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-12 p-3 text-sm ${
                      user.name === "Jean Dupont" ? "bg-primary/10" : ""
                    } ${index !== challengeLeaderboards.crypto.length - 1 ? "border-b" : ""}`}
                  >
                    <div className="col-span-1 text-center font-medium">{user.rank}</div>
                    <div className="col-span-5">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">{user.earnings}</div>
                    <div className="col-span-2 text-center">{user.completion}%</div>
                    <div className="col-span-2 text-center">{user.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ecommerce" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Challenge: Lancer un store Shopify en 15 jours</CardTitle>
              <CardDescription>Classement basé sur le chiffre d'affaires généré</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 bg-muted p-3 text-sm font-medium">
                  <div className="col-span-1 text-center">#</div>
                  <div className="col-span-5">Utilisateur</div>
                  <div className="col-span-2 text-center">CA</div>
                  <div className="col-span-2 text-center">Complétion</div>
                  <div className="col-span-2 text-center">Temps</div>
                </div>
                {challengeLeaderboards.ecommerce.map((user, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-12 p-3 text-sm ${
                      user.name === "Jean Dupont" ? "bg-primary/10" : ""
                    } ${index !== challengeLeaderboards.ecommerce.length - 1 ? "border-b" : ""}`}
                  >
                    <div className="col-span-1 text-center font-medium">{user.rank}</div>
                    <div className="col-span-5">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">{user.earnings}</div>
                    <div className="col-span-2 text-center">{user.completion}%</div>
                    <div className="col-span-2 text-center">{user.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flipping" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Challenge: Flipper des produits sur LeBonCoin</CardTitle>
              <CardDescription>Classement basé sur les profits réalisés</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 bg-muted p-3 text-sm font-medium">
                  <div className="col-span-1 text-center">#</div>
                  <div className="col-span-5">Utilisateur</div>
                  <div className="col-span-2 text-center">Profit</div>
                  <div className="col-span-2 text-center">Complétion</div>
                  <div className="col-span-2 text-center">Temps</div>
                </div>
                {challengeLeaderboards.flipping.map((user, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-12 p-3 text-sm ${
                      user.name === "Jean Dupont" ? "bg-primary/10" : ""
                    } ${index !== challengeLeaderboards.flipping.length - 1 ? "border-b" : ""}`}
                  >
                    <div className="col-span-1 text-center font-medium">{user.rank}</div>
                    <div className="col-span-5">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">{user.earnings}</div>
                    <div className="col-span-2 text-center">{user.completion}%</div>
                    <div className="col-span-2 text-center">{user.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

