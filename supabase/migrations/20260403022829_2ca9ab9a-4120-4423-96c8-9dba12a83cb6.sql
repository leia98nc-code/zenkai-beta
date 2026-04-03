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
EXCEPTION
  WHEN OTHERS THEN
    RETURN NEW;
END;
$$;