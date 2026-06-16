import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const ZENKAI_SESSION_URL    = 'https://rolungturaelkdccjdfo.supabase.co/functions/v1';
const ZENKAI_WEBHOOK_SECRET = import.meta.env.VITE_ZENKAI_WEBHOOK_SECRET;

const Leia = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAccessAndRedirect = async () => {
      // ✅ FIX 1 : getUser() valide la session côté serveur
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (!user || authError) {
        navigate("/login");
        return;
      }

      // ✅ FIX 2 : Vérification du statut d'accès AVANT la redirection
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("is_active, trial_end_date")
        .eq("user_id", user.id)
        .single();

      if (profileError || !profile) {
        navigate("/login");
        return;
      }

      const trialExpired =
        profile.trial_end_date !== null &&
        new Date(profile.trial_end_date) < new Date();

      if (!profile.is_active || trialExpired) {
        navigate("/trial-expired");
        return;
      }

      // ✅ Utilisateur authentifié et actif → créer session ZENKAI
      try {
        const res = await fetch(`${ZENKAI_SESSION_URL}/create-session`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-webhook-secret": ZENKAI_WEBHOOK_SECRET,
          },
          body: JSON.stringify({
            user_id:    user.id,
            user_agent: navigator.userAgent,
          }),
        });

        const { session_token } = await res.json();

        if (!session_token) {
          navigate("/login");
          return;
        }

        // Passer session_token + user_id + email à leia.html via hash
        const params = new URLSearchParams({
          session_token,
          user_id:    user.id,
          user_email: user.email ?? "",
        });
        window.location.href = `https://app.zenkai.nc/leia#${params.toString()}`;

      } catch (e) {
        console.error('[ZENKAI] Erreur create-session:', e);
        navigate("/login");
      }
    };

    checkAccessAndRedirect();
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#F5EFE7" }}
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src="https://app.zenkai.nc/images/logo-zenkai-icon-rogne.png"
          alt=""
          className="w-12 h-12 opacity-60"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <p
          style={{
            fontFamily: "Merriweather, serif",
            fontStyle: "italic",
            fontSize: "0.88rem",
            color: "#4D4D4D",
          }}
        >
          Vérification de l'accès…
        </p>
      </div>
    </div>
  );
};

export default Leia;
