import { Player } from "@lordicon/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import Typewriter from "typewriter-effect";
import docIcon from "./../assets/icons/document.json";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

function Home() {
  const playerRef = useRef(null);
  const handleHover = () => {
    playerRef.current?.playFromBeginning();
  };

  return (
    <motion.div className="flex flex-col justify-center gap-10 text-white h-screen px-6 z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 1.2, damping: 25 }}>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, type: "tween" }}
          className="relative w-44 h-44 md:h-70 md:w-70 mt-40 md:mt-0 overflow-hidden rounded-full border border-neutral-500 mx-auto md:mx-0">
          <img
            src="/Raiyan.jpg"
            alt="Shaik Raiyan"
            className="w-full h-full object-cover p-2 rounded-full"
          />
        </motion.div>
      </motion.div>

      <div className=" flex flex-col text-4xl font-semibold gap-3 w-full text-center md:text-left">
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "easeInOut", delay: 1, duration: 0.5 }}>
            <h2 className="text-[#e5e7eb] font-pixel text-2xl md:text-3xl lg:text-6xl py-4 relative z-20 font-bold tracking-tight">
              Hi, I'm Shaik Raiyan
            </h2>
          </motion.div>
        </div>

        <div className="relative overflow-hidden ">
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "easeInOut", delay: 1, duration: 0.5 }}
            className="flex justify-start gap-2 text-4xl text-[#868686] md:gap-4 py-5 whitespace-normal w-auto max-w-full">
            <Typewriter
              options={{
                strings: ["A Full-Stack Developer.", "A Java Programmer."],
                autoStart: true,
                loop: true,
                duration: 1,
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
            <p className="text-gray-400 text-sm md:text-lg font-normal font-jakarta w-full mt-3">
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
