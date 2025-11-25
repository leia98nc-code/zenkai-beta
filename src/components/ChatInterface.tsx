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
    // Ajouter les styles CSS pour le webchat
    const style = document.createElement('style');
    style.innerHTML = `
      #webchat .bpWebchat {
        position: unset;
        width: 100%;
        height: 100%;
        max-height: 100%;
        max-width: 100%;
      }
      #webchat .bpFab {
        display: none;
      }
    `;
    document.head.appendChild(style);

    // Charger le script Botpress
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialiser Botpress une fois chargé
    script.onload = () => {
      if (window.botpress) {
        window.botpress.on("webchat:ready", () => {
          window.botpress.open();
        });

        window.botpress.init({
          "botId": "f0490f8c-ab7a-4960-9809-9321526ce89d",
          "configuration": {
            "version": "v2",
            "botName": "LEIA",
            "botAvatar": "https://files.bpcontent.cloud/2025/10/26/23/20251026233441-6E01QUON.png",
            "botDescription": "LEAI est un robot à l'intelligence artificielle générative, conçu par ZENKAI, répondant à toutes vos questions en matière de droit du travail applicable en Nouvelle-Calédonie",
            "website": {
              "title": "www.zenkai.nc",
              "link": "www.zenkai.nc"
            },
            "email": {
              "title": "contact@zenkai.nc",
              "link": "contact@zenkai.nc"
            },
            "phone": {},
            "termsOfService": {},
            "privacyPolicy": {},
            "color": "#f6f0f2",
            "variant": "soft",
            "headerVariant": "solid",
            "themeMode": "dark",
            "fontFamily": "inter",
            "radius": 2.4,
            "feedbackEnabled": false,
            "footer": "by ZENKAI / www.zenkai.nc",
            "additionalStylesheetUrl": "https://files.bpcontent.cloud/2025/11/25/03/20251125031459-XDF9Z6RN.css",
            "allowFileUpload": false,
            "soundEnabled": false,
            "proactiveMessageEnabled": false,
            "proactiveBubbleMessage": "Hi! 👋 Need help?",
            "proactiveBubbleTriggerType": "afterDelay",
            "proactiveBubbleDelayTime": 10
          },
          "clientId": "a3ab0d66-9824-413a-b644-e8feffc665cb",
          "selector": "#webchat"
        });
      }
    };

    // Nettoyage
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
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
      
      <div id="webchat" className="flex-1 bg-background" />
    </div>
  );
};

export default ChatInterface;
