-- Create table to track user registrations
CREATE TABLE IF NOT EXISTS public.user_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS
ALTER TABLE public.user_registrations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow users to view their own registration
CREATE POLICY "Users can view their own registration"
  ON public.user_registrations
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Allow service role to view all registrations (for admin/export purposes)
CREATE POLICY "Service role can view all registrations"
  ON public.user_registrations
  FOR SELECT
  USING (auth.role() = 'service_role');

-- Create function to automatically log registrations
CREATE OR REPLACE FUNCTION public.handle_new_user_registration()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_registrations (user_id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$;

-- Create trigger to log each new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user_registration();