import { motion, useScroll } from "framer-motion";
import "lenis/dist/lenis.css";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Github from "./components/Github";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillSet from "./components/SkillSet";
import useLenisScroll from "./utils/lenis";

function App() {
  useLenisScroll();
  const scrollYProgress = useScroll().scrollYProgress;

  return (
    <div className="max-w-[900px] w-full mx-auto md:px-12 bg-[#0a0a0a] font-dmsans min-h-screen overflow-x-hidden no-scrollbar border-l border-r border-neutral-800">
      <div className="relative z-0">
        <motion.div
          style={{
            scaleX: scrollYProgress,
            background: "linear-gradient(90deg, #999c 90%, #fff 100%)",
          }}
          className="fixed top-0 left-0 w-full h-[1.5px] z-50 origin-top-left"
        />

        <Navbar />
        <Home />


        <div className="flex flex-col justify-center gap-7">
          <About />
          <Github />
          <SkillSet />
        </div>

        <Projects />
        <Contact />

        <div className="flex flex-col justify-center items-center text-white/50 font-jakarta  mt-10 mb-5">
          <p className="text-sm">Design & Developed by Shaik Raiyan</p>
          <p className="text-sm">&copy; 2025. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
