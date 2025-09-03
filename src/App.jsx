import useLenisScroll from "./utils/lenis"
import "lenis/dist/lenis.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Hero";
import About from "./components/About";
import SkillSet from "./components/Skillset";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  useLenisScroll();
  return (
    <div className="bg-black font-dmsans min-h-screen scrollbar-none">
      <Navbar />
      <Home />
      <About />
      <SkillSet />
      <Projects />
      <Contact />

      <div className="flex justify-center items-center text-white/50 font-jakarta text-sm md:text-base py-4">
        <p>&copy; 2025 Shaik Raiyan. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
