import { useEffect } from "react";
import Lenis from "lenis";

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.03 });

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
