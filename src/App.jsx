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
import { useState } from "react";

function App() {
  useLenisScroll();

  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="bg-black font-dmsans min-h-screen scrollbar-none">
      {!showIntro && (
        <>
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
        </>
      )}

      {showIntro && (
        <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50 overflow-hidden">
          <div className="text-white text-6xl mb-8">🐱</div>
          <button
            onClick={() => setShowIntro(false)}
            className="bg-transparent border border-white/50 text-white px-6 py-2 rounded-full hover:bg-white/10 transition">
            START
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
