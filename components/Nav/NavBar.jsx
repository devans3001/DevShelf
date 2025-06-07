"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ThemeMode";
import Logo from "@/assets/logo";
import { motion, useScroll, useTransform } from "framer-motion";
import SearchBar from "./SearchBar";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 100], [0, -5]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full border-b-2"
    >
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 w-full h-full overflow-hidden"
      >
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[3%] dark:opacity-[1%] noise-texture" />
        
        {/* Base glass layer with edge glow */}
        <div className="absolute inset-0 bg-white/70 dark:bg-black/50 backdrop-blur-sm border-b border-gray-200/20 dark:border-gray-800/20">
          {/* Prism edge glow effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_0_15px_rgba(255,255,255,0.03)]" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <motion.div whileHover={{ rotate: 10 }}>
                <Logo />
              </motion.div>
              <motion.p 
                className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.2 }}
              >
                DevShelf
              </motion.p>
            </Link>

            {pathname !== "/docs" && (
              <Link href="/docs">
                <Button 
                  variant="ghost" 
                  className="text-sm border border-gray-200/40 dark:border-gray-800/40 hover:bg-gray-100/20 dark:hover:bg-gray-800/20 transition-all"
                >
                  Explore Docs
                </Button>
              </Link>
            )}
          </div>

          <div className="flex items-center gap-4">
            <SearchBar />
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Global CSS for noise texture */}
      <style jsx global>{`
        .noise-texture {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' /%3E%3C/svg%3E");
        }
      `}</style>
    </motion.header>
  );
}