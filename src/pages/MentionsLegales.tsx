import { Link } from "react-router-dom";
import { Building2, Server, Shield, FileText, Mail, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-sumi mb-8">Mentions Légales</h1>

        {/* Éditeur */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-6 h-6 text-sage" />
            <h2 className="text-xl font-semibold text-sumi">Éditeur</h2>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border space-y-2">
            <p className="font-semibold text-sumi">ZENKAI - L'éveil numérique</p>
            <p className="text-stone">Entreprise individuelle</p>
            <p className="text-stone">RIDET : 1 231 083.002</p>
            <p className="text-stone">Siège social : 5 rue du Bellay, 98800 Nouméa, Nouvelle-Calédonie</p>
            <p className="text-stone">Directeur de la publication : Baptiste FAURE</p>
            <p className="text-stone">
              Email : <a href="mailto:contact@zenkai.nc" className="text-navy hover:underline">contact@zenkai.nc</a>
            </p>
          </div>
        </section>

        {/* Hébergement */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Server className="w-6 h-6 text-sage" />
            <h2 className="text-xl font-semibold text-sumi">Hébergement</h2>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border space-y-4">
            <div>
              <p className="font-medium text-sumi">Site web :</p>
              <p className="text-stone">
                Netlify - <a href="https://netlify.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:underline">https://netlify.com</a>
              </p>
            </div>
            <div>
              <p className="font-medium text-sumi">Base de données et authentification :</p>
              <p className="text-stone">
                Supabase Inc. - <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:underline">https://supabase.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* Propriété Intellectuelle */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-sage" />
            <h2 className="text-xl font-semibold text-sumi">Propriété Intellectuelle</h2>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border">
            <p className="text-stone">
              Le contenu de ce site (textes, images, logos) est la propriété de ZENKAI.
            </p>
            <p className="text-stone mt-2">
              Toute reproduction sans autorisation est interdite.
            </p>
          </div>
        </section>

        {/* Données Personnelles */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-sage" />
            <h2 className="text-xl font-semibold text-sumi">Données Personnelles</h2>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border space-y-2">
            <p className="text-stone">Responsable du traitement : Baptiste FAURE</p>
            <p className="text-stone">
              Pour exercer vos droits (accès, rectification, suppression) : <a href="mailto:contact@zenkai.nc" className="text-navy hover:underline">contact@zenkai.nc</a>
            </p>
            <p className="text-stone">
              Plus d'informations : <Link to="/cgu" className="text-navy hover:underline">Politique de Confidentialité</Link>
            </p>
          </div>
        </section>

        {/* Conditions d'Utilisation */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-sage" />
            <h2 className="text-xl font-semibold text-sumi">Conditions d'Utilisation</h2>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border">
            <p className="text-stone">
              L'utilisation des services ZENKAI est soumise à l'acceptation des{" "}
              <Link to="/cgu" className="text-navy hover:underline">Conditions Générales d'Utilisation</Link>.
            </p>
          </div>
        </section>

        {/* Politique de Cookies */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="w-6 h-6 text-sage" />
            <h2 className="text-xl font-semibold text-sumi">Politique de Cookies</h2>
          </div>
          
          <div className="bg-card rounded-lg p-6 border border-border space-y-6">
            <p className="text-stone">
              Nous utilisons des cookies sur zenkai.nc pour améliorer votre expérience et analyser notre trafic. Cette page vous explique quels cookies nous utilisons et comment les gérer.
            </p>

            {/* Qu'est-ce qu'un cookie ? */}
            <div>
              <h3 className="font-semibold text-sumi mb-2">Qu'est-ce qu'un cookie ?</h3>
              <p className="text-stone">
                Un cookie est un petit fichier texte stocké sur votre appareil lors de la visite d'un site web. Les cookies permettent de mémoriser vos préférences et d'améliorer votre expérience.
              </p>
            </div>

            {/* Cookies utilisés */}
            <div>
              <h3 className="font-semibold text-sumi mb-4">Cookies utilisés sur zenkai.nc</h3>
              
              {/* Cookies strictement nécessaires */}
              <div className="mb-6">
                <h4 className="font-medium text-sumi mb-3">Cookies strictement nécessaires (aucun consentement requis)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-3 text-sumi font-medium">Nom</th>
                        <th className="text-left py-2 px-3 text-sumi font-medium">Fournisseur</th>
                        <th className="text-left py-2 px-3 text-sumi font-medium">Finalité</th>
                        <th className="text-left py-2 px-3 text-sumi font-medium">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-2 px-3 text-stone">sb-access-token, sb-refresh-token</td>
                        <td className="py-2 px-3 text-stone">Supabase</td>
                        <td className="py-2 px-3 text-stone">Gérer votre connexion sécurisée</td>
                        <td className="py-2 px-3 text-stone">Session</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-3 text-stone">cookie_consent</td>
                        <td className="py-2 px-3 text-stone">ZENKAI</td>
                        <td className="py-2 px-3 text-stone">Mémoriser votre choix concernant les cookies</td>
                        <td className="py-2 px-3 text-stone">12 mois</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cookies analytiques */}
              <div>
                <h4 className="font-medium text-sumi mb-3">Cookies analytiques (consentement requis)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-3 text-sumi font-medium">Nom</th>
                        <th className="text-left py-2 px-3 text-sumi font-medium">Fournisseur</th>
                        <th className="text-left py-2 px-3 text-sumi font-medium">Finalité</th>
                        <th className="text-left py-2 px-3 text-sumi font-medium">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-2 px-3 text-stone">_ga</td>
                        <td className="py-2 px-3 text-stone">Google Analytics 4</td>
                        <td className="py-2 px-3 text-stone">Analyser le trafic du site</td>
                        <td className="py-2 px-3 text-stone">2 ans</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-3 text-stone">_gid</td>
                        <td className="py-2 px-3 text-stone">Google Analytics 4</td>
                        <td className="py-2 px-3 text-stone">Distinguer les utilisateurs</td>
                        <td className="py-2 px-3 text-stone">24 heures</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-3 text-stone">_gat</td>
                        <td className="py-2 px-3 text-stone">Google Analytics 4</td>
                        <td className="py-2 px-3 text-stone">Limiter le débit des requêtes</td>
                        <td className="py-2 px-3 text-stone">1 minute</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-stone text-sm mt-3">
                  <strong>Données collectées :</strong> Pages visitées, durée de visite, source de trafic, localisation approximative.<br />
                  Ces cookies sont chargés <strong>UNIQUEMENT</strong> si vous acceptez les cookies analytiques via la bannière.
                </p>
              </div>
            </div>

            {/* Gestion des préférences */}
            <div>
              <h3 className="font-semibold text-sumi mb-2">Gestion de vos préférences</h3>
              <p className="text-stone mb-4">
                Vous pouvez à tout moment modifier vos préférences cookies :
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  localStorage.removeItem('cookie_consent_analytics');
                  window.location.reload();
                }}
                className="mb-2"
              >
                Modifier mes préférences cookies
              </Button>
              <p className="text-stone text-sm">
                Vous pouvez également configurer votre navigateur pour bloquer les cookies.
              </p>
            </div>

            {/* Désactivation */}
            <div>
              <h3 className="font-semibold text-sumi mb-2">Désactivation des cookies</h3>
              <p className="text-stone mb-2">Pour désactiver les cookies dans votre navigateur :</p>
              <ul className="list-disc list-inside text-stone space-y-1 ml-2">
                <li><strong>Firefox :</strong> Paramètres &gt; Vie privée et sécurité &gt; Cookies</li>
                <li><strong>Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                <li><strong>Safari :</strong> Préférences &gt; Confidentialité &gt; Cookies</li>
              </ul>
              <p className="text-stone text-sm mt-3 p-3 bg-muted rounded-md">
                <strong>Attention :</strong> La désactivation des cookies strictement nécessaires empêchera l'utilisation de nos services (connexion impossible).
              </p>
            </div>

            {/* Plus d'informations */}
            <div>
              <h3 className="font-semibold text-sumi mb-2">Plus d'informations</h3>
              <p className="text-stone">
                Pour en savoir plus sur notre traitement des données personnelles, consultez nos{" "}
                <Link to="/cgu" className="text-navy hover:underline">Conditions Générales d'Utilisation</Link>.
              </p>
              <p className="text-stone mt-2">
                Pour toute question sur les cookies :{" "}
                <a href="mailto:contact@zenkai.nc" className="text-navy hover:underline">contact@zenkai.nc</a>
              </p>
            </div>

            <p className="text-stone text-sm italic border-t border-border pt-4">
              Dernière mise à jour : 05 février 2026
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
