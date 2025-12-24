import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextAppear({ children, className = "" }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      let childSplit;
      let parentSplit;

      const initAnimation = () => {
        if (childSplit) childSplit.revert();
        if (parentSplit) parentSplit.revert();

        // splits
        childSplit = new SplitText(container, {
          type: "lines",
          linesClass: "split-child",
        });

        parentSplit = new SplitText(container, {
          type: "lines",
          linesClass: "split-parent overflow-hidden",
        });

        // Animate
        gsap.from(childSplit.lines, {
          yPercent: 100,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      };

      // Wait for fonts to be ready before splitting - this font loading caused a big bug bro!!
      document.fonts.ready.then(() => {
        initAnimation();
      });

      // what if user resizes window
      const handleResize = () => {
        initAnimation(); //so run animation again
      };

      let resizeTimeout;
      const debouncedResize = () => {
        //some chatgpt code for performance hits
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 100);
      };

      window.addEventListener("resize", debouncedResize);

      return () => {
        window.removeEventListener("resize", debouncedResize);
        if (childSplit) childSplit.revert();
        if (parentSplit) parentSplit.revert();
      };
    },
    { scope: containerRef, dependencies: [children] },
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
