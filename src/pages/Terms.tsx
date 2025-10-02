import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl font-bold">Conditions d'Utilisation</h1>
            
            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  1. Acceptation des Conditions
                </h2>
                <p>
                  En accédant et en utilisant LEIA, vous acceptez d'être lié par les
                  présentes conditions d'utilisation. Si vous n'acceptez pas ces
                  conditions, veuillez ne pas utiliser le service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  2. Description du Service
                </h2>
                <p>
                  LEIA est un assistant d'information juridique basé sur
                  l'intelligence artificielle, spécialisé dans le droit du travail et
                  les procédures administratives de Nouvelle-Calédonie. LEIA fournit
                  des informations générales et ne constitue pas un conseil juridique
                  personnalisé.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  3. Utilisation du Service
                </h2>
                <p>Vous vous engagez à :</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Utiliser LEIA uniquement à des fins légales et conformes à ces
                    conditions
                  </li>
                  <li>
                    Ne pas tenter de contourner les mesures de sécurité du service
                  </li>
                  <li>
                    Ne pas utiliser LEIA pour diffuser des informations fausses ou
                    trompeuses
                  </li>
                  <li>
                    Respecter les droits de propriété intellectuelle de LEIA
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  4. Limitation de Responsabilité
                </h2>
                <p>
                  LEIA fournit des informations générales à titre informatif
                  uniquement. Les réponses de LEIA ne constituent pas un conseil
                  juridique personnalisé et ne doivent pas être considérées comme
                  telles. Pour des conseils juridiques adaptés à votre situation
                  spécifique, consultez un avocat qualifié.
                </p>
                <p className="mt-2">
                  LEIA ne peut être tenue responsable des décisions prises sur la base
                  des informations fournies par le service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  5. Propriété Intellectuelle
                </h2>
                <p>
                  Tous les contenus, marques, logos et autres éléments de LEIA sont
                  protégés par les droits de propriété intellectuelle et restent la
                  propriété de leurs détenteurs respectifs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  6. Modification des Conditions
                </h2>
                <p>
                  Nous nous réservons le droit de modifier ces conditions
                  d'utilisation à tout moment. Les modifications entreront en vigueur
                  dès leur publication sur le site. Votre utilisation continue du
                  service après publication constitue votre acceptation des
                  modifications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  7. Droit Applicable
                </h2>
                <p>
                  Ces conditions sont régies par le droit applicable en
                  Nouvelle-Calédonie.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  8. Contact
                </h2>
                <p>
                  Pour toute question concernant ces conditions d'utilisation,
                  contactez-nous à : contact@leia.nc
                </p>
              </section>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
