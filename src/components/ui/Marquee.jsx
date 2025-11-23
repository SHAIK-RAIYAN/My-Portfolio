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
      className="flex overflow-hidden whitespace-nowrap bg-black py-4">
      <h1 className="marquee-part min-w-full px-4 text-9xl font-black uppercase text-white">
        Simple Infinite Marquee
      </h1>
      <h1 className="marquee-part min-w-full px-4 text-9xl font-black uppercase text-white">
        Simple Infinite Marquee
      </h1>
    </div>
  );
}

export default Marquee;
