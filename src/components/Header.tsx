import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import zenkaiIcon from "@/assets/zenkai-icon.png";
import zenkaiTextLogo from "@/assets/zenkai-text-logo.png";

const Header = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      // Enregistrer la déconnexion dans la dernière session active
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: sessions } = await supabase
          .from('user_sessions')
          .select('id')
          .eq('user_id', user.id)
          .is('logout_at', null)
          .order('login_at', { ascending: false })
          .limit(1);
        
        if (sessions && sessions.length > 0) {
          await supabase
            .from('user_sessions')
            .update({ logout_at: new Date().toISOString() })
            .eq('id', sessions[0].id);
        }
      }
      
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
        navigate("/");
      }
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue",
      });
    }
  };

  return (
    <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={zenkaiIcon} 
            alt="ZENKAI Logo" 
            className="w-10 h-10 object-contain"
          />
          <img 
            src={zenkaiTextLogo} 
            alt="ZENKAI" 
            className="h-8 object-contain"
          />
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
      </div>
    </header>
  );
};

export default Header;
