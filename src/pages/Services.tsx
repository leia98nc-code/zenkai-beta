import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Lightbulb, GraduationCap, Brain } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Accompagnement",
      description: "Nous vous accompagnons dans vos projets de transformation digitale et organisationnelle avec une approche personnalisée et pragmatique."
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Conseils",
      description: "Bénéficiez de notre expertise pour optimiser vos processus, améliorer votre stratégie et prendre les meilleures décisions pour votre entreprise."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Animations",
      description: "Des ateliers interactifs et dynamiques pour stimuler la créativité, renforcer la cohésion d'équipe et favoriser l'intelligence collective."
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Formations Management & RH",
      description: "Développez les compétences de vos équipes avec nos formations sur-mesure en management, leadership et gestion des ressources humaines."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Intégration de l'IA",
      description: "Maîtrisez les outils et concepts de l'IA pour transformer votre façon de travailler et rester compétitif dans un monde en constante évolution."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-sand py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-sumi">
                Nos{" "}
                <span className="text-navy">
                  Prestations
                </span>
              </h1>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-lg text-stone">
                Découvrez notre gamme complète de services pour accompagner votre transformation et développer les compétences de vos équipes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-border/50">
                  <CardHeader>
                    <div className="mb-4 text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
