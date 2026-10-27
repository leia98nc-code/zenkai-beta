import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import leiaLogo from "@/assets/leia-avatar-new.png";

const updatePasswordSchema = z.object({
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

const UpdatePassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [validSession, setValidSession] = useState(false);

  useEffect(() => {
    let resolved = false;
    const markValid = () => {
      if (resolved) return;
      resolved = true;
      clearTimeout(timer);
      setValidSession(true);
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" || session) markValid();
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) markValid();
    });

    // Délai de grâce de 5 secondes maximum avant de conclure que le lien est invalide
    const timer = setTimeout(() => {
      if (resolved) return;
      resolved = true;
      toast({
        variant: "destructive",
        title: "Session invalide",
        description: "Le lien de réinitialisation est invalide ou a expiré.",
      });
      navigate("/reset-password");
    }, 5000);

    return () => {
      resolved = true;
      clearTimeout(timer);
      subscription.unsubscribe();
    };
  }, [navigate, toast]);

  const translateAuthError = (message: string): string => {
    const m = message.toLowerCase();
    if (m.includes("different from the old password") || m.includes("same_password")) {
      return "Le nouveau mot de passe doit être différent de l'ancien.";
    }
    if (m.includes("at least") && m.includes("characters")) {
      return "Le mot de passe est trop court.";
    }
    if (m.includes("weak") || m.includes("pwned") || m.includes("leaked") || m.includes("should contain")) {
      return "Le mot de passe est trop faible. Choisissez-en un plus robuste (lettres, chiffres, symboles).";
    }
    if (m.includes("session") && (m.includes("missing") || m.includes("expired") || m.includes("not found"))) {
      return "Votre session a expiré. Veuillez redemander un lien de réinitialisation.";
    }
    if (m.includes("rate limit") || m.includes("too many")) {
      return "Trop de tentatives. Veuillez patienter quelques minutes avant de réessayer.";
    }
    return message;
  };

  const handleUpdatePassword = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const validated = updatePasswordSchema.parse(formData);

      const { error } = await supabase.auth.updateUser({
        password: validated.password,
      });

      if (error) throw error;

      toast({
        title: "Mot de passe mis à jour",
        description: "Votre mot de passe a été réinitialisé avec succès.",
      });

      // Déconnecter l'utilisateur et rediriger vers login
      await supabase.auth.signOut();
      navigate("/login");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        const raw = error instanceof Error && error.message ? error.message : "";
        toast({
          variant: "destructive",
          title: "Erreur",
          description: raw
            ? translateAuthError(raw)
            : "Une erreur est survenue lors de la mise à jour du mot de passe.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  if (!validSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-sand p-4">
        <div className="text-center">
          <p className="text-stone">Vérification de la session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-sand p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-zen p-8">
          <div className="flex flex-col items-center mb-8">
            <img
              src={leiaLogo}
              alt="LEIA"
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
            <h1 className="text-2xl font-semibold text-navy">
              Nouveau mot de passe
            </h1>
            <p className="text-stone text-sm mt-2 text-center">
              Choisissez un nouveau mot de passe sécurisé
            </p>
          </div>

          <form onSubmit={handleUpdatePassword} className="space-y-4">
            <div>
              <Label htmlFor="password">Nouveau mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="mt-1"
                disabled={loading}
                placeholder="Minimum 6 caractères"
              />
              {errors.password && (
                <p className="text-sm text-destructive mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="mt-1"
                disabled={loading}
                placeholder="Retapez le mot de passe"
              />
              {errors.confirmPassword && (
                <p className="text-sm text-destructive mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Mise à jour..." : "Réinitialiser le mot de passe"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
