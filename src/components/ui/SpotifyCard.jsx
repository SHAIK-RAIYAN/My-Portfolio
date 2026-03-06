// eslint-disable-next-line
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { FaPause, FaSpotify } from "react-icons/fa";

export default function SpotifyCard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const res = await fetch("/api/spotify");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyData();
    const interval = setInterval(fetchSpotifyData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !data || !data.title) return null;

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="border-border-primary bg-bg-primary hover:bg-bg-secondary flex items-center gap-4 overflow-hidden rounded-xl border p-3 whitespace-nowrap md:w-auto"
    >
      <div className="relative h-14 w-14 shrink-0">
        <img
          src={data.albumImageUrl}
          alt={data.album}
          className="h-full w-full rounded-md object-cover shadow-lg transition-opacity group-hover:opacity-80"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-text-muted flex items-center gap-1 text-sm tracking-widest uppercase">
            {data.isPlaying ? (
              <>
                <FaSpotify size={10} className="text-green-400" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1db954]" />
                Currently Playing
              </>
            ) : (
              <>
                <FaSpotify size={10} className="text-green-400" />
                <span>Last Played</span>
              </>
            )}
          </span>
        </div>
        <h3 className="text-text-primary max-w-45 truncate text-sm">
          {data.title}
        </h3>
        <p className="text-text-muted max-w-45 truncate text-sm font-light">
          {data.artist}
        </p>
      </div>

      <a href={data.songUrl} target="_blank" rel="noopener noreferrer">
        <div className="center border-border-secondary text-text-secondary hover:bg-border-secondary mr-2 rounded-lg border p-2 transition-colors">
          {data.isPlaying ? <FaPause size={12} /> : <CiShare1 size={12} />}
        </div>
      </a>
    </motion.div>
  );
}
