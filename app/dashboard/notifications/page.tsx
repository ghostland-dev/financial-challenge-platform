import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Bell, Trophy, MessageSquare, Calendar, Star, Settings, CheckCircle, Clock, AlertCircle } from "lucide-react"

export default function NotificationsPage() {
  const notifications = {
    all: [
      {
        id: 1,
        type: "challenge",
        title: "Challenge terminé !",
        description: "Félicitations ! Vous avez terminé le challenge 'Flipper 5 produits sur LeBonCoin'.",
        time: "Il y a 2 heures",
        read: false,
        icon: <Trophy className="h-5 w-5 text-green-500" />,
      },
      {
        id: 2,
        type: "social",
        title: "Nouveau commentaire",
        description: "Sophie Martin a commenté votre post sur le challenge d'affiliation.",
        time: "Il y a 5 heures",
        read: false,
        icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
        user: {
          name: "Sophie Martin",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      },
      {
        id: 3,
        type: "event",
        title: "Événement à venir",
        description: "Rappel : Le webinaire 'Optimisation fiscale pour entrepreneurs' commence dans 2 heures.",
        time: "Il y a 1 jour",
        read: true,
        icon: <Calendar className="h-5 w-5 text-purple-500" />,
      },
      {
        id: 4,
        type: "badge",
        title: "Nouveau badge débloqué !",
        description: "Vous avez obtenu le badge 'Flipper' pour avoir revendu 5 produits avec profit.",
        time: "Il y a 2 jours",
        read: true,
        icon: <Star className="h-5 w-5 text-amber-500" />,
      },
      {
        id: 5,
        type: "challenge",
        title: "Rappel de challenge",
        description: "Il vous reste 3 jours pour terminer le challenge 'DCA sur Bitcoin pendant 30 jours'.",
        time: "Il y a 3 jours",
        read: true,
        icon: <Clock className="h-5 w-5 text-orange-500" />,
      },
      {
        id: 6,
        type: "system",
        title: "Mise à jour de la plateforme",
        description: "FinChallenge a été mis à jour avec de nouvelles fonctionnalités. Découvrez-les !",
        time: "Il y a 5 jours",
        read: true,
        icon: <Settings className="h-5 w-5 text-slate-500" />,
      },
    ],
    unread: [],
    challenges: [],
    social: [],
    system: [],
  }

  // Filtrer les notifications pour chaque catégorie
  notifications.unread = notifications.all.filter((notif) => !notif.read)
  notifications.challenges = notifications.all.filter((notif) => notif.type === "challenge")
  notifications.social = notifications.all.filter((notif) => notif.type === "social" || notif.type === "event")
  notifications.system = notifications.all.filter((notif) => notif.type === "system")

  const getNotificationStatusIcon = (read: boolean) => {
    return read ? (
      <CheckCircle className="h-4 w-4 text-muted-foreground" />
    ) : (
      <AlertCircle className="h-4 w-4 text-primary" />
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
        <p className="text-muted-foreground">
          Restez informé des mises à jour, événements et interactions sur la plateforme
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="rounded-full px-3">
            {notifications.unread.length} non lues
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Tout marquer comme lu
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <Settings className="h-4 w-4" />
            Paramètres
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Toutes
            <Badge variant="secondary" className="ml-1 rounded-full px-2 py-0 text-xs">
              {notifications.all.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="unread" className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            Non lues
            <Badge variant="secondary" className="ml-1 rounded-full px-2 py-0 text-xs">
              {notifications.unread.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="challenges" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            Challenges
            <Badge variant="secondary" className="ml-1 rounded-full px-2 py-0 text-xs">
              {notifications.challenges.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="social" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Social
            <Badge variant="secondary" className="ml-1 rounded-full px-2 py-0 text-xs">
              {notifications.social.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Système
            <Badge variant="secondary" className="ml-1 rounded-full px-2 py-0 text-xs">
              {notifications.system.length}
            </Badge>
          </TabsTrigger>
        </TabsList>

        {["all", "unread", "challenges", "social", "system"].map((tab) => (
          <TabsContent key={tab} value={tab} className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>
                  {tab === "all" && "Toutes les notifications"}
                  {tab === "unread" && "Notifications non lues"}
                  {tab === "challenges" && "Notifications de challenges"}
                  {tab === "social" && "Notifications sociales"}
                  {tab === "system" && "Notifications système"}
                </CardTitle>
                <CardDescription>
                  {tab === "all" && "Toutes vos notifications récentes"}
                  {tab === "unread" && "Notifications que vous n'avez pas encore lues"}
                  {tab === "challenges" && "Mises à jour et rappels de vos challenges"}
                  {tab === "social" && "Interactions avec d'autres utilisateurs et événements"}
                  {tab === "system" && "Mises à jour et informations système"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications[tab as keyof typeof notifications].length > 0 ? (
                  notifications[tab as keyof typeof notifications].map((notification, index, array) => (
                    <div key={notification.id}>
                      <div className={`flex gap-4 p-3 rounded-lg ${!notification.read ? "bg-primary/5" : ""}`}>
                        <div className="flex-shrink-0 mt-1">{notification.icon}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">{notification.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                              {notification.user && (
                                <div className="flex items-center gap-2 mt-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage src={notification.user.avatar} />
                                    <AvatarFallback>{notification.user.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm">{notification.user.name}</span>
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <span className="text-xs text-muted-foreground">{notification.time}</span>
                              {getNotificationStatusIcon(notification.read)}
                            </div>
                          </div>
                          <div className="flex justify-end mt-2">
                            <Button variant="ghost" size="sm">
                              {notification.read ? "Marquer comme non lu" : "Marquer comme lu"}
                            </Button>
                          </div>
                        </div>
                      </div>
                      {index < array.length - 1 && <Separator className="my-2" />}
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="font-medium text-lg">Aucune notification</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Vous n'avez pas de notifications dans cette catégorie
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

