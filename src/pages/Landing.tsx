import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import leiaAvatar from "@/assets/leia-avatar.png";
import heroImage from "@/assets/zenkai-hero.png";
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
      icon: <Clock className="w-6 h-6" />,
      title: "Gain de temps considérable",
      description: "Fini les recherches interminables dans les textes juridiques"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité juridique",
      description: "Informations toujours à jour et conformes"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Autonomie des équipes",
      description: "Vos collaborateurs trouvent les réponses par eux-mêmes"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Économies substantielles",
      description: "Réduisez vos frais de conseils externes"
    }
  ];

  const benefits = [
    { icon: <Users className="w-5 h-5" />, title: "Compétences humaines", description: "ZENKAI apporte un accompagnement sur mesure, ancré dans une expertise locale approfondie des entreprises et organisations. L'IA n'est pas une fin en soit mais est un outil pour maximiser le savoir-faire humain." },
    { icon: <Sparkles className="w-5 h-5" />, title: "Intelligence artificielle", description: "ZENKAI rend l'Intelligence Artificielle accessible, concrète et mesurable, en offrant des solutions clés en main, des outils prêts à l'emploi. Elle favorise ainsi l'adaptation de votre entreprise à l'intelligence artificielle dans une démarche stratégique et perspicace." }
  ];

  const steps = [
    { number: "1", title: "Créez votre compte", description: "Inscription gratuite et sécurisée" },
    { number: "2", title: "Posez votre question", description: "En langage naturel, comme à un expert" },
    { number: "3", title: "Recevez des réponses sourcées", description: "Précises, basées sur le droit NC" }
  ];

  const faqs = [
    { question: "LEIA remplace-t-elle un avocat ?", answer: "Non, LEIA fournit des informations juridiques basées sur la législation calédonienne mais ne remplace pas un conseil juridique personnalisé par un avocat. Pour des cas complexes ou des décisions importantes, nous recommandons de consulter un professionnel du droit." },
    { question: "Quelles sources utilise LEIA ?", answer: "LEIA s'appuie sur le Code du travail NC, l'AIT, les conventions collectives applicables, la jurisprudence locale et des fiches pratiques. Cette intelligence artificielle est secondée par une expertise et un savoir-faire de compétences humaines à votre appui en cas de besoin." },
    { question: "Mes données sont-elles sécurisées ?", answer: "Oui, absolument. Nous appliquons les normes de sécurité les plus strictes. Vos conversations et données personnelles sont chiffrées et ne sont jamais partagées avec des tiers." },
    { question: "Comment accéder à LEIA ?", answer: "LEIA est accessible sur le web, WhatsApp ou Messenger. Vous pouvez l'utiliser depuis n'importe quel appareil connecté, à tout moment." },
    { question: "Quel est le tarif ?", answer: "LEIA est disponible à partir de 4 900 XPF/mois. Ce tarif inclus l'accès complet à l'assistant IA et la validation des réponses par un expert humain." },
    { question: "LEIA est-elle à jour des dernières lois ?", answer: "Oui, la base de connaissances de LEIA est régulièrement mise à jour pour refléter les évolutions législatives et réglementaires en Nouvelle-Calédonie." }
  ];

  const principles = [
    { title: "Shokunin", subtitle: "Maître artisan", description: "Excellence dans chaque détail" },
    { title: "Sensei", subtitle: "Enseignant", description: "Transmission bienveillante du savoir" },
    { title: "Zen", subtitle: "Simplicité", description: "Élégance et efficacité" }
  ];

  return (
    <div className="min-h-screen bg-sand">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-40 md:pt-40 md:pb-48">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-sm font-medium text-navy uppercase tracking-wider">Nouvelle-Calédonie</span>
            <h1 className="text-5xl md:text-6xl font-bold text-sumi leading-tight font-serif">
              La gestion d'entreprise boostée à l'IA
            </h1>
            <p className="text-lg md:text-xl text-stone leading-relaxed">
              Zenkai est votre partenaire de confiance pour l'intégration de l'Intelligence Artificielle dans votre entreprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-navy hover:bg-navy-light transition-all duration-300 shadow-zen hover:shadow-hover">
                <Link to="/auth">Accéder à LEIA<ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300">
                <Link to="/about">Découvrir Zenkai</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img 
              src={heroImage} 
              alt="Zenkai - L'IA au service de votre entreprise" 
              className="w-full max-w-lg rounded-2xl shadow-zen"
            />
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-6 font-serif">Qui sommes-nous ?</h2>
            <p className="text-xl text-stone leading-relaxed mb-8">
              Zenkai est votre partenaire de confiance pour l'intégration de l'Intelligence Artificielle dans votre entreprise.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-sand-dark p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-navy mb-4 font-serif">Notre mission</h3>
                <p className="text-lg text-sumi">
                  Accompagner les TPE et PME calédoniennes vers une gestion de leur entreprises intégrant l'intelligence artificielle.
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
                Nous conseillons et formons en gestion managériale et ressources humaines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEIA - Domaines d'expertise */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex justify-center mb-8">
            <img 
              src={leiaAvatar} 
              alt="LEIA - L'Expert Intelligent Administratif" 
              className="w-32 h-32 rounded-full shadow-zen"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-6 font-serif">LEIA - Votre Assistant IA Droit du Travail</h2>
          <p className="text-xl text-stone leading-relaxed">
            Un chatbot intelligent disponible 24/7, spécialisé dans le droit du travail applicable en Nouvelle-Calédonie.
          </p>
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-navy hover:bg-navy-light transition-all duration-300 shadow-zen hover:shadow-hover">
              <Link to="/auth">Se connecter à LEIA<ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-navy mb-8 text-center font-serif">Fonctionnalités clés</h3>
          <div className="space-y-4">
            <Card className="p-6 border border-border bg-white hover:shadow-hover transition-all duration-300">
              <p className="text-stone">✓ Réponses instantanées à toutes vos questions RH</p>
            </Card>
            <Card className="p-6 border border-border bg-white hover:shadow-hover transition-all duration-300">
              <p className="text-stone">✓ Base de données : Code du travail NC, AIT, conventions collectives, jurisprudences et fiches pratiques</p>
            </Card>
            <Card className="p-6 border border-border bg-white hover:shadow-hover transition-all duration-300">
              <p className="text-stone">✓ Accessible sur le web, WhatsApp ou Messenger</p>
            </Card>
            <Card className="p-6 border border-border bg-white hover:shadow-hover transition-all duration-300">
              <p className="text-stone">✓ Human in the loop : accès à l'expertise humaine en soutien</p>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <Card key={idx} className="p-8 border border-border bg-white hover:shadow-hover transition-all duration-300 group">
              <div className="text-navy mb-4 group-hover:text-navy-light transition-colors duration-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-sumi mb-3 font-serif">{feature.title}</h3>
              <p className="text-stone leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-6 bg-sand-dark border-0">
            <p className="text-lg font-semibold text-navy">Tarif : À partir de 4 900 XPF/mois</p>
          </Card>
        </div>
      </section>

      {/* Les défis des TPE/PME */}
      <section className="bg-gradient-sand py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-12 text-center font-serif">Les défis des TPE/PME calédoniennes</h2>
            <p className="text-xl text-stone text-center mb-16 leading-relaxed">
              Les entreprises locales font face à trois obstacles majeurs qui freinent leur croissance :
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white border-0 shadow-zen">
                <h3 className="text-xl font-bold text-navy mb-4 font-serif">Complexité réglementaire</h3>
                <ul className="space-y-3 text-stone">
                  <li>• Droit du travail calédonien spécifique et en constante évolution</li>
                  <li>• Difficultés d'accès à l'information juridique fiable</li>
                  <li>• Risques de non-conformité pouvant coûter cher</li>
                </ul>
              </Card>
              <Card className="p-8 bg-white border-0 shadow-zen">
                <h3 className="text-xl font-bold text-navy mb-4 font-serif">Processus RH</h3>
                <ul className="space-y-3 text-stone">
                  <li>• Recrutement, entretiens annuels, gestion de la formation</li>
                  <li>• Tâches administratives répétitives et fastidieuses</li>
                  <li>• Manque de temps pour les missions stratégiques</li>
                </ul>
              </Card>
              <Card className="p-8 bg-white border-0 shadow-zen">
                <h3 className="text-xl font-bold text-navy mb-4 font-serif">Retard sur la transformation digitale</h3>
                <ul className="space-y-3 text-stone">
                  <li>• IA perçue comme complexe et inaccessible</li>
                  <li>• Absence de compétences internes spécialisées</li>
                  <li>• Investissements considérés comme trop importants</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-12 text-center font-serif">Notre positionnement</h2>
          <p className="text-xl text-stone text-center mb-16 leading-relaxed">
            Avec ZENKAI, optimisez vos processus et la gestion interne de votre entreprises. Concentrez-vous sur la croissance de vos activités, en réduisant les tâches répétitives, chronophages et manuelles.
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-border shadow-zen hover:shadow-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-navy mt-1">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-sumi mb-3">{benefit.title}</h3>
                    <p className="text-stone leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-sumi mb-6 font-serif">Questions fréquentes</h2>
            <p className="text-lg text-stone">Tout ce que vous devez savoir sur LEIA</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-xl px-6 bg-white shadow-zen hover:shadow-hover transition-all duration-300">
                <AccordionTrigger className="text-left text-lg font-semibold text-sumi hover:text-navy transition-colors">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-stone leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

      {/* CTA Final */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-sumi font-serif">Commencez dès aujourd'hui</h2>
            <p className="text-xl text-stone leading-relaxed">Trois options pour démarrer votre transformation digitale avec Zenkai</p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="p-8 bg-sand-dark border-0">
                <div className="text-3xl font-bold text-navy mb-2">1</div>
                <h3 className="text-xl font-bold text-sumi mb-2 font-serif">Atelier découverte gratuit</h3>
                <p className="text-stone">1 heure pour explorer les possibilités de l'IA dans votre entreprise, sans engagement</p>
              </Card>
              <Card className="p-8 bg-sand-dark border-0">
                <div className="text-3xl font-bold text-navy mb-2">2</div>
                <h3 className="text-xl font-bold text-sumi mb-2 font-serif">Test LEIA gratuit</h3>
                <p className="text-stone">3 mois d'essai de notre assistant IA Droit du Travail pour évaluer les bénéfices</p>
              </Card>
              <Card className="p-8 bg-sand-dark border-0">
                <div className="text-3xl font-bold text-navy mb-2">3</div>
                <h3 className="text-xl font-bold text-sumi mb-2 font-serif">Audit express</h3>
                <p className="text-stone">1 journée d'analyse de vos processus avec recommandations concrètes</p>
              </Card>
            </div>
            <div className="flex flex-col items-center gap-4 pt-8">
              <Button asChild size="lg" className="bg-navy hover:bg-navy-light transition-all duration-300 shadow-zen hover:shadow-hover">
                <Link to="/auth">Accéder à LEIA<ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <p className="text-sm text-stone">« Prenons 30 minutes pour discuter de vos enjeux RH et Formation. »</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
