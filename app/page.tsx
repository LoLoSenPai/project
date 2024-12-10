import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Layers, Shield, Globe } from "lucide-react";
import InfoCard from "@/components/InfoCard";
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
        <InfoCard
          title="Qu'est-ce que la Blockchain ?"
          description="Les fondamentaux de cette technologie révolutionnaire"
          imageUrl="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
        >
          <p>
            La blockchain est une technologie de stockage et de transmission d'informations transparente et sécurisée.
            Elle fonctionne sans organe central de contrôle, à l'image d'un grand livre comptable public et infalsifiable.
          </p>
          <p>
            L'intérêt principal de la blockchain réside dans sa capacité à garantir la décentralisation, la transparence,
            et la sécurité des transactions. C'est une réponse technologique à la perte de confiance envers les systèmes centralisés.
          </p>
        </InfoCard>

        {/* Pourquoi les Crypto ? */}
        <InfoCard
          title="Pourquoi les Crypto ?"
          description="Les raisons derrière l'essor des cryptomonnaies"
          imageUrl="https://plus.unsplash.com/premium_photo-1681400668073-a1947604dd36?auto=format&fit=crop&q=80&w=800"
        >
          <p>
            Les cryptomonnaies permettent de contourner les institutions financières traditionnelles qui agissent comme tiers de confiance.
            Elles offrent une liberté financière et une souveraineté sur vos actifs.
          </p>
          <p>
            La blockchain garantit une traçabilité et une immuabilité des transactions, réduisant ainsi le risque de fraude et de corruption.
          </p>
          <p>
            L&apos;aspect philosophique des cryptos repose sur la volonté de créer un système financier plus juste, ouvert,
            et accessible à tous, sans discrimination.
          </p>
        </InfoCard>
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
              { title: "Décentralisation", description: "Pas d'autorité centrale, le pouvoir est distribué" },
              { title: "Transparence", description: "Toutes les transactions sont publiques et vérifiables" },
              { title: "Sécurité", description: "Cryptographie avancée pour protéger les données" },
              { title: "Immutabilité", description: "Les données ne peuvent pas être modifiées une fois enregistrées" },
              { title: "Automatisation", description: "Smart contracts pour automatiser les processus" },
              { title: "Accessibilité", description: "Accessible à tous, partout dans le monde" },
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div >
  );
}
