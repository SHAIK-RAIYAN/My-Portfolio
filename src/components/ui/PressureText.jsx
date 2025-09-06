"use client";

import React, { useEffect, useRef, useState } from "react";

const FONT_FAMILY = `"Roboto-Flex", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;

const PressureText = ({
  text = "Compressa",
  fontFamily = FONT_FAMILY,
  width = true,
  weight = true,
  italic = true,
  alpha = false,
  flex = true,
  stroke = false,
  scale = false,
  textColor = "#FFFFFF",
  strokeColor = "#FF0000",
  strokeWidth = 2,
  className = "",
  minFontSize = 28,
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);
  const [fontReady, setFontReady] = useState(false);

  const chars = text.split("");

  useEffect(() => {
    spansRef.current = [];
  }, [text]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = (e) => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    if (containerRef.current) {
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const setSize = () => {
    if (!containerRef.current || !titleRef.current) return;
    const { width: containerW, height: containerH } =
      containerRef.current.getBoundingClientRect();
    let newFontSize = containerW / Math.max(1, chars.length / 2);
    newFontSize = Math.max(newFontSize, minFontSize);
    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);
    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();
      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }
    });
  };

  useEffect(() => {
    setSize();
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scale, text, fontReady]);

  // Wait for the self-hosted font to load
  useEffect(() => {
    let cancelled = false;
    const waitForFont = async () => {
      try {
        if (
          typeof document !== "undefined" &&
          document.fonts &&
          document.fonts.load
        ) {
          // ask browser to load the named family we provided in @font-face
          await document.fonts.load(`1em ${fontFamily}`);
          await document.fonts.ready;
        }
      } catch (e) {
        // ignore
      }
      if (!cancelled) {
        setFontReady(true);
        requestAnimationFrame(setSize);
        // small delay then log computed family for debugging
        setTimeout(() => {
          if (spansRef.current && spansRef.current[0]) {
            // eslint-disable-next-line no-console
          }
        }, 80);
      }
    };
    waitForFont();
    return () => {
      cancelled = true;
    };
  }, [fontFamily]);

  // animation loop
  useEffect(() => {
    let rafId = null;

    // tweak these to match your font's supported ranges if known
    const wdthMin = 5; // extremely condensed (try 1..20)
    const wdthMax = 200; // expanded
    const wghtMin = 1; // extremely thin
    const wghtMax = 1000; // heavy
    const slntMin = -12;
    const slntMax = 0;

    const dist = (a, b) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const mapNearToFar = (distance, maxDist, minVal, maxVal) => {
      const t = Math.max(0, Math.min(1, 1 - distance / maxDist));
      return minVal + t * (maxVal - minVal);
    };

    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = Math.max(1, titleRect.width / 2);

        spansRef.current.forEach((span) => {
          if (!span) return;
          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
          };
          const d = dist(mouseRef.current, charCenter);

          const wdth = width
            ? Math.round(mapNearToFar(d, maxDist, wdthMin, wdthMax))
            : 100;
          const wght = weight
            ? Math.round(mapNearToFar(d, maxDist, wghtMin, wghtMax))
            : 400;
          const slntVal = italic
            ? mapNearToFar(d, maxDist, slntMin, slntMax).toFixed(2)
            : "0";
          const alphaVal = alpha
            ? mapNearToFar(d, maxDist, 0, 1).toFixed(2)
            : "1";

          span.style.opacity = alphaVal;
          span.style.fontVariationSettings = `"wght" ${wght}, "wdth" ${wdth}, "slnt" ${slntVal}`;
          span.style.willChange = "font-variation-settings, opacity";
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    if (fontReady) animate();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [width, weight, italic, alpha, chars.length, fontReady]);

  // very thin / condensed baseline applied to element and spans
  const baseline = `"wght" 5, "wdth" 8, "slnt" 0`;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-transparent">
      <style>{`
        .stroke span { position: relative; color: ${textColor}; }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: ${strokeWidth}px;
          -webkit-text-stroke-color: ${strokeColor};
        }
      `}</style>

      <h1
        ref={titleRef}
        className={`text-pressure-title ${className} ${
          flex ? "flex justify-between" : ""
        } ${stroke ? "stroke" : ""} uppercase text-center`}
        style={{
          fontFamily,
          fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: "center top",
          margin: 0,
          color: stroke ? undefined : textColor,
          letterSpacing: 0,
          fontVariationSettings: baseline,
          WebkitFontVariationSettings: baseline,
        }}>
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => (spansRef.current[i] = el)}
            data-char={char}
            className="inline-block"
            style={{
              display: "inline-block",
              fontVariationSettings: baseline,
              WebkitFontVariationSettings: baseline,
            }}>
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default PressureText;
