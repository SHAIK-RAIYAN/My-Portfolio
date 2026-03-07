import { motion } from "framer-motion";
import { cn } from "./../../utils/cn";

const GithubIcon = ({
  isHovered,
  className,
  size = 20,
  duration = 1,
  ...props
}) => {
  const handVariants = {
    normal: { rotate: 0, originX: 0.9, originY: 0.5 },
    animate: {
      rotate: [0, 20, -15, 0],
      originX: 0.9,
      originY: 0.5,
      transition: { duration: 1 * duration, repeat: Infinity },
    },
  };

  return (
    <div
      className={cn("center", className)}
      {...props}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial="normal"
        animate={isHovered ? "animate" : "normal"}
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5 c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5 .28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5 -2.64-.5-5.36-.5-8 0 C6 2 5 2 5 2 c-.3 1.15-.3 2.35 0 3.5 A5.403 5.403 0 0 0 4 9 c0 3.5 3 5.5 6 5.5 -.39.49-.68 1.05-.85 1.65 -.17.6-.22 1.23-.15 1.85v4" />
        <motion.path d="M9 18c-4.51 2-5-2-7-2" variants={handVariants} />
      </motion.svg>
    </div>
  );
};

export default GithubIcon;
