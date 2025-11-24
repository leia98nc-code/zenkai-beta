import { useState, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import zenkaiLogo from "@/assets/zenkai-text-logo.png";

const loginSchema = z.object({
  email: z.string().trim().email("Email invalide").max(255),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const validated = loginSchema.parse(formData);

      const { error } = await supabase.auth.signInWithPassword({
        email: validated.email,
        password: validated.password,
      });

      if (error) throw error;

      toast({
        title: "Connexion réussie",
        description: "Bienvenue sur LEIA !",
      });

      navigate("/leia");
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
          title: "Erreur de connexion",
          description: "Email ou mot de passe incorrect",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-sand p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-elegant p-8">
          <div className="flex flex-col items-center mb-8">
            <Link to="/" className="mb-4">
              <img 
                src={zenkaiLogo} 
                alt="Zenkai" 
                className="h-12 object-contain hover:opacity-80 transition-opacity"
              />
            </Link>
            <h1 className="text-2xl font-semibold text-navy">
              Se connecter
            </h1>
            <p className="text-stone text-sm mt-2">
              Accédez à votre assistant juridique
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1"
                disabled={loading}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="mt-1"
                disabled={loading}
              />
              {errors.password && (
                <p className="text-sm text-destructive mt-1">{errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Connexion..." : "Se connecter"}
            </Button>
          </form>

          <p className="text-center text-sm text-stone mt-6">
            Pas de compte ?{" "}
            <Link to="/signup" className="text-navy hover:underline font-medium">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;