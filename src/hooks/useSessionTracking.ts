import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSessionTracking = () => {
  const currentSessionId = useRef<string | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth event:', event, 'User:', session?.user?.id);
        
        if (event === 'SIGNED_IN' && session?.user) {
          // Petite attente pour s'assurer que la session est établie
          setTimeout(async () => {
            const { data, error } = await supabase
              .from('user_sessions')
              .insert({
                user_id: session.user.id,
                login_at: new Date().toISOString(),
              })
              .select()
              .single();
            
            if (error) {
              console.error('Erreur création session:', error);
            } else {
              console.log('Session créée:', data);
              currentSessionId.current = data.id;
            }
          }, 100);
        }
        
        if (event === 'SIGNED_OUT' && currentSessionId.current) {
          // Mise à jour de la déconnexion
          supabase
            .from('user_sessions')
            .update({ logout_at: new Date().toISOString() })
            .eq('id', currentSessionId.current)
            .then(({ error }) => {
              if (error) {
                console.error('Erreur mise à jour logout:', error);
              }
            });
          
          currentSessionId.current = null;
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);
};
