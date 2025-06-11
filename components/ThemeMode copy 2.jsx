"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const TOGGLE_CLASSES = "text-sm font-medium flex items-center gap-2 px-3 py-3 transition-colors relative z-10"

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative flex w-fit items-center rounded-full bg-muted p-1">
        <button className={`${TOGGLE_CLASSES} text-muted-foreground`} disabled>
          <Sun className="h-[1.2rem] w-[1.2rem]" />
          <span>Light</span>
        </button>
      </div>
    )
  }

  const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark")

  return (
    <div className="relative flex w-fit items-center rounded-full bg-muted p-1">
      <button
        className={`${TOGGLE_CLASSES} ${!isDark ? "text-white" : "text-muted-foreground"}`}
        onClick={() => setTheme("light")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span>Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${isDark ? "text-background" : "text-muted-foreground"}`}
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
        <span>Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${isDark ? "justify-end" : "justify-start"}`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-primary"
        />
      </div>
    </div>
  )
}