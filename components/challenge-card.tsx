import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, Trophy, ArrowRight } from "lucide-react"

interface ChallengeCardProps {
  title: string
  category: string
  difficulty: string
  progress: number
  daysLeft: number
  icon: string
  completed?: boolean
  recommended?: boolean
}

export function ChallengeCard({
  title,
  category,
  difficulty,
  progress,
  daysLeft,
  icon,
  completed = false,
  recommended = false,
}: ChallengeCardProps) {
  return (
    <Card
      className={`overflow-hidden border-gold-200 shadow-sm hover:shadow-md transition-shadow ${recommended ? "border-primary" : ""}`}
    >
      {recommended && (
        <div className="bg-gradient-to-r from-gold-600 to-gold-700 text-white text-xs px-3 py-1 text-center">
          Recommandé pour vous
        </div>
      )}
      <CardHeader className="p-4 pb-0">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-200 dark:bg-gold-800 text-xl">
              {icon}
            </div>
            <div>
              <h3 className="font-medium line-clamp-2">{title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="border-gold-200 dark:border-gold-800">
                  {category}
                </Badge>
                <Badge className="bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white">
                  {difficulty}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2 mt-2">
          <div className="flex justify-between text-sm">
            <span>Progression: {progress}%</span>
            {completed ? (
              <span className="flex items-center text-emerald-600 dark:text-emerald-500">
                <Trophy className="h-3 w-3 mr-1" /> Complété
              </span>
            ) : (
              <span className="flex items-center">
                <Clock className="h-3 w-3 mr-1" /> {daysLeft} jours
              </span>
            )}
          </div>
          <Progress
            value={progress}
            className="h-2"
            indicatorClassName={
              completed ? "bg-emerald-600 dark:bg-emerald-500" : "bg-gradient-to-r from-gold-600 to-gold-700"
            }
          />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={`/dashboard/challenges/${encodeURIComponent(title.toLowerCase().replace(/ /g, "-"))}`}
          className="w-full"
        >
          <Button
            variant="outline"
            className="w-full border-gold-200 dark:border-gold-800 hover:bg-gold-50 dark:hover:bg-gold-900/20 hover:text-gold-800 dark:hover:text-gold-300"
          >
            {progress > 0 ? "Continuer" : "Démarrer"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

