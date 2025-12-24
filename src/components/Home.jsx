// eslint-disable-next-line
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import Typewriter from "typewriter-effect";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import SpotifyCard from "./ui/SpotifyCard";

function Home() {
  return (
    <motion.div
      className="mt-10 flex h-screen flex-col justify-center gap-10 overflow-hidden text-white"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, x: "-80%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 1, damping: 25 }}
      >
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, type: "tween" }}
          className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border border-neutral-500 md:mx-2 md:mt-0 md:h-60 md:w-60"
        >
          <img
            src="/Raiyan.jpg"
            alt="Shaik Raiyan"
            className="h-full w-full rounded-full object-cover p-2"
          />
        </motion.div>
      </motion.div>

      <div className="flex w-full flex-col gap-3 px-5 text-4xl font-semibold md:text-left">
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "easeInOut", delay: 1.3, duration: 0.5 }}
          >
            <h2 className="relative z-20 py-4 text-4xl font-normal tracking-tight text-[#e5e7eb] lg:text-6xl">
              Hi, I'm{" "}
              <div className="relative inline-block">
                <span className="absolute inset-0 text-4xl font-bold text-amber-500 opacity-70 blur-sm lg:text-7xl">
                  Shaik Raiyan
                </span>

                <span className="bg-[url(/art.jpg)] bg-cover bg-clip-text text-4xl font-bold text-transparent lg:text-7xl">
                  Shaik Raiyan
                </span>
              </div>
            </h2>
            <p className="font-pixel border-t border-b border-dashed text-xl font-extralight text-neutral-600 italic">
              I write something for machines and they understand!
            </p>
          </motion.div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "easeInOut", delay: 1.5, duration: 0.5 }}
            className="font-pixel flex w-auto max-w-full justify-start gap-2 text-4xl whitespace-normal text-[#868686] md:gap-4 md:text-5xl"
          >
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
            transition={{ type: "easeInOut", duration: 0.5, delay: 1.7 }}
            className="py-5"
          >
            <p className="w-full text-sm font-normal text-gray-400 md:text-lg">
              I’m a curious full-stack developer who loves turning ideas into
              smooth, scalable, and fun digital experiences powered by the MERN
              stack, SQL, and Java—with a growing edge in DSA.
            </p>
            <span className="flex flex-wrap items-center justify-start gap-4 pt-3 text-lg text-white md:text-xl">
              <a
                href="https://github.com/SHAIK-RAIYAN/"
                target="_blank"
                data-tooltip-id="main-tooltip"
                data-tooltip-content="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/shaik-raiyan/"
                target="_blank"
                data-tooltip-id="main-tooltip"
                data-tooltip-content="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="/resume/SHAIK RAIYAN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group active:scale-97"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full "
                  as="button"
                  className="flex items-center space-x-1 text-sm text-white"
                >
                  <IoDocumentTextOutline className="text-neutral-300 transition-transform duration-1500 group-hover:scale-110 group-hover:rotate-y-360 group-hover:-rotate-z-360 group-hover:text-white" />
                  <span className="font-normal text-neutral-300">Resume</span>
                </HoverBorderGradient>
              </a>
              <div className="flex-1">
                <SpotifyCard />
              </div>
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
