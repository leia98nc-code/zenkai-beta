import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl font-bold">Politique de Confidentialité</h1>
            
            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  1. Collecte des Données
                </h2>
                <p>
                  Nous collectons les informations suivantes lorsque vous utilisez
                  LEIA :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Informations d'inscription : adresse e-mail, mot de passe chiffré
                  </li>
                  <li>
                    Données de conversation : vos questions et les réponses de LEIA
                  </li>
                  <li>
                    Données techniques : adresse IP, type de navigateur, données de
                    connexion
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  2. Utilisation des Données
                </h2>
                <p>Nous utilisons vos données pour :</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Fournir et améliorer le service LEIA</li>
                  <li>Personnaliser votre expérience utilisateur</li>
                  <li>Communiquer avec vous concernant le service</li>
                  <li>Assurer la sécurité et prévenir les fraudes</li>
                  <li>
                    Analyser l'utilisation du service pour l'améliorer
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  3. Protection des Données
                </h2>
                <p>
                  Nous prenons la sécurité de vos données très au sérieux et mettons
                  en œuvre des mesures techniques et organisationnelles appropriées :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Chiffrement des données en transit et au repos</li>
                  <li>Accès restreint aux données personnelles</li>
                  <li>Audits de sécurité réguliers</li>
                  <li>Conformité aux normes de sécurité en vigueur</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  4. Partage des Données
                </h2>
                <p>
                  Nous ne vendons, ne louons ni ne partageons vos données personnelles
                  avec des tiers, sauf dans les cas suivants :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour se conformer à une obligation légale</li>
                  <li>
                    Avec nos prestataires de services techniques (sous contrat de
                    confidentialité)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  5. Vos Droits
                </h2>
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification de vos données</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité de vos données</li>
                  <li>Droit d'opposition au traitement</li>
                </ul>
                <p className="mt-2">
                  Pour exercer ces droits, contactez-nous à : contact@leia.nc
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  6. Cookies
                </h2>
                <p>
                  LEIA utilise des cookies essentiels pour le fonctionnement du
                  service. Nous n'utilisons pas de cookies de suivi publicitaire. Vous
                  pouvez désactiver les cookies dans les paramètres de votre
                  navigateur, mais cela peut affecter le fonctionnement du service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  7. Conservation des Données
                </h2>
                <p>
                  Nous conservons vos données personnelles aussi longtemps que
                  nécessaire pour fournir le service ou conformément aux obligations
                  légales. Vous pouvez demander la suppression de votre compte et de
                  vos données à tout moment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  8. Modifications de la Politique
                </h2>
                <p>
                  Nous pouvons modifier cette politique de confidentialité à tout
                  moment. Les modifications entreront en vigueur dès leur publication
                  sur le site. Nous vous informerons des modifications importantes par
                  e-mail.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  9. Contact
                </h2>
                <p>
                  Pour toute question concernant cette politique de confidentialité ou
                  vos données personnelles, contactez-nous à : contact@leia.nc
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

export default Privacy;
