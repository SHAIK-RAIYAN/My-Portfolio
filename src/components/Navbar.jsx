import React from "react";
import GlassNavbar from "./ui/GlassNavbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { motion } from "framer-motion";

function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{type:"spring" }}
        className="fixed top-0 w-full flex justify-center ">
        <GlassNavbar
          width={"fit"}
          height={"fit"}
          borderRadius={24}
          className="text-white font-light text-lg gap-8 mt-8 p-3 ">
          <a href="#home" className="relative px-2 group font-normal font-mono">
            Home
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>

          <a href="#about" className="relative px-2 group font-mono">
            About
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>

          <a href="#skills" className="relative px-2 group font-mono">
            Skills
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>

          <a href="#projects" className="relative px-2 group font-mono">
            Projects
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>

          <a href="#contact" className="relative px-2 group font-mono">
            Contact
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
        </GlassNavbar>
      </motion.div>
    </div>
  );
}

export default Navbar;
