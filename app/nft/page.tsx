import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageIcon, Music, Globe, Gamepad2 } from "lucide-react";
import Image from "next/image";

export default function NFTPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
          Comprendre les NFTs
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Découvrez le monde des tokens non-fongibles et leur impact sur l&apos;art numérique
        </p>
      </section>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Qu'est-ce qu'un NFT */}
        <Card className="border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ImageIcon className="h-6 w-6 text-purple-500" />
              <span>Qu&apos;est-ce qu&apos;un NFT ?</span>
            </CardTitle>
            <CardDescription>Token Non Fongible expliqué simplement</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="/whatarenfts.jpg"
              alt="NFT Art"
              width={400}
              height={200}
              className="rounded-lg w-full object-cover"
            />
            <p className="text-sm text-muted-foreground">
              Un NFT (Token Non Fongible) est un certificat numérique unique stocké sur la blockchain.
              Contrairement aux cryptomonnaies, chaque NFT est unique et ne peut pas être remplacé par un autre.
            </p>
          </CardContent>
        </Card>

        {/* Utilisations des NFTs */}
        <Card className="border-2 border-blue-500/20 hover:border-blue-500/40 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-blue-500" />
              <span>Utilisations des NFTs</span>
            </CardTitle>
            <CardDescription>Les différents cas d&apos;usage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {[
                {
                  icon: <ImageIcon className="h-6 w-6 text-orange-500" />,
                  title: "Art Numérique",
                  description: "Œuvres d'art uniques avec preuve de propriété",
                },
                {
                  icon: <Gamepad2 className="h-6 w-6 text-green-500" />,
                  title: "Gaming",
                  description: "Objets de jeu uniques et échangeables",
                },
                {
                  icon: <Music className="h-6 w-6 text-pink-500" />,
                  title: "Musique",
                  description: "Albums et droits musicaux tokenisés",
                },
                {
                  icon: <Globe className="h-6 w-6 text-blue-500" />,
                  title: "Immobilier",
                  description: "Titres de propriété numériques",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5"
                >
                  {item.icon}
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Guide étape par étape */}
      <Card className="border-2 border-pink-500/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-pink-500" />
            <span>Comment acheter des NFTs</span>
          </CardTitle>
          <CardDescription>Guide étape par étape</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Créer un portefeuille crypto",
                description: "Installez MetaMask ou un autre portefeuille compatible",
              },
              {
                step: "2",
                title: "Acheter de la crypto",
                description: "Achetez ETH ou la crypto nécessaire pour l'achat",
              },
              {
                step: "3",
                title: "Choisir une marketplace",
                description: "OpenSea, Rarible, ou d'autres plateformes populaires",
              },
              {
                step: "4",
                title: "Connecter son portefeuille",
                description: "Liez votre portefeuille à la marketplace",
              },
              {
                step: "5",
                title: "Acheter un NFT",
                description: "Trouvez et achetez votre premier NFT",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5"
              >
                <Badge
                  variant="outline"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0"
                >
                  {item.step}
                </Badge>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
