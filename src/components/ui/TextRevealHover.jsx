import { motion } from "framer-motion";

function TextRevealHover({
  word,
  className = "",
  hoverColor = "text-accent-amber", 
}) {
  const chars = word.split("");
  const staggerAmount = 0.2;

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`relative inline-flex cursor-pointer overflow-hidden leading-none ${className}`}
    >
      
      <span className="sr-only">{word}</span>

      <span aria-hidden="true" className="flex">
        {chars.map((char, index) => {
          const delay = index * (staggerAmount / chars.length);
          const transition = {
            duration: 0.4,
            ease: [0.64, 0.04, 0.35, 1], // Exact match for GSAP power3.inOut
            delay,
          };

          return (
            <span key={index} className="relative inline-block">
              
              <motion.span
                className="inline-block"
                variants={{
                  rest: { y: "0%" },
                  hover: { y: "-100%" },
                }}
                transition={transition}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>

              
              <motion.span
                className={`absolute top-full left-0 inline-block ${hoverColor}`}
                variants={{
                  rest: { y: "0%" },
                  hover: { y: "-100%" },
                }}
                transition={transition}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          );
        })}
      </span>
    </motion.div>
  );
}

export default TextRevealHover;
