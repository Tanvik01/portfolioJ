import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music2, Play, Pause } from "lucide-react";

interface NowPlayingData {
  connected: boolean;
  is_playing?: boolean;
  track?: {
    name: string;
    artist: string;
    album: string;
    albumArt: string;
    duration: number;
    progress: number;
    url: string;
  };
}

function formatTime(ms: number) {
  const totalSec = Math.floor(ms / 1000);
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

export function NowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function fetchNowPlaying() {
      try {
        const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/spotify-now-playing`;
        const res = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
        });
        if (!active) return;
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch {
        // silent fail — widget just stays hidden
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 15000);

    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  // Don't render anything until we know the connection state
  if (loading || !data || !data.connected) return null;

  const isPlaying = data.is_playing && data.track;
  const track = data.track;

  const progressPct = track && track.duration > 0
    ? Math.min(100, (track.progress / track.duration) * 100)
    : 0;

  return (
    <section className="relative px-4 py-12">
      <div className="mx-auto max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={isPlaying ? "playing" : "idle"}
            initial={{ opacity: 0, y: 20, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            data-click-sound="card"
            className="relative bg-paper text-paper-foreground sketch-border paper-lined shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)] p-5 sm:p-6"
          >
            {/* Tape */}
            <div className="absolute -top-3 left-1/2 h-5 w-20 -translate-x-1/2 -rotate-2 tape rounded-sm" />

            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-2.5 w-2.5 items-center justify-center">
                {isPlaying ? (
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="block h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.22_145)]"
                  />
                ) : (
                  <span className="block h-2.5 w-2.5 rounded-full bg-ink/30" />
                )}
              </span>
              <span className="font-hand text-lg ink">
                {isPlaying ? "now playing" : "on pause"}
              </span>
              <span className="ml-auto font-mono text-[9px] uppercase tracking-widest text-paper-foreground/40">
                spotify
              </span>
            </div>

            {track ? (
              <a
                href={track.url}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 items-center hover:opacity-80 transition-opacity"
              >
                {/* Album art */}
                {track.albumArt ? (
                  <img
                    src={track.albumArt}
                    alt={track.album}
                    className="h-16 w-16 rounded-md border border-ink/20 object-cover shrink-0"
                  />
                ) : (
                  <div className="h-16 w-16 rounded-md border border-ink/20 bg-muted shrink-0 flex items-center justify-center">
                    <Music2 className="h-6 w-6 ink/40" />
                  </div>
                )}

                {/* Track info */}
                <div className="flex-1 min-w-0">
                  <p className="font-display text-base sm:text-lg ink truncate leading-tight">
                    {track.name}
                  </p>
                  <p className="font-note text-sm text-paper-foreground/70 truncate mt-0.5">
                    {track.artist}
                  </p>

                  {/* Progress bar */}
                  {isPlaying && (
                    <div className="mt-2">
                      <div className="relative h-1.5 rounded-full bg-ink/10 overflow-hidden">
                        <motion.div
                          className="absolute left-0 top-0 h-full rounded-full bg-ink/60"
                          style={{ width: `${progressPct}%` }}
                          initial={{ width: `${progressPct}%` }}
                          animate={{
                            width: `${Math.min(100, ((track.progress + 15000) / track.duration) * 100)}%`,
                          }}
                          transition={{ duration: 15, ease: "linear" }}
                        />
                      </div>
                      <div className="flex justify-between mt-1 font-mono text-[9px] text-paper-foreground/50">
                        <span>{formatTime(track.progress)}</span>
                        <span>{formatTime(track.duration)}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Play/Pause indicator */}
                <div className="shrink-0">
                  {isPlaying ? (
                    <Pause className="h-5 w-5 ink/60" />
                  ) : (
                    <Play className="h-5 w-5 ink/60" />
                  )}
                </div>
              </a>
            ) : (
              <div className="flex items-center gap-3 py-2">
                <Music2 className="h-5 w-5 ink/40" />
                <p className="font-note text-sm text-paper-foreground/60">
                  Nothing playing right now
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
