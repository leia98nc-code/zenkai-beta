import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Sparkles, FileText } from "lucide-react";
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
              
            </div>
          </div>
        </section>

        {/* Qui sommes-nous */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-6 font-serif">Qui sommes-nous ?</h2>
              <p className="text-xl text-stone leading-relaxed mb-8">
                Zenkai est votre partenaire de confiance pour l'intégration de l'Intelligence Artificielle dans votre entreprise.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-sand-dark p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-navy mb-4 font-serif">Notre mission</h3>
                  <p className="text-lg text-sumi">
                    Accompagner les TPE et PME calédoniennes vers une gestion de leur entreprise intégrant l'intelligence artificielle.
                  </p>
                </div>
                <div className="bg-sand-dark p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-navy mb-4 font-serif">Nos produits</h3>
                  <p className="text-lg text-sumi">
                    Nous proposons des solutions IA prêt-à-usage ou sur-mesure selon vos besoins.
                  </p>
                </div>
              </div>
              <div className="bg-sand-dark p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-navy mb-4 font-serif">Nos services</h3>
                <p className="text-lg text-sumi">
                  Nous conseillons et formons en usage de l'IA, ainsi qu'en gestion managériale et ressources humaines.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-navy hover:bg-navy/90 text-white">
                  <a href="https://app.zenkai.nc/documents/Pr%C3%A9sentationZENKAI.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-5 h-5 mr-2" />
                    Découvrez notre plaquette de présentation
                  </a>
                </Button>
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
                  Fort de 10 années d'expérience en management stratégique, Baptiste FAURE combine dans Zenkai une expertise métier éprouvée avec une maîtrise des technologies d'IA les plus performantes.
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

        {/* Pourquoi choisir Zenkai */}
        <section className="bg-gradient-sand py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-12 text-center font-serif">Pourquoi choisir Zenkai ?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-8 bg-white border-0 shadow-zen text-center">
                  <h3 className="text-xl font-bold text-navy mb-4 font-serif">Expertise métier reconnue</h3>
                  <p className="text-stone leading-relaxed">10 années d'expérience en gestion des organisations, spécialisé droit social. Connaissance fine des TPE/PME de Nouvelle-Calédonie. Formateur certifié.</p>
                </Card>
                <Card className="p-8 bg-white border-0 shadow-zen text-center">
                  <h3 className="text-xl font-bold text-navy mb-4 font-serif">Intégration de l'IA</h3>
                  <p className="text-stone leading-relaxed">Proposer des solutions no-code, intuitive et efficace, adaptée à vos besoins.</p>
                </Card>
                <Card className="p-8 bg-white border-0 shadow-zen text-center">
                  <h3 className="text-xl font-bold text-navy mb-4 font-serif">Ancrage local fort</h3>
                  <p className="text-stone leading-relaxed">Spécialisation en droit calédonien. Réseau professionnel établi. Disponibilité et proximité garanties.</p>
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