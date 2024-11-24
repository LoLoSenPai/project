import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function NFTPage() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Comprendre les NFTs</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Découvrez le monde des tokens non-fongibles et leur impact sur l&apos;art numérique
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Qu&apos;est-ce qu&apos;un NFT ?</CardTitle>
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
            <p>
              Un NFT (Token Non Fongible) est un certificat numérique unique stocké sur la blockchain.
              Contrairement aux cryptomonnaies, chaque NFT est unique et ne peut pas être remplacé par un autre.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Utilisations des NFTs</CardTitle>
            <CardDescription>Les différents cas d&apos;usage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {[
                {
                  title: "Art Numérique",
                  description: "Œuvres d'art uniques avec preuve de propriété"
                },
                {
                  title: "Gaming",
                  description: "Objets de jeu uniques et échangeables"
                },
                {
                  title: "Musique",
                  description: "Albums et droits musicaux tokenisés"
                },
                {
                  title: "Immobilier",
                  description: "Titres de propriété numériques"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
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

      <Card>
        <CardHeader>
          <CardTitle>Comment acheter des NFTs</CardTitle>
          <CardDescription>Guide étape par étape</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Créer un portefeuille crypto",
                description: "Installez MetaMask ou un autre portefeuille compatible"
              },
              {
                step: "2",
                title: "Acheter de la crypto",
                description: "Achetez ETH ou la crypto nécessaire pour l'achat"
              },
              {
                step: "3",
                title: "Choisir une marketplace",
                description: "OpenSea, Rarible, ou d'autres plateformes populaires"
              },
              {
                step: "4",
                title: "Connecter son portefeuille",
                description: "Liez votre portefeuille à la marketplace"
              },
              {
                step: "5",
                title: "Acheter un NFT",
                description: "Trouvez et achetez votre premier NFT"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <Badge variant="outline" className="w-8 h-8 flex items-center justify-center rounded-full">
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