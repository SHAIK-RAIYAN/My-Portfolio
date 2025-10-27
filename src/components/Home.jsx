import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import { Download } from "lucide-react";

function Home() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 460], [0, -200]);
  return (
    <motion.div
      style={{ y: titleY }}
      className="absolute flex flex-col-reverse md:flex-row items-center justify-center gap-10 text-white h-screen px-6 md:px-12 bg-black/0 md:backdrop-blur-md backdrop-blur-sm z-10 overflow-hidden">
      <div className="absolute inset-0 fade-ripple">
        <BackgroundRippleEffect />
      </div>

      <div className="h-screen relative md:top-1/3 flex flex-col text-4xl md:text-5xl lg:text-7xl font-semibold gap-3 w-full md:w-[70%] text-center md:text-left">
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "easeInOut", delay: 1, duration: 0.5 }}>
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-7xl font-sans relative z-20 font-bold tracking-tight">
              Hi there ⚡
            </h2>
          </motion.div>
        </div>

        <div className="relative overflow-hidden ">
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "easeInOut", delay: 1, duration: 0.5 }}
            className="flex justify-start gap-2 md:gap-4 py-5 whitespace-normal w-auto max-w-full">
            <Typewriter
              options={{
                strings: [
                  "I'm Shaik Raiyan.",
                  "I'm a Java Programmer.",
                  "I'm a Full-Stack Developer.",
                ],
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
            <p className="text-gray-400 text-sm md:text-lg font-normal font-jakarta w-full md:w-3/4 mt-3">
              I’m a curious full-stack developer who loves turning ideas into
              smooth, scalable, and fun digital experiences powered by the MERN
              stack, SQL, and Java—with a growing edge in DSA.
            </p>
            <span className="text-white text-lg md:text-xl flex justify-center items-center md:justify-start gap-4 pt-3">
              <a href="https://github.com/SHAIK-RAIYAN/" target="_blank">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/shaik-raiyan/" target="_blank">
                <FaLinkedin />
              </a>
              <a
                href="/resume/SHAIK RAIYAN.pdf"
                target="_blank"
                rel="noopener noreferrer">
                <HoverBorderGradient
                  containerClassName="rounded-full "
                  as="button"
                  className="text-white flex items-center space-x-2 text-sm ">
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </HoverBorderGradient>
              </a>
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 1.2, damping: 25 }}>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, type: "tween" }}
          className="relative w-44 h-44 md:w-80 md:h-80 mt-40 md:mt-0 overflow-hidden rounded-full shadow-[0_0_30px_rgba(225,225,225,0.89)]">
          <img
            src="/Raiyan.jpg"
            alt="Shaik Raiyan"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
