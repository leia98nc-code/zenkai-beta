import { Link } from "react-router-dom";
import { Bot, Mail, Shield } from "lucide-react";
import zenkaiTextLogo from "@/assets/zenkai-text-logo.png";

const Footer = () => {
  return (
    <footer className="bg-sand-dark border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={zenkaiTextLogo} 
                alt="ZENKAI Logo" 
                className="h-8 object-contain"
              />
            </div>
            <p className="text-sm text-stone">
              L'Intelligence Artificielle au service de votre performance RH
            </p>
            <div className="flex items-center gap-2 text-sm text-stone">
              <Shield className="w-4 h-4 text-sage" />
              <span>Données sécurisées</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-sumi">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-stone hover:text-navy transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-stone hover:text-navy transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-sm text-stone hover:text-navy transition-colors">
                  Connexion
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-sumi">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal/terms" className="text-sm text-stone hover:text-navy transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="text-sm text-stone hover:text-navy transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <span className="text-sm text-stone">Mentions légales</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sumi">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-stone">
                <Mail className="w-4 h-4" />
                <a href="mailto:leia98nc@gmail.com" className="hover:text-navy transition-colors">
                  leia98nc@gmail.com
                </a>
              </li>
              <li className="text-sm text-stone">
                Tél: +687 75.49.20
              </li>
              <li className="text-sm text-stone">
                Nouméa, Nouvelle-Calédonie
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-stone">
            © {new Date().getFullYear()} Zenkai. Tous droits réservés.
          </p>
          <p className="text-xs text-stone mt-2">
            LEIA ne remplace pas un conseil juridique professionnel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
