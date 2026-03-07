import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import { fetchLocationData } from "../../services/locationService";
import GaugeIcon from "./../icons/Gauge";
import TimePolice from "./TimePolice";

export default function TimeMessage() {
  useEffect(() => {
    fetchLocationData();
  }, []);

  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const handleToggle = () => {
    if (!isLocationOpen) {
      fetchLocationData();
    }
    setIsLocationOpen(!isLocationOpen);
  };

  const [isGaugeHovered, setIsGaugeHovered] = useState(false);
  return (
    <div className="relative z-50 hidden flex-col items-end md:flex">
      <motion.button
        onClick={handleToggle}
        onMouseEnter={() => setIsGaugeHovered(true)}
        onMouseLeave={() => setIsGaugeHovered(false)}
        aria-expanded={isLocationOpen}
        initial={{
          opacity: 0,
          x: 2,
          y: 2,
          boxShadow: "0px 0px 0px 0px var(--border-secondary)",
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          boxShadow: "2px 2px 0px 0px var(--border-secondary)",
        }}
        transition={{
          opacity: { delay: 2, duration: 0.2, ease: "linear" },
          x: { delay: 2.5, type: "spring", stiffness: 400, damping: 8 },
          y: { delay: 2.5, type: "spring", stiffness: 400, damping: 8 },
          boxShadow: {
            delay: 2.5,
            type: "spring",
            stiffness: 400,
            damping: 8,
          },
        }}
        className={`group border-border-secondary text-text-primary cursor-pointer rounded-lg border-2 p-2 transition-colors duration-150 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
          isLocationOpen
            ? "bg-bg-secondary"
            : "hover:bg-bg-secondary backdrop-blur-sm"
        }`}
      >
        <div className="center">
          <GaugeIcon
            isHovered={isGaugeHovered}
            className="text-text-secondary"
          />
        </div>
      </motion.button>

      <AnimatePresence>
        {isLocationOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.95,
              filter: "blur(4px)",
            }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.95,
              filter: "blur(4px)",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-14 right-0 w-87.5"
          >
            <div className="border-border-primary bg-bg-primary/90 overflow-hidden rounded-2xl border p-1 shadow-2xl backdrop-blur-xl">
              <Suspense
                fallback={
                  <div className="bg-bg-secondary h-40 w-full animate-pulse" />
                }
              >
                <TimePolice />
              </Suspense>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
