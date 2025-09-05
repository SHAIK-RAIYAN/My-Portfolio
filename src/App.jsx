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

function App() {
  useLenisScroll();
  return (
    <div className="bg-black font-dmsans min-h-screen scrollbar-none">
      <Navbar />
      <Home />
      <div className="h-[100vh] flex justify-center items-center" id="home">
        {/* <h1 className="font-jakarta font-black text-white/60 md:text-9xl text-6xl tracking-widest ">
          PORTOFOLIO
        </h1> */}
      </div>
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
    </div>
  );
}

export default App;
