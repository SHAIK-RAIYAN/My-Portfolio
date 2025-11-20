import React, { useEffect, useState } from "react";
import { FaSpotify, FaPlay, FaPause } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SpotifyCard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        // We point to the api folder we created
        const res = await fetch("/api/spotify");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyData();
    // Update every 30 seconds
    const interval = setInterval(fetchSpotifyData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return null;
  if (!data || !data.title) return null;

  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full md:w-auto flex items-center gap-4 bg-[#101010] border border-white/10 rounded-xl p-3 hover:bg-[#151515] transition-all duration-300 group">
      <div className="relative w-14 h-14 flex-shrink-0">
        <img
          src={data.albumImageUrl}
          alt={data.album}
          className="w-full h-full object-cover rounded-md shadow-lg group-hover:opacity-80 transition-opacity"
        />
        <div className="absolute -bottom-1 -right-1 bg-[#1db954] rounded-full p-1 text-black border border-[#101010] z-10">
          <FaSpotify size={10} />
        </div>
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold text-[#1db954] uppercase tracking-widest flex items-center gap-1">
            {data.isPlaying ? (
              <>
                <span className="w-1.5 h-1.5 bg-[#1db954] rounded-full animate-pulse" />
                Now Playing
              </>
            ) : (
              "Last Played"
            )}
          </span>
        </div>
        <h3 className="text-gray-100 font-semibold text-sm truncate max-w-[180px]">
          {data.title}
        </h3>
        <p className="text-neutral-400 text-xs truncate max-w-[180px]">
          {data.artist}
        </p>
      </div>

      <div className="text-white/50 mr-2 group-hover:text-[#1db954] transition-colors">
        {data.isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
      </div>
    </motion.a>
  );
}
