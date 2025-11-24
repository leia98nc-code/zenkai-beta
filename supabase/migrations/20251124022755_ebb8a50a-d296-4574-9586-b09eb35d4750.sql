-- Remove the overly permissive service role policy from user_registrations table
DROP POLICY IF EXISTS "Service role can view all registrations" ON public.user_registrations;