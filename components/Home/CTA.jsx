"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

const ROTATION_RANGE = 60;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

function CTA() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY / height) * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1;
    const rY = (mouseX / width) * ROTATION_RANGE - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="container mx-auto px-4 py-32">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          transformStyle: "preserve-3d",
        }}
        className="rounded-3xl bg-gradient-to-r from-primary to-purple-600 p-12 text-center shadow-xl transition-transform duration-300"
      >
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(40px)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who save hours every week with DevShelf's curated resources.
          </p>
          <Link href="/docs">
            <Button
              variant="secondary"
              className="text-base px-8 py-6 font-medium"
              size="lg"
            >
              Explore DevShelf
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;
