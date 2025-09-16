"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Download, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function CryptoSimulatorPage() {
  const [initialInvestment, setInitialInvestment] = useState(1000)
  const [monthlyContribution, setMonthlyContribution] = useState(100)
  const [duration, setDuration] = useState(12)
  const [expectedReturn, setExpectedReturn] = useState(10)
  const [cryptoType, setCryptoType] = useState("bitcoin")
  const [useStaking, setUseStaking] = useState(false)
  const [stakingAPY, setStakingAPY] = useState(5)

  // Calcul des résultats
  const calculateResults = () => {
    let totalInvested = initialInvestment
    let currentValue = initialInvestment

    // Calcul mensuel
    for (let i = 0; i < duration; i++) {
      totalInvested += monthlyContribution

      // Rendement mensuel (rendement annuel divisé par 12)
      const monthlyReturn = expectedReturn / 12 / 100
      currentValue = (currentValue + monthlyContribution) * (1 + monthlyReturn)

      // Ajout du staking si activé
      if (useStaking) {
        const monthlyStakingReturn = stakingAPY / 12 / 100
        currentValue = currentValue * (1 + monthlyStakingReturn)
      }
    }

    const profit = currentValue - totalInvested
    const roi = (profit / totalInvested) * 100

    return {
      totalInvested: totalInvested.toFixed(2),
      finalValue: currentValue.toFixed(2),
      profit: profit.toFixed(2),
      roi: roi.toFixed(2),
    }
  }

  const results = calculateResults()

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/simulators">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Simulateur d'investissement Crypto</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Paramètres</CardTitle>
            <CardDescription>Ajustez les valeurs pour simuler votre investissement en cryptomonnaies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="dca" className="space-y-4">
              <TabsList>
                <TabsTrigger value="dca">DCA</TabsTrigger>
                <TabsTrigger value="staking">Staking</TabsTrigger>
                <TabsTrigger value="advanced">Avancé</TabsTrigger>
              </TabsList>

              <TabsContent value="dca" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cryptoType">Cryptomonnaie</Label>
                  <Select value={cryptoType} onValueChange={setCryptoType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une crypto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bitcoin">Bitcoin (BTC)</SelectItem>
                      <SelectItem value="ethereum">Ethereum (ETH)</SelectItem>
                      <SelectItem value="solana">Solana (SOL)</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="initialInvestment">Investissement initial (€)</Label>
                  <div className="flex items-center gap-2">
                    <Slider
                      id="initialInvestment"
                      min={0}
                      max={10000}
                      step={100}
                      value={[initialInvestment]}
                      onValueChange={(value) => setInitialInvestment(value[0])}
                    />
                    <Input
                      type="number"
                      value={initialInvestment}
                      onChange={(e) => setInitialInvestment(Number(e.target.value))}
                      className="w-24"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthlyContribution">Contribution mensuelle (€)</Label>
                  <div className="flex items-center gap-2">
                    <Slider
                      id="monthlyContribution"
                      min={0}
                      max={1000}
                      step={10}
                      value={[monthlyContribution]}
                      onValueChange={(value) => setMonthlyContribution(value[0])}
                    />
                    <Input
                      type="number"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                      className="w-24"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Durée (mois)</Label>
                  <div className="flex items-center gap-2">
                    <Slider
                      id="duration"
                      min={1}
                      max={60}
                      step={1}
                      value={[duration]}
                      onValueChange={(value) => setDuration(value[0])}
                    />
                    <Input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="w-24"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expectedReturn">Rendement annuel estimé (%)</Label>
                  <div className="flex items-center gap-2">
                    <Slider
                      id="expectedReturn"
                      min={-20}
                      max={100}
                      step={1}
                      value={[expectedReturn]}
                      onValueChange={(value) => setExpectedReturn(value[0])}
                    />
                    <Input
                      type="number"
                      value={expectedReturn}
                      onChange={(e) => setExpectedReturn(Number(e.target.value))}
                      className="w-24"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="staking" className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="useStaking" checked={useStaking} onCheckedChange={setUseStaking} />
                  <Label htmlFor="useStaking">Activer le staking</Label>
                </div>

                {useStaking && (
                  <div className="space-y-2">
                    <Label htmlFor="stakingAPY">APY du staking (%)</Label>
                    <div className="flex items-center gap-2">
                      <Slider
                        id="stakingAPY"
                        min={1}
                        max={20}
                        step={0.5}
                        value={[stakingAPY]}
                        onValueChange={(value) => setStakingAPY(value[0])}
                      />
                      <Input
                        type="number"
                        value={stakingAPY}
                        onChange={(e) => setStakingAPY(Number(e.target.value))}
                        className="w-24"
                      />
                    </div>
                  </div>
                )}

                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium mb-2">Qu'est-ce que le staking ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Le staking consiste à verrouiller vos cryptomonnaies pour participer au fonctionnement d'un réseau
                    blockchain et recevoir des récompenses en échange. C'est similaire à un compte d'épargne qui génère
                    des intérêts.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium mb-2">Paramètres avancés</h3>
                  <p className="text-sm text-muted-foreground">
                    Les paramètres avancés seront disponibles dans une prochaine mise à jour. Ils incluront la
                    volatilité, les frais de transaction, les impôts et d'autres facteurs pour une simulation plus
                    précise.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Résultats</CardTitle>
            <CardDescription>Analyse de votre investissement en crypto</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                <span className="text-sm text-muted-foreground">Investissement total</span>
                <span className="text-2xl font-bold">{results.totalInvested}€</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                <span className="text-sm text-muted-foreground">Valeur finale</span>
                <span className="text-2xl font-bold">{results.finalValue}€</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                <span className="text-sm text-muted-foreground">Profit</span>
                <span
                  className={`text-2xl font-bold ${Number(results.profit) >= 0 ? "text-green-500" : "text-red-500"}`}
                >
                  {results.profit}€
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                <span className="text-sm text-muted-foreground">ROI</span>
                <span className={`text-2xl font-bold ${Number(results.roi) >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {results.roi}%
                </span>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Analyse</h3>
              <p className="text-sm text-muted-foreground">
                {Number(results.roi) > 20
                  ? "Cette simulation montre un excellent retour sur investissement. N'oubliez pas que les marchés crypto sont volatils et que les performances passées ne garantissent pas les résultats futurs."
                  : Number(results.roi) > 0
                    ? "Cette simulation montre un retour sur investissement positif. Continuez à surveiller le marché et ajustez votre stratégie si nécessaire."
                    : "Cette simulation montre un retour sur investissement négatif. Considérez d'ajuster votre stratégie ou d'étendre votre horizon d'investissement."}
              </p>
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
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

