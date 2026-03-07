// eslint-disable-next-line
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import Typewriter from "typewriter-effect";
import FileIcon from "./icons/File";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import SpotifyCard from "./ui/SpotifyCard";
import { useState } from "react";

function Home() {
  const [isFileHovered, setIsFileHovered] = useState(false);
  return (
    <motion.div
      className="text-text-primary mt-10 flex h-screen flex-col justify-center gap-10 overflow-hidden"
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
          className="border-border-primary relative mx-auto h-44 w-44 overflow-hidden rounded-full border md:mx-2 md:mt-0 md:h-60 md:w-60"
        >
          <img
            src="/Raiyan.webp"
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
            <h2 className="text-text-secondary relative z-20 py-4 text-4xl font-normal tracking-tight lg:text-6xl">
              Hi, I'm{" "}
              <div className="relative inline-block select-none">
                <span className="dark:text-accent-amber absolute inset-0 text-4xl font-bold underline decoration-wavy decoration-6 opacity-70 blur-none lg:text-7xl dark:decoration-0 dark:blur-sm">
                  Shaik Raiyan
                </span>

                <span className="bg-[url(/art3.webp)] bg-cover bg-clip-text text-4xl font-bold text-transparent lg:text-7xl dark:bg-[url(/art.webp)]">
                  Shaik Raiyan
                </span>
              </div>
            </h2>
            <div className="border-border-primary relative flex h-8 w-full before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--border-primary)_0,var(--border-primary)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:opacity-[0.56]">
              <p className="font-pixel text-text-muted w-full text-xl font-extralight italic">
                I write something for machines and they understand!
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "easeInOut", delay: 1.5, duration: 0.5 }}
            className="font-pixel text-text-muted flex w-auto max-w-full justify-start gap-2 text-4xl whitespace-normal md:gap-4 md:text-5xl"
          >
            <Typewriter
              options={{
                strings: [
                  "A Full-Stack Web Developer.",
                  "A Java Programmer.",
                  "Continuous Curiosity.",
                  "Constant Evolution.",
                ],
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
            <p className="text-text-tertiary w-full text-sm font-normal md:text-lg">
              I’m a curious full-stack developer who loves turning ideas into
              smooth, scalable, and fun digital experiences powered by the MERN
              stack, SQL, and Java—with a growing edge in DSA.
            </p>
            <span className="text-text-primary flex flex-wrap items-center justify-start gap-4 pt-3 text-lg md:text-xl">
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
                onMouseEnter={() => setIsFileHovered(true)}
                onMouseLeave={() => setIsFileHovered(false)}
              >
                <HoverBorderGradient
                  containerClassName="rounded-full "
                  as="button"
                  className="text-text-primary flex items-center space-x-1 text-sm"
                >
                  <FileIcon isHovered={isFileHovered} />
                  <span className="text-text-secondary font-normal">
                    Resume
                  </span>
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
          backgroundColor: "var(--tooltip-bg)",
          color: "var(--tooltip-color)",
          borderRadius: "6px",
          fontSize: "10px",
        }}
      />
    </motion.div>
  );
}

export default Home;
