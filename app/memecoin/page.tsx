import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Image from "next/image";

export default function MemecoinPage() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Le Phénomène Memecoin</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprendre la tendance des cryptomonnaies basées sur les mèmes
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Qu&apos;est-ce qu&apos;un Memecoin ?</CardTitle>
            <CardDescription>Origine et concept</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="/dogetv-transparent.png"
              alt="Memecoin Concept"
              width={400}
              height={200}
              className="rounded-lg w-full object-cover"
            />
            <p>
              Les memecoins sont des cryptomonnaies inspirées par des mèmes internet
              ou des phénomènes culturels. Leur valeur est souvent basée sur le
              sentiment communautaire et le marketing viral plutôt que sur une utilité
              technique.
            </p>
          </CardContent>
        </Card>

        <Card className="border-yellow-500">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              <CardTitle>Risques et Précautions</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Volatilité Extrême",
                  description: "Les prix peuvent varier drastiquement en quelques heures"
                },
                {
                  title: "Manipulation de Marché",
                  description: "Risque élevé de pump and dump par les gros détenteurs"
                },
                {
                  title: "Absence de Valeur Fondamentale",
                  description: "Peu ou pas d'utilité réelle derrière le token"
                },
                {
                  title: "FOMO",
                  description: "Ne vous laissez pas emporter par la peur de rater une opportunité"
                }
              ].map((item, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Histoire des Memecoins</CardTitle>
          <CardDescription>Les moments clés de l&apos;évolution des memecoins</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute left-0 w-px h-full bg-border" />
              {[
                {
                  year: "2013",
                  title: "Naissance de Dogecoin",
                  description: "Créé comme une blague, devient le premier memecoin populaire"
                },
                {
                  year: "2020",
                  title: "Explosion de la DeFi",
                  description: "Multiplication des tokens communautaires"
                },
                {
                  year: "2021",
                  title: "L'année Shiba Inu",
                  description: "SHIB devient un phénomène mondial"
                },
                {
                  year: "2023",
                  title: "Nouvelle Génération",
                  description: "Émergence de nouveaux memecoins sur différentes blockchains"
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-8 pb-8">
                  <div className="absolute left-0 w-2 h-2 -translate-x-[3px] rounded-full bg-primary" />
                  <div className="space-y-1">
                    <div className="font-semibold">{item.year}</div>
                    <div className="text-lg font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}