import useLenisScroll from "./utils/lenis";
import "lenis/dist/lenis.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Github from "./components/Github";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

function App() {
  useLenisScroll();

  const [soundOn, setSoundOn] = useState(true);
  const audioRef = useRef(new Audio("/Dandelions.mp3"));
  audioRef.current.volume = 0.01;
  audioRef.current.loop = true;

  const toggleSound = () => {
    if (soundOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setSoundOn(!soundOn);
  };

  const [overlayActive, setOverlayActive] = useState(true);
  const startExperience = () => {
    setOverlayActive(false);
    audioRef.current.play().catch(() => {
      console.log("Autoplay blocked, user must interact again.");
    });
  };

  const scrollYProgress = useScroll().scrollYProgress;

  return (
    <div className="bg-black font-dmsans min-h-screen overflow-x-hidden no-scrollbar">
      <AnimatePresence>
        {overlayActive && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="flex flex-col items-center">
              <img
                src="/logo.gif"
                alt="Logo"
                className="w-20 h-20 m-8 object-contain filter grayscale"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startExperience}
                className="px-10 py-3 rounded-full border border-[#ffffff] text-[#ffffff] font-bold tracking-[0.5em] bg-transparent transition-all duration-300 hover:bg-[#d7d7d7] hover:text-black">
                START
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!overlayActive && (
        <div className="relative z-0">
          <motion.div
            style={{
              scaleX: scrollYProgress,
              background: "linear-gradient(90deg, #999c 90%, #fff 100%)",
            }}
            className="w-full h-[1px] fixed z-20 origin-top-left"></motion.div>
          <Navbar />
          <Home />
          <div
            className="h-[100vh] flex justify-center items-center"
            id="home"
          />

          <div className="flex flex-col justify-center gap-7">
            <About />
            <Github />
            <SkillSet />
          </div>
          <Projects />
          <Contact />
          <div className="flex justify-center items-center text-white/50 font-jakarta text-sm md:text-base py-4">
            <p>&copy; 2025 Shaik Raiyan. All rights reserved.</p>
          </div>

          <button
            onClick={toggleSound}
            className="z-40 fixed bottom-30 right-5 text-white transition-all font-bold tracking-widest text-xs md:text-sm origin-bottom-right flex items-center justify-center group gap-1"
            style={{
              transform: "rotate(-90deg)",
              background: "transparent",
              border: "none",
            }}>
            <span className="opacity-50 group-hover:opacity-100 transition-opacity ">
              SOUND
            </span>
            <div className="relative  w-[4ch] text-center flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={soundOn ? "ON" : "OFF"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute left-0 right-0">
                  {soundOn ? "ON" : "OFF"}
                </motion.span>
              </AnimatePresence>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
