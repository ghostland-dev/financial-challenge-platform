import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SimulatorCard } from "@/components/simulator-card"

export default function SimulatorsPage() {
  const simulators = [
    {
      id: 1,
      title: "Simulateur de ROI",
      description: "Calculez le retour sur investissement de vos projets",
      category: "Finance",
      icon: "📊",
    },
    {
      id: 2,
      title: "Simulateur de marge e-commerce",
      description: "Estimez vos marges et profits pour votre boutique en ligne",
      category: "E-commerce",
      icon: "🛒",
    },
    {
      id: 3,
      title: "Simulateur d'investissement crypto",
      description: "Simulez vos gains avec différentes stratégies (DCA, staking)",
      category: "Crypto",
      icon: "₿",
    },
    {
      id: 4,
      title: "Simulateur de revenus en affiliation",
      description: "Calculez vos revenus potentiels en fonction du trafic et des conversions",
      category: "Affiliation",
      icon: "🔗",
    },
    {
      id: 5,
      title: "Simulateur de budget publicitaire",
      description: "Optimisez vos dépenses sur Meta Ads et Google Ads",
      category: "Marketing",
      icon: "📢",
    },
    {
      id: 6,
      title: "Simulateur de pricing freelance",
      description: "Déterminez vos tarifs optimaux en fonction de vos compétences et du marché",
      category: "Freelance",
      icon: "💼",
    },
    {
      id: 7,
      title: "Simulateur de revenu passif",
      description: "Estimez vos revenus sur des plateformes comme Gumroad ou Udemy",
      category: "Revenu Passif",
      icon: "💰",
    },
    {
      id: 8,
      title: "Calculateur de profit achat-revente",
      description: "Calculez vos marges pour le flipping de produits",
      category: "Achat / Revente",
      icon: "🔄",
    },
  ]

  const categories = [
    "Tous",
    "Finance",
    "E-commerce",
    "Crypto",
    "Affiliation",
    "Marketing",
    "Freelance",
    "Revenu Passif",
    "Achat / Revente",
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Simulateurs</h1>
        <p className="text-muted-foreground">
          Utilisez nos simulateurs pour estimer vos résultats et optimiser vos stratégies.
        </p>
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
              {simulators
                .filter((simulator) => category === "Tous" || simulator.category === category)
                .map((simulator) => (
                  <SimulatorCard key={simulator.id} simulator={simulator} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

