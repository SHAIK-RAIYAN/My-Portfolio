import { Player } from "@lordicon/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import Typewriter from "typewriter-effect";
import docIcon from "./../assets/icons/document.json";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import SpotifyCard from "./ui/SpotifyCard";

function Home() {
  const playerRef = useRef(null);
  const handleHover = () => {
    playerRef.current?.playFromBeginning();
  };

  return (
    <motion.div
      className="flex flex-col justify-center gap-10 text-white h-screen md:mt-10 overflow-hidden"
      id="home">
      <motion.div
        initial={{ opacity: 0, x: "-80%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 1.2, damping: 25 }}>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, type: "tween" }}
          className="relative w-44 h-44 md:h-60 md:w-60 md:mt-0 overflow-hidden rounded-full border border-neutral-500 mx-auto md:mx-2">
          <img
            src="/Raiyan.jpg"
            alt="Shaik Raiyan"
            className="w-full h-full object-cover p-2 rounded-full"
          />
        </motion.div>
      </motion.div>

      <div className=" flex flex-col text-4xl font-semibold gap-3 w-full px-5 md:text-left">
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "easeInOut", delay: 1, duration: 0.5 }}>
            <h2 className="text-[#e5e7eb] text-4xl lg:text-6xl py-4 relative font-normal z-20 tracking-tight">
              Hi, I'm{" "}
              <div className="relative inline-block">
                <span className="absolute inset-0 font-bold text-4xl lg:text-7xl text-amber-500 blur-sm opacity-70">
                  Shaik Raiyan
                </span>

                <span className="text-transparent font-bold text-4xl lg:text-7xl bg-[url(/art.jpg)] bg-cover bg-clip-text">
                  Shaik Raiyan
                </span>
              </div>
            </h2>
            <p className="italic font-extralight text-xl text-neutral-600 font-pixel border-t border-b border-dashed">
              I write something for machines and they understand!
            </p>
          </motion.div>
        </div>

        <div className="relative overflow-hidden ">
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "easeInOut", delay: 1, duration: 0.5 }}
            className="font-pixel flex justify-start gap-2 text-4xl md:text-5xl text-[#868686] md:gap-4 whitespace-normal w-auto max-w-full">
            <Typewriter
              options={{
                strings: ["A Full-Stack Developer.", "A Java Programmer."],
                autoStart: true,
                loop: true,
                duration: 0.7,
                delay: 80,
              }}
            />
          </motion.div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "easeInOut", duration: 0.5, delay: 1.5 }}
            className="py-5">
            <p className="text-gray-400 text-sm md:text-lg font-normal w-full">
              I’m a curious full-stack developer who loves turning ideas into
              smooth, scalable, and fun digital experiences powered by the MERN
              stack, SQL, and Java—with a growing edge in DSA.
            </p>
            <span className="text-white text-lg md:text-xl flex justify-center items-center md:justify-start gap-4 pt-3">
              <a
                href="https://github.com/SHAIK-RAIYAN/"
                target="_blank"
                data-tooltip-id="main-tooltip"
                data-tooltip-content="GitHub">
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/shaik-raiyan/"
                target="_blank"
                data-tooltip-id="main-tooltip"
                data-tooltip-content="LinkedIn">
                <FaLinkedin />
              </a>

              <a
                href="/resume/SHAIK RAIYAN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleHover}
                className="active:scale-97">
                <HoverBorderGradient
                  containerClassName="rounded-full "
                  as="button"
                  className="text-white flex items-center space-x-2 text-sm ">
                  <Player ref={playerRef} icon={docIcon} size={24} />
                  <span className="font-normal text-neutral-300">Resume</span>
                </HoverBorderGradient>
              </a>
            </span>
          </motion.div>
        </div>
        <SpotifyCard />
      </div>

      <Tooltip
        id="main-tooltip"
        place="top"
        variant="light"
        style={{
          backgroundColor: "#e5e5e5",
          color: "#000",
          borderRadius: "6px",
          fontSize: "10px",
        }}
      />
    </motion.div>
  );
}

export default Home;
