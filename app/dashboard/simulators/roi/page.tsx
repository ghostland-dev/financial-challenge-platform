"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function ROISimulatorPage() {
  const [investment, setInvestment] = useState(1000)
  const [revenue, setRevenue] = useState(1500)
  const [costs, setCosts] = useState(200)
  const [timeframe, setTimeframe] = useState(12)

  const profit = revenue - costs
  const roi = ((profit - investment) / investment) * 100
  const monthlyROI = roi / timeframe
  const annualizedROI = (Math.pow(1 + roi / 100, 12 / timeframe) - 1) * 100

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/simulators">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Simulateur de ROI</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Paramètres</CardTitle>
            <CardDescription>Ajustez les valeurs pour calculer votre retour sur investissement</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="investment">Investissement initial (€)</Label>
                <div className="flex items-center gap-2">
                  <Slider
                    id="investment"
                    min={100}
                    max={10000}
                    step={100}
                    value={[investment]}
                    onValueChange={(value) => setInvestment(value[0])}
                  />
                  <Input
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-24"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="revenue">Revenus générés (€)</Label>
                <div className="flex items-center gap-2">
                  <Slider
                    id="revenue"
                    min={0}
                    max={20000}
                    step={100}
                    value={[revenue]}
                    onValueChange={(value) => setRevenue(value[0])}
                  />
                  <Input
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="w-24"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="costs">Coûts opérationnels (€)</Label>
                <div className="flex items-center gap-2">
                  <Slider
                    id="costs"
                    min={0}
                    max={5000}
                    step={50}
                    value={[costs]}
                    onValueChange={(value) => setCosts(value[0])}
                  />
                  <Input
                    type="number"
                    value={costs}
                    onChange={(e) => setCosts(Number(e.target.value))}
                    className="w-24"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeframe">Période (mois)</Label>
                <div className="flex items-center gap-2">
                  <Slider
                    id="timeframe"
                    min={1}
                    max={36}
                    step={1}
                    value={[timeframe]}
                    onValueChange={(value) => setTimeframe(value[0])}
                  />
                  <Input
                    type="number"
                    value={timeframe}
                    onChange={(e) => setTimeframe(Number(e.target.value))}
                    className="w-24"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Résultats</CardTitle>
            <CardDescription>Analyse de votre retour sur investissement</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="summary" className="space-y-4">
              <TabsList>
                <TabsTrigger value="summary">Résumé</TabsTrigger>
                <TabsTrigger value="details">Détails</TabsTrigger>
              </TabsList>
              <TabsContent value="summary" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                    <span className="text-sm text-muted-foreground">ROI Total</span>
                    <span className={`text-2xl font-bold ${roi >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {roi.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                    <span className="text-sm text-muted-foreground">Profit Net</span>
                    <span
                      className={`text-2xl font-bold ${profit - investment >= 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {(profit - investment).toFixed(2)}€
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                    <span className="text-sm text-muted-foreground">ROI Mensuel</span>
                    <span className={`text-2xl font-bold ${monthlyROI >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {monthlyROI.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                    <span className="text-sm text-muted-foreground">ROI Annualisé</span>
                    <span className={`text-2xl font-bold ${annualizedROI >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {annualizedROI.toFixed(2)}%
                    </span>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Exporter
                  </Button>
                  <Button className="gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Voir le graphique
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="details" className="space-y-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-muted-foreground">Investissement initial</div>
                    <div className="text-sm font-medium text-right">{investment.toFixed(2)}€</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-muted-foreground">Revenus générés</div>
                    <div className="text-sm font-medium text-right">{revenue.toFixed(2)}€</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-muted-foreground">Coûts opérationnels</div>
                    <div className="text-sm font-medium text-right">{costs.toFixed(2)}€</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-muted-foreground">Profit brut</div>
                    <div className="text-sm font-medium text-right">{profit.toFixed(2)}€</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-muted-foreground">Profit net</div>
                    <div className="text-sm font-medium text-right">{(profit - investment).toFixed(2)}€</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-muted-foreground">Période</div>
                    <div className="text-sm font-medium text-right">{timeframe} mois</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-muted-foreground">ROI total</div>
                    <div className="text-sm font-medium text-right">{roi.toFixed(2)}%</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-muted-foreground">ROI mensuel moyen</div>
                    <div className="text-sm font-medium text-right">{monthlyROI.toFixed(2)}%</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-muted-foreground">ROI annualisé</div>
                    <div className="text-sm font-medium text-right">{annualizedROI.toFixed(2)}%</div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

