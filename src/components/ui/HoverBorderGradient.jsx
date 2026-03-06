import { useEffect, useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { useTheme } from "./../../Theme/ThemeProvider";
import { cn } from "./../../utils/cn";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,

  duration = 1,
  clockwise = true,
  ...props
}) {
  const { theme } = useTheme();

  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = (currentDirection) => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap =
    theme == "dark"
      ? {
          TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
          LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
          BOTTOM:
            "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
          RIGHT:
            "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        }
      : {
          TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 0%) 0%, rgba(0, 0, 0, 0) 100%)",
          LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 0%) 0%, rgba(0, 0, 0, 0) 100%)",
          BOTTOM:
            "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 0%) 0%, rgba(0, 0, 0, 0) 100%)",
          RIGHT:
            "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 0%) 0%, rgba(0, 0, 0, 0) 100%)",
        };

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);
  return (
    <button
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "center bg-text-primary/10 hover:bg-text-primary/20 relative h-min w-fit flex-col flex-nowrap content-center gap-10 overflow-visible rounded-full border-0 box-decoration-clone p-px transition duration-500",
        containerClassName,
      )}
      {...props}
    >
      <div
        className={cn(
          "bg-bg-primary text-text-primary z-10 w-auto rounded-[inherit] px-4 py-2",
          className,
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]",
        )}
        style={{
          filter: "blur(8px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-bg-primary absolute inset-0.5 z-1 flex-none rounded-[100px]" />
    </button>
  );
}
