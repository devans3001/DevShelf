

"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function FeatureCard({ feature, index }) {
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const glow = glowRef.current;
    if (!glow) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.transform = `translate(${x}px, ${y}px)`;
    glow.style.opacity = 1;
  };

  const hideGlow = () => {
    if (glowRef.current) {
      glowRef.current.style.opacity = 0;
    }
  };

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group cursor-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={hideGlow}
    >
      {/* Glowing Cursor Light */}
      <motion.div
        ref={glowRef}
        className="absolute pointer-events-none w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full glow opacity-0 group-hover:block"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Card Content */}
      <Card className="h-full glass hover:shadow-2xl transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/10">
              {feature.icon}
            </div>
            <CardTitle>{feature.title}</CardTitle>
          </div>
          <CardDescription>{feature.description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
