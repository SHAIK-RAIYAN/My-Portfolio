// eslint-disable-next-line
import { motion, useScroll } from "framer-motion";
import "lenis/dist/lenis.css";
import { lazy, Suspense, useEffect } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ThemeToggleBtn from "./components/ui/ThemeToggleBtn";
import TimeMessage from "./components/ui/TimeMessage";
import VisitorTracker from "./components/ui/VisitorTracker";

// applying lazy loading
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Github = lazy(() => import("./components/Github"));
const Projects = lazy(() => import("./components/Projects"));
const SkillSet = lazy(() => import("./components/SkillSet"));
function App() {
  const scrollYProgress = useScroll().scrollYProgress;
  useEffect(() => {
    // PRELOAD HEAVY CHUNKS IN BACKGROUND
    const preloadComponents = async () => {
      const promises = [
        import("./components/About"),
        import("./components/Github"),
        import("./components/SkillSet"),
        import("./components/Projects"),
        import("./components/Contact"),
        import("./components/Footer"),
      ];

      await Promise.all(promises);
    };

    preloadComponents(); //download these files immediately after Home loads
  }, []);

  
  return (
    <div className="font-dmsans no-scrollbar border-border-secondary bg-bg-secondary mx-auto min-h-screen w-full max-w-237.5 overflow-x-hidden border-r border-l md:px-12">
      <div className="relative z-0">
        <motion.div
          style={{
            scaleX: scrollYProgress,
            background:
              "linear-gradient(90deg, var(--border-secondary) 90%, var(--text-primary) 100%)",
          }}
          className="fixed top-0 left-0 z-50 h-[1.5px] w-full origin-top-left"
        />

        <div className="absolute right-0 flex w-fit items-center gap-3">
          <ThemeToggleBtn />
          <TimeMessage />
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
