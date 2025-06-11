"use client";

import { motion } from "framer-motion";

import React from "react";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Routes({ view }) {
  const pathname = usePathname();

  const routes = [
    { name: "Explore Docs", path: "/docs" },
    { name: "Blog", path: "/blog" },
    { name: "Showcase", path: "https://www.w3schools.com/" },
  ];
  return (
    <>
      {view && routes.map((ele) => {
        if (ele.name.toLocaleLowerCase() === "showcase") {
          return (
            <a
              href={`${ele.path}`}
              target="_blank"
              key={ele.name}
              className="relative"
            >
              <Button
                variant="ghost"
                className={`text-sm relative transition-all cursor-pointer text-muted-foreground hover:text-foreground `}
              >
                {ele.name}
              </Button>
              <MoveUpRight
                size={5}
                className="absolute right-0 top-0 w-3 h-3 text-muted-foreground"
              />
            </a>
          );
        }

        return (
          <Link href={ele.path} key={ele.name}>
            <Button
              variant="ghost"
              className={`text-sm relative transition-all cursor-pointer ${
                pathname.startsWith(ele.path)
                  ? "text-primary dark:text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {ele.name}
              {pathname.startsWith(ele.path) && (
                <motion.div
                  layoutId="nav-active-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </Button>
          </Link>
        );
      })}
    </>
  );
}

export default Routes;
