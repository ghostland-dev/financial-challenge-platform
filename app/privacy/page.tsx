import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
            <h1 className="text-3xl font-bold tracking-tight mb-4">Politique de confidentialité</h1>
            <p className="text-muted-foreground">Dernière mise à jour: 1 juin 2025</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p>
              Chez FinChallenge, nous respectons votre vie privée et nous nous engageons à protéger vos données
              personnelles. Cette politique de confidentialité vous informera sur la façon dont nous prenons soin de vos
              données personnelles lorsque vous visitez notre site web et vous informera de vos droits en matière de
              confidentialité et de la façon dont la loi vous protège.
            </p>

            <h2 className="text-2xl font-semibold">2. Les données que nous collectons</h2>
            <p>
              Nous pouvons collecter, utiliser, stocker et transférer différents types de données personnelles vous
              concernant, que nous avons regroupées comme suit:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Données d'identité:</strong> prénom, nom de famille, nom d'utilisateur ou identifiant similaire.
              </li>
              <li>
                <strong>Données de contact:</strong> adresse e-mail et numéros de téléphone.
              </li>
              <li>
                <strong>Données techniques:</strong> adresse IP, données de connexion, type et version du navigateur,
                fuseau horaire et emplacement, types et versions de plug-ins de navigateur, système d'exploitation et
                plate-forme, et autres technologies sur les appareils que vous utilisez pour accéder à ce site web.
              </li>
              <li>
                <strong>Données de profil:</strong> votre nom d'utilisateur et mot de passe, vos intérêts, préférences,
                commentaires et réponses aux sondages.
              </li>
              <li>
                <strong>Données d'utilisation:</strong> informations sur la façon dont vous utilisez notre site web,
                produits et services.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold">3. Comment nous utilisons vos données</h2>
            <p>
              Nous n'utiliserons vos données personnelles que lorsque la loi nous le permet. Le plus souvent, nous
              utiliserons vos données personnelles dans les circonstances suivantes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Lorsque nous devons exécuter le contrat que nous sommes sur le point de conclure ou que nous avons
                conclu avec vous.
              </li>
              <li>
                Lorsque cela est nécessaire pour nos intérêts légitimes (ou ceux d'un tiers) et que vos intérêts et
                droits fondamentaux ne l'emportent pas sur ces intérêts.
              </li>
              <li>Lorsque nous devons nous conformer à une obligation légale ou réglementaire.</li>
            </ul>

            <h2 className="text-2xl font-semibold">4. Partage de données</h2>
            <p>
              Nous pouvons partager vos données personnelles avec les parties indiquées ci-dessous aux fins énoncées
              dans cette politique de confidentialité:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Les fournisseurs de services qui fournissent des services informatiques et d'administration de système.
              </li>
              <li>
                Les conseillers professionnels, y compris les avocats, les banquiers, les auditeurs et les assureurs.
              </li>
              <li>Les autorités fiscales, les autorités de régulation et autres autorités.</li>
              <li>
                Des tiers à qui nous pouvons choisir de vendre, transférer ou fusionner des parties de notre entreprise
                ou de nos actifs.
              </li>
            </ul>
            <p>
              Nous exigeons de tous les tiers qu'ils respectent la sécurité de vos données personnelles et qu'ils les
              traitent conformément à la loi. Nous n'autorisons pas nos fournisseurs de services tiers à utiliser vos
              données personnelles à leurs propres fins et nous ne leur permettons de traiter vos données personnelles
              qu'à des fins spécifiques et conformément à nos instructions.
            </p>

            <h2 className="text-2xl font-semibold">5. Sécurité des données</h2>
            <p>
              Nous avons mis en place des mesures de sécurité appropriées pour empêcher que vos données personnelles ne
              soient accidentellement perdues, utilisées ou consultées de manière non autorisée, modifiées ou
              divulguées. De plus, nous limitons l'accès à vos données personnelles aux employés, agents, contractants
              et autres tiers qui ont un besoin commercial de les connaître. Ils ne traiteront vos données personnelles
              que sur nos instructions et ils sont soumis à un devoir de confidentialité.
            </p>

            <h2 className="text-2xl font-semibold">6. Conservation des données</h2>
            <p>
              Nous ne conserverons vos données personnelles que le temps nécessaire pour atteindre les objectifs pour
              lesquels nous les avons collectées, y compris pour satisfaire à toute exigence légale, comptable ou de
              rapport.
            </p>

            <h2 className="text-2xl font-semibold">7. Vos droits légaux</h2>
            <p>
              Dans certaines circonstances, vous avez des droits en vertu des lois sur la protection des données
              concernant vos données personnelles, notamment le droit d'accéder, de corriger, d'effacer, de s'opposer au
              traitement, de limiter le traitement, de transférer vos données personnelles et de retirer votre
              consentement.
            </p>

            <h2 className="text-2xl font-semibold">8. Modifications de la politique de confidentialité</h2>
            <p>
              Nous maintenons notre politique de confidentialité sous examen régulier. Cette version a été mise à jour
              pour la dernière fois le 1 juin 2025.
            </p>

            <h2 className="text-2xl font-semibold">9. Contact</h2>
            <p>
              Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de
              confidentialité, veuillez nous contacter à privacy@finchallenge.com.
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

