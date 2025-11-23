import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import leiaAvatar from "@/assets/leia-avatar.png";
import { MessageSquare, Users, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-sand">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-sand py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-sumi">
              Nos{" "}
              <span className="text-navy">
                Produits IA
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* LEIA - Produit Principal */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex justify-center md:justify-start mb-6">
                  <img 
                    src={leiaAvatar} 
                    alt="LEIA - L'Expert Intelligent Administratif" 
                    className="w-32 h-32 rounded-full shadow-zen" 
                  />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-6 font-serif">LEIA</h2>
                <p className="text-xl text-navy font-semibold mb-4">
                  L'Expert RH    
                </p>
                <p className="text-lg text-stone leading-relaxed mb-8">
                  Assistant IA spécialisé en droit du travail applicable en Nouvelle-Calédonie. 
                  LEIA répond à vos questions 24/7 avec une expertise validée par des professionnels.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-navy hover:bg-navy-light transition-all duration-300 shadow-zen hover:shadow-hover"
                >
                  <Link to="/auth">Essayer LEIA<ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
              <div className="space-y-4">
                <Card className="p-6 bg-sand border-0 shadow-zen hover:shadow-hover transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sumi mb-2">Base juridique complète</h4>
                      <p className="text-stone">Code du travail NC, AIT, conventions collectives, jurisprudences et fiches pratiques</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-sand border-0 shadow-zen hover:shadow-hover transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sumi mb-2">Accompagnement RH complet</h4>
                      <p className="text-stone">Conseils en gestion des ressources humaines, formation des équipes et accompagnement personnalisé</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-sand border-0 shadow-zen hover:shadow-hover transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sumi mb-2">Human in the loop</h4>
                      <p className="text-stone">Accès à l'expertise humaine en soutien pour les cas complexes</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-sand border-0 shadow-zen hover:shadow-hover transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sumi mb-2">Multi-plateforme</h4>
                      <p className="text-stone">Accessible sur le web, WhatsApp ou Messenger</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="text-center">
              <Card className="inline-block p-6 bg-navy border-0">
                <p className="text-lg font-semibold text-white">À partir de 4 900 XPF/mois</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIA - Communication Automatisée */}
      <section className="bg-sand-dark py-32">
        <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-4">
              <Card className="p-6 bg-white border-0 shadow-zen hover:shadow-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-sumi mb-2">Community manager IA</h4>
                    <p className="text-stone">
                      Un agent IA spécialiste des réseaux sociaux qui crée le post idéal pour votre audience
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white border-0 shadow-zen hover:shadow-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-sumi mb-2">Images générées par IA ou recherche web</h4>
                    <p className="text-stone">
                      Publiez vos propres images ou utilisez l'IA générative pour créer des visuels percutants
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white border-0 shadow-zen hover:shadow-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-sumi mb-2">Automatisation flexible</h4>
                    <p className="text-stone">
                      Adaptez l'outil à vos besoins : créez vos contenus avec assistance IA ou automatisez entièrement la production
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center shadow-zen">
                  <MessageSquare className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-6 font-serif">SOCIA</h2>
              <p className="text-xl text-navy font-semibold mb-4">
                Communication Automatisée
              </p>
              <p className="text-lg text-stone leading-relaxed mb-8">
                Automatisez votre webmarketing avec une IA qui produit vos campagnes selon vos critères
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-navy hover:bg-navy-light transition-all duration-300 shadow-zen hover:shadow-hover"
              >
                <a href="http://localhost:5678/form/form-cm" target="_blank" rel="noopener noreferrer">
                  Démo gratuite<ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Automatisations Personnalisées */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex justify-center md:justify-start mb-6">
                  <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center shadow-zen">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-6 font-serif">
                  Automatisations Personnalisées
                </h2>
                <p className="text-xl text-navy font-semibold mb-4">
                  Sur-Mesure Pour Votre Entreprise
                </p>
                <p className="text-lg text-stone leading-relaxed mb-8">
                  Nous développons des solutions d'automatisation intelligente adaptées à vos processus métier spécifiques. De la gestion documentaire à la création de contenus, libérez votre équipe des tâches répétitives.
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300"
                >
                  <Link to="/about">Contactez-nous</Link>
                </Button>
              </div>
              <div className="space-y-4">
                <Card className="p-6 bg-sand border-0 shadow-zen hover:shadow-hover transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sumi mb-2">Analyse des besoins</h4>
                      <p className="text-stone">Étude approfondie de vos processus pour identifier les opportunités d'automatisation</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-sand border-0 shadow-zen hover:shadow-hover transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sumi mb-2">Développement sur-mesure</h4>
                      <p className="text-stone">Solutions adaptées à votre contexte et intégrées à vos outils existants</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-sand border-0 shadow-zen hover:shadow-hover transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sumi mb-2">Formation et accompagnement</h4>
                      <p className="text-stone">Nous formons vos équipes à l'utilisation et à la maintenance des solutions</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-sand border-0 shadow-zen hover:shadow-hover transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sumi mb-2">Support continu</h4>
                      <p className="text-stone">Maintenance et évolution de vos automatisations</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-sand py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-sumi font-serif">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-stone leading-relaxed">
              Découvrez comment nos solutions IA peuvent optimiser vos processus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-navy hover:bg-navy-light transition-all duration-300 shadow-zen hover:shadow-hover"
              >
                <Link to="/auth">Essayer LEIA<ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300"
              >
                <a href="mailto:contact@zenkai.nc">Nous contacter</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;