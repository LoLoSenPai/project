import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CreditCard, Wallet, Send } from "lucide-react";
import Image from "next/image";

export default function CryptoPage() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
          Acheter ses Premières Cryptomonnaies
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Guide étape par étape pour acquérir et gérer vos cryptomonnaies en toute sécurité
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-6 w-6 text-purple-500" />
              <span>Binance : La Plateforme d&apos;Échange</span>
            </CardTitle>
            <CardDescription>Première étape pour acheter des cryptos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800"
              alt="Binance Platform"
              width={400}
              height={200}
              className="rounded-lg w-full object-cover"
            />
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Binance est l&apos;une des plus grandes plateformes d&apos;échange de cryptomonnaies.
                Elle permet d&apos;acheter des cryptos directement avec votre carte bancaire.
              </p>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600" asChild>
                <a href="https://www.binance.com/fr/register" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Créer un compte Binance
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-500/20 hover:border-blue-500/40 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Wallet className="h-6 w-6 text-blue-500" />
              <span>MetaMask : Votre Portefeuille</span>
            </CardTitle>
            <CardDescription>Pour stocker et gérer vos cryptos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="/metamask2.webp"
              alt="MetaMask Wallet"
              width={400}
              height={200}
              className="rounded-lg w-full object-cover"
            />
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                MetaMask est un portefeuille crypto qui vous permet de stocker vos cryptomonnaies
                et d&apos;interagir avec les applications Web3.
              </p>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" asChild>
                <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Installer MetaMask
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 border-pink-500/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Send className="h-6 w-6 text-pink-500" />
            <span>Guide d&apos;Achat et Transfert</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Créer un compte Binance",
                description: "Inscrivez-vous et complétez la vérification KYC"
              },
              {
                step: "2",
                title: "Acheter des cryptos",
                description: "Utilisez votre carte bancaire pour acheter USDT ou n'importe quelle crypto"
              },
              {
                step: "3",
                title: "Installer MetaMask",
                description: "Téléchargez l'extension et créez un portefeuille"
              },
              {
                step: "4",
                title: "Copier l'adresse MetaMask",
                description: "Cliquez sur 'Compte' pour copier votre adresse"
              },
              {
                step: "5",
                title: "Retrait sur Binance",
                description: "Sélectionnez 'Retrait' et collez l'adresse MetaMask"
              },
              {
                step: "6",
                title: "Confirmer le transfert",
                description: "Vérifiez les détails et confirmez la transaction"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5">
                <Badge variant="outline" className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
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

      <Card className="border-2 border-gradient-to-r from-purple-500/20 to-blue-500/20">
        <CardHeader>
          <CardTitle>Conseils Importants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Frais de Transaction",
                description: "Prenez en compte les frais de retrait de Binance"
              },
              {
                title: "Réseaux Compatibles",
                description: "Vérifiez le réseau utilisé (ETH, BSC, etc.)"
              },
              {
                title: "Montants Tests",
                description: "Commencez par de petits montants pour tester"
              },
              {
                title: "Double Vérification",
                description: "Vérifiez toujours l'adresse de destination"
              }
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5">
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