"use client";

// components/BlobHero.js
import { useEffect, useRef } from "react";
import { Rocket } from "lucide-react";

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP, MotionPathPlugin);

// components/BlobHero.js
export default function BlobHero() {
  const rectRef = useRef(null);
  const rocketRef = useRef(null);

  useGSAP(() => {
    gsap.to(rocketRef.current, {
      duration: 8,
      repeat: -1,
      ease: "none",
      motionPath: {
        path: "#motion-path",
        align: "#motion-path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
  });

  return (
    <div className="flex items-center justify-center h-[20dvh] bg-[#0e100f] overflow-hidden">
      <svg
        className="w-[40%] max-w-[750px] overflow-visible h-full"
        viewBox="-4 -4 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="grad-1"
            x1="-4"
            y1="-4"
            x2="9"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.2" stopColor="rgb(255, 135, 9)" />
            <stop offset="0.5" stopColor="rgb(247, 189, 248)" />
          </linearGradient>
        </defs>

        {/* motion path */}
        <path
          id="motion-path"
          stroke="none"
          fill="none"
          d="M50.5 50.5h50v50s-19.2 1.3-37.2-16.7S56 35.4 35.5 15.5C18.5-1 .5.5.5.5v50h50s25.6-.6 38-18 12-32 12-32h-50v100H.5S.2 80.7 11.8 68.2 40 49.7 50.5 50.5Z"
        />

        {/* Rocket icon (animated) */}
        <foreignObject
          ref={rocketRef}
          x="-12"
          y="-12"
          width="24"
          height="24"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <Rocket size={24} className="text-red-400" />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
