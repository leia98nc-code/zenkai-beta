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

    const { user_id, session_token } = await req.json();
    if (
      typeof user_id !== 'string' ||
      !/^[0-9a-f-]{36}$/i.test(user_id) ||
      typeof session_token !== 'string' ||
      session_token.length < 8
    ) {
      return new Response(JSON.stringify({ valid: false, error: 'Invalid input' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const { data, error } = await supabase
      .from('active_sessions')
      .select('session_token')
      .eq('user_id', user_id)
      .maybeSingle();

    if (error) throw error;

    const valid = !!data && data.session_token === session_token;

    if (valid) {
      await supabase
        .from('active_sessions')
        .update({ last_seen: new Date().toISOString() })
        .eq('user_id', user_id);
    }

    return new Response(JSON.stringify({ valid }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('validate-session error', e);
    return new Response(JSON.stringify({ valid: false, error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
