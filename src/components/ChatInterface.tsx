import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import leiaLogo from "@/assets/leia-avatar-new.png";
import { useEffect } from "react";

const ChatInterface = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de se déconnecter"
      });
    } else {
      toast({
        title: "Déconnexion",
        description: "À bientôt !"
      });
      navigate("/login");
    }
  };

  useEffect(() => {
    // Charger le script Botpress
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2024/12/24/02/20241224022426-F3HUKR3J.json';
    script2.async = true;
    document.body.appendChild(script2);

    // Ajouter le CSS pour masquer le bouton Share
    const style = document.createElement('style');
    style.id = 'hide-botpress-share';
    style.innerHTML = `
      /* Cache le bouton Share de Botpress */
      button:has([class*="share"]),
      a:has([class*="share"]) {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      
      /* Cache aussi le bouton en haut à droite du header */
      [id*="botpress"] header button:last-child,
      [id*="bp-web"] header button:last-child {
        display: none !important;
      }
      
      /* Rend le webchat plein écran dans son conteneur */
      #bp-web-widget {
        height: 100% !important;
        width: 100% !important;
      }
    `;
    document.head.appendChild(style);

    // Initialiser Botpress après un court délai
    setTimeout(() => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          containerWidth: '100%',
          layoutWidth: '100%',
          hideWidget: true,
          disableAnimations: true,
        });
        
        // Ouvrir automatiquement le chat
        window.botpressWebChat.sendEvent({ type: 'show' });
      }
    }, 1000);

    // Nettoyage
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      const styleElement = document.getElementById('hide-botpress-share');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col">
      <header className="bg-card border-b border-border p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src={leiaLogo} 
            alt="LEIA Logo" 
            className="w-10 h-10 rounded-full object-cover" 
          />
          <h1 className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
            LEIA 
          </h1>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleLogout} 
          className="gap-2"
        >
          <LogOut className="w-4 h-4" />
          Déconnexion
        </Button>
      </header>
      
      <div id="botpress-container" className="flex-1 bg-background" />
    </div>
  );
};

export default ChatInterface;
