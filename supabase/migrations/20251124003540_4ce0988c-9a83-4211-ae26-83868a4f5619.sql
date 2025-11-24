-- Add columns to user_registrations table to store all signup information
ALTER TABLE public.user_registrations
ADD COLUMN first_name TEXT,
ADD COLUMN last_name TEXT,
ADD COLUMN organization TEXT;

-- Update the trigger function to extract and store all signup data from metadata
CREATE OR REPLACE FUNCTION public.handle_new_user_registration()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.user_registrations (
    user_id, 
    email, 
    first_name, 
    last_name, 
    organization
  )
  VALUES (
    NEW.id, 
    NEW.email,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name',
    NEW.raw_user_meta_data->>'organization'
  );
  RETURN NEW;
END;
$$;