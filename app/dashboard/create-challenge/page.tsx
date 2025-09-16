"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { CalendarIcon, Plus, Trash2, Eye, Save, Upload, Target, Clock, Trophy, Users } from "lucide-react"

export default function CreateChallengePage() {
  const [date, setDate] = useState<Date>()
  const [steps, setSteps] = useState([{ title: "", description: "", resources: [] }])
  const [resources, setResources] = useState([{ title: "", type: "article", url: "" }])
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState("")

  const addStep = () => {
    setSteps([...steps, { title: "", description: "", resources: [] }])
  }

  const removeStep = (index: number) => {
    const newSteps = [...steps]
    newSteps.splice(index, 1)
    setSteps(newSteps)
  }

  const addResource = () => {
    setResources([...resources, { title: "", type: "article", url: "" }])
  }

  const removeResource = (index: number) => {
    const newResources = [...resources]
    newResources.splice(index, 1)
    setResources(newResources)
  }

  const addTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag])
      setCurrentTag("")
    }
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Créer un challenge</h1>
        <p className="text-muted-foreground">
          Concevez un nouveau challenge pour la communauté ou pour votre usage personnel
        </p>
      </div>

      <Tabs defaultValue="details" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="details">Détails</TabsTrigger>
          <TabsTrigger value="steps">Étapes</TabsTrigger>
          <TabsTrigger value="resources">Ressources</TabsTrigger>
          <TabsTrigger value="preview">Aperçu</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informations générales</CardTitle>
              <CardDescription>Définissez les détails principaux de votre challenge</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Titre du challenge</Label>
                <Input id="title" placeholder="Ex: Gagner 1000€ en 30 jours avec l'affiliation" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Décrivez l'objectif du challenge et ce que les participants vont apprendre"
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Sélectionnez une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="affiliation">Affiliation</SelectItem>
                      <SelectItem value="crypto">Crypto</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="flipping">Achat / Revente</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="development">Développement</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="copywriting">Copywriting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="difficulty">Difficulté</Label>
                  <Select>
                    <SelectTrigger id="difficulty">
                      <SelectValue placeholder="Sélectionnez un niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Débutant</SelectItem>
                      <SelectItem value="intermediate">Intermédiaire</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Durée (jours)</Label>
                  <div className="flex items-center gap-2">
                    <Slider id="duration" min={1} max={90} step={1} defaultValue={[30]} />
                    <Input type="number" className="w-20" defaultValue={30} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="xp">XP à gagner</Label>
                  <div className="flex items-center gap-2">
                    <Slider id="xp" min={50} max={1000} step={50} defaultValue={[500]} />
                    <Input type="number" className="w-20" defaultValue={500} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="startDate">Date de début</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: fr }) : "Sélectionnez une date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <div className="flex gap-2">
                  <Input
                    id="tags"
                    placeholder="Ajouter un tag"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" onClick={addTag}>
                    Ajouter
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="gap-1">
                      {tag}
                      <button onClick={() => removeTag(tag)}>
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="public">Challenge public</Label>
                  <Switch id="public" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Les challenges publics sont visibles par tous les utilisateurs et peuvent être rejoints par n'importe
                  qui.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Annuler</Button>
              <Button>Continuer</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="steps" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Étapes du challenge</CardTitle>
              <CardDescription>Définissez les étapes que les participants devront suivre</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="space-y-4 p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Étape {index + 1}</h3>
                    {steps.length > 1 && (
                      <Button variant="ghost" size="sm" onClick={() => removeStep(index)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`step-title-${index}`}>Titre</Label>
                    <Input
                      id={`step-title-${index}`}
                      placeholder="Ex: Choisir une niche rentable"
                      value={step.title}
                      onChange={(e) => {
                        const newSteps = [...steps]
                        newSteps[index].title = e.target.value
                        setSteps(newSteps)
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`step-description-${index}`}>Description</Label>
                    <Textarea
                      id={`step-description-${index}`}
                      placeholder="Décrivez ce que les participants doivent faire dans cette étape"
                      value={step.description}
                      onChange={(e) => {
                        const newSteps = [...steps]
                        newSteps[index].description = e.target.value
                        setSteps(newSteps)
                      }}
                    />
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" className="w-full" onClick={addStep}>
                <Plus className="h-4 w-4 mr-2" />
                Ajouter une étape
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Retour</Button>
              <Button>Continuer</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ressources</CardTitle>
              <CardDescription>
                Ajoutez des ressources pour aider les participants à réussir le challenge
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {resources.map((resource, index) => (
                <div key={index} className="space-y-4 p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Ressource {index + 1}</h3>
                    {resources.length > 1 && (
                      <Button variant="ghost" size="sm" onClick={() => removeResource(index)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`resource-title-${index}`}>Titre</Label>
                    <Input
                      id={`resource-title-${index}`}
                      placeholder="Ex: Guide des niches rentables en 2025"
                      value={resource.title}
                      onChange={(e) => {
                        const newResources = [...resources]
                        newResources[index].title = e.target.value
                        setResources(newResources)
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`resource-type-${index}`}>Type</Label>
                    <Select
                      value={resource.type}
                      onValueChange={(value) => {
                        const newResources = [...resources]
                        newResources[index].type = value
                        setResources(newResources)
                      }}
                    >
                      <SelectTrigger id={`resource-type-${index}`}>
                        <SelectValue placeholder="Sélectionnez un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="article">Article</SelectItem>
                        <SelectItem value="video">Vidéo</SelectItem>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="template">Template</SelectItem>
                        <SelectItem value="tool">Outil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`resource-url-${index}`}>URL</Label>
                    <Input
                      id={`resource-url-${index}`}
                      placeholder="https://..."
                      value={resource.url}
                      onChange={(e) => {
                        const newResources = [...resources]
                        newResources[index].url = e.target.value
                        setResources(newResources)
                      }}
                    />
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" className="w-full" onClick={addResource}>
                <Plus className="h-4 w-4 mr-2" />
                Ajouter une ressource
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Retour</Button>
              <Button>Continuer</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="preview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Aperçu du challenge</CardTitle>
              <CardDescription>Vérifiez que tout est correct avant de publier</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-7">
                <div className="md:col-span-5 space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <CardTitle>Gagner 1000€ en 30 jours avec l'affiliation</CardTitle>
                          <CardDescription>
                            Ce challenge vous guidera pas à pas pour générer vos premiers revenus d'affiliation en
                            ligne.
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Affiliation</Badge>
                          <Badge>Intermédiaire</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progression: 0%</span>
                          <span>30 jours</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: "0%" }}></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                          <Target className="h-5 w-5 text-muted-foreground mb-1" />
                          <span className="text-xs text-muted-foreground">Objectif</span>
                          <span className="text-sm font-medium">1000€ de revenu</span>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                          <Clock className="h-5 w-5 text-muted-foreground mb-1" />
                          <span className="text-xs text-muted-foreground">Durée</span>
                          <span className="text-sm font-medium">30 jours</span>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                          <Trophy className="h-5 w-5 text-muted-foreground mb-1" />
                          <span className="text-xs text-muted-foreground">XP à gagner</span>
                          <span className="text-sm font-medium">500 XP</span>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                          <Users className="h-5 w-5 text-muted-foreground mb-1" />
                          <span className="text-xs text-muted-foreground">Participants</span>
                          <span className="text-sm font-medium">0</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Description</h3>
                        <p className="text-sm text-muted-foreground">
                          Ce challenge vous guidera pas à pas pour générer vos premiers revenus d'affiliation en ligne.
                          Vous apprendrez à sélectionner des produits rentables, créer du contenu de qualité et
                          optimiser vos conversions.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                          {tags.length > 0 ? (
                            tags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))
                          ) : (
                            <Badge variant="secondary">Affiliation</Badge>
                          )}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-2">Étapes</h3>
                        <div className="space-y-4">
                          {steps.length > 0 && steps[0].title ? (
                            steps.map((step, index) => (
                              <div key={index} className="p-4 border rounded-lg">
                                <h4 className="font-medium">
                                  Étape {index + 1}: {step.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                              </div>
                            ))
                          ) : (
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium">Étape 1: Choisir une niche rentable</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                Recherchez et sélectionnez une niche avec une demande forte et une concurrence modérée.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-2">Ressources</h3>
                        <div className="space-y-2">
                          {resources.length > 0 && resources[0].title ? (
                            resources.map((resource, index) => (
                              <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                                <div className="flex items-center gap-2">
                                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-xs font-medium">{resource.type.charAt(0).toUpperCase()}</span>
                                  </div>
                                  <span>{resource.title}</span>
                                </div>
                                <Badge variant="outline">{resource.type}</Badge>
                              </div>
                            ))
                          ) : (
                            <div className="flex items-center justify-between rounded-lg border p-3">
                              <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                                  <span className="text-xs font-medium">P</span>
                                </div>
                                <span>Guide des niches rentables en 2025</span>
                              </div>
                              <Badge variant="outline">PDF</Badge>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button className="w-full gap-2">
                        <Save className="h-4 w-4" />
                        Enregistrer comme brouillon
                      </Button>
                      <Button variant="outline" className="w-full gap-2">
                        <Eye className="h-4 w-4" />
                        Prévisualiser
                      </Button>
                      <Button variant="outline" className="w-full gap-2">
                        <Upload className="h-4 w-4" />
                        Importer une image
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Publication</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          Votre challenge sera soumis à validation avant d'être publié sur la plateforme.
                        </p>
                      </div>
                      <Button className="w-full">Publier le challenge</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

