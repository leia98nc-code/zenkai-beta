import { Link } from "react-router-dom";
import { Building2, Server, Shield, FileText, Mail } from "lucide-react";
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
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
