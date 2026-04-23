import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Leia = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/login");
        return;
      }
      // Passe les tokens à app.zenkai.nc via URL hash (cross-domain Supabase)
      const params = new URLSearchParams({
        access_token:  session.access_token,
        refresh_token: session.refresh_token,
        token_type:    "bearer",
        expires_in:    String(session.expires_in ?? 3600),
      });
      window.location.href = `https://app.zenkai.nc/leia.html#${params.toString()}`;
    });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center"
         style={{ background: "#F5EFE7" }}>
      <div className="flex flex-col items-center gap-4">
        <img src="https://app.zenkai.nc/images/logo-zenkai-icon-rogne.png"
             alt="" className="w-12 h-12 opacity-60"
             onError={e => (e.currentTarget.style.display = "none")} />
        <p style={{ fontFamily: "Merriweather, serif", fontStyle: "italic",
                    fontSize: "0.88rem", color: "#4D4D4D" }}>
          Redirection vers LEIA…
        </p>
      </div>
    </div>
  );
};

export default Leia;
