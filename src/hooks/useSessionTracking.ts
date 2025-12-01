import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSessionTracking = () => {
  const currentSessionId = useRef<string | null>(null);
  const hasCheckedInitialSession = useRef(false);

  useEffect(() => {
    // Vérifier la session existante au montage
    const checkExistingSession = async () => {
      if (hasCheckedInitialSession.current) return;
      hasCheckedInitialSession.current = true;

      const { data: { session } } = await supabase.auth.getSession();
      console.log('Checking existing session:', session?.user?.id);
      
      if (session?.user) {
        // Vérifier s'il existe déjà une session active pour cet utilisateur
        const { data: existingSessions } = await supabase
          .from('user_sessions')
          .select('id')
          .eq('user_id', session.user.id)
          .is('logout_at', null)
          .order('created_at', { ascending: false })
          .limit(1);
        
        if (!existingSessions || existingSessions.length === 0) {
          console.log('No active session found, creating one...');
          const { data, error } = await supabase
            .from('user_sessions')
            .insert({
              user_id: session.user.id,
              login_at: new Date().toISOString(),
            })
            .select()
            .single();
          
          if (error) {
            console.error('Erreur création session initiale:', error);
          } else {
            console.log('Session initiale créée:', data);
            currentSessionId.current = data.id;
          }
        } else {
          console.log('Active session already exists:', existingSessions[0].id);
          currentSessionId.current = existingSessions[0].id;
        }
      }
    };

    checkExistingSession();

    // Écouter les changements d'authentification
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
