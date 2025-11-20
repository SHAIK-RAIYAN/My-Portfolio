import gsap from "gsap";
import { useEffect, useRef } from "react";

function String() {
  const svgRef = useRef();
  const pathRef = useRef();

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    const getWidth = () => svg.clientWidth; //getting SVG container width

    const handleMouseMove = (event) => {
      const width = getWidth();
      const svgPos = svg.getBoundingClientRect();

      const newXvalue = event.clientX - svgPos.left;
      const newYvalue = event.clientY - svgPos.top;

      const newPathDvalue = `M 0 150 Q ${newXvalue} ${newYvalue} ${width} 150`;

      gsap.to(path, {
        attr: { d: newPathDvalue },
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleResize = () => {
      const width = getWidth();
      gsap.set(path, {
        attr: { d: `M 0 150 Q ${width / 2} 150 ${width} 150` },
      });
    };

    const handleMouseLeave = () => {
      const width = getWidth();
      gsap.to(path, {
        attr: { d: `M 0 150 Q ${width / 2} 150 ${width} 150` },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
      });
    };

    svg.addEventListener("mousemove", handleMouseMove);
    svg.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <svg ref={svgRef} className="w-full h-[300px] overflow-visible">
      <path
        ref={pathRef}
        d="M 0 150 Q 250 150 500 150"
        stroke="#9aa1ae"
        fill="transparent"
      />
    </svg>
  );
}

export default String;
