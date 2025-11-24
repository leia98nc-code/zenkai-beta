-- Drop existing policies
DROP POLICY IF EXISTS "Service role can view all registrations" ON public.user_registrations;
DROP POLICY IF EXISTS "Users can view their own registration" ON public.user_registrations;

-- Block anonymous access - only authenticated users can select
CREATE POLICY "Authenticated users can view their own registration"
ON public.user_registrations
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Allow service role to view all (for admin purposes)
CREATE POLICY "Service role can view all registrations"
ON public.user_registrations
FOR SELECT
TO service_role
USING (true);

-- Prevent unauthorized inserts - only authenticated users can insert their own data
CREATE POLICY "Users can insert their own registration"
ON public.user_registrations
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);