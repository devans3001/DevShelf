// components/pro-footer.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Moon,
  Sun,
  Github,
  Twitter,
  Coffee,
  Code2,
  BookOpen,
  LifeBuoy,
  Terminal,
  Zap,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useThemeDetector } from "@/hooks/useThemeDetector";
import ExternalLink from "./ExternalLink";

export function Footer() {
  const { mounted,theme, setTheme } = useThemeDetector()
 
  //  if (!mounted) {
  //    return (
  //      <div className="relative flex items-center rounded-full bg-muted p-1">
  //        <button className={` text-muted-foreground`} disabled>
  //          <Sun className="h-[1.2rem] w-[1.2rem]" />
  //        </button>
  //      </div>
  //    )
  //  }

  const resources = [
    { name: "Documentation", href: "/docs", icon: BookOpen },
    { name: "API Reference", href: "/api", icon: Code2 },
    { name: "CLI", href: "/cli", icon: Terminal },
    { name: "Quickstart", href: "/docs/getting-started", icon: Zap },
  ];

  const community = [
    {
      name: "GitHub",
      href: "https://github.com/devans3001",
      icon: Github,
    },
    { name: "Twitter", href: "https://x.com/devansvibes", icon: Twitter },
    { name: "Discord", href: "https://discord.gg/yourinvite", icon: LifeBuoy },
  ];

  return (
    <footer className="bg-background border-t mt-16 bottom-sentinel">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 px-4">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            DevShelf
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            The developer's toolkit for accelerating workflows.
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/devans3001"
                target="_blank"
              >
                <Github className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
            Resources
          </h4>
          <ul className="space-y-3">
            {resources.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
            Community
          </h4>
          <ul className="space-y-3">
            {community.map((item) => (
              <li key={item.name}>
                <ExternalLink
                  href={item.href}
                  className="text-sm flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
            Support
          </h4>
          <div className="space-y-4">
       
              <a href="https://www.buymeacoffee.com/devans3001e" target="_blank">
              
                <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=devans3001e&button_colour=BD5FFF&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=FFDD00" />
              </a>
          </div>
        </div>
      </div>

      <div className="w-full py-6 px-3">
        <Separator className="mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevShelf. Open-source MIT Licensed.
          </p>
          <div className="flex gap-4 text-sm">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="/changelog"
              className="text-muted-foreground hover:text-primary"
            >
              Changelog
            </Link>
            <span className="text-muted-foreground">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
