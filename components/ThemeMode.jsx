"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Monitor } from "lucide-react"
import { useThemeDetector } from "@/hooks/useThemeDetector"

const TOGGLE_CLASSES = "relative z-10 flex items-center justify-center w-10 h-10 rounded-full"

export function ModeToggle() {
 const { mounted,theme, setTheme, systemTheme } = useThemeDetector()

  if (!mounted) {
    return (
      <div className="relative flex items-center rounded-full bg-muted p-1">
        <button className={`${TOGGLE_CLASSES} text-muted-foreground`} disabled>
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </button>
      </div>
    )
  }

  const getPosition = () => {
    switch (theme) {
      case "light": return 0
      case "system": return 1
      case "dark": return 2
      default: return systemTheme === "dark" ? 2 : 0
    }
  }

  const positions = [
    { theme: "light", icon: <Sun className="h-[1.2rem] w-[1.2rem]" /> },
    { theme: "system", icon: <Monitor className="h-[1.2rem] w-[1.2rem]" /> },
    { theme: "dark", icon: <Moon className="h-[1.2rem] w-[1.2rem]" /> }
  ]

  return (
    <div className="relative flex items-center gap-1 rounded-full bg-muted p-1">
      <motion.div
        className="absolute left-0 z-0 h-10 w-10 rounded-full bg-primary"
        initial={false}
        animate={{
          x: `${getPosition() * 120}%`
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      />
      
      {positions.map((pos, index) => (
        <button
          key={pos.theme}
          className={`${TOGGLE_CLASSES} ${
            theme === pos.theme ? "text-primary-foreground" : "text-muted-foreground"
          }`}
          onClick={() => setTheme(pos.theme)}
        >
          {pos.icon}
          <span className="sr-only">{pos.theme}</span>
        </button>
      ))}
    </div>
  )
}