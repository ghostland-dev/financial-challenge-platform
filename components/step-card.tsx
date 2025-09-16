import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Lock, FileText, Video, LinkIcon } from "lucide-react"

interface StepResource {
  title: string
  type: string
}

interface StepProps {
  id: number
  title: string
  description: string
  status: "completed" | "in-progress" | "locked"
  resources: StepResource[]
}

export function StepCard({ step }: { step: StepProps }) {
  const getStatusIcon = () => {
    switch (step.status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-amber-500" />
      case "locked":
        return <Lock className="h-5 w-5 text-muted-foreground" />
    }
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="h-4 w-4" />
      case "Vidéo":
        return <Video className="h-4 w-4" />
      case "Article":
        return <FileText className="h-4 w-4" />
      default:
        return <LinkIcon className="h-4 w-4" />
    }
  }

  return (
    <Card className={step.status === "locked" ? "opacity-60" : ""}>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex items-start gap-2">
          <div className="mt-0.5">{getStatusIcon()}</div>
          <div>
            <CardTitle className="text-base">
              Étape {step.id}: {step.title}
            </CardTitle>
            <Badge variant="outline" className="mt-1">
              {step.status === "completed" ? "Terminé" : step.status === "in-progress" ? "En cours" : "À débloquer"}
            </Badge>
          </div>
        </div>
        {step.status !== "locked" && (
          <Button size="sm" variant={step.status === "completed" ? "outline" : "default"}>
            {step.status === "completed" ? "Revoir" : "Continuer"}
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Ressources:</h4>
          <div className="grid grid-cols-1 gap-2">
            {step.resources.map((resource, index) => (
              <div key={index} className="flex items-center justify-between rounded-md border p-2">
                <div className="flex items-center gap-2">
                  {getResourceIcon(resource.type)}
                  <span className="text-sm">{resource.title}</span>
                </div>
                <Badge variant="secondary">{resource.type}</Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

