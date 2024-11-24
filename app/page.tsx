import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Découvrez la Blockchain</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Plongez dans l&apos;univers révolutionnaire de la blockchain et du Web3
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Qu&apos;est-ce que la Blockchain ?</CardTitle>
            <CardDescription>Les fondamentaux de cette technologie révolutionnaire</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
              alt="Blockchain Illustration"
              width={400}
              height={200}
              className="rounded-lg w-full object-cover"
            />
            <p>
              La blockchain est une technologie de stockage et de transmission d&apos;informations transparente et sécurisée.
              Elle fonctionne sans organe central de contrôle, à l&apos;image d&apos;un grand livre comptable public et infalsifiable.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Commencez avec MetaMask</CardTitle>
            <CardDescription>Votre passerelle vers le Web3</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="/metamask2.webp"
              alt="MetaMask"
              width={400}
              height={200}
              className="rounded-lg w-full object-cover"
            />
            <p>
              MetaMask est le portefeuille crypto le plus populaire pour accéder aux applications Web3.
              Installez-le pour commencer votre voyage dans la blockchain.
            </p>
            <Button className="w-full" asChild>
              <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Télécharger MetaMask
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Les Avantages de la Blockchain</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: "Décentralisation",
                description: "Pas d'autorité centrale, le pouvoir est distribué"
              },
              {
                title: "Transparence",
                description: "Toutes les transactions sont publiques et vérifiables"
              },
              {
                title: "Sécurité",
                description: "Cryptographie avancée pour protéger les données"
              },
              {
                title: "Immutabilité",
                description: "Les données ne peuvent pas être modifiées une fois enregistrées"
              },
              {
                title: "Automatisation",
                description: "Smart contracts pour automatiser les processus"
              },
              {
                title: "Accessibilité",
                description: "Accessible à tous, partout dans le monde"
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
  );
}