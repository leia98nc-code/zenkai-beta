import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Target, Users, Shield, Zap } from "lucide-react";
import leiaLogo from "@/assets/leia-logo.png";
const About = () => {
  return <div className="min-h-screen flex flex-col bg-sand">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-sand py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-sumi">
                À propos de{" "}
                <span className="text-navy">
                  Zenkai
                </span>
              </h1>
              <p className="text-xl text-stone">
                L'IA au service de la gestion de votre entreprise
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold font-serif text-sumi">Notre Mission</h2>
                <p className="text-lg text-stone max-w-2xl mx-auto leading-relaxed">
                  Accompagner les TPE et PME calédoniennes vers une gestion de leur entreprises intégrant l'intelligence artificielle.
                </p>
              </div>

              <div className="bg-sand-dark p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-navy mb-4 font-serif">Notre positionnement unique</h3>
                <ul className="space-y-3 text-stone">
                  <li>• Une expertise managériale couplée à la puissance de l'IA, par des solutions concrètes d'utilisation</li>
                  <li>• L'IA comme outil, pour centrer les compétences humaines sur les activités à forte valeur ajoutée                                                                                                                                                                                                                                                                                                                              </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Baptiste Faure */}
        <section className="py-20 bg-gradient-sand">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-zen p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-navy" />
                  <h2 className="text-3xl font-bold font-serif text-sumi">Baptiste Faure</h2>
                </div>
                <p className="text-lg text-stone mb-4">Fondateur de Zenkai</p>
                <p className="text-stone leading-relaxed mb-4">
                  Fort de 10 années d'expérience en management stratégique, Baptiste FAURE combine avec Zenkai une expertise métier éprouvée avec une maîtrise des technologies d'IA les plus performantes.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-sand-dark p-6 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Expertise</h4>
                    <p className="text-sm text-stone">10 années en gestion des organisations, spécialisé droit social. Formateur certifié.</p>
                  </div>
                  <div className="bg-sand-dark p-6 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Innovation</h4>
                    <p className="text-sm text-stone">La puissance de l'intelligence artificielle accessible à chacun facilement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <h2 className="text-3xl font-bold text-center font-serif text-sumi">Notre accompagnement RH</h2>
              <p className="text-lg text-stone text-center max-w-3xl mx-auto">
                Nous intervenons sur une large gamme de situations RH, transformant les défis en opportunités grâce à notre expertise boostée à l'intelligence artificielle.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-zen">
                  <CardContent className="p-6 space-y-3">
                    <Shield className="w-8 h-8 text-navy" />
                    <h3 className="text-xl font-semibold font-serif text-sumi">Audits de Conformité</h3>
                    <p className="text-stone">
                      Réalisez un diagnostic approfondi de vos pratiques RH pour prévenir les risques légaux et optimiser vos processus.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-zen">
                  <CardContent className="p-6 space-y-3">
                    <Bot className="w-8 h-8 text-navy" />
                    <h3 className="text-xl font-semibold font-serif text-sumi">LEIA</h3>
                    <p className="text-stone">
                      Votre assistant IA spécialisé en droit du travail, disponible 24/7 pour répondre à toutes vos questions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-zen">
                  <CardContent className="p-6 space-y-3">
                    <Users className="w-8 h-8 text-navy" />
                    <h3 className="text-xl font-semibold font-serif text-sumi">Ateliers</h3>
                    <p className="text-stone">
                      Nous animons des ateliers pratiques pour faciliter la collaboration et l'émergence de solutions avec votre personnel.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-zen">
                  <CardContent className="p-6 space-y-3">
                    <Zap className="w-8 h-8 text-navy" />
                    <h3 className="text-xl font-semibold font-serif text-sumi">Plans stratégiques</h3>
                    <p className="text-stone">
                      Nous concevons des plans stratégiques personnalisés pour implémenter les changements nécessaires à votre entreprise.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Engagements */}
        <section className="py-20 bg-sand-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-center font-serif text-sumi">Nos Engagements</h2>

              <div className="space-y-6">
                <Card className="border-0 shadow-zen">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 font-serif text-sumi">
                      Protection des Données
                    </h3>
                    <p className="text-stone">
                      Vos conversations avec LEIA sont strictement confidentielles.
                      Nous respectons le RGPD et ne partageons jamais vos données
                      personnelles avec des tiers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-zen">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 font-serif text-sumi">Neutralité</h3>
                    <p className="text-stone">
                      LEIA fournit des informations objectives basées uniquement sur
                      la législation en vigueur, sans parti pris ni influence
                      externe.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-zen">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 font-serif text-sumi">Fiabilité</h3>
                    <p className="text-stone">
                      Nous mettons régulièrement à jour LEIA pour refléter les
                      dernières évolutions législatives et garantir l'exactitude des
                      informations fournies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>;
};
export default About;