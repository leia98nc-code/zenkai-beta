import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Sparkles } from "lucide-react";
import leiaLogo from "@/assets/leia-logo.png";
const About = () => {
  const benefits = [{
    icon: <Users className="w-5 h-5" />,
    title: "Compétences humaines",
    description: "ZENKAI apporte un accompagnement sur mesure, ancré dans une expertise locale approfondie des entreprises et organisations. L'IA n'est pas une fin en soit mais est un outil pour maximiser le savoir-faire humain."
  }, {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Intelligence artificielle",
    description: "ZENKAI rend l'Intelligence Artificielle accessible, concrète et mesurable, en offrant des solutions clés en main, des outils prêts à l'emploi. Elle favorise ainsi l'adaptation de votre entreprise à l'intelligence artificielle dans une démarche stratégique et perspicace."
  }];
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
                    <p className="text-sm text-stone">La puissance des meilleurs modèles d'intelligence artificielle, accessible à chacun facilement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre positionnement */}
        <section className="py-20 bg-sand">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-12 text-center font-serif">Notre positionnement</h2>
              <p className="text-xl text-stone text-center mb-16 leading-relaxed">
                Avec ZENKAI, optimisez vos processus et la gestion interne de votre entreprises. Concentrez-vous sur la croissance de vos activités, en réduisant les tâches répétitives, chronophages et manuelles.
              </p>
              <div className="space-y-6 max-w-3xl mx-auto">
                {benefits.map((benefit, idx) => <div key={idx} className="bg-white p-8 rounded-lg border border-border shadow-zen hover:shadow-hover transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-navy mt-1">{benefit.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-sumi mb-3">{benefit.title}</h3>
                        <p className="text-stone leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>)}
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