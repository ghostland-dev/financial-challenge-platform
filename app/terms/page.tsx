import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl text-gold-700 dark:text-gold-500">FinChallenge</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">Conditions d'utilisation</h1>
            <p className="text-muted-foreground">Dernière mise à jour: 1 juin 2025</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Acceptation des conditions</h2>
            <p>
              En accédant à FinChallenge, vous acceptez d'être lié par ces conditions d'utilisation, toutes les lois et
              réglementations applicables, et vous acceptez que vous êtes responsable du respect des lois locales
              applicables. Si vous n'acceptez pas l'une de ces conditions, vous êtes interdit d'utiliser ou d'accéder à
              ce site.
            </p>

            <h2 className="text-2xl font-semibold">2. Utilisation de la licence</h2>
            <p>
              La permission est accordée de télécharger temporairement une copie des documents sur le site de
              FinChallenge pour un affichage transitoire personnel et non commercial uniquement. Il s'agit de l'octroi
              d'une licence, et non d'un transfert de titre, et sous cette licence, vous ne pouvez pas:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>modifier ou copier les documents;</li>
              <li>utiliser les documents à des fins commerciales ou pour toute présentation publique;</li>
              <li>tenter de décompiler ou de désosser tout logiciel contenu sur le site de FinChallenge;</li>
              <li>supprimer tout droit d'auteur ou autres notations de propriété des documents; ou</li>
              <li>transférer les documents à une autre personne ou "refléter" les documents sur tout autre serveur.</li>
            </ul>

            <h2 className="text-2xl font-semibold">3. Avis de non-responsabilité</h2>
            <p>
              Les documents sur le site de FinChallenge sont fournis "tels quels". FinChallenge ne donne aucune
              garantie, expresse ou implicite, et décline et nie par la présente toutes les autres garanties, y compris,
              sans limitation, les garanties implicites ou les conditions de qualité marchande, d'adéquation à un usage
              particulier, ou de non-violation de la propriété intellectuelle ou autre violation des droits.
            </p>
            <p>
              En outre, FinChallenge ne garantit ni ne fait aucune représentation concernant l'exactitude, les résultats
              probables, ou la fiabilité de l'utilisation des documents sur son site Internet ou autrement liés à ces
              documents ou sur tout site lié à ce site.
            </p>

            <h2 className="text-2xl font-semibold">4. Limitations</h2>
            <p>
              En aucun cas, FinChallenge ou ses fournisseurs ne seront responsables de tout dommage (y compris, sans
              limitation, les dommages pour perte de données ou de profit, ou en raison d'une interruption d'activité)
              découlant de l'utilisation ou de l'incapacité d'utiliser les documents sur le site de FinChallenge, même
              si FinChallenge ou un représentant autorisé de FinChallenge a été informé oralement ou par écrit de la
              possibilité de tels dommages.
            </p>

            <h2 className="text-2xl font-semibold">5. Révisions et errata</h2>
            <p>
              Les documents apparaissant sur le site de FinChallenge peuvent inclure des erreurs techniques,
              typographiques ou photographiques. FinChallenge ne garantit pas que l'un des documents sur son site Web
              est exact, complet ou à jour. FinChallenge peut apporter des modifications aux documents contenus sur son
              site Web à tout moment sans préavis.
            </p>

            <h2 className="text-2xl font-semibold">6. Liens</h2>
            <p>
              FinChallenge n'a pas examiné tous les sites liés à son site Internet et n'est pas responsable du contenu
              de ces sites liés. L'inclusion de tout lien n'implique pas l'approbation par FinChallenge du site.
              L'utilisation de tout site Web lié est aux risques et périls de l'utilisateur.
            </p>

            <h2 className="text-2xl font-semibold">7. Modifications des conditions d'utilisation du site</h2>
            <p>
              FinChallenge peut réviser ces conditions d'utilisation de son site Web à tout moment sans préavis. En
              utilisant ce site Web, vous acceptez d'être lié par la version actuelle de ces conditions d'utilisation.
            </p>

            <h2 className="text-2xl font-semibold">8. Loi applicable</h2>
            <p>
              Toute réclamation relative au site de FinChallenge sera régie par les lois de la France sans égard à ses
              dispositions en matière de conflit de lois.
            </p>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 bg-gradient-to-br from-gold-50 to-gold-100 dark:from-gold-900/10 dark:to-gold-800/5">
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

