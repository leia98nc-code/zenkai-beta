import { Link } from "react-router-dom";
import { Bot, Mail, Shield } from "lucide-react";
import leiaLogo from "@/assets/leia-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
            <img 
              src={leiaLogo} 
              alt="LEIA Logo" 
              className="w-10 h-10 rounded-full object-cover"
            />
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                LEIA
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              L'Expert Intelligent Administratif pour la Nouvelle-Calédonie
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-success" />
              <span>Données sécurisées</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Connexion
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Mentions légales</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@leia.nc</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4">
              Nouvelle-Calédonie
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LEIA. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            LEIA ne remplace pas un conseil juridique professionnel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
