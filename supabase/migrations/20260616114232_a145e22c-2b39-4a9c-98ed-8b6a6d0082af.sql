CREATE TABLE public.active_sessions (
  user_id uuid PRIMARY KEY,
  session_token text NOT NULL,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now(),
  last_seen timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.active_sessions TO service_role;

ALTER TABLE public.active_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No client access to active_sessions"
ON public.active_sessions
FOR ALL
TO authenticated, anon
USING (false)
WITH CHECK (false);