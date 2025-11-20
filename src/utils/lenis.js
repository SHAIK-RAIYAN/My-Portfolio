import { useEffect } from "react";
import Lenis from "lenis";

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.04 });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);
};

export default useLenisScroll;
