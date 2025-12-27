// eslint-disable-next-line
import { AnimatePresence, motion, useScroll } from "framer-motion";
import "lenis/dist/lenis.css";
import { lazy, Suspense, useEffect, useState } from "react";
import { FaTowerBroadcast } from "react-icons/fa6";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import VisitorTracker from "./components/ui/VisitorTracker";
import { fetchLocationData } from "./services/locationService";

// applying lazy loading
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Github = lazy(() => import("./components/Github"));
const Projects = lazy(() => import("./components/Projects"));
const SkillSet = lazy(() => import("./components/SkillSet"));
const TimePolice = lazy(() => import("./components/ui/TimePolice"));

function App() {
  const scrollYProgress = useScroll().scrollYProgress;
  useEffect(() => {
    fetchLocationData();

    // PRELOAD HEAVY CHUNKS IN BACKGROUND
    const preloadComponents = async () => {
      const promises = [
        import("./components/About"),
        import("./components/Github"),
        import("./components/SkillSet"),
        import("./components/Projects"),
        import("./components/Contact"),
        import("./components/Footer"),
        import("./components/ui/TimePolice"),
      ];

      await Promise.all(promises);
    };

    preloadComponents(); //download these files immediately after Home loads
  }, []);

  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const handleToggle = () => {
    if (!isLocationOpen) {
      fetchLocationData();
    }
    setIsLocationOpen(!isLocationOpen);
  };

  return (
    <div className="font-dmsans no-scrollbar mx-auto min-h-screen w-full max-w-[950px] overflow-x-hidden border-r border-l border-neutral-800 bg-[#0a0a0a] md:px-12">
      <div className="relative z-0">
        {/* scroll progress bar */}
        <motion.div
          style={{
            scaleX: scrollYProgress,
            background: "linear-gradient(90deg, #999c 90%, #fff 100%)",
          }}
          className="fixed top-0 left-0 z-50 h-[1.5px] w-full origin-top-left"
        />

        {/* top right location icon */}
        <div className="fixed top-5 right-5 z-50 hidden flex-col items-end md:flex">
          <div
            onClick={handleToggle}
            className={`group cursor-pointer rounded-full border border-neutral-800 p-3 text-white transition-transform duration-100 ease-in-out active:scale-90 ${
              isLocationOpen
                ? "border-neutral-600 bg-neutral-800"
                : "bg-black/20 backdrop-blur-sm hover:bg-neutral-950"
            }`}
          >
            <div className="pointer-events-none">
              <FaTowerBroadcast className="scale-130 text-neutral-300 transition-transform duration-500 group-hover:rotate-y-360" />
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
                className="absolute top-14 right-0 w-[350px]"
              >
                <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#0a0a0a]/90 p-1 shadow-2xl backdrop-blur-xl">
                  <Suspense
                    fallback={
                      <div className="h-40 w-full animate-pulse bg-neutral-900" />
                    }
                  >
                    <TimePolice />
                  </Suspense>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Navbar />
        <Home />

        <Suspense fallback={<div className="min-h-50" />}>
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
        </Suspense>
      </div>

      <VisitorTracker />
    </div>
  );
}

export default App;
