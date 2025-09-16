import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Search, MessageSquare, ThumbsUp, MessageCircle, Share2, Filter, Award } from "lucide-react"

export default function CommunityPage() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Sophie Martin",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 8,
        badge: "Expert en Affiliation",
      },
      content:
        "Je viens de terminer le challenge d'affiliation avec 1250€ générés en 30 jours ! Voici les 3 stratégies qui ont le mieux fonctionné pour moi : 1) Créer du contenu spécifique pour chaque produit, 2) Utiliser Pinterest pour générer du trafic, 3) Optimiser mes emails avec des call-to-action clairs.",
      challenge: "Gagner 1000€ en 30 jours avec l'affiliation",
      likes: 24,
      comments: 7,
      time: "Il y a 2 heures",
      tags: ["Affiliation", "Succès", "Stratégie"],
    },
    {
      id: 2,
      author: {
        name: "Thomas Dubois",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 6,
        badge: "Crypto Enthusiast",
      },
      content:
        "Question pour ceux qui ont fait le challenge DCA sur Bitcoin : avez-vous continué après la fin du challenge ? J'hésite entre continuer avec la même stratégie ou diversifier sur d'autres cryptos. Des conseils ?",
      challenge: "DCA sur Bitcoin pendant 30 jours",
      likes: 15,
      comments: 12,
      time: "Il y a 5 heures",
      tags: ["Crypto", "Question", "DCA"],
    },
    {
      id: 3,
      author: {
        name: "Julie Leroy",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 9,
        badge: "E-commerce Pro",
      },
      content:
        "Je partage mon tableau de bord Shopify après 15 jours de challenge. 32 ventes, 1450€ de CA, 580€ de marge nette. Le produit qui a le mieux fonctionné est clairement le kit d'accessoires pour plantes d'intérieur. Les publicités Facebook ont généré 70% du trafic.",
      challenge: "Lancer un store Shopify en 15 jours",
      likes: 42,
      comments: 18,
      time: "Il y a 1 jour",
      tags: ["E-commerce", "Shopify", "Résultats"],
    },
    {
      id: 4,
      author: {
        name: "Marc Petit",
        avatar: "/placeholder.svg?height=40&width=40",
        level: 4,
        badge: "Débutant",
      },
      content:
        "Je galère avec le challenge de flipping sur LeBonCoin. J'ai acheté 3 articles mais je n'arrive pas à les revendre avec profit. Des conseils pour mieux sélectionner les produits à fort potentiel ?",
      challenge: "Flipper des produits sur LeBonCoin",
      likes: 8,
      comments: 15,
      time: "Il y a 2 jours",
      tags: ["Achat/Revente", "Aide", "Débutant"],
    },
  ]

  const groups = [
    {
      name: "Crypto Traders",
      members: 1245,
      description: "Discussions et stratégies autour des cryptomonnaies",
      tags: ["Bitcoin", "Ethereum", "DCA", "Staking"],
    },
    {
      name: "Affiliation Masterclass",
      members: 876,
      description: "Partagez vos succès et échecs en affiliation",
      tags: ["Marketing", "SEO", "Conversion"],
    },
    {
      name: "E-commerce Entrepreneurs",
      members: 1032,
      description: "Tout sur la création et gestion de boutiques en ligne",
      tags: ["Shopify", "Dropshipping", "Marketing"],
    },
    {
      name: "Flippers Club",
      members: 654,
      description: "Achat-revente sur LeBonCoin, Vinted et autres plateformes",
      tags: ["Occasion", "Marge", "Négociation"],
    },
  ]

  const events = [
    {
      title: "Webinaire: Optimisation fiscale pour entrepreneurs",
      date: "15 juin 2025",
      time: "19h00",
      host: "Marie Dupont, Expert-comptable",
      participants: 87,
    },
    {
      title: "Masterclass: Copywriting qui convertit",
      date: "22 juin 2025",
      time: "18h30",
      host: "Jean Lefebvre, Copywriter",
      participants: 124,
    },
    {
      title: "Q&A: Investissement en crypto",
      date: "28 juin 2025",
      time: "20h00",
      host: "Thomas Dubois, Crypto Enthusiast",
      participants: 156,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Communauté</h1>
        <p className="text-muted-foreground">
          Échangez avec d'autres participants, partagez vos expériences et apprenez ensemble
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Rechercher dans la communauté..." className="w-full pl-8" />
        </div>
        <Button variant="outline" className="sm:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filtres
        </Button>
        <Button className="gap-2">
          <MessageSquare className="h-4 w-4" />
          Nouveau post
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-5 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>Fil d'actualité</CardTitle>
                <Select defaultValue="recent">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Plus récents</SelectItem>
                    <SelectItem value="popular">Plus populaires</SelectItem>
                    <SelectItem value="trending">Tendances</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <textarea
                      className="w-full min-h-[100px] p-3 rounded-md border resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Partagez votre expérience, posez une question ou demandez de l'aide..."
                    ></textarea>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Ajouter une image
                        </Button>
                        <Button variant="outline" size="sm">
                          Lier un challenge
                        </Button>
                      </div>
                      <Button size="sm">Publier</Button>
                    </div>
                  </div>
                </div>
              </div>

              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{post.author.name}</div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>Niveau {post.author.level}</span>
                              <span>•</span>
                              <Badge variant="outline" className="text-xs">
                                {post.author.badge}
                              </Badge>
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{post.time}</span>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm">{post.content}</p>
                        </div>
                        <div className="mt-3">
                          <Badge variant="secondary" className="cursor-pointer">
                            {post.challenge}
                          </Badge>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                          <button className="flex items-center gap-1 hover:text-foreground">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-foreground">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-foreground">
                            <Share2 className="h-4 w-4" />
                            <span>Partager</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="flex justify-center">
                <Button variant="outline">Voir plus</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Groupes populaires</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {groups.map((group, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{group.name}</h3>
                      <p className="text-xs text-muted-foreground">{group.members} membres</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Rejoindre
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">{group.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {group.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  {index < groups.length - 1 && <Separator className="my-2" />}
                </div>
              ))}
              <Button variant="ghost" className="w-full text-sm">
                Voir tous les groupes
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Événements à venir</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Animé par: {event.host}</p>
                  <p className="text-xs">{event.participants} participants</p>
                  <Button variant="outline" size="sm" className="w-full">
                    S'inscrire
                  </Button>
                  {index < events.length - 1 && <Separator className="my-2" />}
                </div>
              ))}
              <Button variant="ghost" className="w-full text-sm">
                Voir tous les événements
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Top contributeurs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Sophie Martin", avatar: "/placeholder.svg?height=32&width=32", points: 1250, badge: "Expert" },
                { name: "Thomas Dubois", avatar: "/placeholder.svg?height=32&width=32", points: 980, badge: "Mentor" },
                { name: "Julie Leroy", avatar: "/placeholder.svg?height=32&width=32", points: 875, badge: "Créateur" },
              ].map((user, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{user.name}</div>
                      <div className="flex items-center gap-1">
                        <Award className="h-3 w-3 text-primary" />
                        <span className="text-xs text-muted-foreground">{user.points} pts</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">{user.badge}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Ajout du composant Select manquant
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

