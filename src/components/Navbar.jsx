// eslint-disable-next-line
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
        className="fixed top-0 z-40 mt-8 flex justify-start"
      >
        <a href="#home" onClick={handleNavClick} className="ml-3 md:ml-5">
          <img
            src="/founder2.webp"
            alt="Home"
            className="h-13 w-13 cursor-pointer rounded-2xl border border-neutral-500 object-cover p-1 hover:scale-98 active:scale-95"
          />
        </a>

        <GlassNavbar
          id="site-navbar"
          width={"fit"}
          height={"fit"}
          borderRadius={24}
          className="mx-3 gap-8 text-sm font-light text-white md:p-3 md:text-lg"
        >
          <a
            href="#about"
            onClick={handleNavClick}
            className="group relative hidden px-2 font-mono md:inline-block"
          >
            About
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
          </a>

          <a
            href="#skills"
            onClick={handleNavClick}
            className="group relative px-2 font-mono"
          >
            Skills
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
          </a>

          <a
            href="#projects"
            onClick={handleNavClick}
            className="group relative px-2 font-mono md:inline-block"
          >
            Projects
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
          </a>

          <a
            href="#contact"
            onClick={handleNavClick}
            className="group relative px-2 font-mono"
          >
            Contact
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
          </a>
        </GlassNavbar>
      </motion.div>
    </div>
  );
}
export default Navbar;
