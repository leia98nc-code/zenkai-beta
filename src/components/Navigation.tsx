import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import zenkaiLogo from "@/assets/zenkai-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={zenkaiLogo} 
              alt="ZENKAI Logo" 
              className="h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              À propos
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/products") ? "text-primary" : "text-foreground"
              }`}
            >
              Nos produits
            </Link>
            <Link to="/auth">
              <Button size="sm" className="bg-gradient-primary">
                Essayer LEIA
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <Link
              to="/"
              className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              to="/products"
              className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Nos produits
            </Link>
            <div className="px-4 pt-2 space-y-2">
              <Link to="/auth" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full bg-gradient-primary">
                  Essayer LEIA
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
