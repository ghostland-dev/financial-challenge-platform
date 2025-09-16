import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { StepCard } from "@/components/step-card"
import { SimulatorCard } from "@/components/simulator-card"
import { ArrowLeft, Clock, Target, Trophy, Users } from "lucide-react"
import Link from "next/link"

export default function ChallengePage({ params }: { params: { id: string } }) {
  // Dans une application réelle, vous récupéreriez les données du challenge depuis une API
  const challenge = {
    id: params.id,
    title: "Gagner 1000€ en 30 jours avec l'affiliation",
    category: "Affiliation",
    difficulty: "Intermédiaire",
    objective: "1000€ de revenu net",
    duration: "30 jours",
    platforms: ["Amazon Affiliate", "Systeme.io", "Gumroad"],
    progress: 65,
    daysLeft: 10,
    description:
      "Ce challenge vous guidera pas à pas pour générer vos premiers revenus d'affiliation en ligne. Vous apprendrez à sélectionner des produits rentables, créer du contenu de qualité et optimiser vos conversions.",
    steps: [
      {
        id: 1,
        title: "Choisir une niche rentable",
        description: "Recherchez et sélectionnez une niche avec une demande forte et une concurrence modérée.",
        status: "completed",
        resources: [
          { title: "Guide des niches rentables en 2025", type: "PDF" },
          { title: "Vidéo: Comment trouver une niche profitable", type: "Vidéo" },
        ],
      },
      {
        id: 2,
        title: "S'inscrire aux programmes d'affiliation",
        description: "Créez vos comptes sur les principales plateformes d'affiliation et sélectionnez vos produits.",
        status: "completed",
        resources: [
          { title: "Liste des meilleurs programmes d'affiliation", type: "Article" },
          { title: "Tutoriel: Configuration de votre compte Amazon Affiliate", type: "Vidéo" },
        ],
      },
      {
        id: 3,
        title: "Créer votre landing page",
        description: "Développez une page d'atterrissage convaincante pour promouvoir vos produits d'affiliation.",
        status: "in-progress",
        resources: [
          { title: "Templates de landing pages optimisées", type: "Ressource" },
          { title: "Checklist: Les éléments essentiels d'une landing page", type: "PDF" },
        ],
      },
      {
        id: 4,
        title: "Générer du trafic qualifié",
        description: "Mettez en place des stratégies pour attirer des visiteurs intéressés par vos offres.",
        status: "locked",
        resources: [
          { title: "Stratégies SEO pour l'affiliation", type: "Article" },
          { title: "Guide: Utiliser Pinterest pour l'affiliation", type: "PDF" },
        ],
      },
      {
        id: 5,
        title: "Optimiser les conversions",
        description: "Analysez vos résultats et améliorez votre taux de conversion pour maximiser vos revenus.",
        status: "locked",
        resources: [
          { title: "Techniques avancées de copywriting", type: "Vidéo" },
          { title: "Cas d'étude: Comment j'ai augmenté mes conversions de 300%", type: "Article" },
        ],
      },
    ],
    simulators: [
      {
        id: 1,
        title: "Calculateur de revenus d'affiliation",
        description: "Estimez vos revenus potentiels en fonction du trafic et du taux de conversion",
      },
      {
        id: 2,
        title: "Simulateur de ROI publicitaire",
        description: "Calculez le retour sur investissement de vos campagnes publicitaires",
      },
    ],
    leaderboard: [
      { rank: 1, name: "Sophie M.", progress: 100, earnings: "1250€" },
      { rank: 2, name: "Thomas L.", progress: 100, earnings: "1120€" },
      { rank: 3, name: "Julie D.", progress: 95, earnings: "980€" },
      { rank: 4, name: "Vous", progress: 65, earnings: "650€" },
      { rank: 5, name: "Marc B.", progress: 60, earnings: "580€" },
    ],
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/challenges">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">{challenge.title}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-5 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle>Aperçu du challenge</CardTitle>
                  <CardDescription>Suivez votre progression et débloquez les étapes</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{challenge.category}</Badge>
                  <Badge>{challenge.difficulty}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progression: {challenge.progress}%</span>
                  <span>{challenge.daysLeft} jours restants</span>
                </div>
                <Progress value={challenge.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                  <Target className="h-5 w-5 text-muted-foreground mb-1" />
                  <span className="text-xs text-muted-foreground">Objectif</span>
                  <span className="text-sm font-medium">{challenge.objective}</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                  <Clock className="h-5 w-5 text-muted-foreground mb-1" />
                  <span className="text-xs text-muted-foreground">Durée</span>
                  <span className="text-sm font-medium">{challenge.duration}</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                  <Trophy className="h-5 w-5 text-muted-foreground mb-1" />
                  <span className="text-xs text-muted-foreground">XP à gagner</span>
                  <span className="text-sm font-medium">500 XP</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                  <Users className="h-5 w-5 text-muted-foreground mb-1" />
                  <span className="text-xs text-muted-foreground">Participants</span>
                  <span className="text-sm font-medium">1,245</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Plateformes utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {challenge.platforms.map((platform, index) => (
                    <Badge key={index} variant="secondary">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="etapes" className="space-y-4">
            <TabsList>
              <TabsTrigger value="etapes">Étapes</TabsTrigger>
              <TabsTrigger value="simulateurs">Simulateurs</TabsTrigger>
              <TabsTrigger value="ressources">Ressources</TabsTrigger>
              <TabsTrigger value="journal">Journal de bord</TabsTrigger>
            </TabsList>
            <TabsContent value="etapes" className="space-y-4">
              <div className="space-y-4">
                {challenge.steps.map((step) => (
                  <StepCard key={step.id} step={step} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="simulateurs" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {challenge.simulators.map((simulator) => (
                  <SimulatorCard key={simulator.id} simulator={simulator} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="ressources" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Bibliothèque de ressources</CardTitle>
                  <CardDescription>Accédez à toutes les ressources pour réussir ce challenge</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {challenge.steps.map((step) => (
                    <div key={step.id} className="space-y-2">
                      <h3 className="font-medium">{step.title}</h3>
                      <div className="space-y-2">
                        {step.resources.map((resource, index) => (
                          <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <span className="text-xs font-medium">{resource.type.charAt(0)}</span>
                              </div>
                              <span>{resource.title}</span>
                            </div>
                            <Button size="sm" variant="ghost">
                              Voir
                            </Button>
                          </div>
                        ))}
                      </div>
                      {step.id < challenge.steps.length && <Separator className="my-2" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="journal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Journal de bord</CardTitle>
                  <CardDescription>Prenez des notes sur votre progression et vos apprentissages</CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea
                    className="w-full min-h-[200px] p-4 rounded-md border resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Notez ici vos observations, difficultés rencontrées et succès..."
                  ></textarea>
                  <div className="flex justify-end mt-4">
                    <Button>Enregistrer</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Classement</CardTitle>
              <CardDescription>Les meilleurs participants à ce challenge</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {challenge.leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center justify-between p-2 rounded-lg ${
                      user.name === "Vous" ? "bg-primary/10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium w-6">{user.rank}</span>
                      <span>{user.name}</span>
                    </div>
                    <div className="text-sm">{user.earnings}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badges à débloquer</CardTitle>
              <CardDescription>Complétez le challenge pour gagner ces badges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <span className="text-xl">🔗</span>
                  </div>
                  <span className="text-sm font-medium text-center">Maître de l'Affiliation</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-3 opacity-50">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-2">
                    <span className="text-xl">💰</span>
                  </div>
                  <span className="text-sm font-medium text-center">Premier 1000€</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">Valider l'étape actuelle</Button>
              <Button variant="outline" className="w-full">
                Demander de l'aide
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

