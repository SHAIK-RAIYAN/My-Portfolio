import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const SVG_VARIANTS = {
  normal: { rotate: 0 },
  animate: {
    rotate: [0, -10, 10, -5, 5, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.2,
    },
  },
};

const MoonIcon = ({ isHovered, className, size = 20, ...props }) => {
  return (
    <div className={cn(className)} {...props}>
      <motion.svg
        animate={isHovered ? "animate" : "normal"}
        initial="normal"
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        variants={SVG_VARIANTS}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </motion.svg>
    </div>
  );
};

export { MoonIcon };
