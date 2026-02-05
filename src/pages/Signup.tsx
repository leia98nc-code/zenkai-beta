import { useState, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import leiaLogo from "@/assets/leia-avatar-new.png";
import zenkaiLogo from "@/assets/zenkai-logo.png";

const signupSchema = z.object({
  firstName: z.string().trim().min(1, "Le prénom est requis").max(100),
  lastName: z.string().trim().min(1, "Le nom est requis").max(100),
  organization: z.string().trim().min(1, "L'organisation est requise").max(200),
  email: z.string().trim().email("Email invalide").max(255),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
  confirmPassword: z.string().min(6, "Veuillez confirmer votre mot de passe"),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter les conditions d'utilisation" }),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false as boolean,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const validated = signupSchema.parse(formData);

      const redirectUrl = `${window.location.origin}/leia`;
      
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: validated.email,
        password: validated.password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            first_name: validated.firstName,
            last_name: validated.lastName,
            organization: validated.organization,
          },
        },
      });

      if (signUpError) throw signUpError;

      if (authData.user) {
        const { error: profileError } = await supabase
          .from("profiles")
          .insert({
            user_id: authData.user.id,
            first_name: validated.firstName,
            last_name: validated.lastName,
            organization: validated.organization,
          });

        if (profileError) throw profileError;

        toast({
          title: "Inscription réussie",
          description: "Bienvenue sur LEIA !",
        });

        navigate("/leia");
      }
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
          title: "Erreur d'inscription",
          description: error instanceof Error ? error.message : "Une erreur est survenue",
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
        <div className="bg-white rounded-lg shadow-elegant p-8">
          <div className="flex flex-col items-center mb-8">
            <img 
              src={leiaLogo} 
              alt="LEIA" 
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
            <h1 className="text-2xl font-semibold text-navy">
              Créer un compte
            </h1>
            <p className="text-stone text-sm mt-2">
              Rejoignez LEIA - Assistant Juridique
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <Label htmlFor="firstName">Prénom *</Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="mt-1"
                disabled={loading}
                required
              />
              {errors.firstName && (
                <p className="text-sm text-destructive mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <Label htmlFor="lastName">Nom *</Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="mt-1"
                disabled={loading}
                required
              />
              {errors.lastName && (
                <p className="text-sm text-destructive mt-1">{errors.lastName}</p>
              )}
            </div>

            <div>
              <Label htmlFor="organization">Organisation *</Label>
              <Input
                id="organization"
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="mt-1"
                disabled={loading}
                required
              />
              {errors.organization && (
                <p className="text-sm text-destructive mt-1">{errors.organization}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1"
                disabled={loading}
                required
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="password">Mot de passe *</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="mt-1"
                disabled={loading}
                required
              />
              {errors.password && (
                <p className="text-sm text-destructive mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirmer le mot de passe *</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="mt-1"
                disabled={loading}
                required
              />
              {errors.confirmPassword && (
                <p className="text-sm text-destructive mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="acceptTerms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, acceptTerms: checked === true })
                }
                disabled={loading}
                className="mt-0.5"
              />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="acceptTerms"
                  className="text-sm font-normal cursor-pointer"
                >
                  J'accepte les{" "}
                  <Link
                    to="/cgu"
                    target="_blank"
                    className="text-navy hover:underline font-medium"
                  >
                    conditions générales d'utilisation
                  </Link>{" "}
                  et la politique de confidentialité *
                </Label>
                {errors.acceptTerms && (
                  <p className="text-sm text-destructive">{errors.acceptTerms}</p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Inscription..." : "S'inscrire"}
            </Button>
          </form>

          <p className="text-center text-sm text-stone mt-6">
            Déjà un compte ?{" "}
            <Link to="/login" className="text-navy hover:underline font-medium">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;