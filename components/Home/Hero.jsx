"use client"
import { motion } from 'framer-motion';
import { Rocket, Code, Zap } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

function Hero() {
    const { theme,systemTheme } = useTheme();
    const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark")

  const backgroundStyle = {
    backgroundImage: `linear-gradient(67.5deg, rgb(6, 6, 6) 0%, rgb(6, 6, 6) 6%,rgb(29, 29, 29) 6%, rgb(29, 29, 29) 57%,rgb(52, 52, 52) 57%, rgb(52, 52, 52) 58%,rgb(75, 75, 75) 58%, rgb(75, 75, 75) 79%,rgb(97, 97, 97) 79%, rgb(97, 97, 97) 93%,rgb(120, 120, 120) 93%, rgb(120, 120, 120) 95%,rgb(143, 143, 143) 95%, rgb(143, 143, 143) 100%),linear-gradient(90deg, rgb(6, 6, 6) 0%, rgb(6, 6, 6) 6%,rgb(29, 29, 29) 6%, rgb(29, 29, 29) 57%,rgb(52, 52, 52) 57%, rgb(52, 52, 52) 58%,rgb(75, 75, 75) 58%, rgb(75, 75, 75) 79%,rgb(97, 97, 97) 79%, rgb(97, 97, 97) 93%,rgb(120, 120, 120) 93%, rgb(120, 120, 120) 95%,rgb(143, 143, 143) 95%, rgb(143, 143, 143) 100%),linear-gradient(135deg, rgb(6, 6, 6) 0%, rgb(6, 6, 6) 6%,rgb(29, 29, 29) 6%, rgb(29, 29, 29) 57%,rgb(52, 52, 52) 57%, rgb(52, 52, 52) 58%,rgb(75, 75, 75) 58%, rgb(75, 75, 75) 79%,rgb(97, 97, 97) 79%, rgb(97, 97, 97) 93%,rgb(120, 120, 120) 93%, rgb(120, 120, 120) 95%,rgb(143, 143, 143) 95%, rgb(143, 143, 143) 100%),linear-gradient(0deg, rgb(6, 6, 6) 0%, rgb(6, 6, 6) 6%,rgb(29, 29, 29) 6%, rgb(29, 29, 29) 57%,rgb(52, 52, 52) 57%, rgb(52, 52, 52) 58%,rgb(75, 75, 75) 58%, rgb(75, 75, 75) 79%,rgb(97, 97, 97) 79%, rgb(97, 97, 97) 93%,rgb(120, 120, 120) 93%, rgb(120, 120, 120) 95%,rgb(143, 143, 143) 95%, rgb(143, 143, 143) 100%),linear-gradient(90deg, rgb(8, 8, 8),rgb(221, 221, 221))
    `,
    backgroundBlendMode:"overlay"
  };
  const animatedBackground = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 1.5 }
  },
  hover: {
    backgroundPosition: ['0% 0%', '100% 100%'],
    transition: { duration: 10, repeat: Infinity, ease: 'linear' }
  }
};

  return (
    <motion.section 
      className="relative overflow-hidden container mx-auto px-4 py-32 md:py-40"
      style={backgroundStyle}
       variants={animatedBackground}
  initial="initial"
  animate="animate"
  whileHover="hover"
    >
      {/* Semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/70"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-4xl mx-auto text-center z-10"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full mb-6 border border-border/50"
        >
          <Rocket className="w-4 h-4" />
          <span className="text-sm font-medium">Developer Productivity Toolkit</span>
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Supercharge Your Development Workflow
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/90 mb-10 max-w-3xl mx-auto">
          DevShelf is your curated collection of essential tools, snippets, and templates. 
          Save hours of setup and research time with our developer-focused resources.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/docs">
            <Button className="text-base px-8 py-6 group" size="lg">
              <Zap className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Get Started
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" className="text-base px-8 py-6 group" size="lg">
              <Code className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Explore Tools
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Hero;