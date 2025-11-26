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
        description: "Impossible de se déconnecter",
      });
    } else {
      toast({
        title: "Déconnexion",
        description: "À bientôt !",
      });
      navigate("/login");
    }
  };

  useEffect(() => {
    // Inject CSS styles
    const style = document.createElement("style");
    style.textContent = `
      #chat-container {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 0;
      }
      
      /* Fix mobile viewport height */
      .chat-wrapper {
        height: 100vh;
        height: 100dvh;
        height: -webkit-fill-available;
      }
      
      .bpFab {
        display: none !important;
      }
      
      .bpWebchat {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        max-height: 100% !important;
        max-width: 100% !important;
      }
    `;
    document.head.appendChild(style);

    // Inject Botpress script
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.botpress) {
        // 1. Register event listener FIRST
        window.botpress.on("webchat:initialized", () => {
          window.botpress.open();
        });

        // 2. Initialize AFTER
        window.botpress.init({
          botId: "f0490f8c-ab7a-4960-9809-9321526ce89d",
          configuration: {
            version: "v2",
            botName: "LEIA",
            botAvatar: "https://files.bpcontent.cloud/2025/10/26/23/20251026233441-6E01QUON.png",
            botDescription: "LEAI est un robot à l'intelligence artificielle générative...",
            website: { title: "www.zenkai.nc", link: "www.zenkai.nc" },
            email: { title: "contact@zenkai.nc", link: "contact@zenkai.nc" },
            color: "#f6f0f2",
            variant: "soft",
            headerVariant: "solid",
            themeMode: "dark",
            fontFamily: "inter",
            radius: 2.4,
            feedbackEnabled: false,
            footer: "by ZENKAI / www.zenkai.nc",
            additionalStylesheetUrl: "https://files.bpcontent.cloud/2025/11/25/03/20251125031459-XDF9Z6RN.css",
            allowFileUpload: false,
            soundEnabled: false,
            proactiveMessageEnabled: false,
          },
          clientId: "a3ab0d66-9824-413a-b644-e8feffc665cb",
          selector: "#chat-container",
        });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      if (window.botpress) {
        try {
          window.botpress.close?.();
          window.botpress.destroy?.();
        } catch (e) {
          // Ignore cleanup errors
        }
      }
      document.querySelectorAll('[class*="bp"], [id*="bp"]').forEach(el => el.remove());
    };
  }, []);

  return (
    <div className="w-full h-dvh flex flex-col overflow-hidden">
      <header className="bg-card border-b border-border p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={leiaLogo} alt="LEIA Logo" className="w-10 h-10 rounded-full object-cover" />
          <h1 className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">LEIA</h1>
        </div>

        <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
          <LogOut className="w-4 h-4" />
          Déconnexion
        </Button>
      </header>

      <div id="chat-container" className="flex-1 min-h-0 relative bg-background" />
    </div>
  );
};

export default ChatInterface;
