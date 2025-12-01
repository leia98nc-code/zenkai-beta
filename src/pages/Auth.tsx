import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Shield, ArrowLeft } from "lucide-react";
import { z } from "zod";
import zenkaiLogo from "@/assets/zenkai-logo.png";

const authSchema = z.object({
  email: z.string().trim().email({ message: "Email invalide" }).max(255),
  password: z.string().min(6, { message: "Mot de passe minimum 6 caractères" }),
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/chat");
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/chat");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = authSchema.parse({ email, password });
      setLoading(true);

      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: validatedData.email,
          password: validatedData.password,
        });

        if (error) {
          if (error.message.includes("Invalid login credentials")) {
            toast({
              variant: "destructive",
              title: "Erreur",
              description: "Email ou mot de passe incorrect",
            });
          } else {
            toast({
              variant: "destructive",
              title: "Erreur",
              description: error.message,
            });
          }
        } else if (data.user) {
          console.log('Tentative d\'enregistrement de session pour user:', data.user.id);
          
          // Enregistrer la session de connexion
          const { data: sessionData, error: sessionError } = await supabase
            .from('user_sessions')
            .insert({
              user_id: data.user.id,
              login_at: new Date().toISOString(),
            })
            .select();
          
          if (sessionError) {
            console.error('Erreur lors de l\'enregistrement de la session:', sessionError);
          } else {
            console.log('Session enregistrée avec succès:', sessionData);
          }
          
          toast({
            title: "Connexion réussie",
            description: "Bienvenue !",
          });
        }
      } else {
        const { error } = await supabase.auth.signUp({
          email: validatedData.email,
          password: validatedData.password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
          },
        });

        if (error) {
          if (error.message.includes("User already registered")) {
            toast({
              variant: "destructive",
              title: "Erreur",
              description: "Cet email est déjà utilisé",
            });
          } else {
            toast({
              variant: "destructive",
              title: "Erreur",
              description: error.message,
            });
          }
        } else {
          toast({
            title: "Inscription réussie",
            description: "Vous pouvez maintenant vous connecter",
          });
          setIsLogin(true);
        }
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Erreur de validation",
          description: error.errors[0].message,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background relative">
        <Button
          variant="ghost"
          className="absolute top-4 left-4"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour
        </Button>
        <Card className="w-full max-w-md border-border/50">
          <CardHeader className="space-y-4">
            <div className="flex justify-center">
              <img 
                src={zenkaiLogo} 
                alt="ZENKAI Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <CardTitle className="text-2xl text-center">
              {isLogin ? "Connexion" : "Inscription"}
            </CardTitle>
            <CardDescription className="text-center">
              {isLogin 
                ? "Connectez-vous pour accéder à LEIA" 
                : "Créez votre compte pour commencer"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuth} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-muted/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-muted/50"
                />
              </div>
              {!isLogin && (
                <div className="text-xs text-muted-foreground">
                  En créant un compte, vous acceptez nos{" "}
                  <a href="/legal/terms" className="text-primary hover:underline">
                    conditions d'utilisation
                  </a>{" "}
                  et notre{" "}
                  <a href="/legal/privacy" className="text-primary hover:underline">
                    politique de confidentialité
                  </a>
                </div>
              )}
              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                disabled={loading}
              >
                {loading ? "Chargement..." : isLogin ? "Se connecter" : "S'inscrire"}
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Pas de compte ? S'inscrire" : "Déjà un compte ? Se connecter"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Right Column - Benefits */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary via-primary-glow to-accent p-12 items-center justify-center">
        <div className="max-w-md text-primary-foreground space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">
              Bienvenue sur LEIA
            </h2>
            <p className="text-lg opacity-90">
              Votre expert juridique en intelligence artificielle pour la Nouvelle-Calédonie
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <img 
                src={zenkaiLogo} 
                alt="ZENKAI Logo" 
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold mb-1">Réponses instantanées</h3>
                <p className="text-sm opacity-90">
                  Obtenez des réponses précises à vos questions juridiques 24h/24
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Expertise locale</h3>
                <p className="text-sm opacity-90">
                  Spécialisé dans le droit du travail de Nouvelle-Calédonie
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Gratuit pour commencer</h3>
                <p className="text-sm opacity-90">
                  Pas de carte bancaire requise pour votre inscription
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
