import { createClient } from 'npm:@supabase/supabase-js@2';

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const secret = Deno.env.get('N8N_TRIAL_LIFECYCLE_SECRET');
  const provided = req.headers.get('x-webhook-secret') ?? '';
  if (!secret || !safeEqual(provided, secret)) return json({ error: 'Unauthorized' }, 401);

  let body: any;
  try {
    body = await req.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    { auth: { persistSession: false } },
  );

  try {
    if (body?.action === 'reminders') {
      if (body.days !== 7 && body.days !== 1) return json({ error: 'days must be 7 or 1' }, 400);
      const fn = body.days === 7 ? 'get_expiring_users_j7' : 'get_expiring_users_j1';
      const { data, error } = await supabase.rpc(fn);
      if (error) throw error;
      const users = (data ?? []) as any[];
      const results = await Promise.all(users.map(async (u) => {
        const { data: email, error: e } = await supabase.rpc('get_user_email', { p_user_id: u.user_id });
        if (e) throw e;
        return {
          user_id: u.user_id,
          email: email ?? null,
          first_name: u.first_name ?? null,
          last_name: u.last_name ?? null,
          trial_end_date: u.trial_end_date,
        };
      }));
      const out = results.filter((r) => r.email);
      console.log(`action=reminders days=${body.days} count=${out.length}`);
      return json(out);
    }

    if (body?.action === 'deactivate') {
      const { error } = await supabase.rpc('deactivate_expired_users');
      if (error) throw error;
      console.log('action=deactivate success');
      return json({ success: true });
    }

    return json({ error: 'Invalid action' }, 400);
  } catch (_e) {
    console.error(`action=${typeof body?.action === 'string' ? body.action.slice(0, 20) : 'unknown'} failed`);
    return json({ error: 'Internal error' }, 500);
  }
});
