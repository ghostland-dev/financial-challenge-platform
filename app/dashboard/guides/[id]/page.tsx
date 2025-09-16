import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, BookOpen, Share2 } from "lucide-react"
import Link from "next/link"

export default function GuidePage({ params }: { params: { id: string } }) {
  // Dans une application réelle, vous récupéreriez les données du guide depuis une API
  const guide = {
    id: params.id,
    title: "Guide complet de l'affiliation en 2025",
    category: "Affiliation",
    type: "PDF",
    level: "Débutant",
    description:
      "Apprenez les bases de l'affiliation et comment générer vos premiers revenus en ligne. Ce guide couvre toutes les étapes, de la sélection des programmes d'affiliation à l'optimisation de vos conversions.",
    date: "15/03/2025",
    author: "Marie Laurent",
    authorRole: "Expert en Affiliation",
    readTime: "25 minutes",
    content: `
      # Guide complet de l'affiliation en 2025
      
      ## Introduction
      
      L'affiliation est l'une des méthodes les plus accessibles pour générer des revenus en ligne. Ce guide vous expliquera comment démarrer et réussir dans ce domaine.
      
      ## Qu'est-ce que l'affiliation ?
      
      L'affiliation est un système de marketing où vous promouvez les produits ou services d'une entreprise et recevez une commission pour chaque vente ou action réalisée grâce à votre promotion.
      
      ## Comment choisir les bons programmes d'affiliation
      
      La sélection des programmes d'affiliation adaptés à votre audience est cruciale. Recherchez des programmes avec :
      
      - Des commissions attractives
      - Des produits de qualité
      - Un support marketing efficace
      - Une bonne réputation
      
      ## Plateformes d'affiliation populaires
      
      - Amazon Associates
      - Systeme.io
      - Clickbank
      - ShareASale
      - Awin
      
      ## Stratégies de promotion efficaces
      
      ### Création de contenu de qualité
      
      Le contenu est roi dans l'affiliation. Créez des articles de blog, des vidéos ou des podcasts qui apportent une réelle valeur à votre audience.
      
      ### Utilisation des réseaux sociaux
      
      Les réseaux sociaux sont d'excellents canaux pour promouvoir vos liens d'affiliation. Adaptez votre contenu à chaque plateforme.
      
      ### Email marketing
      
      Construisez une liste d'email pour promouvoir régulièrement des offres d'affiliation à une audience engagée.
      
      ## Optimisation des conversions
      
      Pour maximiser vos revenus d'affiliation, concentrez-vous sur :
      
      - L'optimisation de vos pages d'atterrissage
      - Les appels à l'action clairs
      - La création de confiance avec votre audience
      - Les tests A/B pour améliorer continuellement vos résultats
      
      ## Aspects légaux et éthiques
      
      N'oubliez pas de divulguer vos liens d'affiliation et de respecter les réglementations en vigueur dans votre pays.
      
      ## Conclusion
      
      L'affiliation peut être une source de revenus significative si vous suivez les bonnes pratiques et restez patient. Commencez petit, apprenez constamment et adaptez vos stratégies.
    `,
    relatedGuides: [
      "Optimisation des campagnes Meta Ads",
      "Copywriting qui convertit",
      "Le guide du marketing par email",
    ],
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/guides">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">{guide.title}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-5 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle>{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{guide.category}</Badge>
                  <Badge variant="secondary">{guide.type}</Badge>
                  <Badge>{guide.level}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: guide.content.replace(/\n/g, "<br />") }} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Auteur</span>
                  <span className="text-sm font-medium">{guide.author}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Rôle</span>
                  <span className="text-sm font-medium">{guide.authorRole}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Date</span>
                  <span className="text-sm font-medium">{guide.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Temps de lecture</span>
                  <span className="text-sm font-medium">{guide.readTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Catégorie</span>
                  <span className="text-sm font-medium">{guide.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Niveau</span>
                  <span className="text-sm font-medium">{guide.level}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full gap-2">
                <Download className="h-4 w-4" />
                Télécharger le PDF
              </Button>
              <Button variant="outline" className="w-full gap-2">
                <BookOpen className="h-4 w-4" />
                Ajouter à ma bibliothèque
              </Button>
              <Button variant="outline" className="w-full gap-2">
                <Share2 className="h-4 w-4" />
                Partager
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Guides associés</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {guide.relatedGuides.map((relatedGuide, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg border">
                  <span className="text-sm">{relatedGuide}</span>
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

