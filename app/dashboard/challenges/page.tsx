import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChallengeCard } from "@/components/challenge-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter } from "lucide-react"

export default function ChallengesPage() {
  const categories = [
    "Tous",
    "Achat / Revente",
    "Crypto",
    "E-commerce",
    "Affiliation",
    "Marketing",
    "Développement",
    "Design",
    "Copywriting",
  ]

  const challenges = [
    {
      title: "Gagner 1000€ en 30 jours avec l'affiliation",
      category: "Affiliation",
      difficulty: "Intermédiaire",
      progress: 0,
      daysLeft: 30,
      icon: "🔗",
    },
    {
      title: "DCA sur Bitcoin pendant 30 jours",
      category: "Crypto",
      difficulty: "Débutant",
      progress: 0,
      daysLeft: 30,
      icon: "₿",
    },
    {
      title: "Lancer un store Shopify en 15 jours",
      category: "E-commerce",
      difficulty: "Intermédiaire",
      progress: 0,
      daysLeft: 15,
      icon: "🛒",
    },
    {
      title: "Flipper des produits sur LeBonCoin",
      category: "Achat / Revente",
      difficulty: "Débutant",
      progress: 0,
      daysLeft: 14,
      icon: "🔄",
    },
    {
      title: "Créer une campagne email avec 20% d'ouverture",
      category: "Marketing",
      difficulty: "Intermédiaire",
      progress: 0,
      daysLeft: 14,
      icon: "📊",
    },
    {
      title: "Vendre une micro app via Gumroad",
      category: "Développement",
      difficulty: "Expert",
      progress: 0,
      daysLeft: 30,
      icon: "💻",
    },
    {
      title: "Vendre des templates Figma",
      category: "Design",
      difficulty: "Intermédiaire",
      progress: 0,
      daysLeft: 30,
      icon: "🎨",
    },
    {
      title: "Créer une page de vente qui convertit à 5%",
      category: "Copywriting",
      difficulty: "Expert",
      progress: 0,
      daysLeft: 21,
      icon: "✍️",
    },
    {
      title: "Staking sur Ethereum",
      category: "Crypto",
      difficulty: "Intermédiaire",
      progress: 0,
      daysLeft: 60,
      icon: "₿",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Challenges</h1>
        <p className="text-muted-foreground">
          Découvrez tous nos challenges financiers et commencez à développer vos compétences.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Rechercher un challenge..." className="w-full pl-8" />
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
              {challenges
                .filter((challenge) => category === "Tous" || challenge.category === category)
                .map((challenge, index) => (
                  <ChallengeCard
                    key={index}
                    title={challenge.title}
                    category={challenge.category}
                    difficulty={challenge.difficulty}
                    progress={challenge.progress}
                    daysLeft={challenge.daysLeft}
                    icon={challenge.icon}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

