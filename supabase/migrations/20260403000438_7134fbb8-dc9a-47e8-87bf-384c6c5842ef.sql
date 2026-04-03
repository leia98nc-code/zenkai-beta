
CREATE EXTENSION IF NOT EXISTS pg_net;

CREATE OR REPLACE FUNCTION public.notify_n8n_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://app.zenkai.nc/webhook/leia-inscription',
    body := json_build_object(
      'user_id', NEW.user_id,
      'first_name', NEW.first_name,
      'last_name', NEW.last_name,
      'organization', NEW.organization,
      'trial_end_date', NEW.trial_end_date,
      'created_at', NEW.created_at
    )::text,
    headers := '{"Content-Type": "application/json"}'::jsonb
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_profile_created_notify_n8n
  AFTER INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_n8n_new_user();

CREATE OR REPLACE FUNCTION public.get_expiring_users_j7()
RETURNS TABLE(user_id uuid, first_name text, trial_end_date timestamptz)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT p.user_id, p.first_name, p.trial_end_date
  FROM profiles p
  WHERE p.is_active = true
    AND p.trial_end_date >= now() + INTERVAL '6 days 23 hours'
    AND p.trial_end_date < now() + INTERVAL '7 days 1 hour';
$$;

CREATE OR REPLACE FUNCTION public.get_expiring_users_j1()
RETURNS TABLE(user_id uuid, first_name text, trial_end_date timestamptz)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT p.user_id, p.first_name, p.trial_end_date
  FROM profiles p
  WHERE p.is_active = true
    AND p.trial_end_date >= now() + INTERVAL '22 hours'
    AND p.trial_end_date < now() + INTERVAL '25 hours';
$$;

GRANT EXECUTE ON FUNCTION public.get_expiring_users_j7() TO anon;
GRANT EXECUTE ON FUNCTION public.get_expiring_users_j1() TO anon;
