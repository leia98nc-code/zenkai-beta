import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText,
  Building2,
  Users,
  Clock,
  MapPin,
  CheckCircle,
  Shield,
  Zap,
  MessageSquare,
  Star,
  ArrowRight,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import leiaLogo from "@/assets/leia-logo.png";

const Landing = () => {
  const features = [
    {
      icon: FileText,
      title: "Droit du travail calédonien",
      description: "Contrats, licenciements, congés et réglementation sociale NC",
    },
    {
      icon: Building2,
      title: "Procédures administratives",
      description: "Démarches locales et formalités spécifiques à la NC",
    },
    {
      icon: Users,
      title: "Réglementation sociale",
      description: "Protection sociale et droits des travailleurs",
    },
    {
      icon: MessageSquare,
      title: "Questions juridiques",
      description: "Réponses précises sur vos problématiques courantes",
    },
  ];

  const benefits = [
    { icon: Clock, text: "Réponses instantanées 24h/24" },
    { icon: MapPin, text: "Expertise spécifique Nouvelle-Calédonie" },
    { icon: CheckCircle, text: "Références législatives précises" },
    { icon: Shield, text: "Confidentialité garantie" },
    { icon: Zap, text: "Interface intuitive" },
    { icon: Star, text: "Gratuit pour les questions de base" },
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Responsable RH",
      content:
        "LEIA m'a fait gagner un temps précieux sur les questions de droit du travail. Les réponses sont claires et sourcées.",
      rating: 5,
    },
    {
      name: "Jean Kabar",
      role: "Entrepreneur",
      content:
        "Un outil indispensable pour naviguer dans les procédures administratives calédoniennes.",
      rating: 5,
    },
    {
      name: "Sophie Martin",
      role: "Salariée",
      content:
        "J'ai pu obtenir des réponses précises sur mes droits en quelques secondes. Très rassurant !",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "LEIA remplace-t-elle un avocat ?",
      answer:
        "Non, LEIA est un assistant d'information juridique. Pour des conseils personnalisés ou une représentation légale, consultez un avocat qualifié.",
    },
    {
      question: "Quelles sources juridiques LEIA utilise-t-elle ?",
      answer:
        "LEIA se base sur la législation officielle de Nouvelle-Calédonie, les codes du travail locaux et les textes réglementaires en vigueur.",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "Oui, vos conversations sont chiffrées et vos données personnelles protégées conformément au RGPD. Nous ne partageons jamais vos informations.",
    },
    {
      question: "Le service est-il payant ?",
      answer:
        "LEIA est gratuit pour les questions de base. Des fonctionnalités premium pourront être proposées ultérieurement.",
    },
    {
      question: "Quels types de questions puis-je poser à LEIA ?",
      answer:
        "Toutes questions relatives au droit du travail, aux procédures administratives et à la réglementation sociale en Nouvelle-Calédonie.",
    },
    {
      question: "LEIA est-elle à jour des dernières lois ?",
      answer:
        "Oui, LEIA est régulièrement mise à jour pour refléter les dernières évolutions législatives et réglementaires.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <img 
                src={leiaLogo} 
                alt="LEIA" 
                className="w-5 h-5 rounded-full object-cover"
              />
              Propulsé par l'intelligence artificielle
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                LEIA
              </span>{" "}
              - Votre Expert Juridique IA pour la Nouvelle-Calédonie
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              L'Expert Intelligent Administratif spécialisé en droit du travail et
              procédures administratives calédoniennes. Obtenez des réponses
              instantanées et fiables 24h/24.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="bg-gradient-primary text-lg px-8">
                  Parler à LEIA
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Découvrir LEIA
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              ✓ Pas de carte bancaire requise • ✓ Gratuit pour commencer
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Domaines d'expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              LEIA maîtrise tous les aspects du droit du travail et des procédures
              administratives en Nouvelle-Calédonie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comment ça marche ?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold text-lg">Créez votre compte</h3>
              <p className="text-muted-foreground">
                Inscription gratuite en quelques secondes
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold text-lg">Posez votre question</h3>
              <p className="text-muted-foreground">
                En langage naturel, comme à un expert
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold text-lg">Recevez une réponse</h3>
              <p className="text-muted-foreground">
                Précise, sourcée et instantanée
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir LEIA ?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border"
              >
                <benefit.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce que disent nos utilisateurs
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold">
              Prêt à simplifier vos démarches juridiques ?
            </h2>
            <p className="text-lg opacity-90">
              Rejoignez les utilisateurs qui font confiance à LEIA pour leurs
              questions juridiques au quotidien
            </p>
            <Link to="/auth">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8"
              >
                Créer mon compte gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <p className="text-sm opacity-75">
              Pas de carte bancaire requise
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
