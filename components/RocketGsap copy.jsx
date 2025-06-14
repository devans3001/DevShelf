"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export default function DevShelf() {
  const svgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { duration: 3, ease: "power1.inOut" },
    });

    tl.set(svgRef.current, { opacity: 1 })
      .from(svgRef.current.querySelectorAll("path"), { drawSVG: "0% 0%",stagger:0.7 })
      .to(svgRef.current.querySelectorAll("path"), { drawSVG: "100% 100%",stagger:.6 });
  }, []);

  return (
    <div className="container">
      <svg
        id="svg-stage"
        ref={svgRef}
        viewBox="0 0 210 40"
        strokeWidth="2.2"
        fill="none"
        opacity="0"
      >
        <defs>
          <linearGradient
            id="grad-1"
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.2" stopColor="rgb(255,135,9)" />
            <stop offset="0.8" stopColor="rgb(247,189,248)" />
          </linearGradient>
        </defs>

        {/* D */}
        <g transform="translate(0,0)">
          <path stroke="url(#grad-1)" d="M3,3 L24,3 L24,36 L3,36 M6,3 L6,36" />
        </g>

        {/* e */}
        <g transform="translate(30,0)">
          <path
            stroke="url(#grad-1)"
            d="M24,3 L3,3 L3,36 L24,36 M3,20 L20,20"
          />
        </g>

        {/* v */}
        <g transform="translate(60,0)">
          <path stroke="url(#grad-1)" d="M3,3 L14,36 L24,3" />
        </g>

        {/* S */}
        <g transform="translate(90,0)">
          <path
            stroke="url(#grad-1)"
            d="M24,3 H6 Q3,3 3,6 V15 Q3,18 6,18 H18 Q21,18 21,21 V30 Q21,33 18,33 H3"
          />
        </g>

        {/* h */}
        <g transform="translate(120,0)">
          <path
            stroke="url(#grad-1)"
            d="M3,3 V36 M3,20 Q6,20 9,20 Q15,20 15,28 V36"
          />
        </g>

        {/* e */}
        <g transform="translate(150,0)">
          <path
            stroke="url(#grad-1)"
            d="M24,3 L3,3 L3,36 L24,36 M3,20 L20,20"
          />
        </g>

        {/* l */}
        <g transform="translate(180,0)">
          <path stroke="url(#grad-1)" d="M12,3 V36" />
        </g>

        {/* f */}
        <g transform="translate(195,0)">
          <path stroke="url(#grad-1)" d="M15,3 H6 Q3,3 3,6 V36 M3,18 H12" />
        </g>
      </svg>

      <style jsx>{`
        .container {
          position: relative;
          height: 150px; /* 👈 sweet spot between 200–300px */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center; /* 👈 centers the SVG vertically */
          border-radius: 9px;
          /* background:blue; */
        }

        #svg-stage {
          width: 100%;
          max-width: 500px; /* 👈 slightly tighter for a hero */
          height: auto;
          overflow: visible;
        }
      `}</style>
    </div>
  );
}
