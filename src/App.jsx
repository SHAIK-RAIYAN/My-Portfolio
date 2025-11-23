import { Player } from "@lordicon/react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import "lenis/dist/lenis.css";
import { useRef, useState } from "react";
import "./App.css";
import location_icon from "./assets/icons/wireless-loop.json";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Github from "./components/Github";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillSet from "./components/SkillSet";
import TimePolice from "./components/ui/TimePolice";

function App() {
  const scrollYProgress = useScroll().scrollYProgress;
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const playerRef = useRef(null);
  const handleToggle = () => {
    playerRef.current?.playFromBeginning();
    setIsLocationOpen(!isLocationOpen);
  };

  return (
    <div className="max-w-[950px] w-full mx-auto md:px-12 bg-[#0a0a0a] font-dmsans min-h-screen overflow-x-hidden no-scrollbar border-l border-r border-neutral-800">
      <div className="relative z-0">
        {/* scroll progress bar */}
        <motion.div
          style={{
            scaleX: scrollYProgress,
            background: "linear-gradient(90deg, #999c 90%, #fff 100%)",
          }}
          className="fixed top-0 left-0 w-full h-[1.5px] z-50 origin-top-left"
        />

        {/* top right location icon */}
        <div className="hidden md:flex flex-col items-end fixed top-5 right-5 z-[60]">
          <div
            onClick={handleToggle}
            className={`text-white border border-neutral-800 p-1 rounded-full 
              cursor-pointer transition-transform duration-100 ease-in-out active:scale-90 
              ${
                isLocationOpen
                  ? "bg-neutral-800 border-neutral-600"
                  : "bg-black/20 backdrop-blur-sm hover:bg-neutral-900"
              }`}>
            <div className="pointer-events-none">
              <Player ref={playerRef} icon={location_icon} size={30} />
            </div>
          </div>

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
                exit={{ opacity: 0, y: -10, scale: 0.95, filter: "blur(4px)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-14 right-0 w-[350px]">
                <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden p-1">
                  <TimePolice />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Navbar />
        <Home />

        <div className="flex flex-col justify-center gap-7">
          <About />
          <div className="hidden md:block">
            <Github />
          </div>
          <SkillSet />
        </div>

        <Projects />
        <Contact />

        <Footer />
      </div>
    </div>
  );
}

export default App;
