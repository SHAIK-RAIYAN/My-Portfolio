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
import { motion, AnimatePresence } from "framer-motion";

function App() {
  useLenisScroll();

  const [soundOn, setSoundOn] = useState(true);
  const audioRef = useRef(new Audio("Dandelions.mp3"));

  const toggleSound = () => {
    if (soundOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.loop = true;
    }
    setSoundOn(!soundOn);
  };

  return (
    <div className="bg-black font-dmsans min-h-screen scrollbar-none">
      <Navbar />
      <Home />
      <div
        className="h-[100vh] flex justify-center items-center"
        id="home"></div>
      <div className="flex flex-col justify-center gap-7 ">
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
        className="z-50 fixed bottom-30 right-5 text-white transition-all font-bold tracking-widest text-xs md:text-sm origin-bottom-right flex items-center justify-center group"
        style={{
          transform: "rotate(-90deg)",
          background: "transparent",
          border: "none",
        }}>
        <span className="opacity-50 group-hover:opacity-100 transition-opacity">
          SOUND
        </span>

        <div className="relative inline-block w-[4ch] h-5.5 text-center">
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
  );
}

export default App;
