import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WordAppear({ word, className = "" }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 70%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    mass: 0.5,
    stiffness: 100,
  });

  const chars = typeof word === "string" ? word.split("") : [];
  const totalChars = chars.length || 1;

  return (
    <h1 ref={containerRef} className={className}>
      <span style={{ display: "block", overflow: "hidden" }}>
        {chars.map((char, index) => {
          const start = (index / totalChars) * 0.5;
          const end = start + 0.5;

          const y = useTransform(smoothProgress, [start, end], [80, 0]);
          const opacity = useTransform(smoothProgress, [start, end], [0, 1]);

          return (
            <motion.span
              key={index}
              style={{
                y,
                opacity,
                display: "inline-block",
                willChange: "transform, opacity",
                whiteSpace: "pre",
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </span>
    </h1>
  );
}
