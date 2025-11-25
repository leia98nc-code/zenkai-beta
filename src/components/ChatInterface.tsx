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
    // Ajouter le style CSS pour le webchat
    const style = document.createElement('style');
    style.innerHTML = `
      #webchat .bpWebchat {
        position: unset;
        width: 100%;
        height: 100%;
        max-height: 100%;
        max-width: 100%;
      }
    `;
    document.head.appendChild(style);

    // Charger le script d'injection Botpress
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    // Attendre que le script soit chargé puis initialiser
    script1.onload = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
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
          "additionalStylesheetUrl": "https://files.bpcontent.cloud/2025/11/25/03/20251125031459-XDF9ZGRN.css",
          "allowFileUpload": false,
          "soundEnabled": false,
          "proactiveMessageEnabled": false,
          "proactiveBubbleMessage": "Hi! 👋 Need help?",
          "proactiveBubbleTriggerType": "afterDelay",
          "proactiveBubbleDelayTime": 10
        },
        "a3ab0d66-9824-413a-b644-e8feffc665cb",
        "#webchat"
        );
      }
    };

    return () => {
      if (document.body.contains(script1)) {
        document.body.removeChild(script1);
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
