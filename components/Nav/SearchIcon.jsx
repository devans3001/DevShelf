"use client";

import { Search } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import { useView } from "@/hooks/useView";

export function SearchTrigger({ onClick }) {
  const { md } = useView();
  const scale = useMotionValue(1);
  const rotate = useMotionValue(0);
  const backgroundOpacity = useMotionValue(0.8);
  const boxShadow = useMotionTemplate`0 2px 8px rgba(0,0,0,${useMotionValue(
    0.1
  )})`;

  // Gentle breathing animation
  useEffect(() => {
    const breathing = animate(backgroundOpacity, [0.8, 0.9], {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    });
    return () => breathing.stop();
  }, []);

  return (
    <motion.div
      className="flex items-center gap-2 border px-4 py-2 rounded-full cursor-pointer bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm w-full max-w-md"
      onClick={onClick}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        scale,
        rotate,
        backgroundOpacity,
        boxShadow,
      }}
      onHoverStart={() => {
        animate(scale, 1.03, { duration: 0.2 });
        animate(rotate, [0, 2, -2, 0], { duration: 0.8 });
      }}
      onHoverEnd={() => {
        animate(scale, 1, { duration: 0.3 });
      }}
    >
      <motion.div
        animate={{
          x: [-1, 1, -1],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <Search
          className={`${md ? "w-4 h-4" : "w-6 h-6"}text-muted-foreground`}
        />
      </motion.div>
      {md && (
        <motion.span
          className="text-sm text-muted-foreground flex-1"
          initial={{ opacity: 0.9 }}
          animate={{
            opacity: [0.9, 1, 0.9],
            transition: {
              duration: 2,
              repeat: Infinity,
            },
          }}
        >
          Search docs...
        </motion.span>
      )}

      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-xs font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </motion.div>
    </motion.div>
  );
}
