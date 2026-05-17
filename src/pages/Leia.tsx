import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Leia = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAccessAndRedirect = async () => {
      // ✅ FIX 1 : getUser() valide la session côté serveur (vs getSession() qui lit
      // uniquement le localStorage sans vérifier si le token est réellement valide)
      const { data: { user }, error: authError } = await supabase.auth.getUser();

      if (!user || authError) {
        navigate("/login");
        return;
      }

      // ✅ FIX 2 : Vérification du statut d'accès AVANT la redirection
      // On contrôle is_active ET trial_end_date côté serveur
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("is_active, trial_end_date")
        .eq("user_id", user.id)
        .single();

      if (profileError || !profile) {
        // Profil introuvable → on renvoie au login par sécurité
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

      // ✅ Utilisateur authentifié et actif → on récupère la session pour les tokens
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        // Cas rare : getUser() a réussi mais la session locale a disparu entre-temps
        navigate("/login");
        return;
      }

      // Passage des tokens vers app.zenkai.nc via URL hash (cross-domain Supabase)
      const params = new URLSearchParams({
        access_token:  session.access_token,
        refresh_token: session.refresh_token,
        token_type:    "bearer",
        expires_in:    String(session.expires_in ?? 3600),
      });

      window.location.href = `https://app.zenkai.nc/leia#${params.toString()}`;
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
