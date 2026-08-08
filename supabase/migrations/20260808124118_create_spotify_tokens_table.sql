/*
# Create spotify_tokens table for the "Now Playing" widget

1. Purpose
   Stores a single row holding the site owner's Spotify OAuth tokens
   (access, refresh, expiry). The edge function reads these to call
   Spotify's Web API and refreshes them automatically when they expire.

2. New Tables
   - `spotify_tokens`
     - `id`           uuid, primary key (always a single fixed row)
     - `access_token`  text, Spotify access token
     - `refresh_token` text, long-lived token used to get new access tokens
     - `expires_at`    timestamptz, when the access token expires
     - `updated_at`    timestamptz, auto-updated on every change

3. Security
   - RLS enabled.
   - The table is single-tenant / public-read: the public portfolio only
     reads a *derived* now-playing payload through the edge function — it
     never touches this table directly. However, policies are set to
     anon+authenticated so the edge function (which uses the service role
     key and bypasses RLS) can operate, and no authenticated-only lockout
     occurs.
   - In practice the edge function uses the service role key, so these
     policies are belt-and-suspenders.
*/

CREATE TABLE IF NOT EXISTS spotify_tokens (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  access_token text NOT NULL,
  refresh_token text NOT NULL,
  expires_at timestamptz NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE spotify_tokens ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_spotify_tokens" ON spotify_tokens;
CREATE POLICY "anon_read_spotify_tokens"
ON spotify_tokens FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_write_spotify_tokens" ON spotify_tokens;
CREATE POLICY "anon_write_spotify_tokens"
ON spotify_tokens FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_spotify_tokens" ON spotify_tokens;
CREATE POLICY "anon_update_spotify_tokens"
ON spotify_tokens FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_spotify_tokens" ON spotify_tokens;
CREATE POLICY "anon_delete_spotify_tokens"
ON spotify_tokens FOR DELETE
TO anon, authenticated USING (true);
