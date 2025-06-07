"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ThemeMode";
import Logo from "@/assets/logo";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full"
    >
      {/* Full-width prism container */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        {/* Base glass layer */}
        <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-800/30" />
        
        {/* Prism refraction lines */}
        <div className="absolute inset-0 overflow-hidden">
          {/* <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-300/50 to-transparent dark:via-gray-600/30" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-300/50 to-transparent dark:via-gray-600/30" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-gray-300/50 to-transparent dark:via-gray-600/30" /> */}
        </div>
      </div>

      {/* Nav content */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <motion.div whileHover={{ rotate: 10 }}>
                <Logo />
              </motion.div>
             <motion.p 
                  className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  DevShelf
                </motion.p>
            </Link>

            {pathname !== "/docs" && (
              <Link href="/docs">
                <Button 
                  variant="ghost" 
                  className="text-sm border border-gray-200/50 dark:border-gray-800/50 hover:bg-gray-100/30 dark:hover:bg-gray-800/30"
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
    </motion.header>
  );
}