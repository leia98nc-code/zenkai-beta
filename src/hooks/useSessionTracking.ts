import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSessionTracking = () => {
  const currentSessionId = useRef<string | null>(null);
  const hasCheckedInitialSession = useRef(false);
  const isCreatingSession = useRef(false);

  useEffect(() => {
    // Vérifier la session existante au montage
    const checkExistingSession = async () => {
      if (hasCheckedInitialSession.current) {
        return;
      }
      hasCheckedInitialSession.current = true;

      const { data: { session } } = await supabase.auth.getSession();
      
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
          isCreatingSession.current = true;
          const { data } = await supabase
            .from('user_sessions')
            .insert({
              user_id: session.user.id,
              login_at: new Date().toISOString(),
            })
            .select()
            .single();
          
          if (data) {
            currentSessionId.current = data.id;
          }
          isCreatingSession.current = false;
        } else {
          currentSessionId.current = existingSessions[0].id;
        }
      }
    };

    checkExistingSession();

    // Écouter les changements d'authentification
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          // Prevent duplicate session creation
          if (currentSessionId.current || isCreatingSession.current) {
            return;
          }
          
          // Utiliser setTimeout pour éviter le blocage
          setTimeout(() => {
            // Double-check to prevent race conditions
            if (currentSessionId.current || isCreatingSession.current) {
              return;
            }
            isCreatingSession.current = true;
            
            supabase
              .from('user_sessions')
              .insert({
                user_id: session.user.id,
                login_at: new Date().toISOString(),
              })
              .select()
              .single()
              .then(({ data }) => {
                if (data) {
                  currentSessionId.current = data.id;
                }
                isCreatingSession.current = false;
              });
          }, 0);
        }
        
        if (event === 'SIGNED_OUT' && currentSessionId.current) {
          // Utiliser setTimeout pour éviter le blocage
          setTimeout(() => {
            supabase
              .from('user_sessions')
              .update({ logout_at: new Date().toISOString() })
              .eq('id', currentSessionId.current);
          }, 0);
          
          currentSessionId.current = null;
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);
};
