import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, TrendingUp, Award, Users } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl gold-text-gradient">FinChallenge</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <ThemeToggle />
              <Link href="/login">
                <Button variant="ghost">Se connecter</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white">
                  S'inscrire
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="text-gold-700 dark:text-gold-500">Relevez des défis financiers</span> et développez
                    vos compétences
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Testez des stratégies concrètes, acquérez de nouvelles compétences et suivez votre progression de
                    manière tangible.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button
                      size="lg"
                      className="gap-1.5 bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white"
                    >
                      Commencer maintenant
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/challenges">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-gold-300 hover:bg-gold-50 dark:hover:bg-gold-900/20"
                    >
                      Découvrir les challenges
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Challenges pratiques</h3>
                      <p className="text-sm text-muted-foreground">Apprenez en faisant avec des défis concrets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Suivi de progression</h3>
                      <p className="text-sm text-muted-foreground">Visualisez vos résultats et votre évolution</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Badges et récompenses</h3>
                      <p className="text-sm text-muted-foreground">Débloquez des badges pour vos accomplissements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Communauté active</h3>
                      <p className="text-sm text-muted-foreground">Échangez avec d'autres participants motivés</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-gold-100 to-gold-50 dark:from-gold-900/20 dark:to-gold-800/10 p-1 shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-md space-y-4 p-6">
                      <div className="space-y-2 text-center">
                        <h2 className="text-2xl font-bold">Challenges populaires</h2>
                        <p className="text-sm text-muted-foreground">
                          Rejoignez des milliers d'utilisateurs qui améliorent leurs finances
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="rounded-lg border bg-card p-3 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-gold-200 dark:bg-gold-800 flex items-center justify-center">
                              <span className="text-sm font-medium">€</span>
                            </div>
                            <div>
                              <h3 className="font-medium">Gagner 1000€ en 30 jours avec l'affiliation</h3>
                              <p className="text-xs text-muted-foreground">Difficulté: Intermédiaire</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border bg-card p-3 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-gold-200 dark:bg-gold-800 flex items-center justify-center">
                              <span className="text-sm font-medium">₿</span>
                            </div>
                            <div>
                              <h3 className="font-medium">DCA sur Bitcoin pendant 30 jours</h3>
                              <p className="text-xs text-muted-foreground">Difficulté: Débutant</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border bg-card p-3 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-gold-200 dark:bg-gold-800 flex items-center justify-center">
                              <span className="text-sm font-medium">🛒</span>
                            </div>
                            <div>
                              <h3 className="font-medium">Lancer un store Shopify en 15 jours</h3>
                              <p className="text-xs text-muted-foreground">Difficulté: Intermédiaire</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gold-50 to-gold-100 dark:from-gold-900/10 dark:to-gold-800/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Catégories de challenges</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explorez différentes stratégies et développez vos compétences dans divers domaines
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl">
                {[
                  { name: "Achat / Revente", icon: "🔄", desc: "Flipper des produits sur LeBonCoin, Vinted, Amazon" },
                  { name: "Crypto", icon: "₿", desc: "DCA, staking sur Ethereum, arbitrage" },
                  { name: "E-commerce", icon: "🛒", desc: "Lancer un store Shopify en 15 jours" },
                  { name: "Affiliation", icon: "🔗", desc: "Générer des revenus via programmes d'affiliation" },
                  { name: "Marketing", icon: "📊", desc: "Créer des campagnes email performantes" },
                  { name: "Développement", icon: "💻", desc: "Vendre une micro app via Gumroad" },
                  { name: "Design", icon: "🎨", desc: "Vendre des templates Figma ou packs d'icônes" },
                  { name: "Copywriting", icon: "✍️", desc: "Créer une page de vente qui convertit" },
                ].map((category, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-200 dark:bg-gold-800 text-2xl">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground text-center">{category.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Pourquoi choisir FinChallenge?</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Notre plateforme combine apprentissage pratique, gamification et communauté pour vous aider à
                    développer vos compétences financières.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-gold-200 dark:bg-gold-800 flex items-center justify-center text-xl">
                      🎯
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Objectifs concrets</h3>
                      <p className="text-muted-foreground">
                        Des challenges avec des objectifs clairs et mesurables pour suivre votre progression.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-gold-200 dark:bg-gold-800 flex items-center justify-center text-xl">
                      📚
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Ressources de qualité</h3>
                      <p className="text-muted-foreground">
                        Accédez à des guides, tutoriels et outils pour réussir chaque challenge.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-gold-200 dark:bg-gold-800 flex items-center justify-center text-xl">
                      👥
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Communauté active</h3>
                      <p className="text-muted-foreground">
                        Échangez avec d'autres participants, partagez vos expériences et apprenez ensemble.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-gold-200 dark:bg-gold-800 flex items-center justify-center text-xl">
                      🏆
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Système de récompenses</h3>
                      <p className="text-muted-foreground">
                        Gagnez des badges, de l'XP et montez en niveau en relevant des défis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative h-[500px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-gold-100 to-gold-50 dark:from-gold-900/20 dark:to-gold-800/10 p-1 shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-md space-y-4 p-6">
                      <div className="space-y-2 text-center">
                        <h2 className="text-2xl font-bold">Témoignages</h2>
                        <p className="text-sm text-muted-foreground">Ce que nos utilisateurs disent de FinChallenge</p>
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-lg border bg-card p-4 shadow-sm">
                          <p className="italic text-muted-foreground mb-2">
                            "Grâce au challenge d'affiliation, j'ai généré mes premiers 1000€ en ligne. Les étapes
                            étaient claires et la communauté très aidante."
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-gold-200 dark:bg-gold-800 flex items-center justify-center">
                              <span className="text-sm font-medium">SM</span>
                            </div>
                            <div>
                              <h4 className="font-medium">Sophie Martin</h4>
                              <p className="text-xs text-muted-foreground">Niveau 8 • Expert en Affiliation</p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border bg-card p-4 shadow-sm">
                          <p className="italic text-muted-foreground mb-2">
                            "Le challenge DCA sur Bitcoin m'a permis de comprendre concrètement l'investissement en
                            crypto. J'ai maintenant une stratégie claire et je continue à l'appliquer."
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-gold-200 dark:bg-gold-800 flex items-center justify-center">
                              <span className="text-sm font-medium">TD</span>
                            </div>
                            <div>
                              <h4 className="font-medium">Thomas Dubois</h4>
                              <p className="text-xs text-muted-foreground">Niveau 6 • Crypto Enthusiast</p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border bg-card p-4 shadow-sm">
                          <p className="italic text-muted-foreground mb-2">
                            "J'ai lancé ma boutique Shopify en 15 jours et réalisé mes premières ventes. Les simulateurs
                            et les ressources ont été d'une aide précieuse."
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-gold-200 dark:bg-gold-800 flex items-center justify-center">
                              <span className="text-sm font-medium">JL</span>
                            </div>
                            <div>
                              <h4 className="font-medium">Julie Leroy</h4>
                              <p className="text-xs text-muted-foreground">Niveau 9 • E-commerce Pro</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0 bg-gradient-to-br from-gold-50 to-gold-100 dark:from-gold-900/10 dark:to-gold-800/5">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 FinChallenge. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Conditions d'utilisation
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

