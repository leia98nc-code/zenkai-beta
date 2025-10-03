import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Target, Users, Shield, Zap } from "lucide-react";
import leiaLogo from "@/assets/leia-logo.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-background via-primary/5 to-accent/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                À propos de{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  LEIA
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                L'Expert Intelligent Administratif au service des Calédoniens
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold">Notre Mission</h2>
                <p className="text-lg text-muted-foreground">
                  Rendre le droit du travail et les procédures administratives
                  accessibles à tous en Nouvelle-Calédonie grâce à l'intelligence
                  artificielle. LEIA démocratise l'accès à l'information juridique
                  pour permettre à chacun de connaître et faire valoir ses droits.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <img 
                      src={leiaLogo} 
                      alt="LEIA Logo" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <h3 className="text-xl font-semibold">Technologie IA Avancée</h3>
                    <p className="text-muted-foreground">
                      LEIA utilise les dernières avancées en intelligence
                      artificielle pour comprendre vos questions et y répondre avec
                      précision, en langage naturel.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-3">
                    <Shield className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Sources Officielles</h3>
                    <p className="text-muted-foreground">
                      Toutes les réponses de LEIA sont basées sur la législation
                      officielle de Nouvelle-Calédonie, les codes du travail locaux
                      et les textes réglementaires en vigueur.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-3">
                    <Users className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Pour Tous</h3>
                    <p className="text-muted-foreground">
                      Que vous soyez salarié, employeur, entrepreneur ou RH, LEIA
                      est conçue pour répondre à vos questions juridiques
                      spécifiques avec clarté.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-3">
                    <Zap className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Disponible 24/7</h3>
                    <p className="text-muted-foreground">
                      LEIA ne dort jamais. Obtenez des réponses instantanées à vos
                      questions juridiques, à toute heure du jour ou de la nuit.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-center">Nos Engagements</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Protection des Données
                    </h3>
                    <p className="text-muted-foreground">
                      Vos conversations avec LEIA sont strictement confidentielles.
                      Nous respectons le RGPD et ne partageons jamais vos données
                      personnelles avec des tiers.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Neutralité</h3>
                    <p className="text-muted-foreground">
                      LEIA fournit des informations objectives basées uniquement sur
                      la législation en vigueur, sans parti pris ni influence
                      externe.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Fiabilité</h3>
                    <p className="text-muted-foreground">
                      Nous mettons régulièrement à jour LEIA pour refléter les
                      dernières évolutions législatives et garantir l'exactitude des
                      informations fournies.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Transparence</h3>
                    <p className="text-muted-foreground">
                      LEIA cite toujours ses sources et indique clairement les
                      limites de ses réponses. Elle ne remplace pas un conseil
                      juridique personnalisé par un professionnel.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-destructive/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-center text-sm text-muted-foreground">
                <strong>Important :</strong> LEIA est un outil d'information
                juridique et ne constitue pas un conseil juridique personnalisé. Pour
                des situations complexes ou des litiges, nous vous recommandons de
                consulter un avocat qualifié en Nouvelle-Calédonie.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
