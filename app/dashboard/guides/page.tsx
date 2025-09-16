import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, FileText, Video, BookOpen, Download } from "lucide-react"

export default function GuidesPage() {
  const categories = [
    "Tous",
    "Crypto",
    "E-commerce",
    "Affiliation",
    "Marketing",
    "Achat / Revente",
    "Développement",
    "Design",
    "Copywriting",
  ]

  const guides = [
    {
      title: "Guide complet de l'affiliation en 2025",
      category: "Affiliation",
      type: "PDF",
      level: "Débutant",
      description: "Apprenez les bases de l'affiliation et comment générer vos premiers revenus en ligne.",
      icon: <FileText className="h-5 w-5" />,
      date: "15/03/2025",
    },
    {
      title: "Stratégies avancées de DCA en crypto",
      category: "Crypto",
      type: "PDF",
      level: "Intermédiaire",
      description: "Optimisez votre stratégie d'investissement régulier en cryptomonnaies.",
      icon: <FileText className="h-5 w-5" />,
      date: "22/03/2025",
    },
    {
      title: "Comment lancer un store Shopify rentable",
      category: "E-commerce",
      type: "Vidéo",
      level: "Débutant",
      description: "Un tutoriel pas à pas pour créer et optimiser votre boutique en ligne.",
      icon: <Video className="h-5 w-5" />,
      date: "05/04/2025",
    },
    {
      title: "Masterclass : Copywriting qui convertit",
      category: "Copywriting",
      type: "Vidéo",
      level: "Expert",
      description: "Techniques avancées pour rédiger des textes qui génèrent des ventes.",
      icon: <Video className="h-5 w-5" />,
      date: "12/04/2025",
    },
    {
      title: "Le guide du flipping sur LeBonCoin",
      category: "Achat / Revente",
      type: "PDF",
      level: "Débutant",
      description: "Comment acheter et revendre des produits avec profit sur les plateformes d'occasion.",
      icon: <FileText className="h-5 w-5" />,
      date: "18/04/2025",
    },
    {
      title: "Créer et vendre des templates Figma",
      category: "Design",
      type: "Article",
      level: "Intermédiaire",
      description: "Monétisez vos compétences en design en créant des templates premium.",
      icon: <BookOpen className="h-5 w-5" />,
      date: "25/04/2025",
    },
    {
      title: "Optimisation des campagnes Meta Ads",
      category: "Marketing",
      type: "PDF",
      level: "Intermédiaire",
      description: "Stratégies pour réduire le coût d'acquisition et augmenter le ROI de vos publicités.",
      icon: <FileText className="h-5 w-5" />,
      date: "02/05/2025",
    },
    {
      title: "Développer et vendre une micro-SaaS",
      category: "Développement",
      type: "Vidéo",
      level: "Expert",
      description: "Guide complet pour créer et commercialiser une application SaaS à petite échelle.",
      icon: <Video className="h-5 w-5" />,
      date: "10/05/2025",
    },
    {
      title: "Staking Ethereum : Guide pratique",
      category: "Crypto",
      type: "Article",
      level: "Intermédiaire",
      description: "Comment générer des revenus passifs grâce au staking d'Ethereum.",
      icon: <BookOpen className="h-5 w-5" />,
      date: "15/05/2025",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Guides & Ressources</h1>
        <p className="text-muted-foreground">
          Accédez à notre bibliothèque de guides, tutoriels et ressources pour développer vos compétences
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Rechercher un guide ou une ressource..." className="w-full pl-8" />
        </div>
        <Button variant="outline" className="sm:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filtres
        </Button>
      </div>

      <Tabs defaultValue="Tous" className="space-y-4">
        <TabsList className="flex flex-wrap h-auto">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {guides
                .filter((guide) => category === "Tous" || guide.category === category)
                .map((guide, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <CardTitle className="text-lg">{guide.title}</CardTitle>
                          <CardDescription>{guide.description}</CardDescription>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {guide.icon}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2 flex-1">
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">{guide.category}</Badge>
                        <Badge variant="secondary">{guide.type}</Badge>
                        <Badge>{guide.level}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-4">Publié le {guide.date}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-2">
                        <Download className="h-4 w-4" />
                        Télécharger
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

