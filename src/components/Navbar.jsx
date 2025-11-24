import { motion } from "framer-motion";
import { useLenis } from "lenis/react"; // 1. Import the hook
import GlassNavbar from "./ui/GlassNavbar";

function Navbar() {
  const lenis = useLenis();

  const handleNavClick = (e) => {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute("href");
    if (!targetId) return;

    lenis?.scrollTo(targetId, {
      offset: -100, //top spacing
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 1 }}
        className="fixed top-0 flex justify-start z-40 mt-8">
        <a href="#home" onClick={handleNavClick} className="ml-3 md:ml-5">
          <img
            src="/founder2.jpg"
            alt="Home"
            className="h-13 w-13 object-cover p-1 rounded-2xl border border-neutral-500 hover:scale-98 active:scale-95 cursor-pointer"
          />
        </a>

        <GlassNavbar
          id="site-navbar"
          width={"fit"}
          height={"fit"}
          borderRadius={24}
          className="text-white font-light text-sm md:text-lg gap-8 md:p-3 mx-3">
          <a
            href="#about"
            onClick={handleNavClick}
            className="hidden md:inline-block relative px-2 group font-mono">
            About
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>

          <a
            href="#skills"
            onClick={handleNavClick}
            className="relative px-2 group font-mono">
            Skills
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>

          <a
            href="#projects"
            onClick={handleNavClick}
            className=" md:inline-block relative px-2 group font-mono">
            Projects
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>

          <a
            href="#contact"
            onClick={handleNavClick}
            className="relative px-2 group font-mono">
            Contact
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
        </GlassNavbar>
      </motion.div>
    </div>
  );
}
export default Navbar;
