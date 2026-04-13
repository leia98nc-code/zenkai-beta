import { useNavigate } from "react-router-dom";

const TrialExpired = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#F5EFE7",
      fontFamily: "'Space Grotesk', 'DM Sans', Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 16px",
    }}>

      {/* Logo */}
      <div style={{ marginBottom: "48px" }}>
        <img
          src="https://app.zenkai.nc/images/logo-zenkai.png"
          alt="ZENKAI"
          style={{ height: "36px", display: "block" }}
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      </div>

      {/* Card */}
      <div style={{
        backgroundColor: "#FFFFFF",
        maxWidth: "520px",
        width: "100%",
        padding: "0",
        boxShadow: "0 4px 40px rgba(0,0,0,0.10)",
        overflow: "hidden",
      }}>

        {/* Barre top navy */}
        <div style={{
          height: "4px",
          background: "linear-gradient(90deg, #12365C 0%, #2C5F8D 55%, #5F8567 100%)",
        }} />

        {/* Contenu */}
        <div style={{ padding: "48px 44px 44px" }}>

          {/* Icône LEIA */}
          <div style={{ marginBottom: "28px" }}>
            <img
              src="https://app.zenkai.nc/images/LEIA-entier.png"
              alt="LEIA"
              style={{ height: "80px", display: "block" }}
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>

          {/* Titre */}
          <h1 style={{
            margin: "0 0 16px 0",
            fontSize: "22px",
            fontWeight: "700",
            color: "#12365C",
            lineHeight: "1.3",
            letterSpacing: "-0.02em",
          }}>
            Votre période d'essai est terminée
          </h1>

          {/* Séparateur */}
          <div style={{
            width: "40px",
            height: "3px",
            backgroundColor: "#8B1A1A",
            marginBottom: "24px",
          }} />

          {/* Message */}
          <p style={{
            margin: "0 0 16px 0",
            fontSize: "15px",
            lineHeight: "1.75",
            color: "#4D4D4D",
          }}>
            Votre accès gratuit à <strong>LEIA</strong> a expiré. Nous espérons que ces 30 jours vous ont permis de mesurer la valeur de l'outil au quotidien.
          </p>

          <p style={{
            margin: "0 0 36px 0",
            fontSize: "15px",
            lineHeight: "1.75",
            color: "#4D4D4D",
          }}>
            Pour continuer à bénéficier de LEIA et de l'expertise humaine associée, activez votre abonnement à partir de <strong>4 900 XPF/mois</strong>.
          </p>

          {/* CTA principal */}
          <a
            href="/products"
            style={{
              display: "block",
              backgroundColor: "#12365C",
              color: "#FFFFFF",
              textAlign: "center",
              padding: "15px 32px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              marginBottom: "14px",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0e2a47")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#12365C")}
          >
            Voir les offres
          </a>

          {/* CTA secondaire */}
          <a
            href="mailto:contact@zenkai.nc"
            style={{
              display: "block",
              backgroundColor: "transparent",
              color: "#12365C",
              textAlign: "center",
              padding: "14px 32px",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid #12365C",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#12365C";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#12365C";
            }}
          >
            Contacter ZENKAI
          </a>

        </div>

        {/* Footer card */}
        <div style={{
          backgroundColor: "#F5EFE7",
          borderTop: "1px solid #DDD0BF",
          padding: "18px 44px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <span style={{
            fontSize: "11px",
            color: "#999999",
            letterSpacing: "0.04em",
          }}>
            contact@zenkai.nc · zenkai.nc
          </span>
          <button
            onClick={() => navigate("/login")}
            style={{
              background: "none",
              border: "none",
              fontSize: "11px",
              color: "#999999",
              letterSpacing: "0.04em",
              cursor: "pointer",
              textDecoration: "underline",
              padding: "0",
            }}
          >
            Se déconnecter
          </button>
        </div>

      </div>

    </div>
  );
};

export default TrialExpired;
