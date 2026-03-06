import { motion } from "framer-motion";
import { useTheme } from "../../Theme/ThemeProvider";
import { MoonIcon } from "../icons/Moon";
import { SunIcon } from "../icons/Sun";



function ThemeToggleBtn() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative z-50 flex items-center justify-center">
      <motion.button
        onClick={toggleTheme}
        initial={{
          opacity: 0,
          x: 2,
          y: 2,
          boxShadow: "0px 0px 0px 0px var(--border-secondary)",
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          boxShadow: "2px 2px 0px 0px var(--border-secondary)",
        }}
        transition={{
          opacity: { delay: 2, duration: 0.2, ease: "linear" },
          x: { delay: 2.5, type: "spring", stiffness: 400, damping: 8 },
          y: { delay: 2.5, type: "spring", stiffness: 400, damping: 8 },
          boxShadow: {
            delay: 2.5,
            type: "spring",
            stiffness: 400,
            damping: 8,
          },
        }}
        className="border-border-secondary bg-bg-primary text-text-primary hover:bg-bg-secondary rounded-lg border-2 p-2 shadow-[2px_2px_0px_0px_var(--border-secondary)] transition-colors duration-150 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
      >
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </motion.button>
    </div>
  );
}

export default ThemeToggleBtn;
