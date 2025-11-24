import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import leiaLogo from "@/assets/leia-avatar-new.png";
import zenkaiLogo from "@/assets/zenkai-logo.png";

const resetSchema = z.object({
  email: z.string().trim().email("Email invalide").max(255),
});

const ResetPassword = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess(false);

    try {
      const validated = resetSchema.parse({ email });
      
      const { error } = await supabase.auth.resetPasswordForEmail(validated.email, {
        redirectTo: `${window.location.origin}/update-password`,
      });

      if (error) throw error;

      setSuccess(true);
      toast({
        title: "Email envoyé",
        description: "Un email vous a été envoyé avec les instructions pour réinitialiser votre mot de passe.",
      });
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
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-sand p-4 relative">
      <Link to="/" className="absolute top-6 left-6">
        <img
          src={zenkaiLogo}
          alt="Retour à l'accueil"
          className="w-16 h-16 object-contain hover:opacity-80 transition-opacity"
        />
      </Link>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-zen p-8">
          <div className="flex flex-col items-center mb-8">
            <img
              src={leiaLogo}
              alt="LEIA"
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
            <h1 className="text-2xl font-semibold text-navy">
              Réinitialiser votre mot de passe
            </h1>
            <p className="text-stone text-sm mt-2 text-center">
              Entrez votre adresse email pour recevoir un lien de réinitialisation
            </p>
          </div>

          {success ? (
            <div className="space-y-4">
              <div className="bg-success/10 border border-success/20 rounded-md p-4 text-center">
                <p className="text-success font-medium">
                  Un email vous a été envoyé avec les instructions
                </p>
                <p className="text-sm text-stone mt-2">
                  Vérifiez votre boîte de réception et suivez le lien pour définir un nouveau mot de passe.
                </p>
              </div>
              <Link to="/login" className="block">
                <Button variant="outline" className="w-full">
                  Retour à la connexion
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                  disabled={loading}
                  placeholder="votre.email@exemple.com"
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Envoi en cours..." : "Envoyer le lien de réinitialisation"}
              </Button>

              <Link to="/login" className="block text-center">
                <Button variant="ghost" className="w-full text-muted-foreground hover:text-navy">
                  Retour à la connexion
                </Button>
              </Link>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
