-- Add explicit DELETE policies to prevent any deletions on audit tables
-- This provides defense-in-depth even though RLS currently implicitly denies deletes

-- Prevent all DELETE operations on user_registrations (immutable audit log)
CREATE POLICY "No one can delete registrations"
ON public.user_registrations
AS RESTRICTIVE
FOR DELETE
TO authenticated
USING (false);

-- Prevent all DELETE operations on profiles
CREATE POLICY "No one can delete profiles"
ON public.profiles
AS RESTRICTIVE
FOR DELETE
TO authenticated
USING (false);

-- Prevent all DELETE operations on user_sessions (immutable audit log)
CREATE POLICY "No one can delete sessions"
ON public.user_sessions
AS RESTRICTIVE
FOR DELETE
TO authenticated
USING (false);