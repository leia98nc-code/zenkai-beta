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
    // Script 1: inject.js
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.4/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Script 2: config.js (avec defer)
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2024/12/24/02/20241224022426-6LAGRWWK.js";
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      if (document.body.contains(script1)) {
        document.body.removeChild(script1);
      }
      if (document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col">
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

      <div id="chat-container" className="flex-1 bg-background" />
    </div>
  );
};

export default ChatInterface;
