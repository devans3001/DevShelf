"use client";

import Link from "next/link";
import { ModeToggle } from "../ThemeMode";
import Logo from "@/assets/logo";
import { motion, useScroll, useTransform } from "framer-motion";
import SearchBar from "./SearchBar";
import Routes from "./Routes";
import { useView } from "@/hooks/useView";
import { useLayoutEffect, useRef, useState } from "react";
import { useNavbarHeight } from "@/hooks/NavbarHeightContext";

export function Navbar() {
 

  const { navbarHeight, setNavbarHeight } = useNavbarHeight();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 100], [0, -5]);
const {lg} = useView()
const navRef = useRef(null)

useLayoutEffect(() => {
    if (navRef.current) {
      setNavbarHeight(navRef.current.offsetHeight);
    }
  }, [setNavbarHeight]);
  
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full border-b-2"
      ref={navRef}
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 w-full h-full overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[3%] dark:opacity-[1%] noise-texture" />

        <div className="absolute inset-0 bg-white/70 dark:bg-black/50 backdrop-blur-sm border-b border-gray-200/20 dark:border-gray-800/20">
          <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_0_15px_rgba(255,255,255,0.03)]" />
        </div>
      </motion.div>

      <div className=" mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <motion.div whileHover={{ rotate: 10 }}>
                <Logo/>
              </motion.div>
              <motion.p
                className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent text-3xl"
                whileHover={{ scale: 1.05 }}
              >
                DevShelf
              </motion.p>
            </Link>

            <Routes view={lg}/>
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
