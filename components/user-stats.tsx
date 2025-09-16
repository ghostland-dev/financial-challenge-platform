import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Award } from "lucide-react"

export function UserStats() {
  return (
    <Card className="border-gold-200 shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl font-bold text-gold-700 dark:text-gold-500">Niveau 5</h2>
              <Badge variant="outline" className="ml-2 border-gold-200 dark:border-gold-800">
                Intermédiaire
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>XP: 1,250 / 1,500</span>
                <span>250 XP restants pour le niveau 6</span>
              </div>
              <Progress value={83} className="h-2" indicatorClassName="bg-gradient-to-r from-gold-600 to-gold-700" />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <div className="flex items-center gap-2 rounded-full bg-gold-100 dark:bg-gold-900/20 px-3 py-1">
              <Trophy className="h-4 w-4 text-gold-600 dark:text-gold-500" />
              <span className="text-sm font-medium">3 challenges terminés</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-gold-100 dark:bg-gold-900/20 px-3 py-1">
              <Star className="h-4 w-4 text-gold-600 dark:text-gold-500" />
              <span className="text-sm font-medium">5 badges débloqués</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-gold-100 dark:bg-gold-900/20 px-3 py-1">
              <Award className="h-4 w-4 text-gold-600 dark:text-gold-500" />
              <span className="text-sm font-medium">Top 10% des utilisateurs</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

