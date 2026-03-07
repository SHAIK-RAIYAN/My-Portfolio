import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TextAppear({ children, className = "" }) {
  const containerRef = useRef(null);
  const [lineMapping, setLineMapping] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const calculateLines = () => {
      const spans = Array.from(containerRef.current.children);
      let currentY = -1;
      let currentLine = -1;

      const mapping = spans.map((span) => {
        const y = span.offsetTop;
        if (y !== currentY) {
          currentY = y;
          currentLine++;
        }
        return currentLine;
      });

      setLineMapping(mapping);
    };

    const observer = new ResizeObserver(() => {
      calculateLines();
    });

    observer.observe(containerRef.current);
    calculateLines();

    return () => observer.disconnect();
  }, [children]);

  if (typeof children !== "string") {
    return <div className={className}>{children}</div>;
  }

  const words = children.split(" ");

  const wordVariants = {
    hidden: { y: "100%" },
    visible: (lineIndex) => ({
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: lineIndex * 0.2,
      },
    }),
  };

  return (
    <motion.div
      ref={containerRef}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
    >
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            marginRight: index !== words.length - 1 ? "0.25em" : "0",
          }}
        >
          <motion.span
            custom={lineMapping[index] || 0}
            variants={wordVariants}
            style={{ display: "inline-block", willChange: "transform" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
