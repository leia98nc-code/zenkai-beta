-- Drop existing policies on user_registrations
DROP POLICY IF EXISTS "Authenticated users can view their own registration" ON public.user_registrations;
DROP POLICY IF EXISTS "Users can insert their own registration" ON public.user_registrations;

-- Create strict policies that explicitly require authentication and owner matching
CREATE POLICY "Authenticated users can view only their own registration"
ON public.user_registrations
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can insert only their own registration"
ON public.user_registrations
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);