ALTER TABLE public.profiles 
ADD COLUMN trial_end_date timestamp with time zone,
ADD COLUMN is_active boolean NOT NULL DEFAULT true;