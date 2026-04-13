import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import ChatInterface from "@/components/ChatInterface";
import { Session } from "@supabase/supabase-js";

const Leia = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAccess = async (currentSession: Session | null) => {
      if (!currentSession) {
        navigate("/login");
        setLoading(false);
        return;
      }

      // Vérifier le profil : is_active et trial_end_date
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("is_active, trial_end_date, role")
        .eq("user_id", currentSession.user.id)
        .single();

      if (error || !profile) {
        navigate("/login");
        setLoading(false);
        return;
      }

      const isAdmin = profile.role === "admin";
      const isPaid = profile.role === "paid";
      const trialValid =
        profile.role === "trial" &&
        profile.is_active === true &&
        profile.trial_end_date !== null &&
        new Date(profile.trial_end_date) > new Date();

      if (!isAdmin && !isPaid && !trialValid) {
        navigate("/products");
        setLoading(false);
        return;
      }

      setSession(currentSession);
      setLoading(false);
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        checkAccess(session);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      checkAccess(session);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Chargement...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return <ChatInterface />;
};

export default Leia;
