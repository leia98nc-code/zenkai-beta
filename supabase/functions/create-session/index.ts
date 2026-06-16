import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': req.headers.get('origin') === 'https://app.zenkai.nc' ? 'https://app.zenkai.nc' : 'https://www.zenkai.nc',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-webhook-secret',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { status: 200, headers: corsHeaders });

  try {
    const secret = Deno.env.get('N8N_WEBHOOK_SECRET');
    if (!secret || req.headers.get('x-webhook-secret') !== secret) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { user_id, user_agent } = await req.json();
    if (typeof user_id !== 'string' || !/^[0-9a-f-]{36}$/i.test(user_id)) {
      return new Response(JSON.stringify({ error: 'Invalid user_id' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const session_token = crypto.randomUUID();

    const { error } = await supabase
      .from('active_sessions')
      .upsert({
        user_id,
        session_token,
        user_agent: typeof user_agent === 'string' ? user_agent : null,
        last_seen: new Date().toISOString(),
      }, { onConflict: 'user_id' });

    if (error) throw error;

    return new Response(JSON.stringify({ session_token }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('create-session error', e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
