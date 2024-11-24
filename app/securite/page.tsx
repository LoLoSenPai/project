import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function SecurityPage() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Sécurité dans le Web3</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Protégez-vous contre les arnaques et sécurisez vos actifs numériques
        </p>
      </section>

      <Card className="border-destructive">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Attention aux Arnaques Courantes</CardTitle>
          </div>
          <CardDescription>Les pièges à éviter dans l&apos;écosystème Web3</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Phishing",
                description: "Méfiez-vous des sites frauduleux qui imitent des plateformes légitimes"
              },
              {
                title: "Faux Airdrops",
                description: "Ne connectez jamais votre portefeuille à des sites d'airdrops suspects"
              },
              {
                title: "Pump and Dump",
                description: "Évitez les tokens promus agressivement sur les réseaux sociaux"
              },
              {
                title: "Faux Support",
                description: "Le vrai support ne demandera jamais votre phrase secrète"
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

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Bonnes Pratiques de Sécurité</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=800"
              alt="Security"
              width={400}
              height={200}
              className="rounded-lg w-full object-cover"
            />
            <div className="space-y-2">
              {[
                "Utilisez un portefeuille hardware pour les gros montants",
                "Activez l'authentification à deux facteurs",
                "Ne partagez jamais votre phrase secrète",
                "Vérifiez toujours les adresses de transaction",
                "Faites des sauvegardes sécurisées"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pocket Universe - Protection Avancée</CardTitle>
            <CardDescription>Extension de sécurité recommandée</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="https://framerusercontent.com/assets/jkD0b0uNqorjwdFJZ19n7JflTw.png"
              alt="Pocket Universe"
              width={400}
              height={200}
              className="rounded-lg w-full object-cover"
            />
            <p>
              Pocket Universe est une extension Chrome GRATUITE, qui analyse les transactions
              et vous protège contre les sites malveillants et les contrats suspects.
            </p>
            <Button className="w-full" asChild>
              <a
                href="https://www.pocketuniverse.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Installer Pocket Universe
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}