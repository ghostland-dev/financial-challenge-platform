import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChallengeCard } from "@/components/challenge-card"
import { UserStats } from "@/components/user-stats"
import { Trophy, TrendingUp, Clock, Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gold-700 dark:text-gold-500">Tableau de bord</h1>
          <ThemeToggle />
        </div>
        <p className="text-muted-foreground">
          Bienvenue sur votre tableau de bord. Suivez votre progression et découvrez de nouveaux challenges.
        </p>
      </div>

      <UserStats />

      <Tabs defaultValue="en-cours" className="space-y-4">
        <TabsList>
          <TabsTrigger value="en-cours">En cours</TabsTrigger>
          <TabsTrigger value="termines">Terminés</TabsTrigger>
          <TabsTrigger value="recommandes">Recommandés</TabsTrigger>
        </TabsList>
        <TabsContent value="en-cours" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ChallengeCard
              title="Gagner 1000€ en 30 jours avec l'affiliation"
              category="Affiliation"
              difficulty="Intermédiaire"
              progress={65}
              daysLeft={10}
              icon="🔗"
            />
            <ChallengeCard
              title="DCA sur Bitcoin pendant 30 jours"
              category="Crypto"
              difficulty="Débutant"
              progress={40}
              daysLeft={18}
              icon="₿"
            />
          </div>
        </TabsContent>
        <TabsContent value="termines" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ChallengeCard
              title="Flipper 5 produits sur LeBonCoin"
              category="Achat / Revente"
              difficulty="Débutant"
              progress={100}
              daysLeft={0}
              icon="🔄"
              completed
            />
          </div>
        </TabsContent>
        <TabsContent value="recommandes" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ChallengeCard
              title="Lancer un store Shopify en 15 jours"
              category="E-commerce"
              difficulty="Intermédiaire"
              progress={0}
              daysLeft={15}
              icon="🛒"
              recommended
            />
            <ChallengeCard
              title="Créer une campagne email avec 20% d'ouverture"
              category="Marketing"
              difficulty="Intermédiaire"
              progress={0}
              daysLeft={14}
              icon="📊"
              recommended
            />
            <ChallengeCard
              title="Vendre des templates Figma"
              category="Design"
              difficulty="Intermédiaire"
              progress={0}
              daysLeft={30}
              icon="🎨"
              recommended
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-gold-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">XP Total</CardTitle>
            <Trophy className="h-4 w-4 text-gold-600 dark:text-gold-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gold-700 dark:text-gold-500">1,250 XP</div>
            <p className="text-xs text-muted-foreground">+350 XP cette semaine</p>
          </CardContent>
        </Card>
        <Card className="border-gold-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valeur Simulée</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">2,350 €</div>
            <p className="text-xs text-muted-foreground">+520 € ce mois-ci</p>
          </CardContent>
        </Card>
        <Card className="border-gold-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temps Investi</CardTitle>
            <Clock className="h-4 w-4 text-gold-600 dark:text-gold-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42h</div>
            <p className="text-xs text-muted-foreground">8h cette semaine</p>
          </CardContent>
        </Card>
        <Card className="border-gold-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux de Complétion</CardTitle>
            <Zap className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">85%</div>
            <p className="text-xs text-muted-foreground">+5% par rapport au mois dernier</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

