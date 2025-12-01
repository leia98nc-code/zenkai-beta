import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSessionTracking = () => {
  const currentSessionId = useRef<string | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth event:', event, 'User:', session?.user?.id);
        
        if (event === 'SIGNED_IN' && session?.user) {
          // Utiliser setTimeout pour éviter le blocage
          setTimeout(() => {
            supabase
              .from('user_sessions')
              .insert({
                user_id: session.user.id,
                login_at: new Date().toISOString(),
              })
              .select()
              .single()
              .then(({ data, error }) => {
                if (error) {
                  console.error('Erreur création session:', error);
                } else {
                  console.log('Session créée:', data);
                  currentSessionId.current = data.id;
                }
              });
          }, 0);
        }
        
        if (event === 'SIGNED_OUT' && currentSessionId.current) {
          // Utiliser setTimeout pour éviter le blocage
          setTimeout(() => {
            supabase
              .from('user_sessions')
              .update({ logout_at: new Date().toISOString() })
              .eq('id', currentSessionId.current)
              .then(({ error }) => {
                if (error) {
                  console.error('Erreur mise à jour logout:', error);
                }
              });
          }, 0);
          
          currentSessionId.current = null;
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);
};
