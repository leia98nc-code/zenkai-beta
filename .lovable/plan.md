# Plan : Gestion de sessions via n8n

## 1. Nouvelle table `public.active_sessions`

Migration SQL avec :
- `user_id uuid` (PK — une session active par user, simplifie le « supprime l'ancienne »)
- `session_token text not null`
- `user_agent text`
- `created_at timestamptz default now()`
- `last_seen timestamptz default now()`
- GRANT `ALL` à `service_role` uniquement (les edge functions y accèdent avec la service role key — pas d'accès client direct)
- RLS activée, aucune policy pour `anon`/`authenticated` (verrouillée côté client)

## 2. Trois edge functions publiques (appelées par n8n)

Toutes en `supabase/functions/<nom>/index.ts`, avec :
- CORS (`OPTIONS` handler + `corsHeaders` sur toutes les réponses)
- Validation Zod du body
- Client Supabase initialisé avec `SUPABASE_SERVICE_ROLE_KEY` (bypass RLS)
- Auth via un secret partagé `N8N_WEBHOOK_SECRET` envoyé par n8n dans le header `x-webhook-secret` — sinon n'importe qui sur Internet pourrait créer/valider/supprimer des sessions

### `create-session` (POST)
- Body : `{ user_id: uuid, user_agent?: string }`
- `upsert` sur `active_sessions` (PK = user_id) avec `session_token = crypto.randomUUID()`, `last_seen = now()`
- Retour : `{ session_token }`

### `validate-session` (POST)
- Body : `{ user_id: uuid, session_token: string }`
- `SELECT` la ligne, compare le token
- Si match → `UPDATE last_seen = now()`, retour `{ valid: true }`
- Sinon → `{ valid: false }`

### `delete-session` (POST)
- Body : `{ user_id: uuid }`
- `DELETE FROM active_sessions WHERE user_id = $1`
- Retour : `{ success: true }`

## 3. Secret à ajouter

`N8N_WEBHOOK_SECRET` (valeur générée par vous, à coller aussi dans la config n8n des 3 webhooks).

## Détails techniques

- `verify_jwt = false` par défaut sur Lovable Cloud → ok, n8n n'envoie pas de JWT utilisateur.
- Pas de FK vers `auth.users` (interdit). `user_id` est un simple uuid.
- URL finale des fonctions : `https://rolungturaelkdccjdfo.supabase.co/functions/v1/<nom>` à configurer côté n8n.

## Question avant build

Le schéma proposé met `user_id` en clé primaire (une seule session active par utilisateur, ce qui colle avec « supprime l'ancienne session » dans `create-session`). Confirmez-vous, ou voulez-vous autoriser plusieurs sessions simultanées par user ?
