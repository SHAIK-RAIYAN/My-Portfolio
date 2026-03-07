import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../../Theme/ThemeProvider";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

function ThemeToggleBtn() {
  const { theme, toggleTheme } = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = (event) => {
    // Get button click coordinates
    const x = event.clientX;
    const y = event.clientY;

    // Calculate the distance to the furthest screen corner
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    // Fallback for older browsers
    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }

    // Trigger the native hardware-accelerated transition
    const transition = document.startViewTransition(() => {
      toggleTheme();
    });

    // Animate the clip-path once the browser is ready
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 1000,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  return (
    <div className="center relative z-40 mx-5 md:mx-0">
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleToggle}
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
        className="border-border-secondary bg-bg-primary text-text-primary hover:bg-bg-secondary cursor-pointer rounded-lg border-2 p-2 shadow-[2px_2px_0px_0px_var(--border-secondary)] transition-colors duration-150 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
      >
        {theme === "light" ? (
          <SunIcon isHovered={isHovered} />
        ) : (
          <MoonIcon isHovered={isHovered} />
        )}
      </motion.button>
    </div>
  );
}

export default ThemeToggleBtn;
