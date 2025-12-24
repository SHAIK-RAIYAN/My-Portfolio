import gsap from "gsap";
import { useEffect, useRef } from "react";

function Marquee() {
  const container = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-part", {
        xPercent: -100,
        repeat: -1,
        duration: 10,
        ease: "none",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="flex overflow-hidden bg-black py-4 whitespace-nowrap"
    >
      <h1 className="marquee-part min-w-full px-4 text-9xl font-black text-white uppercase">
        Simple Infinite Marquee
      </h1>
      <h1 className="marquee-part min-w-full px-4 text-9xl font-black text-white uppercase">
        Simple Infinite Marquee
      </h1>
    </div>
  );
}

export default Marquee;
