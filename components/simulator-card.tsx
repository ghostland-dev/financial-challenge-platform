import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface SimulatorCardProps {
  simulator: {
    id: number
    title: string
    description: string
    category?: string
    icon?: string
  }
}

export function SimulatorCard({ simulator }: SimulatorCardProps) {
  // Convertir le titre en slug pour l'URL
  const slug = simulator.title.toLowerCase().replace(/\s+/g, "-")

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          {simulator.icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-xl">
              {simulator.icon}
            </div>
          )}
          <CardTitle className="text-lg">{simulator.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{simulator.description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/dashboard/simulators/${slug.includes("roi") ? "roi" : slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            Utiliser le simulateur
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

