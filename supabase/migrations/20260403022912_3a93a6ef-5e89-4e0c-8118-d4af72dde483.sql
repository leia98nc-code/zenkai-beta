INSERT INTO public.profiles (user_id, first_name, last_name, organization, trial_end_date, is_active)
SELECT 
  ur.user_id,
  ur.first_name,
  ur.last_name,
  ur.organization,
  ur.created_at + INTERVAL '30 days',
  true
FROM public.user_registrations ur
LEFT JOIN public.profiles p ON p.user_id = ur.user_id
WHERE p.user_id IS NULL
  AND ur.first_name IS NOT NULL;