import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Layers, Shield, Globe } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
          Découvrez la Blockchain
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Plongez dans l&apos;univers révolutionnaire de la blockchain et du Web3
        </p>
      </section>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Qu'est-ce que la Blockchain ? */}
        <Card className="border-2 border-blue-500/20 hover:border-blue-500/40 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-blue-500" />
              <span>Qu&apos;est-ce que la Blockchain ?</span>
            </CardTitle>
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
            <p className="text-sm text-muted-foreground">
              La blockchain est une technologie de stockage et de transmission d&apos;informations transparente et sécurisée.
              Elle fonctionne sans organe central de contrôle, à l&apos;image d&apos;un grand livre comptable public et infalsifiable.
            </p>
          </CardContent>
        </Card>

        {/* Commencez avec MetaMask */}
        <Card className="border-2 border-green-500/20 hover:border-green-500/40 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-green-500" />
              <span>Commencez avec MetaMask</span>
            </CardTitle>
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
            <p className="text-sm text-muted-foreground">
              MetaMask est le portefeuille crypto le plus populaire pour accéder aux applications Web3.
              Installez-le pour commencer votre voyage dans la blockchain.
            </p>
            <Button
              className="w-full bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 hover:from-pink-600 hover:via-blue-600 hover:to-green-600 text-orange-500"
              asChild
            >
              <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4 text-orange-500" />
                Télécharger MetaMask
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Les Avantages de la Blockchain */}
      <Card className="border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Layers className="h-6 w-6 text-purple-500" />
            <span>Les Avantages de la Blockchain</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: "Décentralisation",
                description: "Pas d'autorité centrale, le pouvoir est distribué",
              },
              {
                title: "Transparence",
                description: "Toutes les transactions sont publiques et vérifiables",
              },
              {
                title: "Sécurité",
                description: "Cryptographie avancée pour protéger les données",
              },
              {
                title: "Immutabilité",
                description: "Les données ne peuvent pas être modifiées une fois enregistrées",
              },
              {
                title: "Automatisation",
                description: "Smart contracts pour automatiser les processus",
              },
              {
                title: "Accessibilité",
                description: "Accessible à tous, partout dans le monde",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5"
              >
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
