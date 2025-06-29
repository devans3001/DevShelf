"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Image from "next/image";

const techs = [
  {
    name: "Next JS",
    url: "https://nextjs.org",
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png",
  },
  {
    name: "Tailwind css",
    url: "https://tailwindcss.com",
    icon: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  },
  {
    name: "Shadcn Ui",
    url: "https://ui.shadcn.com",
    icon: "https://ui.shadcn.com/apple-touch-icon.png",
  },
  {
    name: "Mdx",
    url: "https://mdxjs.com",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF42VqA7bGqDTDSjPL52bmYhbKyf4N4kUprg&s",
  },
  {
    name: "Framer Motion",
    url: "https://www.framer.com/motion/",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCq5gse3kEA76gI2S7FHh4TGq6-jE3nGlPQg&s",
  },
  {
    name: "TanStack Query",
    url: "https://tanstack.com/query",
    icon: "https://tanstack.com/assets/logo-color-100w-br5_Ikqp.png",
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/Vercel.png",
  },
];

function TechStack() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className="py-8">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {techs.map((tech, index) => (
            <motion.a
              key={tech.name}
              target="_blank"
              href={tech.url}
              initial={{ y: 0 }}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 1.5 + Math.random() * 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.1 }}
            >
              <Tooltip>
                <TooltipTrigger>
                  <Badge
                    variant="outline"
                    className="px-4 py-2 h-[50px] flex items-center gap-2 text-sm cursor-pointer dark:bg-muted-foreground"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="flex-1"
                    />
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
