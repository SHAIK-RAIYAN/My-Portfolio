import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

function WordAppear({ word, className = "" }) {
  const h1Ref = useRef(null);

  useEffect(() => {
    if (!h1Ref.current) return;

    let ctx;

    const initAnimation = () => {
      ctx = gsap.context(() => {
        const split = new SplitText(h1Ref.current, {
          type: "lines,words,chars",
          linesClass: "overflow-hidden",
        });

        // Animate
        gsap.from(split.chars, {
          y: 80,
          opacity: 0,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: h1Ref.current,
            start: "top 90%",
            end: "top 70%",
            markers: true,
            scrub: 1,
          },
        });
      }, h1Ref);
    };

    // Wait for fonts to load - this font loading caused a bug bro
    document.fonts.ready.then(() => {
      initAnimation();
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, [word]);

  return (
    <h1 ref={h1Ref} className={`${className}`}>
      {word}
    </h1>
  );
}

export default WordAppear;
