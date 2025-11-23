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
      className="overflow-hidden whitespace-nowrap md:w-auto flex items-center gap-4 bg-black border border-neutral-700 rounded-xl p-3 hover:bg-neutral-950">
      <div className="relative w-14 h-14 flex-shrink-0">
        <img
          src={data.albumImageUrl}
          alt={data.album}
          className="w-full h-full object-cover rounded-md shadow-lg group-hover:opacity-80 transition-opacity"
        />
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm text-neutral-500 uppercase tracking-widest flex items-center gap-1">
            {data.isPlaying ? (
              <>
                <FaSpotify size={10} className="text-green-400" />
                <span className="w-1.5 h-1.5 bg-[#1db954] rounded-full animate-pulse" />
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
        <h3 className="text-gray-100 text-sm truncate max-w-[180px]">
          {data.title}
        </h3>
        <p className="text-neutral-500 font-light text-sm truncate max-w-[180px]">
          {data.artist}
        </p>
      </div>

      <a href={data.songUrl} target="_blank" rel="noopener noreferrer">
        <div className="text-neutral-300 mr-2 transition-colors border border-neutral-800 hover:bg-neutral-900 rounded-lg flex justify-center items-center p-2">
          {data.isPlaying ? <FaPause size={12} /> : <CiShare1 size={12} />}
        </div>
      </a>
    </motion.div>
  );
}
