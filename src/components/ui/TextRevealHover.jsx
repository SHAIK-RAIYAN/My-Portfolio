import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText);

function TextRevealHover({
  word,
  className = "",
  hoverColor = "text-yellow-400",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let ctx;
    const initAnimation = () => {
      ctx = gsap.context(() => {
        const target = containerRef.current;
        const split = new SplitText(target.querySelectorAll("span"), {
          type: "chars",
          charsClass: "inline-block",
        });

        const tl = gsap.timeline({
          paused: true,
          defaults: { ease: "power3.inOut", duration: 0.4 },
        });

        tl.to(split.chars, {
          yPercent: -100, //in production 100 is correct
          stagger: { amount: 0.3 },
        });

        target.addEventListener("mouseenter", () => tl.play());
        target.addEventListener("mouseleave", () => tl.reverse());
      }, containerRef);
    };

    document.fonts.ready.then(() => initAnimation());

    return () => ctx && ctx.revert();
  }, [word]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-pointer inline-flex flex-col leading-none ${className}`}>
      <span>{word}</span>
      <span className={`hover-text absolute top-full left-0 ${hoverColor}`}>
        {word}
      </span>
    </div>
  );
}

export default TextRevealHover;
