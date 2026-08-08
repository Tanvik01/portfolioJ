import { createClient } from "npm:@supabase/supabase-js@2.45.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SPOTIFY_CLIENT_ID = Deno.env.get("SPOTIFY_CLIENT_ID") ?? "";
const SPOTIFY_CLIENT_SECRET = Deno.env.get("SPOTIFY_CLIENT_SECRET") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

const REDIRECT_URI = `${SUPABASE_URL}/functions/v1/spotify-now-playing/callback`;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing";

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

async function refreshAccessToken(refreshToken: string) {
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: SPOTIFY_CLIENT_ID,
    client_secret: SPOTIFY_CLIENT_SECRET,
  });

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Spotify refresh failed: ${res.status} ${text}`);
  }

  const tokens = await res.json();
  const expiresAt = new Date(Date.now() + tokens.expires_in * 1000).toISOString();

  // Single-row table — update whichever row exists
  await supabase
    .from("spotify_tokens")
    .update({
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token ?? refreshToken,
      expires_at: expiresAt,
      updated_at: new Date().toISOString(),
    })
    .neq("id", "00000000-0000-0000-0000-000000000000");

  return tokens.access_token;
}

async function getValidAccessToken(): Promise<string | null> {
  const { data, error } = await supabase
    .from("spotify_tokens")
    .select("*")
    .limit(1)
    .maybeSingle();

  if (error || !data) return null;

  const now = Date.now();
  const expiresAt = new Date(data.expires_at).getTime();

  if (now >= expiresAt - 60000) {
    try {
      return await refreshAccessToken(data.refresh_token);
    } catch {
      return null;
    }
  }

  return data.access_token;
}

async function getNowPlaying() {
  const accessToken = await getValidAccessToken();
  if (!accessToken) {
    return { connected: false };
  }

  const res = await fetch(NOW_PLAYING_URL, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (res.status === 204 || res.status === 202) {
    return { connected: true, is_playing: false };
  }

  if (res.status === 401) {
    // Token might be stale — force a refresh and retry once
    const { data } = await supabase
      .from("spotify_tokens")
      .select("refresh_token")
      .limit(1)
      .maybeSingle();
    if (data?.refresh_token) {
      try {
        const newToken = await refreshAccessToken(data.refresh_token);
        const retryRes = await fetch(NOW_PLAYING_URL, {
          headers: { Authorization: `Bearer ${newToken}` },
        });
        if (retryRes.ok) return parseNowPlaying(await retryRes.json());
      } catch {
        // fall through
      }
    }
    return { connected: false };
  }

  if (!res.ok) {
    return { connected: true, is_playing: false };
  }

  return parseNowPlaying(await res.json());
}

function parseNowPlaying(data: {
  is_playing?: boolean;
  item?: {
    name?: string;
    artists?: Array<{ name?: string }>;
    album?: { name?: string; images?: Array<{ url?: string }> };
    duration_ms?: number;
    external_urls?: { spotify?: string };
  };
  progress_ms?: number;
}) {
  const item = data.item;
  if (!item) return { connected: true, is_playing: false };

  return {
    connected: true,
    is_playing: data.is_playing ?? false,
    track: {
      name: item.name ?? "",
      artist: item.artists?.map((a) => a.name).join(", ") ?? "",
      album: item.album?.name ?? "",
      albumArt: item.album?.images?.[0]?.url ?? "",
      duration: item.duration_ms ?? 0,
      progress: data.progress_ms ?? 0,
      url: item.external_urls?.spotify ?? "",
    },
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  const url = new URL(req.url);
  const path = url.pathname.replace("/functions/v1/spotify-now-playing", "");

  try {
    // GET /callback — Spotify redirects here after the user authorizes
    if (path === "/callback") {
      const code = url.searchParams.get("code");
      const error = url.searchParams.get("error");

      if (error) {
        return new Response(
          `<html><body style="font-family:system-ui;padding:3rem;text-align:center"><h2>Spotify connection cancelled</h2><p>You can close this tab.</p></body></html>`,
          { status: 200, headers: { "Content-Type": "text/html" } },
        );
      }

      if (!code) {
        return json({ error: "Missing code parameter" }, 400);
      }

      const body = new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
        client_id: SPOTIFY_CLIENT_ID,
        client_secret: SPOTIFY_CLIENT_SECRET,
      });

      const tokenRes = await fetch(TOKEN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!tokenRes.ok) {
        const text = await tokenRes.text();
        return new Response(
          `<html><body style="font-family:system-ui;padding:3rem;text-align:center"><h2>Couldn't connect Spotify</h2><p>${text}</p></body></html>`,
          { status: 200, headers: { "Content-Type": "text/html" } },
        );
      }

      const tokens = await tokenRes.json();
      const expiresAt = new Date(
        Date.now() + tokens.expires_in * 1000,
      ).toISOString();

      // Upsert: delete existing rows then insert (single-row table)
      await supabase.from("spotify_tokens").delete().neq(
        "id",
        "00000000-0000-0000-0000-000000000000",
      );
      await supabase.from("spotify_tokens").insert({
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expires_at: expiresAt,
      });

      return new Response(
        `<html><body style="font-family:system-ui;padding:3rem;text-align:center;background:#1a1a1a;color:#eee"><h2 style="font-size:1.6rem">Spotify connected!</h2><p>Your now-playing widget is live. You can close this tab.</p></body></html>`,
        { status: 200, headers: { "Content-Type": "text/html" } },
      );
    }

    // GET /connect — returns the Spotify authorization URL for the owner to visit
    if (path === "/connect") {
      const scopes = "user-read-currently-playing user-read-playback-state";
      const authUrl =
        `https://accounts.spotify.com/authorize` +
        `?response_type=code` +
        `&client_id=${SPOTIFY_CLIENT_ID}` +
        `&scope=${encodeURIComponent(scopes)}` +
        `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

      return json({ url: authUrl });
    }

    // GET / or /now-playing — returns the current track (public, used by the widget)
    const nowPlaying = await getNowPlaying();
    return json(nowPlaying);
  } catch (err) {
    return json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      500,
    );
  }
});
