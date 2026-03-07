import { motion } from "framer-motion";
import { cn } from "./../../utils/cn";

const PATH_VARIANTS = {
  normal: { opacity: 1 },
  animate: (i) => ({
    opacity: [0.1, 1, 0.1],
    transition: {
      delay: i * 0.1,
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const SunIcon = ({ isHovered, className, size = 20, ...props }) => {
  return (
    <div className={cn(className)} {...props}>
      <svg
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="4" />
        {[
          "M12 3v1",
          "M12 20v1",
          "M3 12h1",
          "M20 12h1",
          "m18.364 5.636-.707.707",
          "m6.343 17.657-.707.707",
          "m5.636 5.636.707.707",
          "m17.657 17.657.707.707",
        ].map((d, index) => (
          <motion.path
            animate={isHovered ? "animate" : "normal"}
            custom={index + 1}
            d={d}
            key={d}
            initial="normal"
            variants={PATH_VARIANTS}
          />
        ))}
      </svg>
    </div>
  );
};

export { SunIcon };
