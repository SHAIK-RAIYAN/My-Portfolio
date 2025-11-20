import { motion } from "framer-motion";
import GlassNavbar from "./ui/GlassNavbar";

function Navbar() {
  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;
    const navEl = document.getElementById("site-navbar");
    const navHeight = navEl ? navEl.getBoundingClientRect().height : 0;
    const top = Math.max(
      0,
      target.getBoundingClientRect().top + window.scrollY - navHeight - 8
    );
    if (window.lenis && typeof window.lenis.scrollTo === "function") {
      window.lenis.scrollTo(top);
    } else {
      window.scrollTo({ top, behavior: "smooth" });
    }
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 1 }}
        className="fixed top-0 w-full flex justify-start z-40 mt-8">
        <img
          src="/founder2.jpg"
          alt="Home"
          href="#home"
          onClick={handleNavClick}
          className="h-13 w-13 object-cover p-1 rounded-2xl border border-neutral-500 hover:scale-98 active:scale-95 cursor-pointer ml-5"
        />
        <GlassNavbar
          id="site-navbar"
          width={"fit"}
          height={"fit"}
          borderRadius={24}
          className="text-white font-light text-lg gap-8 p-3 mx-3">
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
            className="hidden md:inline-block relative px-2 group font-mono">
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
