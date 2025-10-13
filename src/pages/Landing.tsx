import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Clock, 
  Users, 
  Calendar,
  Sparkles,
  Shield,
  BookOpen,
  Lock,
  Target,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Landing = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Contrats de travail",
      description: "CDI, CDD, périodes d'essai, clauses spécifiques NC"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Fin de contrat",
      description: "Licenciements, ruptures conventionnelles, indemnités"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Temps de travail",
      description: "Durées légales, heures supplémentaires, repos"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Réglementation sociale",
      description: "Congés, maladie, maternité, formation"
    }
  ];

  const benefits = [
    { icon: <Clock className="w-5 h-5" />, title: "Disponible 24/7", description: "Réponses instantanées à toute heure" },
    { icon: <Target className="w-5 h-5" />, title: "Expert Nouvelle-Calédonie", description: "Spécialisé dans le droit calédonien" },
    { icon: <BookOpen className="w-5 h-5" />, title: "Sources législatives précises", description: "Références officielles vérifiées" },
    { icon: <Lock className="w-5 h-5" />, title: "Confidentialité garantie", description: "Vos données restent privées" },
    { icon: <Sparkles className="w-5 h-5" />, title: "Interface intuitive", description: "Simple comme une conversation" },
    { icon: <CheckCircle2 className="w-5 h-5" />, title: "Gratuit pour débuter", description: "Testez sans engagement" }
  ];

  const steps = [
    { number: "1", title: "Créez votre compte", description: "Inscription gratuite et sécurisée" },
    { number: "2", title: "Posez votre question", description: "En langage naturel, comme à un expert" },
    { number: "3", title: "Recevez des réponses sourcées", description: "Précises, basées sur le droit NC" }
  ];

  const faqs = [
    { question: "LEIA remplace-t-elle un avocat ?", answer: "Non, LEIA fournit des informations juridiques basées sur la législation calédonienne mais ne remplace pas un conseil juridique personnalisé par un avocat. Pour des cas complexes ou des décisions importantes, nous recommandons de consulter un professionnel du droit." },
    { question: "Quelles sources utilise LEIA ?", answer: "LEIA s'appuie sur les textes officiels du droit du travail de Nouvelle-Calédonie, les conventions collectives applicables, et la jurisprudence locale. Cette intelligence artificielle est secondée par une expertise et un savoir-faire de compétences humaines à votre appui en cas de besoin." },
    { question: "Mes données sont-elles sécurisées ?", answer: "Oui, absolument. Nous appliquons les normes de sécurité les plus strictes. Vos conversations et données personnelles sont chiffrées et ne sont jamais partagées avec des tiers." },
    { question: "Le service est-il payant ?", answer: "LEIA propose une formule gratuite pour débuter et découvrir le service. Des formules premium sont disponibles pour un usage professionnel intensif." },
    { question: "Puis-je poser n'importe quelle question juridique ?", answer: "LEIA est spécialisée en droit du travail calédonien. Pour d'autres domaines juridiques, elle pourra vous orienter vers les ressources appropriées." },
    { question: "LEIA est-elle à jour des dernières lois ?", answer: "Oui, la base de connaissances de LEIA est régulièrement mise à jour pour refléter les évolutions législatives et réglementaires en Nouvelle-Calédonie." }
  ];

  const principles = [
    { title: "Shokunin", subtitle: "Maître artisan", description: "Excellence dans chaque détail" },
    { title: "Sensei", subtitle: "Enseignant", description: "Transmission bienveillante du savoir" },
    { title: "Zen", subtitle: "Simplicité", description: "Élégance et efficacité" }
  ];

  return (
    <div className="min-h-screen bg-gofun">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-40 md:pt-40 md:pb-48">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-sm font-medium text-purple uppercase tracking-wider">Zenkai présente</span>
            <h1 className="text-5xl md:text-6xl font-bold text-sumi leading-tight font-display">
              LEIA, votre experte juridique IA
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              L'Expert Intelligent Administratif spécialisé en droit du travail calédonien. 
              Réponses précises, disponibles 24/7, en toute confidentialité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-indigo hover:bg-purple transition-all duration-300 shadow-zen hover:shadow-hover">
                <Link to="/auth">Accéder à LEIA<ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-indigo text-indigo hover:bg-indigo hover:text-white transition-all duration-300">
                <Link to="/about">Découvrir Zenkai</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-indigo rotate-45 rounded-2xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple opacity-20 rotate-12 rounded-2xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-beni rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'expertise */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-6 font-display">Domaines d'expertise</h2>
          <p className="text-lg text-muted-foreground">LEIA maîtrise l'ensemble du droit du travail et des procédures administratives de Nouvelle-Calédonie</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <Card key={idx} className="p-8 border border-border bg-card hover:shadow-hover transition-all duration-300 group">
              <div className="text-indigo mb-4 group-hover:text-purple transition-colors duration-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-sumi mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Philosophie Zenkai */}
      <section className="bg-gradient-glow py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <div className="inline-block mb-6"><span className="text-6xl font-bold text-indigo">改善</span></div>
              <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-6 font-display">Kaizen : L'amélioration continue</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Chez Zenkai, nous croyons que chaque défi est une opportunité de devenir plus fort. 
                Comme un sensei transmet son art, nous accompagnons les TPE/PME calédoniennes dans leur éveil digital, une étape à la fois.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {principles.map((p, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-2xl font-bold text-indigo font-display">{p.title}</h3>
                  <p className="text-sm font-medium text-purple uppercase tracking-wider">{p.subtitle}</p>
                  <p className="text-muted-foreground">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comment fonctionne LEIA */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-6 font-display">Comment fonctionne LEIA</h2>
          <p className="text-lg text-muted-foreground">Trois étapes simples pour obtenir des réponses juridiques précises</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-8 items-start group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-2xl shadow-zen group-hover:shadow-hover transition-all duration-300">
                {step.number}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-semibold text-sumi mb-2 font-display">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Avantages */}
      <section className="bg-secondary/30 py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-6 font-display">Pourquoi choisir LEIA</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-card p-8 rounded-lg border border-border shadow-zen hover:shadow-hover transition-all duration-300 space-y-3">
                <div className="text-indigo">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-sumi">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-6 font-display">Questions fréquentes</h2>
            <p className="text-lg text-muted-foreground">Tout ce que vous devez savoir sur LEIA</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg px-6 bg-card shadow-zen hover:shadow-hover transition-all duration-300">
                <AccordionTrigger className="text-left text-lg font-semibold text-sumi hover:text-indigo transition-colors">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-glow py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-sumi font-display">Prêt à simplifier vos démarches juridiques ?</h2>
            <p className="text-lg text-muted-foreground">Rejoignez les entreprises calédoniennes qui font confiance à LEIA</p>
            <div className="flex flex-col items-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-indigo hover:bg-purple transition-all duration-300 shadow-zen hover:shadow-hover">
                <Link to="/auth">Commencer avec LEIA<ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <p className="text-sm text-muted-foreground">Aucune carte bancaire requise</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
